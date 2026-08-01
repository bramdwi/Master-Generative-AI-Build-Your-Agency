import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, FileText, ArrowRight } from 'lucide-react';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function SearchModal({ 
  tracks, 
  templates, 
  onClose, 
  onSelectModule, 
  onSelectTemplate,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const resultsModules = [];
  const resultsTemplates = [];

  if (query.trim().length > 1) {
    const q = query.toLowerCase();

    tracks.forEach(tr => {
      const trTitle = lang === 'id' ? (trackTranslationsID[tr.id]?.title || tr.title) : tr.title;

      tr.modules.forEach(mod => {
        if (
          mod.title.toLowerCase().includes(q) ||
          mod.content.toLowerCase().includes(q) ||
          trTitle.toLowerCase().includes(q)
        ) {
          resultsModules.push({ ...mod, trackTitle: trTitle, trackNum: tr.num });
        }
      });
    });

    templates.forEach(tmp => {
      if (
        tmp.title.toLowerCase().includes(q) ||
        tmp.content.toLowerCase().includes(q)
      ) {
        resultsTemplates.push(tmp);
      }
    });
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <div className="modal-header">
          <div className="search-input-wrapper" style={{ flex: 1, border: 'none', background: 'transparent', padding: 0 }}>
            <Search size={20} style={{ color: 'var(--primary-indigo)' }} />
            <input
              type="text"
              className="search-input"
              placeholder={t.searchPlaceholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
          <button className="btn btn-secondary" style={{ padding: '6px' }} onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="modal-body" style={{ minHeight: '300px' }}>
          {query.trim().length <= 1 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-dim)' }}>
              <p>{t.searchHint}</p>
            </div>
          ) : resultsModules.length === 0 && resultsTemplates.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-dim)' }}>
              <p>{t.noResults} "{query}".</p>
            </div>
          ) : (
            <div>
              {resultsModules.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <BookOpen size={14} /> {t.courseModules} ({resultsModules.length})
                  </div>
                  {resultsModules.slice(0, 10).map(mod => (
                    <div
                      key={mod.id}
                      className="search-result-item"
                      onClick={() => {
                        onSelectModule(mod);
                        onClose();
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: '#a5b4fc' }}>
                        {t.trackLabel} {mod.trackNum}: {mod.trackTitle}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginTop: '2px' }}>
                        {t.moduleLabel} {mod.num}: {mod.title}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {resultsTemplates.length > 0 && (
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <FileText size={14} /> {t.templatesSuiteTitle} ({resultsTemplates.length})
                  </div>
                  {resultsTemplates.slice(0, 10).map(tmp => (
                    <div
                      key={tmp.id}
                      className="search-result-item"
                      onClick={() => {
                        onSelectTemplate(tmp);
                        onClose();
                      }}
                    >
                      <div style={{ fontSize: '0.75rem', color: '#c084fc' }}>
                        {t.trackLabel} {tmp.trackNum}: {tmp.trackTitle}
                      </div>
                      <div style={{ fontSize: '1rem', fontWeight: 700, color: 'white', marginTop: '2px' }}>
                        {tmp.title}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
