// ═══════════════════════════════════════════════════════════
// GUIDES DATA — Food, eSIM, Apps, Scams, City Photos
// ═══════════════════════════════════════════════════════════

const CITY_PHOTOS = {
    shanghai: { url: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=800&q=80', credit: 'The Bund skyline' },
    taipei: { url: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80', credit: 'Taipei 101' },
    bangkok1: { url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80', credit: 'Wat Arun' },
    krabi: { url: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', credit: 'Railay Beach' },
    bangkok2: { url: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80', credit: 'Wat Arun' },
    xian: { url: 'https://images.unsplash.com/photo-1591122947157-26bad3a117d2?w=800&q=80', credit: 'City Wall' },
    beijing: { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80', credit: 'Forbidden City' }
};

const CITY_FOOD = {
    shanghai: [
        { dish: '小笼包 Xiaolongbao', desc: 'Dumplings al vapor con caldo caliente', must: true, where: 'Din Tai Fung / Jia Jia Tang Bao', price: '~30-50 CNY' },
        { dish: '生煎包 Shengjian Bao', desc: 'Dumplings fritos crujientes', must: true, where: 'Yang\'s Dumplings', price: '~15 CNY' },
        { dish: '红烧肉 Hong Shao Rou', desc: 'Cerdo estofado caramelizado', must: false, where: 'Restaurantes locales', price: '~40 CNY' },
        { dish: '葱油拌面 Scallion Oil Noodles', desc: 'Fideos con aceite de cebolleta', must: false, where: 'Callejones del centro', price: '~12 CNY' },
        { dish: '蟹黄汤包 Crab Soup Dumpling', desc: 'Dumpling gigante con sopa de cangrejo', must: false, where: 'Nan Xiang', price: '~50 CNY' }
    ],
    taipei: [
        { dish: '牛肉面 Beef Noodle Soup', desc: 'Sopa de fideos con ternera estofada', must: true, where: 'Yong Kang Beef Noodles', price: '~200 TWD' },
        { dish: 'Bubble Tea 🧋', desc: 'Té con leche y perlas de tapioca', must: true, where: 'Tiger Sugar / 50 Lan', price: '~50-80 TWD' },
        { dish: 'Gua Bao 刈包', desc: 'Pan taiwanés con cerdo estofado', must: true, where: 'Shilin Night Market', price: '~60 TWD' },
        { dish: 'Stinky Tofu 臭豆腐', desc: 'Tofu fermentado frito — ¡hay que probarlo!', must: false, where: 'Night markets', price: '~50 TWD' },
        { dish: 'Pollo frito taiwanés 雞排', desc: 'Filete de pollo gigante empanado', must: false, where: 'Hot Star', price: '~70 TWD' }
    ],
    bangkok1: [
        { dish: 'Pad Thai', desc: 'Fideos salteados con gambas y cacahuete', must: true, where: 'Thip Samai', price: '~80 THB' },
        { dish: 'Som Tam 🥗', desc: 'Ensalada de papaya verde picante', must: true, where: 'Callejeros', price: '~50 THB' },
        { dish: 'Tom Yum Kung', desc: 'Sopa picante de langostinos', must: true, where: 'P\' Aor', price: '~100 THB' },
        { dish: 'Mango Sticky Rice', desc: 'Arroz pegajoso con mango y leche de coco', must: false, where: 'Callejeros / mercados', price: '~60 THB' },
        { dish: 'Boat Noodles', desc: 'Fideos con caldo intenso (porciones pequeñas)', must: false, where: 'Victory Monument', price: '~20 THB' }
    ],
    krabi: [
        { dish: 'Seafood BBQ 🦐', desc: 'Marisco a la brasa frente al mar', must: true, where: 'Ao Nang seafood restaurants', price: '~300 THB' },
        { dish: 'Massaman Curry', desc: 'Curry suave con cacahuetes y patata', must: true, where: 'Restaurantes locales', price: '~80 THB' },
        { dish: 'Roti con plátano', desc: 'Crepe frito con plátano y chocolate', must: false, where: 'Puestos callejeros Ao Nang', price: '~40 THB' },
        { dish: 'Pad Kra Pao', desc: 'Carne salteada con albahaca y huevo frito', must: false, where: 'Cualquier restaurante', price: '~60 THB' }
    ],
    bangkok2: [],
    xian: [
        { dish: '肉夹馍 Rou Jia Mo', desc: 'Hamburguesa china con cerdo especiado', must: true, where: 'Muslim Quarter', price: '~15 CNY' },
        { dish: 'Biang Biang Noodles', desc: 'Fideos anchos con salsa picante', must: true, where: 'Muslim Quarter', price: '~20 CNY' },
        { dish: '羊肉泡馍 Yang Rou Pao Mo', desc: 'Sopa de cordero con pan desmenuzado', must: false, where: 'Old Sun Family', price: '~35 CNY' },
        { dish: 'Persimmon Cake 柿子饼', desc: 'Pastel de caqui frito', must: false, where: 'Muslim Quarter', price: '~5 CNY' }
    ],
    beijing: [
        { dish: '北京烤鸭 Pato Pekín', desc: 'Pato laqueado cortado en mesa', must: true, where: 'Da Dong / QuanJuDe', price: '~200 CNY' },
        { dish: 'Jianbing 煎饼', desc: 'Crepe callejero con huevo, crujiente y salsa', must: true, where: 'Callejeros (mañana)', price: '~8 CNY' },
        { dish: 'Zhajiang Mian 炸酱面', desc: 'Fideos con salsa de soja y cerdo', must: false, where: 'Noodle houses', price: '~25 CNY' },
        { dish: 'Hot Pot 火锅', desc: 'Fondue china picante — elige ingredientes', must: true, where: 'Haidilao', price: '~100 CNY' },
        { dish: 'Tanbingtang Lamb Skewers', desc: 'Brochetas de cordero con comino', must: false, where: 'Wangfujing / callejeros', price: '~10 CNY' }
    ]
};

const ESIM_DATA = {
    provider: 'Holafly',
    logo: '📶',
    plans: [
        { region: 'China', days: '5/10/15/20/30 días', data: 'Datos ilimitados', price: 'Desde 19€', note: '⚠️ VPN INCLUIDA — acceso a Google, WhatsApp, Instagram', url: 'https://www.holafly.com/esim-china' },
        { region: 'Taiwán', days: '5/10/15/20/30 días', data: 'Datos ilimitados', price: 'Desde 19€', note: '✅ Sin restricciones', url: 'https://www.holafly.com/esim-taiwan' },
        { region: 'Tailandia', days: '5/10/15/20/30 días', data: 'Datos ilimitados', price: 'Desde 19€', note: '✅ Sin restricciones', url: 'https://www.holafly.com/esim-tailandia' }
    ],
    vpn: {
        china_reason: '🚫 En China están bloqueados: Google, WhatsApp, Instagram, Facebook, YouTube, Gmail',
        solution: '✅ Holafly China incluye VPN automática — no necesitas configurar nada',
        backup: 'Como backup: descargar ExpressVPN o NordVPN ANTES de llegar a China',
        tip: '💡 Descarga offline: Google Maps (mapas), series/películas, música'
    },
    steps: [
        '1️⃣ Comprar eSIM en holafly.com (recibes QR por email)',
        '2️⃣ Ir a Ajustes → Datos móviles → Añadir plan eSIM',
        '3️⃣ Escanear QR de Holafly',
        '4️⃣ Activar eSIM al aterrizar (no antes)',
        '5️⃣ Mantener SIM española para llamadas/SMS'
    ]
};

const APPS_DATA = [
    { name: 'Holafly', icon: '📶', desc: 'eSIM — gestionar datos', platform: 'iOS/Android', essential: true, url: 'https://apps.apple.com/app/holafly-esim/id1498aborto1', category: 'connectivity' },
    { name: 'WeChat', icon: '💬', desc: 'Mensajería + pagos en China', platform: 'iOS/Android', essential: true, url: 'https://apps.apple.com/app/wechat/id414478124', category: 'china' },
    { name: 'Alipay', icon: '💰', desc: 'Pagos en China (aceptan Visa)', platform: 'iOS/Android', essential: true, url: 'https://apps.apple.com/app/alipay/id333206289', category: 'china' },
    { name: 'Grab', icon: '🚗', desc: 'Uber de Sudeste Asiático (Thai)', platform: 'iOS/Android', essential: true, url: 'https://apps.apple.com/app/grab/id647268330', category: 'thailand' },
    { name: 'Google Translate', icon: '🌐', desc: 'Tradución con cámara offline', platform: 'iOS/Android', essential: true, url: 'https://apps.apple.com/app/google-translate/id414706506', category: 'general' },
    { name: 'Maps.me', icon: '🗺️', desc: 'Mapas offline (backup sin datos)', platform: 'iOS/Android', essential: true, url: 'https://apps.apple.com/app/maps-me/id510623322', category: 'general' },
    { name: 'MetroMan', icon: '🚇', desc: 'Metro de todas las ciudades asiáticas', platform: 'iOS/Android', essential: false, url: 'https://apps.apple.com/app/metroman/id466351020', category: 'transport' },
    { name: 'XE Currency', icon: '💱', desc: 'Conversor de divisas offline', platform: 'iOS/Android', essential: false, url: 'https://apps.apple.com/app/xe-currency/id315241195', category: 'general' },
    { name: 'DiDi', icon: '🚕', desc: 'Uber de China', platform: 'iOS/Android', essential: false, url: 'https://apps.apple.com/app/didi/id554499054', category: 'china' },
    { name: 'Trip.com', icon: '✈️', desc: 'Gestionar reservas vuelos/hoteles', platform: 'iOS/Android', essential: false, url: 'https://apps.apple.com/app/trip-com/id681752345', category: 'general' },
    { name: 'Foodpanda', icon: '🍔', desc: 'Delivery comida en Tailandia', platform: 'iOS/Android', essential: false, url: 'https://apps.apple.com/app/foodpanda/id758103884', category: 'thailand' },
    { name: 'ExpressVPN', icon: '🔒', desc: 'VPN backup para China', platform: 'iOS/Android', essential: false, url: 'https://apps.apple.com/app/expressvpn/id886492891', category: 'china' }
];

const SCAM_TIPS = [
    {
        city: 'Shanghai', flag: '🇨🇳', tips: [
            { type: 'scam', title: 'Tea House Scam', desc: 'Chicas te invitan a "practicar inglés" y acaban en un salón de té con cuenta de 500€+. NUNCA aceptar.' },
            { type: 'scam', title: 'Taxi sin taxímetro', desc: 'Nunca subas a taxi sin taxímetro encendido. Usa DiDi o el metro.' },
            { type: 'tip', title: 'Pagos', desc: 'Casi nadie acepta efectivo. Configura Alipay/WeChat Pay antes de ir.' },
            { type: 'tip', title: 'VPN', desc: 'Activar VPN/eSIM Holafly NADA MÁS aterrizar. Sin VPN no hay Google ni WhatsApp.' }
        ]
    },
    {
        city: 'Taipei', flag: '🇹🇼', tips: [
            { type: 'tip', title: 'Night Markets', desc: 'Los night markets son seguros. Los precios son fijos, no hace falta regatear.' },
            { type: 'tip', title: 'EasyCard', desc: 'Comprar EasyCard en 7-Eleven nada más llegar. Sirve para metro, bus, tiendas.' },
            { type: 'scam', title: 'Taxi al aeropuerto', desc: 'Usa solo taxis del sistema oficial del aeropuerto (cola señalizada).' }
        ]
    },
    {
        city: 'Bangkok', flag: '🇹🇭', tips: [
            { type: 'scam', title: 'Tuk-tuk "tours"', desc: 'Tuk-tuks que ofrecen tours gratis te llevan a tiendas donde cobran comisión. Di NO.' },
            { type: 'scam', title: 'Templo cerrado', desc: '"El templo está cerrado hoy" + te ofrecen alternativa = estafa. Entra directamente.' },
            { type: 'scam', title: 'Jet ski en playa', desc: 'Te acusan de dañar el jet ski y piden compensación absurda. No alquilar.' },
            { type: 'tip', title: 'Grab > taxi', desc: 'Siempre Grab. Los taxis a veces no encienden el taxímetro.' },
            { type: 'tip', title: 'Moneda', desc: '1000 THB ≈ 26€. Los billetes de 1000 son comunes, no te alarmes.' }
        ]
    },
    {
        city: 'Krabi', flag: '🇹🇭', tips: [
            { type: 'tip', title: 'Long-tail boats', desc: 'Negociar precio ANTES de subir. Preguntar a varios barqueros.' },
            { type: 'tip', title: 'Railay Beach', desc: 'Solo accesible por barco. Ir temprano para evitar multitudes.' },
            { type: 'scam', title: 'Tours carísimos', desc: 'Las agencias de Ao Nang inflan precios. Comparar al menos 3 y regatear.' }
        ]
    },
    {
        city: "Xi'an", flag: '🇨🇳', tips: [
            { type: 'tip', title: 'Muslim Quarter', desc: 'La comida callejera es segura y deliciosa. Es la mejor zona gastronómica.' },
            { type: 'scam', title: 'Terracotta Warriors', desc: 'Tours piratas en la estación de tren. Usa solo el bus oficial (línea 5/306).' },
            { type: 'tip', title: 'Bici en la muralla', desc: 'Alquilar bici para recorrer la muralla. ~50 CNY/2h.' }
        ]
    },
    {
        city: 'Beijing', flag: '🇨🇳', tips: [
            { type: 'scam', title: 'Art student scam', desc: 'Estudiantes te invitan a ver su "exposición de arte" y te presionan para comprar. Ignorar.' },
            { type: 'scam', title: 'Rickshaw inflado', desc: 'Rickshaws cerca de la Ciudad Prohibida cobran precios absurdos. Negociar o usar metro.' },
            { type: 'tip', title: 'Gran Muralla', desc: 'Ir a Mutianyu (no Badaling). Menos turistas, más auténtica. Bus o excursión.' },
            { type: 'tip', title: 'Reservar online', desc: 'Plaza Tiananmen y Ciudad Prohibida requieren reserva previa con pasaporte.' }
        ]
    }
];
