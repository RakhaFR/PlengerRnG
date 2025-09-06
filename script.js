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
luck: {
  name: '2x Luck Potion',
  icon: 'luck-potion.png',
  effect: 'luck',
  duration: 5 * 60 * 1000,
  price: 5000,
  color: 'var(--g-uncommon)' // tambahkan ini
},
  fast: {
    name: '2x Fast Roll Potion',
    icon: 'fast-roll.png',
    effect: 'fast',
    duration: 5 * 60 * 1000,
    price: 4000,
    color: 'var(--g-rare)'
  }
};


    // Daftar item contoh (ganti sesuai asetmu)
    const ITEMS = [
      {
        image: 'agra sigma.jpg',
        text: 'Agra Sigma',
        rarity: 'epic',
        numberRange: [1, 1200]
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
        numberRange: [1, 2500]
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
        image: 'Hilmi.jpg',
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
        image: 'menghirup ke surga',
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
        image: 'Rafi chad.jpg',
        text: 'RAFI CHAD',
        rarity: 'legend',
        numberRange: [1, 60999]
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
        numberRange: [1, 90999]
      },
      {
        image: 'Rasya lier.jpg',
        text: 'RASYA LAGI LIER',
        rarity: 'rare',
        numberRange: [1, 679]
      },
      {
        image: 'Restu side_eye.jpg',
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
        image: 'Virqi apa itu bang.jpg',
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
        numberRange: [1, 4560]
      },
            {
        image: 'agra-rock.jpg',
        text: 'agra rock lenger',
        rarity: 'epic',
        numberRange: [1, 12330]
      },
            {
        image: 'alif-dance.jpg',
        text: 'alif dancing..',
        rarity: 'rare',
        numberRange: [1, 2451]
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

      // Luck bonus (2x tiap 10 roll)
      const luckMul = ITEMS.map(it => {
        const rk = (typeof it.rarity === 'string') ? it.rarity : it.rarity.key;

        if (luckBonus === 2 && (rk === 'rare' || rk === 'epic' || rk === 'legend')) {
          return 2; // Boost rarity langka
        } else if (luckBonus === 2 && (rk === 'common' || rk === 'uncommon')) {
          return 0.8; // Turunkan sedikit
        }
        return 1; // Normal kalau luckBonus nggak aktif
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


    function playRarityAnimation(rarity) {
      const wrapper = document.getElementById('rarityAnimation');
      const bg = wrapper?.querySelector('.rarity-bg');
      const star = wrapper?.querySelector('.rarity-star');
      const body = document.body;

      if (!wrapper || !bg || !star) return;

      // Tampilkan elemen efek
      wrapper.classList.remove('hidden');
      star.style.display = 'block';
      isRarityAnimationPlaying = true;

      // Atur efek visual berdasarkan rarity
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

      toggleUI(true); // Sembunyikan UI saat efek dimulai

      const music = document.getElementById('gachaMusic');
      if (music) {
        music.currentTime = 0;
        music.volume = 0.6; // volume bisa kamu atur
        music.play().catch(e => console.warn("Music error:", e));
      }


      // Jalankan moveOut (zoom kecil)
      star.style.animation = 'moveOut 6.23s ease-in forwards';

      // Setelah 5 detik, jalankan moveIn (zoom besar)
      setTimeout(() => {
        star.style.animation = '';
        void star.offsetWidth;
        star.style.animation = 'moveIn 6.23s ease forwards';
      }, 6230);

      // Setelah 11.5 detik, hilangkan star + munculkan UI + guncang
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
  // Reset background efek rarity (jika ada)
  const rarityAnim = document.getElementById('rarityAnimation');
  if (rarityAnim) {
    const bg = rarityAnim.querySelector('.rarity-bg');
    const star = rarityAnim.querySelector('.rarity-star');
    if (bg) {
      bg.classList.remove('epic', 'legend', 'mythical');
      bg.removeAttribute("style");
    }
    if (star) {
      star.style.display = 'none';
      star.style.animation = '';
      star.style.transform = '';
    }
    rarityAnim.classList.add('hidden');
    document.body.classList.remove('shake-body');
  }

  if (rolling) return;
  rolling = true;

rollCount++;
if (el('rollCounter')) el('rollCounter').textContent = rollCount % 10;

// ⬇ FIX INI
if (activeEffects.luck) {
  luckBonus = 2;
  luckSource = 'potion';
} else {
  if (rollCount % 10 === 0) {
    luckBonus = 2;
    luckSource = 'cengkrink';
  } else {
    luckBonus = 1;
    luckSource = 'none';
  }
}


const luckBadge = el('luckBadge');
if (luckBadge) {
  if (luckBonus === 2) {
    luckBadge.classList.remove('hidden');
  } else {
    luckBadge.classList.add('hidden');
  }
}

  const wrap = el('rngWrap');
  const rollSfx = el('rollSfx');

  try {
    if (rollSfx) {
      rollSfx.currentTime = 0;
      rollSfx.loop = true;
      rollSfx.play();
    }
  } catch (e) {}

  // Tambahkan efek animasi
  if (fastRollActive) {
    wrap?.classList.add('fast-spin');
  } else {
    wrap?.classList.add('spin');
  }

  const shuf = setInterval(() => {
    const rr = pickRarityWeighted();
    setDisplay(pickItemByRarity(rr.key));
  }, 100);

  // ⏱️ Tentukan durasi berdasarkan efek potion
  const rollDuration = fastRollActive ? 4500 : 7000;

  setTimeout(() => {
    clearInterval(shuf);
    wrap?.classList.remove('spin', 'fast-spin');
    try {
      if (rollSfx) {
        rollSfx.pause();
        rollSfx.currentTime = 0;
      }
    } catch (e) {}

    const selected = weightedPick();

    function getSavedItemNumber(item) {
      let inv = [];
      try {
        inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]');
      } catch (e) {}
      const found = inv.find(i => i.text === item.text);
      return found ? found.number : null;
    }

    const savedNumber = getSavedItemNumber(selected);
    selected.number = savedNumber ? savedNumber : getNextItemNumber(selected);

    setDisplay(selected);

    // 🔊 Mainkan suara CENGKRINK kalau bonus luck-nya dari cengkrink
// 🔊 Mainkan suara hasil roll (default)
try {
  if (resultSfx) {
    resultSfx.currentTime = 0;
    resultSfx.play();
  }
} catch (e) {}



    const rk = selected.rarity.key;
    if (['epic', 'legend', 'legendary', 'mythical'].includes(rk)) {
      playRarityAnimation(rk);
    }


    saveInventory(selected);

    if (['rare', 'epic', 'legend'].includes(selected.rarity.key)) {
      sinceRare = 0;
    } else {
      sinceRare++;
    }

    if (['epic', 'legend'].includes(selected.rarity.key)) {
      sinceEpic = 0;
    } else {
      sinceEpic++;
    }

    if (el('inventoryOverlay')?.classList.contains('show')) {
      renderInventory();
    }

    rolling = false;
  }, rollDuration);
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
            gained += getSellValue(rKey);

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
      }, 5000); // 3 detik antar cek
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

    let activeEffects = {};
let effectTimers = {};


function buyPotion(type) {
  const potion = POTIONS[type];
  if (!potion) return;

  if (coins < potion.price) {
    showErrorPopup('Koin tidak cukup!');
    return;
  }

  coins -= potion.price;
  saveCoins();
  updateCoinUI();

  // ⛔ PERBAIKI BAGIAN INI — ambil & ubah dalam bentuk objek
  let potions = {};
  try {
    const raw = localStorage.getItem('potions');
    potions = raw ? JSON.parse(raw) : {};
    if (!potions || typeof potions !== 'object' || Array.isArray(potions)) {
      potions = {};
    }
  } catch (e) {
    potions = {};
  }

  // Tambahkan potion
  if (!potions[type]) potions[type] = 0;
  potions[type]++;

  // Simpan kembali
  localStorage.setItem('potions', JSON.stringify(potions));

  // Update inventory jika terbuka
  if (document.getElementById('potionInventoryOverlay')?.classList.contains('show')) {
    renderPotionInventory();
  }

  // Optional: buka inventory
  openPotionInventory();
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

let activePotion = null;
let potionTimeout = null;

let fastRollActive = false;
let fastRollTimeout = null;

function activateFastRoll(duration) {
  fastRollActive = true;
  document.body.classList.add('fast-roll'); // atau ke elemen lain

  if (fastRollTimeout) clearTimeout(fastRollTimeout);
  fastRollTimeout = setTimeout(() => {
    fastRollActive = false;
    document.body.classList.remove('fast-roll');
  }, duration);
}

let luckPotionActive = false;
let luckPotionTimeout = null;

function activateLuckBonus(duration) {
  luckPotionActive = true;
  luckBonus = 2;

  const badge = document.getElementById('luckBadge');
  if (badge) badge.classList.remove('hidden');

  if (luckPotionTimeout) clearTimeout(luckPotionTimeout);
  luckPotionTimeout = setTimeout(() => {
    luckPotionActive = false;
    luckBonus = 1;

    const badge = document.getElementById('luckBadge');
    if (badge) badge.classList.add('hidden');
  }, duration);
}



function equipPotion(type) {
  const potions = JSON.parse(localStorage.getItem('potions') || '{}');
  if (!potions[type] || potions[type] <= 0) return;

  // Jangan kurangi di sini — efeknya tetap berjalan, potions disimpan agar tidak double pakai
  potions[type]--;
if (potions[type] <= 0) {
  delete potions[type];
}
  localStorage.setItem('potions', JSON.stringify(potions));

  activatePotionEffect(type, 5 * 60 * 1000); // 5 menit
  renderPotionInventory();
}



function renderPotionInventory() {
  const grid = document.getElementById("potionGrid");
  if (!grid) return;

  grid.innerHTML = '';

  const potions = JSON.parse(localStorage.getItem('potions') || '{}');
  console.log("Potions in storage:", potions);
console.log("Defined POTIONS:", POTIONS);

  Object.entries(POTIONS).forEach(([key, def]) => {
    const count = potions[key] || 0;
    if (count > 0) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="frame" style="background:${def.color}">
          <img src="${def.icon}" alt="${def.name}">
        </div>
        <div class="name">${def.name}</div>
        <div class="rarity-badge">x${count}</div>
        <div class="actions">
          <div class="pill" onclick="equipPotion('${key}')">EQUIP</div>
        </div>`;
      grid.appendChild(card);
    }
  });
}


function openPotionInventory() {
  renderPotionInventory(); // ← ini WAJIB agar inventory terisi
  document.getElementById("potionInventoryOverlay").classList.add("show");
}

function closePotionInventory() {
  document.getElementById("potionInventoryOverlay").classList.remove("show");
}

function updateEffectStatusUI() {
  const el = document.getElementById("activeEffectsStatus");
  if (!el) return;

  let html = '';
  for (const [type, endTime] of Object.entries(activeEffects)) {
    const left = Math.max(0, endTime - Date.now());
    const min = Math.floor(left / 60000);
    const sec = Math.floor((left % 60000) / 1000);
    const timeStr = `${min.toString().padStart(2, '0')}.${sec.toString().padStart(2, '0')}`;

    if (type === 'luck') html += `<div>🧪 2x Luck Potion: ${timeStr}</div>`;
    if (type === 'fast') html += `<div>⚡ Fast Roll: ${timeStr}</div>`;
  }

  el.innerHTML = html.trim();
}


function activatePotionEffect(type, duration) {
  const now = Date.now();
  const currentEnd = activeEffects[type] || now;
  const endTime = currentEnd + duration;

  activeEffects[type] = endTime;

  if (type === 'luck') {
    luckBonus = 2;
    document.getElementById('luckBadge')?.classList.remove('hidden');
  }

  if (type === 'fast') {
    fastRollActive = true;
  }

  updateEffectStatusUI();

  if (effectTimers[type]) clearInterval(effectTimers[type]);

  effectTimers[type] = setInterval(() => {
    const left = activeEffects[type] - Date.now();
    if (left <= 0) {
      clearInterval(effectTimers[type]);
      delete activeEffects[type];

      if (type === 'luck') {
        luckBonus = 1;
        document.getElementById('luckBadge')?.classList.add('hidden');
      }
      if (type === 'fast') {
        fastRollActive = false;
      }

      updateEffectStatusUI();
    } else {
      updateEffectStatusUI();
    }
  }, 1000);
}




function activatePotion(type) {
  const p = POTIONS[type];
  if (!p) return;

  activePotion = { ...p, expires: Date.now() + p.duration }; // FIXED: spread operator
  localStorage.setItem('activePotion', JSON.stringify(activePotion));
  updatePotionStatus();

  if (potionTimeout) clearInterval(potionTimeout);
  potionTimeout = setInterval(updatePotionStatus, 1000);

  if (p.effect === 'luck') {
    luckBonus = 2;
  } else if (p.effect === 'fast') {
    if (autoRollInterval) {
      clearInterval(autoRollInterval);
      autoRollInterval = setInterval(() => {
        if (!rolling && !isRarityAnimationPlaying) {
          rollRNG();
        }
      }, 5000); // dipercepat
    }
  }
}


function updatePotionStatus() {
  const status = document.getElementById("potionStatus") || createPotionStatus();
  if (!activePotion) {
    const saved = localStorage.getItem('activePotion');
    if (saved) {
      activePotion = JSON.parse(saved);
    } else {
      status.remove();
      clearInterval(potionTimeout);
      return;
    }
  }

  const sisa = activePotion.expires - Date.now();
  if (sisa <= 0) {
    localStorage.removeItem('activePotion');
    activePotion = null;
    status.remove();
    clearInterval(potionTimeout);
    luckBonus = 1;
    stopAutoRolling(); // jika fast potion
    return;
  }

  const m = Math.floor(sisa / 60000);
  const s = Math.floor((sisa % 60000) / 1000);
  status.textContent = `${activePotion.name}: ${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function createPotionStatus() {
  const el = document.createElement('div');
  el.id = 'potionStatus';
  el.style.position = 'fixed';
  el.style.top = '14px';
  el.style.right = '12px';
  el.style.fontSize = '10px';
  el.style.background = 'rgba(0,0,0,0.6)';
  el.style.padding = '6px 12px';
  el.style.borderRadius = '10px';
  el.style.zIndex = 999;
  el.style.border = '1px solid rgba(255,255,255,0.2)';
  el.style.fontFamily = `'Press Start 2P', monospace`;
  document.body.appendChild(el);
  return el;
}
