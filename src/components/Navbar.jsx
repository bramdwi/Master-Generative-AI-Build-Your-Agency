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
    <>
      <header className="navbar">
        <div className="navbar-left">
          <button 
            className="nav-icon-btn sidebar-toggle-btn" 
            onClick={onToggleSidebar}
            title={t.toggleSidebar}
            aria-label={t.toggleSidebar}
          >
            <Menu size={20} />
          </button>

          <div className="nav-brand" onClick={() => setActiveTab('dashboard')}>
            <div className="brand-icon">
              <Sparkles size={20} />
            </div>
            <span className="brand-title">{t.brandTitle}</span>
            <span className="brand-badge desktop-only">{t.brandBadge}</span>
          </div>
        </div>

        {/* Desktop Main Navigation */}
        <nav className="desktop-nav">
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

        <div className="nav-actions">
          <button className="search-trigger-btn" onClick={onOpenSearch} title={t.searchPlaceholder}>
            <Search size={16} />
            <span className="search-text-desktop">{t.searchPlaceholder}</span>
            <span className="kbd-shortcut desktop-only">⌘K</span>
          </button>

          <div className="nav-badges">
            <div className="badge-item badge-streak" title={t.dailyStreakTitle}>
              <Flame size={15} />
              <span>{streakCount}d</span>
            </div>

            <div className="badge-item badge-progress" title={t.completedModulesTitle}>
              <CheckCircle2 size={15} />
              <span>{completedCount}/{totalModules}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-bottom-nav">
        <button 
          className={`mobile-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <button 
          className={`mobile-nav-item ${activeTab === 'tracks' ? 'active' : ''}`}
          onClick={() => setActiveTab('tracks')}
        >
          <BookOpen size={20} />
          <span>Tracks</span>
        </button>

        <button 
          className={`mobile-nav-item ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          <FileText size={20} />
          <span>Templates</span>
        </button>

        <button 
          className={`mobile-nav-item ${activeTab === 'calculator' ? 'active' : ''}`}
          onClick={() => setActiveTab('calculator')}
        >
          <Calculator size={20} />
          <span>Calc</span>
        </button>

        <button 
          className={`mobile-nav-item ${activeTab === 'prompt-gen' ? 'active' : ''}`}
          onClick={() => setActiveTab('prompt-gen')}
        >
          <Wand2 size={20} />
          <span>Prompt</span>
        </button>
      </nav>
    </>
  );
}
