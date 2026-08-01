import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  CheckCircle2, 
  Circle, 
  Bookmark,
  Award
} from 'lucide-react';
import { uiTranslations, trackTranslationsID } from '../data/translations';

const CATEGORIES_EN = [
  'All',
  'Video & UGC',
  'Avatars & Voice',
  'Visual & E-Commerce',
  'Business, Tools & Agents'
];

const CATEGORIES_ID = [
  'Semua',
  'Video & UGC',
  'Avatar & Musik',
  'Visual & E-Commerce',
  'Bisnis, Tool & Agent'
];

export default function Sidebar({ 
  tracks, 
  currentTrackId, 
  currentModuleId, 
  completedModules, 
  bookmarks,
  onSelectModule, 
  onSelectTrack,
  isOpen,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;
  const categories = lang === 'id' ? CATEGORIES_ID : CATEGORIES_EN;

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [expandedTracks, setExpandedTracks] = useState({
    [currentTrackId || tracks[0]?.id]: true
  });

  const totalModulesCount = tracks.reduce((acc, t) => acc + t.modules.length, 0);
  const completedCount = completedModules.length;
  const progressPercent = Math.round((completedCount / (totalModulesCount || 1)) * 100);

  const toggleTrack = (trackId) => {
    setExpandedTracks(prev => ({
      ...prev,
      [trackId]: !prev[trackId]
    }));
  };

  const filteredTracks = tracks.filter(tr => {
    if (selectedCategory === categories[0]) return true;
    const cat = lang === 'id' ? (trackTranslationsID[tr.id]?.category || tr.category) : tr.category;
    return cat === selectedCategory;
  });

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="progress-widget">
          <div className="progress-header">
            <span>{t.overallProgress}</span>
            <span style={{ fontWeight: 700, color: 'white' }}>{progressPercent}%</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>
            <span>{completedCount} / {totalModulesCount} {t.modulesCount}</span>
            {bookmarks.length > 0 && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '2px', color: '#a5b4fc' }}>
                <Bookmark size={12} /> {bookmarks.length} {t.saved}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="sidebar-category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={`cat-chip ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sidebar-track-list">
        {filteredTracks.map(track => {
          const isExpanded = !!expandedTracks[track.id];
          const isTrackActive = currentTrackId === track.id;
          const trackCompletedModules = track.modules.filter(m => completedModules.includes(m.id)).length;
          const isTrackCompleted = trackCompletedModules === track.modules.length && track.modules.length > 0;
          const trackTitle = lang === 'id' ? (trackTranslationsID[track.id]?.title || track.title) : track.title;

          return (
            <div key={track.id} className="sidebar-track-group">
              <button
                className={`track-item-header ${isTrackActive ? 'active' : ''}`}
                onClick={() => {
                  toggleTrack(track.id);
                  onSelectTrack(track.id);
                }}
              >
                <div className="track-title-info">
                  <span className="track-num-badge">
                    {isTrackCompleted ? <CheckCircle2 size={14} style={{ color: '#10b981' }} /> : track.num}
                  </span>
                  <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                    {trackTitle}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                    {trackCompletedModules}/{track.modules.length}
                  </span>
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </div>
              </button>

              {isExpanded && (
                <div className="sidebar-module-list">
                  {track.modules.map(mod => {
                    const isModCompleted = completedModules.includes(mod.id);
                    const isModActive = currentModuleId === mod.id;
                    const isBookmarked = bookmarks.includes(mod.id);

                    return (
                      <button
                        key={mod.id}
                        className={`sidebar-module-item ${isModActive ? 'active' : ''}`}
                        onClick={() => onSelectModule(mod)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                          {isModCompleted ? (
                            <CheckCircle2 size={13} className="mod-check-icon" />
                          ) : (
                            <Circle size={13} style={{ color: '#4b5563' }} />
                          )}
                          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {mod.num}. {mod.title}
                          </span>
                        </div>

                        {isBookmarked && <Bookmark size={12} style={{ color: '#a855f7' }} />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
