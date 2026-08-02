# 💳 Midtrans Payment Gateway Setup Guide

Complete reference guide for configuring, testing, and deploying Midtrans Payment Gateway (Snap Integration) based on [official Midtrans documentation](https://docs.midtrans.com/).

---

## 🚀 Architecture Overview

This project implements **Midtrans Snap**, offering a seamless popup checkout experience for QRIS, GoPay, E-wallets, Virtual Accounts, and Credit Cards.

```
[ Frontend React ] ──(1. POST /api/create-transaction)──> [ Backend Express ]
       │                                                         │
       │                                                         ▼
       │ <──(2. Returns token & redirect_url)───────── [ Midtrans Snap API ]
       │
       ├──(3. Triggers window.snap.pay(token))──> [ Midtrans Snap Popup UI ]
       │                                                         │
       │                                                   (Payment Made)
       │                                                         │
[ Backend Express ] <──(4. HTTP Webhook Notification)─────────────┘
  (Verifies SHA512 Signature & Activates Subscription)
```

---

## 🔑 Step 1: Obtain Access Keys from Midtrans

1. Log in to [Midtrans Dashboard](https://dashboard.midtrans.com/) (or [Midtrans Sandbox Dashboard](https://dashboard.sandbox.midtrans.com/) for testing).
2. Go to **Settings** ➔ **Access Keys**.
3. Copy your:
   - **Merchant ID**
   - **Client Key**
   - **Server Key**

> ⚠️ **Key Prefix Note**:
> - **Sandbox Keys** start with `SB-Mid-server-` and `SB-Mid-client-`
> - **Production Keys** start with `Mid-server-` and `Mid-client-`

---

## ⚙️ Step 2: Configure Environment Variables

Edit `server/.env` with your Midtrans keys:

### 🧪 Sandbox (Testing) Mode
```env
MIDTRANS_MERCHANT_ID=M836749637
MIDTRANS_SERVER_KEY=SB-Mid-server-YOUR_SANDBOX_SERVER_KEY
MIDTRANS_CLIENT_KEY=SB-Mid-client-YOUR_SANDBOX_CLIENT_KEY
MIDTRANS_IS_PRODUCTION=false

PORT=3001
FRONTEND_URL=http://localhost:3000
```

### 🚀 Production Mode
```env
MIDTRANS_MERCHANT_ID=YOUR_PRODUCTION_MERCHANT_ID
MIDTRANS_SERVER_KEY=Mid-server-YOUR_PRODUCTION_SERVER_KEY
MIDTRANS_CLIENT_KEY=Mid-client-YOUR_PRODUCTION_CLIENT_KEY
MIDTRANS_IS_PRODUCTION=true

PORT=3001
FRONTEND_URL=https://your-domain.com
```

---

## 🌐 Step 3: Configure Midtrans Dashboard Settings

In your Midtrans Dashboard (Sandbox or Production):

### 1. Payment Notification URL (Webhook)
- Go to **Settings** ➔ **Configuration**.
- Set **Payment Notification URL** to:
  ```
  https://your-domain.com/api/webhook/midtrans
  ```
- *(For local testing, use an ngrok URL e.g. `https://xxxx.ngrok-free.app/api/webhook/midtrans`)*

### 2. Finish & Unfinish Redirect URLs
- Set **Finish Redirect URL**:
  ```
  https://your-domain.com?payment=success
  ```
- Set **Unfinish Redirect URL**:
  ```
  https://your-domain.com?payment=pending
  ```

### 3. Payment Methods Activation
- Go to **Settings** ➔ **Payment Methods**.
- Enable desired payment channels (QRIS, GoPay, ShopeePay, Bank Transfer, etc.).

---

## 🧪 Step 4: Testing Payments in Sandbox Mode

Midtrans provides online simulators for testing without spending real money:

| Payment Method | Testing Simulator Link / Procedure |
| :--- | :--- |
| **GoPay / QRIS** | Scan QR code using [Midtrans Simulator App](https://docs.midtrans.com/en/technical-reference/sandbox-simulator) or click simulated payment button. |
| **Bank Transfer / VA** | Copy Virtual Account number and pay via [Midtrans Payment Simulator](https://simulator.sandbox.midtrans.com/). |
| **Credit Card** | Use [Midtrans Test Cards](https://docs.midtrans.com/en/technical-reference/sandbox-test-cards). |

---

## 🛠️ Step 5: Server API Endpoints Reference

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/create-transaction` | `POST` | Creates Snap transaction token and returns `{ token, redirect_url, orderId }` |
| `/api/webhook/midtrans` | `POST` | Handles Midtrans IPN notifications, verifies SHA512 signature, updates order status |
| `/api/payment-status/:orderId` | `GET` | Queries real-time transaction status from Midtrans API |
| `/api/config` | `GET` | Exposes public `clientKey`, `isProduction`, and `snapUrl` for frontend initialization |
| `/api/health` | `GET` | Health check endpoint |

---

## 🔐 Signature Key Verification Formula

The webhook verifies incoming payment notifications using SHA512 hashing:

$$\text{Signature} = \text{SHA512}(\text{order\_id} + \text{status\_code} + \text{gross\_amount} + \text{ServerKey})$$

If the signature matches, the transaction status is updated (`settlement`, `capture`, `pending`, `deny`, `cancel`, `expire`).

---

## ⚡ Running the Project

Start full-stack application (Backend + Frontend):
```bash
npm run dev:full
```

- **Frontend**: http://localhost:3000
- **Payment Server**: http://localhost:3001
- **API Health Check**: http://localhost:3001/api/health
