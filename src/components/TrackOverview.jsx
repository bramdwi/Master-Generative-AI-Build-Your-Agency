import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  FileText, 
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function TrackOverview({
  track,
  completedModules,
  onSelectModule,
  onOpenTemplate,
  onGetCertificate,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;

  if (!track) return null;

  const trackTitle = lang === 'id' ? (trackTranslationsID[track.id]?.title || track.title) : track.title;
  const trackDesc = lang === 'id' ? (trackTranslationsID[track.id]?.description || track.description) : track.description;
  const trackCat = lang === 'id' ? (trackTranslationsID[track.id]?.category || track.category) : track.category;

  const trackCompletedCount = track.modules.filter(m => completedModules.includes(m.id)).length;
  const isTrackCompleted = trackCompletedCount === track.modules.length && track.modules.length > 0;
  const progressPercent = Math.round((trackCompletedCount / (track.modules.length || 1)) * 100);

  return (
    <div>
      {/* Hero Header */}
      <div className="track-overview-hero">
        <div className="track-badge-group">
          <span className="card-num-badge">{t.trackLabel} {track.num}</span>
          <span style={{ fontSize: '0.8rem', color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.15)', padding: '2px 10px', borderRadius: '999px' }}>
            {trackCat}
          </span>
          {isTrackCompleted && (
            <span style={{ fontSize: '0.8rem', color: '#34d399', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 10px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} /> {t.completedBadge}
            </span>
          )}
        </div>

        <h1 className="track-hero-title">{trackTitle}</h1>
        <p className="track-hero-desc">{trackDesc}</p>

        <div className="track-hero-stats">
          <div className="hero-stat-item">
            <BookOpen size={16} />
            <span>{track.modules.length} {t.modulesCount}</span>
          </div>
          <div className="hero-stat-item">
            <FileText size={16} />
            <span>{track.templates.length} {t.templatesCount}</span>
          </div>
          <div className="hero-stat-item">
            <Clock size={16} />
            <span>~{track.modules.length * 30} {t.minsTotal}</span>
          </div>
        </div>

        {isTrackCompleted && (
          <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <button className="btn btn-primary" onClick={() => onGetCertificate(track)}>
              <Award size={18} /> {t.downloadCertificate}
            </button>
          </div>
        )}
      </div>

      {/* Modules Section */}
      <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BookOpen size={20} style={{ color: '#818cf8' }} /> {t.courseModules} ({trackCompletedCount}/{track.modules.length})
      </h2>

      <div className="modules-grid">
        {track.modules.map(mod => {
          const isDone = completedModules.includes(mod.id);

          return (
            <div
              key={mod.id}
              className={`module-card ${isDone ? 'completed' : ''}`}
              onClick={() => onSelectModule(mod)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-num-badge">{t.moduleLabel} {mod.num}</span>
                  {isDone ? (
                    <CheckCircle2 size={18} style={{ color: '#10b981' }} />
                  ) : null}
                </div>
                <h3 className="card-title">{mod.title}</h3>
              </div>

              <div className="card-footer">
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} /> {mod.time}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#a5b4fc', fontWeight: 600 }}>
                  {t.startLesson} <ArrowRight size={13} />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Templates Section */}
      {track.templates.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={20} style={{ color: '#c084fc' }} /> {t.trackResources} ({track.templates.length})
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
            {track.templates.map(tmp => (
              <div
                key={tmp.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => onOpenTemplate(tmp)}
              >
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.25rem' }}>
                    {tmp.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                    {t.markdownTemplate}
                  </div>
                </div>

                <div style={{ color: '#a5b4fc' }}>
                  <FileText size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
