import React, { useState } from 'react';
import { Calculator, Wallet, TrendingUp, Clock, PieChart, Sparkles } from 'lucide-react';
import { uiTranslations } from '../data/translations';

export default function CalculatorView({ lang = 'id' }) {
  const t = uiTranslations[lang] || uiTranslations.id;

  const [serviceType, setServiceType] = useState('ugc');
  const [clientsCount, setClientsCount] = useState(4);
  const [pricePerClient, setPricePerClient] = useState(15000000); // Rp 15.000.000
  const [apiCostsPerClient, setApiCostsPerClient] = useState(1200000); // Rp 1.200.000
  const [softwareSubscriptions, setSoftwareSubscriptions] = useState(1500000); // Rp 1.500.000
  const [hoursPerClient, setHoursPerClient] = useState(10);

  // Calculations
  const grossRevenue = clientsCount * pricePerClient;
  const totalApiCosts = clientsCount * apiCostsPerClient;
  const totalExpenses = totalApiCosts + Number(softwareSubscriptions);
  const netProfit = grossRevenue - totalExpenses;
  const marginPercent = grossRevenue > 0 ? Math.round((netProfit / grossRevenue) * 100) : 0;
  const totalHours = clientsCount * hoursPerClient;
  const hourlyRate = totalHours > 0 ? Math.round(netProfit / totalHours) : 0;

  const presets = {
    ugc: { nameKey: 'presetUgc', price: 15000000, apiCost: 1200000, hours: 8 },
    headshot: { nameKey: 'presetHeadshot', price: 18000000, apiCost: 650000, hours: 5 },
    product: { nameKey: 'presetProduct', price: 10000000, apiCost: 500000, hours: 4 },
    faceless: { nameKey: 'presetFaceless', price: 30000000, apiCost: 2500000, hours: 15 },
    staging: { nameKey: 'presetStaging', price: 8000000, apiCost: 400000, hours: 3 }
  };

  const handlePresetSelect = (key) => {
    setServiceType(key);
    const p = presets[key];
    setPricePerClient(p.price);
    setApiCostsPerClient(p.apiCost);
    setHoursPerClient(p.hours);
  };

  const formatRp = (val) => {
    return 'Rp ' + Number(val).toLocaleString('id-ID');
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Calculator size={28} style={{ color: '#6366f1' }} /> {t.calcTitle}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          {t.calcDesc}
        </p>
      </div>

      {/* Preset selector chips */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '2rem' }}>
        {Object.keys(presets).map(key => (
          <button
            key={key}
            className={`cat-chip ${serviceType === key ? 'active' : ''}`}
            onClick={() => handlePresetSelect(key)}
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            {t[presets[key].nameKey]}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Input Parameters Form */}
        <div className="tool-card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={18} style={{ color: '#a5b4fc' }} /> {t.businessParams}
          </h2>

          <div className="form-group">
            <label className="form-label">{t.labelClientsCount}</label>
            <input
              type="number"
              className="form-input"
              value={clientsCount}
              onChange={(e) => setClientsCount(Math.max(1, parseInt(e.target.value) || 0))}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelPricePerClient}</label>
            <input
              type="number"
              className="form-input"
              value={pricePerClient}
              onChange={(e) => setPricePerClient(parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelApiCosts}</label>
            <input
              type="number"
              className="form-input"
              value={apiCostsPerClient}
              onChange={(e) => setApiCostsPerClient(parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelSoftwareSubs}</label>
            <input
              type="number"
              className="form-input"
              value={softwareSubscriptions}
              onChange={(e) => setSoftwareSubscriptions(parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelHoursPerClient}</label>
            <input
              type="number"
              className="form-input"
              value={hoursPerClient}
              onChange={(e) => setHoursPerClient(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Results Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.estRevenue}</span>
              <Wallet size={20} style={{ color: '#6366f1' }} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'white' }}>
              {formatRp(grossRevenue)} <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{t.perMonth}</span>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t.netProfit}</span>
              <TrendingUp size={20} style={{ color: '#10b981' }} />
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#34d399' }}>
              {formatRp(netProfit)} <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>{t.perMonth}</span>
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              {t.grossMargin}: <strong style={{ color: '#34d399' }}>{marginPercent}%</strong>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>{t.hourlyRate}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#a5b4fc' }}>
                {formatRp(hourlyRate)}<span style={{ fontSize: '0.8rem' }}>{t.perHour}</span>
              </div>
            </div>

            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '14px', padding: '1.25rem' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>{t.workload}</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#f472b6' }}>
                {totalHours}<span style={{ fontSize: '0.8rem' }}> {t.hoursUnit}</span>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.25)', borderRadius: '14px', padding: '1.25rem', color: '#c7d2fe', fontSize: '0.875rem' }}>
            {t.benchmarkTip}
          </div>
        </div>
      </div>
    </div>
  );
}
