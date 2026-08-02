import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Circle, 
  Bookmark, 
  Clock, 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink,
  Edit3,
  Save,
  Sparkles,
  BookOpen,
  Lock,
  Crown,
  ShieldCheck,
  Zap
} from 'lucide-react';
import MarkdownViewer from './MarkdownViewer';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function ModuleView({
  module,
  track,
  isCompleted,
  isBookmarked,
  userNote,
  completedCheckboxes,
  isSubscribed = false,
  onOpenSubscribeModal,
  onToggleComplete,
  onToggleBookmark,
  onSaveNote,
  onToggleCheckbox,
  onNavigatePrev,
  onNavigateNext,
  onBackToTrack,
  onSelectModule,
  onSetActiveTab,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(userNote || '');

  if (!module) return null;

  const trackTitle = lang === 'id' ? (trackTranslationsID[track.id]?.title || track.title) : track.title;
  const displayContent = (lang === 'id' && module.content_id) ? module.content_id : module.content;
  const isLocked = module.num > 1 && !isSubscribed;

  const handleCompleteClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    onToggleComplete(module.id);
  };

  const handleSaveNoteSubmit = () => {
    onSaveNote(module.id, noteText);
    setIsEditingNote(false);
  };

  return (
    <div className="module-viewer">
      <div className="viewer-header">
        <div className="viewer-breadcrumb" onClick={onBackToTrack}>
          <ArrowLeft size={16} />
          <span>Track {track.num}: {trackTitle}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.5rem' }}>
          <h1 className="viewer-title" style={{ margin: 0 }}>{module.num}. {module.title}</h1>
          {isLocked ? (
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f59e0b', background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)', padding: '2px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Lock size={12} /> PRO TERKUNCI
            </span>
          ) : module.num === 1 && !isSubscribed ? (
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', padding: '2px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={12} /> GRATIS PREVIEW
            </span>
          ) : null}
        </div>

        <div className="viewer-meta">
          <div className="meta-tags">
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={15} /> {module.time}
            </span>
            <span style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', padding: '2px 8px', borderRadius: '6px', fontSize: '0.8rem' }}>
              {t.prereq}: {module.prerequisites}
            </span>
          </div>

          <div className="meta-actions">
            {module.appInfo?.repo_link && (
              <a
                href={module.appInfo.repo_link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
              >
                <ExternalLink size={14} />
                <span>{t.demoCode}</span>
              </a>
            )}

            <button
              className={`btn ${isBookmarked ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => onToggleBookmark(module.id)}
              title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Module'}
              style={{ padding: '0.4rem 0.8rem' }}
            >
              <Bookmark size={15} fill={isBookmarked ? 'currentColor' : 'none'} />
              <span>{isBookmarked ? t.saved : t.save}</span>
            </button>

            {!isLocked && (
              <button
                className={`btn ${isCompleted ? 'btn-success' : 'btn-primary'}`}
                onClick={handleCompleteClick}
              >
                {isCompleted ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                <span>{isCompleted ? t.completedBadge : t.markComplete}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Module Content or Paywall Lock Banner */}
      {isLocked ? (
        <div style={{
          marginTop: '2rem',
          marginBottom: '2rem',
          padding: '2.5rem 2rem',
          background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.85), rgba(17, 24, 39, 0.95))',
          border: '1px solid rgba(168, 85, 247, 0.4)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px -15px rgba(168, 85, 247, 0.3)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.5)'
          }}>
            <Lock size={30} color="white" />
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'white', marginBottom: '0.75rem' }}>
            {t.paywallTitle || 'Modul Eksklusif Member Berlangganan'}
          </h2>
          <p style={{ color: '#d1d5db', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
            {t.paywallDesc || 'Modul ini berisi strategi mendalam, naskah produksi, dan alur kerja eksklusif. Berlangganan hanya Rp 99.000/bulan untuk membuka seluruh 66+ modul di 15 track.'}
          </p>

          <div style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '0.5rem',
            textAlign: 'left',
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1.25rem 1.5rem',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginBottom: '1.75rem',
            fontSize: '0.9rem',
            color: '#e9d5ff'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={16} style={{ color: '#f59e0b' }} />
              <span>Naskah Produksi & Prompt Siap Pakai</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Crown size={16} style={{ color: '#a855f7' }} />
              <span>Panduan Penentuan Harga & Menutup Klien Agensi</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} />
              <span>Garansi Uang Kembali 7 Hari (100% Risk Free)</span>
            </div>
          </div>

          <div>
            <button
              onClick={onOpenSubscribeModal}
              style={{
                padding: '0.9rem 2.25rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(90deg, #ec4899, #8b5cf6)',
                color: 'white',
                fontSize: '1.05rem',
                fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.5)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Crown size={20} />
              <span>{t.unlockBtn || 'Buka Akses Berlangganan (Rp 99rb/bln)'}</span>
            </button>
          </div>
        </div>
      ) : (
        <MarkdownViewer
          content={displayContent}
          moduleId={module.id}
          trackId={track.id}
          completedCheckboxes={completedCheckboxes}
          onToggleCheckbox={onToggleCheckbox}
          onSelectModule={onSelectModule}
          onBackToTrack={onBackToTrack}
          onSetActiveTab={onSetActiveTab}
          lang={lang}
        />
      )}

      {/* Personal Notes Section */}
      <div 
        style={{ 
          marginTop: '3rem', 
          padding: '1.5rem', 
          background: 'rgba(17, 24, 39, 0.6)', 
          border: '1px solid var(--border-color)', 
          borderRadius: '12px' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a5b4fc', fontWeight: 600 }}>
            <Edit3 size={16} />
            <span>{t.personalNotes}</span>
          </div>

          {!isEditingNote ? (
            <button className="btn btn-secondary" style={{ fontSize: '0.8rem', padding: '4px 10px' }} onClick={() => setIsEditingNote(true)}>
              {userNote ? t.editNotes : t.addNote}
            </button>
          ) : (
            <button className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '4px 10px' }} onClick={handleSaveNoteSubmit}>
              <Save size={14} /> {t.saveNote}
            </button>
          )}
        </div>

        {isEditingNote ? (
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder={t.notePlaceholder}
            style={{
              width: '100%',
              minHeight: '100px',
              background: '#0d1322',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'white',
              padding: '0.75rem',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-sans)'
            }}
          />
        ) : (
          <p style={{ color: userNote ? '#d1d5db' : '#6b7280', fontSize: '0.9rem', fontStyle: userNote ? 'normal' : 'italic' }}>
            {userNote || t.noNotesYet}
          </p>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="module-nav-footer">
        {onNavigatePrev ? (
          <button className="btn btn-secondary" onClick={onNavigatePrev}>
            <ArrowLeft size={16} /> {t.prevLesson}
          </button>
        ) : <div />}

        {onNavigateNext ? (
          <button className="btn btn-primary" onClick={onNavigateNext}>
            {t.nextLesson} <ArrowRight size={16} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
}
