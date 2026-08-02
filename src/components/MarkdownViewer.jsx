import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { FileText, Copy, Check, Download, X } from 'lucide-react';
import { tracksData, allTemplatesData } from '../data/courseData';
import { uiTranslations, trackTranslationsID } from '../data/translations';

export default function MarkdownViewer({ 
  content, 
  moduleId, 
  trackId,
  completedCheckboxes = [], 
  onToggleCheckbox,
  onSelectModule,
  onBackToTrack,
  onSetActiveTab,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [selectedTemplateModal, setSelectedTemplateModal] = useState(null);
  const [templateCopied, setTemplateCopied] = useState(false);

  useEffect(() => {
    marked.setOptions({
      gfm: true,
      breaks: true
    });
  }, []);

  const copyToClipboard = (codeText, id) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleCopyTemplateContent = (text) => {
    navigator.clipboard.writeText(text);
    setTemplateCopied(true);
    setTimeout(() => setTemplateCopied(false), 2000);
  };

  const handleDownloadTemplateMd = (template) => {
    const activeContent = (lang === 'id' && template.content_id) ? template.content_id : template.content;
    const element = document.createElement('a');
    const file = new Blob([activeContent], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `${template.filename || template.title}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  // Convert custom callouts into styled alert boxes
  const processAlerts = (rawMd) => {
    if (!rawMd) return '';
    
    let processed = rawMd
      .replace(/^>\s*\[!NOTE\]\s*(.+)$/gmi, '<div class="alert-box alert-note"><strong>Note:</strong> $1</div>')
      .replace(/^>\s*\[!TIP\]\s*(.+)$/gmi, '<div class="alert-box alert-tip"><strong>Tip:</strong> $1</div>')
      .replace(/^>\s*\[!IMPORTANT\]\s*(.+)$/gmi, '<div class="alert-box alert-important"><strong>Important:</strong> $1</div>')
      .replace(/^>\s*\[!TERPENTING\]\s*(.+)$/gmi, '<div class="alert-box alert-important"><strong>Terpenting:</strong> $1</div>')
      .replace(/^>\s*\[!WARNING\]\s*(.+)$/gmi, '<div class="alert-box alert-warning"><strong>Warning:</strong> $1</div>');
      
    return processed;
  };

  const resolveMediaUrl = (urlStr) => {
    if (!urlStr) return urlStr;
    if (urlStr.startsWith('http://') || urlStr.startsWith('https://') || urlStr.startsWith('data:')) {
      return urlStr;
    }
    
    // Clean leading slashes or relative prefixes
    let cleanPath = urlStr.replace(/^\.\//, '').replace(/^\//, '');

    if (cleanPath.startsWith('docs/')) {
      return `/${cleanPath}`;
    }

    if (cleanPath.startsWith('tracks/')) {
      return `/${cleanPath}`;
    }

    // Relative to current track
    if (trackId) {
      return `/tracks/${trackId}/${cleanPath}`;
    }

    return `/${cleanPath}`;
  };

  const renderFormattedContent = () => {
    const rawHtml = marked.parse(processAlerts(content));
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, 'text/html');

    // Fix image elements
    const imgs = doc.querySelectorAll('img');
    imgs.forEach(img => {
      const origSrc = img.getAttribute('src');
      if (origSrc) {
        const resolved = resolveMediaUrl(origSrc);
        img.setAttribute('src', resolved);
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '10px';
        img.style.margin = '0.5rem 0';
        img.loading = 'lazy';
      }
    });

    // Fix native video elements
    const videos = doc.querySelectorAll('video');
    videos.forEach(v => {
      const origSrc = v.getAttribute('src');
      if (origSrc) {
        v.setAttribute('src', resolveMediaUrl(origSrc));
      }
      v.querySelectorAll('source').forEach(s => {
        const sSrc = s.getAttribute('src');
        if (sSrc) s.setAttribute('src', resolveMediaUrl(sSrc));
      });
      v.setAttribute('controls', 'true');
      v.setAttribute('loop', 'true');
      v.setAttribute('muted', 'true');
      v.setAttribute('playsinline', 'true');
      v.style.maxWidth = '100%';
      v.style.borderRadius = '12px';
    });

    // Fix standalone links pointing to .mp4 or .webm files
    const links = doc.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href.endsWith('.mp4') || href.endsWith('.webm'))) {
        const videoUrl = resolveMediaUrl(href);
        link.setAttribute('href', videoUrl);
        link.setAttribute('target', '_blank');

        // Check if a video player for this URL is already present right after or inside
        const container = link.closest('.video-embed-container');
        if (!container) {
          const videoWrap = doc.createElement('div');
          videoWrap.className = 'video-embed-container';
          videoWrap.style.margin = '1rem 0';
          videoWrap.style.textAlign = 'center';

          videoWrap.innerHTML = `
            <video 
              controls 
              autoplay 
              loop 
              muted 
              playsinline 
              style="width: 100%; max-width: 640px; border-radius: 12px; border: 1px solid var(--border-color); background: #000; display: block; margin: 0.5rem auto;"
              src="${videoUrl}"
            >
              Your browser does not support video playback.
            </video>
          `;

          // Insert video wrap after the outer paragraph or block element
          const blockElement = link.closest('p, div, blockquote, table') || link.parentNode;
          if (blockElement && blockElement.parentNode) {
            blockElement.parentNode.insertBefore(videoWrap, blockElement.nextSibling);
          }
        }
      }
    });

    // Fix pre code blocks
    const pres = doc.querySelectorAll('pre');
    pres.forEach((pre, index) => {
      const code = pre.querySelector('code');
      const codeText = code ? code.innerText : pre.innerText;
      const langName = code ? (code.className.match(/language-(\w+)/)?.[1] || 'code') : 'code';

      const wrapper = doc.createElement('div');
      wrapper.className = 'code-block-wrapper';

      const header = doc.createElement('div');
      header.className = 'code-block-header';
      header.innerHTML = `<span>${langName}</span><button class="copy-btn" data-code-id="${index}">Copy</button>`;

      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });

    // Fix checkboxes
    const checkboxes = doc.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((cb, index) => {
      const cbId = `cb-${index}`;
      cb.id = cbId;
      cb.className = 'custom-checkbox-input';
      if (completedCheckboxes.includes(cbId)) {
        cb.setAttribute('checked', 'checked');
      }
    });

    return doc.body.innerHTML;
  };

  const handleContentClick = (e) => {
    // 1. Copy code button
    const copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      const wrapper = copyBtn.closest('.code-block-wrapper');
      const pre = wrapper ? wrapper.querySelector('pre') : null;
      if (pre) {
        const codeText = pre.innerText;
        const codeId = copyBtn.getAttribute('data-code-id');
        copyToClipboard(codeText, codeId);
        copyBtn.innerText = 'Copied!';
        setTimeout(() => {
          copyBtn.innerText = 'Copy';
        }, 2000);
      }
      return;
    }

    // 2. Checkbox toggle
    const checkbox = e.target.closest('input[type="checkbox"]');
    if (checkbox && moduleId && onToggleCheckbox) {
      onToggleCheckbox(moduleId, checkbox.id);
      return;
    }

    // 3. Anchor link handling
    const anchor = e.target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href');
      if (!href) return;

      // Allow native video player links
      if (href.endsWith('.mp4') || href.endsWith('.webm')) {
        return;
      }

      // External links
      if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
        e.preventDefault();
        window.open(href, '_blank', 'noopener,noreferrer');
        return;
      }

      // Internal Hash links
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.getElementById(href.slice(1));
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Handle relative Markdown links
      e.preventDefault();
      const cleanHref = href.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '');

      // A) Check if it's a template link
      const isTemplateLink = cleanHref.includes('templates') || 
                             cleanHref.endsWith('-template.md') || 
                             cleanHref.endsWith('-checklist.md') || 
                             cleanHref.endsWith('-matrix.md') || 
                             cleanHref.endsWith('-log.md') || 
                             cleanHref.endsWith('-calculator.md') || 
                             cleanHref.endsWith('-tracker.md') || 
                             cleanHref.endsWith('-worksheet.md') || 
                             cleanHref.endsWith('-sheet.md');

      if (isTemplateLink) {
        const tFileName = cleanHref.replace(/.*templates\//, '');
        const tSlug = tFileName.replace(/\.md$/, '');

        if (!tSlug || tFileName === '' || tFileName === '/') {
          if (onSetActiveTab) {
            onSetActiveTab('templates');
          }
          return;
        }

        // Search for matching template object
        let foundTemplate = allTemplatesData.find(tmp => 
          (trackId && tmp.trackId === trackId && (tmp.filename === tFileName || tmp.id.endsWith(tSlug))) ||
          tmp.filename === tFileName ||
          tmp.id.endsWith(tSlug) ||
          tmp.id.includes(tSlug)
        );

        if (foundTemplate) {
          setSelectedTemplateModal(foundTemplate);
          return;
        }
      }

      // B) Check if it's a module link
      if (cleanHref.endsWith('.md')) {
        const modSlug = cleanHref.replace(/\.md$/, '');

        if (modSlug === 'README') {
          if (onBackToTrack) onBackToTrack();
          return;
        }

        let foundMod = null;

        if (trackId) {
          const currentTr = tracksData.find(t => t.id === trackId);
          if (currentTr) {
            foundMod = currentTr.modules.find(m => m.filename === cleanHref || m.id.endsWith(modSlug));
          }
        }

        if (!foundMod) {
          for (const tr of tracksData) {
            const m = tr.modules.find(mod => mod.filename === cleanHref || mod.id.endsWith(modSlug));
            if (m) {
              foundMod = m;
              break;
            }
          }
        }

        if (foundMod && onSelectModule) {
          onSelectModule(foundMod);
          return;
        }
      }

      // C) Fallback for templates tab navigation
      if (cleanHref.startsWith('templates')) {
        if (onSetActiveTab) onSetActiveTab('templates');
      }
    }
  };

  return (
    <>
      <div 
        className="markdown-body" 
        onClick={handleContentClick}
        dangerouslySetInnerHTML={{ __html: renderFormattedContent() }} 
      />

      {/* Modal for viewing selected template directly from Markdown links */}
      {selectedTemplateModal && (
        <div className="modal-backdrop" onClick={() => setSelectedTemplateModal(null)}>
          <div className="modal-content" style={{ maxWidth: '840px' }} onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <div style={{ fontSize: '0.8rem', color: '#a5b4fc', fontWeight: 600 }}>
                  Track {selectedTemplateModal.trackNum}: {lang === 'id' ? (trackTranslationsID[selectedTemplateModal.trackId]?.title || selectedTemplateModal.trackTitle) : selectedTemplateModal.trackTitle}
                </div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'white' }}>
                  {selectedTemplateModal.title}
                </h2>
              </div>
              <button 
                className="btn btn-secondary" 
                style={{ padding: '6px' }}
                onClick={() => setSelectedTemplateModal(null)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              <MarkdownViewer
                content={(lang === 'id' && selectedTemplateModal.content_id) ? selectedTemplateModal.content_id : selectedTemplateModal.content}
                trackId={selectedTemplateModal.trackId}
                lang={lang}
              />
            </div>

            <div className="modal-header" style={{ borderTop: '1px solid var(--border-color)', borderBottom: 'none' }}>
              <button className="btn btn-secondary" onClick={() => handleDownloadTemplateMd(selectedTemplateModal)}>
                <Download size={16} /> {t.downloadMd}
              </button>

              <button className="btn btn-primary" onClick={() => handleCopyTemplateContent((lang === 'id' && selectedTemplateModal.content_id) ? selectedTemplateModal.content_id : selectedTemplateModal.content)}>
                {templateCopied ? <Check size={16} /> : <Copy size={16} />}
                <span>{templateCopied ? t.copiedAlert : t.copyTemplate}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
