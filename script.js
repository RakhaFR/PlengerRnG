    /*******************************
 * ======= KONFIGURASI =======
 *******************************/

    const CURRENT_UPDATE_VERSION = "1.2";

    // Rarity & tampilannya
    const RARITIES = [
      { key: 'common', name: 'Common', grad: 'var(--g-common)', weight: 50 },
      { key: 'uncommon', name: 'Uncommon', grad: 'var(--g-uncommon)', weight: 30 },
      { key: 'rare', name: 'Rare', grad: 'var(--g-rare)', weight: 15 },
      { key: 'epic', name: 'Epic', grad: 'var(--g-epic)', weight: 4 },
      { key: 'legend', name: 'Legend', grad: 'var(--g-legend)', weight: 2 },
      { key: 'mythical', name: 'Mythical', grad: 'var(--g-mythical)', weight: 1 },
      { key: 'prismatic', name: 'Prismatic', grad: 'var(--g-prismatic)', weight: 0.5 },
      { key: 'secret', name: 'Secret', grad: 'var(--g-secret)', weight: 0.1 }
    ];


    const POTIONS = {
      luck: [
        { mult: 2, name: '2x Luck Potion', icon: 'luck-potion.png', effect: 'luck', duration: 5 * 60 * 1000, price: 5000, color: '' },
        { mult: 3, name: '3x Luck Potion', icon: 'x3-luck.png', effect: 'luck', duration: 5 * 60 * 1000, price: 8000, color: 'linear-gradient(135deg, #55a600, #fdd501)' },
        { mult: 5, name: '5x Luck Potion', icon: 'x5-luck.png', effect: 'luck', duration: 5 * 60 * 1000, price: 16000, color: 'linear-gradient(135deg, #72de00, #ffd500)' },
        { mult: 7, name: '7x Luck Potion', icon: 'x7-luck.png', effect: 'luck', duration: 5 * 60 * 1000, price: 35000, color: 'linear-gradient(135deg, #ffffff, #5FD3CB)' },
        { mult: 10, name: '10x Luck Potion', icon: 'x10-luck.png', effect: 'luck', duration: 5 * 60 * 1000, price: 70000, color: 'linear-gradient(135deg, #98fcfc, #006bff)' }
      ],
      fast: [
        { mult: 2, name: '2x Fast Roll Potion', icon: 'fast-roll.png', effect: 'fast', duration: 5 * 60 * 1000, price: 5000, color: 'linear-gradient(135deg, #91D9D4, #3a3a3a)' },
        { mult: 3, name: '3x Fast Roll Potion', icon: 'x3-roll.png', effect: 'fast', duration: 5 * 60 * 1000, price: 6000, color: 'linear-gradient(135deg, #93da96, #5f936c)' },
        { mult: 5, name: '5x Fast Roll Potion', icon: 'x5-roll.png', effect: 'fast', duration: 5 * 60 * 1000, price: 17000, color: 'linear-gradient(135deg, #56d44c, #285e2d)' },
        { mult: 7, name: '7x Fast Roll Potion', icon: 'x7-roll.png', effect: 'fast', duration: 5 * 60 * 1000, price: 29000, color: 'linear-gradient(135deg, #007583, #002e5f)' },
        { mult: 10, name: '10x Fast Roll Potion', icon: 'x10-roll.png', effect: 'fast', duration: 5 * 60 * 1000, price: 48000, color: 'linear-gradient(135deg, #0192af, #01446f)' }
      ]
    };

    const LUCK_EFFECTS = {
      2: { common: 0.8, uncommon: 0.8, rare: 2, epic: 2, legend: 2, mythical: 2, prismatic: 1.5, secret: 1.2 },
      3: { common: 0.75, uncommon: 0.75, rare: 3, epic: 3, legend: 3, mythical: 3, prismatic: 2, secret: 1.5 },
      5: { common: 0.6, uncommon: 0.6, rare: 0.8 * 5, epic: 5, legend: 5, mythical: 5, prismatic: 3, secret: 2 },
      7: { common: 0.3, uncommon: 0.3, rare: 0.65 * 7, epic: 0.95 * 7, legend: 7, mythical: 7, prismatic: 4, secret: 2.5 },
      10: { common: 0.1, uncommon: 0.1, rare: 0.55 * 10, epic: 0.85 * 10, legend: 10, mythical: 10, prismatic: 5, secret: 3 }
    };

    const FAST_ROLL_EFFECTS = {
      1: { shuffleSpeed: 150, rollDuration: 7000 },
      2: { shuffleSpeed: 115, rollDuration: 5000 },
      3: { shuffleSpeed: 90, rollDuration: 3500 },
      5: { shuffleSpeed: 60, rollDuration: 2500 },
      7: { shuffleSpeed: 45, rollDuration: 1800 },
      10: { shuffleSpeed: 30, rollDuration: 1200 }
    };


    // Daftar item contoh (ganti sesuai asetmu)
    const ITEMS = [
      // {
      //   image: 'ac.jpg',
      //   text: 'AC prismatic',
      //   rarity: 'prismatic',
      //   numberRange: [1, 1200000]
      // },
      // {
      //   image: 'ac.jpg',
      //   text: 'AC secret',
      //   rarity: 'secret',
      //   numberRange: [1, 120000000]
      // },
      // {
      //   image: 'ac.jpg',
      //   text: 'AC secret',
      //   rarity: 'legend',
      //   numberRange: [1, 120000]
      // },
      // {
      //   image: 'ac.jpg',
      //   text: 'AC secret',
      //   rarity: 'mythical',
      //   numberRange: [1, 1200000]
      // },
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
        image: 'gihun-sigma.jpg',
        text: "i'm feeling sigma",
        rarity: 'secret',
        numberRange: [1, 190000000]
      },
      {
        image: 'hacker.jpg',
        text: 'damcuk pristel!',
        rarity: 'prismatic',
        numberRange: [1, 30190000]
      },
      {
        image: 'deki-walawe.jpg',
        text: 'walaweh',
        rarity: 'prismatic',
        numberRange: [1, 45000000]
      },
      {
        image: 'sesosok-dev.jpg',
        text: 'SANG DEV',
        rarity: 'secret',
        numberRange: [1, 990000000]
      },
      {
        image: 'naufal-byat.jpg',
        text: 'naufal BYAtch!',
        rarity: 'secret',
        numberRange: [1, 871000000]
      },
      {
        image: 'rifa-byat.jpg',
        text: 'rifa-BYActh!',
        rarity: 'prismatic',
        numberRange: [1, 32100000]
      },
      {
        image: 'agra-imut.jpg',
        text: 'imutnyoo!',
        rarity: 'mythical',
        numberRange: [1, 5010000]
      },
      {
        image: 'mahluk-asing.jpg',
        text: 'mahluk asing COEG!',
        rarity: 'secret',
        numberRange: [1, 521000000]
      },
      {
        image: 'bagas-sigma.jpg',
        text: 'Bagas Sigma',
        rarity: 'mythical',
        numberRange: [1, 6120000]
      },
      {
        image: 'nafis-gepeng.jpg',
        text: 'nafis Yeah!',
        rarity: 'legend',
        numberRange: [1, 310100]
      },
      {
        image: 'rasya-wink.jpg',
        text: 'rasya Wink!',
        rarity: 'legend',
        numberRange: [1, 409199]
      },
            {
        image: 'wahh.jpg',
        text: 'huwahh',
        rarity: 'rare',
        numberRange: [1, 810]
      },
            {
        image: 'alfon-present.jpg',
        text: 'alfon Present!',
        rarity: 'rare',
        numberRange: [1, 992]
      },
            {
        image: 'gihun-hs.jpg',
        text: 'gihun and 01 meme!',
        rarity: 'mythical',
        numberRange: [1, 8300000]
      },
            {
        image: 'reporter-ketawa.jpg',
        text: 'bahasa inggris bukan bahasa asing lagi yah?',
        rarity: 'legend',
        numberRange: [1, 700100]
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
        case 'prismatic': return 'var(--g-prismatic)';
        case 'secret': return 'var(--g-secret)';
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
        case 'prismatic': return '#ffffff'; // netral, biar kontras dengan rainbow frame
        case 'secret': return '#000000';    // hitam, kontras dengan grad hitam-putih
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
        case 'secret': return 25000;     // harga jual paling tinggi
        case 'prismatic': return 15000;  // harga jual tinggi
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
    // --- deklarasi global (letakkan di awal script, sebelum dipakai) ---
    let secretSparkleInterval = null;

    window.secretSparkleInterval ??= null;
    function stopSecretSparkle() {
      if (window.secretSparkleInterval !== null) {
        clearInterval(window.secretSparkleInterval);
        window.secretSparkleInterval = null;
      }
    }

function addCoins(amount) {
  let currentCoins = parseInt(localStorage.getItem("coins") || "0");
  currentCoins += amount;
  localStorage.setItem("coins", currentCoins);

  coins = currentCoins; // update variabel global
  updateCoinUI();
}


function addPotion(type, mult, amount = 1) {
  let potions = {};
  try {
    potions = JSON.parse(localStorage.getItem('potions')) || {};
  } catch {
    potions = {};
  }

  const key = `${type}_${mult}`;
  if (!potions[key]) potions[key] = 0;
  potions[key] += amount;

  localStorage.setItem('potions', JSON.stringify(potions));

  // auto-refresh kalau inventory terbuka
  if (document.getElementById('potionInventoryOverlay')?.classList.contains('show')) {
    renderPotionInventory();
  }
}


    /******************************************
     * ======= LOBBY → GAME TRANSITION =======
     ******************************************/
    function startGame() {
      showLoading(5500, () => { // kasih durasi loading (2.5 detik)
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
        if (text) text.textContent = 'MULAI PLENGER ROLL, KLIK TOMBOL DI BAWAH';

        const badge = el('rngBadge');
        if (badge) badge.style.display = 'none';

        const frame = el('rngFrame');
        if (frame) frame.style.background = 'var(--g-common)';
      });
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

      if (frame) {
        frame.style.background = item.rarity.grad;
        frame.classList.remove('rainbow-frame');
        if (item.rarity.key === 'prismatic') {
          frame.style.background = 'transparent';
          frame.classList.add('rainbow-frame');
        }
      }

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
          }).catch(e => { });
        }
      });
    }


    function playRarityAnimation(rarity) {
      const wrapper = document.getElementById('rarityAnimation');
      const bg = wrapper?.querySelector('.rarity-bg');
      const star = wrapper?.querySelector('.rarity-star');
      const body = document.body;

      if (!wrapper || !bg || !star) return;

      // 🔥 SEMBUNYIKAN BANNER SAAT ANIMASI MULAI
      hideBannerToggle();
      const banner = document.getElementById("eventBanner");
      if (banner) banner.classList.add("hidden");

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

          // 🔥 TAMPILKAN BANNER LAGI SETELAH ANIMASI SELESAI
          if (banner) banner.classList.remove("hidden");
          showBannerToggle();
        }, 1000);

        setTimeout(() => {
          body.classList.remove('shake-fade');
          const music = document.getElementById('gachaMusic');
          if (music) {
            music.pause();
            music.currentTime = 0;
          }
        }, 3000);

      }, 12560);
    }


    function showFullscreenAura(type) {
      const el = document.querySelector(".fullscreen-" + type);
      if (!el) return;
      el.classList.remove("hidden");
      // ❌ Jangan auto-hide di sini
    }

    // Fungsi dipanggil saat roll baru mulai
    function hideFullscreenAuras() {
      document.querySelector('.fullscreen-prismatic').classList.add('hidden');
      document.querySelector('.fullscreen-secret').classList.add('hidden');

      stopSecretSparkle();
    }

    function playVideoRarity(rarity) {
      const isMobile = window.innerWidth <= 768;
      const videoId = rarity + "Video" + (isMobile ? "Mobile" : "");
      const video = document.getElementById(videoId);
      const sfx = document.getElementById(rarity + 'Sfx');
      const body = document.body;
      hideBannerToggle();

      let auraEl = null;
      if (rarity === 'prismatic') {
        auraEl = document.querySelector('.fullscreen-prismatic');
      }
      if (rarity === 'secret') {
        auraEl = document.querySelector('.fullscreen-secret');
      }

      if (!video) return;

      // 🔥 SEMBUNYIKAN BANNER SAAT VIDEO MULAI
      const banner = document.getElementById("eventBanner");
      if (banner) banner.classList.add("hidden");

      toggleUI(true);
      video.classList.remove('hidden');
      video.currentTime = 0;
      video.play().catch(e => console.warn("Video play error:", e));

      if (sfx) {
        sfx.currentTime = 0;
        sfx.play().catch(e => console.warn("SFX play error:", e));
      }

      video.onended = () => {
        video.classList.add('hidden');
        toggleUI(false);

        if (auraEl) {
          auraEl.classList.remove('hidden');
        }
        // Efek shake
        body.classList.add('shake-body');
        setTimeout(() => {
          body.classList.remove('shake-body');
          body.classList.add('shake-fade');

          // ✨ Sparkle untuk secret
          if (rarity === 'secret') {
            const frame = document.getElementById('rngFrame');
            if (frame) {
              frame.classList.add('secret-frame');
              frame.style.position = 'relative';
              stopSecretSparkle();
              secretSparkleInterval = setInterval(() => {
                spawnSecretSparkle(frame);
              }, 300);
            }
          }
        }, 1000);

        setTimeout(() => {
          body.classList.remove('shake-fade');
          // 🔥 TAMPILKAN BANNER LAGI SETELAH VIDEO SELESAI
          if (banner) banner.classList.remove("hidden");
          showBannerToggle(); // ⬅️ disini pas!
        }, 3000);
      };
    }

    function setRollingText(rarity, text) {
      const rollingText = document.getElementById('rollingText');
      rollingText.classList.remove('rolling-prismatic', 'rolling-secret');

      if (rarity === 'prismatic') {
        rollingText.classList.add('rolling-prismatic');
      } else if (rarity === 'secret') {
        rollingText.classList.add('rolling-secret');
      }

      rollingText.textContent = text;
    }

    // Untuk shuffle saja
    function pickRarityForShuffle() {
      const rarities = [
        { key: 'common', name: 'Common' },
        { key: 'uncommon', name: 'Uncommon' },
        { key: 'rare', name: 'Rare' },
        { key: 'epic', name: 'Epic' },
        { key: 'legend', name: 'Legend' },
        { key: 'mythical', name: 'Mythical' },
        { key: 'prismatic', name: 'Prismatic' },
        { key: 'secret', name: 'Secret' }
      ];

      return rarities[Math.floor(Math.random() * rarities.length)];
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

    let activeSecretFrame = null;

    function setRollingText(rarityKey, itemName, rarityName) {
      const rollingEl = document.getElementById('rollingText');
      rollingEl.textContent = `${itemName} (${rarityName})`;

      // reset style dulu
      rollingEl.style.background = '';
      rollingEl.style.webkitBackgroundClip = '';
      rollingEl.style.webkitTextFillColor = '';
      rollingEl.style.color = '';

      if (rarityKey === 'prismatic') {
        // Pelangi
        rollingEl.style.background = 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)';
        rollingEl.style.webkitBackgroundClip = 'text';
        rollingEl.style.webkitTextFillColor = 'transparent';
      } else if (rarityKey === 'secret') {
        // Hitam-putih seperti frame secret
        rollingEl.style.background = 'linear-gradient(90deg, black, white, black)';
        rollingEl.style.webkitBackgroundClip = 'text';
        rollingEl.style.webkitTextFillColor = 'transparent';
        rollingEl.style.fontWeight = 'bold';
      } else {
        // warna normal rarity
        rollingEl.style.color = rarityTextColor(rarityKey);
      }

      // retrigger animasi rolling-text
      rollingEl.classList.remove('rolling-text');
      void rollingEl.offsetWidth;
      rollingEl.classList.add('rolling-text');
    }


    // Rolling 5 detik dengan SFX
    function rollRNG() {
      
      const frame = document.getElementById('rngFrame');

      if (frame) {
        frame.classList.remove('secret-frame');
      }
      stopSecretSparkle();

      hideFullscreenAuras();
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

      if (activeSecretFrame) {
        activeSecretFrame.classList.remove('secret-frame');
        activeSecretFrame = null;
      }

      if (secretSparkleInterval) {
        clearInterval(secretSparkleInterval);
        secretSparkleInterval = null;
        document.querySelectorAll('.secret-sparkle').forEach(el => el.remove());
      }
      // sebelum animasi rarity mulai


      document.querySelector('.fullscreen-prismatic').classList.add('hidden');
      document.querySelector('.fullscreen-secret').classList.add('hidden');

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

      const rk = selected?.rarity?.key || null;
      updateQuestProgress('roll20', 1);
      updateQuestProgress('roll100', 1);
      updateQuestProgress('roll500', 1);
      updateQuestProgress('roll200', 1);
      if (rk) {
        // contoh mapping (sesuaikan id quest/achievement dengan yang kamu definisikan)
        if (rk === 'rare') {
          updateQuestProgress('rare3', 1);
          updateAchievementProgress('rare10', 1);
        } else if (rk === 'epic') {
          updateQuestProgress('epic1', 1);
          updateAchievementProgress('epic20', 1);
        } else if (rk === 'legend') {
          updateQuestProgress('getLegend', 1);
          updateQuestProgress('legend3', 1);
          updateAchievementProgress('legend5', 1);
          updateAchievementProgress('legend10', 1);
        } else if (rk === 'mythical') {
          updateQuestProgress('mythical1', 1);
          updateAchievementProgress('mythical3', 1);
        }
      }

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
      } catch (e) { }

      const mult = getFastRollMultiplier();
      let effect = FAST_ROLL_EFFECTS[mult] || FAST_ROLL_EFFECTS[Math.max(...Object.keys(FAST_ROLL_EFFECTS).map(Number))];
      let shuffleSpeed = Math.max(effect.shuffleSpeed, 100); // batas minimal 30ms
      let rollDuration = effect.rollDuration;


      // ======================================================

      // Animasi teks item + rarity
      const shuf = setInterval(() => {

        const rr = pickRarityForShuffle();
        const randomItem = getRandomItemByRarity(rr.key);
        setRollingText(rr.key, randomItem.text, rr.name);


        setRollingText(rr.key, randomItem.text, rr.name);


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
        } catch (e) { }

        // Ambil nomor item jika ada di inventory
        function getSavedItemNumber(item) {
          let inv = [];
          try {
            inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || '[]');
          } catch (e) { }
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

        updateStats(selected.rarity.key);

        if (selected.rarity.key === 'prismatic') {
          playVideoRarity('prismatic');
        } else if (selected.rarity.key === 'secret') {
          playVideoRarity('secret');
        } else {
          // rarity biasa → efek bintang lama
          if (['epic', 'legend', 'mythical'].includes(selected.rarity.key)) {
            playRarityAnimation(selected.rarity.key);
          }
        }


        // SFX hasil
        try {
          if (resultSfx) {
            resultSfx.currentTime = 0;
            resultSfx.play();
          }
        } catch (e) { }

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

        if (it.locked) {
          card.classList.add('locked');
          card.setAttribute('title', 'Terkunci — Tidak bisa dijual');
        }

        let count = getItemCount(it.text);
        if (!count || count < 1) count = 1;


        // Cek apakah prismatic
        const isPrismatic = (r.key === 'prismatic');
        const isSecret = (r.key === 'secret');

        card.innerHTML = `
  <div class="frame ${isPrismatic ? 'rainbow-frame' : ''} ${isSecret ? 'secret-frame' : ''}"
       style="${(isPrismatic || isSecret) ? '' : `background:${r.grad};`} position:relative;">
    <img src="${it.image}" alt="${it.text}">
    <div class="item-count">x${count}</div>

    <!-- 🔒 lock -->
    <button class="item-lock-toggle" data-time="${it.time}" title="Kunci / Buka">
      ${it.locked ? '🔒' : '🔓'}
    </button>

    <!-- 👁️ inspect -->
    <button class="item-inspect-toggle" data-img="${it.image}" title="Lihat gambar penuh">
      👁️
    </button>
  </div>
  <div class="name">${it.text}</div>
  <div class="rarity-badge" style="background:${r.grad}">${r.name}</div>
  <div class="number-text">${it.number || ''}</div>
`;

        grid.appendChild(card);
        const inspectBtn = card.querySelector('.item-inspect-toggle');
        if (inspectBtn) {
          inspectBtn.addEventListener('click', (e) => {
            const imgSrc = e.currentTarget.getAttribute('data-img');
            openInspect(imgSrc);
          });
        }

      });
    }

    function updateFilterFromDropdown(selectEl) {
      // Hapus .active dari semua "chip"
      const chips = document.querySelectorAll('#chips .chip, .chips .chip');
      chips.forEach(chip => chip.classList.remove('active'));

      // Kasih .active ke option terpilih
      const selectedOption = selectEl.options[selectEl.selectedIndex];
      selectedOption.classList.add('active');

      // Render ulang inventory
      renderInventory();
    }

    function ensureInspectOverlay() {
      if (document.getElementById('inspectOverlay')) return;
      // (Kalau mau, bisa buat overlay via JS. Tapi karena kita sudah taruh HTML-nya, ini opsional.)
    }

    function openInspect(src) {
      ensureInspectOverlay();
      const o = document.getElementById('inspectOverlay');
      const img = document.getElementById('inspectImage');
      if (!o || !img) return;
      img.src = src || '';
      o.style.display = 'grid';
    }

    function closeInspect() {
      const o = document.getElementById('inspectOverlay');
      if (o) o.style.display = 'none';
    }

    document.addEventListener('click', (e) => {
      if (e.target && e.target.id === 'inspectClose') closeInspect();
      // klik area gelap utk tutup
      if (e.target && e.target.id === 'inspectOverlay') closeInspect();
    });



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
        // 💰 Tambahkan koin (selalu sync dengan localStorage dulu)
        let currentCoins = parseInt(localStorage.getItem("coins") || "0");
        currentCoins += gained;
        localStorage.setItem("coins", currentCoins);
        saveCoins();
        updateCoinUI();
        // setelah hitung gained
        addCoins(gained);
        renderInventory();
        showCoinPopup(gained);
        // di sellBtn
        const jumlahTerjual = selectedCards.length;
        updateQuestProgress('sell5', jumlahTerjual);
        updateQuestProgress('sell20', jumlahTerjual);
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
        // 💰 Tambahkan koin (selalu sync dengan localStorage dulu)
        let currentCoins = parseInt(localStorage.getItem("coins") || "0");
        currentCoins += gained;
        localStorage.setItem("coins", currentCoins);
        saveCoins();
        updateCoinUI();
        // setelah hitung gained
        addCoins(gained);
        renderInventory();
        showCoinPopup(gained);
        // di sellAllBtn
        const jumlahTerjual = unlocked.length;
        updateQuestProgress('sell5', jumlahTerjual);
        updateQuestProgress('sell20', jumlahTerjual);
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
  const currentCoins = parseInt(localStorage.getItem("coins") || "0");
  el('coinAmount').textContent = currentCoins;
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
      } catch (e) { }

      // ✅ Popup pembelian sukses
      showPopup(`Berhasil membeli ${potion.name}!`);

      // Simpan ke inventory potion
addPotion(type, potion.mult, 1);

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
      } catch (e) { }

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
      updateQuestProgress('usePotion1', 1);
      updateQuestProgress('usePotion5', 1);
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
      {
        version: 'UPD-1.2',
        image: 'update-1.2.jpg',
        notes: [
          '📱 Adding Day Log-In!',
          '📱 Adding User Stats!',
          '🎴 New 10 plenger card!' 
        ]
      },
      {
        version: 'UPD-1',
        image: 'update-1.jpg',
        notes: [
          '🎴 Adding new rarity-card : prismatic & secret!',
          '🎴 New 15 plenger card! include prismatic & secret!',
          '📱 New ui "inspect" in collection'
        ]
      },
      {
        version: 'UPD FULL-BETA',
        image: 'full-beta.jpg',
        notes: [
          '🎲 Fixing the render roll so it doesnt waste your data quota',
          '🎲 Adding effect UI di roll 10/10!',
          '🍀 Fixing luck button on roll 10/10!',
          '🍀 Adding potion luck x3,x5,x7 & x10!',
          '👟 Adding potion fast roll x3,x5,x7 & x10!',
          '🧩 Potion can be stackable!',
          '🎴 New 10 Plenger Card!'
        ]
      },
      {
        version: 'Release BETA',
        image: 'icon.png',
        notes: [
          '🎲🎴 Game has been release! collect all Plenger and earn coins! 🎴🎲',
        ]
      }
    ];

function openUpdateLog() {
  const overlay = document.getElementById('updateLogOverlay');
  if (!overlay) return;
  overlay.classList.add('show');

  // 🔥 Tandai sudah lihat update terbaru
  localStorage.setItem("lastSeenUpdateVersion", CURRENT_UPDATE_VERSION);

  // 🔥 Hilangkan indikator merah
  const updateIndicator = document.getElementById("updateIndicator");
  if (updateIndicator) updateIndicator.classList.add("hidden");

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
        <div style="max-width:190px; max-height:170px;">
          <div class="frame">
            <img src="${log.image}" style="width:100%; height:90%; object-fit:cover;" />
          </div>
          <div style="font-size:9px; text-align:center; margin-top:4px; word-wrap:break-word;">
            ${log.version}
          </div>
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

    function checkUpdateLogIndicator() {
  const lastSeen = localStorage.getItem("lastSeenUpdateVersion");
  const indicator = document.getElementById("updateIndicator");

  if (lastSeen !== CURRENT_UPDATE_VERSION) {
    indicator.classList.remove("hidden"); // tampilkan bulat merah !
  } else {
    indicator.classList.add("hidden");
  }
}

window.addEventListener("load", () => {
  checkUpdateLogIndicator();
});


    /*******************************
     * ======= CUSTOMIZAION =======
     *******************************/
    function spawnSecretSparkle(frameEl) {
      const sparkle = document.createElement('div');
      sparkle.className = 'secret-sparkle';

      const rect = frameEl.getBoundingClientRect();
      const size = 60;
      const inset = -23;

      const side = Math.floor(Math.random() * 4);
      if (side === 0) {
        sparkle.style.top = `${inset}px`;
        sparkle.style.left = `${Math.random() * (rect.width - size - inset * 2)}px`;
      } else if (side === 1) {
        sparkle.style.top = `${Math.random() * (rect.height - size - inset * 2)}px`;
        sparkle.style.left = `${rect.width - size - inset}px`;
      } else if (side === 2) {
        sparkle.style.top = `${rect.height - size - inset}px`;
        sparkle.style.left = `${Math.random() * (rect.width - size - inset * 2)}px`;
      } else {
        sparkle.style.top = `${Math.random() * (rect.height - size - inset * 2)}px`;
        sparkle.style.left = `${inset}px`;
      }

      sparkle.style.width = sparkle.style.height = `${size}px`;
      sparkle.style.position = 'absolute';
      frameEl.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 1500);
    }


    // jalankan interval kilau random hanya untuk frame Secret
    setInterval(() => {
      document.querySelectorAll('.secret-frame').forEach(frame => {
        if (Math.random() < 0.7) { // 70% kemungkinan tiap tick
          spawnSecretSparkle(frame);
        }
      });
    }, 400);

    function toggleEventMini() {
      document.getElementById("eventBanner").classList.toggle("show");
    }
    const slider = document.querySelector('.event-slider');
    const slides = slider.querySelectorAll('img');
    let currentIndex = 0;

    function showSlide(index) {
      const containerHeight = document.querySelector('.event-banner').offsetHeight;
      const offset = -index * containerHeight;
      slider.style.transform = `translateY(${offset}px)`;
    }

    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000); // pindah tiap 5 detik

    const banner = document.getElementById('eventBanner');
    const toggleBtn = document.getElementById('bannerToggle');

    // default: banner terlihat
    let bannerVisible = true;

    // Set posisi awal tombol sesuai status banner
    function syncToggleButton() {
      if (bannerVisible) {
        toggleBtn.innerHTML = '&gt;';   // tampil banner → tombol panah ke kanan
        toggleBtn.classList.add('right');
        toggleBtn.classList.remove('left');
        banner.classList.remove('hidden-slide');
      } else {
        toggleBtn.innerHTML = '&lt;';   // hidden → tombol panah ke kiri
        toggleBtn.classList.add('left');
        toggleBtn.classList.remove('right');
        banner.classList.add('hidden-slide');
      }
    }

    // Jalankan saat halaman load
    syncToggleButton();

    // Event klik tombol
    toggleBtn.addEventListener('click', () => {
      bannerVisible = !bannerVisible;
      syncToggleButton();
    });

    const rarityVideos = [
      document.getElementById('prismaticVideo'),
      document.getElementById('prismaticVideoMobile'),
      document.getElementById('secretVideo'),
      document.getElementById('secretVideoMobile'),
      // tambahin kalau ada video epic/legend/mythical juga
    ];

    rarityVideos.forEach(video => {
      if (video) {
        // Saat video mulai play → sembunyikan tombol panah
        video.addEventListener('play', () => {
          toggleBtn.classList.add('hidden');
        });

        // Saat video selesai → tampilkan tombol panah lagi
        video.addEventListener('ended', () => {
          toggleBtn.classList.remove('hidden');
        });
      }
    });
    function hideBannerToggle() {
      toggleBtn.classList.add('hidden');
    }
    function showBannerToggle() {
      toggleBtn.classList.remove('hidden');
    }
    // === LOADING SCREEN HANDLER ===
    function showLoading(duration = 2000, callback = null) {
      const loading = document.getElementById("loadingScreen");
      loading.classList.remove("hidden");
      setTimeout(() => {
        loading.classList.add("hidden");
        if (callback) callback();
      }, duration);
    }

    // Tampilkan loading saat pertama kali buka
    window.addEventListener("load", () => {
      showLoading(5500); // 2.5 detik
      checkUsername();
      updateUsernameUI();
    });


const rewards = [
  { type: "coin", amount: 500 },
  { type: "potion", potionType: "luck", potion: "x2", amount: 1 },
  { type: "coin", amount: 1000 },
  { type: "potion", potionType: "fast", potion: "x2", amount: 2 },
  { type: "coin", amount: 1500 },
  { type: "potion", potionType: "luck", potion: "x3", amount: 2 },
  { type: "potion", potionType: "luck", potion: "x5", amount: 2 }
];



function checkDailyReward() {
  const lastClaim = localStorage.getItem("lastDailyClaim");
  const today = new Date().toDateString();
  let streak = parseInt(localStorage.getItem("dailyStreak") || "0");

  // 👉 tambahkan baris ini biar sinkron dengan dailyDay
  updateDailyUI();

  const btn = document.getElementById("dailyClaimBtn");
  if (lastClaim === today) {
    btn.disabled = true;
    btn.innerText = "Sudah di-claim ✔️";
  } else {
    btn.disabled = false;
    btn.innerText = "Klaim Hadiah";
  }

  const indicator = document.getElementById("rewardIndicator");

  if (lastClaim !== today) {
    // Belum klaim → tampilkan popup + indikator merah
    document.getElementById("dailyRewardOverlay").classList.add("show");
    if (indicator) indicator.classList.remove("hidden");
  } else {
    // Sudah klaim → sembunyikan indikator
    if (indicator) indicator.classList.add("hidden");
  }
}

    function highlightRewardBox(streak) {
      rewards.forEach((_, i) => {
        const box = document.getElementById(`rewardDay${i + 1}`);
        box.classList.remove("claimed", "active");
        if (i < streak) box.classList.add("claimed");
        if (i === streak) box.classList.add("active");
      });
    }


function claimDailyReward() {
  const today = new Date().toDateString();
  localStorage.setItem("lastDailyClaim", today);

  let day = parseInt(localStorage.getItem("dailyDay") || "1");
  if (day > rewards.length) day = 1;

  const reward = rewards[day - 1];

  if (reward.type === "coin") {
    addCoins(reward.amount);
    showPopup(`🎉 Kamu dapat ${reward.amount} Coins!`);
} else if (reward.type === "potion") {
  const mult = parseInt(reward.potion.replace("x", ""));
  addPotion(reward.potionType, mult, reward.amount);

  // refresh UI kalau inventory terbuka
  if (document.getElementById("potionInventoryOverlay")?.classList.contains("show")) {
    renderPotionInventory();
  }

  showPopup(`✨ Kamu dapat ${reward.amount} Potion ${reward.potion} (${reward.potionType})!`);
}



  // ⏭ Simpan hari berikutnya
  localStorage.setItem("dailyDay", day + 1);

  // 🔒 Ubah tombol jadi sudah diklaim
  const claimBtn = document.querySelector("#dailyRewardOverlay button");
  if (claimBtn) {
    claimBtn.textContent = "✅ Sudah Diklaim";
    claimBtn.disabled = true;
    claimBtn.style.opacity = "0.6";
    claimBtn.style.cursor = "not-allowed";
  }
    // 🎵 SFX cengkrink
  try {
    const sfx = document.getElementById("resultSfx");
    if (sfx) {
      sfx.currentTime = 0;
      sfx.play();
    }
  } catch (e) { console.warn("SFX gagal dimainkan:", e); }
    
    const indicator = document.getElementById("rewardIndicator");
  if (indicator) indicator.classList.add("hidden");

  closeDailyReward();
  updateDailyUI(); // refresh grid highlight
}

function updateDailyUI() {
  let day = parseInt(localStorage.getItem("dailyDay") || "1");
  if (day > rewards.length) day = 1;

  // reset semua
  document.querySelectorAll(".reward-box").forEach((box, i) => {
    box.classList.remove("active", "claimed");
    if (i + 1 < day) {
      box.classList.add("claimed"); // hari sebelumnya
    }
    if (i + 1 === day) {
      box.classList.add("active"); // hari ini
    }
  });
}


    function closeDailyReward() {
      document.getElementById("dailyRewardOverlay").classList.remove("show");
    }

    // Panggil saat game start
    window.addEventListener("load", () => {
      checkDailyReward();
    });

function openDailyReward() {
  updateDailyUI();

  const today = new Date().toDateString();
  const lastClaim = localStorage.getItem("lastDailyClaim");
  const claimBtn = document.querySelector("#dailyRewardOverlay button");

  if (lastClaim === today) {
    // sudah klaim
    claimBtn.textContent = "✅ Sudah Diklaim";
    claimBtn.disabled = true;
    claimBtn.style.opacity = "0.6";
    claimBtn.style.cursor = "not-allowed";
  } else {
    claimBtn.textContent = "Klaim Hadiah";
    claimBtn.disabled = false;
    claimBtn.style.opacity = "1";
    claimBtn.style.cursor = "pointer";
  }

  document.getElementById("dailyRewardOverlay").classList.add("show");
}

    function updateStats(rarity) {
      // Total roll
      let rolls = parseInt(localStorage.getItem("totalRolls") || "0");
      localStorage.setItem("totalRolls", rolls + 1);

      // Legendary
      if (rarity === "legend") {
        let legendaryCount = parseInt(localStorage.getItem("legendCount") || "0");
        localStorage.setItem("legendaryCount", legendaryCount + 1);
      }

      // Mythical
      if (rarity === "mythical") {
        let mythicalCount = parseInt(localStorage.getItem("mythicalCount") || "0");
        localStorage.setItem("mythicalCount", mythicalCount + 1);
      }

      // Prismatic
      if (rarity === "prismatic") {
        let prismaticCount = parseInt(localStorage.getItem("prismaticCount") || "0");
        localStorage.setItem("prismaticCount", prismaticCount + 1);
      }

      // Secret
      if (rarity === "secret") {
        let secretCount = parseInt(localStorage.getItem("secretCount") || "0");
        localStorage.setItem("secretCount", secretCount + 1);
      }
    }



    // ===== PLAYER PROFILE =====
    function openProfile() {
      document.getElementById("profileName").innerText = localStorage.getItem("username") || "Guest";
      document.getElementById("profileRolls").innerText = localStorage.getItem("totalRolls") || 0;
      document.getElementById("profileLegendary").innerText = localStorage.getItem("legendaryCount") || 0;
      document.getElementById("profileMythical").innerText = localStorage.getItem("mythicalCount") || 0;
      document.getElementById("profilePrismatic").innerText = localStorage.getItem("prismaticCount") || 0;
      document.getElementById("profileSecret").innerText = localStorage.getItem("secretCount") || 0;
      document.getElementById("profileCoins").innerText = localStorage.getItem("coins") || 0;

      document.getElementById("profileOverlay").classList.add("show");
    }


    function closeProfile() {
      document.getElementById("profileOverlay").classList.remove("show");
    }

    // ===== Pemanggilan awal saat game start =====
    window.addEventListener("load", () => {
      checkDailyReward();
    });

    // ===== USERNAME =====
    function checkUsername() {
      const savedName = localStorage.getItem("username");
      if (!savedName) {
        // Belum ada username → tampilkan popup
        document.getElementById("usernameOverlay").classList.add("show");
      }
    }

    function saveUsername() {
      const name = document.getElementById("usernameInput").value.trim();
      if (name.length < 1) return alert("Username tidak boleh kosong!");

      localStorage.setItem("username", name);
      document.getElementById("usernameOverlay").classList.remove("show");

      // Update UI kalau ada label username (misalnya di profile atau lobby)
      updateUsernameUI();
    }

    function updateUsernameUI() {
      const name = localStorage.getItem("username") || "Guest";
      const profileNameEl = document.getElementById("profileName");
      if (profileNameEl) profileNameEl.innerText = name;
    }




// ======================
// 🔧 DEBUG DAILY REWARD
// ======================
window.debugDailyReward = {
  reset: () => {
    localStorage.removeItem("lastDailyClaim");
    localStorage.setItem("dailyDay", "1");
    console.log("🔄 Daily Reward direset ke Hari 1");
    updateDailyUI();
    forceEnableClaimButton();
  },
  skipDay: () => {
    let day = parseInt(localStorage.getItem("dailyDay") || "1");
    localStorage.setItem("dailyDay", day + 1);
    localStorage.removeItem("lastDailyClaim"); // biar bisa klaim lagi
    console.log(`⏭ Skip → Daily Reward sekarang di Hari ${day + 1}`);
    updateDailyUI();
    forceEnableClaimButton();
  },
  setDay: (n) => {
    localStorage.setItem("dailyDay", n);
    localStorage.removeItem("lastDailyClaim"); // reset klaim
    console.log(`🎯 Daily Reward diatur manual ke Hari ${n}`);
    updateDailyUI();
    forceEnableClaimButton();
  }
};

// debugDailyReward.reset() → kembali ke hari 1.

// debugDailyReward.skipDay() → lompat ke hari berikutnya.

// debugDailyReward.setDay(5) → langsung set ke hari 5.

function forceEnableClaimButton() {
  const claimBtn = document.querySelector("#dailyRewardOverlay button");
  if (claimBtn) {
    claimBtn.textContent = "Klaim Hadiah";
    claimBtn.disabled = false;
    claimBtn.style.opacity = "1";
    claimBtn.style.cursor = "pointer";
  }
}
