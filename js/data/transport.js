// ═══════════════════════════════════════════════════════════
// TRANSPORT DATA — Metro systems & Airport transfers
// ═══════════════════════════════════════════════════════════

const METRO_DATA = [
    {
        city: 'Shanghai', cc: 'cn', icon: '🚇', system: 'Shanghai Metro',
        lines: '16 líneas, 508 estaciones',
        card: { name: 'Shanghai Public Transport Card', price: '~20 CNY (depósito)', where: 'Máquinas en estaciones' },
        priceRange: '3–10 CNY/viaje (~0,40–1,30€)',
        useful: ['L2 → Aeropuerto Pudong', 'L10 → Nanjing Rd / Yu Garden', 'L1 → People\'s Square'],
        tips: ['Se puede pagar con Alipay/WeChat Pay', 'Horario: 05:30 – 22:30', 'App: MetroMan (mapa offline)'],
        appUrl: 'https://apps.apple.com/app/metroman/id466351020'
    },
    {
        city: 'Taipei', cc: 'tw', icon: '🚇', system: 'Taipei MRT',
        lines: '6 líneas, 131 estaciones',
        card: { name: 'EasyCard (悠遊卡)', price: '100 TWD (~3€)', where: 'Convenience stores (7-Eleven, FamilyMart)' },
        priceRange: '20–65 TWD/viaje (~0,60–1,90€)',
        useful: ['Red Line → Aeropuerto Taoyuan (vía Taoyuan MRT)', 'Red/Green → Taipei 101', 'Blue → Longshan Temple'],
        tips: ['Apple Pay funciona en torniquetes', 'EasyCard sirve para bus, YouBike y tiendas', 'Horario: 06:00 – 00:00'],
        appUrl: null
    },
    {
        city: 'Bangkok', cc: 'th', icon: '🚆', system: 'BTS Skytrain + MRT + Boats',
        lines: 'BTS 2 líneas + MRT 2 líneas + Chao Phraya boats',
        card: { name: 'Rabbit Card (BTS) / MRT Card', price: '~200 THB (~5€)', where: 'Taquillas BTS/MRT' },
        priceRange: '16–59 THB/viaje (~0,40–1,50€)',
        useful: ['BTS Sukhumvit → Siam, Asok, Mo Chit', 'BTS Silom → Saphan Taksin (boats)', 'MRT Blue → Chinatown, Hua Lamphong'],
        tips: ['Grab (app tipo Uber) es muy barato', 'Tuk-tuks: negociar SIEMPRE antes', 'Boats por el río son geniales y baratos'],
        appUrl: null
    },
    {
        city: 'Xi\'an', cc: 'cn', icon: '🚇', system: 'Xi\'an Metro',
        lines: '8 líneas, 191 estaciones',
        card: { name: 'Xi\'an Transport Card / Alipay', price: 'Alipay gratis', where: 'App Alipay' },
        priceRange: '2–7 CNY/viaje (~0,25–0,90€)',
        useful: ['L2 → Estación tren (norte-sur)', 'L1 → Centro histórico', 'L3 → Guerreros Terracota (parcial)'],
        tips: ['Alipay para pagar en metro y taxis', 'Bus 914/915 a Guerreros Terracota', 'Horario: 06:00 – 23:00'],
        appUrl: null
    },
    {
        city: 'Beijing', cc: 'cn', icon: '🚇', system: 'Beijing Subway',
        lines: '27 líneas, 490 estaciones (¡la más grande del mundo!)',
        card: { name: 'Yikatong Card / Alipay', price: '~20 CNY depósito', where: 'Máquinas en estaciones' },
        priceRange: '3–10 CNY/viaje (~0,40–1,30€)',
        useful: ['L1 → Tiananmén, Ciudad Prohibida', 'Airport Express → Daxing (PKX)', 'L2 → Circunvalación centro', 'L13/Changping → Gran Muralla (Badaling)'],
        tips: ['Metro cierra ~23:00', 'Didi (app china tipo Uber)', 'Scanner de seguridad en TODAS las estaciones'],
        appUrl: null
    }
];

const TRANSPORT_DATA = [
    {
        city: 'Shanghai',
        airport: 'PVG (Pudong)',
        hotel: 'Shanghai Yuhang Hotel — 525 Sichuan North Rd',
        options: [
            { mode: '🚇 Metro', route: 'Línea 2 (PVG → Nanjing East Rd, ~1h 20min)', cost: '¥7 (~0.90€)', tip: 'Última salida ~22:00. Necesitas WeChat/Alipay o comprar ticket en máquina' },
            { mode: '🚕 Taxi', route: 'PVG → hotel (~45 min sin tráfico)', cost: '¥180-220 (~25-30€)', tip: 'Usa meter. Muestra dirección en chino al taxista' },
            { mode: '🚌 Maglev + Metro', route: 'Maglev PVG → Longyang Rd (8 min, 430km/h!) + Metro L2', cost: '¥57 (~7€)', tip: '¡Experiencia única a 430km/h! Más rápido que taxi' }
        ]
    },
    {
        city: 'Taipei',
        airport: 'TPE (Taoyuan)',
        hotel: 'Pendiente — zona centro Taipei',
        options: [
            { mode: '🚇 Metro/MRT', route: 'Airport MRT → Taipei Main Station (35 min directo)', cost: 'NT$160 (~4.60€)', tip: 'Express cada 15 min. Directo sin paradas. Aceptan tarjeta' },
            { mode: '🚕 Taxi', route: 'TPE → centro Taipei (~40 min)', cost: 'NT$1200 (~35€)', tip: 'Taxis amarillos con taxímetro. Muy fiables' },
            { mode: '🚌 Bus 1819', route: 'TPE → Taipei Main Station (55 min)', cost: 'NT$140 (~4€)', tip: 'Más barato. 24h. Sale cada 15-20 min' }
        ]
    },
    {
        city: 'Bangkok (DMK)',
        airport: 'DMK (Don Mueang)',
        hotel: 'Cozy Blu Suvarnabhumi',
        options: [
            { mode: '🚕 Grab', route: 'DMK → hotel (depende tráfico, 40-90 min)', cost: '฿200-400 (~5-10€)', tip: '¡Descargar Grab antes! Es el Uber de Asia. Pago con tarjeta' },
            { mode: '🚌 A1 Bus + BTS', route: 'A1 bus DMK → BTS Mo Chit + Skytrain', cost: '฿60 (~1.50€)', tip: 'Bus cada 5 min. BTS Skytrain es rápido y moderno' },
            { mode: '🚕 Taxi meter', route: 'Desde la cola oficial de taxis', cost: '฿200-350 (~5-9€)', tip: 'Siempre pedir que pongan el meter. +฿50 peaje autopista' }
        ]
    },
    {
        city: 'Krabi',
        airport: 'KBV (Krabi)',
        hotel: 'Ao Nang Goodwill Hotel — Ao Nang',
        options: [
            { mode: '🚐 Shuttle/Van', route: 'KBV → Ao Nang (30 min)', cost: '฿150 (~4€)', tip: 'Shared van. Comprar ticket en counter del aeropuerto' },
            { mode: '🚕 Taxi privado', route: 'KBV → Ao Nang directo', cost: '฿600-800 (~16-22€)', tip: 'Más cómodo. Reservar en counter o pedir en Grab' },
            { mode: '🚕 Grab', route: 'KBV → Ao Nang', cost: '฿400-500 (~11-14€)', tip: 'Disponibilidad limitada en Krabi. Mejor reservar van' }
        ]
    },
    {
        city: 'Xi\'an',
        airport: 'XIY (Xianyang)',
        hotel: 'Space Capsule Hotel (¡dentro del aeropuerto!)',
        options: [
            { mode: '🏨 Dentro T3', route: 'Gate 312, 1F, Terminal 3', cost: 'Incluido', tip: '¡No necesitas transporte! Hotel dentro del aeropuerto. Check-in 14:00' },
            { mode: '🚇 Metro (día siguiente → Bell Tower)', route: 'Airport Metro → Bell Tower (55 min)', cost: '¥8 (~1€)', tip: 'Línea 14 airport → transfer → Línea 2 Bell Tower' }
        ]
    },
    {
        city: 'Beijing',
        airport: 'PKX (Daxing)',
        hotel: 'Pendiente — centro Beijing',
        options: [
            { mode: '🚇 Metro Daxing Line', route: 'PKX → ciudad (Caoqiao, 19 min express)', cost: '¥35 (~4.50€)', tip: 'Express directo. Luego transfer a red de metro normal' },
            { mode: '🚕 Taxi/Didi', route: 'PKX → centro (45 min)', cost: '¥120-180 (~15-23€)', tip: 'Didi es el Uber chino. Necesita WeChat. Taxis oficiales con meter' },
            { mode: '🚌 Airport Bus', route: 'Varias líneas a diferentes zonas', cost: '¥40 (~5€)', tip: 'Líneas a Xidan, Beijing Station, etc. Último bus ~23:00' }
        ]
    },
    {
        city: 'Ámsterdam',
        airport: 'AMS (Schiphol)',
        hotel: 'Hotel Ben Centre — 7 Beursstraat',
        options: [
            { mode: '🚂 Tren NS', route: 'Schiphol → Amsterdam Centraal (15 min)', cost: '€5.70', tip: 'Trenes cada 10 min. Pago contactless. Super eficiente' },
            { mode: '🚕 Taxi', route: 'Schiphol → hotel (20 min)', cost: '€40-50', tip: 'Taxis oficiales azules. También Uber disponible' }
        ]
    }
];
