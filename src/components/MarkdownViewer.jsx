import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { Copy, Check } from 'lucide-react';

export default function MarkdownViewer({ 
  content, 
  moduleId, 
  trackId,
  completedCheckboxes = [], 
  onToggleCheckbox 
}) {
  const [copiedCodeId, setCopiedCodeId] = useState(null);

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

    // Fix images and update src
    const imgs = doc.querySelectorAll('img');
    imgs.forEach(img => {
      const origSrc = img.getAttribute('src');
      if (origSrc) {
        img.src = resolveMediaUrl(origSrc);
        img.style.maxWidth = '100%';
        img.style.borderRadius = '10px';
        img.style.margin = '0.5rem 0';
        img.loading = 'lazy';
      }
    });

    // Fix links pointing to .mp4 videos and embed video player
    const links = doc.querySelectorAll('a');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && (href.endsWith('.mp4') || href.endsWith('.webm'))) {
        const videoUrl = resolveMediaUrl(href);
        const videoContainer = doc.createElement('div');
        videoContainer.className = 'video-embed-container';
        videoContainer.style.margin = '1rem 0';

        videoContainer.innerHTML = `
          <video 
            controls 
            autoplay 
            loop 
            muted 
            playsinline 
            style="width: 100%; max-width: 640px; border-radius: 12px; border: 1px solid var(--border-color); background: #000;"
            src="${videoUrl}"
          >
            Your browser does not support video playback.
          </video>
        `;

        // Replace link text if link is alone in paragraph, or append video
        if (link.parentNode && link.parentNode.tagName === 'P' && link.parentNode.childNodes.length === 1) {
          link.parentNode.replaceWith(videoContainer);
        } else {
          link.after(videoContainer);
        }
      }
    });

    // Fix pre code blocks
    const pres = doc.querySelectorAll('pre');
    pres.forEach((pre, index) => {
      const code = pre.querySelector('code');
      const codeText = code ? code.innerText : pre.innerText;
      const lang = code ? (code.className.match(/language-(\w+)/)?.[1] || 'code') : 'code';

      const wrapper = doc.createElement('div');
      wrapper.className = 'code-block-wrapper';

      const header = doc.createElement('div');
      header.className = 'code-block-header';
      header.innerHTML = `<span>${lang}</span><button class="copy-btn" data-code-id="${index}">Copy</button>`;

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

    const checkbox = e.target.closest('input[type="checkbox"]');
    if (checkbox && moduleId && onToggleCheckbox) {
      onToggleCheckbox(moduleId, checkbox.id);
    }
  };

  return (
    <div 
      className="markdown-body" 
      onClick={handleContentClick}
      dangerouslySetInnerHTML={{ __html: renderFormattedContent() }} 
    />
  );
}
