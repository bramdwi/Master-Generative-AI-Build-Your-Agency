const STORAGE_KEY = 'ai_creator_academy_user_data_v2';

const defaultData = {
  lang: 'id', // Default to Indonesian!
  isSubscribed: false, // Default to free tier (Module 1 free preview, Module 2+ locked)
  subscriptionData: {
    plan: null,        // 'monthly' | 'yearly' | 'lifetime'
    orderId: null,     // Midtrans order ID
    paidAt: null,      // ISO date string
    expiresAt: null,   // ISO date string (null for lifetime)
    status: null       // 'active' | 'expired' | 'pending'
  },
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
    // Merge with defaults so new fields are always present
    return { 
      ...defaultData, 
      ...parsed,
      subscriptionData: { ...defaultData.subscriptionData, ...(parsed.subscriptionData || {}) }
    };
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

// ─────────────────────────────────────────────
// Subscription Management (Payment-aware)
// ─────────────────────────────────────────────

const PLAN_DURATIONS = {
  monthly: 30,
  yearly: 365,
  lifetime: null // Never expires
};

/**
 * Activate a paid subscription after successful payment
 */
export function activateSubscription(plan, orderId) {
  const data = getStoredData();
  const now = new Date();
  
  let expiresAt = null;
  if (PLAN_DURATIONS[plan]) {
    const expiry = new Date(now);
    expiry.setDate(expiry.getDate() + PLAN_DURATIONS[plan]);
    expiresAt = expiry.toISOString();
  }

  data.isSubscribed = true;
  data.subscriptionData = {
    plan,
    orderId,
    paidAt: now.toISOString(),
    expiresAt,
    status: 'active'
  };

  saveStoredData(data);
  return data;
}

/**
 * Check if subscription has expired (for monthly/yearly plans)
 * Call this on app load.
 */
export function checkSubscriptionExpiry() {
  const data = getStoredData();
  
  if (!data.isSubscribed || !data.subscriptionData?.expiresAt) {
    // Not subscribed or lifetime plan — no check needed
    return data;
  }

  const now = new Date();
  const expiresAt = new Date(data.subscriptionData.expiresAt);

  if (now > expiresAt) {
    // Subscription has expired
    data.isSubscribed = false;
    data.subscriptionData.status = 'expired';
    saveStoredData(data);
    console.log(`⚠️ Subscription expired. Plan: ${data.subscriptionData.plan}, Expired at: ${data.subscriptionData.expiresAt}`);
  }

  return data;
}

/**
 * Deactivate subscription (admin/manual use)
 */
export function deactivateSubscription() {
  const data = getStoredData();
  data.isSubscribed = false;
  data.subscriptionData = {
    ...data.subscriptionData,
    status: 'cancelled'
  };
  saveStoredData(data);
  return data;
}

/**
 * Legacy toggle — kept for backward compatibility but now wraps activate/deactivate
 */
export function toggleSubscriptionStatus() {
  const data = getStoredData();
  if (data.isSubscribed) {
    return deactivateSubscription();
  } else {
    // For demo/manual toggle without payment
    return activateSubscription('lifetime', 'DEMO-' + Date.now());
  }
}

// ─────────────────────────────────────────────
// Module Progress & Bookmarks
// ─────────────────────────────────────────────

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
