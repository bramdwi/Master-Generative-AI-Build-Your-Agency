import React, { useState } from 'react';
import { Award, X, Download, Printer, CheckCircle2, Sparkles } from 'lucide-react';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function CertificateModal({ track, onClose, lang = 'id' }) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const [studentName, setStudentName] = useState('');

  const trackTitle = lang === 'id' ? (trackTranslationsID[track.id]?.title || track.title) : track.title;

  // Set default name based on language once on mount
  React.useEffect(() => {
    setStudentName(t.certDefaultName);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', fontWeight: 700 }}>
            <Award size={20} /> {t.certTitle}
          </div>
          <button className="btn btn-secondary" style={{ padding: '6px' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          <div className="form-group" style={{ maxWidth: '400px', margin: '0 auto 1.5rem' }}>
            <label className="form-label" style={{ textAlign: 'center' }}>{t.certNameLabel}</label>
            <input
              type="text"
              className="form-input"
              style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 600 }}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div className="certificate-box">
            <div style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c7d2fe', marginBottom: '1rem' }}>
              {t.certHeader}
            </div>

            <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              {studentName}
            </div>

            <div style={{ fontSize: '0.95rem', color: '#9ca3af', maxWidth: '500px', margin: '0 auto 1.5rem' }}>
              {t.certBody}
            </div>

            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#a5b4fc', marginBottom: '1.5rem' }}>
              {t.trackLabel} {track.num}: {trackTitle}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', fontSize: '0.8rem', color: '#6b7280', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <div>{t.certVerifiedBy}</div>
              <div>•</div>
              <div>{new Date().toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
            </div>
          </div>
        </div>

        <div className="modal-header" style={{ borderTop: '1px solid var(--border-color)', borderBottom: 'none', justifyContent: 'center' }}>
          <button className="btn btn-primary" onClick={handlePrint}>
            <Printer size={16} /> {t.certPrintBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
