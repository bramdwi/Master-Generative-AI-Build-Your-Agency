const STORAGE_KEY = 'ai_creator_academy_user_data_v2';

const defaultData = {
  lang: 'id', // Default to Indonesian!
  completedModules: [],
  bookmarks: [],
  notes: {},
  completedCheckboxes: {},
  streak: {
    count: 1,
    lastDate: new Date().toISOString().split('T')[0]
  },
  lastVisited: null
};

export function getStoredData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw);
    return { ...defaultData, ...parsed };
  } catch (e) {
    console.error('Failed to load storage data', e);
    return defaultData;
  }
}

export function saveStoredData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save storage data', e);
  }
}

export function setLanguage(lang) {
  const data = getStoredData();
  data.lang = lang;
  saveStoredData(data);
  return data;
}

export function toggleModuleCompleted(moduleId) {
  const data = getStoredData();
  const index = data.completedModules.indexOf(moduleId);
  if (index >= 0) {
    data.completedModules.splice(index, 1);
  } else {
    data.completedModules.push(moduleId);
    updateStreak(data);
  }
  saveStoredData(data);
  return data;
}

export function toggleBookmark(moduleId) {
  const data = getStoredData();
  const index = data.bookmarks.indexOf(moduleId);
  if (index >= 0) {
    data.bookmarks.splice(index, 1);
  } else {
    data.bookmarks.push(moduleId);
  }
  saveStoredData(data);
  return data;
}

export function saveModuleNote(moduleId, noteText) {
  const data = getStoredData();
  data.notes[moduleId] = noteText;
  saveStoredData(data);
  return data;
}

export function toggleCheckboxState(moduleId, checkboxId) {
  const data = getStoredData();
  if (!data.completedCheckboxes[moduleId]) {
    data.completedCheckboxes[moduleId] = [];
  }
  const list = data.completedCheckboxes[moduleId];
  const idx = list.indexOf(checkboxId);
  if (idx >= 0) {
    list.splice(idx, 1);
  } else {
    list.push(checkboxId);
  }
  saveStoredData(data);
  return data;
}

function updateStreak(data) {
  const today = new Date().toISOString().split('T')[0];
  const lastDate = data.streak.lastDate;
  if (lastDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
  if (lastDate === yesterday) {
    data.streak.count += 1;
  } else {
    data.streak.count = 1;
  }
  data.streak.lastDate = today;
}
