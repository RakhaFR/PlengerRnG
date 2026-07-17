// ============================================================
// db.js — Firebase Auth + Firestore untuk Plenger RnG
// Kompatibel dengan vanilla JS (ESM via CDN)
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ── 1. Config Firebase ──────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyBxPz3VVGUI_bAsrRxZBeUSIWoT8SU_mbM",
  authDomain: "plengerrng.firebaseapp.com",
  projectId: "plengerrng",
  storageBucket: "plengerrng.firebasestorage.app",
  messagingSenderId: "304226883637",
  appId: "1:304226883637:web:abcd1d90ba217d8ec7b97c",
  measurementId: "G-RZEHH8XFCD"
};

// ── 2. Init ─────────────────────────────────────────────────
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ── 3. Login Google ─────────────────────────────────────────
export function loginWithGoogle() {
  return signInWithPopup(auth, provider);
}

// ── 4. Logout ────────────────────────────────────────────────
export function logoutUser() {
  return signOut(auth);
}

// ── 5. Ambil user aktif ──────────────────────────────────────
export function getCurrentUser() {
  return auth.currentUser;
}

// ── 6. Auth state listener ───────────────────────────────────
// onDataLoaded(cloudData)  → dipanggil kalau ada data di Firestore
// onNewPlayer()            → dipanggil kalau player baru (belum ada doc)
// onNotLoggedIn()          → dipanggil kalau belum login
export function checkAuthStatus(onDataLoaded, onNewPlayer, onNotLoggedIn) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDocRef = doc(db, "players", user.uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        onDataLoaded(docSnap.data(), user);
      } else {
        // Player baru: upload data localStorage yang ada (jika ada)
        await saveDataToFirebase();
        if (onNewPlayer) onNewPlayer(user);
      }
    } else {
      if (onNotLoggedIn) onNotLoggedIn();
    }
  });
}

// ── 7. Load data cloud → localStorage ────────────────────────
// Dipanggil setelah login berhasil dan ada data cloud.
// Menimpa localStorage dengan data dari Firestore.
export function applyCloudDataToLocalStorage(data) {
  if (!data) return;

  const setLS = (key, val) => {
    if (val === undefined || val === null) return;
    if (typeof val === "object") {
      localStorage.setItem(key, JSON.stringify(val));
    } else {
      localStorage.setItem(key, String(val));
    }
  };

  setLS("username",         data.username);
  setLS("coins",            data.coins);
  setLS("totalRolls",       data.totalRolls);
  setLS("totalSold",        data.totalSold);
  setLS("autoRollUnlocked", data.autoRollUnlocked);
  setLS("prfSettings",      data.prfSettings);
  setLS("rhg_profile",      data.rhg_profile);
  setLS("commonCount",      data.commonCount);
  setLS("uncommonCount",    data.uncommonCount);
  setLS("rareCount",        data.rareCount);
  setLS("epicCount",        data.epicCount);
  setLS("prismaticCount",   data.prismaticCount);
  setLS("secretCount",      data.secretCount);
  setLS("inventory",        data.inventory);
  setLS("potions",          data.potions);
  setLS("quests",           data.quests);
  setLS("achievements",     data.achievements);
  setLS("achievementsVersion", data.achievementsVersion);
  setLS("dailyDay",         data.dailyDay);
  setLS("lastDailyClaim",   data.lastDailyClaim);

  // Restore counter_ items
  if (data && typeof data === "object") {
    Object.keys(data).forEach(key => {
      if (key.startsWith("counter_")) {
        localStorage.setItem(key, String(data[key]));
      }
    });
  }
}

// ── 8. Simpan localStorage → Firestore ───────────────────────
export async function saveDataToFirebase() {
  const user = auth.currentUser;
  if (!user) return;

  const userDocRef = doc(db, "players", user.uid);

  const getLS = (key, isJson = false, defaultValue = "") => {
    const val = localStorage.getItem(key);
    if (!val) return isJson ? (defaultValue ? JSON.parse(defaultValue) : null) : defaultValue;
    if (isJson) {
      try { return JSON.parse(val); } catch { return val; }
    }
    return val;
  };

  try {
    const playerData = {
      username:            getLS("username", false, "Player"),
      coins:               parseInt(getLS("coins") || "0"),
      totalRolls:          parseInt(getLS("totalRolls") || "0"),
      totalSold:           parseInt(getLS("totalSold") || "0"),
      autoRollUnlocked:    getLS("autoRollUnlocked") === "true",
      prfSettings:         getLS("prfSettings", true, "{}"),
      rhg_profile:         getLS("rhg_profile", true, "{}"),
      commonCount:         parseInt(getLS("commonCount") || "0"),
      uncommonCount:       parseInt(getLS("uncommonCount") || "0"),
      rareCount:           parseInt(getLS("rareCount") || "0"),
      epicCount:           parseInt(getLS("epicCount") || "0"),
      prismaticCount:      parseInt(getLS("prismaticCount") || "0"),
      secretCount:         parseInt(getLS("secretCount") || "0"),
      inventory:           getLS("inventory", true, "[]"),
      potions:             getLS("potions", true, "{}"),
      quests:              getLS("quests", true, "{}"),
      achievements:        getLS("achievements", true, "[]"),
      achievementsVersion: getLS("achievementsVersion", false, "1"),
      dailyDay:            parseInt(getLS("dailyDay") || "1"),
      lastDailyClaim:      getLS("lastDailyClaim"),
      lastSynced:          Date.now()
    };

    // Simpan semua counter_ item custom
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("counter_")) {
        playerData[key] = parseInt(localStorage.getItem(key) || "0");
      }
    }

    await setDoc(userDocRef, playerData, { merge: true });
    console.log("[Firebase] Data berhasil disinkronkan ke cloud!");
    return true;
  } catch (error) {
    console.error("[Firebase] Gagal simpan data:", error);
    return false;
  }
}