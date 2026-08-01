import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Copy, 
  Check, 
  Download, 
  X,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import MarkdownViewer from './MarkdownViewer';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function TemplatesView({ templates, tracks, lang = 'id' }) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrackFilter, setSelectedTrackFilter] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [copied, setCopied] = useState(false);

  const filteredTemplates = templates.filter(tmp => {
    const activeContent = (lang === 'id' && tmp.content_id) ? tmp.content_id : tmp.content;
    const matchesSearch = tmp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          activeContent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTrack = selectedTrackFilter === 'All' || tmp.trackId === selectedTrackFilter;
    return matchesSearch && matchesTrack;
  });

  const handleCopyContent = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMd = (template) => {
    const activeContent = (lang === 'id' && template.content_id) ? template.content_id : template.content;
    const element = document.createElement('a');
    const file = new Blob([activeContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.filename || template.title}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'white', marginBottom: '0.5rem' }}>
          {t.templatesTitle}
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
          {t.templatesDesc}
        </p>
      </div>

      {/* Filter Controls */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div style={{ flex: 1, minWidth: '280px' }} className="search-input-wrapper">
          <Search size={18} style={{ color: 'var(--text-dim)' }} />
          <input
            type="text"
            className="search-input"
            placeholder={t.searchTemplatesPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="form-select"
          style={{ width: 'auto', minWidth: '220px' }}
          value={selectedTrackFilter}
          onChange={(e) => setSelectedTrackFilter(e.target.value)}
        >
          <option value="All">{t.allTracksOption} ({templates.length} {t.templatesSuiteTitle.toLowerCase()})</option>
          {tracks.map(tr => {
            const trTitle = lang === 'id' ? (trackTranslationsID[tr.id]?.title || tr.title) : tr.title;
            return (
              <option key={tr.id} value={tr.id}>
                Track {tr.num}: {trTitle} ({tr.templates.length})
              </option>
            );
          })}
        </select>
      </div>

      {/* Grid of Templates */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.25rem' }}>
        {filteredTemplates.map(tmp => {
          const trTitle = lang === 'id' ? (trackTranslationsID[tmp.trackId]?.title || tmp.trackTitle) : tmp.trackTitle;

          return (
            <div
              key={tmp.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              className="module-card"
              onClick={() => setSelectedTemplate(tmp)}
            >
              <div>
                <span className="card-num-badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc' }}>
                  Track {tmp.trackNum}
                </span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                  {tmp.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {trTitle}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem', paddingTop: '0.875rem', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.8rem', color: '#a5b4fc' }}>
                <span>{t.viewMarkdown}</span>
                <FileText size={16} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for viewing selected template */}
      {selectedTemplate && (
        <div className="modal-backdrop" onClick={() => setSelectedTemplate(null)}>
          <div className="modal-content" style={{ maxWidth: '840px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div style={{ fontSize: '0.8rem', color: '#a5b4fc', fontWeight: 600 }}>
                  Track {selectedTemplate.trackNum}: {lang === 'id' ? (trackTranslationsID[selectedTemplate.trackId]?.title || selectedTemplate.trackTitle) : selectedTemplate.trackTitle}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>
                  {selectedTemplate.title}
                </h2>
              </div>
              <button 
                className="btn btn-secondary" 
                style={{ padding: '6px' }}
                onClick={() => setSelectedTemplate(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <MarkdownViewer
                content={(lang === 'id' && selectedTemplate.content_id) ? selectedTemplate.content_id : selectedTemplate.content}
                trackId={selectedTemplate.trackId}
              />
            </div>

            <div className="modal-header" style={{ borderTop: '1px solid var(--border-color)', borderBottom: 'none' }}>
              <button className="btn btn-secondary" onClick={() => handleDownloadMd(selectedTemplate)}>
                <Download size={16} /> {t.downloadMd}
              </button>

              <button className="btn btn-primary" onClick={() => handleCopyContent((lang === 'id' && selectedTemplate.content_id) ? selectedTemplate.content_id : selectedTemplate.content)}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span>{copied ? t.copiedAlert : t.copyTemplate}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
