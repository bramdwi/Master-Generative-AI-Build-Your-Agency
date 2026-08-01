import React from 'react';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  FileText, 
  Calculator, 
  Wand2, 
  LayoutDashboard, 
  Flame, 
  Menu,
  CheckCircle2
} from 'lucide-react';
import { uiTranslations } from '../data/translations';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  onOpenSearch, 
  streakCount, 
  completedCount, 
  totalModules,
  onToggleSidebar,
  lang = 'id'
}) {
  const t = uiTranslations[lang] || uiTranslations.id;

  return (
    <header className="navbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button 
          className="nav-tab-btn" 
          onClick={onToggleSidebar}
          style={{ padding: '6px' }}
          title={t.toggleSidebar}
        >
          <Menu size={20} />
        </button>

        <div className="nav-brand" onClick={() => setActiveTab('dashboard')}>
          <div className="brand-icon">
            <Sparkles size={20} />
          </div>
          <span className="brand-title">{t.brandTitle}</span>
          <span className="brand-badge">{t.brandBadge}</span>
        </div>
      </div>

      <div className="nav-actions">
        <button className="search-trigger-btn" onClick={onOpenSearch}>
          <Search size={16} />
          <span>{t.searchPlaceholder}</span>
        </button>

        <nav style={{ display: 'flex', gap: '0.375rem' }}>
          <button 
            className={`nav-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={16} />
            <span>{t.tabDashboard}</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'tracks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tracks')}
          >
            <BookOpen size={16} />
            <span>{t.tabTracks}</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'templates' ? 'active' : ''}`}
            onClick={() => setActiveTab('templates')}
          >
            <FileText size={16} />
            <span>{t.tabTemplates}</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            <Calculator size={16} />
            <span>{t.tabCalculator}</span>
          </button>

          <button 
            className={`nav-tab-btn ${activeTab === 'prompt-gen' ? 'active' : ''}`}
            onClick={() => setActiveTab('prompt-gen')}
          >
            <Wand2 size={16} />
            <span>{t.tabPromptGen}</span>
          </button>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginLeft: '0.5rem' }}>
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.375rem', 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              color: '#f59e0b',
              background: 'rgba(245, 158, 11, 0.12)',
              padding: '4px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(245, 158, 11, 0.25)'
            }}
            title={t.dailyStreakTitle}
          >
            <Flame size={15} />
            <span>{streakCount}d {t.streak}</span>
          </div>

          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.375rem', 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              color: '#10b981',
              background: 'rgba(16, 185, 129, 0.12)',
              padding: '4px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(16, 185, 129, 0.25)'
            }}
            title={t.completedModulesTitle}
          >
            <CheckCircle2 size={15} />
            <span>{completedCount}/{totalModules}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
