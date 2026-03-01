// ═══════════════════════════════════════════════════════════
// CHEAT SHEETS — Quick reference card per city
// ═══════════════════════════════════════════════════════════

const CHEAT_SHEETS = [
    {
        city: "shanghai", flag: "🇨🇳", name: "Shanghai",
        currency: { code: "CNY", symbol: "¥", rate: "1€ ≈ ¥7.8", tip: "Todo se paga con WeChat Pay o Alipay. Efectivo casi no se usa." },
        metro: { card: "Shanghai Metro App / Alipay QR", lines: "19 líneas", tip: "App Metro Shanghai o escanear QR Alipay en torniquete. Muy fácil." },
        internet: { vpn: true, tip: "VPN obligatoria para Google, WhatsApp, Instagram. Activar ANTES de llegar." },
        apps: ["WeChat (mensajería + pagos)", "Alipay (pagos QR)", "DiDi (taxi)", "Amap 高德 (GPS chino)", "Shanghai Metro (metro)"],
        phrases: [
            { es: "Hola", local: "你好", pron: "Nǐ hǎo" },
            { es: "Gracias", local: "谢谢", pron: "Xiè xie" },
            { es: "¿Cuánto?", local: "多少钱？", pron: "Duō shao qián?" },
            { es: "No entiendo", local: "我不懂", pron: "Wǒ bù dǒng" },
            { es: "Cuenta/pagar", local: "买单", pron: "Mǎi dān" }
        ],
        emergency: { police: "110", ambulance: "120", embassy: "+86 21 6321 3543" },
        donts: ["❌ No esperes hablar inglés fuera de hoteles", "❌ No uses Google Maps (usa Amap)", "❌ No olvides la VPN", "❌ No dejes propina (no es costumbre)"],
        food: ["🥟 Xiaolongbao (soup dumplings)", "🍜 Scallion Oil Noodles", "🦀 Hairy Crab (estacional)", "🥡 Shengjianbao (fried bao)"]
    },
    {
        city: "taipei", flag: "🇹🇼", name: "Taipei",
        currency: { code: "TWD", symbol: "NT$", rate: "1€ ≈ NT$34", tip: "Tarjeta aceptada en tiendas. Night markets = solo efectivo." },
        metro: { card: "EasyCard (悠遊卡)", lines: "5 líneas + buses", tip: "Comprar EasyCard en 7-Eleven o estación metro. Funciona en metro, bus, tiendas." },
        internet: { vpn: false, tip: "Google, WhatsApp, Instagram funcionan perfecto. WiFi gratis en metro y tiendas." },
        apps: ["Google Maps (funciona bien)", "Uber / 台灣大車隊 (taxi)", "7-Eleven app", "Line (mensajería local)"],
        phrases: [
            { es: "Hola", local: "你好", pron: "Nǐ hǎo" },
            { es: "Gracias", local: "謝謝", pron: "Xiè xie" },
            { es: "¿Cuánto?", local: "多少錢？", pron: "Duō shao qián?" },
            { es: "No entiendo", local: "我不懂", pron: "Wǒ bù dǒng" },
            { es: "Delicioso", local: "好吃", pron: "Hǎo chī" }
        ],
        emergency: { police: "110", ambulance: "119", embassy: "+886 2 2518 4901" },
        donts: ["❌ No tires papel al WC en algunos sitios (papelera al lado)", "❌ No comas/bebas en el metro (multa)", "❌ No olvides EasyCard (sin ella es un caos)", "❌ No te saltes los night markets"],
        food: ["🫓 Gua Bao (taco taiwanés)", "🍧 Mango shaved ice", "🐔 Pollo frito taiwanés", "🧋 Bubble Tea (el original)", "🍜 Beef Noodle Soup"]
    },
    {
        city: "bangkok", flag: "🇹🇭", name: "Bangkok",
        currency: { code: "THB", symbol: "฿", rate: "1€ ≈ ฿38", tip: "Efectivo en mercados y taxis. Tarjeta en centros comerciales y restaurantes." },
        metro: { card: "Rabbit Card (BTS) / Mangmoom", lines: "BTS Skytrain + MRT", tip: "BTS y MRT son sistemas separados con tarjetas diferentes. Rabbit Card para BTS." },
        internet: { vpn: false, tip: "Todo funciona: Google, WhatsApp, Instagram. WiFi en todas partes." },
        apps: ["Grab (taxi, esencial)", "Google Maps", "Foodpanda (delivery)", "LINE (mensajería local)"],
        phrases: [
            { es: "Hola", local: "สวัสดี", pron: "Sawàtdii (kráp♂/kà♀)" },
            { es: "Gracias", local: "ขอบคุณ", pron: "Kòrp kun" },
            { es: "¿Cuánto?", local: "เท่าไหร่?", pron: "Tâo rài?" },
            { es: "No picante", local: "ไม่เผ็ด", pron: "Mâi pèt" },
            { es: "La cuenta", local: "เช็คบิล", pron: "Check bin" }
        ],
        emergency: { police: "191", ambulance: "1669", embassy: "+66 2 661 8284", touristPolice: "1155" },
        donts: ["❌ NUNCA pisar un billete/moneda (imagen del rey = delito grave)", "❌ No tocar la cabeza a nadie", "❌ Ropa cubriendo hombros+rodillas en templos", "❌ No coger tuk-tuks que ofrecen tours 'gratis'"],
        food: ["🍜 Pad Thai", "🍛 Green Curry", "🥭 Mango Sticky Rice", "🍢 Satay", "🍲 Tom Yum Kung"]
    },
    {
        city: "krabi", flag: "🇹🇭", name: "Krabi",
        currency: { code: "THB", symbol: "฿", rate: "1€ ≈ ฿38", tip: "Mayoritariamente efectivo en playas y tours. ATMs tienen comisión ~฿220." },
        metro: { card: "No hay metro", lines: "—", tip: "Transporte: Grab, songthaew (camioneta compartida), long-tail boats, motos de alquiler (฿300/día)." },
        internet: { vpn: false, tip: "Buena cobertura en Ao Nang. En islas puede fallar." },
        apps: ["Grab (taxi)", "Google Maps", "Klook/GetYourGuide (tours)"],
        phrases: [
            { es: "Hola", local: "สวัสดี", pron: "Sawàtdii" },
            { es: "Gracias", local: "ขอบคุณ", pron: "Kòrp kun" },
            { es: "Barato un poco?", local: "ลดได้ไหม?", pron: "Lót dâai mǎi?" },
            { es: "No picante", local: "ไม่เผ็ด", pron: "Mâi pèt" },
            { es: "Playa", local: "ชายหาด", pron: "Chaai hàat" }
        ],
        emergency: { police: "191", ambulance: "1669", touristPolice: "1155" },
        donts: ["❌ No tocar coral (multa)", "❌ No dejar basura en islas", "❌ Regatear pero con respeto", "❌ Llevar protector solar reef-safe en islas"],
        food: ["🦐 Seafood BBQ fresco", "🍛 Massaman Curry", "🥥 Coco fresco (฿30)", "🍌 Pancake de plátano", "🐟 Whole fried fish"]
    },
    {
        city: "xian", flag: "🇨🇳", name: "Xi'an",
        currency: { code: "CNY", symbol: "¥", rate: "1€ ≈ ¥7.8", tip: "WeChat Pay / Alipay. Muslim Quarter acepta efectivo." },
        metro: { card: "Xi'an Metro App / Alipay QR", lines: "8 líneas", tip: "Metro moderno y barato. QR de Alipay funciona en torniquetes." },
        internet: { vpn: true, tip: "VPN necesaria como en Shanghai. Misma configuración." },
        apps: ["WeChat", "Alipay", "DiDi", "Amap", "Trip.com (trenes)"],
        phrases: [
            { es: "Hola", local: "你好", pron: "Nǐ hǎo" },
            { es: "Riquísimo", local: "太好吃了", pron: "Tài hǎo chī le" },
            { es: "¿Cuánto?", local: "多少钱？", pron: "Duō shao qián?" },
            { es: "Quiero esto", local: "我要这个", pron: "Wǒ yào zhège" },
            { es: "Guerreros", local: "兵马俑", pron: "Bīng mǎ yǒng" }
        ],
        emergency: { police: "110", ambulance: "120" },
        donts: ["❌ No coger tours piratas en la estación de tren", "❌ No ir al Muslim Quarter sin hambre", "❌ No alquilar bici de muralla sin 2h de margen", "❌ Bus 306 SOLO el oficial verde (estafa frecuente)"],
        food: ["🥙 Rou Jia Mo (hamburguesa china)", "🍜 Biang Biang Noodles", "🍢 Lamb Skewers (comino)", "🍮 Persimmon Cake", "🍲 Yang Rou Pao Mo (sopa cordero)"]
    },
    {
        city: "beijing", flag: "🇨🇳", name: "Beijing",
        currency: { code: "CNY", symbol: "¥", rate: "1€ ≈ ¥7.8", tip: "WeChat Pay / Alipay obligatorio. Efectivo casi inútil." },
        metro: { card: "Beijing Metro App / Alipay QR", lines: "27 líneas (más grande del mundo)", tip: "Metro enorme y eficiente. Security check en cada estación (llevar pasaporte)." },
        internet: { vpn: true, tip: "VPN activa. Misma configuración que Shanghai." },
        apps: ["WeChat", "Alipay", "DiDi (imprescindible)", "Amap", "故宫 app (reservas Ciudad Prohibida)"],
        phrases: [
            { es: "Hola", local: "你好", pron: "Nǐ hǎo" },
            { es: "Gracias", local: "谢谢", pron: "Xiè xie" },
            { es: "Ciudad Prohibida", local: "故宫", pron: "Gù gōng" },
            { es: "Gran Muralla", local: "长城", pron: "Cháng chéng" },
            { es: "Cerveza", local: "啤酒", pron: "Pí jiǔ" }
        ],
        emergency: { police: "110", ambulance: "120", embassy: "+86 10 6532 3629" },
        donts: ["❌ RESERVAR Ciudad Prohibida y Tiananmén días ANTES (obligatorio)", "❌ Llevar pasaporte SIEMPRE (control de seguridad metro)", "❌ No hablar de política", "❌ No ir a la Muralla en Badaling (masificada) → ir a Mutianyu"],
        food: ["🦆 Pato Pekín (el plato)", "🥟 Jianbing (crepe callejero)", "🍜 Zhajiang Mian (fideos soja)", "🫕 Hot Pot (Haidilao)", "🍢 Yang Rou Chuan (brochetas cordero)"]
    }
];
