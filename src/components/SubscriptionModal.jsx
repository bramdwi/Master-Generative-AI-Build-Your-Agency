import React, { useState } from 'react';
import { 
  X, 
  Check, 
  Sparkles, 
  Crown, 
  ShieldCheck, 
  Zap, 
  Lock, 
  CreditCard,
  CheckCircle2
} from 'lucide-react';

export default function SubscriptionModal({
  isOpen,
  onClose,
  isSubscribed,
  onToggleSubscribe,
  lang = 'id'
}) {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

  if (!isOpen) return null;

  const plans = [
    {
      id: 'monthly',
      name: 'Paket Bulanan',
      price: 'Rp 99.000',
      period: '/ bulan',
      desc: 'Cocok untuk belajar fleksibel per bulan',
      badge: null,
      popular: false
    },
    {
      id: 'yearly',
      name: 'Paket Tahunan',
      price: 'Rp 699.000',
      period: '/ tahun',
      subtext: 'Setara Rp 58.250 / bulan',
      desc: 'Hemat 40% — Pilihan terbaik untuk agensi & kreator',
      badge: 'TERLARIS · HEMAT 40%',
      popular: true
    },
    {
      id: 'lifetime',
      name: 'Akses Seumur Hidup',
      price: 'Rp 1.499.000',
      period: 'sekali bayar',
      desc: 'Sekali bayar untuk akses selamanya + semua materi masa depan',
      badge: 'PASS LIFETIME',
      popular: false
    }
  ];

  const features = [
    'Buka Akses 100% Ke 66+ Modul Eksklusif di 15 Track Kurikulum',
    '77+ Template Naskah UGC, Kontrak Agensi, & Production Checklist',
    'Akses Penuh Studio Prompt Visual & Kalkulator Profit Agensi',
    'Unduh Sertifikat Kelulusan Resmi Berlisensi',
    'Update Materi Tambahan Rutin Tanpa Biaya Ekstra',
    'Garansi Uang Kembali 7 Hari Tanpa Syarat'
  ];

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div 
        className="search-modal" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '780px',
          width: '94%',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95), rgba(30, 27, 75, 0.98))',
          border: '1px solid rgba(168, 85, 247, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(168, 85, 247, 0.25)',
          borderRadius: '20px',
          maxHeight: '92vh',
          overflowY: 'auto'
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(168, 85, 247, 0.15)', color: '#d8b4fe', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(168, 85, 247, 0.3)', marginBottom: '0.5rem' }}>
              <Crown size={14} />
              <span>AKADEMI KREATOR AI PRO</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.2 }}>
              Berlangganan & Buka Akses Seluruh Kurikulum
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginTop: '0.375rem', margin: 0 }}>
              Modul 1 di setiap track gratis! Berlangganan untuk membuka 50+ modul eksklusif, template naskah & strategi agensi.
            </p>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            style={{ background: 'rgba(255, 255, 255, 0.08)', border: 'none', color: '#9ca3af', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {plans.map(plan => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                style={{
                  position: 'relative',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  border: isSelected ? '2px solid #a855f7' : '1px solid rgba(255, 255, 255, 0.1)',
                  background: isSelected 
                    ? 'linear-gradient(180deg, rgba(168, 85, 247, 0.15) 0%, rgba(17, 24, 39, 0.8) 100%)' 
                    : 'rgba(17, 24, 39, 0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(168, 85, 247, 0.3)' : 'none'
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '2px 10px',
                    borderRadius: '12px',
                    letterSpacing: '0.5px',
                    whiteSpace: 'nowrap'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: isSelected ? '#e9d5ff' : '#d1d5db' }}>
                    {plan.name}
                  </span>
                  <div style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    border: isSelected ? '5px solid #a855f7' : '2px solid #4b5563',
                    background: isSelected ? 'white' : 'transparent'
                  }} />
                </div>

                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>{plan.price}</span>
                  <span style={{ fontSize: '0.8rem', color: '#9ca3af', marginLeft: '4px' }}>{plan.period}</span>
                </div>

                {plan.subtext && (
                  <div style={{ fontSize: '0.75rem', color: '#c084fc', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {plan.subtext}
                  </div>
                )}

                <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: 0, lineHeight: 1.3 }}>
                  {plan.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature List */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#e9d5ff', marginTop: 0, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            ✨ Manfaat Akses Member Pro:
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
            {features.map((feat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#d1d5db' }}>
                <CheckCircle2 size={16} style={{ color: '#10b981', flexShrink: 0 }} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Simulation Action & Payment Gateway Note */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button
            onClick={() => {
              onToggleSubscribe();
              onClose();
            }}
            style={{
              width: '100%',
              padding: '0.9rem',
              borderRadius: '12px',
              border: 'none',
              background: isSubscribed 
                ? 'linear-gradient(90deg, #ef4444, #dc2626)' 
                : 'linear-gradient(90deg, #8b5cf6, #ec4899)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 10px 20px -5px rgba(139, 92, 246, 0.4)',
              transition: 'transform 0.15s ease'
            }}
          >
            <Zap size={18} />
            <span>
              {isSubscribed 
                ? 'Nonaktifkan Langganan (Kembali ke Mode Gratis)' 
                : `Aktifkan Akses Pro (${plans.find(p => p.id === selectedPlan)?.price}) — Simulasi Demo`}
            </span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ShieldCheck size={14} style={{ color: '#10b981' }} /> Pembayaran Aman & Garansi 7 Hari
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CreditCard size={14} /> Siap Integrasi Midtrans / Xendit / QRIS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
