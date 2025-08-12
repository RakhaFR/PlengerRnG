    /*******************************
     * ======= KONFIGURASI =======
     *******************************/

    // Rarity & tampilannya
    const RARITIES = [
      { key: 'common', name: 'Common', grad: 'var(--g-common)', weight: 50 },
      { key: 'uncommon', name: 'Uncommon', grad: 'var(--g-uncommon)', weight: 30 },
      { key: 'rare', name: 'Rare', grad: 'var(--g-rare)', weight: 15 },
      { key: 'epic', name: 'Epic', grad: 'var(--g-epic)', weight: 4 },
      { key: 'legend', name: 'Legend', grad: 'var(--g-legend)', weight: 2 },
      { key: 'mythical', name: 'Mythical', grad: 'var(--g-mythical)', weight: 1 }
    ];

    const POTIONS = {
  luck: [
    { mult: 2, name: '2x Luck Potion',  icon: 'luck-potion.png', effect: 'luck', duration: 5*60*1000, price: 5000,  color: 'linear-gradient(135deg, #93da96, #3a3a3a)' },
    { mult: 3, name: '3x Luck Potion',  icon: 'x3-luck.png', effect: 'luck', duration: 5*60*1000, price: 8000,  color: 'linear-gradient(135deg, #55a600, #fdd501)' },
    { mult: 5, name: '5x Luck Potion',  icon: 'x5-luck.png', effect: 'luck', duration: 5*60*1000, price: 16000, color: 'linear-gradient(135deg, #72de00, #ffd500)' },
    { mult: 7, name: '7x Luck Potion',  icon: 'x7-luck.png', effect: 'luck', duration: 5*60*1000, price: 35000, color: 'linear-gradient(135deg, #ffffff, #5FD3CB)' },
    { mult:10, name: '10x Luck Potion', icon: 'x10-luck.png', effect: 'luck', duration: 5*60*1000, price: 70000, color: 'linear-gradient(135deg, #98fcfc, #006bff)' }
  ],
  fast: [
    { mult: 2, name: '2x Fast Roll Potion',  icon: 'fast-roll.png', effect: 'fast', duration: 5*60*1000, price: 5000,  color: 'linear-gradient(135deg, #91D9D4, #3a3a3a)' },
    { mult: 3, name: '3x Fast Roll Potion',  icon: 'x3-roll.png', effect: 'fast', duration: 5*60*1000, price: 6000,  color: 'linear-gradient(135deg, #93da96, #5f936c)' },
    { mult: 5, name: '5x Fast Roll Potion',  icon: 'x5-roll.png', effect: 'fast', duration: 5*60*1000, price: 17000, color: 'linear-gradient(135deg, #56d44c, #285e2d)' },
    { mult: 7, name: '7x Fast Roll Potion',  icon: 'x7-roll.png', effect: 'fast', duration: 5*60*1000, price: 29000, color: 'linear-gradient(135deg, #007583, #002e5f)' },
    { mult:10, name: '10x Fast Roll Potion', icon: 'x10-roll.png', effect: 'fast', duration: 5*60*1000, price: 48000, color: 'linear-gradient(135deg, #0192af, #01446f)' }
  ]
};

const LUCK_EFFECTS = {
  2: { common: 0.8,  uncommon: 0.8,  rare: 2,   epic: 2,   legend: 2,   mythical: 2 },
  3: { common: 0.75, uncommon: 0.75, rare: 3,   epic: 3,   legend: 3,   mythical: 3 },
  5: { common: 0.6,  uncommon: 0.6,  rare: 0.8*5, epic: 5, legend: 5,   mythical: 5 },
  7: { common: 0.3,  uncommon: 0.3,  rare: 0.65*7, epic: 0.95*7, legend: 7, mythical: 7 },
  10:{ common: 0.1,  uncommon: 0.1,  rare: 0.55*10, epic: 0.85*10, legend: 10, mythical: 10 }
};


const FAST_ROLL_EFFECTS = {
  1:  { shuffleSpeed: 150, rollDuration: 7000 },
  2:  { shuffleSpeed: 115, rollDuration: 5000 },
  3:  { shuffleSpeed: 90,  rollDuration: 3500 },
  5:  { shuffleSpeed: 60,  rollDuration: 2500 },
  7:  { shuffleSpeed: 45,  rollDuration: 1800 },
  10: { shuffleSpeed: 30,  rollDuration: 1200 }
};


    // Daftar item contoh (ganti sesuai asetmu)
    const ITEMS = [
      {
        image: 'agra sigma.jpg',
        text: 'agra Sigma',
        rarity: 'epic',
        numberRange: [1, 12000]
      },
      {
        image: 'ac.jpg',
        text: 'lu kenapa jadi mythical',
        rarity: 'mythical',
        numberRange: [1, 999999]
      },
      {
        image: 'alif senyum.jpg',
        text: 'Alif Senyum',
        rarity: 'uncommon',
        numberRange: [1, 399]
      },
      {
        image: 'bagas bengong.jpg',
        text: 'Bagas Bengong',
        rarity: 'rare',
        numberRange: [1, 750]
      },
      {
        image: 'deki nyengir.jpg',
        text: 'Deki Nyengir',
        rarity: 'epic',
        numberRange: [1, 25000]
      },
      {
        image: 'marvin wink.jpg',
        text: 'Marvin Wink',
        rarity: 'uncommon',
        numberRange: [1, 300]
      },
      {
        image: '2 apit.jpg',
        text: 'alif di apit',
        rarity: 'rare',
        numberRange: [1, 900]
      },
      {
        image: '2 Senyuman.jpg',
        text: '2 senyuman manis',
        rarity: 'uncommon',
        numberRange: [1, 500]
      },
      {
        image: 'ac.jpg',
        text: 'YA AC',
        rarity: 'common',
        numberRange: [1, 10]
      },
      {
        image: 'agra & amira.jpg',
        text: 'cieee lopyu',
        rarity: 'legend',
        numberRange: [1, 100000]
      },
      {
        image: 'agra shalat.jpg',
        text: 'agra shalat',
        rarity: 'epic',
        numberRange: [1, 5999]
      },
      {
        image: 'agra umhehe.jpg',
        text: 'agra umhehe!',
        rarity: 'mythical',
        numberRange: [1, 1000000]
      },
      {
        image: 'agra velocity.jpg',
        text: 'velocity boy!',
        rarity: 'epic',
        numberRange: [1, 9999]
      },
      {
        image: 'akbar minkem.jpg',
        text: 'akbar minkem',
        rarity: 'common',
        numberRange: [1, 25]
      },
      {
        image: 'alfon mm.jpg',
        text: 'alfon mm',
        rarity: 'common',
        numberRange: [1, 3]
      },
      {
        image: 'bagas melet.jpg',
        text: 'bagas melet',
        rarity: 'rare',
        numberRange: [1, 399]
      },
      {
        image: 'bm alomani.jpg',
        text: 'BM ALOMANI',
        rarity: 'uncommon',
        numberRange: [1, 99]
      },
      {
        image: 'deki fuck.jpg',
        text: 'deki fucking',
        rarity: 'uncommon',
        numberRange: [1, 129]
      },
      {
        image: 'deki selfie.jpg',
        text: 'deki lagi nyelfi ges',
        rarity: 'uncommon',
        numberRange: [1, 301]
      },
      {
        image: 'deki chatgpt.jpg',
        text: 'deki lagi mencari jawaban',
        rarity: 'common',
        numberRange: [1, 50]
      },
      {
        image: 'duh ada yang nyelip.jpg',
        text: 'duh ada yang nyelip',
        rarity: 'rare',
        numberRange: [1, 450]
      },
      {
        image: 'dzaki cool.jpg',
        text: 'dzaki cool',
        rarity: 'uncommon',
        numberRange: [1, 139]
      },
      {
        image: 'gatel euy.jpg',
        text: 'gatel euyyy..',
        rarity: 'rare',
        numberRange: [1, 157]
      },
      {
        image: 'hafi ketawi.jpg',
        text: 'hafi ketawi',
        rarity: 'rare',
        numberRange: [1, 340]
      },
      {
        image: 'hafi mengkece.jpg',
        text: 'hafi mengkece',
        rarity: 'common',
        numberRange: [1, 21]
      },
      {
        image: 'hafi merenung.jpg',
        text: 'hafi merenung',
        rarity: 'uncommon',
        numberRange: [1, 123]
      },
      {
        image: 'hilmi.jpg',
        text: 'HILMI...',
        rarity: 'uncommon',
        numberRange: [1, 461]
      },
      {
        image: 'lip and deki.jpg',
        text: 'lip and deki',
        rarity: 'uncommon',
        numberRange: [1, 232]
      },
      {
        image: 'marvin ape lu.jpg',
        text: 'apelu liat-liat',
        rarity: 'epic',
        numberRange: [1, 4289]
      },
      {
        image: 'menghirup ke surga.jpg',
        text: 'menghirup ke surga',
        rarity: 'epic',
        numberRange: [1, 6790]
      },
      {
        image: 'mira bobo.jpg',
        text: 'mira bobo..',
        rarity: 'rare',
        numberRange: [1, 569]
      },
      {
        image: 'rafi chad.jpg',
        text: 'RAFI CHAD',
        rarity: 'legend',
        numberRange: [1, 200999]
      },
      {
        image: 'rakha mmm.jpg',
        text: 'rakha mmm',
        rarity: 'uncommon',
        numberRange: [1, 211]
      },
      {
        image: 'rasya hooo.jpg',
        text: 'rasya hooo...',
        rarity: 'legend',
        numberRange: [1, 120999]
      },
      {
        image: 'rasya lier.jpg',
        text: 'RASYA LAGI LIER',
        rarity: 'rare',
        numberRange: [1, 679]
      },
      {
        image: 'restu side_eye.jpg',
        text: 'restu side eye..',
        rarity: 'common',
        numberRange: [1, 35]
      },
      {
        image: 'surya menjelaskan.jpg',
        text: 'surya sedang menjelaskan',
        rarity: 'common',
        numberRange: [1, 76]
      },
      {
        image: 'view 2.jpg',
        text: 'view dari rakha di deki selfie',
        rarity: 'uncommon',
        numberRange: [1, 217]
      },
      {
        image: 'virqi apa itu bang.jpg',
        text: 'apa itu bang?',
        rarity: 'common',
        numberRange: [1, 43]
      },
      {
        image: 'virqi turu.jpg',
        text: 'virqi sedang turu ges',
        rarity: 'rare',
        numberRange: [1, 345]
      },
      {
        image: 'yan mikir.jpg',
        text: 'mikir dulu',
        rarity: 'common',
        numberRange: [1, 88]
      },
            {
        image: 'bagas-chad.jpg',
        text: 'bagas chad',
        rarity: 'legend',
        numberRange: [1, 199900]
      },
            {
        image: 'bagas-virtual.jpg',
        text: 'bagas jadi AI 2030',
        rarity: 'epic',
        numberRange: [1, 70089]
      },
            {
        image: 'berpikir-keras.jpg',
        text: 'mikir apa fi?',
        rarity: 'common',
        numberRange: [1, 67]
      },
            {
        image: 'deki-fuckhd.jpg',
        text: 'deki fuck & melet',
        rarity: 'mythical',
        numberRange: [1, 1099000]
      },
            {
        image: 'deki-nerd.jpg',
        text: 'deki mau jadi pinter',
        rarity: 'rare',
        numberRange: [1, 5610]
      },
            {
        image: 'join-roblox.jpg',
        text: 'join roblox kuy! gak disponsor',
        rarity: 'epic',
        numberRange: [1, 23900]
      },
            {
        image: 'alif-sen.jpg',
        text: 'alif senyum 2',
        rarity: 'rare',
        numberRange: [1, 346]
      },
            {
        image: 'marvin-mangap.jpg',
        text: 'marvin mangap',
        rarity: 'uncommon',
        numberRange: [1, 481]
      },
            {
        image: 'mira-megang.jpg',
        text: 'mira megang alat',
        rarity: 'rare',
        numberRange: [1, 1201]
      },
            {
        image: 'mirip-guru.jpg',
        text: 'mirip guru gw kayaknya',
        rarity: 'epic',
        numberRange: [1, 23001]
      },
            {
        image: 'plenger-group.jpg',
        text: 'para plenger sedang berpose',
        rarity: 'legend',
        numberRange: [1, 561000]
      },
            {
        image: 'rasya-nyu.jpg',
        text: 'ichi nya!',
        rarity: 'uncommon',
        numberRange: [1, 258]
      },
            {
        image: 'syafal.jpg',
        text: 'rasya & naufal',
        rarity: 'uncommon',
        numberRange: [1, 415]
      },
            {
        image: 'syeima-merem.jpg',
        text: 'syeima ngapain merem?',
        rarity: 'epic',
        numberRange: [1, 21200]
      },
            {
        image: 'tiga-senyuman.jpg',
        text: 'tiga senyuman..',
        rarity: 'rare',
        numberRange: [1, 794]
      },
            {
        image: 'yan-turu.jpg',
        text: 'yan turu',
        rarity: 'rare',
        numberRange: [1, 473]
      },
            {
        image: 'zaky-sigma.jpg',
        text: 'zaki sigma',
        rarity: 'epic',
        numberRange: [1, 11260]
      },
            {
        image: 'agra-rock.jpg',
        text: 'agra rock lenger',
        rarity: 'epic',
        numberRange: [1, 32330]
      },
            {
        image: 'alif-dance.jpg',
        text: 'alif dancing..',
        rarity: 'rare',
        numberRange: [1, 2451]
      },
            {
        image: 'again-migra.jpg',
        text: 'lagi-lagi mereka nih',
        rarity: 'legend',
        numberRange: [1, 241100]
      },
                  {
        image: 'deki-melet.jpg',
        text: 'deki melet',
        rarity: 'rare',
        numberRange: [1, 1450]
      },
                  {
        image: 'marvin-bengong.jpg',
        text: 'marvin bengong',
        rarity: 'epic',
        numberRange: [1, 10299]
      },
                  {
        image: 'surya-sad.jpg',
        text: 'surya 😭',
        rarity: 'epic',
        numberRange: [1, 30199]
      },
                  {
        image: 'axel.jpg',
        text: 'Hitam Putih',
        rarity: 'mythical',
        numberRange: [1, 1450000]
      },
                  {
        image: 'naufal-side.jpg',
        text: 'Naufal side eye',
        rarity: 'epic',
        numberRange: [1, 58400]
      },
                  {
        image: 'yan-.jpg',
        text: 'fathian..',
        rarity: 'common',
        numberRange: [1, 29]
      },
                  {
        image: 'benq.jpg',
        text: 'ben!',
        rarity: 'rare',
        numberRange: [1, 6151]
      },
                  {
        image: 'gak-kenal.jpg',
        text: 'hehehe 😭',
        rarity: 'rare',
        numberRange: [1, 1892]
      },
                  {
        image: 'hilmi-takut.jpg',
        text: 'hilmi takut. mama..',
        rarity: 'epic',
        numberRange: [1, 50292]
      },
                  {
        image: 'riza.jpg',
        text: 'riza.',
        rarity: 'uncommon',
        numberRange: [1, 146]
      },
    ];

    // LocalStorage keys
    const LS_KEY_INVENTORY = 'inventory';
    const LS_KEY_OLD = 'collection';
    let rarityEffectTimeout = null; // ID timeout yang bisa dibatalkan

    /*********************************
     * ======= STATE & HELPERS =======
     *********************************/
    let rollCount = 0;
    let luckBonus = 1;     // 2x setiap 10 roll
    let rolling = false; // lock tombol saat animasi
    let isRarityAnimationPlaying = false;
    let sinceRare = 0;     // pity counter Rare+
    let sinceEpic = 0;     // pity counter Epic+
    let luckSource = 'none'; // 'cengkrink' | 'potion' | 'none'
    let fastRollActive = false;
    // Pastikan variabel global ada
// Efek aktif: luck & fast disimpan dalam array
window.activeEffects = {
  luck: [], // contoh: [{ mult: 3, expire: 123456789 }]
  fast: []  // contoh: [{ mult: 2, expire: 123456789 }]
};
setInterval(updateEffectStatusUI, 1000);

    // Elemen penting
    const el = (id) => document.getElementById(id);

    // Gradient helper jika cuma punya string rarity di storage
    function gradOf(key) {
      switch (key) {
        case 'uncommon': return 'var(--g-uncommon)';
        case 'rare': return 'var(--g-rare)';
        case 'epic': return 'var(--g-epic)';
        case 'legend':
        case 'legendary': return 'var(--g-legend)';
        case 'mythical': return 'var(--g-mythical)';
        default: return 'var(--g-common)';
      }
    }

    function rarityTextColor(key) {
  switch (key) {
    case 'uncommon': return '#2ad980';
    case 'rare': return '#6fb6ff';
    case 'epic': return '#d08cff';
    case 'legend': return '#ffcf6f';
    case 'mythical': return '#ff1a1a';
    default: return '#ffffff';
  }
}

function getRandomItemByRarity(rarityKey) {
  const itemsByRarity = ITEMS.filter(item => item.rarity === rarityKey);
  if (itemsByRarity.length === 0) {
    return { text: '???', rarity: rarityKey };
  }
  return itemsByRarity[Math.floor(Math.random() * itemsByRarity.length)];
}


    function getItemCount(name) {
      // default 0 agar xN = 1 saat pertama kali muncul (kita clamp di render)
      return parseInt(localStorage.getItem(counterKey(name)) || '0', 10);
    }

    function counterKey(name) {
      return `counter_${(name || '').trim()}`;
    }

    function getItemCount(name) {
      // default 0 agar xN = 1 saat pertama kali muncul (kita clamp di render)
      return parseInt(localStorage.getItem(counterKey(name)) || '0', 10);
    }

    function incrementItemCount(name) {
      const k = counterKey(name);
      const cur = parseInt(localStorage.getItem(k) || '0', 10);
      localStorage.setItem(k, cur + 1);
    }



    function getSellValue(rarityKey) {
      switch (rarityKey) {
        case 'mythical': return 5000;
        case 'legend':
        case 'legendary': return 2000;
        case 'epic': return 500;
        case 'rare': return 100;
        case 'uncommon': return 50;
        default: return 20;
      }
    }

    function rarityObj(key) {
      return RARITIES.find(r => r.key === key) || RARITIES[0];
    }

    function getNextItemNumber(item) {
      const max = item.numberRange ? item.numberRange[1] : 100;
      return `1 dari ${max}`;
    }

function isLuckPotionActive() {
  if (!Array.isArray(window.activeEffects.luck)) return false;

  const now = Date.now();
  // Hapus yang sudah expired
  window.activeEffects.luck = window.activeEffects.luck.filter(e => e.expire > now);

  return window.activeEffects.luck.length > 0;
}


    /******************************************
     * ======= LOBBY → GAME TRANSITION =======
     ******************************************/
    function startGame() {
      el('lobby')?.classList.add('hidden');
      el('game')?.classList.remove('hidden');
      migrateOldKey();
      loadCoins();
      updateAutoRollUI();
      loadAutoRollUnlock();

      document.getElementById("topSidebar").style.display = "block";

      // Kosongkan gambar, tampilkan teks pembuka
      const img = el('rngImage');
      if (img) img.src = '';

      const text = el('rngText');
      if (text) text.textContent = 'MULAI PLENGER ROLL. KLIK TOMBOL DI BAWAH';

      const badge = el('rngBadge');
      if (badge) badge.style.display = 'none';

      const frame = el('rngFrame');
      if (frame) frame.style.background = 'var(--g-common)';
    }


    /************************************
     * ======= RNG & ROLLING LOGIC =======
     ************************************/

    el('rollBtn')?.addEventListener('click', () => {
      if (!rolling) {
        stopRarityEffect(); // ⬅️ Hilangkan hanya bg (bukan star)
        rollRNG();
      }
    });


    const luckBadge = el('luckBadge');
    if (luckBadge) luckBadge.classList.add('hidden');



    // Bikin objek item lengkap (pastikan ada rarity object)
    function toItemObject(base) {
      const r = (typeof base.rarity === 'string') ? rarityObj(base.rarity) : base.rarity;
      return { ...base, rarity: r };
    }

    // Ambil rarity dengan bobot (lebih mudah dapet yang langka)
    function pickRarityWeighted() {
      const total = RARITIES.reduce((a, b) => a + b.weight, 0);
      const r = Math.random() * total;
      let acc = 0;
      for (const rr of RARITIES) {
        acc += rr.weight;
        if (r <= acc) return rr;
      }
      return RARITIES[0];
    }

    // Ambil item acak dari rarity tertentu
    function pickItemByRarity(rKey) {
      const pool = ITEMS.filter(i => (typeof i.rarity === 'string' ? i.rarity : i.rarity?.key) === rKey);
      if (pool.length === 0) return toItemObject(ITEMS[0]);
      const b = pool[Math.floor(Math.random() * pool.length)];
      return toItemObject(b);
    }

// Weighted pick final + pity + luckBonus
function weightedPick() {
  // Base weight per item: (rarity weight) ^ 0.9 → sedikit flatten biar nggak Common terus
  const baseW = ITEMS.map(it => {
    const r = (typeof it.rarity === 'string') ? rarityObj(it.rarity) : it.rarity;
    return Math.pow(rarityObj(r.key).weight, 0.9);
  });

  const luckMul = ITEMS.map(it => {
    const rk = (typeof it.rarity === 'string') ? it.rarity : it.rarity.key;

    if (isLuckPotionActive()) {
      const mult = getLuckMultiplier();
      if (LUCK_EFFECTS[mult] && LUCK_EFFECTS[mult][rk] !== undefined) {
        return LUCK_EFFECTS[mult][rk];
      }
    }

    // Luck bonus lama (2x tiap 10 roll)
    if (luckBonus === 2 && (rk === 'rare' || rk === 'epic' || rk === 'legend')) {
      return 2;
    } else if (luckBonus === 2 && (rk === 'common' || rk === 'uncommon')) {
      return 0.8;
    }

    return 1;
  });

  // Pity: setelah 15 tanpa Rare+, gandakan Rare/Epic/Legend. Setelah 40 tanpa Epic+, x3 untuk Epic/Legend
  const pityMul = ITEMS.map(it => {
    const rk = (typeof it.rarity === 'string') ? it.rarity : it.rarity?.key;
    let m = 1;
    if (rk === 'rare' || rk === 'epic' || rk === 'legend') {
      if (sinceRare >= 15) m *= 2;
      if ((rk === 'epic' || rk === 'legend') && sinceEpic >= 40) m *= 3;
    }
    return m;
  });

  // Gabungkan
  const weights = baseW.map((w, i) => w * luckMul[i] * pityMul[i]);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total, acc = 0;
  for (let i = 0; i < ITEMS.length; i++) {
    acc += weights[i];
    if (r <= acc) return toItemObject(ITEMS[i]);
  }
  return toItemObject(ITEMS[ITEMS.length - 1]);
}


    // Set tampilan hasil (gambar, nama, frame, badge)
    function setDisplay(item) {
      if (!item) return;
      const img = el('rngImage');
      const text = el('rngText');
      const badge = el('rngBadge');
      const frame = el('rngFrame');

      if (img) img.src = item.image || '';
      if (text) text.textContent = item.text || '';
      if (badge) {
        badge.textContent = item.rarity.name;
        badge.style.background = item.rarity.grad;
        badge.style.display = 'inline-block';
      }

      // Tampilkan nomor di div terpisah
      const numberEl = el('rngNumber');
      if (numberEl) {
        numberEl.textContent = item.number || '';
      }

      if (frame) frame.style.background = item.rarity.grad;
    }

    function toggleUI(hidden) {
      const uiElements = document.querySelectorAll('.coin-bar, .hud, #rngWrap');
      uiElements.forEach(el => {
        if (hidden) el.classList.add('ui-hidden');
        else el.classList.remove('ui-hidden');
      });
    }

    function unlockAllAudio() {
  [resultSfx, document.getElementById('gachaMusic')].forEach(audio => {
    if (audio) {
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      }).catch(e => {});
    }
  });
}


function playRarityAnimation(rarity) {
  const wrapper = document.getElementById('rarityAnimation');
  const bg = wrapper?.querySelector('.rarity-bg');
  const star = wrapper?.querySelector('.rarity-star');
  const body = document.body;

  if (!wrapper || !bg || !star) return;

  wrapper.classList.remove('hidden');
  star.style.display = 'block';
  isRarityAnimationPlaying = true;

  bg.classList.remove('epic', 'legend', 'mythical');

  switch (rarity) {
    case 'epic':
      bg.classList.add('epic');
      star.style.filter = 'hue-rotate(270deg)';
      break;
    case 'legend':
    case 'legendary':
      bg.classList.add('legend');
      star.style.filter = 'hue-rotate(35deg)';
      break;
    case 'mythical':
      bg.classList.add('mythical');
      break;
  }

  toggleUI(true);

  // 🎵 Putar musik gacha
  const music = document.getElementById('gachaMusic');
  if (music) {
    music.currentTime = 0;
    music.volume = 0.6;
    music.play().catch(e => console.warn("Music error:", e));
  }

  // 🎵 Putar suara star awal
  try {
    if (resultSfx) {
      resultSfx.currentTime = 0;
      resultSfx.play();
    }
  } catch (e) { console.warn("Gagal play resultSfx", e); }

  // Animasi keluar-masuk
  star.style.animation = 'moveOut 6.23s ease-in forwards';

  setTimeout(() => {
    star.style.animation = '';
    void star.offsetWidth;
    star.style.animation = 'moveIn 6.23s ease forwards';
  }, 6230);

  rarityEffectTimeout = setTimeout(() => {
    star.style.display = 'none';
    star.style.animation = '';
    star.style.transform = '';

    toggleUI(false);
    body.classList.add('shake-body');

    setTimeout(() => {
      body.classList.remove('shake-body');
      isRarityAnimationPlaying = false;
      body.classList.add('shake-fade');
    }, 1000);

    setTimeout(() => {
      body.classList.remove('shake-fade');
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    }, 3000);

  }, 12560);
}



    function stopRarityEffect() {
      const wrapper = document.getElementById('rarityAnimation');
      const bg = wrapper?.querySelector('.rarity-bg');
      const star = wrapper?.querySelector('.rarity-star');

      if (!wrapper || !bg || !star) return;

      // Hentikan timeout star jika masih aktif
      if (rarityEffectTimeout) {
        clearTimeout(rarityEffectTimeout);
        rarityEffectTimeout = null;
      }

      // ⛔ HANYA reset bg di sini
      bg.classList.remove('epic', 'legend', 'mythical');
      wrapper.classList.add('hidden');
    }




    // Rolling 5 detik dengan SFX
function rollRNG() {
  stopRarityEffect();
  if (rolling) return;
  rolling = true;

rollCount++;
const isTenth = (rollCount % 10 === 0 && rollCount > 0);

if (el('rollCounter')) {
  const displayCount = isTenth ? 10 : (rollCount % 10);
  el('rollCounter').textContent = displayCount;
}

const rollBtnRainbow = document.getElementById('rollBtn');
if ((rollCount % 10) === 0 && rollCount > 0) {
  rollBtn.classList.add('rainbow-border');
} else {
  rollBtn.classList.remove('rainbow-border');
}


// ==========================
// Hitung multiplier luck (potion + bonus roll ke-10)
// gunakan potion aktif kalau ada, fallback ke luckBonus (legacy)
let finalLuckMult = getLuckMultiplier();
if (isTenth) {
  finalLuckMult *= 2; // gandakan kalau benar-benar roll ke-10
}

  currentLuckMultiplier = finalLuckMult;

  // Update badge luck di tombol
  updateLuckBadge(finalLuckMult);

  // Tentukan hasil akhir
  const selected = weightedPick(finalLuckMult); // pastikan weightedPick bisa terima multiplier

  // Sembunyikan UI awal
  el('rngFrame').style.opacity = 0;
  el('rngText').style.opacity = 0;
  el('rngBadge').style.display = 'none';
  el('rngNumber').style.display = 'none';
  el('rngImage').src = '';

  // Siapkan elemen animasi teks
  const rollingEl = el('rollingText');
  rollingEl.style.display = 'block';
  rollingEl.textContent = '';
  rollingEl.style.color = '#fff';

  // SFX roll
  const rollSfx = el('rollSfx');
  try {
    if (rollSfx) {
      rollSfx.currentTime = 0;
      rollSfx.loop = true;
      rollSfx.play();
    }
  } catch (e) {}

  const mult = getFastRollMultiplier();
let effect = FAST_ROLL_EFFECTS[mult] || FAST_ROLL_EFFECTS[Math.max(...Object.keys(FAST_ROLL_EFFECTS).map(Number))];
let shuffleSpeed = Math.max(effect.shuffleSpeed, 100); // batas minimal 30ms
let rollDuration = effect.rollDuration;


  // ======================================================

  // Animasi teks item + rarity
  const shuf = setInterval(() => {
    const rr = pickRarityWeighted(finalLuckMult);
    const randomItem = getRandomItemByRarity(rr.key);

    rollingEl.textContent = `${randomItem.text} (${rr.name})`;
    rollingEl.style.color = rarityTextColor(rr.key);

    rollingEl.classList.remove('rolling-text');
    void rollingEl.offsetWidth;
    rollingEl.classList.add('rolling-text');
  }, shuffleSpeed);

  setTimeout(() => {
    clearInterval(shuf);
    rollingEl.style.display = 'none';

    try {
      if (rollSfx) {
        rollSfx.pause();
        rollSfx.currentTime = 0;
      }
    } catch (e) {}

    // Ambil nomor item jika ada di inventory
    function getSavedItemNumber(item) {
      let inv = [];
      try {
        inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]');
      } catch (e) {}
      const found = inv.find(i => i.text === item.text);
      return found ? found.number : null;
    }
    const savedNumber = getSavedItemNumber(selected);
    selected.number = savedNumber || getNextItemNumber(selected);

    // Tampilkan hasil akhir
    setDisplay(selected);
    el('rngFrame').style.opacity = 1;
    el('rngText').style.opacity = 1;
    el('rngBadge').style.display = 'inline-block';
    el('rngNumber').style.display = 'block';

    // SFX hasil
    try {
      if (resultSfx) {
        resultSfx.currentTime = 0;
        resultSfx.play();
      }
    } catch (e) {}

    // Efek rarity
    const rk = selected.rarity.key;
    if (['epic', 'legend', 'legendary', 'mythical'].includes(rk)) {
      playRarityAnimation(rk);
    }

    // Simpan ke inventory
    saveInventory(selected);

    // Update pity
    if (['rare', 'epic', 'legend'].includes(rk)) {
      sinceRare = 0;
    } else {
      sinceRare++;
    }
    if (['epic', 'legend'].includes(rk)) {
      sinceEpic = 0;
    } else {
      sinceEpic++;
    }

    // Refresh inventory jika dibuka
    if (el('inventoryOverlay')?.classList.contains('show')) {
      renderInventory();
    }

    rolling = false;
  }, rollDuration);
}

function updateLuckBadge() {
  const badge = document.getElementById('luckBadge');
  if (!badge) return;

  const mult = getLuckMultiplier();
  const isTenth = (typeof rollCount !== 'undefined') && (rollCount % 10 === 0) && rollCount > 0;

  if (mult > 1) {
    badge.textContent = `x${mult} Luck`;

    if (isTenth) {
      badge.style.background = "linear-gradient(135deg, gold, #2ad980)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    }
    else if (mult >= 50) {
      badge.style.background = "var(--g-mythical)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    }
    else if (mult >= 25) {
      badge.style.background = "var(--g-legend)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    }
    else if (mult >= 10) {
      badge.style.background = "var(--g-epic)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    }
    else {
      badge.style.background = "";
      badge.style.webkitBackgroundClip = "";
      badge.style.webkitTextFillColor = "";
      badge.style.color = "#2ad980";
    }

    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
}


    /*****************************************
     * ======= INVENTORY (LOCAL STORAGE) =====
     *****************************************/



    function isItemLocked(name) {
      return localStorage.getItem(`locked_${name}`) === 'true';
    }

    function toggleItemLockByTime(time) {
      let inv = [];
      try { inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]'); } catch (e) { }
      const idx = inv.findIndex(i => i.time === time);
      if (idx >= 0) {
        inv[idx].locked = !inv[idx].locked;
        localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(inv));
      }
    }


    function migrateOldKey() {
      try {
        const old = JSON.parse(localStorage.getItem(LS_KEY_OLD) || '[]');
        if (old.length) {
          const cur = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]');
          const merged = [...cur];
          old.forEach(o => {
            const exists = merged.find(x => x.text === o.text);
            if (!exists) merged.push(o);
          });
          localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(merged));
          localStorage.removeItem(LS_KEY_OLD);
        }
      } catch (e) { }
    }

    function normalizeStoredNumbersToOne() {
      let inv = [];
      try { inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]'); } catch (e) { }
      if (!Array.isArray(inv) || !inv.length) return;

      inv = inv.map(it => {
        const max = it.numberRange?.[1] || 100;
        // Paksa selalu "1 dari <max>"
        return { ...it, number: `1 dari ${max}` };
      });

      localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(inv));
    }

    function saveInventory(item) {
      incrementItemCount(item.text);

      const data = {
        image: item.image,
        text: item.text,
        rarity: item.rarity,
        number: item.number,
        time: Date.now(),
        locked: false
      };

      let inv = [];
      try { inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]'); } catch (e) { }

      // Cek apakah item sudah ada berdasarkan nama
      const existing = inv.find(i => i.text === item.text);

      if (!existing) {
        inv.push(data); // hanya tambahkan kalau belum ada
        localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(inv));
      } else {
        // Tidak perlu push lagi, counter sudah ditambahkan
        // Jika kamu ingin menyimpan waktu terakhir dapat, bisa update 'time'
        existing.time = Date.now();
        localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(inv));
      }
    }

    function dedupeInventory() {
      let inv = [];
      try { inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]'); } catch (e) { }

      const seen = new Map();
      for (const item of inv) {
        if (!seen.has(item.text)) {
          seen.set(item.text, item);
        }
      }

      localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(Array.from(seen.values())));
    }



    // Buka inventory → set filter “Semua”, kosongkan search (jika ada), render langsung
    function openInventory() {
      const overlay = el('inventoryOverlay');
      if (!overlay) return;
      overlay.classList.add('show');

      // Kosongkan search jika ada (opsional)
      const si = el('searchInput');
      if (si) si.value = '';

      // Set chip "Semua" aktif + render
      setActiveFilter('all');
      renderInventory();
    }
    function closeInventory() {
      el('inventoryOverlay')?.classList.remove('show');
    }

    // Helper: set chip aktif
    function setActiveFilter(key) {
      const chips = document.querySelectorAll('#chips .chip');
      chips.forEach(c => {
        const k = c.getAttribute('data-r');
        c.classList.toggle('active', k === key);
      });
    }

    document.addEventListener('click', (e) => {
      // Klik tombol kunci pada kartu
      if (e.target.classList.contains('item-lock-toggle')) {
        const time = Number(e.target.dataset.time);
        toggleItemLockByTime(time);
        renderInventory();
        return; // ⚠ Penting! Supaya gak lanjut ke klik kartu
      }


      // ... existing sell logic

      if (e.target.id === 'lockedBtn') {
        const btn = e.target;
        const locked = document.body.classList.toggle('show-locked-only');

        btn.classList.toggle('active', locked);
        btn.textContent = locked ? '🔓 Tampilkan Semua' : '🔒 item yang dikunci';

        renderInventory();
      }



      // Toggle kunci ketika klik kanan pada card
      if (e.target.closest('.card') && e.button === 2) {
        e.preventDefault();
        const card = e.target.closest('.card');
        const name = card.dataset.name;
        toggleItemLock(name);
        renderInventory();
      }
    });

    // Render list sesuai filter aktif + search (jika kosong tetap tampil)
    function renderInventory() {
      const grid = el('gridWrap');
      if (!grid) return;

      // Baca filter aktif (default 'all')
      const active = document.querySelector('#chips .chip.active, .chips .chip.active');
      const filterKey = active ? active.getAttribute('data-r') : 'all';

      // Baca search (boleh tidak ada / kosong)
      const si = el('searchInput');
      const query = (si ? si.value : '').trim().toLowerCase();

      let inv = [];
      try { inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]'); } catch (e) { }

      // Filter
      const showLockedOnly = document.body.classList.contains('show-locked-only');
      const list = inv.filter(it => {
        const rKey = (typeof it.rarity === 'string') ? it.rarity :
          (it.rarity && it.rarity.key) ? it.rarity.key : 'common';
        const passFilter = (filterKey === 'all') ? true : (rKey === filterKey);
        const passSearch = (query === '') ? true : ((it.text || '').toLowerCase().includes(query));
        const passLock = showLockedOnly ? it.locked : true;
        return passFilter && passSearch && passLock;
      });



      // Render
      grid.innerHTML = '';
      if (list.length === 0) {
        grid.innerHTML = `<div class="empty">Tidak ada item.</div>`;
        return;
      }

      list.forEach(it => {
        const r = (typeof it.rarity === 'object') ? it.rarity : {
          key: it.rarity,
          name: (it.rarity || 'common').replace(/^./, c => c.toUpperCase()),
          grad: gradOf(it.rarity || 'common')
        };

        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.name = it.text;
        card.dataset.time = it.time; // penting: untuk toggle kunci
        if (it.locked) card.classList.add('locked');
        if (it.locked) card.setAttribute('title', 'Terkunci — Tidak bisa dijual');



        const count = Math.max(1, getItemCount(it.text));

        card.innerHTML = `
    <div class="frame" style="background:${r.grad}; position:relative;">
      <img src="${it.image}" alt="${it.text}">
      <div class="item-count">x${count}</div>
<button class="item-lock-toggle" data-time="${it.time}" title="Kunci / Buka"
  style="
    position:absolute;
    top:6px;
    left:6px;
    width:28px;
    height:28px;
    font-size:16px;
    background:rgba(0,0,0,0.5);
    border:1px solid rgba(255,255,255,0.3);
    border-radius:6px;
    color:white;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
  ">
  ${it.locked ? '🔒' : '🔓'}
</button>



    </div>
    <div class="name">${it.text}</div>
    <div class="rarity-badge" style="background:${r.grad}">${r.name}</div>
    <div class="number-text">${it.number || ''}</div>
  `;

        grid.appendChild(card);
      });
    }

    /***********************************
     * ======= EVENT LISTENERS UI =======
     ***********************************/
    // Tutup modal saat klik overlay atau tombol X
    document.addEventListener('click', (e) => {
      // Klik kanan untuk toggle kunci
      document.addEventListener('contextmenu', (e) => {
        const card = e.target.closest('.card');
        if (card && el('inventoryOverlay')?.classList.contains('show')) {
          e.preventDefault();
          const time = Number(card.dataset.time);
          toggleItemLockByTime(time);
          renderInventory();
        }
      });

      if (e.target.id === 'inventoryOverlay') closeInventory();
      if (e.target.id === 'closeInv') closeInventory();

      // Klik chip → set aktif & render langsung
      const chip = e.target.closest('.chip');
      if (chip) {
        const key = chip.getAttribute('data-r') || 'all';
        setActiveFilter(key);
        renderInventory();
      }
      // Klik kartu untuk memilih/deselect
      const cardEl = e.target.closest('.card');
      if (cardEl && el('inventoryOverlay')?.classList.contains('show')) {
        const isLocked = cardEl.classList.contains('locked');
        if (isLocked) return; // ⛔ jangan bisa dipilih

        cardEl.classList.toggle('selected');
      }





      // Tombol Menjual (jual yang dipilih)
      if (e.target.id === 'sellBtn') {
        let inv = [];
        try {
          inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]');
        } catch (err) { }

        const selectedCards = Array.from(document.querySelectorAll('.card.selected'));
        if (!selectedCards.length) {
          showErrorPopup('Pilih item terlebih dahulu!');
          return;
        }

        let gained = 0;
        const selectedTimes = selectedCards.map(c => Number(c.dataset.time));

        // Buat inventory baru dengan menyisakan item yang tidak dijual
        const updated = inv.filter(it => {
          if (selectedTimes.includes(it.time) && !it.locked) {
            const rKey = typeof it.rarity === 'string' ? it.rarity : it.rarity.key;
            const count = getItemCount(it.text);

            if (count > 1) {
              gained += getSellValue(rKey);
              localStorage.setItem(counterKey(it.text), count - 1);
              return true; // tetap di inventory
            } else {
              gained += getSellValue(rKey);
              localStorage.removeItem(counterKey(it.text));
              return false; // hapus item
            }
          }
          return true;
        });


        // 🔑 Hapus counter jika sudah tidak ada di updated:
        selectedCards.forEach(card => {
          const name = card.dataset.name;
          const stillExists = updated.some(it => it.text === name);
          if (!stillExists) {
            localStorage.removeItem(counterKey(name));
          }
        });


        localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(updated));
        coins += gained;
        saveCoins();
        updateCoinUI();
        renderInventory();
        showCoinPopup(gained);
      }


      // Tombol Menjual Semua
      if (e.target.id === 'sellAllBtn') {
        let inv = [];
        try {
          inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]');
        } catch (err) { }

        // ❌ Tidak ada item sama sekali
        if (!inv.length) {
          showErrorPopup('Tidak ada item untuk dijual!');
          return;
        }

        const unlocked = inv.filter(it => !it.locked);

        // ❌ Semua item terkunci
        if (!unlocked.length) {
          showErrorPopup('Semua item terkunci!');
          return;
        }

        let gained = 0;
        const selectedTimes = unlocked.map(it => Number(it.time));

        const updated = inv.filter(it => {
          if (selectedTimes.includes(it.time)) {
            const rKey = typeof it.rarity === 'string' ? it.rarity : it.rarity.key;
            const count = getItemCount(it.text);

gained += getSellValue(rKey) * count;
localStorage.removeItem(counterKey(it.text));
return false; // hapus item

          }
          return true;
        });

        unlocked.forEach(it => {
          const stillExists = updated.some(x => x.text === it.text);
          if (!stillExists) {
            localStorage.removeItem(counterKey(it.text));
          }
        });

        localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(updated));

        // 💰 Tambahkan koin
        coins += gained;
        saveCoins();
        updateCoinUI();
        renderInventory();
        showCoinPopup(gained); // Tampilkan jumlah koin yang didapat
      }
    });

    // ESC untuk tutup modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeInventory();
    });

    // Jika kamu mau: saat mengetik di search, render realtime (opsional)
    // const si = el('searchInput');
    // if (si) si.addEventListener('input', renderInventory);

    /*****************************************
     * ======= INVENTORY (COINS) =====
     *****************************************/

    /*******************************
     * ======= COIN SYSTEM =======
     *******************************/

    let coins = 10; // saldo awal default
    let autoRoll = false;
    let autoRollInterval = null;
    let autoRollUnlocked = false;

    function showErrorPopup(message) {
      const popup = document.getElementById('errorPopup');
      if (!popup) return;

      popup.textContent = message;
      popup.classList.add('show');

      // Hilang otomatis setelah 2.5 detik
      setTimeout(() => {
        popup.classList.remove('show');
      }, 2500);
    }


    function showCoinPopup(amount) {
      const popup = document.getElementById('coinPopup');
      const sfx = document.getElementById('coinSfx');
      if (!popup) return;

      popup.textContent = `+${amount} Coins`;
      popup.classList.remove('hidden');
      popup.style.animation = 'none';
      void popup.offsetWidth; // force reflow
      popup.style.animation = 'popup-fade 1s ease-out forwards';

      try {
        sfx.currentTime = 0;
        sfx.play();
      } catch (e) {
        console.warn("SFX error:", e);
      }

      setTimeout(() => {
        popup.classList.add('hidden');
      }, 1200);
    }

    function showErrorPopup(message) {
      const popup = document.getElementById('coinPopup');
      const sfx = document.getElementById('errorSfx');
      if (!popup) return;

      popup.textContent = message;
      popup.classList.remove('hidden');
      popup.classList.add('error');
      popup.style.animation = 'none';
      void popup.offsetWidth; // force reflow
      popup.style.animation = 'popup-fade 1s ease-out forwards';

      try {
        sfx.currentTime = 0;
        sfx.play();
      } catch (e) {
        console.warn("SFX error:", e);
      }

      setTimeout(() => {
        popup.classList.add('hidden');
        popup.classList.remove('error');
      }, 1200);
    }



    function loadAutoRollUnlock() {
      autoRollUnlocked = localStorage.getItem('autoRollUnlocked') === 'true';
    }

    function saveAutoRollUnlock() {
      localStorage.setItem('autoRollUnlocked', autoRollUnlocked);
    }


    function loadCoins() {
      const c = parseInt(localStorage.getItem('coins'), 10);
      coins = isNaN(c) ? 10 : c;
      updateCoinUI();
    }

    function saveCoins() {
      localStorage.setItem('coins', coins);
    }

    function updateCoinUI() {
      el('coinAmount').textContent = coins;
    }

    /*************************************
     * ======= AUTO ROLL TOGGLE =======
     *************************************/
    function toggleAutoRoll() {
      const price = 5000;

      if (!autoRoll) {
        // Cek: sudah pernah beli belum?
        if (!autoRollUnlocked) {
          if (coins >= price) {
            coins -= price;
            autoRollUnlocked = true;
            saveCoins();
            saveAutoRollUnlock();
            updateCoinUI();
          } else {
            showErrorPopup('💸 Coin tidak cukup!');
            return;
          }

        }

        autoRoll = true;
        startAutoRolling();
      } else {
        autoRoll = false;
        stopAutoRolling();
      }

      updateAutoRollUI();
    }


    function startAutoRolling() {
      if (autoRollInterval) clearInterval(autoRollInterval);
      autoRollInterval = setInterval(() => {
        if (!rolling && !isRarityAnimationPlaying) {
          rollRNG();
        }
      }, 4000); // 4 detik antar cek
    }


    function stopAutoRolling() {
      if (autoRollInterval) clearInterval(autoRollInterval);
      autoRollInterval = null;
    }
    function updateAutoRollUI() {
      const pill = document.querySelector('.pill-left');
      if (!pill) return;

      if (autoRoll) {
        pill.innerHTML = `
      Gulir Otomatis: <span style="color:#2ad980;">AKTIF ✅</span><br>
      <span class="sub">Auto mode berjalan</span>
    `;
      } else {
        if (autoRollUnlocked) {
          pill.innerHTML = `
        Gulir Otomatis: <span style="color:#ffcc00;">MATI</span><br>
        <span class="sub">Klik untuk aktifkan lagi</span>
      `;
        } else {
          pill.innerHTML = `
        Gulir Otomatis: <span style="color:#ffcc00;">MATI</span><br>
        <span class="sub" style="color:orange;">Bayar 5000 Coins (sekali saja)</span>
      `;
        }
      }
    }


    /*************************************
     * ======= Potion Logical =======
     *************************************/

    let activeEffects = {};
let effectTimers = {};

function buyPotion(type, idx = 0) {
  const potion = POTIONS[type][idx];
  if (!potion) return;

  // 💰 Cek dulu sebelum potong coin
  if (coins < potion.price) {
    showErrorPopup('Koin tidak cukup!');
    return;
  }

  // Baru kurangi
  coins -= potion.price;
  saveCoins();
  updateCoinUI();

  // 🎵 SFX coin
  try {
    const coinSfx = document.getElementById('coinSfx');
    coinSfx.currentTime = 0;
    coinSfx.play();
  } catch (e) {}

  // ✅ Popup pembelian sukses
  showPopup(`Berhasil membeli ${potion.name}!`);

  // Simpan ke inventory potion
  let potions = {};
  try { potions = JSON.parse(localStorage.getItem('potions')) || {}; } catch { potions = {}; }
  const key = `${type}_${potion.mult}`;
  if (!potions[key]) potions[key] = 0;
  potions[key]++;
  localStorage.setItem('potions', JSON.stringify(potions));

  if (document.getElementById('potionInventoryOverlay')?.classList.contains('show')) {
    renderPotionInventory();
  }
}

function showPopup(message, isError = false) {
    const popup = document.getElementById('coinPopup');
    popup.textContent = message;
    popup.classList.remove('hidden');
    if (isError) popup.classList.add('error'); 
    else popup.classList.remove('error');
    setTimeout(() => popup.classList.add('hidden'), 1500);
}

function equipPotion(type, idx) {

  // 🎵 SFX cengkrink
try {
    const cengkrinkSfx = document.getElementById('resultSfx');
    cengkrinkSfx.currentTime = 0;
    cengkrinkSfx.play();
} catch (e) {}

  // ambil potion yang benar
  const potion = POTIONS[type] && POTIONS[type][idx];
  if (!potion) return;

  // cek inventory
  let potions = {};
  try { potions = JSON.parse(localStorage.getItem('potions') || '{}'); } catch { potions = {}; }
  const key = `${type}_${potion.mult}`;
  if (!potions[key] || potions[key] <= 0) return;

  // kurangi jumlah
  potions[key]--;
  if (potions[key] <= 0) delete potions[key];
  localStorage.setItem('potions', JSON.stringify(potions));

  // safety: pastikan duration numeric (ms)
  const duration = Number(potion.duration) || 0;

  // aktifkan efek (pakai type asli: 'luck' atau 'fast')
  activatePotionEffect(type, duration, potion.mult);

  // UI refresh
  renderPotionInventory();
  updateLuckBadge();
}



  const potionInv = document.getElementById("potionInventoryOverlay");
if (potionInv && potionInv.classList.contains('show')) {
  renderPotionInventory(); // auto-refresh kalau UI sedang terbuka
}


function openStore() {
  document.getElementById("storeOverlay").classList.add("show");
}

function closeStore() {
  document.getElementById("storeOverlay").classList.remove("show");
}
function openPotionInventory() {
  renderPotionInventory();
  document.getElementById("potionInventoryOverlay").classList.add("show");
}



function closePotionInventory() {
  document.getElementById("potionInventoryOverlay").classList.remove("show");
}


function renderPotionInventory() {
  const grid = document.getElementById("potionGrid");
  if (!grid) return;
  grid.innerHTML = '';

  const potions = JSON.parse(localStorage.getItem('potions') || '{}');

  ['luck', 'fast'].forEach(type => {
    POTIONS[type].forEach((p, i) => {
      const key = `${type}_${p.mult}`;
      const count = potions[key] || 0;
      if (count > 0) {
        grid.innerHTML += `
          <div class="card">
            <div class="frame" style="background:${p.color}">
              <img src="${p.icon}" alt="${p.name}">
            </div>
            <div class="name">${p.name}</div>
            <div class="rarity-badge">x${count}</div>
            <div class="actions">
              <div class="pill" onclick="equipPotion('${type}', ${i})">EQUIP</div>
            </div>
          </div>
        `;
      }
    });
  });
}


function openPotionInventory() {
  renderPotionInventory(); // ← ini WAJIB agar inventory terisi
  document.getElementById("potionInventoryOverlay").classList.add("show");
}

function closePotionInventory() {
  document.getElementById("potionInventoryOverlay").classList.remove("show");
}
let effectUIRunning = false;

function getLuckMultiplier() {
  const now = Date.now();
  // buang efek kadaluarsa
  window.activeEffects.luck = window.activeEffects.luck.filter(e => e.expire > now);

  if (window.activeEffects.luck.length === 0) return 1;

  // jumlahkan semua multiplier aktif
  return window.activeEffects.luck.reduce((total, e) => total + e.mult, 0);
}


function getFastRollMultiplier() {
  const now = Date.now();
  if (!Array.isArray(window.activeEffects.fast)) return 1;

  // hapus yang expired
  window.activeEffects.fast = window.activeEffects.fast.filter(e => e.expire > now);

  if (window.activeEffects.fast.length === 0) return 1;

  return window.activeEffects.fast.reduce((total, e) => total + e.mult, 0);
}


// 📟 Update UI efek aktif
function updateEffectStatusUI() {
  const elStatus = document.getElementById("activeEffectsStatus");
  if (!elStatus) return;

  let html = "";
  const now = Date.now();

  // Luck
  if (Array.isArray(window.activeEffects.luck)) {
    window.activeEffects.luck = window.activeEffects.luck.filter(e => e.expire > now);
    window.activeEffects.luck.forEach(e => {
      const min = Math.floor((e.expire - now) / 60000);
      const sec = Math.floor(((e.expire - now) % 60000) / 1000).toString().padStart(2, "0");

      // warna ungu kalau x5 - x10
      const color = (e.mult >= 7 && e.mult <= 10) ? "violet" : "lime";
      html += `<div style="color:${color}">Luck x${e.mult}: ${min}:${sec}</div>`;
    });
  }

  // Fast Roll
  if (Array.isArray(window.activeEffects.fast)) {
    window.activeEffects.fast = window.activeEffects.fast.filter(e => e.expire > now);
    window.activeEffects.fast.forEach(e => {
      const min = Math.floor((e.expire - now) / 60000);
      const sec = Math.floor(((e.expire - now) % 60000) / 1000).toString().padStart(2, "0");

      // warna ungu kalau x5 - x10
      const color = (e.mult >= 7 && e.mult <= 10) ? "violet" : "cyan";
      html += `<div style="color:${color}">Fast x${e.mult}: ${min}:${sec}</div>`;
    });
  }

  elStatus.innerHTML = html;
}


function activatePotionEffect(type, duration, mult = 2) {
  const now = Date.now();

  // Pastikan struktur array ada
  if (!window.activeEffects) window.activeEffects = {};
  if (!Array.isArray(window.activeEffects[type])) {
    window.activeEffects[type] = [];
  }

  // Tambahkan efek baru (durasi dan multiplier terpisah)
  window.activeEffects[type].push({
    mult: mult,
    expire: now + duration
  });

  // Jika luck → update badge multiplier total
  if (type === 'luck') {
    updateLuckBadge(getLuckMultiplier());
  }

  // Jika fast → update speed multiplier
  if (type === 'fast') {
    getFastRollMultiplier();
  }

  // Refresh UI status efek
  updateEffectStatusUI();
}

function renderPotionStore() {
  const grid = document.querySelector('#storeOverlay .grid');
  if (!grid) return;
  grid.innerHTML = '';

  ['luck', 'fast'].forEach(type => {
    POTIONS[type].forEach((p, i) => {
      grid.innerHTML += `
        <div class="card">
          <div class="frame" style="background:${p.color}">
            <img src="${p.icon}" alt="${p.name}">
          </div>
          <div class="name">${p.name}</div>
          <div class="rarity-badge">Selama 5 menit</div>
          <div class="actions">
            <div class="pill" onclick="buyPotion('${type}', ${i})">💰 ${p.price} • BUY</div>
          </div>
        </div>
      `;
    });
  });
}

function openStore() {
  renderPotionStore();
  document.getElementById("storeOverlay").classList.add("show");
}


function debugActivePotions() {
  const now = Date.now();

  const active = [];

  // Luck
  if (Array.isArray(window.activeEffects.luck) && window.activeEffects.luck.length > 0) {
    const totalLuckMult = window.activeEffects.luck.reduce((sum, e) => sum + e.mult, 0);
    window.activeEffects.luck.forEach((e, i) => {
      active.push({
        type: `Luck #${i + 1}`,
        multiplier: e.mult,
        remainingMs: e.expire - now,
        remainingSec: Math.max(0, Math.floor((e.expire - now) / 1000))
      });
    });
    console.log(`%cLuck Total: x${totalLuckMult}`, 'color: cyan; font-weight: bold;');
  }

  // Fast Roll
  if (Array.isArray(window.activeEffects.fast) && window.activeEffects.fast.length > 0) {
    const totalFastMult = window.activeEffects.fast.reduce((sum, e) => sum + e.mult, 0);
    window.activeEffects.fast.forEach((e, i) => {
      active.push({
        type: `Fast Roll #${i + 1}`,
        multiplier: e.mult,
        remainingMs: e.expire - now,
        remainingSec: Math.max(0, Math.floor((e.expire - now) / 1000))
      });
    });
    console.log(`%cFast Roll Total: x${totalFastMult}`, 'color: magenta; font-weight: bold;');
  }

  if (active.length === 0) {
    console.log('%c[Debug Potion] Tidak ada efek aktif.', 'color: gray');
  } else {
    console.log('%c[Debug Potion] Efek aktif:', 'color: lime; font-weight: bold;');
    console.table(active);
  }
}


// ========= UPDATE LOG DATA =========
const UPDATE_LOGS = [
  // {
  //   version: 'UPD 3.2',
  //   image: 'icon.png',
  //   notes: [
  //     '🎣 Event fishing dimulai!',
  //     '🌈 Godzilla Fish ditambahkan!',
  //     '🐛 Bug inventory diperbaiki',
  //   ],
  //   isNew: true
  // },
  {
    version: 'UPD FULL-BETA',
    image: 'full-beta.jpg',
    notes: [
      '🎲 Fixing render roll nya agar tidak boros kuota!',
      '🎲 Adding effect UI di roll 10/10!',
      '🍀 Fixing tombol luck yang di roll 10/10 bertambah!',
      '🍀 Adding potion luck x3,x5,x7 & x10!',
      '👟 Adding potion fast roll x3,x5,x7 & x10!',
      '🧩 Potion bisa ke stackable!',
      '🎴 New 10 Plenger Card!'
    ]
  },
  {
    version: 'Release BETA',
    image: 'icon.png',
    notes: [
      '🎲🎴 Game telah dipublikasikan! Kumpulkan semua Plenger! 🎴🎲',
    ]
  }
];

function openUpdateLog() {
  const overlay = document.getElementById('updateLogOverlay');
  if (!overlay) return;
  overlay.classList.add('show');

  const updateContent = document.getElementById('updateContent');
  const updateList = document.getElementById('updateList');
  updateContent.innerHTML = '';
  updateList.innerHTML = '';

  UPDATE_LOGS.forEach((log, index) => {
    const btn = document.createElement('div');
    btn.className = 'card';
    btn.style.cursor = 'pointer';
    btn.style.border = index === 0 ? '2px solid yellow' : '';
btn.innerHTML = `
  <div style="display:flex; align-items:center; gap:6px;">
    <div class="active-dot" style="width:10px; height:10px; border-radius:50%; background:transparent;"></div>
    <div>
      <div class="frame">
        <img src="${log.image}" style="width: 100%; height: 60px; object-fit: cover;" />
      </div>
      <div style="font-size: 9px; text-align: center; margin-top: 4px;">${log.version}</div>
    </div>
  </div>
`;

btn.onclick = () => {
  renderUpdateDetail(log);

  // Hapus border dan indikator dari semua
  const allButtons = updateList.querySelectorAll('.card');
  allButtons.forEach(b => {
    b.style.border = '';
    const dot = b.querySelector('.active-dot');
    if (dot) dot.style.background = 'transparent';
  });

  // Tambahkan ke tombol aktif
  btn.style.border = '2px solid yellow';
  const dot = btn.querySelector('.active-dot');
  if (dot) dot.style.background = 'deepskyblue';
};


    updateList.appendChild(btn);

    if (index === 0) renderUpdateDetail(log);
  });
}

function renderUpdateDetail(log) {
  const updateContent = document.getElementById('updateContent');
  updateContent.innerHTML = `
    <h3 style="margin-bottom: 12px;">${log.version}</h3>
    <ul style="font-size: 10px; padding-left: 16px;">
      ${log.notes.map(note => `<li style="margin-bottom: 6px;">${note}</li>`).join('')}
    </ul>
  `;
}

function closeUpdateLog() {
  document.getElementById('updateLogOverlay')?.classList.remove('show');
}
