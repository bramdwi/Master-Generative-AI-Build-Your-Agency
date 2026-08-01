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
  BookOpen
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
  onToggleComplete,
  onToggleBookmark,
  onSaveNote,
  onToggleCheckbox,
  onNavigatePrev,
  onNavigateNext,
  onBackToTrack,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(userNote || '');

  if (!module) return null;

  const trackTitle = lang === 'id' ? (trackTranslationsID[track.id]?.title || track.title) : track.title;
  const displayContent = (lang === 'id' && module.content_id) ? module.content_id : module.content;

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

        <h1 className="viewer-title">{module.num}. {module.title}</h1>

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

            <button
              className={`btn ${isCompleted ? 'btn-success' : 'btn-primary'}`}
              onClick={handleCompleteClick}
            >
              {isCompleted ? <CheckCircle2 size={16} /> : <Circle size={16} />}
              <span>{isCompleted ? t.completedBadge : t.markComplete}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Module Content */}
      <MarkdownViewer
        content={displayContent}
        moduleId={module.id}
        trackId={track.id}
        completedCheckboxes={completedCheckboxes}
        onToggleCheckbox={onToggleCheckbox}
      />

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
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justify: 'space-between', 
          marginTop: '2.5rem', 
          paddingTop: '1.5rem', 
          borderTop: '1px solid var(--border-color)' 
        }}
      >
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
