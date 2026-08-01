import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Flame, 
  Bookmark, 
  FileText, 
  Calculator, 
  Wand2, 
  ArrowRight,
  Award,
  Sparkles
} from 'lucide-react';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function DashboardView({
  tracks,
  completedModules,
  bookmarks,
  streakCount,
  lastModuleId,
  onSelectTrack,
  onSelectModule,
  onSetActiveTab,
  onGetCertificate,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;

  const totalModulesCount = tracks.reduce((acc, tr) => acc + tr.modules.length, 0);
  const completedCount = completedModules.length;
  const progressPercent = Math.round((completedCount / (totalModulesCount || 1)) * 100);

  let lastModule = null;
  let lastTrack = null;
  if (lastModuleId) {
    for (const tr of tracks) {
      const m = tr.modules.find(mod => mod.id === lastModuleId);
      if (m) {
        lastModule = m;
        lastTrack = tr;
        break;
      }
    }
  }
  if (!lastModule && tracks[0]?.modules[0]) {
    lastModule = tracks[0].modules[0];
    lastTrack = tracks[0];
  }

  const completedTracks = tracks.filter(tr => {
    const doneCount = tr.modules.filter(m => completedModules.includes(m.id)).length;
    return doneCount === tr.modules.length && tr.modules.length > 0;
  });

  return (
    <div>
      {/* Hero Welcome */}
      <div className="track-overview-hero">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <Sparkles size={18} style={{ color: '#a5b4fc' }} />
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.heroWelcome}
          </span>
        </div>

        <h1 className="track-hero-title">{t.heroTitle}</h1>
        <p className="track-hero-desc">{t.heroDesc}</p>

        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          <div style={{ background: 'rgba(17, 24, 39, 0.6)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.statOverallProgress}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', marginTop: '0.25rem' }}>{progressPercent}%</div>
          </div>

          <div style={{ background: 'rgba(17, 24, 39, 0.6)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.statModulesCompleted}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#34d399', marginTop: '0.25rem' }}>{completedCount} / {totalModulesCount}</div>
          </div>

          <div style={{ background: 'rgba(17, 24, 39, 0.6)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.statDailyStreak}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fbbf24', marginTop: '0.25rem' }}>{streakCount} {t.daysUnit} 🔥</div>
          </div>

          <div style={{ background: 'rgba(17, 24, 39, 0.6)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1rem' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.statCompletedTracks}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c084fc', marginTop: '0.25rem' }}>{completedTracks.length} / {tracks.length}</div>
          </div>
        </div>
      </div>

      {/* Resume Card */}
      {lastModule && (
        <div 
          style={{ 
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)', 
            border: '1px solid rgba(99, 102, 241, 0.4)', 
            borderRadius: '16px', 
            padding: '1.5rem', 
            marginBottom: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <div>
            <div style={{ fontSize: '0.8rem', color: '#a5b4fc', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              {t.jumpBackIn} — {t.trackLabel} {lastTrack?.num}: {lang === 'id' ? (trackTranslationsID[lastTrack?.id]?.title || lastTrack?.title) : lastTrack?.title}
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>
              {t.moduleLabel} {lastModule.num}: {lastModule.title}
            </h3>
          </div>

          <button className="btn btn-primary" onClick={() => onSelectModule(lastModule)}>
            {t.continueLearning} <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Quick Tools Grid */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
        {t.creatorSuite}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        <div 
          className="module-card" 
          onClick={() => onSetActiveTab('templates')}
          style={{ padding: '1.25rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={22} style={{ color: '#c084fc' }} />
            <div>
              <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: 600 }}>{t.templatesSuiteTitle}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.templatesSuiteDesc}</p>
            </div>
          </div>
        </div>

        <div 
          className="module-card" 
          onClick={() => onSetActiveTab('calculator')}
          style={{ padding: '1.25rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Calculator size={22} style={{ color: '#34d399' }} />
            <div>
              <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: 600 }}>{t.calculatorSuiteTitle}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.calculatorSuiteDesc}</p>
            </div>
          </div>
        </div>

        <div 
          className="module-card" 
          onClick={() => onSetActiveTab('prompt-gen')}
          style={{ padding: '1.25rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Wand2 size={22} style={{ color: '#38bdf8' }} />
            <div>
              <h3 style={{ fontSize: '1rem', color: 'white', fontWeight: 600 }}>{t.promptSuiteTitle}</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.promptSuiteDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tracks Overview List */}
      <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
        {t.allCurriculumTracks} ({tracks.length})
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {tracks.map(tr => {
          const done = tr.modules.filter(m => completedModules.includes(m.id)).length;
          const trPercent = Math.round((done / (tr.modules.length || 1)) * 100);
          const trTitle = lang === 'id' ? (trackTranslationsID[tr.id]?.title || tr.title) : tr.title;
          const trDesc = lang === 'id' ? (trackTranslationsID[tr.id]?.description || tr.description) : tr.description;
          const trCat = lang === 'id' ? (trackTranslationsID[tr.id]?.category || tr.category) : tr.category;

          return (
            <div
              key={tr.id}
              className="module-card"
              onClick={() => onSelectTrack(tr.id)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-num-badge">{t.trackLabel} {tr.num}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{trCat}</span>
                </div>
                <h3 className="card-title">{trTitle}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {trDesc}
                </p>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>
                  <span>{done}/{tr.modules.length} {t.modulesCount}</span>
                  <span>{trPercent}%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar-fill" style={{ width: `${trPercent}%` }}></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
