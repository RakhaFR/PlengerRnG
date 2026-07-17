/*******************************
 * ======= KONFIGURASI =======
 *******************************/

const CURRENT_UPDATE_VERSION = "2.0";

// Rarity & tampilannya
const RARITIES = [
  { key: "common", name: "Common", grad: "var(--g-common)", weight: 50 },
  {
    key: "uncommon",
    name: "Uncommon",
    grad: "var(--g-uncommon)",
    weight: 30,
  },
  { key: "rare", name: "Rare", grad: "var(--g-rare)", weight: 15 },
  { key: "epic", name: "Epic", grad: "var(--g-epic)", weight: 4 },
  { key: "legend", name: "Legend", grad: "var(--g-legend)", weight: 2 },
  {
    key: "mythical",
    name: "Mythical",
    grad: "var(--g-mythical)",
    weight: 1,
  },
  {
    key: "prismatic",
    name: "Prismatic",
    grad: "var(--g-prismatic)",
    weight: 0.5,
  },
  { key: "secret", name: "Secret", grad: "var(--g-secret)", weight: 0.1 },
  { key: "edits", name: "EdiTz", grad: "var(--g-edits)", weight: 0.8 },
];

const POTIONS = {
  luck: [
    {
      mult: 2,
      name: "2x Luck Potion",
      icon: "ui/luck-potion.png",
      effect: "luck",
      duration: 5 * 60 * 1000,
      price: 5000,
      color: "",
    },
    {
      mult: 3,
      name: "3x Luck Potion",
      icon: "ui/x3-luck.png",
      effect: "luck",
      duration: 5 * 60 * 1000,
      price: 8000,
      color: "linear-gradient(135deg, #55a600, #fdd501)",
    },
    {
      mult: 5,
      name: "5x Luck Potion",
      icon: "ui/x5-luck.png",
      effect: "luck",
      duration: 5 * 60 * 1000,
      price: 16000,
      color: "linear-gradient(135deg, #72de00, #ffd500)",
    },
    {
      mult: 7,
      name: "7x Luck Potion",
      icon: "ui/x7-luck.png",
      effect: "luck",
      duration: 5 * 60 * 1000,
      price: 35000,
      color: "linear-gradient(135deg, #ffffff, #5FD3CB)",
    },
    {
      mult: 10,
      name: "10x Luck Potion",
      icon: "ui/x10-luck.png",
      effect: "luck",
      duration: 5 * 60 * 1000,
      price: 70000,
      color: "linear-gradient(135deg, #98fcfc, #006bff)",
    },
    {
      mult: 25,
      name: "25x Luck Potion",
      icon: "ui/x25-luck.png",
      effect: "luck",
      duration: 5 * 60 * 1000,
      price: 40000,
      color: "linear-gradient(135deg, #ffe066, #ff00cc, #7b00ff)",
    },
  ],
  fast: [
    {
      mult: 2,
      name: "2x Fast Roll Potion",
      icon: "ui/fast-roll.png",
      effect: "fast",
      duration: 5 * 60 * 1000,
      price: 5000,
      color: "linear-gradient(135deg, #91D9D4, #3a3a3a)",
    },
    {
      mult: 3,
      name: "3x Fast Roll Potion",
      icon: "ui/x3-roll.png",
      effect: "fast",
      duration: 5 * 60 * 1000,
      price: 6000,
      color: "linear-gradient(135deg, #93da96, #5f936c)",
    },
    {
      mult: 5,
      name: "5x Fast Roll Potion",
      icon: "ui/x5-roll.png",
      effect: "fast",
      duration: 5 * 60 * 1000,
      price: 17000,
      color: "linear-gradient(135deg, #56d44c, #285e2d)",
    },
    {
      mult: 7,
      name: "7x Fast Roll Potion",
      icon: "ui/x7-roll.png",
      effect: "fast",
      duration: 5 * 60 * 1000,
      price: 29000,
      color: "linear-gradient(135deg, #007583, #002e5f)",
    },
    {
      mult: 10,
      name: "10x Fast Roll Potion",
      icon: "ui/x10-roll.png",
      effect: "fast",
      duration: 5 * 60 * 1000,
      price: 48000,
      color: "linear-gradient(135deg, #0192af, #01446f)",
    },
  ],
};

const LUCK_EFFECTS = {
  2: {
    common: 0.8,
    uncommon: 0.8,
    rare: 2,
    epic: 2,
    legend: 2,
    mythical: 2,
    prismatic: 1.5,
    secret: 1.2,
    edits: 1.1,
  },
  3: {
    common: 0.75,
    uncommon: 0.75,
    rare: 3,
    epic: 3,
    legend: 3,
    mythical: 3,
    prismatic: 2,
    secret: 1.5,
    edits: 1.2,
  },
  5: {
    common: 0.6,
    uncommon: 0.6,
    rare: 0.8 * 5,
    epic: 5,
    legend: 5,
    mythical: 5,
    prismatic: 3,
    secret: 2,
    edits: 2,
  },
  7: {
    common: 0.3,
    uncommon: 0.3,
    rare: 0.65 * 7,
    epic: 0.95 * 7,
    legend: 7,
    mythical: 7,
    prismatic: 4,
    secret: 2.5,
    edits: 5,
  },
  10: {
    common: 0.1,
    uncommon: 0.1,
    rare: 0.55 * 10,
    epic: 0.85 * 10,
    legend: 10,
    mythical: 10,
    prismatic: 5,
    secret: 3,
    edits: 8,
  },
  25: {
    common: 0,
    uncommon: 0,
    rare: 4,
    epic: 7,
    legend: 22,
    mythical: 22,
    prismatic: 10,
    secret: 6,
    edits: 10,
  },
};

const FAST_ROLL_EFFECTS = {
  1: { shuffleSpeed: 150, rollDuration: 7000 },
  2: { shuffleSpeed: 115, rollDuration: 5000 },
  3: { shuffleSpeed: 90, rollDuration: 3500 },
  5: { shuffleSpeed: 60, rollDuration: 2500 },
  7: { shuffleSpeed: 45, rollDuration: 1800 },
  10: { shuffleSpeed: 30, rollDuration: 1200 },
};

// Daftar item contoh (ganti sesuai asetmu)
const ITEMS = [
  // {
  //   image: 'ui/icon-game2.jpg',
  //   text: 'Tester1',
  //   rarity: 'mythical',
  //   numberRange: [1, 999999999]
  // },
  // {
  //   image: 'ui/icon-game2.jpg',
  //   text: 'Tester2',
  //   rarity: 'prismatic',
  //   numberRange: [1, 999999999]
  // },
  // {
  //   image: 'ui/icon-game2.jpg',
  //   text: 'Tester3',
  //   rarity: 'secret',
  //   numberRange: [1, 999999999]
  // },
  // {
  //   image: 'ui/icon-game2.jpg',
  //   text: 'Tester4',
  //   rarity: 'edits',
  //   numberRange: [1, 999999999]
  // },
  {
    image: "images/agra sigma.jpg",
    text: "agra Sigma",
    rarity: "epic",
    numberRange: [1, 12000],
  },
  {
    image: "images/ac.jpg",
    text: "lu kenapa jadi mythical",
    rarity: "mythical",
    numberRange: [1, 999999],
  },
  {
    image: "images/alif senyum.jpg",
    text: "Alif Senyum",
    rarity: "uncommon",
    numberRange: [1, 399],
  },
  {
    image: "images/bagas bengong.jpg",
    text: "Bagas Bengong",
    rarity: "rare",
    numberRange: [1, 750],
  },
  {
    image: "images/deki nyengir.jpg",
    text: "Deki Nyengir",
    rarity: "epic",
    numberRange: [1, 25000],
  },
  {
    image: "images/marvin wink.jpg",
    text: "Marvin Wink",
    rarity: "uncommon",
    numberRange: [1, 300],
  },
  {
    image: "images/2 apit.jpg",
    text: "alif di apit",
    rarity: "rare",
    numberRange: [1, 900],
  },
  {
    image: "images/2 Senyuman.jpg",
    text: "2 senyuman manis",
    rarity: "uncommon",
    numberRange: [1, 500],
  },
  {
    image: "images/ac.jpg",
    text: "YA AC",
    rarity: "common",
    numberRange: [1, 10],
  },
  {
    image: "images/agra & amira.jpg",
    text: "cieee lopyu",
    rarity: "legend",
    numberRange: [1, 100000],
  },
  {
    image: "images/agra shalat.jpg",
    text: "agra shalat",
    rarity: "epic",
    numberRange: [1, 5999],
  },
  {
    image: "images/agra umhehe.jpg",
    text: "agra umhehe!",
    rarity: "mythical",
    numberRange: [1, 1000000],
  },
  {
    image: "images/agra velocity.jpg",
    text: "velocity boy!",
    rarity: "epic",
    numberRange: [1, 9999],
  },
  {
    image: "images/akbar minkem.jpg",
    text: "akbar minkem",
    rarity: "common",
    numberRange: [1, 25],
  },
  {
    image: "images/alfon mm.jpg",
    text: "alfon mm",
    rarity: "common",
    numberRange: [1, 3],
  },
  {
    image: "images/bagas melet.jpg",
    text: "bagas melet",
    rarity: "rare",
    numberRange: [1, 399],
  },
  {
    image: "images/bm alomani.jpg",
    text: "BM ALOMANI",
    rarity: "uncommon",
    numberRange: [1, 99],
  },
  {
    image: "images/deki fuck.jpg",
    text: "deki fucking",
    rarity: "uncommon",
    numberRange: [1, 129],
  },
  {
    image: "images/deki selfie.jpg",
    text: "deki lagi nyelfi ges",
    rarity: "uncommon",
    numberRange: [1, 301],
  },
  {
    image: "images/deki chatgpt.jpg",
    text: "deki lagi mencari jawaban",
    rarity: "common",
    numberRange: [1, 50],
  },
  {
    image: "images/duh ada yang nyelip.jpg",
    text: "duh ada yang nyelip",
    rarity: "rare",
    numberRange: [1, 450],
  },
  {
    image: "images/dzaki cool.jpg",
    text: "dzaki cool",
    rarity: "uncommon",
    numberRange: [1, 139],
  },
  {
    image: "images/gatel euy.jpg",
    text: "gatel euyyy..",
    rarity: "rare",
    numberRange: [1, 157],
  },
  {
    image: "images/hafi ketawi.jpg",
    text: "hafi ketawi",
    rarity: "rare",
    numberRange: [1, 340],
  },
  {
    image: "images/hafi mengkece.jpg",
    text: "hafi mengkece",
    rarity: "common",
    numberRange: [1, 21],
  },
  {
    image: "images/hafi merenung.jpg",
    text: "hafi merenung",
    rarity: "uncommon",
    numberRange: [1, 123],
  },
  {
    image: "images/hilmi.jpg",
    text: "HILMI...",
    rarity: "uncommon",
    numberRange: [1, 461],
  },
  {
    image: "images/lip and deki.jpg",
    text: "lip and deki",
    rarity: "uncommon",
    numberRange: [1, 232],
  },
  {
    image: "images/marvin ape lu.jpg",
    text: "apelu liat-liat",
    rarity: "epic",
    numberRange: [1, 4289],
  },
  {
    image: "images/menghirup ke surga.jpg",
    text: "menghirup ke surga",
    rarity: "epic",
    numberRange: [1, 6790],
  },
  {
    image: "images/mira bobo.jpg",
    text: "mira bobo..",
    rarity: "rare",
    numberRange: [1, 569],
  },
  {
    image: "images/rafi chad.jpg",
    text: "RAFI CHAD",
    rarity: "legend",
    numberRange: [1, 200999],
  },
  {
    image: "images/rakha mmm.jpg",
    text: "rakha mmm",
    rarity: "uncommon",
    numberRange: [1, 211],
  },
  {
    image: "images/rasya hooo.jpg",
    text: "rasya hooo...",
    rarity: "legend",
    numberRange: [1, 120999],
  },
  {
    image: "images/rasya lier.jpg",
    text: "RASYA LAGI LIER",
    rarity: "rare",
    numberRange: [1, 679],
  },
  {
    image: "images/restu side_eye.jpg",
    text: "restu side eye..",
    rarity: "common",
    numberRange: [1, 35],
  },
  {
    image: "images/surya menjelaskan.jpg",
    text: "surya sedang menjelaskan",
    rarity: "common",
    numberRange: [1, 76],
  },
  {
    image: "images/view 2.jpg",
    text: "view dari rakha di deki selfie",
    rarity: "uncommon",
    numberRange: [1, 217],
  },
  {
    image: "images/virqi apa itu bang.jpg",
    text: "apa itu bang?",
    rarity: "common",
    numberRange: [1, 43],
  },
  {
    image: "images/virqi turu.jpg",
    text: "virqi sedang turu ges",
    rarity: "rare",
    numberRange: [1, 345],
  },
  {
    image: "images/yan mikir.jpg",
    text: "mikir dulu",
    rarity: "common",
    numberRange: [1, 88],
  },
  {
    image: "images/bagas-chad.jpg",
    text: "bagas chad",
    rarity: "legend",
    numberRange: [1, 199900],
  },
  {
    image: "images/bagas-virtual.jpg",
    text: "bagas jadi AI 2030",
    rarity: "epic",
    numberRange: [1, 70089],
  },
  {
    image: "images/berpikir-keras.jpg",
    text: "mikir apa fi?",
    rarity: "common",
    numberRange: [1, 67],
  },
  {
    image: "images/deki-fuckhd.jpg",
    text: "deki fuck & melet",
    rarity: "mythical",
    numberRange: [1, 1099000],
  },
  {
    image: "images/deki-nerd.jpg",
    text: "deki mau jadi pinter",
    rarity: "rare",
    numberRange: [1, 5610],
  },
  {
    image: "images/join-roblox.jpg",
    text: "join roblox kuy! gak disponsor",
    rarity: "epic",
    numberRange: [1, 23900],
  },
  {
    image: "images/alif-sen.jpg",
    text: "alif senyum 2",
    rarity: "rare",
    numberRange: [1, 346],
  },
  {
    image: "images/marvin-mangap.jpg",
    text: "marvin mangap",
    rarity: "uncommon",
    numberRange: [1, 481],
  },
  {
    image: "images/mira-megang.jpg",
    text: "mira megang alat",
    rarity: "rare",
    numberRange: [1, 1201],
  },
  {
    image: "images/mirip-guru.jpg",
    text: "mirip guru gw kayaknya",
    rarity: "epic",
    numberRange: [1, 23001],
  },
  {
    image: "images/plenger-group.jpg",
    text: "para plenger sedang berpose",
    rarity: "legend",
    numberRange: [1, 561000],
  },
  {
    image: "images/rasya-nyu.jpg",
    text: "ichi nya!",
    rarity: "uncommon",
    numberRange: [1, 258],
  },
  {
    image: "images/syafal.jpg",
    text: "rasya & naufal",
    rarity: "uncommon",
    numberRange: [1, 415],
  },
  {
    image: "images/syeima-merem.jpg",
    text: "syeima ngapain merem?",
    rarity: "epic",
    numberRange: [1, 21200],
  },
  {
    image: "images/tiga-senyuman.jpg",
    text: "tiga senyuman..",
    rarity: "rare",
    numberRange: [1, 794],
  },
  {
    image: "images/yan-turu.jpg",
    text: "yan turu",
    rarity: "rare",
    numberRange: [1, 473],
  },
  {
    image: "images/zaky-sigma.jpg",
    text: "zaki sigma",
    rarity: "epic",
    numberRange: [1, 11260],
  },
  {
    image: "images/agra-rock.jpg",
    text: "agra rock lenger",
    rarity: "epic",
    numberRange: [1, 32330],
  },
  {
    image: "images/alif-dance.jpg",
    text: "alif dancing..",
    rarity: "rare",
    numberRange: [1, 2451],
  },
  {
    image: "images/again-migra.jpg",
    text: "lagi-lagi mereka nih",
    rarity: "legend",
    numberRange: [1, 241100],
  },
  {
    image: "images/deki-melet.jpg",
    text: "deki melet",
    rarity: "rare",
    numberRange: [1, 1450],
  },
  {
    image: "images/marvin-bengong.jpg",
    text: "marvin bengong",
    rarity: "epic",
    numberRange: [1, 10299],
  },
  {
    image: "images/surya-sad.jpg",
    text: "surya 😭",
    rarity: "epic",
    numberRange: [1, 30199],
  },
  {
    image: "images/axel.jpg",
    text: "Hitam Putih",
    rarity: "mythical",
    numberRange: [1, 1450000],
  },
  {
    image: "images/naufal-side.jpg",
    text: "Naufal side eye",
    rarity: "epic",
    numberRange: [1, 58400],
  },
  {
    image: "images/yan-.jpg",
    text: "fathian..",
    rarity: "common",
    numberRange: [1, 29],
  },
  {
    image: "images/benq.jpg",
    text: "ben!",
    rarity: "rare",
    numberRange: [1, 6151],
  },
  {
    image: "images/gak-kenal.jpg",
    text: "hehehe 😭",
    rarity: "rare",
    numberRange: [1, 1892],
  },
  {
    image: "images/hilmi-takut.jpg",
    text: "hilmi takut. mama..",
    rarity: "epic",
    numberRange: [1, 50292],
  },
  {
    image: "images/gihun-sigma.jpg",
    text: "i'm feeling sigma",
    rarity: "secret",
    numberRange: [1, 190000000],
  },
  {
    image: "images/hacker.jpg",
    text: "damcuk pristel!",
    rarity: "prismatic",
    numberRange: [1, 30190000],
  },
  {
    image: "images/deki-walawe.jpg",
    text: "walaweh",
    rarity: "prismatic",
    numberRange: [1, 45000000],
  },
  {
    image: "images/sesosok-dev.jpg",
    text: "SANG DEV",
    rarity: "secret",
    numberRange: [1, 990000000],
  },
  {
    image: "images/naufal-byat.jpg",
    text: "naufal BYAtch!",
    rarity: "secret",
    numberRange: [1, 871000000],
  },
  {
    image: "images/rifa-byat.jpg",
    text: "rifa-BYActh!",
    rarity: "prismatic",
    numberRange: [1, 32100000],
  },
  {
    image: "images/agra-imut.jpg",
    text: "imutnyoo!",
    rarity: "mythical",
    numberRange: [1, 5010000],
  },
  {
    image: "images/mahluk-asing.jpg",
    text: "mahluk asing COEG!",
    rarity: "secret",
    numberRange: [1, 521000000],
  },
  {
    image: "images/bagas-sigma.jpg",
    text: "Bagas Sigma",
    rarity: "mythical",
    numberRange: [1, 6120000],
  },
  {
    image: "images/nafis-gepeng.jpg",
    text: "nafis Yeah!",
    rarity: "legend",
    numberRange: [1, 310100],
  },
  {
    image: "images/rasya-wink.jpg",
    text: "rasya Wink!",
    rarity: "legend",
    numberRange: [1, 409199],
  },
  {
    image: "images/wahh.jpg",
    text: "huwahh",
    rarity: "rare",
    numberRange: [1, 810],
  },
  {
    image: "images/alfon-present.jpg",
    text: "alfon Present!",
    rarity: "rare",
    numberRange: [1, 992],
  },
  {
    image: "images/gihun-hs.jpg",
    text: "gihun and 01 meme!",
    rarity: "mythical",
    numberRange: [1, 8300000],
  },
  {
    image: "images/reporter-ketawa.jpg",
    text: "bahasa inggris bukan bahasa asing lagi yah?",
    rarity: "legend",
    numberRange: [1, 700100],
  },
  {
    image: "images/surya-minkem.jpg",
    text: "sur Minkem!",
    rarity: "legend",
    numberRange: [1, 612100],
  },
  {
    image: "images/alif-songong.jpg",
    text: "lip songong",
    rarity: "epic",
    numberRange: [1, 31190],
  },
  {
    image: "images/dzaki-anomali.jpg",
    text: "BM ALOMANI REAL",
    rarity: "mythical",
    numberRange: [1, 1661880],
  },
  {
    image: "images/fathian-wink.jpg",
    text: "yan wink!",
    rarity: "legend",
    numberRange: [1, 301880],
  },
  {
    image: "images/menariklah.jpg",
    text: "menariklah",
    rarity: "legend",
    numberRange: [1, 455280],
  },
  {
    image: "images/nafis-hah.jpg",
    text: "HAH?!",
    rarity: "mythical",
    numberRange: [1, 8910000],
  },
  {
    image: "images/144p.png",
    text: "144p taken",
    rarity: "legend",
    numberRange: [1, 300900],
  },
  {
    image: "images/aduh.png",
    text: "aduhhh!",
    rarity: "mythical",
    numberRange: [1, 7000009],
  },
  {
    image: "images/agra_GUA.png",
    text: "'SAYA?' MEME",
    rarity: "secret",
    numberRange: [1, 200000000],
  },
  {
    image: "images/agra_kiwai.png",
    text: "agra kiwai",
    rarity: "legend",
    numberRange: [1, 451000],
  },
  {
    image: "images/akbar_dora.png",
    text: "akbar dora explor",
    rarity: "legend",
    numberRange: [1, 608770],
  },
  {
    image: "images/akbar_turu.png",
    text: "turu bar..?",
    rarity: "epic",
    numberRange: [1, 64100],
  },
  {
    image: "images/akbar_wlee.png",
    text: "akbar wlee",
    rarity: "prismatic",
    numberRange: [1, 21000000],
  },
  {
    image: "images/akbar_wlee.png",
    text: "akbar wlee",
    rarity: "prismatic",
    numberRange: [1, 21000000],
  },
  {
    image: "images/alien.png",
    text: "alien terlihat",
    rarity: "mythical",
    numberRange: [1, 5610000],
  },
  {
    image: "images/alya_hah.png",
    text: "alya HAH?",
    rarity: "epic",
    numberRange: [1, 61809],
  },
  {
    image: "images/anomalys.png",
    text: "anomali detected",
    rarity: "mythical",
    numberRange: [1, 9099970],
  },
  {
    image: "images/berbaring.png",
    text: "berbaring",
    rarity: "uncommon",
    numberRange: [1, 871],
  },
  {
    image: "images/call_melet.png",
    text: "callista melet",
    rarity: "epic",
    numberRange: [1, 63490],
  },
  {
    image: "images/deki_facelight.png",
    text: "deki faceLight",
    rarity: "epic",
    numberRange: [1, 73819],
  },
  {
    image: "images/duh_hilmi.png",
    text: "hilmi : duhh",
    rarity: "rare",
    numberRange: [1, 5300],
  },
  {
    image: "images/fazio_nah.png",
    text: "🙁🙁",
    rarity: "rare",
    numberRange: [1, 7261],
  },
  {
    image: "images/fazio_nose.png",
    text: "fazio nosee",
    rarity: "legend",
    numberRange: [1, 837100],
  },
  {
    image: "images/fazio_turu.png",
    text: "terdampar",
    rarity: "legend",
    numberRange: [1, 937100],
  },
  {
    image: "images/hehe_qori.png",
    text: "hehe..",
    rarity: "legend",
    numberRange: [1, 631090],
  },
  {
    image: "images/hilmi_ahh.png",
    text: "hilmi smileFace",
    rarity: "secret",
    numberRange: [1, 831777000],
  },
  {
    image: "images/hilmi_prabowo.png",
    text: "hilmi wowo",
    rarity: "epic",
    numberRange: [1, 86190],
  },
  {
    image: "images/hilmi_wlee.png",
    text: "hilmi wlee",
    rarity: "mythical",
    numberRange: [1, 8109000],
  },
  {
    image: "images/kiwai.png",
    text: "kiwai 720p",
    rarity: "legend",
    numberRange: [1, 688900],
  },
  {
    image: "images/nabhil_purple.png",
    text: "nabhil purple",
    rarity: "prismatic",
    numberRange: [1, 16709999],
  },
  {
    image: "images/nafis_senyum.png",
    text: "nafis senyum",
    rarity: "epic",
    numberRange: [1, 74120],
  },
  {
    image: "images/noo.png",
    text: "noo meme",
    rarity: "mythical",
    numberRange: [1, 8391009],
  },
  {
    image: "images/rakha_face.png",
    text: "rakha face",
    rarity: "epic",
    numberRange: [1, 31500],
  },
  {
    image: "images/rasya_hoo2.png",
    text: "rasya hoo2",
    rarity: "legend",
    numberRange: [1, 736166],
  },
  {
    image: "images/restu_boss.png",
    text: "restu ni bos",
    rarity: "epic",
    numberRange: [1, 61520],
  },
  {
    image: "images/rifa_melet2.png",
    text: "rifa melet2",
    rarity: "legend",
    numberRange: [1, 817200],
  },
  {
    image: "images/riza_turu.png",
    text: "riza turu",
    rarity: "legend",
    numberRange: [1, 721500],
  },
  {
    image: "images/rizky_face.png",
    text: "rizki face",
    rarity: "epic",
    numberRange: [1, 33500],
  },
  {
    image: "images/yo_nafis.png",
    text: "yoo disini nafis",
    rarity: "epic",
    numberRange: [1, 78180],
  },

  {
    image: "images/lock-in.jpg",
    text: "LOCK IN!",
    rarity: "edits",
    numberRange: [1, 92888777],
  },
  {
    image: "images/aku-jowo.jpg",
    text: "AKU JOWO",
    rarity: "edits",
    numberRange: [1, 93828888],
  },
  {
    image: "images/otewe.jpg",
    text: "OTEWE",
    rarity: "edits",
    numberRange: [1, 76811890],
  },
  {
    image: "images/buangsat.jpg",
    text: "BUANGSAT",
    rarity: "edits",
    numberRange: [1, 53700000],
  },
  {
    image: "images/gak-tahan.jpg",
    text: "gak tahan",
    rarity: "legend",
    numberRange: [1, 857390],
  },
  {
    image: "images/trainer.jpg",
    text: "trainer UMA",
    rarity: "legend",
    numberRange: [1, 612009],
  },
  {
    image: "images/lapar-bos.jpg",
    text: "oguri LAPAR BOS",
    rarity: "legend",
    numberRange: [1, 531001],
  },
  {
    image: "images/terang-banget.jpg",
    text: "terang banget",
    rarity: "legend",
    numberRange: [1, 842500],
  },
  {
    image: "images/saitama.jpg",
    text: "saitama pun nahan",
    rarity: "mythical",
    numberRange: [1, 3217770],
  },
  {
    image: "images/kitasan-satono.jpg",
    text: "kitasan&satono",
    rarity: "epic",
    numberRange: [1, 61729],
  },
  {
    image: "images/my-honest.jpg",
    text: "my honest.NUKE",
    rarity: "prismatic",
    numberRange: [1, 64529999],
  },
  {
    image: "images/ngotak-dong.jpg",
    text: "ngotak dong😂",
    rarity: "edits",
    numberRange: [1, 87300000],
  },
  {
    image: "images/kritik-anime.jpg",
    text: "kritikan",
    rarity: "epic",
    numberRange: [1, 32880],
  },
];

// LocalStorage keys
const LS_KEY_INVENTORY = "inventory";
const LS_KEY_OLD = "collection";
let rarityEffectTimeout = null; // ID timeout yang bisa dibatalkan

/*********************************
 * ======= STATE & HELPERS =======
 *********************************/
let rollCount = 0;
let luckBonus = 1; // 2x setiap 10 roll
let rolling = false; // lock tombol saat animasi
let isRarityAnimationPlaying = false;
let sinceRare = 0; // pity counter Rare+
let sinceEpic = 0; // pity counter Epic+
let luckSource = "none"; // 'cengkrink' | 'potion' | 'none'
let fastRollActive = false;
let isSpecialAnimation = false;
// Pastikan variabel global ada
// Efek aktif: luck & fast disimpan dalam array
window.activeEffects = {
  luck: [], // contoh: [{ mult: 3, expire: 123456789 }]
  fast: [], // contoh: [{ mult: 2, expire: 123456789 }]
};
setInterval(updateEffectStatusUI, 1000);

// Elemen penting
const el = (id) => document.getElementById(id);

// Gradient helper jika cuma punya string rarity di storage

function gradOf(key) {
  switch (key) {
    case "prismatic":
      return "var(--g-prismatic)";
    case "secret":
      return "var(--g-secret)";
    case "edits":
      return "var(--g-edits)";
    case "uncommon":
      return "var(--g-uncommon)";
    case "rare":
      return "var(--g-rare)";
    case "epic":
      return "var(--g-epic)";
    case "legend":
    case "legendary":
      return "var(--g-legend)";
    case "mythical":
      return "var(--g-mythical)";
    default:
      return "var(--g-common)";
  }
}

function rarityTextColor(key) {
  switch (key) {
    case "prismatic":
      return "#ffffff";
    case "secret":
      return "#000000";
    case "edits":
      return "#fff700"; // kuning cerah kontras dengan hitam frame
    case "uncommon":
      return "#2ad980";
    case "rare":
      return "#6fb6ff";
    case "epic":
      return "#d08cff";
    case "legend":
      return "#ffcf6f";
    case "mythical":
      return "#ff1a1a";
    default:
      return "#ffffff";
  }
}

function getRandomItemByRarity(rarityKey) {
  const itemsByRarity = ITEMS.filter((item) => item.rarity === rarityKey);
  if (itemsByRarity.length === 0) {
    return { text: "???", rarity: rarityKey };
  }
  return itemsByRarity[Math.floor(Math.random() * itemsByRarity.length)];
}

function counterKey(name) {
  return `counter_${(name || "").trim()}`;
}

function getItemCount(name) {
  // default 0 agar xN = 1 saat pertama kali muncul (kita clamp di render)
  return parseInt(localStorage.getItem(counterKey(name)) || "0", 10);
}

function incrementItemCount(name) {
  const k = counterKey(name);
  const cur = parseInt(localStorage.getItem(k) || "0", 10);
  localStorage.setItem(k, cur + 1);
}

function getSellValue(rarityKey) {
  switch (rarityKey) {
    case "edits":
      return 20000;
    case "secret":
      return 25000;
    case "prismatic":
      return 15000; // harga jual tinggi
    case "mythical":
      return 5000;
    case "legend":
    case "legendary":
      return 2000;
    case "epic":
      return 500;
    case "rare":
      return 100;
    case "uncommon":
      return 50;
    default:
      return 20;
  }
}

function rarityObj(key) {
  return RARITIES.find((r) => r.key === key) || RARITIES[0];
}

function getNextItemNumber(item) {
  const max = item.numberRange ? item.numberRange[1] : 100;
  return `1 dari ${max}`;
}

function isLuckPotionActive() {
  if (!Array.isArray(window.activeEffects.luck)) return false;

  const now = Date.now();
  // Hapus yang sudah expired
  window.activeEffects.luck = window.activeEffects.luck.filter(
    (e) => e.expire > now,
  );

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
    potions = JSON.parse(localStorage.getItem("potions")) || {};
  } catch {
    potions = {};
  }

  const key = `${type}_${mult}`;
  if (!potions[key]) potions[key] = 0;
  potions[key] += amount;

  localStorage.setItem("potions", JSON.stringify(potions));

  // auto-refresh kalau inventory terbuka di tab potions
  if (
    document.getElementById("inventoryOverlay")?.classList.contains("show") &&
    document.getElementById("invTabPotions") &&
    !document.getElementById("invTabPotions").classList.contains("hidden")
  ) {
    renderInvPotions();
  }
}

/******************************************
 * ======= LOBBY → GAME TRANSITION =======
 ******************************************/
// ============================================
// OTHER GAMES OVERLAY
// ============================================
(function () {
  const OG_GAMES = [
    {
      title: "Reflex Hands",
      desc: "Uji refleksmu! Klik tombol yang tepat secepat mungkin dan raih skor tertinggi.",
      tag: "ARCADE • REFLEX",
      img: "ui/og-reflex-games.png",
      url: "https://rakhafr.github.io/Reflex-Game/",
    },
    {
      title: "Geotrade",
      desc: "Buat perusahaan mu dan tingkatkan jaringan antar kota, jangan sampai pasokan habis!",
      tag: "COMING SOON",
      img: "ui/og-geoTrade.png",
      url: "#",
      comingSoon: true,
    },
  ];

  let ogCurrent = 0;
  const overlay = document.getElementById("otherGamesOverlay");
  const ogBg = document.getElementById("ogBg");
  const ogTrack = document.getElementById("ogTrack");
  const ogDots = document.getElementById("ogDots");
  const ogTitle = document.getElementById("ogInfoTitle");
  const ogDesc = document.getElementById("ogInfoDesc");
  const ogTag = document.getElementById("ogInfoTag");
  const ogVisit = document.getElementById("ogVisitBtn");
  const ogPrev = document.getElementById("ogPrevBtn");
  const ogNext = document.getElementById("ogNextBtn");

  if (!overlay) return;

  // Build cards
  OG_GAMES.forEach((g, i) => {
    const card = document.createElement("div");
    card.className =
      "og-card" +
      (i === 0 ? " active-card" : "") +
      (g.comingSoon ? " og-coming-soon" : "");
    card.dataset.idx = i;
    const csOverlay = g.comingSoon
      ? `
            <div class="og-cs-overlay">
              <div class="og-cs-badge">
                <span class="og-cs-icon">🔒</span>
                <span class="og-cs-text">COMING SOON</span>
              </div>
            </div>`
      : "";
    card.innerHTML = `
            <div class="og-card-img-wrap">
              <img src="${g.img}" alt="${g.title}" onerror="this.style.background='#1a1a2e';this.style.display='block'"/>
              ${csOverlay}
            </div>`;
    card.addEventListener("click", () => goToSlide(i));
    ogTrack.appendChild(card);

    const dot = document.createElement("div");
    dot.className = "og-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    ogDots.appendChild(dot);
  });

  function getCardWidth() {
    const c = ogTrack.querySelector(".og-card");
    return c ? c.offsetWidth + 20 : 400;
  }

  function goToSlide(idx) {
    ogCurrent = Math.max(0, Math.min(OG_GAMES.length - 1, idx));
    const g = OG_GAMES[ogCurrent];

    const trackWrap = document.querySelector(".og-track-wrap");
    const wrapW = trackWrap ? trackWrap.offsetWidth : 0;
    const cw = getCardWidth();
    const offset = ogCurrent * cw - wrapW / 2 + cw / 2 - 12;
    ogTrack.style.transform = `translateX(${-offset}px)`;

    ogTrack.querySelectorAll(".og-card").forEach((c, i) => {
      c.classList.toggle("active-card", i === ogCurrent);
    });
    ogDots.querySelectorAll(".og-dot").forEach((d, i) => {
      d.classList.toggle("active", i === ogCurrent);
    });

    if (ogTitle) ogTitle.textContent = g.title;
    if (ogDesc) ogDesc.textContent = g.desc;
    if (ogTag) ogTag.textContent = g.tag;

    if (ogVisit) {
      ogVisit.style.display = g.comingSoon ? "none" : "";
      if (!g.comingSoon)
        ogVisit.onclick = () => {
          if (g.url !== "#") window.open(g.url, "_blank");
        };
    }

    if (ogBg) ogBg.style.backgroundImage = `url('${g.img}')`;
    if (ogPrev) ogPrev.disabled = ogCurrent === 0;
    if (ogNext) ogNext.disabled = ogCurrent === OG_GAMES.length - 1;
  }

  if (ogPrev) ogPrev.addEventListener("click", () => goToSlide(ogCurrent - 1));
  if (ogNext) ogNext.addEventListener("click", () => goToSlide(ogCurrent + 1));

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "ArrowLeft") goToSlide(ogCurrent - 1);
    if (e.key === "ArrowRight") goToSlide(ogCurrent + 1);
    if (e.key === "Escape") closeOtherGames();
  });

  // Touch swipe
  let touchStartX = 0;
  overlay.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.touches[0].clientX;
    },
    { passive: true },
  );
  overlay.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50)
      dx < 0 ? goToSlide(ogCurrent + 1) : goToSlide(ogCurrent - 1);
  });

  document
    .getElementById("ogCloseBtn")
    ?.addEventListener("click", () => closeOtherGames());

  window.openOtherGames = function () {
    overlay.classList.add("active");
    goToSlide(0);
  };
  window.closeOtherGames = function () {
    overlay.classList.remove("active");
  };
})();

function startGame() {
  showLoading(5500, () => {
    el("lobby")?.classList.add("hidden");
    el("game")?.classList.remove("hidden");
    migrateOldKey();
    loadCoins();
    loadAutoRollUnlock();
    updateAutoRollUI();

    // ✅ Terapkan settings yang tersimpan
    prfApplyAllSettings();

    // ✅ Restore potion timer yang tersimpan
    loadActiveEffects();

    document.getElementById("topSidebar").style.display = "block";
    updateGameplayProfileUI();

    const img = el("rngImage");
    if (img) img.src = "";

    const text = el("rngText");
    if (text) text.textContent = "MULAI PLENGER ROLL, KLIK TOMBOL DI BAWAH";

    const badge = el("rngBadge");
    if (badge) badge.style.display = "none";

    const frame = el("rngFrame");
    if (frame) frame.style.background = "var(--g-common)";

    // ✅ Cek quest/achievement indicator
    updateQuestIndicator();
  });
}

/************************************
 * ======= RNG & ROLLING LOGIC =======
 ************************************/

el("rollBtn")?.addEventListener("click", () => {
  if (!rolling) {
    stopRarityEffect(); // ⬅️ Hilangkan hanya bg (bukan star)
    rollRNG();
  }
});

const luckBadge = el("luckBadge");
if (luckBadge) luckBadge.classList.add("hidden");

// Bikin objek item lengkap (pastikan ada rarity object)
function toItemObject(base) {
  const r =
    typeof base.rarity === "string" ? rarityObj(base.rarity) : base.rarity;
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
  const pool = ITEMS.filter(
    (i) => (typeof i.rarity === "string" ? i.rarity : i.rarity?.key) === rKey,
  );
  if (pool.length === 0) return toItemObject(ITEMS[0]);
  const b = pool[Math.floor(Math.random() * pool.length)];
  return toItemObject(b);
}

// Weighted pick final + pity + luckBonus
function weightedPick() {
  // Base weight per item: (rarity weight) ^ 0.9 → sedikit flatten biar nggak Common terus
  const baseW = ITEMS.map((it) => {
    const r = typeof it.rarity === "string" ? rarityObj(it.rarity) : it.rarity;
    return Math.pow(rarityObj(r.key).weight, 0.9);
  });

  const luckMul = ITEMS.map((it) => {
    const rk = typeof it.rarity === "string" ? it.rarity : it.rarity.key;

    if (isLuckPotionActive()) {
      const mult = getLuckMultiplier();
      if (LUCK_EFFECTS[mult] && LUCK_EFFECTS[mult][rk] !== undefined) {
        return LUCK_EFFECTS[mult][rk];
      }
    }

    // Luck bonus lama (2x tiap 10 roll)
    if (
      luckBonus === 2 &&
      (rk === "rare" || rk === "epic" || rk === "legend")
    ) {
      return 2;
    } else if (luckBonus === 2 && (rk === "common" || rk === "uncommon")) {
      return 0.8;
    }

    return 1;
  });

  // Pity: setelah 15 tanpa Rare+, gandakan Rare/Epic/Legend. Setelah 40 tanpa Epic+, x3 untuk Epic/Legend
  const pityMul = ITEMS.map((it) => {
    const rk = typeof it.rarity === "string" ? it.rarity : it.rarity?.key;
    let m = 1;
    if (rk === "rare" || rk === "epic" || rk === "legend") {
      if (sinceRare >= 15) m *= 2;
      if ((rk === "epic" || rk === "legend") && sinceEpic >= 40) m *= 3;
    }
    return m;
  });

  // Gabungkan
  const weights = baseW.map((w, i) => w * luckMul[i] * pityMul[i]);
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total,
    acc = 0;
  for (let i = 0; i < ITEMS.length; i++) {
    acc += weights[i];
    if (r <= acc) return toItemObject(ITEMS[i]);
  }
  return toItemObject(ITEMS[ITEMS.length - 1]);
}

// Set tampilan hasil (gambar, nama, frame, badge)
function setDisplay(item) {
  if (!item) return;
  const img = el("rngImage");
  const text = el("rngText");
  const badge = el("rngBadge");
  const frame = el("rngFrame");

  if (img) img.src = item.image || "";
  if (text) text.textContent = item.text || "";
  if (badge) {
    badge.textContent = item.rarity.name;
    badge.style.background = item.rarity.grad;
    badge.style.display = "inline-block";
  }

  // Tampilkan nomor di div terpisah
  const numberEl = el("rngNumber");
  if (numberEl) {
    numberEl.textContent = item.number || "";
  }

  if (frame) {
    frame.style.background = item.rarity.grad;
    frame.classList.remove("rainbow-frame", "edits-frame");
    if (item.rarity.key === "prismatic") {
      frame.style.background = "transparent";
      frame.classList.add("rainbow-frame");
    }
    if (item.rarity.key === "edits") {
      frame.style.background = "transparent";
      frame.classList.add("edits-frame");
    }
  }
}

function toggleUI(hidden) {
  const uiElements = document.querySelectorAll(
    ".coin-bar, .hud, #rngWrap, #topSidebar",
  );
  uiElements.forEach((el) => {
    if (hidden) el.classList.add("ui-hidden");
    else el.classList.remove("ui-hidden");
  });
}

function unlockAllAudio() {
  [resultSfx, document.getElementById("gachaMusic")].forEach((audio) => {
    if (audio) {
      audio
        .play()
        .then(() => {
          audio.pause();
          audio.currentTime = 0;
        })
        .catch((e) => {});
    }
  });
}

function spawnAmbientFlash(rarity) {
  // Skip jika partikel dimatikan
  if (document.body.classList.contains("prf-no-particle")) return;

  // Remove existing flashes
  document
    .querySelectorAll(".ambient-flash, .vignette-flash")
    .forEach((el) => el.remove());

  const flash = document.createElement("div");
  flash.className = `ambient-flash ${rarity}`;
  document.body.appendChild(flash);
  flash.addEventListener("animationend", () => flash.remove());

  const vignette = document.createElement("div");
  vignette.className = `vignette-flash ${rarity}`;
  document.body.appendChild(vignette);
  vignette.addEventListener("animationend", () => vignette.remove());
}

function playRarityAnimation(rarity) {
  const wrapper = document.getElementById("rarityAnimation");
  const bg = wrapper?.querySelector(".rarity-bg");
  const star = wrapper?.querySelector(".rarity-star");
  const body = document.body;

  if (!wrapper || !bg || !star) return;

  hideBannerToggle();
  const banner = document.getElementById("eventBanner");
  if (banner) banner.classList.add("hidden");

  wrapper.classList.remove("hidden");
  star.style.display = "block";

  // 🚨 gunakan flag global yang sama
  isSpecialAnimation = true;

  bg.classList.remove("epic", "legend", "mythical");

  const rarityKey = rarity === "legendary" ? "legend" : rarity;

  switch (rarity) {
    case "epic":
      bg.classList.add("epic");
      star.style.filter = "hue-rotate(270deg)";
      break;
    case "legend":
    case "legendary":
      bg.classList.add("legend");
      star.style.filter = "hue-rotate(35deg)";
      break;
    case "mythical":
      bg.classList.add("mythical");
      break;
  }

  // 🌟 Spawn ambient flash immediately
  spawnAmbientFlash(rarityKey);

  toggleUI(true);

  const music = document.getElementById("gachaMusic");
  if (music) {
    music.currentTime = 0;
    music.volume = 0.6;
    music.play().catch((e) => console.warn("Music error:", e));
  }

  try {
    if (resultSfx) {
      resultSfx.currentTime = 0;
      resultSfx.play();
    }
  } catch (e) {
    console.warn("Gagal play resultSfx", e);
  }

  const MOVE_OUT_MS = 6230;
  const MOVE_IN_MS = 6230;

  star.style.animation = `moveOut ${MOVE_OUT_MS / 1000}s ease-in forwards`;

  setTimeout(() => {
    star.style.animation = "";
    void star.offsetWidth;
    star.style.animation = `moveIn ${MOVE_IN_MS / 1000}s ease-in forwards`;
    spawnAmbientFlash(rarityKey);
  }, MOVE_OUT_MS);

  if (rarityEffectTimeout) clearTimeout(rarityEffectTimeout);
  rarityEffectTimeout = setTimeout(() => {
    star.style.display = "none";
    star.style.animation = "";
    star.style.transform = "";

    toggleUI(false);
    const isInsane = ["legend", "legendary", "mythical"].includes(rarity);
    body.classList.add(isInsane ? "shake-insane" : "shake-body");

    setTimeout(() => {
      body.classList.remove("shake-insane", "shake-body");
      body.classList.add("shake-fade");
      isSpecialAnimation = false;
      if (banner) banner.classList.remove("hidden");
      showBannerToggle();
    }, 1000);

    setTimeout(() => {
      body.classList.remove("shake-fade");
      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    }, 3000);
  }, MOVE_OUT_MS + MOVE_IN_MS);
}

function showFullscreenAura(type) {
  const el = document.querySelector(".fullscreen-" + type);
  if (!el) return;
  el.classList.remove("hidden");
  // ❌ Jangan auto-hide di sini
}

// Fungsi dipanggil saat roll baru mulai
function hideFullscreenAuras() {
  document.querySelector(".fullscreen-prismatic").classList.add("hidden");
  document.querySelector(".fullscreen-secret").classList.add("hidden");
  const editsEl = document.querySelector(".fullscreen-edits");
  if (editsEl) editsEl.classList.add("hidden");
  stopSecretSparkle();
}

function playVideoRarity(rarity) {
  const isMobile = window.innerWidth <= 768;
  const videoId = rarity + "Video" + (isMobile ? "Mobile" : "");
  const video = document.getElementById(videoId);
  const sfx = document.getElementById(rarity + "Sfx");
  const body = document.body;
  hideBannerToggle();

  let auraEl = null;
  if (rarity === "prismatic") {
    auraEl = document.querySelector(".fullscreen-prismatic");
  }
  if (rarity === "secret") {
    auraEl = document.querySelector(".fullscreen-secret");
  }
  if (rarity === "edits") {
    auraEl = document.querySelector(".fullscreen-edits");
  }

  if (!video) return;

  // 🔥 SEMBUNYIKAN BANNER SAAT VIDEO MULAI
  const banner = document.getElementById("eventBanner");
  if (banner) banner.classList.add("hidden");

  toggleUI(true);
  video.classList.remove("hidden");
  video.currentTime = 0;
  video.play().catch((e) => console.warn("Video play error:", e));

  if (sfx) {
    sfx.currentTime = 0;
    sfx.play().catch((e) => console.warn("SFX play error:", e));
  }

  // ⏱ EdiTz: stop audio setelah 11 detik, stop video setelah 8 detik
  let editsVideoTimer = null;
  let editsAudioTimer = null;
  if (rarity === "edits") {
    editsAudioTimer = setTimeout(() => {
      if (sfx) {
        sfx.pause();
        sfx.currentTime = 0;
      }
    }, 11700);
    editsVideoTimer = setTimeout(() => {
      video.pause();
      video.dispatchEvent(new Event("ended"));
    }, 8800);
  }

  // 🚨 Set flag animasi spesial
  isSpecialAnimation = true;

  video.onended = () => {
    if (editsVideoTimer) {
      clearTimeout(editsVideoTimer);
      editsVideoTimer = null;
    }
    video.classList.add("hidden");
    toggleUI(false);

    if (auraEl) {
      auraEl.classList.remove("hidden");
    }

    // Efek shake — prismatic/secret/edits lebih gila
    const isInsaneRarity = ["prismatic", "secret", "edits"].includes(rarity);
    body.classList.add(isInsaneRarity ? "shake-insane" : "shake-body");
    setTimeout(() => {
      body.classList.remove("shake-insane", "shake-body");
      body.classList.add("shake-fade");

      // ✨ Sparkle untuk secret
      if (rarity === "secret") {
        const frame = document.getElementById("rngFrame");
        if (frame) {
          frame.classList.add("secret-frame");
          frame.style.position = "relative";
          stopSecretSparkle();
          secretSparkleInterval = setInterval(() => {
            spawnSecretSparkle(frame);
          }, 300);
        }
      }
    }, 1000);

    setTimeout(() => {
      body.classList.remove("shake-fade");
      // 🔥 TAMPILKAN BANNER LAGI SETELAH VIDEO SELESAI
      if (banner) banner.classList.remove("hidden");
      showBannerToggle();
    }, 3000);

    // 🚨 Reset flag → auto roll bisa lanjut lagi
    isSpecialAnimation = false;
  };
}

let activeSecretFrame = null;
function pickRarityForShuffle() {
  const rarities = [
    { key: "common", name: "Common" },
    { key: "uncommon", name: "Uncommon" },
    { key: "rare", name: "Rare" },
    { key: "epic", name: "Epic" },
    { key: "legend", name: "Legend" },
    { key: "mythical", name: "Mythical" },
    { key: "prismatic", name: "Prismatic" },
    { key: "secret", name: "Secret" },
    { key: "edits", name: "EdiTz" },
  ];

  return rarities[Math.floor(Math.random() * rarities.length)];
}

function stopRarityEffect() {
  const wrapper = document.getElementById("rarityAnimation");
  const bg = wrapper?.querySelector(".rarity-bg");
  const star = wrapper?.querySelector(".rarity-star");

  if (!wrapper || !bg || !star) return;

  // Hentikan timeout star jika masih aktif
  if (rarityEffectTimeout) {
    clearTimeout(rarityEffectTimeout);
    rarityEffectTimeout = null;
  }

  // ⛔ HANYA reset bg di sini
  bg.classList.remove("epic", "legend", "mythical");
  wrapper.classList.add("hidden");
}

function setRollingText(rarityKey, itemName, rarityName) {
  const rollingEl = document.getElementById("rollingText");
  rollingEl.textContent = `${itemName} (${rarityName})`;

  // reset style dulu
  rollingEl.style.background = "";
  rollingEl.style.webkitBackgroundClip = "";
  rollingEl.style.webkitTextFillColor = "";
  rollingEl.style.color = "";

  if (rarityKey === "prismatic") {
    // Pelangi
    rollingEl.style.background =
      "linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)";
    rollingEl.style.webkitBackgroundClip = "text";
    rollingEl.style.webkitTextFillColor = "transparent";
  } else if (rarityKey === "secret") {
    // Hitam-putih seperti frame secret
    rollingEl.style.background = "linear-gradient(90deg, black, white, black)";
    rollingEl.style.webkitBackgroundClip = "text";
    rollingEl.style.webkitTextFillColor = "transparent";
    rollingEl.style.fontWeight = "bold";
  } else if (rarityKey === "edits") {
    // Gold shimmer
    rollingEl.style.background =
      "linear-gradient(90deg, #ffd700, #fff700, #ff9900, #ffd700)";
    rollingEl.style.backgroundSize = "200% auto";
    rollingEl.style.webkitBackgroundClip = "text";
    rollingEl.style.webkitTextFillColor = "transparent";
    rollingEl.style.fontWeight = "900";
  } else {
    // warna normal rarity
    rollingEl.style.color = rarityTextColor(rarityKey);
  }

  // retrigger animasi rolling-text
  rollingEl.classList.remove("rolling-text");
  void rollingEl.offsetWidth;
  rollingEl.classList.add("rolling-text");
}

// Rolling 5 detik dengan SFX
function rollRNG() {
  const frame = document.getElementById("rngFrame");

  if (frame) {
    frame.classList.remove("secret-frame");
  }
  stopSecretSparkle();

  hideFullscreenAuras();
  stopRarityEffect();
  if (rolling) return;
  rolling = true;
  const _rollBtn = document.getElementById("rollBtn");
  if (_rollBtn) _rollBtn.disabled = true;

  rollCount++;
  const isTenth = rollCount % 10 === 0 && rollCount > 0;

  if (el("rollCounter")) {
    const displayCount = isTenth ? 10 : rollCount % 10;
    el("rollCounter").textContent = displayCount;
  }
  const badge = document.getElementById("luckBadge");
  const rollBtn = document.getElementById("rollBtn");

  if (rollCount % 10 === 0 && rollCount > 0) {
    rollBtn.classList.add("rainbow-border");
    badge?.classList.add("gold-badge");
  } else {
    rollBtn.classList.remove("rainbow-border");
    badge?.classList.remove("gold-badge");
  }

  if (activeSecretFrame) {
    activeSecretFrame.classList.remove("secret-frame");
    activeSecretFrame = null;
  }

  if (secretSparkleInterval) {
    clearInterval(secretSparkleInterval);
    secretSparkleInterval = null;
    document.querySelectorAll(".secret-sparkle").forEach((el) => el.remove());
  }
  // sebelum animasi rarity mulai

  document.querySelector(".fullscreen-prismatic").classList.add("hidden");
  document.querySelector(".fullscreen-secret").classList.add("hidden");
  document.querySelector(".fullscreen-edits")?.classList.add("hidden");

  // ==========================
  // Hitung multiplier luck (potion + bonus roll ke-10)
  // gunakan potion aktif kalau ada, fallback ke luckBonus (legacy)
  let baseMult = getLuckMultiplier();
  let finalLuckMult = baseMult;

  if (isTenth) {
    finalLuckMult *= 2;
  }

  currentLuckMultiplier = finalLuckMult;
  updateLuckBadge(finalLuckMult, isTenth);

  // Tentukan hasil akhir
  const selected = weightedPick(finalLuckMult); // pastikan weightedPick bisa terima multiplier

  // Sembunyikan UI awal
  el("rngFrame").style.opacity = 0;
  el("rngText").style.opacity = 0;
  el("rngBadge").style.display = "none";
  el("rngNumber").style.display = "none";
  el("rngImage").src = "";

  const rk = selected?.rarity?.key || null;
  // Roll counter — semua rarity
  updateQuestProgress("roll20", 1);
  updateQuestProgress("roll100", 1);
  updateQuestProgress("roll500", 1);
  updateQuestProgress("roll200", 1);

  if (rk) {
    if (rk === "rare") {
      updateQuestProgress("rare3", 1);
      updateAchievementProgress("rare10", 1);
      updateAchievementProgress("frame_rare", 1);
    } else if (rk === "epic") {
      updateQuestProgress("epic1", 1);
      updateQuestProgress("epic20", 1); // ← FIX: quest epic20 butuh ini
      updateAchievementProgress("epic20", 1); // achievement epic20
      updateAchievementProgress("frame_epic", 1);
    } else if (rk === "legend") {
      updateQuestProgress("getLegend", 1);
      updateQuestProgress("legend3", 1);
      updateQuestProgress("getLegend10", 1);
      updateAchievementProgress("legend5", 1);
    } else if (rk === "mythical") {
      updateQuestProgress("mythical1", 1);
      updateAchievementProgress("mythical3", 1);
      updateAchievementProgress("banner_crimson", 1);
    } else if (rk === "prismatic") {
      updateAchievementProgress("frame_rainbow", 1);
    } else if (rk === "secret") {
      updateAchievementProgress("banner_midnight", 1);
    } else if (rk === "edits") {
      updateQuestProgress("edits1", 1);
      updateAchievementProgress("edits1", 1);
    }
  }

  // Siapkan elemen animasi teks
  const rollingEl = el("rollingText");
  rollingEl.style.display = "block";
  rollingEl.textContent = "";
  rollingEl.style.color = "#fff";

  // SFX roll
  const rollSfx = el("rollSfx");
  try {
    if (rollSfx) {
      rollSfx.currentTime = 0;
      rollSfx.loop = true;
      rollSfx.play();
    }
  } catch (e) {}

  const mult = getFastRollMultiplier();
  let effect =
    FAST_ROLL_EFFECTS[mult] ||
    FAST_ROLL_EFFECTS[Math.max(...Object.keys(FAST_ROLL_EFFECTS).map(Number))];
  let shuffleSpeed = Math.max(effect.shuffleSpeed, 100); // batas minimal 30ms
  let rollDuration = effect.rollDuration;

  // ======================================================

  // Animasi teks item + rarity
  const shuf = setInterval(() => {
    const rr = pickRarityForShuffle();
    const randomItem = getRandomItemByRarity(rr.key);
    setRollingText(rr.key, randomItem.text, rr.name);

    setRollingText(rr.key, randomItem.text, rr.name);

    rollingEl.classList.remove("rolling-text");
    void rollingEl.offsetWidth;
    rollingEl.classList.add("rolling-text");
  }, shuffleSpeed);

  setTimeout(() => {
    clearInterval(shuf);
    rollingEl.style.display = "none";

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
        inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
      } catch (e) {}
      const found = inv.find((i) => i.text === item.text);
      return found ? found.number : null;
    }
    const savedNumber = getSavedItemNumber(selected);
    selected.number = savedNumber || getNextItemNumber(selected);

    // Tampilkan hasil akhir
    setDisplay(selected);
    el("rngFrame").style.opacity = 1;
    el("rngText").style.opacity = 1;
    el("rngBadge").style.display = "inline-block";
    el("rngNumber").style.display = "block";

    updateStats(selected.rarity.key);

    if (selected.rarity.key === "prismatic") {
      playVideoRarity("prismatic");
    } else if (selected.rarity.key === "secret") {
      playVideoRarity("secret");
    } else if (selected.rarity.key === "edits") {
      playVideoRarity("edits");
    } else {
      // rarity biasa → efek bintang lama
      if (["epic", "legend", "mythical"].includes(selected.rarity.key)) {
        playRarityAnimation(selected.rarity.key);
      }
    }

    // SFX hasil
    try {
      if (resultSfx) {
        resultSfx.currentTime = 0;
        resultSfx.play();
      }
    } catch (e) {}

    // Efek rarity
    const rk = selected.rarity.key;
    if (["epic", "legend", "legendary", "mythical"].includes(rk)) {
      playRarityAnimation(rk);
    }

    // Simpan ke inventory
    saveInventory(selected);

    // Update pity
    if (["rare", "epic", "legend"].includes(rk)) {
      sinceRare = 0;
    } else {
      sinceRare++;
    }
    if (["epic", "legend"].includes(rk)) {
      sinceEpic = 0;
    } else {
      sinceEpic++;
    }

    // Refresh inventory jika dibuka
    if (el("inventoryOverlay")?.classList.contains("show")) {
      renderInventory();
    }

    rolling = false;
    const _rollBtnEnd = document.getElementById("rollBtn");
    if (_rollBtnEnd) _rollBtnEnd.disabled = false;
  }, rollDuration);
}

function updateLuckBadge(mult, isTenth) {
  const badge = document.getElementById("luckBadge");
  if (!badge) return;

  // Reset styling
  badge.classList.remove("gold-badge");
  badge.style.background = "";
  badge.style.webkitBackgroundClip = "";
  badge.style.webkitTextFillColor = "";
  badge.style.color = "#2ad980";

  // === CASE 1: tanpa potion & bukan roll ke-10 → sembunyikan ===
  if ((!mult || mult <= 1) && !isTenth) {
    badge.textContent = "";
    badge.classList.add("hidden");
    return;
  }

  // === CASE 2: roll ke-10 TANPA potion → tampil x2 Luck dengan emas ===
  if ((!mult || mult <= 1) && isTenth) {
    badge.textContent = "x2 Luck";
    badge.classList.add("gold-badge");
    badge.classList.remove("hidden");
    return;
  }

  // === CASE 3: ada potion / multiplier aktif → teks sesuai multiplier ===
  badge.textContent = `x${mult} Luck`;
  badge.classList.remove("hidden");

  if (isTenth) {
    // === CASE 4: ada potion + roll ke-10 → gandakan dan tampil emas ===
    badge.textContent = `x${mult} Luck`;
    badge.classList.add("gold-badge");
  } else {
    // === Styling warna sesuai besar multiplier potion ===
    if (mult >= 50) {
      badge.style.background = "var(--g-mythical)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    } else if (mult >= 25) {
      badge.style.background = "var(--g-legend)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    } else if (mult >= 10) {
      badge.style.background = "var(--g-epic)";
      badge.style.webkitBackgroundClip = "text";
      badge.style.webkitTextFillColor = "transparent";
    }
  }
}

/*****************************************
 * ======= INVENTORY (LOCAL STORAGE) =====
 *****************************************/

function isItemLocked(name) {
  return localStorage.getItem(`locked_${name}`) === "true";
}

function toggleItemLockByTime(time) {
  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}
  const idx = inv.findIndex((i) => i.time === time);
  if (idx >= 0) {
    inv[idx].locked = !inv[idx].locked;
    localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(inv));
  }
}

function migrateOldKey() {
  try {
    const old = JSON.parse(localStorage.getItem(LS_KEY_OLD) || "[]");
    if (old.length) {
      const cur = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
      const merged = [...cur];
      old.forEach((o) => {
        const exists = merged.find((x) => x.text === o.text);
        if (!exists) merged.push(o);
      });
      localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(merged));
      localStorage.removeItem(LS_KEY_OLD);
    }
  } catch (e) {}
}

function normalizeStoredNumbersToOne() {
  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}
  if (!Array.isArray(inv) || !inv.length) return;

  inv = inv.map((it) => {
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
    locked: false,
  };

  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}

  // Cek apakah item sudah ada berdasarkan nama
  const existing = inv.find((i) => i.text === item.text);

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

// ✅ REPAIR: sync semua image path di localStorage ke definisi ITEMS terbaru
// Jalan otomatis saat load — item lama tidak perlu dijual dulu
function repairInventoryImages() {
  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {
    return;
  }

  let changed = false;

  inv.forEach((it) => {
    const master = ITEMS.find((def) => def.text === it.text);
    if (master) {
      // update image kalau berbeda
      if (it.image !== master.image) {
        it.image = master.image;
        changed = true;
      }
      // update rarity juga kalau berubah
      const masterRarityKey =
        typeof master.rarity === "string" ? master.rarity : master.rarity?.key;
      const itRarityKey =
        typeof it.rarity === "string" ? it.rarity : it.rarity?.key;
      if (masterRarityKey && masterRarityKey !== itRarityKey) {
        it.rarity = master.rarity;
        changed = true;
      }
      // hapus flag orphan kalau item sudah balik ke pool
      if (it._orphan) {
        delete it._orphan;
        changed = true;
      }
    } else {
      // item tidak ada di ITEMS pool (mungkin dihapus developer)
      // tandai sebagai orphan supaya masih bisa dijual, tapi image diganti placeholder
      if (!it._orphan) {
        it._orphan = true;
        it.image = "ui/icon-game2.jpg"; // fallback ke icon game
        changed = true;
      }
    }
  });

  if (changed) {
    localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(inv));
    console.log("✅ repairInventoryImages: inventory di-sync ke ITEMS terbaru");
  }
}

function dedupeInventory() {
  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}

  const seen = new Map();
  for (const item of inv) {
    if (!seen.has(item.text)) {
      seen.set(item.text, item);
    }
  }

  localStorage.setItem(
    LS_KEY_INVENTORY,
    JSON.stringify(Array.from(seen.values())),
  );
}

// Buka inventory → set filter “Semua”, kosongkan search (jika ada), render langsung
function openInventory() {
  const overlay = el("inventoryOverlay");
  if (!overlay) return;
  overlay.classList.add("show");

  // Kosongkan search jika ada (opsional)
  const si = el("searchInput");
  if (si) si.value = "";

  // Set chip "Semua" aktif + render
  setActiveFilter("all");
  renderInventory();
}
function closeInventory() {
  el("inventoryOverlay")?.classList.remove("show");
  _invClearDetail();
}

/* ── Detail Panel ── */
let _invDetailTime = null;

function _invClearDetail() {
  _invDetailTime = null;
  const box = el("invDetailImgBox");
  if (box) box.innerHTML = `<span class="inv-detail-placeholder">?</span>`;
  const nameEl = el("invDetailName");
  if (nameEl) nameEl.textContent = "—";
  const rarEl = el("invDetailRarity");
  if (rarEl) {
    rarEl.textContent = "—";
    rarEl.style.background = "";
  }
  const descEl = el("invDetailDesc");
  if (descEl) descEl.textContent = "Pilih item dari grid";
  const lockBtn = el("invDetailLockBtn");
  if (lockBtn) {
    lockBtn.disabled = true;
    lockBtn.textContent = "🔓 Lock";
  }
  const sellBtn2 = el("invDetailSellBtn");
  if (sellBtn2) sellBtn2.disabled = true;
}

function _invUpdateDetail(cardEl) {
  const time = Number(cardEl.dataset.time);
  _invDetailTime = time;

  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}
  const it = inv.find((x) => x.time === time);
  if (!it) return;

  const r =
    typeof it.rarity === "object"
      ? it.rarity
      : {
          key: it.rarity,
          name: (it.rarity || "common").replace(/^./, (c) => c.toUpperCase()),
          grad: gradOf(it.rarity || "common"),
        };

  const box = el("invDetailImgBox");
  if (box) {
    box.style.background = r.grad || "#1a1a1a";
    box.innerHTML = `<img src="${it.image}" alt="${it.text}" class="inv-detail-img-real">`;
  }

  const count = getItemCount(it.text) || 1;
  const nameEl = el("invDetailName");
  if (nameEl) nameEl.textContent = it.text;
  const rarEl = el("invDetailRarity");
  if (rarEl) {
    rarEl.textContent = r.name;
    rarEl.style.background = r.grad;
  }
  const descEl = el("invDetailDesc");
  if (descEl)
    descEl.textContent = `x${count} dimiliki${it.number ? " · #" + it.number : ""}`;

  const lockBtn = el("invDetailLockBtn");
  if (lockBtn) {
    lockBtn.disabled = false;
    lockBtn.textContent = it.locked ? "🔓 Unlock" : "🔒 Lock";
    lockBtn.classList.toggle("is-locked", !!it.locked);
  }

  const sellBtn2 = el("invDetailSellBtn");
  if (sellBtn2) sellBtn2.disabled = !!it.locked;
}

function invDetailToggleLock() {
  if (_invDetailTime == null) return;
  toggleItemLockByTime(_invDetailTime);
  renderInventory();
  // re-find card dan update detail
  const card = document.querySelector(`.card[data-time="${_invDetailTime}"]`);
  if (card) _invUpdateDetail(card);
}

function invDetailSell() {
  if (_invDetailTime == null) return;
  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}
  const it = inv.find((x) => x.time === _invDetailTime && !x.locked);
  if (!it) {
    showErrorPopup("Item terkunci atau tidak ditemukan!");
    return;
  }

  const rKey = typeof it.rarity === "string" ? it.rarity : it.rarity.key;
  const count = getItemCount(it.text) || 1;
  let gained = 0;

  let updated;
  if (count > 1) {
    gained = getSellValue(rKey);
    localStorage.setItem(counterKey(it.text), count - 1);
    updated = inv;
  } else {
    gained = getSellValue(rKey);
    localStorage.removeItem(counterKey(it.text));
    updated = inv.filter((x) => x.time !== _invDetailTime);
  }

  localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(updated));
  addCoins(gained);
  updateCoinUI();
  showCoinPopup(gained);
  _invClearDetail();
  renderInventory();
  updateQuestProgress("sell5", 1);
  localStorage.setItem(
    "totalSold",
    parseInt(localStorage.getItem("totalSold") || "0") + 1,
  );
  updateQuestProgress("sell20", 1);
  updateAchievements("sell", 1);
}

// Helper: set chip aktif
function setActiveFilter(key) {
  const chips = document.querySelectorAll("#chips .chip");
  chips.forEach((c) => {
    const k = c.getAttribute("data-r");
    c.classList.toggle("active", k === key);
  });
}

document.addEventListener("click", (e) => {
  // Klik tombol kunci pada kartu
  if (e.target.classList.contains("item-lock-toggle")) {
    const time = Number(e.target.dataset.time);
    toggleItemLockByTime(time);
    renderInventory();
    return; // ⚠ Penting! Supaya gak lanjut ke klik kartu
  }

  // ... existing sell logic

  if (e.target.id === "lockedBtn") {
    const btn = e.target;
    const locked = document.body.classList.toggle("show-locked-only");

    btn.classList.toggle("active", locked);
    btn.textContent = locked ? "🔓 Tampilkan Semua" : "🔒 Locked Tab";

    renderInventory();
  }

  // Toggle kunci ketika klik kanan pada card
  if (e.target.closest(".card") && e.button === 2) {
    e.preventDefault();
    const card = e.target.closest(".card");
    const name = card.dataset.name;
    toggleItemLock(name);
    renderInventory();
  }
});

// Render list sesuai filter aktif + search (jika kosong tetap tampil)
function renderInventory() {
  const grid = el("gridWrap");
  if (!grid) return;

  // Baca filter aktif (default 'all')
  const active = document.querySelector(
    "#chips .chip.active, .chips .chip.active",
  );
  const filterKey = active ? active.getAttribute("data-r") : "all";

  // Baca search (boleh tidak ada / kosong)
  const si = el("searchInput");
  const query = (si ? si.value : "").trim().toLowerCase();

  let inv = [];
  try {
    inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
  } catch (e) {}

  // Filter
  const showLockedOnly = document.body.classList.contains("show-locked-only");
  const list = inv.filter((it) => {
    const rKey =
      typeof it.rarity === "string"
        ? it.rarity
        : it.rarity && it.rarity.key
          ? it.rarity.key
          : "common";
    const passFilter = filterKey === "all" ? true : rKey === filterKey;
    const passSearch =
      query === "" ? true : (it.text || "").toLowerCase().includes(query);
    const passLock = showLockedOnly ? it.locked : true;
    return passFilter && passSearch && passLock;
  });

  // Render
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = `<div class="empty">Tidak ada item.</div>`;
    return;
  }

  list.forEach((it) => {
    // ✅ selalu sync image dari definisi ITEMS terbaru berdasarkan nama item
    // supaya kalau path gambar berubah, inventory tidak 404
    const masterItem = ITEMS.find((def) => def.text === it.text);
    if (masterItem && masterItem.image) {
      it.image = masterItem.image;
    }

    const r =
      typeof it.rarity === "object"
        ? it.rarity
        : {
            key: it.rarity,
            name: (it.rarity || "common").replace(/^./, (c) => c.toUpperCase()),
            grad: gradOf(it.rarity || "common"),
          };

    const card = document.createElement("div");
    card.className = "card";
    card.dataset.name = it.text;
    card.dataset.time = it.time; // penting: untuk toggle kunci

    if (it.locked) {
      card.classList.add("locked");
      card.setAttribute("title", "Terkunci — Tidak bisa dijual");
    }

    let count = getItemCount(it.text);
    if (!count || count < 1) count = 1;

    // Cek apakah prismatic
    const isPrismatic = r.key === "prismatic";
    const isSecret = r.key === "secret";

    card.innerHTML = `
  <div class="frame ${isPrismatic ? "rainbow-frame" : ""} ${
    isSecret ? "secret-frame" : ""
  }"
       style="${
         isPrismatic || isSecret ? "" : `background:${r.grad};`
       } position:relative;">
    <img src="${it.image}" alt="${it.text}" loading="lazy">
    <div class="item-count">x${count}</div>

    <!-- 🔒 lock -->
    <button class="item-lock-toggle" data-time="${
      it.time
    }" title="Kunci / Buka">
      ${it.locked ? "🔒" : "🔓"}
    </button>

    <!-- 👁️ inspect -->
    <button class="item-inspect-toggle" data-img="${
      it.image
    }" title="Lihat gambar penuh">
      👁️
    </button>
  </div>
  <div class="name">${it.text}</div>
  <div class="rarity-badge" style="background:${r.grad}">${r.name}</div>
  <div class="number-text">${it.number || ""}</div>
`;

    grid.appendChild(card);
    const inspectBtn = card.querySelector(".item-inspect-toggle");
    if (inspectBtn) {
      inspectBtn.addEventListener("click", (e) => {
        const imgSrc = e.currentTarget.getAttribute("data-img");
        openInspect(imgSrc);
      });
    }
  });
}

function updateFilterFromDropdown(selectEl) {
  // Hapus .active dari semua "chip"
  const chips = document.querySelectorAll("#chips .chip, .chips .chip");
  chips.forEach((chip) => chip.classList.remove("active"));

  // Kasih .active ke option terpilih
  const selectedOption = selectEl.options[selectEl.selectedIndex];
  selectedOption.classList.add("active");

  // Render ulang inventory
  renderInventory();
}

function ensureInspectOverlay() {
  if (document.getElementById("inspectOverlay")) return;
  // (Kalau mau, bisa buat overlay via JS. Tapi karena kita sudah taruh HTML-nya, ini opsional.)
}

function openInspect(src) {
  ensureInspectOverlay();
  const o = document.getElementById("inspectOverlay");
  const img = document.getElementById("inspectImage");
  if (!o || !img) return;
  img.src = src || "";
  o.style.display = "grid";
}

function closeInspect() {
  const o = document.getElementById("inspectOverlay");
  if (o) o.style.display = "none";
}

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "inspectClose") closeInspect();
  // klik area gelap utk tutup
  if (e.target && e.target.id === "inspectOverlay") closeInspect();
});

/***********************************
 * ======= EVENT LISTENERS UI =======
 ***********************************/
// Tutup modal saat klik overlay atau tombol X
document.addEventListener("click", (e) => {
  // Klik kanan untuk toggle kunci
  document.addEventListener("contextmenu", (e) => {
    const card = e.target.closest(".card");
    if (card && el("inventoryOverlay")?.classList.contains("show")) {
      e.preventDefault();
      const time = Number(card.dataset.time);
      toggleItemLockByTime(time);
      renderInventory();
    }
  });

  if (e.target.id === "inventoryOverlay") closeInventory();
  if (e.target.id === "closeInv") closeInventory();

  // Klik chip → set aktif & render langsung
  const chip = e.target.closest(".chip");
  if (chip) {
    const key = chip.getAttribute("data-r") || "all";
    setActiveFilter(key);
    renderInventory();
  }
  // Klik kartu untuk memilih/deselect + update detail panel
  const cardEl = e.target.closest(".card");
  if (cardEl && el("inventoryOverlay")?.classList.contains("show")) {
    // Skip jika klik tombol lock/inspect di dalam card
    if (
      e.target.classList.contains("item-lock-toggle") ||
      e.target.classList.contains("item-inspect-toggle")
    )
      return;

    cardEl.classList.toggle("selected");
    _invUpdateDetail(cardEl);
  }

  // Tombol Menjual (jual yang dipilih)
  if (e.target.id === "sellBtn") {
    let inv = [];
    try {
      inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
    } catch (err) {}

    const selectedCards = Array.from(
      document.querySelectorAll(".card.selected"),
    );
    if (!selectedCards.length) {
      showErrorPopup("Pilih item terlebih dahulu!");
      return;
    }

    let gained = 0;
    const selectedTimes = selectedCards.map((c) => Number(c.dataset.time));

    // Buat inventory baru dengan menyisakan item yang tidak dijual
    const updated = inv.filter((it) => {
      if (selectedTimes.includes(it.time) && !it.locked) {
        const rKey = typeof it.rarity === "string" ? it.rarity : it.rarity.key;
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
    selectedCards.forEach((card) => {
      const name = card.dataset.name;
      const stillExists = updated.some((it) => it.text === name);
      if (!stillExists) {
        localStorage.removeItem(counterKey(name));
      }
    });

    localStorage.setItem(LS_KEY_INVENTORY, JSON.stringify(updated));

    // ❌ Semua item yang dipilih terkunci — gained=0, batalkan
    if (gained === 0) {
      try {
        const s = document.getElementById("errorSfx");
        s.currentTime = 0;
        s.play();
      } catch (e) {}
      showErrorPopup("❌ Item yang dipilih terkunci, tidak bisa dijual!");
      return;
    }

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
    updateQuestProgress("sell5", jumlahTerjual);
    localStorage.setItem(
      "totalSold",
      parseInt(localStorage.getItem("totalSold") || "0") + jumlahTerjual,
    );
    updateQuestProgress("sell20", jumlahTerjual);
    updateAchievements("sell", jumlahTerjual);
  }

  // Tombol Menjual Semua
  if (e.target.id === "sellAllBtn") {
    let inv = [];
    try {
      inv = JSON.parse(localStorage.getItem(LS_KEY_INVENTORY) || "[]");
    } catch (err) {}

    // ❌ Tidak ada item sama sekali
    if (!inv.length) {
      showErrorPopup("Tidak ada item untuk dijual!");
      return;
    }

    const unlocked = inv.filter((it) => !it.locked);

    // ❌ Semua item terkunci
    if (!unlocked.length) {
      showErrorPopup("Semua item terkunci!");
      return;
    }

    let gained = 0;
    const selectedTimes = unlocked.map((it) => Number(it.time));

    const updated = inv.filter((it) => {
      if (selectedTimes.includes(it.time)) {
        const rKey = typeof it.rarity === "string" ? it.rarity : it.rarity.key;
        const count = getItemCount(it.text);

        gained += getSellValue(rKey) * count;
        localStorage.removeItem(counterKey(it.text));
        return false; // hapus item
      }
      return true;
    });

    unlocked.forEach((it) => {
      const stillExists = updated.some((x) => x.text === it.text);
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
    updateQuestProgress("sell5", jumlahTerjual);
    localStorage.setItem(
      "totalSold",
      parseInt(localStorage.getItem("totalSold") || "0") + jumlahTerjual,
    );
    updateQuestProgress("sell20", jumlahTerjual);
    updateAchievements("sell", jumlahTerjual);
  }
});

// ESC untuk tutup modal
document.addEventListener("keydown", (e) => {
  // Jangan aktifkan hotkey saat user sedang mengetik di input/textarea
  const tag = document.activeElement?.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

  // Jangan aktifkan saat ada overlay modal lain yang terbuka (kecuali Escape)
  const anyOverlayOpen = () =>
    [
      "inventoryOverlay",
      "storeOverlay",
      "questOverlay",
      "profileOverlay",
      "updateLogOverlay",
      "potionInventoryOverlay",
    ].some((id) => document.getElementById(id)?.classList.contains("show"));

  switch (e.key) {
    // ── Escape: tutup semua overlay ──
    case "Escape":
      closeInventory();
      closeStore?.();
      closeQuestOverlay?.();
      closeProfile?.();
      closeUpdateLog?.();
      closePotionInventory?.();
      break;

    // ── Hotkey buka/tutup (toggle) ──
    case "i":
    case "I":
      if (!anyOverlayOpen()) openInventory();
      else closeInventory();
      break;

    case "s":
    case "S":
      if (!anyOverlayOpen()) openStore?.();
      else closeStore?.();
      break;

    case "q":
    case "Q":
      if (!anyOverlayOpen()) openQuestOverlay?.();
      else closeQuestOverlay?.();
      break;

    case "p":
    case "P":
      if (!anyOverlayOpen()) openProfile?.();
      else closeProfile?.();
      break;

    case "u":
    case "U":
      if (!anyOverlayOpen()) openUpdateLog?.();
      else closeUpdateLog?.();
      break;

    // ── Roll: Space atau R ──
    case " ":
    case "r":
    case "R":
      if (!anyOverlayOpen()) {
        e.preventDefault();
        // Guard: jangan roll kalau animasi masih berjalan
        if (rolling || isSpecialAnimation) break;
        const rollBtn = document.getElementById("rollBtn");
        if (rollBtn && !rollBtn.disabled) rollBtn.click();
      }
      break;
  }
});

// Jika kamu mau: saat mengetik di search, render realtime (opsional)
const si = el("searchInput");
if (si) si.addEventListener("input", renderInventory);

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

/* ===== UNIFIED TOAST SYSTEM ===== */
function showToast(message, type = "info", duration = 2200) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const icons = { success: "✔", error: "✖", coin: "🪙", warn: "⚠", info: "ℹ" };

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
          <span class="t-corner-tr"></span>
          <span class="t-corner-bl"></span>
          <span class="toast-icon">${icons[type] || icons.info}</span>
          <span class="toast-msg">${message}</span>
        `;
  container.appendChild(toast);

  // Play sfx
  try {
    if (type === "error" || type === "warn") {
      const sfx = document.getElementById("errorSfx");
      if (sfx) {
        sfx.currentTime = 0;
        sfx.play();
      }
    } else if (type === "coin") {
      const sfx = document.getElementById("coinSfx");
      if (sfx) {
        sfx.currentTime = 0;
        sfx.play();
      }
    }
  } catch (e) {}

  // Auto remove
  const remove = () => {
    toast.classList.add("dying");
    toast.addEventListener("animationend", () => toast.remove(), {
      once: true,
    });
  };
  setTimeout(remove, duration);
}

// Keep old names as aliases for backward compat
function showPopup(message, isError = false) {
  showToast(message, isError ? "error" : "success");
}
function showCoinPopup(amount) {
  showToast(`+${amount} Coins`, "coin");
}
function showErrorPopup(message) {
  showToast(message, "error");
}

// showCoinPopup, showErrorPopup, showPopup → handled by unified showToast above

function loadAutoRollUnlock() {
  autoRollUnlocked = localStorage.getItem("autoRollUnlocked") === "true";
}

function saveAutoRollUnlock() {
  localStorage.setItem("autoRollUnlocked", autoRollUnlocked);
}

function loadCoins() {
  const c = parseInt(localStorage.getItem("coins"), 10);
  coins = isNaN(c) ? 10 : c;
  updateCoinUI();
}

function saveCoins() {
  localStorage.setItem("coins", coins);
}

function updateCoinUI() {
  const currentCoins = parseInt(localStorage.getItem("coins") || "0");
  el("coinAmount").textContent = currentCoins;
}

/*************************************
 * ======= AUTO ROLL TOGGLE =======
 *************************************/
function toggleAutoRoll() {
  const price = 5000;

  if (!autoRoll) {
    if (!autoRollUnlocked) {
      // Re-read coins dari localStorage untuk hindari stale value
      coins = parseInt(localStorage.getItem("coins") || "0");
      if (coins >= price) {
        coins -= price;
        saveCoins();
        updateCoinUI();
        autoRollUnlocked = true;
        saveAutoRollUnlock();
        // Simpan timestamp beli — untuk guard refund
        localStorage.setItem("autoRollBoughtAt", Date.now().toString());
      } else {
        try {
          const s = document.getElementById("errorSfx");
          s.currentTime = 0;
          s.play();
        } catch (e) {}
        showErrorPopup("💸 Coin tidak cukup! Butuh 5.000 coins");
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
    if (!rolling && !isSpecialAnimation) {
      rollRNG();
    }
  }, 4000);
}

function stopAutoRolling() {
  if (autoRollInterval) clearInterval(autoRollInterval);
  autoRollInterval = null;
}
function updateAutoRollUI() {
  const pill = document.querySelector(".pill-left");
  if (!pill) return;

  const refundClaimed =
    localStorage.getItem("autoRollRefundClaimed") === "true";
  const boughtAt = parseInt(localStorage.getItem("autoRollBoughtAt") || "0");
  // Cutoff: timestamp push fix (setelah ini = beli normal, tidak eligible refund)
  // 2025-01-01 00:00:00 UTC → ganti ke tanggal push fix kamu
  const FIX_PUSH_TS_START = new Date("2026-05-25T00:00:00Z").getTime();
  const FIX_PUSH_TS_END = new Date("2026-05-29T23:59:59Z").getTime();

  const isRefundEligible =
    autoRollUnlocked &&
    !refundClaimed &&
    boughtAt >= FIX_PUSH_TS_START &&
    boughtAt <= FIX_PUSH_TS_END;
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
              ${isRefundEligible ? `<br><button onclick="refundAutoRoll(event)" class="autoroll-refund-btn">🔄 Refund 5.000 Coins (bug kemarin)</button>` : ""}
            `;
    } else {
      pill.innerHTML = `
              Gulir Otomatis: <span style="color:#ffcc00;">MATI</span><br>
              <span class="sub" style="color:orange;">Bayar 5000 Coins (sekali saja)</span>
            `;
    }
  }
}

function refundAutoRoll(e) {
  e.stopPropagation(); // jangan trigger toggleAutoRoll

  const refundClaimed =
    localStorage.getItem("autoRollRefundClaimed") === "true";
  if (refundClaimed) {
    showErrorPopup("❌ Refund sudah pernah diklaim!");
    return;
  }

  // Kembalikan 5000 coins
  coins = parseInt(localStorage.getItem("coins") || "0");
  coins += 5000;
  saveCoins();
  updateCoinUI();

  // Tandai sudah diklaim — hanya bisa sekali
  localStorage.setItem("autoRollRefundClaimed", "true");

  try {
    const s = document.getElementById("coinSfx");
    s.currentTime = 0;
    s.play();
  } catch (e2) {}
  showPopup("✅ Refund berhasil! +5.000 Coins dikembalikan");

  updateAutoRollUI();
}

/*************************************
 * ======= Potion Logical =======
 *************************************/

let activeEffects = {};
let effectTimers = {};

function buyPotion(type, idx = 0, qty = 1) {
  const potion = POTIONS[type][idx];
  if (!potion) return;

  const totalCost = potion.price * qty;

  // 💰 Cek dulu sebelum potong coin
  if (coins < totalCost) {
    showErrorPopup("Koin tidak cukup!");
    return;
  }

  // Baru kurangi
  coins -= totalCost;
  saveCoins();
  updateCoinUI();

  // 🎵 SFX coin
  try {
    const coinSfx = document.getElementById("coinSfx");
    coinSfx.currentTime = 0;
    coinSfx.play();
  } catch (e) {}

  // ✅ Popup pembelian sukses
  showPopup(`Berhasil membeli ${qty > 1 ? qty + "x " : ""}${potion.name}!`);

  // Simpan ke inventory potion
  addPotion(type, potion.mult, qty);

  if (
    document
      .getElementById("potionInventoryOverlay")
      ?.classList.contains("show")
  ) {
    renderPotionInventory();
  }
}

// ↑ showPopup already defined above as alias to showToast

function equipPotion(type, idx) {
  // 🎵 SFX cengkrink
  try {
    const cengkrinkSfx = document.getElementById("resultSfx");
    cengkrinkSfx.currentTime = 0;
    cengkrinkSfx.play();
  } catch (e) {}

  // ambil potion yang benar
  const potion = POTIONS[type] && POTIONS[type][idx];
  if (!potion) return;

  // cek inventory
  let potions = {};
  try {
    potions = JSON.parse(localStorage.getItem("potions") || "{}");
  } catch {
    potions = {};
  }
  const key = `${type}_${potion.mult}`;
  if (!potions[key] || potions[key] <= 0) return;

  // kurangi jumlah
  potions[key]--;
  if (potions[key] <= 0) delete potions[key];
  localStorage.setItem("potions", JSON.stringify(potions));

  // safety: pastikan duration numeric (ms)
  const duration = Number(potion.duration) || 0;

  // aktifkan efek (pakai type asli: 'luck' atau 'fast')
  activatePotionEffect(type, duration, potion.mult);

  // UI refresh
  renderPotionInventory();

  // 🚀 langsung update badge dengan multiplier terbaru
  const mult = getLuckMultiplier(); // multiplier sekarang setelah potion diaktifkan
  updateLuckBadge(mult, false); // false karena bukan roll ke-10

  // quest progress
  updateQuestProgress("usePotion1", 1);
  updateQuestProgress("usePotion5", 1);
}

const potionInv = document.getElementById("potionInventoryOverlay");
if (potionInv && potionInv.classList.contains("show")) {
  renderPotionInventory(); // auto-refresh kalau UI sedang terbuka
}

function openStore() {
  renderPotionStore();
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

function switchInvMainTab(tab) {
  const tabs = ["items", "potions"];
  tabs.forEach((t) => {
    document
      .getElementById("invTab" + t.charAt(0).toUpperCase() + t.slice(1))
      ?.classList.toggle("hidden", t !== tab);
    document.getElementById("itab-" + t)?.classList.toggle("active", t === tab);
  });
  if (tab === "potions") renderInvPotions();
}

function renderInvPotions() {
  const potions = JSON.parse(localStorage.getItem("potions") || "{}");
  const luckGrid = document.getElementById("invPotionLuck");
  const fastGrid = document.getElementById("invPotionFast");
  const emptyMsg = document.getElementById("invPotionEmpty");
  if (!luckGrid || !fastGrid) return;

  luckGrid.innerHTML = "";
  fastGrid.innerHTML = "";

  let totalCount = 0;

  ["luck", "fast"].forEach((type) => {
    const grid = type === "luck" ? luckGrid : fastGrid;
    POTIONS[type].forEach((p, i) => {
      const key = `${type}_${p.mult}`;
      const count = potions[key] || 0;
      if (count <= 0) return;
      totalCount++;

      const card = document.createElement("div");
      card.className = "inv-pot-card";
      card.innerHTML = `
              <div class="inv-pot-img-wrap" style="background:${p.color || "#1a1a2e"}">
                <img src="${p.icon}" alt="${p.name}" loading="lazy" class="inv-pot-img">
                <span class="inv-pot-count">x${count}</span>
              </div>
              <div class="inv-pot-name">${p.name}</div>
              <div class="inv-pot-effect">${type === "luck" ? "🍀 Luck" : "⚡ Fast-Roll"} ×${p.mult}</div>
              <button class="inv-pot-equip-btn" onclick="equipPotion('${type}', ${i})">EQUIP</button>
            `;
      grid.appendChild(card);
    });
  });

  if (emptyMsg) emptyMsg.style.display = totalCount === 0 ? "flex" : "none";
}

function renderPotionInventory() {
  renderInvPotions();
}

function openPotionInventory() {
  // Buka inventory utama langsung di tab potions
  document.getElementById("inventoryOverlay").classList.add("show");
  switchInvMainTab("potions");
}

function closePotionInventory() {
  document.getElementById("potionInventoryOverlay")?.classList.remove("show");
}
let effectUIRunning = false;

function getLuckMultiplier() {
  const now = Date.now();
  // buang efek kadaluarsa
  window.activeEffects.luck = window.activeEffects.luck.filter(
    (e) => e.expire > now,
  );

  if (window.activeEffects.luck.length === 0) return 1;

  // jumlahkan semua multiplier aktif
  return window.activeEffects.luck.reduce((total, e) => total + e.mult, 0);
}

function getFastRollMultiplier() {
  const now = Date.now();
  if (!Array.isArray(window.activeEffects.fast)) return 1;

  // hapus yang expired
  window.activeEffects.fast = window.activeEffects.fast.filter(
    (e) => e.expire > now,
  );

  if (window.activeEffects.fast.length === 0) return 1;

  return window.activeEffects.fast.reduce((total, e) => total + e.mult, 0);
}

// 📟 Update UI efek aktif
function updateEffectStatusUI() {
  const elStatus = document.getElementById("activeEffectsStatus");
  if (!elStatus) return;

  let html = "";
  const now = Date.now();
  let changed = false;

  // Luck
  if (Array.isArray(window.activeEffects.luck)) {
    const before = window.activeEffects.luck.length;
    window.activeEffects.luck = window.activeEffects.luck.filter(
      (e) => e.expire > now,
    );
    if (window.activeEffects.luck.length !== before) changed = true;
    window.activeEffects.luck.forEach((e) => {
      const min = Math.floor((e.expire - now) / 60000);
      const sec = Math.floor(((e.expire - now) % 60000) / 1000)
        .toString()
        .padStart(2, "0");
      const color = e.mult >= 7 && e.mult <= 10 ? "violet" : "lime";
      html += `<div style="color:${color}">Luck x${e.mult}: ${min}:${sec}</div>`;
    });
  }

  // Fast Roll
  if (Array.isArray(window.activeEffects.fast)) {
    const before = window.activeEffects.fast.length;
    window.activeEffects.fast = window.activeEffects.fast.filter(
      (e) => e.expire > now,
    );
    if (window.activeEffects.fast.length !== before) changed = true;
    window.activeEffects.fast.forEach((e) => {
      const min = Math.floor((e.expire - now) / 60000);
      const sec = Math.floor(((e.expire - now) % 60000) / 1000)
        .toString()
        .padStart(2, "0");
      const color = e.mult >= 7 && e.mult <= 10 ? "violet" : "cyan";
      html += `<div style="color:${color}">Fast x${e.mult}: ${min}:${sec}</div>`;
    });
  }

  elStatus.innerHTML = html;

  // Auto-save saat ada efek yang expired
  if (changed) saveActiveEffects();
}

function activatePotionEffect(type, duration, mult = 2) {
  const now = Date.now();

  if (!window.activeEffects) window.activeEffects = {};
  if (!Array.isArray(window.activeEffects[type])) {
    window.activeEffects[type] = [];
  }

  window.activeEffects[type].push({
    mult: mult,
    expire: now + duration,
  });

  // Simpan ke localStorage agar persists saat keluar
  saveActiveEffects();

  if (type === "luck") {
    updateLuckBadge(getLuckMultiplier());
  }
  if (type === "fast") {
    getFastRollMultiplier();
  }

  updateEffectStatusUI();
}

function saveActiveEffects() {
  const now = Date.now();
  // Hanya simpan yang belum expired
  const toSave = {
    luck: (window.activeEffects.luck || []).filter((e) => e.expire > now),
    fast: (window.activeEffects.fast || []).filter((e) => e.expire > now),
  };
  localStorage.setItem("activeEffects", JSON.stringify(toSave));
}

function loadActiveEffects() {
  try {
    const saved = JSON.parse(localStorage.getItem("activeEffects") || "{}");
    const now = Date.now();
    window.activeEffects = {
      luck: (saved.luck || []).filter((e) => e.expire > now),
      fast: (saved.fast || []).filter((e) => e.expire > now),
    };
  } catch (e) {
    window.activeEffects = { luck: [], fast: [] };
  }
  updateEffectStatusUI();
  updateLuckBadge(getLuckMultiplier());
}

/* ── STORE STATE ── */
let _storeTab = "luck";
let _storeSelIdx = 0;
let _storeBuyQty = 1;

/* ── Render left detail panel ── */
function _storeRenderLeft(type, idx) {
  _storeSelIdx = idx;
  const p = POTIONS[type][idx];
  if (!p) return;
  const wrap = document.getElementById("storeDetailWrap");
  if (!wrap) return;
  const isFast = type === "fast";

  const totalPrice = p.price * _storeBuyQty;

  let owned = 0;
  try {
    const inv = JSON.parse(localStorage.getItem("potions") || "{}");
    owned = inv[`${type}_${p.mult}`] || 0;
  } catch (e) {}

  wrap.innerHTML = `
          <div class="store-detail-top-row">
            <div class="store-detail-img-wrap">
              <img src="${p.icon}" alt="${p.name}" class="store-detail-img" loading="lazy" style="background:${p.color || "#1a1a1a"}">
            </div>
            <div class="store-detail-info">
              ${owned > 0 ? `<div class="store-detail-qty">x${owned}</div>` : ""}
              <div class="store-detail-name">${p.name}</div>
              <div class="store-detail-dur">Selama 5 menit</div>
              <div class="store-detail-price">$${totalPrice.toLocaleString()} coins</div>
            </div>
          </div>
          <div class="store-detail-actions">
            <button class="store-btn-buy${isFast ? " fast-mode" : ""}" onclick="buyPotion('${type}',${idx},_storeBuyQty); _storeBuyQty=1; _storeRenderLeft('${type}',${idx});">BUY</button>
            <button class="store-btn-minus" onclick="_storeBuyLess('${type}',${idx})">−</button>
            <span class="store-buy-qty">${_storeBuyQty}</span>
            <button class="store-btn-plus"  onclick="_storeBuyMore('${type}',${idx})">+</button>
          </div>
        `;
}

function _storeBuyMore(type, idx) {
  _storeBuyQty++;
  _storeRenderLeft(type, idx);
}
function _storeBuyLess(type, idx) {
  if (_storeBuyQty > 1) _storeBuyQty--;
  _storeRenderLeft(type, idx);
}

/* ── Render LIMITED banner (luck only) ── */
function _storeRenderBanner(type) {
  const el = document.getElementById("storeBanner");
  if (!el) return;
  if (type !== "luck") {
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");

  // Banner selalu x25 (banner exclusive)
  const bannerPotion = POTIONS.luck.find((p) => p.mult === 25);
  const fidx = POTIONS.luck.findIndex((p) => p.mult === 25);
  if (!bannerPotion || fidx < 0) return;

  let owned = 0;
  try {
    const inv = JSON.parse(localStorage.getItem("potions") || "{}");
    owned = inv[`luck_25`] || 0;
  } catch (e) {}

  el.innerHTML = `
          <div class="banner-bg-stars"></div>
          <div class="banner-leaf-col">
            <img src="ui/x25-luck.png" alt="25x Luck" loading="lazy">
            ${owned > 0 ? `<div class="banner-owned-tag">Punya: x${owned}</div>` : ""}
          </div>
          <div class="banner-center-col">
            <div class="banner-mult-text">25X LUCK</div>
            <div class="banner-body-text">Luck ultra premium — legend & mythical<br>naik drastis. Common & uncommon hilang.<br>Durasi 5 menit. Stok terbatas!</div>
          </div>
          <div class="banner-right-col">
            <div class="banner-limited-tag">LIMITED!</div>
            <div class="banner-price-text">$${bannerPotion.price.toLocaleString()} coins</div>
            <button class="banner-buy-btn" onclick="buyPotion('luck',${fidx},1); _storeRenderBanner('luck'); _storeRenderLeft('luck', _storeSelIdx);">BUY</button>
          </div>
        `;
}

/* ── Render 2-col item grid ── */
function _storeRenderGrid(type) {
  const grid = document.getElementById("storeItemGrid");
  if (!grid) return;
  grid.innerHTML = "";

  POTIONS[type].forEach((p, i) => {
    const item = document.createElement("div");
    item.className =
      "store-grid-item" + (i === 0 ? " selected-store-item" : "");
    item.innerHTML = `
            <img src="${p.icon}" alt="${p.name}" class="store-grid-icon" loading="lazy" style="background:${p.color || "#1a1a1a"}">
            <div class="store-grid-info">
              <div class="store-grid-name">${p.name}</div>
              <div class="store-grid-desc">$${p.price.toLocaleString()} coins • 5 menit</div>
            </div>
          `;
    item.onclick = () => {
      grid
        .querySelectorAll(".store-grid-item")
        .forEach((r) => r.classList.remove("selected-store-item"));
      item.classList.add("selected-store-item");
      _storeBuyQty = 1;
      _storeRenderLeft(type, i);
    };
    grid.appendChild(item);
  });
}

/* ── Switch tab ── */
function switchStoreTab(type) {
  _storeTab = type;
  _storeBuyQty = 1;
  document.getElementById("storeTabLuck")?.classList.remove("active-store-tab");
  document.getElementById("storeTabFast")?.classList.remove("active-store-tab");
  document
    .getElementById(type === "luck" ? "storeTabLuck" : "storeTabFast")
    ?.classList.add("active-store-tab");
  _storeRenderBanner(type);
  _storeRenderGrid(type);
  _storeRenderLeft(type, 0);
}

/* ── Switch tab ── */
function switchStoreTab(type) {
  _storeTab = type;
  _storeBuyQty = 1;
  document.getElementById("storeTabLuck")?.classList.remove("active-store-tab");
  document.getElementById("storeTabFast")?.classList.remove("active-store-tab");
  document
    .getElementById("storeTabCosmetic")
    ?.classList.remove("active-store-tab");

  if (type === "cosmetic") {
    document
      .getElementById("storeTabCosmetic")
      ?.classList.add("active-store-tab");
    _renderCosmeticStore();
  } else {
    document
      .getElementById(type === "luck" ? "storeTabLuck" : "storeTabFast")
      ?.classList.add("active-store-tab");
    _storeRenderBanner(type);
    _storeRenderGrid(type);
    _storeRenderLeft(type, 0);
  }
}

function _renderCosmeticStore() {
  // Sembunyikan storeBanner (dipakai oleh tab Luck/Fast, tidak relevan di Kosmetik)
  const banner = document.getElementById("storeBanner");
  if (banner) banner.classList.add("hidden");

  const grid = document.getElementById("storeItemGrid");
  if (!grid) return;
  grid.innerHTML = "";

  const leftPanel = document.getElementById("storeDetailWrap");
  if (leftPanel)
    leftPanel.innerHTML = `
          <div class="store-cosmetic-info">
            <div class="store-cosmetic-info-title">Kosmetik Store</div>
            <div class="store-cosmetic-info-desc">Beli frame & banner eksklusif untuk profilmu!<br><br>
            Beberapa kosmetik juga bisa didapat gratis lewat <strong>Achievement</strong>. Cek Quest → Achievements untuk detailnya.</div>
          </div>`;

  // Frame items for sale
  const frameSection = document.createElement("div");
  frameSection.className = "store-cosmetic-section";
  frameSection.innerHTML =
    '<div class="store-cosmetic-section-title">🖼️ Frame Profil</div>';
  const frameGrid = document.createElement("div");
  frameGrid.className = "store-cosmetic-items-grid";

  PRF_FRAMES.forEach((f) => {
    if (f.unlock !== "buy") return;
    const owned = isCosmeticUnlocked("frame", f.id);
    const item = document.createElement("div");
    item.className = "store-cosmetic-item" + (owned ? " owned" : "");
    item.innerHTML = `
            <div class="store-cosmetic-preview">
              <div class="store-frame-preview" style="${f.style}"></div>
            </div>
            <div class="store-cosmetic-label">${f.label}</div>
            <div class="store-cosmetic-price">${owned ? "✅ Dimiliki" : `🪙 ${f.price?.toLocaleString()}`}</div>
            ${!owned ? `<button class="store-buy-cosmetic-btn" onclick="buyCosmeticItem('frame','${f.id}',${f.price})">Beli</button>` : ""}
          `;
    frameGrid.appendChild(item);
  });
  frameSection.appendChild(frameGrid);
  grid.appendChild(frameSection);

  // Banner items for sale
  const bannerSection = document.createElement("div");
  bannerSection.className = "store-cosmetic-section";
  bannerSection.innerHTML =
    '<div class="store-cosmetic-section-title">🎨 Banner Profil</div>';
  const bannerGrid = document.createElement("div");
  bannerGrid.className = "store-cosmetic-items-grid";

  PRF_BANNERS.forEach((b) => {
    if (b.unlock !== "buy") return;
    const owned = isCosmeticUnlocked("banner", b.id);
    const item = document.createElement("div");
    item.className = "store-cosmetic-item" + (owned ? " owned" : "");
    item.innerHTML = `
            <div class="store-cosmetic-preview store-banner-preview" style="background:${b.bg}">
              <span>${b.label}</span>
            </div>
            <div class="store-cosmetic-price">${owned ? "✅ Dimiliki" : `🪙 ${b.price?.toLocaleString()}`}</div>
            ${!owned ? `<button class="store-buy-cosmetic-btn" onclick="buyCosmeticItem('banner','${b.id}',${b.price})">Beli</button>` : ""}
          `;
    bannerGrid.appendChild(item);
  });
  bannerSection.appendChild(bannerGrid);
  grid.appendChild(bannerSection);
}

function buyCosmeticItem(type, id, price) {
  let coins = parseInt(localStorage.getItem("coins") || "0");
  if (coins < price) {
    try {
      const s = document.getElementById("errorSfx");
      s.currentTime = 0;
      s.play();
    } catch (e) {}
    showErrorPopup("❌ Coins tidak cukup!");
    return;
  }
  if (isCosmeticUnlocked(type, id)) {
    showPopup("✅ Sudah dimiliki!");
    return;
  }
  coins -= price;
  localStorage.setItem("coins", coins);
  updateCoinUI();

  // 🎵 SFX coin
  try {
    const coinSfx = document.getElementById("coinSfx");
    coinSfx.currentTime = 0;
    coinSfx.play();
  } catch (e) {}

  unlockCosmetic(type, id);
  const label =
    type === "frame"
      ? PRF_FRAMES.find((x) => x.id === id)?.label || id
      : PRF_BANNERS.find((x) => x.id === id)?.label || id;
  showPopup(
    `🎉 ${type === "frame" ? "Frame" : "Banner"} "${label}" dibeli! Atur di Profile → Identity`,
  );
  _renderCosmeticStore();
  // Refresh profile if open
  if (
    document.getElementById("prfTab-identity")?.classList.contains("active")
  ) {
    prfRenderIdentity();
  }
}

function renderPotionStore() {
  switchStoreTab("luck");
}

function debugActivePotions() {
  const now = Date.now();

  const active = [];

  // Luck
  if (
    Array.isArray(window.activeEffects.luck) &&
    window.activeEffects.luck.length > 0
  ) {
    const totalLuckMult = window.activeEffects.luck.reduce(
      (sum, e) => sum + e.mult,
      0,
    );
    window.activeEffects.luck.forEach((e, i) => {
      active.push({
        type: `Luck #${i + 1}`,
        multiplier: e.mult,
        remainingMs: e.expire - now,
        remainingSec: Math.max(0, Math.floor((e.expire - now) / 1000)),
      });
    });
    console.log(
      `%cLuck Total: x${totalLuckMult}`,
      "color: cyan; font-weight: bold;",
    );
  }

  // Fast Roll
  if (
    Array.isArray(window.activeEffects.fast) &&
    window.activeEffects.fast.length > 0
  ) {
    const totalFastMult = window.activeEffects.fast.reduce(
      (sum, e) => sum + e.mult,
      0,
    );
    window.activeEffects.fast.forEach((e, i) => {
      active.push({
        type: `Fast Roll #${i + 1}`,
        multiplier: e.mult,
        remainingMs: e.expire - now,
        remainingSec: Math.max(0, Math.floor((e.expire - now) / 1000)),
      });
    });
    console.log(
      `%cFast Roll Total: x${totalFastMult}`,
      "color: magenta; font-weight: bold;",
    );
  }

  if (active.length === 0) {
    console.log("%c[Debug Potion] Tidak ada efek aktif.", "color: gray");
  } else {
    console.log(
      "%c[Debug Potion] Efek aktif:",
      "color: lime; font-weight: bold;",
    );
    console.table(active);
  }
}

// ========= UPDATE LOG DATA =========
const UPDATE_LOGS = [
  {
    version: "MAJOR-UPD-2.0",
    image: "ui/update-2.0.jpg",
    notes: [
      "⚙️ Fixing store bugs!",
      "⚙️ Fixing achievements & quest logic!",
      "🛠️ Remake UI/UX Design",
      "😄 New small lobby design",
      "😄 New Profile features & layout design!",
      "🖥️ Adding New achievement quest and design!",
      "🖥️ New & Remake Store Tab, new tab 'Cosmetic' Tab!",
      "📢 New update overlay UI design!",
      "📦 New UI design inventory plenger overlay!",
      "🎴 New Rarity plenger Edits!",
      "🎴 New 50 plenger card!",
      "🍀 Potion will not be lost if exiting the game!",
    ],
  },
  {
    version: "UPD-1.9",
    image: "ui/update-1.9.jpg",
    notes: ["⚙️ Fixing bugs, in quest overlay systems"],
  },
  {
    version: "UPD-1.8",
    image: "ui/update-1.8.jpg",
    notes: [
      "📱 Adding Quest & Achievements EVERY Day,Week, & Month",
      "🌟 Remade Icon Every UI",
      "✨ New Profile Style",
      "⚙️ Fixing all bugs in the game",
      "🎴 New 6 plenger card!",
    ],
  },
  {
    version: "UPD-1.2",
    image: "ui/update-1.2.jpg",
    notes: [
      "📱 Adding Day Log-In!",
      "📱 Adding User Stats!",
      "🎴 New 10 plenger card!",
    ],
  },
  {
    version: "UPD-1",
    image: "ui/update-1.jpg",
    notes: [
      "🎴 Adding new rarity-card : prismatic & secret!",
      "🎴 New 15 plenger card! include prismatic & secret!",
      '📱 New ui "inspect" in collection',
    ],
  },
  {
    version: "UPD FULL-BETA",
    image: "ui/full-beta.jpg",
    notes: [
      "🎲 Fixing the render roll so it doesnt waste your data quota",
      "🎲 Adding effect UI di roll 10/10!",
      "🍀 Fixing luck button on roll 10/10!",
      "🍀 Adding potion luck x3,x5,x7 & x10!",
      "👟 Adding potion fast roll x3,x5,x7 & x10!",
      "🧩 Potion can be stackable!",
      "🎴 New 10 Plenger Card!",
    ],
  },
  {
    version: "Release BETA",
    image: "ui/icon.png",
    notes: [
      "🎲🎴 Game has been release! collect all Plenger and earn coins! 🎴🎲",
    ],
  },
];

function openUpdateLog() {
  const overlay = document.getElementById("updateLogOverlay");
  if (!overlay) return;
  overlay.classList.add("show");

  // 🔥 Tandai sudah lihat update terbaru
  localStorage.setItem("lastSeenUpdateVersion", CURRENT_UPDATE_VERSION);

  // 🔥 Hilangkan indikator merah
  const updateIndicator = document.getElementById("updateIndicator");
  if (updateIndicator) updateIndicator.classList.add("hidden");

  // Build version bar (horizontal pill tabs)
  const versionBar = document.getElementById("updateVersionBar");
  const updateContent = document.getElementById("updateContent");
  if (!versionBar || !updateContent) return;

  versionBar.innerHTML = "";
  updateContent.innerHTML = "";

  UPDATE_LOGS.forEach((log, index) => {
    const pill = document.createElement("button");
    pill.className = "upd-version-pill" + (index === 0 ? " active" : "");
    pill.dataset.index = index;

    // Badge "NEW" hanya untuk versi terbaru
    const isLatest = index === 0;
    pill.innerHTML = isLatest
      ? `${log.version} <span class="upd-new-badge">NEW</span>`
      : log.version;

    pill.onclick = () => {
      versionBar
        .querySelectorAll(".upd-version-pill")
        .forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      renderUpdateDetail(log);
    };

    versionBar.appendChild(pill);

    if (index === 0) renderUpdateDetail(log);
  });

  // Drag-to-scroll untuk laptop (mouse drag horizontal)
  let isDown = false,
    startX,
    scrollLeft;
  versionBar.addEventListener("mousedown", (e) => {
    isDown = true;
    versionBar.classList.add("grabbing");
    startX = e.pageX - versionBar.offsetLeft;
    scrollLeft = versionBar.scrollLeft;
  });
  versionBar.addEventListener("mouseleave", () => {
    isDown = false;
    versionBar.classList.remove("grabbing");
  });
  versionBar.addEventListener("mouseup", () => {
    isDown = false;
    versionBar.classList.remove("grabbing");
  });
  versionBar.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - versionBar.offsetLeft;
    const walk = (x - startX) * 1.5;
    versionBar.scrollLeft = scrollLeft - walk;
  });
}

function renderUpdateDetail(log) {
  const updateContent = document.getElementById("updateContent");
  if (!updateContent) return;

  updateContent.innerHTML = `
          <div class="upd-detail-header">
            <div class="upd-detail-img-wrap">
              <img src="${log.image}" alt="${log.version}" class="upd-detail-img" loading="lazy" />
            </div>
            <div class="upd-detail-meta">
              <div class="upd-detail-version">${log.version}</div>
              <div class="upd-detail-count">${log.notes.length} pembaruan</div>
            </div>
          </div>
          <div class="upd-notes-list">
            ${log.notes
              .map(
                (note) => `
              <div class="upd-note-item">
                <span class="upd-note-dot"></span>
                <span class="upd-note-text">${note}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        `;
}

function closeUpdateLog() {
  document.getElementById("updateLogOverlay")?.classList.remove("show");
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
  if (document.body.classList.contains("prf-no-particle")) return;
  const sparkle = document.createElement("div");
  sparkle.className = "secret-sparkle";

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
  sparkle.style.position = "absolute";
  frameEl.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1500);
}

// jalankan interval kilau random hanya untuk frame Secret
setInterval(() => {
  document.querySelectorAll(".secret-frame").forEach((frame) => {
    if (Math.random() < 0.7) {
      // 70% kemungkinan tiap tick
      spawnSecretSparkle(frame);
    }
  });
}, 400);

function toggleEventMini() {
  document.getElementById("eventBanner").classList.toggle("show");
}
const slider = document.querySelector(".event-slider");
const slides = slider.querySelectorAll("img");
let currentIndex = 0;

function showSlide(index) {
  const containerHeight = document.querySelector(".event-banner").offsetHeight;
  const offset = -index * containerHeight;
  slider.style.transform = `translateY(${offset}px)`;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000); // pindah tiap 5 detik

const banner = document.getElementById("eventBanner");
const toggleBtn = document.getElementById("bannerToggle");

// default: banner terlihat
let bannerVisible = true;

// Set posisi awal tombol sesuai status banner
function syncToggleButton() {
  if (bannerVisible) {
    toggleBtn.innerHTML = "&gt;"; // tampil banner → tombol panah ke kanan
    toggleBtn.classList.add("right");
    toggleBtn.classList.remove("left");
    banner.classList.remove("hidden-slide");
  } else {
    toggleBtn.innerHTML = "&lt;"; // hidden → tombol panah ke kiri
    toggleBtn.classList.add("left");
    toggleBtn.classList.remove("right");
    banner.classList.add("hidden-slide");
  }
}

// Jalankan saat halaman load
syncToggleButton();

// Event klik tombol
toggleBtn.addEventListener("click", () => {
  bannerVisible = !bannerVisible;
  syncToggleButton();
});

const rarityVideos = [
  document.getElementById("prismaticVideo"),
  document.getElementById("prismaticVideoMobile"),
  document.getElementById("secretVideo"),
  document.getElementById("secretVideoMobile"),
  // tambahin kalau ada video epic/legend/mythical juga
];

rarityVideos.forEach((video) => {
  if (video) {
    // Saat video mulai play → sembunyikan tombol panah
    video.addEventListener("play", () => {
      toggleBtn.classList.add("hidden");
    });

    // Saat video selesai → tampilkan tombol panah lagi
    video.addEventListener("ended", () => {
      toggleBtn.classList.remove("hidden");
    });
  }
});
function hideBannerToggle() {
  toggleBtn.classList.add("hidden");
}
function showBannerToggle() {
  toggleBtn.classList.remove("hidden");
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

// Preload semua gambar dari ITEMS array
function preloadItemImages() {
  const images = ITEMS.map((it) => it.image)
    .filter(Boolean)
    .filter((v, i, a) => a.indexOf(v) === i); // deduplicate

  if (images.length === 0) return Promise.resolve();

  let loaded = 0;
  const total = images.length;
  const loadingText = document.querySelector("#loadingScreen .loader p");

  return new Promise((resolve) => {
    images.forEach((src) => {
      const img = new Image();
      img.onload = img.onerror = () => {
        loaded++;
        if (loadingText) {
          const pct = Math.round((loaded / total) * 100);
          loadingText.textContent = `Loading: ${pct}%`;
        }
        if (loaded >= total) resolve();
      };
      img.src = src;
    });
  });
}

// Tampilkan loading saat pertama kali buka — tunggu asset beneran selesai
window.addEventListener("load", async () => {
  const loading = document.getElementById("loadingScreen");
  loading.classList.remove("hidden");

  const MIN_DISPLAY = 1500; // minimal loading screen tampil 1.5 detik
  const start = Date.now();

  await preloadItemImages();

  const elapsed = Date.now() - start;
  const remaining = Math.max(0, MIN_DISPLAY - elapsed);

  setTimeout(() => {
    loading.classList.add("hidden");
    checkUsername();
    updateUsernameUI();
    repairInventoryImages();
  }, remaining);
});

const rewards = [
  { type: "coin", amount: 500, label: "500 Coins", icon: "ui/coins1.png" },
  {
    type: "potion",
    potionType: "luck",
    mult: 2,
    amount: 1,
    label: "1x Luck Potion x2",
    icon: "ui/luck-potion.png",
  },
  { type: "coin", amount: 1000, label: "1000 Coins", icon: "ui/coins2.png" },
  {
    type: "potion",
    potionType: "fast",
    mult: 2,
    amount: 2,
    label: "2x Fast Roll x2",
    icon: "ui/fast-roll.png",
  },
  { type: "coin", amount: 1500, label: "1500 Coins", icon: "ui/coins3.png" },
  {
    type: "potion",
    potionType: "luck",
    mult: 3,
    amount: 2,
    label: "2x Luck Potion x3",
    icon: "ui/x3-luck.png",
  },
  {
    type: "potion",
    potionType: "luck",
    mult: 5,
    amount: 2,
    label: "2x Luck Potion x5",
    icon: "ui/x5-luck.png",
  },
];

function checkDailyReward() {
  const lastClaim = localStorage.getItem("lastDailyClaim");
  const today = new Date().toDateString();

  // Pastikan UI sync sama dailyDay
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
    document.getElementById("dailyRewardOverlay").classList.add("show");
    if (indicator) indicator.classList.remove("hidden");
  } else {
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
    showPopup(`Kamu dapat ${reward.amount} Coins!`);
  } else if (reward.type === "potion") {
    addDailyPotion(reward.potionType, reward.mult, reward.amount);
    showPopup(
      `Kamu dapat ${reward.amount}x ${reward.potionType === "fast" ? "Fast Roll" : "Luck"} Potion x${reward.mult}!`,
    );
  }

  // Simpan hari berikutnya
  localStorage.setItem("dailyDay", day + 1);

  // Ubah tombol jadi sudah diklaim
  const claimBtn = document.getElementById("dailyClaimBtn");
  if (claimBtn) {
    claimBtn.textContent = "Sudah Diklaim";
    claimBtn.disabled = true;
  }

  // SFX
  try {
    const sfx = document.getElementById("resultSfx");
    if (sfx) {
      const _s = prfGetSettings();
      sfx.muted = !_s.sfx;
      sfx.volume = _s.volume / 100;
      sfx.currentTime = 0;
      sfx.play();
    }
  } catch (e) {}

  const indicator = document.getElementById("rewardIndicator");
  if (indicator) indicator.classList.add("hidden");

  updateDailyUI();
  closeDailyReward();
}

function renderDailyGrid() {
  const grid = document.getElementById("drGrid");
  if (!grid) return;
  let day = parseInt(localStorage.getItem("dailyDay") || "1");
  if (day > rewards.length) day = 1;

  grid.innerHTML = "";
  rewards.forEach((r, i) => {
    const dayNum = i + 1;
    const isClaimed = dayNum < day;
    const isActive = dayNum === day;
    const isDay7 = dayNum === rewards.length;

    const box = document.createElement("div");
    box.id = `rewardDay${dayNum}`;
    box.className = [
      "dr-box",
      isClaimed ? "dr-claimed" : "",
      isActive ? "dr-active" : "",
      isDay7 ? "dr-day7" : "",
    ]
      .filter(Boolean)
      .join(" ");

    box.innerHTML = `
            <div class="dr-day-label">Hari ${dayNum}</div>
            <img src="${r.icon}" alt="${r.label}" class="dr-icon" loading="lazy">
            <div class="dr-reward-label">${r.label}</div>
            ${isClaimed ? '<div class="dr-check">✓</div>' : ""}
          `;
    grid.appendChild(box);
  });

  // streak label
  const sl = document.getElementById("drStreakLabel");
  if (sl) {
    const claimed = day - 1;
    sl.textContent =
      claimed > 0
        ? `Streak: ${claimed} hari berturut-turut`
        : "Login pertama hari ini!";
  }
}

function updateDailyUI() {
  renderDailyGrid();
  // update claim button state
  const today = new Date().toDateString();
  const lastClaim = localStorage.getItem("lastDailyClaim");
  const btn = document.getElementById("dailyClaimBtn");
  if (!btn) return;
  if (lastClaim === today) {
    btn.textContent = "Sudah Diklaim";
    btn.disabled = true;
  } else {
    btn.textContent = "Klaim Hadiah";
    btn.disabled = false;
  }
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
  const claimBtn = document.getElementById("dailyClaimBtn");

  if (lastClaim === today) {
    claimBtn.textContent = "Sudah Diklaim";
    claimBtn.disabled = true;
  } else {
    claimBtn.textContent = "Klaim Hadiah";
    claimBtn.disabled = false;
  }

  document.getElementById("dailyRewardOverlay").classList.add("show");
}

// === Daily Reward Potion ===
function addDailyPotion(type, mult, amount) {
  let potions = JSON.parse(localStorage.getItem("potions") || "{}");
  const key = `${type}_${mult}`;
  potions[key] = (potions[key] || 0) + amount;
  localStorage.setItem("potions", JSON.stringify(potions));
  // Refresh UI kalau potion inventory sedang terbuka
  if (
    document
      .getElementById("potionInventoryOverlay")
      ?.classList.contains("show")
  ) {
    renderPotionInventory();
  }
}

function updateStats(rarity) {
  // Total roll
  let rolls = parseInt(localStorage.getItem("totalRolls") || "0");
  localStorage.setItem("totalRolls", rolls + 1);

  // Sync ke cloud tiap 10 roll
  if (
    typeof window._authDB !== "undefined" &&
    window._authDB.getCurrentUser()
  ) {
    const rolls = parseInt(localStorage.getItem("totalRolls") || "0");
    if (rolls % 10 === 0) {
      window._authDB.saveDataToFirebase();
    }
  }
  // Track roll-based achievements
  updateAchievements("roll", 1);

  // Per-rarity counters — all use consistent *Count keys
  const rarityKeyMap = {
    common: "commonCount",
    uncommon: "uncommonCount",
    rare: "rareCount",
    epic: "epicCount",
    legend: "legendaryCount",
    legendary: "legendaryCount",
    mythical: "mythicalCount",
    prismatic: "prismaticCount",
    secret: "secretCount",
    edits: "editsCount",
  };
  const key = rarityKeyMap[rarity];
  if (key) {
    localStorage.setItem(key, parseInt(localStorage.getItem(key) || "0") + 1);
  }

  // Update gameplay profile UI
  updateGameplayProfileUI();
}

function updateGameplayProfileUI() {
  const s = prfGetSettings();
  const name = localStorage.getItem("username") || "Guest";
  const avatarSrc = localStorage.getItem("prfAvatarSrc") || "";
  const level = prfCalcLevel();

  updateSidebarProfileUI();
}

function updateSidebarProfileUI() {
  const s = prfGetSettings();
  const avatarSrc = localStorage.getItem("prfAvatarSrc") || "";
  const name = localStorage.getItem("username") || "Guest";
  const level = prfCalcLevel();

  // Banner background on profile card
  const bannerBg = document.getElementById("sideProfileBannerBg");
  if (bannerBg) {
    const b = PRF_BANNERS.find((x) => x.id === s.banner) || PRF_BANNERS[0];
    bannerBg.style.background = b.bg;
  }

  // Avatar image
  const sideImg = document.getElementById("sideProfileImg");
  if (sideImg) sideImg.src = avatarSrc || "ui/user.png";

  // Frame
  const sideFrame = document.getElementById("sideProfileFrame");
  if (sideFrame) {
    const f = PRF_FRAMES.find((x) => x.id === s.frame) || PRF_FRAMES[0];
    sideFrame.style.cssText = f.style ? `border:${f.style};` : "";
    sideFrame.classList.toggle("side-frame-rainbow", s.frame === "rainbow");
  }

  // Name
  const sideLabel = document.getElementById("sideProfileLabel");
  if (sideLabel)
    sideLabel.textContent =
      name.length > 10 ? name.substring(0, 10) + "…" : name;

  // Level
  const sideLevel = document.getElementById("sideProfileLevel");
  if (sideLevel) sideLevel.textContent = `Lv. ${level}`;
}

// ===== PLAYER PROFILE =====

/* ── frame & banner options ── */
// unlock types: 'free' | 'buy' (beli di store) | 'achievement' (unlock via achievement)
const PRF_FRAMES = [
  { id: "none", label: "Default", style: "", unlock: "free" },
  {
    id: "gold",
    label: "Gold",
    style: "2px solid #ffcf6f; box-shadow:0 0 10px rgba(255,207,111,0.6)",
    unlock: "buy",
    price: 5000,
  },
  {
    id: "rare",
    label: "Rare",
    style: "2px solid #6fb6ff; box-shadow:0 0 10px rgba(111,182,255,0.6)",
    unlock: "achievement",
    achievementId: "frame_rare",
  },
  {
    id: "epic",
    label: "Epic",
    style: "2px solid #d08cff; box-shadow:0 0 10px rgba(208,140,255,0.6)",
    unlock: "achievement",
    achievementId: "frame_epic",
  },
  {
    id: "mythical",
    label: "Mythical",
    style: "2px solid #ff4444; box-shadow:0 0 10px rgba(255,68,68,0.6)",
    unlock: "buy",
    price: 20000,
  },
  {
    id: "rainbow",
    label: "Rainbow",
    style:
      "3px solid transparent; background-clip:padding-box; outline:2px solid transparent; animation:prfRainbow 2s linear infinite",
    unlock: "achievement",
    achievementId: "frame_rainbow",
  },
];
const PRF_BANNERS = [
  {
    id: "none",
    label: "Default",
    bg: "linear-gradient(135deg,#1a1a2e,#16213e)",
    unlock: "free",
  },
  {
    id: "fire",
    label: "Api",
    bg: "linear-gradient(135deg,#7f0000,#ff4500)",
    unlock: "buy",
    price: 3000,
  },
  {
    id: "ocean",
    label: "Laut",
    bg: "linear-gradient(135deg,#0a3a7c,#00c6ff)",
    unlock: "achievement",
    achievementId: "banner_ocean",
  },
  {
    id: "forest",
    label: "Hutan",
    bg: "linear-gradient(135deg,#0e3d1e,#2ad980)",
    unlock: "buy",
    price: 1000,
  },
  {
    id: "galaxy",
    label: "Galaksi",
    bg: "linear-gradient(135deg,#0d0d2b,#a855f7,#ec4899)",
    unlock: "achievement",
    achievementId: "banner_galaxy",
  },
  {
    id: "gold",
    label: "Emas",
    bg: "linear-gradient(135deg,#3d2400,#ffcf6f,#a07000)",
    unlock: "buy",
    price: 10000,
  },
  {
    id: "midnight",
    label: "Midnight",
    bg: "linear-gradient(135deg,#0b0b0b,#1a1a2e,#2d2d4e)",
    unlock: "achievement",
    achievementId: "banner_midnight",
  },
  {
    id: "crimson",
    label: "Crimson",
    bg: "linear-gradient(135deg,#2a0000,#cc0000,#ff6060)",
    unlock: "achievement",
    achievementId: "banner_crimson",
  },
];

// Helpers for cosmetic unlock system
function getCosmeticUnlocks() {
  try {
    return JSON.parse(localStorage.getItem("cosmeticUnlocks") || "{}");
  } catch (e) {
    return {};
  }
}
function saveCosmeticUnlocks(data) {
  localStorage.setItem("cosmeticUnlocks", JSON.stringify(data));
}
function isCosmeticUnlocked(type, id) {
  const u = getCosmeticUnlocks();
  if (type === "frame") {
    const f = PRF_FRAMES.find((x) => x.id === id);
    // Tidak ada di daftar atau gratis → dianggap unlock
    if (!f || f.unlock === "free") return true;
    // Sudah tersimpan di cosmeticUnlocks (dari beli/achievement sebelumnya) → tetap unlock
    // walau unlock-type-nya berubah di kode terbaru
    return !!(u.frames && u.frames[id]);
  }
  if (type === "banner") {
    const b = PRF_BANNERS.find((x) => x.id === id);
    if (!b || b.unlock === "free") return true;
    return !!(u.banners && u.banners[id]);
  }
  return false;
}
function unlockCosmetic(type, id) {
  const u = getCosmeticUnlocks();
  if (type === "frame") {
    u.frames = u.frames || {};
    u.frames[id] = true;
  }
  if (type === "banner") {
    u.banners = u.banners || {};
    u.banners[id] = true;
  }
  saveCosmeticUnlocks(u);
}

/* ── defaults ── */
const PRF_DEFAULTS = {
  music: true,
  sfx: true,
  volume: 80,
  stars: true,
  anim: true,
  video: true,
  particle: true,
  battery: false,
  quality: "high",
  frame: "none",
  banner: "none",
};

function prfGetSettings() {
  let s;
  try {
    s = {
      ...PRF_DEFAULTS,
      ...JSON.parse(localStorage.getItem("prfSettings") || "{}"),
    };
  } catch (e) {
    s = { ...PRF_DEFAULTS };
  }

  // Validasi: kalau frame/banner yang tersimpan sudah tidak ada di daftar,
  // fallback ke 'none' supaya tidak error saat akses .style / .bg
  const validFrame = PRF_FRAMES.find((x) => x.id === s.frame);
  const validBanner = PRF_BANNERS.find((x) => x.id === s.banner);
  if (!validFrame) s.frame = "none";
  if (!validBanner) s.banner = "none";

  return s;
}
function prfSaveSettings(s) {
  localStorage.setItem("prfSettings", JSON.stringify(s));
}

function openProfile() {
  prfRenderIdentity();
  prfRenderStats();
  prfLoadSettings();
  prfApplyAllSettings();
  document.getElementById("profileOverlay").classList.add("show");
}

function closeProfile() {
  document.getElementById("profileOverlay").classList.remove("show");
}

function prfSwitchTab(btn) {
  document
    .querySelectorAll(".prf-tab")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".prf-panel")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("prfTab-" + btn.dataset.tab)?.classList.add("active");
}

/* ── Identity ── */
function prfRenderIdentity() {
  const name = localStorage.getItem("username") || "Guest";
  const s = prfGetSettings();

  // header
  document.getElementById("profileName").textContent = name;
  document.getElementById("prfLevel").textContent = "Lv. " + prfCalcLevel();
  prfApplyFrame(s.frame);
  prfApplyBanner(s.banner);
  prfApplyAvatarImg();

  // input
  const inp = document.getElementById("prfUsernameInput");
  if (inp) inp.value = name;

  // preview avatar
  prfRefreshAvatarPreview();

  // frame grid
  const fg = document.getElementById("prfFrameGrid");
  if (fg) {
    fg.innerHTML = "";
    PRF_FRAMES.forEach((f) => {
      const unlocked = isCosmeticUnlocked("frame", f.id);
      const el = document.createElement("div");
      el.className =
        "prf-frame-item" +
        (s.frame === f.id ? " active" : "") +
        (!unlocked ? " locked-cosmetic" : "");

      let lockLabel = "";
      if (!unlocked) {
        if (f.unlock === "buy")
          lockLabel = `<div class="cosmetic-lock-badge">🔒 ${f.price?.toLocaleString()} 🪙</div>`;
        else
          lockLabel = `<div class="cosmetic-lock-badge">🔒 Achievement</div>`;
      }

      el.innerHTML = `<div class="prf-frame-dot" style="${f.style}"></div><span>${f.label}</span>${lockLabel}`;
      el.onclick = () => {
        if (!unlocked) {
          try {
            const s = document.getElementById("errorSfx");
            s.currentTime = 0;
            s.play();
          } catch (e) {}
          if (f.unlock === "buy")
            showErrorPopup(`🔒 Beli frame ini di Store → Kosmetik`);
          else
            showErrorPopup(
              `🔒 Selesaikan achievement untuk membuka frame ini!`,
            );
          return;
        }
        const ns = prfGetSettings();
        ns.frame = f.id;
        prfSaveSettings(ns);
        prfApplyFrame(f.id);
        document
          .querySelectorAll(".prf-frame-item")
          .forEach((x) => x.classList.remove("active"));
        el.classList.add("active");
        updateGameplayProfileUI();
        updateSidebarProfileUI();
      };
      fg.appendChild(el);
    });
  }

  // banner grid
  const bg = document.getElementById("prfBannerGrid");
  if (bg) {
    bg.innerHTML = "";
    PRF_BANNERS.forEach((b) => {
      const unlocked = isCosmeticUnlocked("banner", b.id);
      const el = document.createElement("div");
      el.className =
        "prf-banner-item" +
        (s.banner === b.id ? " active" : "") +
        (!unlocked ? " locked-cosmetic" : "");

      let lockLabel = "";
      if (!unlocked) {
        if (b.unlock === "buy")
          lockLabel = `<div class="cosmetic-lock-badge">🔒 ${b.price?.toLocaleString()} 🪙</div>`;
        else
          lockLabel = `<div class="cosmetic-lock-badge">🔒 Achievement</div>`;
      }

      el.style.background = b.bg;
      el.innerHTML = `<span>${b.label}</span>${lockLabel}`;
      el.onclick = () => {
        if (!unlocked) {
          try {
            const s = document.getElementById("errorSfx");
            s.currentTime = 0;
            s.play();
          } catch (e) {}
          if (b.unlock === "buy")
            showErrorPopup(`🔒 Beli banner ini di Store → Kosmetik`);
          else
            showErrorPopup(
              `🔒 Selesaikan achievement untuk membuka banner ini!`,
            );
          return;
        }
        const ns = prfGetSettings();
        ns.banner = b.id;
        prfSaveSettings(ns);
        prfApplyBanner(b.id);
        document
          .querySelectorAll(".prf-banner-item")
          .forEach((x) => x.classList.remove("active"));
        el.classList.add("active");
        updateGameplayProfileUI();
      };
      bg.appendChild(el);
    });
  }
}

function prfCalcLevel() {
  const rolls = parseInt(localStorage.getItem("totalRolls") || "0");
  return Math.max(1, Math.floor(rolls / 50) + 1);
}

function prfApplyFrame(frameId) {
  const f = PRF_FRAMES.find((x) => x.id === frameId) || PRF_FRAMES[0];
  const frameEl = document.getElementById("prfAvatarFrame");
  if (frameEl) frameEl.style.cssText = f.style ? `border:${f.style};` : "";
}

function prfApplyBanner(bannerId) {
  const b = PRF_BANNERS.find((x) => x.id === bannerId) || PRF_BANNERS[0];
  const bannerEl = document.getElementById("prfBanner");
  if (bannerEl) bannerEl.style.background = b.bg;
}

function prfApplyAvatarImg() {
  const src = localStorage.getItem("prfAvatarSrc") || "";
  const img = document.getElementById("prfAvatarImg");
  const ph = document.getElementById("prfAvatarPh");
  if (img && ph) {
    if (src) {
      img.src = src;
      img.style.display = "block";
      ph.style.display = "none";
    } else {
      img.style.display = "none";
      ph.style.display = "block";
    }
  }
}

function prfRefreshAvatarPreview() {
  const src = localStorage.getItem("prfAvatarSrc") || "";
  const img = document.getElementById("prfAvatarPreviewImg");
  const ph = document.getElementById("prfAvatarPreviewPh");
  if (!img || !ph) return;
  if (src) {
    img.src = src;
    img.style.display = "block";
    ph.style.display = "none";
  } else {
    img.style.display = "none";
    ph.style.display = "block";
  }
}

function prfUploadAvatar(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    localStorage.setItem("prfAvatarSrc", e.target.result);
    prfApplyAvatarImg();
    prfRefreshAvatarPreview();
    updateGameplayProfileUI();
  };
  reader.readAsDataURL(file);
}

function prfRemoveAvatar() {
  localStorage.removeItem("prfAvatarSrc");
  prfApplyAvatarImg();
  prfRefreshAvatarPreview();
  updateGameplayProfileUI();
}

function prfSaveUsername() {
  const val = (document.getElementById("prfUsernameInput")?.value || "").trim();
  if (!val) {
    showErrorPopup("Username tidak boleh kosong!");
    return;
  }
  localStorage.setItem("username", val);
  document.getElementById("profileName").textContent = val;
  updateUsernameUI();
  updateGameplayProfileUI();
  showPopup("Username disimpan!");
}

/* ── Stats ── */
function prfRenderStats() {
  const g = (k, d = 0) => parseInt(localStorage.getItem(k) || d);
  document.getElementById("profileRolls").textContent =
    g("totalRolls").toLocaleString();
  document.getElementById("profileCommon").textContent =
    g("commonCount").toLocaleString();
  document.getElementById("profileUncommon").textContent =
    g("uncommonCount").toLocaleString();
  document.getElementById("profileRare").textContent =
    g("rareCount").toLocaleString();
  document.getElementById("profileEpic").textContent =
    g("epicCount").toLocaleString();
  document.getElementById("profileLegendary").textContent =
    g("legendaryCount").toLocaleString();
  document.getElementById("profileMythical").textContent =
    g("mythicalCount").toLocaleString();
  document.getElementById("profilePrismatic").textContent =
    g("prismaticCount").toLocaleString();
  document.getElementById("profileSecret").textContent =
    g("secretCount").toLocaleString();
  document.getElementById("profileEdits").textContent =
    g("editsCount").toLocaleString();
  document.getElementById("profileCoins").textContent =
    g("coins").toLocaleString();
  document.getElementById("profileSold").textContent =
    g("totalSold").toLocaleString();
  if (typeof renderProfileAchievements === "function")
    renderProfileAchievements();
}

/* ── Settings ── */
function prfLoadSettings() {
  const s = prfGetSettings();
  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el[typeof val === "boolean" ? "checked" : "value"] = val;
  };
  set("stgMusic", s.music);
  set("stgSfx", s.sfx);
  set("stgVolume", s.volume);
  set("stgStars", s.stars);
  set("stgAnim", s.anim);
  set("stgVideo", s.video);
  set("stgParticle", s.particle);
  set("stgBattery", s.battery);
  set("stgQuality", s.quality);
  const vv = document.getElementById("stgVolumeVal");
  if (vv) vv.textContent = s.volume;
}

function prfApplySetting(key, val) {
  const s = prfGetSettings();
  if (key === "volume") val = parseInt(val);
  s[key] = val;
  prfSaveSettings(s);
  prfApplyAllSettings();
  const vv = document.getElementById("stgVolumeVal");
  if (key === "volume" && vv) vv.textContent = val;
}

function prfApplyAllSettings() {
  const s = prfGetSettings();
  const vol = s.volume / 100;

  // Music
  const music = document.getElementById("gachaMusic");
  if (music) {
    music.muted = !s.music;
    music.volume = vol;
  }

  // SFX — mute all sfx elements
  [
    "rollSfx",
    "resultSfx",
    "coinSfx",
    "errorSfx",
    "prismaticSfx",
    "secretSfx",
    "editsSfx",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.muted = !s.sfx;
      el.volume = vol;
    }
  });

  // Stars / background particles
  const stars = document.getElementById("bgStars");
  const night = document.getElementById("bgNight");
  if (stars) stars.style.visibility = s.stars ? "visible" : "hidden";
  if (night) night.style.visibility = s.stars ? "visible" : "hidden";

  // Battery mode — disable non-essential transitions
  document.body.classList.toggle("prf-battery-mode", s.battery);

  // Particle efek ambient flash saat roll
  document.body.classList.toggle("prf-no-particle", !s.particle);

  // Video
  document.body.classList.toggle("prf-no-video", !s.video);

  // Particles / rarity anim
  document.body.classList.toggle("prf-no-anim", !s.anim);
}

function prfResetSettings() {
  prfSaveSettings({ ...PRF_DEFAULTS });
  prfLoadSettings();
  prfApplyAllSettings();
  showPopup("Settings direset ke default");
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

// === QUEST & ACHIEVEMENTS DATA ===
const QUEST_POOL = {
  daily: [
    {
      id: "roll20",
      title: "Lakukan 20 roll",
      target: 20,
      reward: { coins: 500 },
    },
    {
      id: "usePotion1",
      title: "Gunakan 1 potion",
      target: 1,
      reward: { coins: 300 },
    },
    {
      id: "usePotion5",
      title: "Gunakan 5 potion",
      target: 5,
      reward: {
        coins: 3000,
        potions: [{ type: "luck", mult: 7, amount: 1 }],
      },
    },
    {
      id: "sell5",
      title: "Menjual 5 item",
      target: 5,
      reward: { coins: 400 },
    },
    {
      id: "rare3",
      title: "Dapatkan 3 Rare",
      target: 3,
      reward: { coins: 600 },
    },
    {
      id: "epic1",
      title: "Dapatkan 1 Epic",
      target: 1,
      reward: { coins: 1000 },
    },
    {
      id: "epic20",
      title: "Dapatkan 20 Epic",
      target: 20,
      reward: {
        coins: 800,
        potions: [{ type: "fast", mult: 1, amount: 1 }],
      },
    },
    {
      id: "roll200",
      title: "Lakukan 200 roll",
      target: 200,
      reward: {
        coins: 1000,
        potions: [{ type: "luck", mult: 5, amount: 2 }],
      },
    },
  ],
  weekly: [
    {
      id: "roll100",
      title: "Lakukan 100 roll",
      target: 100,
      reward: { coins: 2000 },
    },
    {
      id: "getLegend",
      title: "Dapatkan 1 Legend",
      target: 1,
      reward: { coins: 3000 },
    },
    {
      id: "legend3",
      title: "Dapatkan 3 Legend",
      target: 3,
      reward: { coins: 9000 },
    },
    {
      id: "sell20",
      title: "Menjual 20 item",
      target: 20,
      reward: { coins: 1500 },
    },
  ],
  monthly: [
    {
      id: "roll500",
      title: "Lakukan 500 roll",
      target: 500,
      reward: { coins: 8000 },
    },
    {
      id: "getLegend10",
      title: "Dapatkan 10 Legend",
      target: 10,
      reward: {
        coins: 3000,
        potions: [{ type: "luck", mult: 5, amount: 2 }],
      },
    },
    {
      id: "mythical1",
      title: "Dapatkan 1 Mythical",
      target: 1,
      reward: { coins: 12000 },
    },
  ],
};

// Naikkan versi ini setiap kamu mengubah daftar ACHIEVEMENTS (tambah/hapus/ubah id).
// loadAchievements() otomatis bersihkan entry lama & tambah entry baru,
// tapi progress achievement yg masih valid tetap dipertahankan.
const ACHIEVEMENTS_VERSION = "2";

const ACHIEVEMENTS = [
  {
    id: "rare10",
    title: "Dapatkan 10 Rare",
    target: 10,
    progress: 0,
    badge: "ui/rare-badge.png",
    reward: { coins: 5000 },
  },
  {
    id: "epic20",
    title: "Dapatkan 20 Epic",
    target: 20,
    progress: 0,
    badge: "ui/epic-badge.png",
    reward: { coins: 8000 },
  },
  {
    id: "legend5",
    title: "Dapatkan 5 Legend",
    target: 5,
    progress: 0,
    badge: "ui/legend-badge.png",
    reward: { coins: 15000 },
  },
  {
    id: "mythical3",
    title: "Dapatkan 3 Mythical",
    target: 3,
    progress: 0,
    badge: "ui/mythical-badge.png",
    reward: { coins: 30000 },
  },
  // ── Cosmetic Frame Achievements ──
  {
    id: "frame_rare",
    title: "Unlock Frame Rare — Dapatkan 100 Rare",
    target: 100,
    progress: 0,
    // badge: "ui/rare-badge.png",
    reward: { coins: 1000, cosmetic: { type: "frame", id: "rare" } },
    isCosmeticReward: true,
    cosmeticLabel: "Frame: Rare",
  },
  {
    id: "frame_epic",
    title: "Unlock Frame Epic — Dapatkan 50 Epic",
    target: 50,
    progress: 0,
    // badge: "ui/epic-badge.png",
    reward: { coins: 2000, cosmetic: { type: "frame", id: "epic" } },
    isCosmeticReward: true,
    cosmeticLabel: "Frame: Epic",
  },
  {
    id: "frame_rainbow",
    title: "Unlock Frame Rainbow — Dapatkan 3 Prismatic",
    target: 3,
    progress: 0,
    // badge: "ui/mythical-badge.png",
    reward: { coins: 10000, cosmetic: { type: "frame", id: "rainbow" } },
    isCosmeticReward: true,
    cosmeticLabel: "Frame: Rainbow",
  },
  // ── Cosmetic Banner Achievements ──
  {
    id: "banner_ocean",
    title: "Unlock Banner Laut — Lakukan 100 Roll",
    target: 100,
    progress: 0,
    // badge: "ui/rare-badge.png",
    reward: { coins: 500, cosmetic: { type: "banner", id: "ocean" } },
    isCosmeticReward: true,
    cosmeticLabel: "Banner: Laut",
  },
  {
    id: "banner_crimson",
    title: "Unlock Banner Crimson — Dapatkan 50 Mythical",
    target: 50,
    progress: 0,
    // badge: "ui/epic-badge.png",
    reward: { coins: 2000, cosmetic: { type: "banner", id: "crimson" } },
    isCosmeticReward: true,
    cosmeticLabel: "Banner: Crimson",
  },
  {
    id: "banner_galaxy",
    title: "Unlock Banner Galaksi — Dapatkan 5 Galaksi (Coming Soon)",
    target: 5,
    progress: 0,
    // badge: "ui/mythical-badge.png",
    reward: { coins: 5000, cosmetic: { type: "banner", id: "galaxy" } },
    isCosmeticReward: true,
    cosmeticLabel: "Banner: Galaksi",
    comingSoon: true,
  },
  {
    id: "banner_midnight",
    title: "Unlock Banner Midnight — Dapatkan 1 Secret",
    target: 1,
    progress: 0,
    // badge: "ui/legend-badge.png",
    reward: { coins: 5000, cosmetic: { type: "banner", id: "midnight" } },
    isCosmeticReward: true,
    cosmeticLabel: "Banner: Midnight",
  },
];

function generateDailyQuests() {
  return JSON.parse(JSON.stringify(QUEST_POOL.daily));
}

function generateWeeklyQuests() {
  return JSON.parse(JSON.stringify(QUEST_POOL.weekly));
}

function generateMonthlyQuests() {
  return JSON.parse(JSON.stringify(QUEST_POOL.monthly));
}

// === Local Storage System ===
function loadQuests() {
  let data = JSON.parse(localStorage.getItem("quests")) || {};
  const now = new Date();
  const today = now.toDateString();
  const week = getWeekNumber(now);
  // Simpan sebagai string agar bulan 0 (Januari) tidak dianggap falsy
  const month = `${now.getFullYear()}-${now.getMonth()}`;

  if (!data.meta || data.meta.daily !== today) {
    data.daily = getRandomQuests(QUEST_POOL.daily, 3);
    data.meta = { ...(data.meta || {}), daily: today };
  }
  if (!data.meta.weekly || data.meta.weekly !== week) {
    data.weekly = getRandomQuests(QUEST_POOL.weekly, 2);
    data.meta.weekly = week;
  }
  if (!data.meta.monthly || data.meta.monthly !== month) {
    data.monthly = getRandomQuests(QUEST_POOL.monthly, 1);
    data.meta.monthly = month;
  }

  localStorage.setItem("quests", JSON.stringify(data));
  return data;
}

function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function saveQuests(data) {
  localStorage.setItem("quests", JSON.stringify(data));
  updateQuestIndicator();
}

function loadAchievements() {
  let saved = [];
  try {
    saved = JSON.parse(localStorage.getItem("achievements") || "[]");
  } catch (e) {}

  const validIds = new Set(ACHIEVEMENTS.map((a) => a.id));
  const storedVersion = localStorage.getItem("achievementsVersion") || "0";

  // Kalau versi berubah: buang entry lama yang id-nya sudah tidak ada
  // di daftar ACHIEVEMENTS terbaru. Progress entry yang masih valid tetap dipertahankan.
  if (storedVersion !== ACHIEVEMENTS_VERSION) {
    saved = saved.filter((a) => validIds.has(a.id));
    localStorage.setItem("achievementsVersion", ACHIEVEMENTS_VERSION);
  }

  // Tambah entry baru & sync field statis (badge, title, target, reward, flags)
  ACHIEVEMENTS.forEach((def) => {
    let found = saved.find((a) => a.id === def.id);
    if (!found) {
      // Entry baru — mulai dari nol
      saved.push({ ...def, progress: 0, claimed: false });
    } else {
      // Sync field statis supaya perubahan definisi langsung berlaku
      found.badge = def.badge;
      found.title = def.title;
      found.target = def.target;
      found.reward = def.reward;
      found.isCosmeticReward = def.isCosmeticReward ?? false;
      found.cosmeticLabel = def.cosmeticLabel ?? "";
      found.comingSoon = def.comingSoon ?? false;
    }
  });

  // simpan balik supaya konsisten
  localStorage.setItem("achievements", JSON.stringify(saved));
  return saved;
}

function saveAchievements(data) {
  localStorage.setItem("achievements", JSON.stringify(data));
  updateQuestIndicator();
}

function getRandomQuests(pool, count) {
  let shuffled = pool.sort(() => 0.5 - Math.random());
  return shuffled
    .slice(0, count)
    .map((q) => ({ ...q, progress: 0, claimed: false }));
}

function updateQuestProgress(id, amount) {
  // Baca raw tanpa trigger reset logika loadQuests()
  let quests = JSON.parse(localStorage.getItem("quests") || "{}");
  ["daily", "weekly", "monthly"].forEach((cat) => {
    if (!quests[cat]) return;
    quests[cat].forEach((q) => {
      if (q.id === id && !q.claimed) {
        q.progress = Math.min(q.target, (q.progress || 0) + amount);
      }
    });
  });
  saveQuests(quests);
  renderQuests();
}

function updateAchievementProgress(id, amount) {
  let ach = loadAchievements();
  ach.forEach((a) => {
    if (a.id === id && !a.claimed) {
      a.progress = Math.min(a.target, a.progress + amount);
    }
  });
  saveAchievements(ach);
  renderAchievements();
}

// === Claim ===
function claimQuest(id) {
  let quests = loadQuests();

  ["daily", "weekly", "monthly"].forEach((cat) => {
    quests[cat].forEach((q) => {
      if (q.id === id && !q.claimed && q.progress >= q.target) {
        // Coin reward
        if (q.reward.coins) {
          let coins = parseInt(localStorage.getItem("coins") || "0");
          coins += q.reward.coins;
          localStorage.setItem("coins", coins);
          updateCoinUI();
          showCoinPopup(q.reward.coins);
        }

        // Potion reward
        if (q.reward.potions) {
          q.reward.potions.forEach((p) => {
            addQuestPotion(p.type, p.mult || 1, p.amount);
          });
        }

        q.claimed = true;
      }
    });

    // ✅ TIDAK auto-refresh di sini — biarkan user lihat status "semua claimed"
    // refresh hanya terjadi via tombol Refresh atau saat timer habis
  });

  saveQuests(quests);
  renderQuests();
}

function claimAchievement(id) {
  let data = loadAchievements();
  const a = data.find((x) => x.id === id);

  // Belum memenuhi syarat
  if (a && !a.claimed && a.progress < a.target) {
    try {
      const s = document.getElementById("errorSfx");
      s.currentTime = 0;
      s.play();
    } catch (e) {}
    showErrorPopup(`❌ Belum selesai! Progress: ${a.progress} / ${a.target}`);
    return;
  }

  data.forEach((a) => {
    if (a.id === id && a.progress >= a.target && !a.claimed) {
      a.claimed = true;
      addCoins(a.reward.coins);

      // Cosmetic unlock
      if (a.reward.cosmetic) {
        unlockCosmetic(a.reward.cosmetic.type, a.reward.cosmetic.id);
        showPopup(
          `${a.cosmeticLabel || "Kosmetik"} sudah dibuka! +${a.reward.coins} Coins`,
        );
      } else {
        showPopup("Achievement Unlocked! +" + a.reward.coins + " Coins");
      }

      // 🔊 mainkan suara cengkrink
      const sfx = document.getElementById("resultSfx");
      if (sfx) {
        sfx.currentTime = 0;
        sfx.play().catch((err) => console.warn("SFX blocked:", err));
      }
    }
  });
  saveAchievements(data);
  renderAchievements();
  renderProfileAchievements();
  // Refresh identity tab if open
  if (
    document.getElementById("prfTab-identity")?.classList.contains("active")
  ) {
    prfRenderIdentity();
  }
}

// === Render UI ===
// === Render UI ===
function renderQuests() {
  let data = loadQuests();
  let container = document.getElementById("questTab");
  container.innerHTML = "";

  const now = new Date();

  function timeUntilMidnight() {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return formatDuration(tomorrow - now);
  }
  function timeUntilEndOfWeek() {
    const day = now.getDay();
    const daysUntilMonday = day === 0 ? 1 : 8 - day;
    const next = new Date(now);
    next.setDate(next.getDate() + daysUntilMonday);
    next.setHours(0, 0, 0, 0);
    return formatDuration(next - now);
  }
  function timeUntilEndOfMonth() {
    const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    return formatDuration(next - now);
  }
  function formatDuration(ms) {
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    if (h >= 24) return `${Math.floor(h / 24)}h ${h % 24}j`;
    if (h > 0) return `${h}j ${m}m`;
    return `${m}m`;
  }

  const categories = [
    {
      key: "daily",
      title: "Daily Quests",
      timer: timeUntilMidnight(),
      icon: "☀️",
      accent: "#ffd700",
    },
    {
      key: "weekly",
      title: "Weekly Quests",
      timer: timeUntilEndOfWeek(),
      icon: "📅",
      accent: "#00c6ff",
    },
    {
      key: "monthly",
      title: "Monthly Quests",
      timer: timeUntilEndOfMonth(),
      icon: "🌙",
      accent: "#b97fff",
    },
  ];

  categories.forEach((cat) => {
    let list = data[cat.key];
    if (!list) return;

    const allClaimed = list.every((q) => q.claimed);
    const claimedCount = list.filter((q) => q.claimed).length;

    container.innerHTML += `
      <div class="qsec-header">
        <div class="qsec-left">
          <span class="qsec-icon">${cat.icon}</span>
          <span class="qsec-title" style="color:${cat.accent}">${cat.title}</span>
          <span class="qsec-count">${claimedCount}/${list.length}</span>
        </div>
        <div class="qsec-right">
          ${
            allClaimed
              ? `<button class="qsec-refresh-btn" onclick="refreshQuestGroup('${cat.key}')">🔄 Refresh</button>`
              : `<span class="qsec-timer">⏳ ${cat.timer}</span>`
          }
        </div>
      </div>
    `;

    list.forEach((q) => {
      const percent = Math.min(100, (q.progress / q.target) * 100);
      const isDone = q.progress >= q.target;
      const isClaimed = q.claimed;

      const rewardCoins = q.reward.coins
        ? `<span class="qcard-reward-coin">💰 ${q.reward.coins.toLocaleString()}</span>`
        : "";
      const rewardPotions = q.reward.potions
        ? q.reward.potions
            .map(
              (p) =>
                `<span class="qcard-reward-potion">🧪 ${p.amount}× ${p.type} x${p.mult}</span>`,
            )
            .join("")
        : "";

      container.innerHTML += `
        <div class="qcard${isClaimed ? " qcard-done" : ""}">
          <div class="qcard-top">
            <div class="qcard-title">${q.title}</div>
            ${isClaimed ? '<span class="qcard-claimed-badge">✔ Claimed</span>' : ""}
          </div>
          <div class="qcard-progress-row">
            <div class="qcard-bar-wrap">
              <div class="qcard-bar-fill" style="width:${percent}%; background:${cat.accent}"></div>
            </div>
            <span class="qcard-progress-label">${q.progress} / ${q.target}</span>
          </div>
          <div class="qcard-footer">
            <div class="qcard-rewards">${rewardCoins}${rewardPotions}</div>
            <button class="qcard-claim-btn" onclick="claimQuest('${q.id}')" ${isClaimed || !isDone ? "disabled" : ""}>
              ${isClaimed ? "Claimed" : isDone ? "Claim!" : "Claim"}
            </button>
          </div>
        </div>
      `;
    });
  });
}

function refreshQuestGroup(group) {
  let quests = loadQuests();

  // ambil semua pool sesuai group
  let pool = QUEST_POOL[group];
  if (!pool) {
    console.warn("❌ QUEST_POOL tidak ditemukan untuk:", group);
    return;
  }

  // tentukan jumlah quest aktif
  let limit = 3;
  if (group === "weekly") limit = 2;
  if (group === "monthly") limit = 1;

  // ambil random quest sesuai limit
  let selected = [];
  let poolCopy = [...pool];
  for (let i = 0; i < limit && poolCopy.length > 0; i++) {
    let idx = Math.floor(Math.random() * poolCopy.length);
    selected.push({
      ...poolCopy[idx],
      progress: 0,
      claimed: false,
    });
    poolCopy.splice(idx, 1);
  }

  // simpan quest baru
  quests[group] = selected;

  // ✅ reset timer meta supaya loadQuests() tidak overwrite quest baru ini
  const now = new Date();
  if (!quests.meta) quests.meta = {};
  if (group === "daily") {
    quests.meta.daily = now.toDateString();
  } else if (group === "weekly") {
    quests.meta.weekly = getWeekNumber(now);
  } else if (group === "monthly") {
    quests.meta.monthly = `${now.getFullYear()}-${now.getMonth()}`;
  }

  saveQuests(quests);
  renderQuests();

  showPopup(`✨ ${group.toUpperCase()} quests refreshed!`);
}

function renderAchievements() {
  let data = loadAchievements();
  let container = document.getElementById("achievementTab");
  container.innerHTML = "";

  const normalAchs = data.filter((a) => !a.isCosmeticReward);
  const cosmeticAchs = data.filter((a) => a.isCosmeticReward);

  // ── Normal Achievements ──
  container.innerHTML += `
          <div class="qsec-header">
            <div class="qsec-left">
              <span class="qsec-icon">🏅</span>
              <span class="qsec-title" style="color:#ffd700">Achievements</span>
              <span class="qsec-count">${normalAchs.filter((a) => a.claimed).length}/${normalAchs.length}</span>
            </div>
          </div>`;

  normalAchs.forEach((a) => {
    const percent = Math.min(100, (a.progress / a.target) * 100);
    const isDone = a.progress >= a.target;
    container.innerHTML += `
            <div class="qcard${a.claimed ? " qcard-done" : ""}">
              <div class="qcard-top">
                <div class="qcard-title">${a.title}</div>
                ${a.claimed ? '<span class="qcard-claimed-badge">✔ Unlocked</span>' : ""}
              </div>
              <div class="qcard-progress-row">
                <div class="qcard-bar-wrap">
                  <div class="qcard-bar-fill" style="width:${percent}%; background:#ffd700"></div>
                </div>
                <span class="qcard-progress-label">${a.progress} / ${a.target}</span>
              </div>
              <div class="qcard-footer">
                <div class="qcard-rewards">
                  <span class="qcard-reward-coin">💰 ${a.reward.coins?.toLocaleString()}</span>
                  ${a.badge ? `<div class="qcard-badge-mini"><img src="${a.badge}" alt="badge" loading="lazy"/></div>` : ""}
                </div>
                <button class="qcard-claim-btn" onclick="claimAchievement('${a.id}')" ${a.claimed ? "disabled" : ""}>
                  ${a.claimed ? "Claimed" : isDone ? "Claim!" : "Claim"}
                </button>
              </div>
            </div>`;
  });

  // ── Cosmetic Achievements ──
  container.innerHTML += `
          <div class="qsec-header" style="margin-top:8px">
            <div class="qsec-left">
              <span class="qsec-icon">✨</span>
              <span class="qsec-title" style="color:#b97fff">Kosmetik Achievement</span>
              <span class="qsec-count">${cosmeticAchs.filter((a) => a.claimed).length}/${cosmeticAchs.length}</span>
            </div>
          </div>
          <p class="achievement-hint">Selesaikan tantangan ini untuk unlock Frame & Banner eksklusif!</p>`;

  cosmeticAchs.forEach((a) => {
    const percent = Math.min(100, (a.progress / a.target) * 100);
    const cosType = a.reward.cosmetic?.type;
    const cosId = a.reward.cosmetic?.id;
    const alreadyOwned = isCosmeticUnlocked(cosType, cosId);
    const isComingSoon = !!a.comingSoon;
    const isDone = a.progress >= a.target;

    let previewHtml = "";
    if (cosType === "frame") {
      const f = PRF_FRAMES.find((x) => x.id === cosId);
      previewHtml = `<div class="ach-frame-circle" style="${f ? f.style : ""}"></div>`;
    } else if (cosType === "banner") {
      const b = PRF_BANNERS.find((x) => x.id === cosId);
      previewHtml = `<div class="ach-banner-strip" style="background:${b ? b.bg : "#1a1a2e"}">${b ? b.label : ""}</div>`;
    }

    container.innerHTML += `
            <div class="qcard qcard-cosmetic${a.claimed || alreadyOwned ? " qcard-done" : ""}${isComingSoon ? " qcard-coming-soon" : ""}">
              <div class="qcard-top">
                <div class="qcard-title">${a.title}${isComingSoon ? ' <span class="coming-soon-badge">Coming Soon</span>' : ""}</div>
                ${a.claimed || alreadyOwned ? '<span class="qcard-claimed-badge">✔ Dimiliki</span>' : ""}
              </div>
              <div class="qcard-progress-row">
                <div class="qcard-bar-wrap">
                  <div class="qcard-bar-fill" style="width:${percent}%; background:#b97fff"></div>
                </div>
                <span class="qcard-progress-label">${a.progress} / ${a.target}</span>
              </div>
              <div class="qcard-footer">
                <div class="qcard-rewards">
                  <span class="qcard-reward-coin">💰 ${a.reward.coins?.toLocaleString()}</span>
                  ${previewHtml}
                </div>
                <button class="qcard-claim-btn qcard-claim-cosmetic" onclick="claimAchievement('${a.id}')" ${a.claimed || alreadyOwned || isComingSoon ? "disabled" : ""}>
                  ${a.claimed || alreadyOwned ? "Dimiliki" : isComingSoon ? "Coming Soon" : isDone ? "Claim!" : "Claim"}
                </button>
              </div>
            </div>`;
  });
}

function renderProfileAchievements() {
  const container = document.getElementById("profileAchievements");
  if (!container) return;

  const data = loadAchievements(); // ✅ ambil dari fungsi sama
  container.innerHTML = "";

  data.forEach((a) => {
    // Skip achievement yang tidak punya badge (cosmetic reward)
    if (!a.badge) return;

    const img = document.createElement("img");
    img.src = a.badge;
    img.alt = a.title;
    img.loading = "lazy";
    img.className = "achievement-badge";

    if (a.progress >= a.target || a.claimed) {
      img.classList.add("unlocked");
    } else {
      img.classList.add("locked");
    }

    container.appendChild(img);
  });
}

function updateAchievements(event, value = 1) {
  // Pakai loadAchievements() supaya format selalu array & sinkron
  let achievements = loadAchievements();

  const eventMap = {
    rare: ["rare10", "frame_rare"],
    epic: ["epic20", "frame_epic"],
    legend: ["legend5"],
    mythical: ["mythical3", "banner_crimson"],
    prismatic: ["frame_rainbow"],
    secret: ["banner_midnight"],
    roll: ["banner_ocean"],
    sell: [],
  };

  const targets = eventMap[event] || [];

  achievements.forEach((a) => {
    if (!targets.includes(a.id)) return;
    if (a.claimed) return;
    a.progress = Math.min(a.target, (a.progress || 0) + value);
  });

  saveAchievements(achievements);
}

// === Tab Switch ===
function switchQuestTab(tab) {
  document.getElementById("questTab").classList.add("hidden");
  document.getElementById("achievementTab").classList.add("hidden");
  document.getElementById(tab + "Tab").classList.remove("hidden");

  // sync pill active state
  document
    .querySelectorAll(".quest-tab-pill")
    .forEach((p) => p.classList.remove("active"));
  const activePill = document.getElementById("qtab-" + tab);
  if (activePill) activePill.classList.add("active");
}

// === Overlay ===
function updateQuestIndicator() {
  const indicator = document.getElementById("questIndicator");
  if (!indicator) return;

  const quests = loadQuests();
  const achievements = loadAchievements();
  const now = Date.now();

  // Cek quest: ada yang progress >= target dan belum claimed?
  let hasClaimable = false;

  ["daily", "weekly", "monthly"].forEach((cat) => {
    (quests[cat] || []).forEach((q) => {
      if (!q.claimed && q.progress >= q.target) hasClaimable = true;
    });
  });

  // Cek achievement juga
  if (!hasClaimable) {
    achievements.forEach((a) => {
      if (!a.claimed && a.progress >= a.target) hasClaimable = true;
    });
  }

  indicator.classList.toggle("hidden", !hasClaimable);
}

function openQuestOverlay() {
  document.getElementById("questOverlay").classList.add("show");
  switchQuestTab("quest");
  renderQuests();
  renderAchievements();
}

function closeQuestOverlay() {
  document.getElementById("questOverlay").classList.remove("show");
  updateQuestIndicator();
}

function getPotions() {
  return JSON.parse(localStorage.getItem("potions") || "{}");
}

function savePotions(potions) {
  localStorage.setItem("potions", JSON.stringify(potions));
}

function addQuestPotion(type, mult = 1, amount = 1) {
  let potions = getPotions();
  const key = `${type}_${mult}`;
  potions[key] = (potions[key] || 0) + amount;
  savePotions(potions);

  showPopup(`🎯 Kamu dapat ${amount} Potion ${type} dari Quest!`);
}

// === Quest Reset System ===
function maybeResetQuests() {
  const now = Date.now();
  const lastReset = parseInt(localStorage.getItem("lastQuestReset") || "0");

  const ONE_DAY = 86400000; // 24 jam
  const ONE_WEEK = 7 * ONE_DAY;
  const ONE_MONTH = 30 * ONE_DAY; // kira-kira, bisa diganti kalender beneran

  let quests = loadQuests();
  let didReset = false;

  // Reset Daily
  if (now - lastReset >= ONE_DAY) {
    quests.daily = generateDailyQuests(); // bikin ulang quest daily
    didReset = true;
  }

  // Reset Weekly
  if (now - lastReset >= ONE_WEEK) {
    quests.weekly = generateWeeklyQuests();
    didReset = true;
  }

  // Reset Monthly
  if (now - lastReset >= ONE_MONTH) {
    quests.monthly = generateMonthlyQuests();
    didReset = true;
  }

  if (didReset) {
    saveQuests(quests);
    localStorage.setItem("lastQuestReset", now);
    renderQuests();
    console.log("✅ Quests refreshed!");
  }
}
