import express from 'express';
import cors from 'cors';
import midtransClient from 'midtrans-client';
import crypto from 'crypto';

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// Helper to initialize Midtrans Snap dynamically from Environment Variables
function getSnapInstance() {
  const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
  const clientKey = process.env.MIDTRANS_CLIENT_KEY || '';
  const isProduction = process.env.MIDTRANS_IS_PRODUCTION === 'true';

  return new midtransClient.Snap({
    isProduction,
    serverKey,
    clientKey
  });
}

// In-memory payment log
const paymentLog = new Map();

// Plan configurations
const PLANS = {
  monthly: {
    name: 'Paket Bulanan — Kampus Kreator AI Pro',
    price: 99000,
    durationDays: 30
  },
  yearly: {
    name: 'Paket Tahunan — Kampus Kreator AI Pro',
    price: 699000,
    durationDays: 365
  },
  lifetime: {
    name: 'Akses Seumur Hidup — Kampus Kreator AI Pro',
    price: 1499000,
    durationDays: null
  }
};

// Handler function for transaction creation
async function handleCreateTransaction(req, res) {
  try {
    const { plan, customerName, customerEmail } = req.body;

    if (!plan || !PLANS[plan]) {
      return res.status(400).json({ 
        error: 'Invalid plan. Choose: monthly, yearly, or lifetime' 
      });
    }

    const planConfig = PLANS[plan];
    const orderId = `KKA-${plan.toUpperCase()}-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;
    const snap = getSnapInstance();

    const frontendUrl = process.env.FRONTEND_URL || (req.headers.origin || `https://${req.headers.host}`);

    const transactionParams = {
      transaction_details: {
        order_id: orderId,
        gross_amount: planConfig.price
      },
      item_details: [{
        id: `plan-${plan}`,
        price: planConfig.price,
        quantity: 1,
        name: planConfig.name
      }],
      customer_details: {
        first_name: customerName || 'Kreator',
        email: customerEmail || 'kreator@kampuskreatorai.com'
      },
      callbacks: {
        finish: `${frontendUrl}?payment=success&order_id=${orderId}`
      }
    };

    const transaction = await snap.createTransaction(transactionParams);

    paymentLog.set(orderId, {
      orderId,
      plan,
      amount: planConfig.price,
      status: 'pending',
      createdAt: new Date().toISOString(),
      token: transaction.token
    });

    console.log(`✅ Transaction created: ${orderId} | Plan: ${plan} | Amount: Rp ${planConfig.price.toLocaleString()}`);

    res.json({
      token: transaction.token,
      redirect_url: transaction.redirect_url,
      orderId,
      plan,
      amount: planConfig.price
    });

  } catch (error) {
    console.error('❌ Create transaction error:', error.message);
    res.status(500).json({ 
      error: 'Gagal membuat transaksi Midtrans. Silakan coba lagi.',
      details: error.message 
    });
  }
}

// Handler function for webhook
async function handleWebhook(req, res) {
  try {
    const notification = req.body;
    const { order_id, status_code, gross_amount, signature_key, transaction_status } = notification;

    const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
    const expectedSignature = crypto
      .createHash('sha512')
      .update(`${order_id}${status_code}${gross_amount}${serverKey}`)
      .digest('hex');

    if (signature_key !== expectedSignature) {
      console.warn(`⚠️ Invalid signature for order: ${order_id}`);
      return res.status(403).json({ error: 'Invalid signature' });
    }

    const paymentData = paymentLog.get(order_id) || { orderId: order_id };
    
    if (transaction_status === 'capture' || transaction_status === 'settlement') {
      paymentData.status = 'paid';
      paymentData.paidAt = new Date().toISOString();
      console.log(`💰 Payment SUCCESS: ${order_id}`);
    } else if (transaction_status === 'pending') {
      paymentData.status = 'pending';
    } else if (['deny', 'cancel', 'expire'].includes(transaction_status)) {
      paymentData.status = 'failed';
    }

    paymentLog.set(order_id, paymentData);
    res.status(200).json({ status: 'ok' });

  } catch (error) {
    console.error('❌ Webhook error:', error.message);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}

// Handler for config
function handleConfig(req, res) {
  const isProd = process.env.MIDTRANS_IS_PRODUCTION === 'true';
  const clientKey = process.env.MIDTRANS_CLIENT_KEY || '';
  res.json({
    clientKey,
    isProduction: isProd,
    snapUrl: isProd
      ? 'https://app.midtrans.com/snap/snap.js'
      : 'https://app.sandbox.midtrans.com/snap/snap.js'
  });
}

// Mount routes on both /api/... and root relative paths for Vercel & Express flexibility
app.post('/api/create-transaction', handleCreateTransaction);
app.post('/create-transaction', handleCreateTransaction);

app.post('/api/webhook/midtrans', handleWebhook);
app.post('/webhook/midtrans', handleWebhook);
app.post('/webhook', handleWebhook);

app.get('/api/config', handleConfig);
app.get('/config', handleConfig);

app.get('/api/health', (req, res) => res.json({ status: 'ok', environment: process.env.MIDTRANS_IS_PRODUCTION === 'true' ? 'production' : 'sandbox' }));
app.get('/health', (req, res) => res.json({ status: 'ok', environment: process.env.MIDTRANS_IS_PRODUCTION === 'true' ? 'production' : 'sandbox' }));

export default app;
