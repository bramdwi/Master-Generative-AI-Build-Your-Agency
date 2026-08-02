import React, { useState, useCallback } from 'react';
import {
  Loader2,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ShieldCheck,
  QrCode,
  Wallet,
  CreditCard,
  ArrowLeft,
  Sparkles
} from 'lucide-react';

const API_BASE = '/api';

// Payment method logos as styled badges
function PaymentMethodBadges() {
  const methods = [
    { name: 'QRIS', color: '#e11d48', icon: QrCode },
    { name: 'GoPay', color: '#00aa13', icon: Wallet },
    { name: 'Dana', color: '#108ee9', icon: Wallet },
    { name: 'OVO', color: '#4c3494', icon: Wallet },
    { name: 'ShopeePay', color: '#ee4d2d', icon: Wallet },
    { name: 'Bank Transfer', color: '#6366f1', icon: CreditCard },
  ];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '6px',
      justifyContent: 'center',
      marginTop: '0.75rem'
    }}>
      {methods.map(m => (
        <span
          key={m.name}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '3px 10px',
            borderRadius: '6px',
            fontSize: '0.7rem',
            fontWeight: 700,
            background: `${m.color}20`,
            color: m.color,
            border: `1px solid ${m.color}40`,
            letterSpacing: '0.3px'
          }}
        >
          <m.icon size={12} />
          {m.name}
        </span>
      ))}
    </div>
  );
}

export default function PaymentCheckout({
  plan,
  planName,
  planPrice,
  planPriceNum,
  onSuccess,
  onCancel,
  onBack
}) {
  const [status, setStatus] = useState('idle'); // idle | loading | processing | success | error | pending
  const [errorMsg, setErrorMsg] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState(null);

  const initiatePayment = useCallback(async () => {
    setStatus('loading');
    setErrorMsg('');
    setRedirectUrl(null);

    try {
      // 1. Create transaction on backend
      const response = await fetch(`${API_BASE}/create-transaction`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan,
          customerName: 'Kreator',
          customerEmail: ''
        })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || 'Gagal membuat transaksi');
      }

      const data = await response.json();
      setOrderId(data.orderId);
      setRedirectUrl(data.redirect_url);
      setStatus('processing');

      // 2. Trigger Midtrans Snap popup
      if (window.snap) {
        window.snap.pay(data.token, {
          onSuccess: (result) => {
            console.log('✅ Payment success:', result);
            setStatus('success');
            setTimeout(() => {
              onSuccess(plan, data.orderId, result);
            }, 2000);
          },
          onPending: (result) => {
            console.log('⏳ Payment pending:', result);
            setStatus('pending');
            setTimeout(() => {
              onSuccess(plan, data.orderId, result);
            }, 3000);
          },
          onError: (result) => {
            console.error('❌ Payment error:', result);
            setStatus('error');
            setErrorMsg('Pembayaran gagal atau dibatalkan. Kamu juga bisa bayar langsung via link Midtrans.');
          },
          onClose: () => {
            console.log('🚫 Payment popup closed');
            setStatus('idle');
          }
        });
      } else if (data.redirect_url) {
        // Snap.js fallback -> redirect directly
        window.location.href = data.redirect_url;
      } else {
        throw new Error('Midtrans Snap belum dimuat. Refresh halaman dan coba lagi.');
      }
    } catch (error) {
      console.error('Payment initiation error:', error);
      setStatus('error');
      setErrorMsg(error.message || 'Terjadi kesalahan. Silakan coba lagi.');
    }
  }, [plan, onSuccess]);

  // ──── SUCCESS STATE ────
  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          animation: 'pulse 1.5s ease-in-out infinite',
          boxShadow: '0 0 40px rgba(16, 185, 129, 0.4)'
        }}>
          <CheckCircle2 size={40} color="white" />
        </div>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981', marginBottom: '0.5rem' }}>
          Pembayaran Berhasil! 🎉
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
          Selamat! Akses Pro kamu telah aktif.
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>
          Order ID: <code style={{ color: '#a78bfa', background: 'rgba(167, 139, 250, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{orderId}</code>
        </p>
        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          color: '#c084fc',
          fontSize: '0.85rem',
          fontWeight: 600
        }}>
          <Sparkles size={16} />
          <span>Membuka seluruh modul eksklusif...</span>
        </div>
      </div>
    );
  }

  // ──── PENDING STATE ────
  if (status === 'pending') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f59e0b, #d97706)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          boxShadow: '0 0 40px rgba(245, 158, 11, 0.3)'
        }}>
          <Loader2 size={36} color="white" style={{ animation: 'spin 1.5s linear infinite' }} />
        </div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fbbf24', marginBottom: '0.5rem' }}>
          Pembayaran Sedang Diproses
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
          Akses Pro akan segera aktif begitu pembayaran terkonfirmasi.
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.5rem' }}>
          Kami langsung mengaktifkan akses untukmu sementara menunggu konfirmasi.
        </p>
      </div>
    );
  }

  // ──── ERROR STATE ────
  if (status === 'error') {
    return (
      <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ef4444, #dc2626)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          boxShadow: '0 0 40px rgba(239, 68, 68, 0.3)'
        }}>
          <XCircle size={40} color="white" />
        </div>
        <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ef4444', marginBottom: '0.5rem' }}>
          Pembayaran Gagal
        </h3>
        <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
          {errorMsg}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {redirectUrl && (
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                border: 'none',
                background: 'linear-gradient(90deg, #10b981, #059669)',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none'
              }}
            >
              Bayar Langsung via Midtrans ↗
            </a>
          )}
          <button
            onClick={() => { setStatus('idle'); setErrorMsg(''); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.6rem 1.25rem',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
              color: 'white',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            <RefreshCw size={16} />
            Coba Lagi
          </button>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.6rem 1.25rem',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#9ca3af',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>
      </div>
    );
  }

  // ──── IDLE / LOADING — CHECKOUT CONFIRMATION ────
  return (
    <div style={{ padding: '0.5rem 0' }}>
      {/* Order Summary */}
      <div style={{
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        borderRadius: '14px',
        padding: '1.25rem',
        marginBottom: '1.25rem'
      }}>
        <div style={{ fontSize: '0.75rem', color: '#a5b4fc', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.75rem' }}>
          📋 Ringkasan Pesanan
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <span style={{ color: '#d1d5db', fontSize: '0.95rem', fontWeight: 600 }}>{planName}</span>
          <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: 800 }}>{planPrice}</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '0.75rem', marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
            <span style={{ color: '#9ca3af' }}>Subtotal</span>
            <span style={{ color: '#d1d5db', fontWeight: 600 }}>{planPrice}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            <span style={{ color: '#9ca3af' }}>Pajak</span>
            <span style={{ color: '#10b981', fontWeight: 600 }}>Rp 0 (Termasuk)</span>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontSize: '1rem', 
            fontWeight: 800, 
            marginTop: '0.75rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            color: 'white' 
          }}>
            <span>Total Bayar</span>
            <span style={{ color: '#c084fc' }}>{planPrice}</span>
          </div>
        </div>
      </div>

      {/* Payment Methods Label */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '0.75rem', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>
          Metode Pembayaran Tersedia
        </div>
        <PaymentMethodBadges />
      </div>

      {/* Pay Button */}
      <button
        onClick={initiatePayment}
        disabled={status === 'loading'}
        style={{
          width: '100%',
          padding: '0.9rem',
          borderRadius: '12px',
          border: 'none',
          background: status === 'loading'
            ? 'rgba(139, 92, 246, 0.4)'
            : 'linear-gradient(90deg, #8b5cf6, #ec4899)',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 700,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          boxShadow: status === 'loading' ? 'none' : '0 10px 20px -5px rgba(139, 92, 246, 0.4)',
          transition: 'all 0.2s ease',
          marginBottom: '0.75rem'
        }}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} />
            <span>Menyiapkan Pembayaran...</span>
          </>
        ) : (
          <>
            <CreditCard size={18} />
            <span>Bayar Sekarang — {planPrice}</span>
          </>
        )}
      </button>

      {/* Back Button */}
      <button
        onClick={onBack}
        disabled={status === 'loading'}
        style={{
          width: '100%',
          padding: '0.7rem',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'rgba(255, 255, 255, 0.03)',
          color: '#9ca3af',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          transition: 'all 0.15s ease'
        }}
      >
        <ArrowLeft size={16} />
        Kembali Pilih Paket
      </button>

      {/* Security Badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        fontSize: '0.75rem',
        color: '#6b7280',
        marginTop: '1rem'
      }}>
        <ShieldCheck size={14} style={{ color: '#10b981' }} />
        <span>Pembayaran diproses oleh Midtrans · Enkripsi SSL 256-bit · Garansi 7 Hari</span>
      </div>
    </div>
  );
}
