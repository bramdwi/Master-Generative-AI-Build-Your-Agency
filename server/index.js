import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import midtransClient from 'midtrans-client';
import crypto from 'crypto';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Initialize Midtrans Snap with auto-detection for Production vs Sandbox keys
const serverKey = process.env.MIDTRANS_SERVER_KEY || '';
const isProductionMode = process.env.MIDTRANS_IS_PRODUCTION === 'true' || 
  (serverKey.startsWith('Mid-server-') && !serverKey.startsWith('SB-'));

const snap = new midtransClient.Snap({
  isProduction: isProductionMode,
  serverKey: serverKey,
  clientKey: process.env.MIDTRANS_CLIENT_KEY
});

// In-memory payment log (in production, use a real database)
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
    durationDays: null // Never expires
  }
};

// ─────────────────────────────────────────────
// POST /api/create-transaction
// Creates a Midtrans Snap transaction token
// ─────────────────────────────────────────────
app.post('/api/create-transaction', async (req, res) => {
  try {
    const { plan, customerName, customerEmail } = req.body;

    if (!plan || !PLANS[plan]) {
      return res.status(400).json({ 
        error: 'Invalid plan. Choose: monthly, yearly, or lifetime' 
      });
    }

    const planConfig = PLANS[plan];
    const orderId = `KKA-${plan.toUpperCase()}-${Date.now()}-${crypto.randomBytes(3).toString('hex')}`;

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
        finish: `${process.env.FRONTEND_URL || 'http://localhost:3000'}?payment=success&order_id=${orderId}`
      }
    };

    const transaction = await snap.createTransaction(transactionParams);

    // Log the transaction
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
      error: 'Gagal membuat transaksi. Silakan coba lagi.',
      details: error.message 
    });
  }
});

// ─────────────────────────────────────────────
// POST /api/webhook/midtrans
// Receives payment notification from Midtrans
// ─────────────────────────────────────────────
app.post('/api/webhook/midtrans', async (req, res) => {
  try {
    const notification = req.body;
    const { order_id, status_code, gross_amount, signature_key, transaction_status, fraud_status } = notification;

    // Verify signature
    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    const expectedSignature = crypto
      .createHash('sha512')
      .update(`${order_id}${status_code}${gross_amount}${serverKey}`)
      .digest('hex');

    if (signature_key !== expectedSignature) {
      console.warn(`⚠️ Invalid signature for order: ${order_id}`);
      return res.status(403).json({ error: 'Invalid signature' });
    }

    // Update payment log
    const paymentData = paymentLog.get(order_id) || { orderId: order_id };
    
    if (transaction_status === 'capture' || transaction_status === 'settlement') {
      paymentData.status = 'paid';
      paymentData.paidAt = new Date().toISOString();
      console.log(`💰 Payment SUCCESS: ${order_id} | Status: ${transaction_status}`);
    } else if (transaction_status === 'pending') {
      paymentData.status = 'pending';
      console.log(`⏳ Payment PENDING: ${order_id}`);
    } else if (['deny', 'cancel', 'expire'].includes(transaction_status)) {
      paymentData.status = 'failed';
      console.log(`❌ Payment FAILED: ${order_id} | Status: ${transaction_status}`);
    }

    paymentLog.set(order_id, paymentData);
    res.status(200).json({ status: 'ok' });

  } catch (error) {
    console.error('❌ Webhook error:', error.message);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// ─────────────────────────────────────────────
// GET /api/payment-status/:orderId
// Check payment status
// ─────────────────────────────────────────────
app.get('/api/payment-status/:orderId', async (req, res) => {
  try {
    const { orderId } = req.params;
    
    // Try to get real-time status from Midtrans
    try {
      const statusResponse = await snap.transaction.status(orderId);
      res.json({
        orderId,
        status: statusResponse.transaction_status,
        paymentType: statusResponse.payment_type,
        grossAmount: statusResponse.gross_amount,
        transactionTime: statusResponse.transaction_time
      });
    } catch (midtransError) {
      // Fallback to local log
      const localData = paymentLog.get(orderId);
      if (localData) {
        res.json(localData);
      } else {
        res.status(404).json({ error: 'Order not found' });
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/config
// Return public client key for frontend
// ─────────────────────────────────────────────
app.get('/api/config', (req, res) => {
  res.json({
    clientKey: process.env.MIDTRANS_CLIENT_KEY,
    isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true'
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    service: 'Kampus Kreator AI Payment Server',
    environment: process.env.MIDTRANS_IS_PRODUCTION === 'true' ? 'production' : 'sandbox'
  });
});

app.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║  💳 Kampus Kreator AI — Payment Server                  ║
║  🌐 Running on http://localhost:${PORT}                    ║
║  📡 Mode: ${process.env.MIDTRANS_IS_PRODUCTION === 'true' ? 'PRODUCTION' : 'SANDBOX (Testing)'}                          ║
║  🔑 Client Key: ${(process.env.MIDTRANS_CLIENT_KEY || 'NOT SET').substring(0, 20)}...  ║
╚══════════════════════════════════════════════════════════╝
  `);
});
