// Mahsulotlar ma'lumotlar bazasi (O'zbek so'mida)
const productsData = [
  // ===================== 1. SMARTFONLAR =====================
  {
    id: 1,
    name: "Apple iPhone 16 Pro Max 256GB Desert Titanium",
    category: "smartfon",
    categoryName: "Smartfon",
    price: 18450000,
    oldPrice: 19900000,
    rating: 4.9,
    reviewsCount: 42,
    badge: "Xit savdo",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Apple A18 Pro (3 nm)",
      ram: "8 GB",
      xotira: "256 GB NVMe",
      ekran: "6.9\" Super Retina XDR OLED, 120Hz",
      kamera: "48 MP + 48 MP + 12 MP (5x optik zoom)",
      batareya: "4685 mAh, tezkor quvvatlash"
    },
    description: "Eng so'nggi flagman iPhone 16 Pro Max titan korpus, ilg'or A18 Pro protsessori va aqlbovar qilmas suratga olish imkoniyatlari bilan."
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra 512GB Titanium Gray",
    category: "smartfon",
    categoryName: "Smartfon",
    price: 16200000,
    oldPrice: 17500000,
    rating: 4.8,
    reviewsCount: 38,
    badge: "Yangi",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Snapdragon 8 Gen 3 for Galaxy",
      ram: "12 GB LPDDR5X",
      xotira: "512 GB UFS 4.0",
      ekran: "6.8\" Dynamic LTPO AMOLED 2X, 2600 nit",
      kamera: "200 MP + 50 MP + 12 MP + 10 MP",
      batareya: "5000 mAh, 45W tezkor quvvatlash"
    },
    description: "Galaxy AI sun'iy intellekt xususiyatlari, o'rnatilgan S-Pen stilus va 200 MP ultra aniq kamera bilan mukammal smartfon."
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra 512GB Leica Photography",
    category: "smartfon",
    categoryName: "Smartfon",
    price: 13800000,
    oldPrice: 14900000,
    rating: 4.7,
    reviewsCount: 25,
    badge: "Tavsiya",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Qualcomm Snapdragon 8 Gen 3",
      ram: "16 GB",
      xotira: "512 GB",
      ekran: "6.73\" LTPO AMOLED, 120Hz, 3000 nit",
      kamera: "To'rtta 50 MP Leica linzalari",
      batareya: "5000 mAh, 90W HyperCharge"
    },
    description: "Professional Leica optikasi bilan professional fotosuratchilar va video yaratuvchilar uchun ideal smartfon."
  },
  {
    id: 4,
    name: "Honor Magic 6 Pro 512GB Epi Green",
    category: "smartfon",
    categoryName: "Smartfon",
    price: 12300000,
    oldPrice: 13500000,
    rating: 4.8,
    reviewsCount: 19,
    badge: "Chegirma",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Snapdragon 8 Gen 3",
      ram: "12 GB",
      xotira: "512 GB",
      ekran: "6.8\" LTPO OLED, 1-120Hz, 5000 nit",
      kamera: "180 MP periskop telefoto + 50 MP + 50 MP",
      batareya: "5600 mAh kremniy-uglerod batareya"
    },
    description: "Rekord darajadagi 5600 mAh batareya quvvati va 180 megapikselli periskop optikaga ega flagman."
  },

  // ===================== 2. NOTEBOOKLAR =====================
  {
    id: 5,
    name: "Apple MacBook Pro 16\" M3 Max (36GB / 1TB SSD)",
    category: "notebook",
    categoryName: "Notebook",
    price: 43500000,
    oldPrice: 46000000,
    rating: 5.0,
    reviewsCount: 31,
    badge: "Top Flagman",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Apple M3 Max (14 yadroli CPU, 30 yadroli GPU)",
      ram: "36 GB Unified Memory",
      xotira: "1 TB Superfast SSD",
      ekran: "16.2\" Liquid Retina XDR, ProMotion 120Hz",
      batareya: "22 soatgacha uzluksiz ishlash"
    },
    description: "Dasturchilar, 3D mutaxassislar va video montajchilar uchun tengsiz quvvatga ega noutbuk."
  },
  {
    id: 6,
    name: "ASUS ROG Zephyrus G16 OLED (i9-14900HX / RTX 4080)",
    category: "notebook",
    categoryName: "Notebook",
    price: 36800000,
    oldPrice: 39000000,
    rating: 4.9,
    reviewsCount: 22,
    badge: "Gaming Xit",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core i9-14900HX (24 yadro)",
      videokarta: "NVIDIA GeForce RTX 4080 12GB GDDR6",
      ram: "32 GB DDR5 5600MHz",
      xotira: "2 TB NVMe PCIe 4.0 SSD",
      ekran: "16\" ROG Nebula OLED 2.5K 240Hz"
    },
    description: "O'ta yupqa alyuminiy korpusli, kuchli o'yin va grafik vazifalar uchun mo'ljallangan ROG noutbuki."
  },
  {
    id: 7,
    name: "Lenovo Legion Pro 7 Gen 9 (Ryzen 9 / RTX 4070)",
    category: "notebook",
    categoryName: "Notebook",
    price: 27500000,
    oldPrice: 29500000,
    rating: 4.8,
    reviewsCount: 29,
    badge: "Ommabop",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "AMD Ryzen 9 7945HX (16 yadro, 32 oqim)",
      videokarta: "NVIDIA GeForce RTX 4070 8GB 140W",
      ram: "32 GB DDR5 5200MHz",
      xotira: "1 TB M.2 NVMe SSD",
      ekran: "16\" WQXGA (2560x1600) IPS 240Hz"
    },
    description: "Kuchli Coldfront 5.0 sovutish tizimi va yuqori chastotali ekranga ega ishonchli o'yin noutbuki."
  },
  {
    id: 8,
    name: "HP Spectre x360 2-in-1 (Intel Core Ultra 7 / 1TB)",
    category: "notebook",
    categoryName: "Notebook",
    price: 19800000,
    oldPrice: 21200000,
    rating: 4.7,
    reviewsCount: 17,
    badge: "Biznes",
    image: "https://images.unsplash.com/photo-1544731612-de292439cc4f?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core Ultra 7 155H (AI Boost)",
      ram: "16 GB LPDDR5x",
      xotira: "1 TB PCIe Gen4 SSD",
      ekran: "14\" 2.8K OLED Sensorli 360° aylanuvchi",
      stilus: "HP Rechargeable MPP2.0 Tilt Pen komplektda"
    },
    description: "Nafis dizayn, sensorli aylanuvchi ekran va biznes taqdimotlari uchun ideal transformator noutbuk."
  },

  // ===================== 3. PC (KOMPYUTERLAR) =====================
  {
    id: 9,
    name: "CyberBeast Ultra Gaming PC (i9-14900K / RTX 4090 24GB)",
    category: "pc",
    categoryName: "PC (Kompyuter)",
    price: 49500000,
    oldPrice: 53000000,
    rating: 5.0,
    reviewsCount: 15,
    badge: "Maksimal Quvvat",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core i9-14900K (5.8 GHz Turbo)",
      videokarta: "ASUS ROG Strix GeForce RTX 4090 24GB",
      ram: "64 GB DDR5 6400MHz RGB",
      xotira: "2 TB Samsung 990 PRO NVMe + 4 TB HDD",
      sovutish: "NZXT Kraken Elite 360 RGB Suyuqlik sovutish",
      blokPitaniya: "Corsair 1200W 80+ Gold"
    },
    description: "4K ultra o'yinlar, murakkab 3D modellashtirish va sun'iy intellekt (AI) hisoblashlari uchun yirtqich quvvat."
  },
  {
    id: 10,
    name: "Optima BattleStation PC (Core i5-14400F / RTX 4060 8GB)",
    category: "pc",
    categoryName: "PC (Kompyuter)",
    price: 14200000,
    oldPrice: 15500000,
    rating: 4.8,
    reviewsCount: 45,
    badge: "Xit Sotuv",
    image: "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core i5-14400F (10 yadro, 4.7 GHz)",
      videokarta: "GeForce RTX 4060 8GB GDDR6",
      ram: "32 GB DDR5 5600MHz",
      xotira: "1 TB M.2 NVMe SSD 3500MB/s",
      blokPitaniya: "DeepCool 650W 80+ Bronze"
    },
    description: "Barcha zamonaviy o'yinlar va videoni montaj qilish uchun eng ommabop va hamyonbop yig'ma kompyuter."
  },
  {
    id: 11,
    name: "Office Pro Enterprise PC (Core i3-14100 / 16GB / 512GB)",
    category: "pc",
    categoryName: "PC (Kompyuter)",
    price: 5900000,
    oldPrice: 6500000,
    rating: 4.6,
    reviewsCount: 20,
    badge: "Ofis uchun",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core i3-14100 (4 yadro / 8 oqim)",
      ram: "16 GB DDR4 3200MHz",
      xotira: "512 GB NVMe M.2 SSD",
      grafika: "Intel UHD Graphics 730",
      tizim: "Windows 11 Pro o'rnatilgan"
    },
    description: "Ofis ishlari, buxgalteriya 1C, tezkor internet va hisobotlar uchun sifatli va tejamkor kompyuter."
  },

  // ===================== 4. PLANSHETLAR =====================
  {
    id: 12,
    name: "Apple iPad Pro 13\" M4 (256GB Wi-Fi) Space Black",
    category: "planshet",
    categoryName: "Planshet",
    price: 19500000,
    oldPrice: 21000000,
    rating: 4.9,
    reviewsCount: 27,
    badge: "Yangi M4",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Apple M4 chipi (9 yadroli CPU, 10 yadroli GPU)",
      ekran: "13\" Ultra Retina XDR Tandem OLED, 120Hz",
      ram: "8 GB",
      xotira: "256 GB NVMe",
      qalinlik: "5.1 mm (tarixdagi eng yupqa Apple qurilmasi)",
      qollabQuvvatlash: "Apple Pencil Pro va Magic Keyboard"
    },
    description: "Tandem OLED ekrani va inqilobiy Apple M4 chipi bilan jihozlangan dunyodagi eng ilg'or professional planshet."
  },
  {
    id: 13,
    name: "Samsung Galaxy Tab S9 Ultra 512GB (14.6\" Dynamic AMOLED)",
    category: "planshet",
    categoryName: "Planshet",
    price: 15400000,
    oldPrice: 16800000,
    rating: 4.8,
    reviewsCount: 21,
    badge: "Top Android",
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Snapdragon 8 Gen 2 for Galaxy",
      ram: "12 GB RAM",
      xotira: "512 GB + MicroSD 1TB gacha",
      ekran: "14.6\" Dynamic AMOLED 2X, 120Hz, HDR10+",
      himoya: "IP68 suv va changdan to'liq himoyalangan",
      komplekt: "S-Pen qalam to'plamda mavjud"
    },
    description: "Ulkan 14.6 dyuymli ekran, qulay S-Pen va noutbuk o'rnini bosuvchi Samsung DeX rejimi bilan kuchli planshet."
  },
  {
    id: 14,
    name: "Apple iPad Air 11\" M2 (128GB Wi-Fi) Starlight",
    category: "planshet",
    categoryName: "Planshet",
    price: 9400000,
    oldPrice: 10200000,
    rating: 4.8,
    reviewsCount: 34,
    badge: "Ommabop",
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Apple M2 chipi (8-core CPU, 10-core GPU)",
      ekran: "11\" Liquid Retina True Tone displey",
      ram: "8 GB",
      xotira: "128 GB",
      kamera: "12 MP old / 12 MP orqa 4K kamera",
      batareya: "10 soatgacha internet va video tomosha"
    },
    description: "Talabalar, ijodkorlar va kundalik vazifalar uchun quvvatli M2 chipli eng yaxshi balansga ega iPad."
  },
  {
    id: 15,
    name: "Xiaomi Pad 6S Pro 12.4\" (8GB / 256GB, 144Hz)",
    category: "planshet",
    categoryName: "Planshet",
    price: 6800000,
    oldPrice: 7500000,
    rating: 4.7,
    reviewsCount: 18,
    badge: "Arzon & Tezkor",
    image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Qualcomm Snapdragon 8 Gen 2",
      ram: "8 GB LPDDR5X",
      xotira: "256 GB UFS 4.0",
      ekran: "12.4\" 3K (3048x2032) IPS 144Hz 900 nit",
      batareya: "10000 mAh, 120W HyperCharge (35 daqiqada 100%)",
      ovoz: "6 ta Dolby Atmos stereodinamiklar"
    },
    description: "120W o'ta tezkor quvvatlash va 144Hz silliq ekran bilan o'yinlar hamda ish uchun ajoyib narxdagi planshet."
  },

  // ===================== 5. MONOBLOKLAR =====================
  {
    id: 16,
    name: "Apple iMac 24\" 4.5K Retina M3 (16GB / 512GB) Silver",
    category: "monoblok",
    categoryName: "Monoblok",
    price: 24800000,
    oldPrice: 26500000,
    rating: 4.9,
    reviewsCount: 24,
    badge: "Estetika & Tezlik",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Apple M3 chipi (8-core CPU, 10-core GPU)",
      ram: "16 GB Unified Memory",
      xotira: "512 GB SSD",
      ekran: "24\" 4.5K Retina (4480x2520), 500 nit, True Tone",
      komplekt: "Magic Keyboard Touch ID bilan + Magic Mouse"
    },
    description: "Har qanday xona yoki ofis stolini bezab turuvchi ixcham, nafis va Apple M3 kuchiga ega ajoyib monoblok."
  },
  {
    id: 17,
    name: "HP Envy 34 All-in-One 5K Curved (i7-13700 / RTX 3060)",
    category: "monoblok",
    categoryName: "Monoblok",
    price: 31200000,
    oldPrice: 33500000,
    rating: 4.8,
    reviewsCount: 14,
    badge: "Katta 5K Ekran",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core i7-13700 (16 yadro, 5.2 GHz)",
      videokarta: "NVIDIA GeForce RTX 3060 6GB",
      ram: "32 GB DDR5 4800MHz",
      xotira: "1 TB M.2 NVMe PCIe SSD",
      ekran: "34\" WUHD 5K (5120x2160) IPS 21:9",
      ovoz: "Bang & Olufsen premium dinamiklar"
    },
    description: "34 dyuymli ulkan 5K ekranga ega, ko'plab darchalarda bir vaqtda qulay ishlash imkonini beruvchi quvvatli monoblok."
  },
  {
    id: 18,
    name: "Lenovo IdeaCentre AIO 27\" (Core i7-13620H / 16GB / 1TB)",
    category: "monoblok",
    categoryName: "Monoblok",
    price: 13900000,
    oldPrice: 15200000,
    rating: 4.7,
    reviewsCount: 19,
    badge: "Ofis & Uy",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80",
    specs: {
      protsessor: "Intel Core i7-13620H (10 yadro, 4.9 GHz)",
      ram: "16 GB DDR5 5200MHz",
      xotira: "1 TB M.2 PCIe 4.0 SSD",
      ekran: "27\" QHD (2560x1440) IPS ramkasiz ekran",
      qulaylik: "Stendida smartfon uchun simsiz quvvatlagich mavjud"
    },
    description: "Simsiz quvvatlash stendiga ega, ingichka ramkali va zamonaviy interyerga to'liq mos keluvchi 27 dyuymli monoblok."
  }
];

// O'zbek so'mida formatlash funksiyasi
function formatPrice(amount) {
  if (typeof amount !== 'number') amount = Number(amount) || 0;
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
}
