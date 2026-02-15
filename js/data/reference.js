// ═══════════════════════════════════════════════════════════
// REFERENCE DATA — Weather, Timezones, Bucket List, Emergency,
//                  Phrases, Packing, Documents, Currencies, Expenses
// ═══════════════════════════════════════════════════════════

// --- Weather ---
const OWM_API_KEY = '398f8d03e230341df8f6e6602dae9d0f';

const CITY_WEATHER = [
    { name: 'Shanghai', lat: 31.23, lon: 121.47, start: '2026-03-13', end: '2026-03-16', tz: 'Asia/Shanghai' },
    { name: 'Taipei', lat: 25.03, lon: 121.57, start: '2026-03-16', end: '2026-03-19', tz: 'Asia/Taipei' },
    { name: 'Bangkok', lat: 13.76, lon: 100.50, start: '2026-03-19', end: '2026-03-20', tz: 'Asia/Bangkok' },
    { name: 'Krabi', lat: 8.04, lon: 98.84, start: '2026-03-20', end: '2026-03-29', tz: 'Asia/Bangkok' },
    { name: 'Xi\'an', lat: 34.34, lon: 108.94, start: '2026-03-31', end: '2026-04-02', tz: 'Asia/Shanghai' },
    { name: 'Beijing', lat: 39.90, lon: 116.41, start: '2026-04-02', end: '2026-04-07', tz: 'Asia/Shanghai' }
];

const CLIMATE_DATA = {
    'Shanghai': { tempMin: 7, tempMax: 15, rain: 65, desc: 'Fresco, posible lluvia', pack: 'Chaqueta ligera, paraguas' },
    'Taipei': { tempMin: 15, tempMax: 22, rain: 110, desc: 'Templado, lluvia frecuente', pack: 'Chubasquero, ropa ligera' },
    'Bangkok': { tempMin: 26, tempMax: 35, rain: 30, desc: 'Muy caluroso y seco', pack: 'Protector solar, ropa transpirable' },
    'Krabi': { tempMin: 25, tempMax: 33, rain: 120, desc: 'Calor + tormentas tropicales', pack: 'Bañador, chubasquero, mosquitera' },
    'Xi\'an': { tempMin: 7, tempMax: 18, desc: 'Primavera fresca', rain: 30, pack: 'Capas, chaqueta' },
    'Beijing': { tempMin: 5, tempMax: 18, desc: 'Fresco, polvo posible', rain: 15, pack: 'Chaqueta, mascarilla opcional' }
};

// --- Timezones ---
const TIMEZONES = [
    { city: 'Madrid 🇪🇸', tz: 'Europe/Madrid', emoji: '🏠' },
    { city: 'Shanghai 🇨🇳', tz: 'Asia/Shanghai', emoji: '🏙️' },
    { city: 'Taipei 🇹🇼', tz: 'Asia/Taipei', emoji: '🏯' },
    { city: 'Bangkok 🇹🇭', tz: 'Asia/Bangkok', emoji: '🛕' }
];

// --- Currencies ---
const CURRENCIES = [
    { code: 'CNY', name: 'Yuan Chino', symbol: '¥', flag: '🇨🇳', cities: 'Shanghai, Xi\'an, Beijing', color: '#e74c3c' },
    { code: 'TWD', name: 'Dólar Taiwanés', symbol: 'NT$', flag: '🇹🇼', cities: 'Taipei', color: '#1abc9c' },
    { code: 'THB', name: 'Baht Tailandés', symbol: '฿', flag: '🇹🇭', cities: 'Bangkok, Krabi', color: '#9b59b6' }
];

const EXPENSE_CURRENCIES = {
    EUR: { symbol: '€', rate: 1, flag: '🇪🇺' },
    CNY: { symbol: '¥', rate: 0.13, flag: '🇨🇳' },
    TWD: { symbol: 'NT$', rate: 0.029, flag: '🇹🇼' },
    THB: { symbol: '฿', rate: 0.026, flag: '🇹🇭' }
};

const EXPENSE_CATEGORIES = [
    { id: 'food', emoji: '🍜', label: 'Comida' },
    { id: 'transport', emoji: '🚕', label: 'Transporte' },
    { id: 'hotel', emoji: '🏨', label: 'Alojamiento' },
    { id: 'activities', emoji: '🎯', label: 'Actividades' },
    { id: 'shopping', emoji: '🛍️', label: 'Compras' },
    { id: 'other', emoji: '📎', label: 'Otros' }
];

// --- Packing List ---
const PACKING_DATA = {
    essentials: [
        { item: '🛂 Pasaportes (vigentes 6+ meses)', qty: 2, critical: true },
        { item: '💳 Tarjetas: Revolut + N26 + backup Visa', qty: 3, critical: true },
        { item: '📱 Móviles + cargadores USB-C', qty: 2, critical: true },
        { item: '🔌 Adaptador universal de enchufe', qty: 1, critical: true },
        { item: '🔋 Power bank 20000mAh', qty: 1, critical: true },
        { item: '📄 Copias impresas: reservas vuelos + hoteles', qty: 1, critical: true },
        { item: '🏥 Seguro médico internacional (doc impreso)', qty: 1, critical: true },
        { item: '💊 Botiquín: ibuprofeno, antidiarreicos, tiritas', qty: 1, critical: true },
        { item: '🔒 Candado TSA para maleta', qty: 2, critical: false }
    ],
    clothing_cold: [
        { item: '🧥 Chaqueta ligera / cortavientos', qty: 1, for: 'Shanghai, Xi\'an, Beijing' },
        { item: '👖 Pantalones largos', qty: 3, for: 'China general' },
        { item: '🧣 Bufanda fina', qty: 1, for: 'Beijing (5-18°)' },
        { item: '👟 Zapatillas cómodas para andar', qty: 1, for: 'Todo el viaje' }
    ],
    clothing_hot: [
        { item: '👕 Camisetas ligeras', qty: 6, for: 'Bangkok, Krabi (25-35°)' },
        { item: '🩳 Pantalones cortos', qty: 3, for: 'Tailandia' },
        { item: '🩱 Bañador', qty: 2, for: 'Krabi 🏖️' },
        { item: '🩴 Chanclas / sandalias', qty: 1, for: 'Tailandia + playas' },
        { item: '👗 Ropa de templo (hombros + rodillas cubiertos)', qty: 1, for: 'Bangkok templos' }
    ],
    tech: [
        { item: '📷 Cámara + tarjeta SD extra', qty: 1 },
        { item: '🎧 Auriculares + adaptador avión', qty: 1 },
        { item: '📶 eSIM Asia (Airalo / Holafly)', qty: 2, critical: true, note: 'China: necesita VPN' },
        { item: '🔐 VPN instalada (ExpressVPN / NordVPN)', qty: 1, critical: true, note: 'Para Google/WhatsApp en China' },
        { item: '📲 Apps: WeChat, Alipay, Grab, Google Maps offline', qty: 1, critical: true }
    ],
    weather: [
        { item: '☂️ Paraguas plegable', qty: 1, for: 'Taipei (110mm lluvia) + Krabi' },
        { item: '🧴 Protector solar SPF50', qty: 1, for: 'Bangkok + Krabi' },
        { item: '🦟 Repelente antimosquitos', qty: 1, for: 'Krabi + Bangkok' },
        { item: '😷 Mascarilla FFP2', qty: 2, for: 'Beijing (polvo primaveral)' },
        { item: '🌧️ Chubasquero fino', qty: 1, for: 'Taipei + Krabi (tormentas)' }
    ]
};

// --- Document Vault Types ---
const DOC_TYPES = [
    { id: 'passport_iker', label: '🛂 Pasaporte Iker', critical: true },
    { id: 'passport_anais', label: '🛂 Pasaporte Anais', critical: true },
    { id: 'seguro_medico', label: '🏥 Seguro médico', critical: true },
    { id: 'visa_china', label: '🇨🇳 Visado China', critical: true },
    { id: 'vuelo_mad_pvg', label: '✈️ Vuelo MAD→PVG', critical: false },
    { id: 'vuelo_pvg_tpe', label: '✈️ Vuelo PVG→TPE', critical: false },
    { id: 'vuelo_tpe_bkk', label: '✈️ Vuelo TPE→BKK', critical: false },
    { id: 'vuelo_bkk_kbv', label: '✈️ Vuelo BKK→KBV', critical: false },
    { id: 'vuelo_kbv_dmk', label: '✈️ Vuelo KBV→DMK', critical: false },
    { id: 'vuelo_dmk_xiy', label: '✈️ Vuelo DMK→XIY', critical: false },
    { id: 'vuelo_pkx_mad', label: '✈️ Vuelo PKX→MAD', critical: false },
    { id: 'hotel_shanghai', label: '🏨 Hotel Shanghai', critical: false },
    { id: 'hotel_bangkok', label: '🏨 Hotel Bangkok', critical: false },
    { id: 'hotel_krabi', label: '🏨 Hotel Krabi', critical: false },
    { id: 'hotel_xian', label: '🏨 Hotel Xi\'an', critical: false },
    { id: 'hotel_amsterdam', label: '🏨 Hotel Ámsterdam', critical: false },
    { id: 'tarjeta_revolut', label: '💳 Tarjeta Revolut', critical: false },
    { id: 'esim_info', label: '📶 Info eSIM', critical: false },
    { id: 'otros', label: '📎 Otros docs', critical: false }
];

// --- Bucket List ---
const BUCKET_LIST = [
    {
        city: 'Shanghai', flag: '🇨🇳', items: [
            { id: 'sh1', text: '🌃 Ver el Bund de noche (skyline de Pudong iluminado)', must: true },
            { id: 'sh2', text: '🏯 Pasear por el Jardín Yuyuan + bazar', must: true },
            { id: 'sh3', text: '🍜 Probar xiaolongbao auténtico (Din Tai Fung o Jia Jia)', must: true },
            { id: 'sh4', text: '🚄 Montar en el Maglev a 430 km/h', must: false },
            { id: 'sh5', text: '🛍️ Nanjing Road — calle peatonal de shopping', must: false },
            { id: 'sh6', text: '📸 Foto desde Shanghai Tower (observatorio 632m)', must: false },
            { id: 'sh7', text: '🥟 Cena callejera en Tianzifang (barrio artístico)', must: false }
        ]
    },
    {
        city: 'Taipei', flag: '🇹🇼', items: [
            { id: 'tp1', text: '🏮 Shilin Night Market (comida callejera épica)', must: true },
            { id: 'tp2', text: '🏯 Templo Longshan + barrio Wanhua', must: true },
            { id: 'tp3', text: '🧋 Bubble tea original (encontrar la mejor bolería)', must: true },
            { id: 'tp4', text: '⛩️ Jiufen — pueblo de "El Viaje de Chihiro"', must: true },
            { id: 'tp5', text: '🍖 Probar beef noodle soup (plato nacional)', must: false },
            { id: 'tp6', text: '🏔️ Elephant Mountain atardecer con vistas Taipei 101', must: false },
            { id: 'tp7', text: '🎌 Barrio japonés Ximending', must: false }
        ]
    },
    {
        city: 'Bangkok', flag: '🇹🇭', items: [
            { id: 'bk1', text: '⛪ Gran Palacio + Wat Phra Kaew (Buda Esmeralda)', must: true },
            { id: 'bk2', text: '🛶 Mercado flotante Damnoen Saduak o Amphawa', must: true },
            { id: 'bk3', text: '🍛 Pad Thai callejero en Khao San Road', must: true },
            { id: 'bk4', text: '🛕 Wat Arun al atardecer', must: false },
            { id: 'bk5', text: '💆 Masaje tailandés (Wat Pho — cuna del masaje)', must: false },
            { id: 'bk6', text: '🌃 Rooftop bar con vistas al skyline', must: false }
        ]
    },
    {
        city: 'Krabi', flag: '🇹🇭', items: [
            { id: 'kr1', text: '🏖️ Railay Beach (solo accesible en barco)', must: true },
            { id: 'kr2', text: '🛶 Tour 4 islas (Koh Poda, Tup, Chicken, Phra Nang)', must: true },
            { id: 'kr3', text: '🌅 Atardecer desde Ao Nang Beach', must: true },
            { id: 'kr4', text: '🤿 Snorkel en Koh Phi Phi o Hong Island', must: true },
            { id: 'kr5', text: '🐒 Tiger Cave Temple (1260 escalones, vistas 360°)', must: false },
            { id: 'kr6', text: '🍤 Cena de mariscos en Ao Nang seafood market', must: false },
            { id: 'kr7', text: '🛶 Kayak por los manglares de Ao Thalane', must: false },
            { id: 'kr8', text: '🧗 Escalada en Railay (nivel principiante disponible)', must: false }
        ]
    },
    {
        city: 'Xi\'an', flag: '🇨🇳', items: [
            { id: 'xa1', text: '🪖 Guerreros de Terracota (8000 figuras, Patrimonio UNESCO)', must: true },
            { id: 'xa2', text: '🍜 Muslim Quarter — comida callejera musulmana Xi\'an', must: true },
            { id: 'xa3', text: '🏰 Muralla de la ciudad en bici (13.7 km, la mejor de China)', must: true },
            { id: 'xa4', text: '🕌 Gran Mezquita de Xi\'an (fusión china-islámica)', must: false },
            { id: 'xa5', text: '🥟 Biángbiáng noodles (los fideos más anchos del mundo)', must: false },
            { id: 'xa6', text: '🏮 Torre de la Campana + Torre del Tambor de noche', must: false }
        ]
    },
    {
        city: 'Beijing', flag: '🇨🇳', items: [
            { id: 'bj1', text: '🏯 Ciudad Prohibida (Palacio Imperial, ¡reservar!) ', must: true },
            { id: 'bj2', text: '🧱 Gran Muralla (sección Mutianyu — menos turistas)', must: true },
            { id: 'bj3', text: '🦆 Pato Pekín auténtico (Da Dong o Quanjude)', must: true },
            { id: 'bj4', text: '🏟️ Nido de Pájaro + Cubo de Agua (Olímpicos)', must: false },
            { id: 'bj5', text: '⛩️ Templo del Cielo — madrugón para ver tai chi', must: false },
            { id: 'bj6', text: '🛍️ Hutongs en rickshaw (barrios tradicionales)', must: false },
            { id: 'bj7', text: '🍢 Wangfujing Night Market (comida exótica en pinchos)', must: false }
        ]
    }
];

// --- Emergency ---
const EMERGENCY_DATA = [
    { country: 'China 🇨🇳', cc: 'cn', police: '110', ambulance: '120', fire: '119', embassy: '🇪🇸 Embajada de España', embassyPhone: '+86 10 6532 3629', embassyAddr: 'Sanlitun Dongwujie 9, Beijing', consulates: 'Shanghai: +86 21 6321 3543', notes: 'WeChat es esencial · VPN necesaria · Alipay para pagos' },
    { country: 'Taiwán 🇹🇼', cc: 'tw', police: '110', ambulance: '119', fire: '119', embassy: '🇪🇸 Oficina Comercial de España', embassyPhone: '+886 2 2518 4901', embassyAddr: 'Room 10F, 205 Dunhua N. Rd, Taipei', consulates: '', notes: 'Google/WhatsApp funcionan · Tarjetas aceptadas · Muy seguro' },
    { country: 'Tailandia 🇹🇭', cc: 'th', police: '191', ambulance: '1669', fire: '199', embassy: '🇪🇸 Embajada de España', embassyPhone: '+66 2 661 8284', embassyAddr: 'Lake Rajada Office Complex, Bangkok', consulates: 'Tourist police: 1155 (hablan inglés)', notes: 'Grab para taxis · Nunca pisar moneda (delito) · Seguro viaje importante' }
];

// --- Phrases ---
const PHRASES_DATA = [
    {
        country: 'Chino Mandarín 🇨🇳', cc: 'cn', phrases: [
            { es: 'Hola', local: '你好', pron: 'Nǐ hǎo' },
            { es: 'Gracias', local: '谢谢', pron: 'Xiè xie' },
            { es: '¿Cuánto cuesta?', local: '多少钱？', pron: 'Duō shao qián?' },
            { es: 'No entiendo', local: '我不懂', pron: 'Wǒ bù dǒng' },
            { es: 'La cuenta, por favor', local: '买单', pron: 'Mǎi dān' },
            { es: '¿Dónde está…?', local: '…在哪里？', pron: '…zài nǎlǐ?' },
            { es: 'Ayuda', local: '帮帮我', pron: 'Bāng bāng wǒ' },
            { es: 'Baño', local: '洗手间', pron: 'Xǐshǒujiān' },
            { es: 'Hotel', local: '酒店', pron: 'Jiǔdiàn' },
            { es: 'Taxi / Llevar a…', local: '请带我去…', pron: 'Qǐng dài wǒ qù…' }
        ]
    },
    {
        country: 'Tailandés 🇹🇭', cc: 'th', phrases: [
            { es: 'Hola', local: 'สวัสดี', pron: 'Sawàtdii (kráp/kà)' },
            { es: 'Gracias', local: 'ขอบคุณ', pron: 'Kòrp kun (kráp/kà)' },
            { es: '¿Cuánto cuesta?', local: 'ราคาเท่าไหร่?', pron: 'Raakaa tâo rài?' },
            { es: 'No entiendo', local: 'ไม่เข้าใจ', pron: 'Mâi kâo jai' },
            { es: 'La cuenta', local: 'เช็คบิล', pron: 'Check bin' },
            { es: '¿Dónde está…?', local: '…อยู่ที่ไหน?', pron: '…yùu tîi nǎi?' },
            { es: 'Ayuda', local: 'ช่วยด้วย', pron: 'Chûay dûay' },
            { es: 'Baño', local: 'ห้องน้ำ', pron: 'Hông náam' },
            { es: 'Hospital', local: 'โรงพยาบาล', pron: 'Roong payaabaan' },
            { es: 'No picante', local: 'ไม่เผ็ด', pron: 'Mâi pèt' }
        ]
    }
];
