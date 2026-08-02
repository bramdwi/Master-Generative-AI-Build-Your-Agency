import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import TrackOverview from './components/TrackOverview';
import ModuleView from './components/ModuleView';
import TemplatesView from './components/TemplatesView';
import CalculatorView from './components/CalculatorView';
import PromptGeneratorView from './components/PromptGeneratorView';
import SearchModal from './components/SearchModal';
import CertificateModal from './components/CertificateModal';
import SubscriptionModal from './components/SubscriptionModal';

import { tracksData, allTemplatesData } from './data/courseData';
import { 
  getStoredData, 
  setLanguage,
  toggleSubscriptionStatus,
  toggleModuleCompleted, 
  toggleBookmark, 
  saveModuleNote, 
  toggleCheckboxState, 
  saveStoredData 
} from './utils/storage';

export default function App() {
  const [userData, setUserData] = useState(getStoredData());
  const [activeTab, setActiveTab] = useState('dashboard'); // dashboard | tracks | templates | calculator | prompt-gen | module
  const [currentTrackId, setCurrentTrackId] = useState(tracksData[0]?.id);
  const [currentModuleId, setCurrentModuleId] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [certTrack, setCertTrack] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sync state changes to storage
  useEffect(() => {
    saveStoredData(userData);
  }, [userData]);

  // Global Cmd+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentTrack = tracksData.find(t => t.id === currentTrackId) || tracksData[0];
  
  let currentModule = null;
  if (currentModuleId) {
    for (const t of tracksData) {
      const m = t.modules.find(mod => mod.id === currentModuleId);
      if (m) {
        currentModule = m;
        break;
      }
    }
  }

  // Handlers
  const handleToggleLang = () => {
    const nextLang = userData.lang === 'id' ? 'en' : 'id';
    const updated = setLanguage(nextLang);
    setUserData(updated);
  };

  const handleToggleSubscribe = () => {
    const updated = toggleSubscriptionStatus();
    setUserData(updated);
  };

  const handleSelectTrack = (trackId) => {
    setCurrentTrackId(trackId);
    setCurrentModuleId(null);
    setActiveTab('tracks');
  };

  const handleSelectModule = (moduleObj) => {
    setCurrentTrackId(moduleObj.trackId);
    setCurrentModuleId(moduleObj.id);
    setActiveTab('module');

    setUserData(prev => ({
      ...prev,
      lastVisited: moduleObj.id
    }));
  };

  const handleToggleComplete = (moduleId) => {
    const updated = toggleModuleCompleted(moduleId);
    setUserData(updated);
  };

  const handleToggleBookmark = (moduleId) => {
    const updated = toggleBookmark(moduleId);
    setUserData(updated);
  };

  const handleSaveNote = (moduleId, text) => {
    const updated = saveModuleNote(moduleId, text);
    setUserData(updated);
  };

  const handleToggleCheckbox = (moduleId, checkboxId) => {
    const updated = toggleCheckboxState(moduleId, checkboxId);
    setUserData(updated);
  };

  // Pagination inside a track
  const handleNavigateModule = (direction) => {
    if (!currentTrack || !currentModule) return;
    const modules = currentTrack.modules;
    const idx = modules.findIndex(m => m.id === currentModule.id);
    if (direction === 'prev' && idx > 0) {
      handleSelectModule(modules[idx - 1]);
    } else if (direction === 'next' && idx < modules.length - 1) {
      handleSelectModule(modules[idx + 1]);
    }
  };

  const totalModulesCount = tracksData.reduce((acc, t) => acc + t.modules.length, 0);

  return (
    <div className="app-container">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSearch={() => setSearchOpen(true)}
        streakCount={userData.streak.count}
        completedCount={userData.completedModules.length}
        totalModules={totalModulesCount}
        onToggleSidebar={() => setSidebarOpen(prev => !prev)}
        isSubscribed={userData.isSubscribed}
        onOpenSubscribeModal={() => setSubscriptionModalOpen(true)}
        lang={userData.lang}
      />

      <div className="main-content">
        {sidebarOpen && (
          <div 
            className="sidebar-backdrop" 
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <Sidebar
          tracks={tracksData}
          currentTrackId={currentTrackId}
          currentModuleId={currentModuleId}
          completedModules={userData.completedModules}
          bookmarks={userData.bookmarks}
          isSubscribed={userData.isSubscribed}
          onOpenSubscribeModal={() => setSubscriptionModalOpen(true)}
          onSelectModule={handleSelectModule}
          onSelectTrack={handleSelectTrack}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          lang={userData.lang}
        />

        <main className="page-area">
          {activeTab === 'dashboard' && (
            <DashboardView
              tracks={tracksData}
              completedModules={userData.completedModules}
              bookmarks={userData.bookmarks}
              streakCount={userData.streak.count}
              lastModuleId={userData.lastVisited}
              isSubscribed={userData.isSubscribed}
              onOpenSubscribeModal={() => setSubscriptionModalOpen(true)}
              onSelectTrack={handleSelectTrack}
              onSelectModule={handleSelectModule}
              onSetActiveTab={setActiveTab}
              onGetCertificate={(tr) => setCertTrack(tr)}
              lang={userData.lang}
            />
          )}

          {activeTab === 'tracks' && (
            <TrackOverview
              track={currentTrack}
              completedModules={userData.completedModules}
              isSubscribed={userData.isSubscribed}
              onOpenSubscribeModal={() => setSubscriptionModalOpen(true)}
              onSelectModule={handleSelectModule}
              onOpenTemplate={(tmp) => {
                setActiveTab('templates');
              }}
              onGetCertificate={(tr) => setCertTrack(tr)}
              lang={userData.lang}
            />
          )}

          {activeTab === 'module' && currentModule && (
            <ModuleView
              module={currentModule}
              track={currentTrack}
              isCompleted={userData.completedModules.includes(currentModule.id)}
              isBookmarked={userData.bookmarks.includes(currentModule.id)}
              userNote={userData.notes[currentModule.id] || ''}
              completedCheckboxes={userData.completedCheckboxes[currentModule.id] || []}
              isSubscribed={userData.isSubscribed}
              onOpenSubscribeModal={() => setSubscriptionModalOpen(true)}
              onToggleComplete={handleToggleComplete}
              onToggleBookmark={handleToggleBookmark}
              onSaveNote={handleSaveNote}
              onToggleCheckbox={handleToggleCheckbox}
              onNavigatePrev={
                currentTrack.modules.findIndex(m => m.id === currentModule.id) > 0
                  ? () => handleNavigateModule('prev')
                  : null
              }
              onNavigateNext={
                currentTrack.modules.findIndex(m => m.id === currentModule.id) < currentTrack.modules.length - 1
                  ? () => handleNavigateModule('next')
                  : null
              }
              onBackToTrack={() => setActiveTab('tracks')}
              onSelectModule={handleSelectModule}
              onSetActiveTab={setActiveTab}
              lang={userData.lang}
            />
          )}

          {activeTab === 'templates' && (
            <TemplatesView
              templates={allTemplatesData}
              tracks={tracksData}
              lang={userData.lang}
            />
          )}

          {activeTab === 'calculator' && (
            <CalculatorView lang={userData.lang} />
          )}

          {activeTab === 'prompt-gen' && (
            <PromptGeneratorView lang={userData.lang} />
          )}
        </main>
      </div>

      {searchOpen && (
        <SearchModal
          tracks={tracksData}
          templates={allTemplatesData}
          onClose={() => setSearchOpen(false)}
          onSelectModule={handleSelectModule}
          onSelectTemplate={(tmp) => {
            setActiveTab('templates');
          }}
          lang={userData.lang}
        />
      )}

      {certTrack && (
        <CertificateModal
          track={certTrack}
          onClose={() => setCertTrack(null)}
          lang={userData.lang}
        />
      )}

      <SubscriptionModal
        isOpen={subscriptionModalOpen}
        onClose={() => setSubscriptionModalOpen(false)}
        isSubscribed={userData.isSubscribed}
        onToggleSubscribe={handleToggleSubscribe}
        lang={userData.lang}
      />
    </div>
  );
}
