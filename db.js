// Import Firebase SDK via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 1. Firebase Config PlengerRnG
const firebaseConfig = {
  apiKey: "AIzaSyBxPz3VVGUI_bAsrRxZBeUSIWoT8SU_mbM",
  authDomain: "plengerrng.firebaseapp.com",
  projectId: "plengerrng",
  storageBucket: "plengerrng.firebasestorage.app",
  messagingSenderId: "304226883637",
  appId: "1:304226883637:web:abcd1d90ba217d8ec7b97c",
  measurementId: "G-RZEHH8XFCD"
};

// 2. Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 3. Fungsi untuk Login dengan Google (Popup)
export function loginWithGoogle(onDataLoaded) {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      console.log("Berhasil login! Nama:", result.user.displayName);
    })
    .catch((error) => {
      console.error("Gagal login Google:", error);
    });
}

// 4. Listener untuk memantau status login
export function checkAuthStatus(onDataLoaded, onNotLoggedIn) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("User terdeteksi login:", user.uid);
      const userDocRef = doc(db, "players", user.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        console.log("Data cloud ditemukan, memuat ke game...");
        onDataLoaded(docSnap.data());
      } else {
        console.log("Player baru, membuat data awal di cloud...");
        saveDataToFirebase();
      }
    } else {
      console.log("User belum login.");
      if (onNotLoggedIn) onNotLoggedIn();
    }
  });
}

// 5. Fungsi untuk menyimpan data game ke Firebase
export async function saveDataToFirebase() {
  const user = auth.currentUser;
  if (!user) return false;

  const userDocRef = doc(db, "players", user.uid);

  const getLocalData = (key, isJson = false, defaultValue = "") => {
    const val = localStorage.getItem(key);
    if (!val) return isJson ? (defaultValue ? JSON.parse(defaultValue) : null) : defaultValue;
    if (isJson) {
      try { return JSON.parse(val); } catch (e) { return val; }
    }
    return val;
  };

  try {
    const playerData = {
      username:            getLocalData("username", false, "Player"),
      coins:               parseInt(getLocalData("coins") || "0"),
      totalRolls:          parseInt(getLocalData("totalRolls") || "0"),
      totalSold:           parseInt(getLocalData("totalSold") || "0"),
      autoRollUnlocked:    getLocalData("autoRollUnlocked") === "true",

      // Kosmetik & Settings
      prfSettings:         getLocalData("prfSettings", true, "{}"),
      rhg_profile:         getLocalData("rhg_profile", true, "{}"),
      cosmeticUnlocks:     getLocalData("cosmeticUnlocks", true, "{}"),  // ← frame & banner unlocks

      // Rarity counters
      commonCount:         parseInt(getLocalData("commonCount") || "0"),
      uncommonCount:       parseInt(getLocalData("uncommonCount") || "0"),
      rareCount:           parseInt(getLocalData("rareCount") || "0"),
      epicCount:           parseInt(getLocalData("epicCount") || "0"),
      legendaryCount:      parseInt(getLocalData("legendaryCount") || "0"),  // ← legend
      mythicalCount:       parseInt(getLocalData("mythicalCount") || "0"),   // ← mythical
      prismaticCount:      parseInt(getLocalData("prismaticCount") || "0"),
      secretCount:         parseInt(getLocalData("secretCount") || "0"),
      editsCount:          parseInt(getLocalData("editsCount") || "0"),      // ← EdiTz

      // Item & Progress
      inventory:           getLocalData("inventory", true, "[]"),
      potions:             getLocalData("potions", true, "{}"),
      activeEffects:       getLocalData("activeEffects", true, "{}"),        // ← potion timers
      quests:              getLocalData("quests", true, "{}"),
      achievements:        getLocalData("achievements", true, "[]"),
      achievementsVersion: getLocalData("achievementsVersion", false, "1"),

      // Daily reward
      dailyDay:            parseInt(getLocalData("dailyDay") || "1"),
      lastDailyClaim:      getLocalData("lastDailyClaim"),

      lastSynced:          Date.now()
    };

    // counter_ custom items
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("counter_")) {
        playerData[key] = parseInt(localStorage.getItem(key) || "0");
      }
    }

    await setDoc(userDocRef, playerData, { merge: true });
    console.log("✅ Data berhasil disinkronkan ke Cloud!");
    return true;
  } catch (error) {
    console.error("Gagal menyimpan data ke cloud:", error);
    return false;
  }
}