// db.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxPz3VVGUI_bAsrRxZBeUSIWoT8SU_mbM",
  authDomain: "plengerrng.firebaseapp.com",
  projectId: "plengerrng",
  storageBucket: "plengerrng.firebasestorage.app",
  messagingSenderId: "304226883637",
  appId: "1:304226883637:web:abcd1d90ba217d8ec7b97c",
  measurementId: "G-RZEHH8XFCD"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function loginWithGoogle() { return signInWithPopup(auth, provider); }
export function logoutUser() { return signOut(auth); }
export function getCurrentUser() { return auth.currentUser; }

export function checkAuthStatus(onDataLoaded, onNewPlayer, onNotLoggedIn) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userDocRef = doc(db, "players", user.uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        onDataLoaded(docSnap.data(), user);
      } else {
        await saveDataToFirebase();
        if (onNewPlayer) onNewPlayer(user);
      }
    } else {
      if (onNotLoggedIn) onNotLoggedIn();
    }
  });
}

export function applyCloudDataToLocalStorage(data) {
  if (!data) return;
  const setLS = (key, val) => {
    if (val === undefined || val === null) return;
    localStorage.setItem(key, typeof val === "object" ? JSON.stringify(val) : String(val));
  };

// Di dalam array keys di applyCloudDataToLocalStorage
const keys = [
  "username","coins","totalRolls","totalSold","autoRollUnlocked",
  "prfSettings","rhg_profile","commonCount","uncommonCount","rareCount",
  "epicCount","prismaticCount","secretCount","inventory","potions",
  "quests","achievements","achievementsVersion","dailyDay","lastDailyClaim",
  "googlePhotoURL"  // ← tambah ini
];
  keys.forEach(k => setLS(k, data[k]));

  Object.keys(data).forEach(key => {
    if (key.startsWith("counter_")) setLS(key, data[key]);
  });
}

export async function saveDataToFirebase() {
  const user = auth.currentUser;
  if (!user) return false;

  const getLS = (key, isJson = false, defaultValue = "") => {
    const val = localStorage.getItem(key);
    if (!val) return isJson ? (defaultValue ? JSON.parse(defaultValue) : null) : defaultValue;
    if (isJson) { try { return JSON.parse(val); } catch { return val; } }
    return val;
  };

  try {
    const playerData = {
      username: getLS("username", false, "Player"),
      coins: parseInt(getLS("coins") || "0"),
      totalRolls: parseInt(getLS("totalRolls") || "0"),
      totalSold: parseInt(getLS("totalSold") || "0"),
      autoRollUnlocked: getLS("autoRollUnlocked") === "true",
      prfSettings: getLS("prfSettings", true, "{}"),
      rhg_profile: getLS("rhg_profile", true, "{}"),
      commonCount: parseInt(getLS("commonCount") || "0"),
      uncommonCount: parseInt(getLS("uncommonCount") || "0"),
      rareCount: parseInt(getLS("rareCount") || "0"),
      epicCount: parseInt(getLS("epicCount") || "0"),
      prismaticCount: parseInt(getLS("prismaticCount") || "0"),
      secretCount: parseInt(getLS("secretCount") || "0"),
      inventory: getLS("inventory", true, "[]"),
      potions: getLS("potions", true, "{}"),
      quests: getLS("quests", true, "{}"),
      achievements: getLS("achievements", true, "[]"),
      achievementsVersion: getLS("achievementsVersion", false, "1"),
      dailyDay: parseInt(getLS("dailyDay") || "1"),
      lastDailyClaim: getLS("lastDailyClaim"),
      lastSynced: Date.now()
    };

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("counter_")) playerData[key] = parseInt(localStorage.getItem(key) || "0");
    }

    await setDoc(doc(db, "players", user.uid), playerData, { merge: true });
    return true;
  } catch (error) {
    console.error("[Firebase] Gagal simpan data:", error);
    return false;
  }
}