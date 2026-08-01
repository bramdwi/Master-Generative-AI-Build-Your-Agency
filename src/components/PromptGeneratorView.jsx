import React, { useState } from 'react';
import { Wand2, Copy, Check, Sparkles, Sliders } from 'lucide-react';
import { uiTranslations } from '../data/translations';

export default function PromptGeneratorView({ lang = 'id' }) {
  const t = uiTranslations[lang] || uiTranslations.id;

  const [promptType, setPromptType] = useState('ugc');
  const [subject, setSubject] = useState('28 year old creator holding skincare bottle');
  const [environment, setEnvironment] = useState('bright sunlit modern bathroom');
  const [lighting, setLighting] = useState('soft natural morning window light');
  const [camera, setCamera] = useState('shot on iPhone 15 Pro, 4k 60fps front camera');
  const [expression, setExpression] = useState('candid surprised expression, talking to camera');
  const [style, setStyle] = useState('authentic UGC video clip, unedited handheld footage');
  const [copied, setCopied] = useState(false);

  const generateFullPrompt = () => {
    return `${subject}, ${expression}, in ${environment}, ${lighting}, ${camera}, ${style} --ar 9:16 --v 6.0`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateFullPrompt());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const presets = {
    ugc: {
      nameKey: 'presetPromptUgc',
      subject: '25 year old woman with natural smile',
      environment: 'cozy modern kitchen',
      lighting: 'ring light reflection in eyes',
      camera: '9:16 vertical smartphone camera',
      expression: 'engaging enthusiastic expression',
      style: 'TikTok UGC style, raw video frame'
    },
    headshot: {
      nameKey: 'presetPromptHeadshot',
      subject: 'professional male tech executive in dark navy blazer',
      environment: 'blurred modern glass office background',
      lighting: 'studio Rembrandt key lighting',
      camera: '85mm f/1.4 lens, shallow depth of field',
      expression: 'confident approachable smile',
      style: 'LinkedIn portrait photography, crisp 8k detail'
    },
    product: {
      nameKey: 'presetPromptProduct',
      subject: 'matte black wireless earbuds case on marble pedestal',
      environment: 'minimalist luxury studio podium',
      lighting: 'soft directional spotlight with subtle shadows',
      camera: 'macro lens 100mm, ultra sharp focus',
      expression: 'pristine product reflections',
      style: 'Apple website advertising photography'
    }
  };

  const applyPreset = (key) => {
    setPromptType(key);
    const p = presets[key];
    setSubject(p.subject);
    setEnvironment(p.environment);
    setLighting(p.lighting);
    setCamera(p.camera);
    setExpression(p.expression);
    setStyle(p.style);
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Wand2 size={28} style={{ color: '#a855f7' }} /> {t.promptStudioTitle}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          {t.promptStudioDesc}
        </p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
        {Object.keys(presets).map(key => (
          <button
            key={key}
            className={`cat-chip ${promptType === key ? 'active' : ''}`}
            onClick={() => applyPreset(key)}
            style={{ padding: '8px 14px', fontSize: '0.85rem' }}
          >
            {t[presets[key].nameKey]}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {/* Controls */}
        <div className="tool-card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sliders size={18} style={{ color: '#c084fc' }} /> {t.promptParams}
          </h2>

          <div className="form-group">
            <label className="form-label">{t.labelSubject}</label>
            <input type="text" className="form-input" value={subject} onChange={(e) => setSubject(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelExpression}</label>
            <input type="text" className="form-input" value={expression} onChange={(e) => setExpression(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelEnvironment}</label>
            <input type="text" className="form-input" value={environment} onChange={(e) => setEnvironment(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelLighting}</label>
            <input type="text" className="form-input" value={lighting} onChange={(e) => setLighting(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelCamera}</label>
            <input type="text" className="form-input" value={camera} onChange={(e) => setCamera(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">{t.labelStyle}</label>
            <input type="text" className="form-input" value={style} onChange={(e) => setStyle(e.target.value)} />
          </div>
        </div>

        {/* Output Prompt Box */}
        <div>
          <div className="tool-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} style={{ color: '#38bdf8' }} /> {t.compiledPrompt}
              </h2>

              <div style={{ background: '#0a0e17', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', color: '#38bdf8', lineHeight: 1.6, wordBreak: 'break-word', minHeight: '180px' }}>
                {generateFullPrompt()}
              </div>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.875rem' }} onClick={handleCopy}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                <span>{copied ? t.copiedAlert : t.copyPromptBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
