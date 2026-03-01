// ═══════════════════════════════════════════════════════════
// ITINERARY DATA — Day-by-day plans per city
// Activities grouped by zone/proximity with transport directions
// ═══════════════════════════════════════════════════════════

const ITINERARY_DATA = [

    // ─────────────────── SHANGHAI (3 días: 13-15 Mar) ───────────────────
    {
        city: "shanghai", dayNumber: 1, date: "2026-03-13",
        title: "Llegada + The Bund & Pudong de noche",
        zone: "Bund / Huangpu",
        activities: [
            { time: "11:00", period: "morning", name: "Llegada a PVG", desc: "Aterrizaje en Pudong. Recoger equipaje, activar eSIM Holafly, WeChat/Alipay listos.", zone: "Aeropuerto", duration: "1h", cost: "—", transport: "✈️ Vuelo HU728 llega 10:30", tip: "Activar VPN/eSIM NADA MÁS aterrizar. Sin VPN no hay Google ni WhatsApp.", mapUrl: "https://maps.google.com/?q=Shanghai+Pudong+Airport", mustDo: true },
            { time: "12:30", period: "afternoon", name: "Traslado al hotel + check-in", desc: "Shanghai Yuhang Hotel, 525 Sichuan North Rd", zone: "Hongkou", duration: "1h 20min", cost: "¥7 metro / ¥180 taxi", transport: "🚇 Metro L2 PVG → Nanjing East Rd → L10 → Sichuan North Rd (1h 20min) o 🚕 Taxi ~45min", tip: "Si llegáis cansados, coged taxi. Mostrad dirección en chino: 四川北路525号", mapUrl: "https://maps.google.com/?q=Shanghai+Yuhang+Hotel", mustDo: true },
            { time: "15:00", period: "afternoon", name: "Nanjing Road (peatonal)", desc: "La calle comercial más famosa de China. 5.5 km de tiendas, luces y ambiente.", zone: "Bund/Huangpu", duration: "1.5h", cost: "Gratis", transport: "🚇 Metro L10 → Nanjing East Rd (salida 4)", tip: "Pasead hacia el este, dirección al Bund. La zona de noche es espectacular.", mapUrl: "https://maps.google.com/?q=Nanjing+Road+Shanghai", mustDo: false },
            { time: "17:00", period: "evening", name: "The Bund al atardecer", desc: "Paseo marítimo de 2.6 km con las mejores vistas al skyline de Pudong. Icónico.", zone: "Bund/Huangpu", duration: "1.5h", cost: "Gratis", transport: "🚶 Andando desde Nanjing Rd (10 min hacia el río)", tip: "Llegad antes del atardecer (~18:00). Las luces se encienden a las 18:30. Foto obligatoria.", mapUrl: "https://maps.google.com/?q=The+Bund+Shanghai", mustDo: true },
            { time: "19:00", period: "evening", name: "Cena: Xiaolongbao en Jia Jia Tang Bao", desc: "Los mejores xiaolongbao (dumplings al vapor con caldo) de Shanghai. Cola habitual.", zone: "Bund/Huangpu", duration: "1h", cost: "~¥30-50 por persona", transport: "🚶 Andando 15 min desde The Bund", tip: "Pedir los de cerdo clásicos + los de cangrejo. Sorber el caldo primero, NO morder directamente.", mapUrl: "https://maps.google.com/?q=Jia+Jia+Tang+Bao+Shanghai", mustDo: true }
        ]
    },
    {
        city: "shanghai", dayNumber: 2, date: "2026-03-14",
        title: "Yu Garden + French Concession + Tianzifang",
        zone: "Old Town / French Concession",
        activities: [
            { time: "09:00", period: "morning", name: "Jardín Yuyuan (豫园)", desc: "Jardín clásico chino del s.XVI. Pabellones, puentes, estanques de koi. Patrimonio.", zone: "Old City", duration: "2h", cost: "¥40 (~5€)", transport: "🚇 Metro L10 → Yuyuan Garden (salida 1)", tip: "Ir temprano (abre 08:30) para evitar masas. El bazar exterior es genial para souvenirs.", mapUrl: "https://maps.google.com/?q=Yu+Garden+Shanghai", mustDo: true },
            { time: "11:30", period: "morning", name: "City God Temple + bazar", desc: "Templo taoísta rodeado de tiendas tradicionales y puestos de comida.", zone: "Old City", duration: "1h", cost: "¥10 templo", transport: "🚶 Junto al Jardín Yuyuan (2 min andando)", tip: "Probad los shengjian bao (dumplings fritos) en uno de los puestos del bazar.", mapUrl: "https://maps.google.com/?q=City+God+Temple+Shanghai", mustDo: false },
            { time: "13:00", period: "afternoon", name: "Almuerzo: Yang's Dumplings", desc: "Shengjian bao (dumplings fritos crujientes) — los mejores de Shanghai.", zone: "Old City", duration: "45min", cost: "¥15 por ración", transport: "🚶 Andando desde el bazar (5 min)", tip: "Siempre hay cola pero avanza rápido. No os quemáis con el caldo interior.", mapUrl: "https://maps.google.com/?q=Yang's+Dumplings+Shanghai+Yuyuan", mustDo: true },
            { time: "14:30", period: "afternoon", name: "French Concession", desc: "Barrio colonial francés con plataneros, cafés y arquitectura art-deco. El barrio más bonito.", zone: "French Concession", duration: "2h", cost: "Gratis", transport: "🚇 Metro L10 Yuyuan → L1 South Shaanxi Rd (20 min)", tip: "Pasead por Wukang Road y Fuxing Road. Cafeterías hipster por todas partes.", mapUrl: "https://maps.google.com/?q=French+Concession+Shanghai", mustDo: true },
            { time: "17:00", period: "evening", name: "Tianzifang (田子坊)", desc: "Laberinto de callejones artísticos con galerías, bares y Street food.", zone: "French Concession", duration: "2h", cost: "Gratis", transport: "🚶 Andando 15 min desde French Concession o 🚇 L9 Dapuqiao", tip: "Ideal para cenar en alguno de sus restaurantes. Perdeos sin mapa.", mapUrl: "https://maps.google.com/?q=Tianzifang+Shanghai", mustDo: true },
            { time: "19:30", period: "evening", name: "Cena callejera en Tianzifang", desc: "Fideos, pinchos, dumplings y cerveza artesanal en los callejones.", zone: "French Concession", duration: "1.5h", cost: "~¥50-80", transport: "🚶 Ya estáis allí", tip: "Probad los scallion oil noodles (葱油拌面). Las terrazas del 2º piso tienen buenas vistas.", mapUrl: "https://maps.google.com/?q=Tianzifang+Shanghai", mustDo: false }
        ]
    },
    {
        city: "shanghai", dayNumber: 3, date: "2026-03-15",
        title: "Shanghai Tower + People's Square + Maglev",
        zone: "Pudong / Centro",
        activities: [
            { time: "09:00", period: "morning", name: "Shanghai Tower (上海中心大厦)", desc: "Observatorio a 632m (2ª torre más alta del mundo). Vistas 360° de todo Shanghai.", zone: "Pudong/Lujiazui", duration: "1.5h", cost: "¥180 (~23€)", transport: "🚇 Metro L2 → Lujiazui (salida 6)", tip: "Reservar online para evitar cola. Día despejado = vistas increíbles. Ir temprano.", mapUrl: "https://maps.google.com/?q=Shanghai+Tower+Observatory", mustDo: false },
            { time: "11:00", period: "morning", name: "Paseo por Lujiazui (Pudong)", desc: "Zona de rascacielos: Oriental Pearl Tower, Jin Mao, Shanghai World Financial Center.", zone: "Pudong/Lujiazui", duration: "1h", cost: "Gratis (exterior)", transport: "🚶 Andando desde Shanghai Tower", tip: "Foto desde el puente circular peatonal con las 3 torres de fondo. Icónica.", mapUrl: "https://maps.google.com/?q=Lujiazui+Shanghai", mustDo: false },
            { time: "12:30", period: "afternoon", name: "Almuerzo: Din Tai Fung", desc: "Cadena taiwanesa premium de xiaolongbao. Experiencia más refinada que Jia Jia.", zone: "Pudong/Lujiazui", duration: "1h", cost: "~¥100-150", transport: "🚶 IFC Mall, Lujiazui (5 min andando)", tip: "Pedir truffle xiaolongbao + shrimp & pork. Reservar o ir antes de las 12.", mapUrl: "https://maps.google.com/?q=Din+Tai+Fung+Shanghai+IFC", mustDo: false },
            { time: "14:30", period: "afternoon", name: "People's Square + Museo de Shanghai", desc: "Plaza central de la ciudad. Museo gratuito con arte chino milenario.", zone: "Centro", duration: "2h", cost: "Gratis (museo)", transport: "🚇 Metro L2 Lujiazui → People's Square (10 min)", tip: "El museo vale mucho la pena si os gusta la historia. Jade y cerámica brutales.", mapUrl: "https://maps.google.com/?q=Shanghai+Museum", mustDo: false },
            { time: "17:00", period: "evening", name: "Preparar maletas + última paseo", desc: "Vuelo mañana a las 08:25 → hay que madrugar. Dejad todo listo.", zone: "Hotel", duration: "1h", cost: "—", transport: "🚇 Metro al hotel", tip: "Check-out mañana temprano. PVG está a 1h de metro. Salid a las 05:30.", mapUrl: "", mustDo: true },
            { time: "19:00", period: "evening", name: "Cena: Hot Pot (última noche China pt.1)", desc: "Fondue china picante — el ritual perfecto para la última noche.", zone: "Centro", duration: "2h", cost: "~¥100-150 por persona", transport: "🚇 Cualquier Haidilao cercano", tip: "Haidilao es la cadena más famosa. Servicio increíble (te dan espectáculo con los fideos).", mapUrl: "https://maps.google.com/?q=Haidilao+Hot+Pot+Shanghai", mustDo: false }
        ]
    },

    // ─────────────────── TAIPEI (3 días: 16-18 Mar) ───────────────────
    {
        city: "taipei", dayNumber: 1, date: "2026-03-16",
        title: "Llegada + Longshan Temple + Ximending",
        zone: "Wanhua / West Taipei",
        activities: [
            { time: "10:30", period: "morning", name: "Llegada a TPE (Taoyuan)", desc: "Vuelo Spring Airlines aterriza 10:30. Inmigración, equipaje, comprar EasyCard.", zone: "Aeropuerto", duration: "1.5h", cost: "EasyCard NT$100 (~3€)", transport: "✈️ Vuelo 9C8951 desde PVG", tip: "Comprar EasyCard en el 7-Eleven del aeropuerto. Sirve para metro, bus, tiendas, YouBike.", mapUrl: "https://maps.google.com/?q=Taoyuan+Airport", mustDo: true },
            { time: "12:00", period: "afternoon", name: "Traslado al hotel + check-in", desc: "Longshan Hotel, No.139 Xiyuan Rd, Wanhua. Check-in desde 15:30.", zone: "Wanhua", duration: "50min", cost: "NT$160 (~4.60€)", transport: "🚇 Airport MRT Express → Taipei Main Station (35 min) → 🚇 Blue Line → Longshan Temple (5 min)", tip: "Dejar maletas en consigna del hotel (gratis) si llegáis antes de las 15:30.", mapUrl: "https://maps.google.com/?q=Longshan+Hotel+Taipei", mustDo: true },
            { time: "13:30", period: "afternoon", name: "Almuerzo: Beef Noodle Soup", desc: "Plato nacional de Taiwán. Caldo rico con ternera estofada y fideos gruesos.", zone: "Wanhua", duration: "1h", cost: "~NT$200 (~6€)", transport: "🚶 Restaurantes en la zona de Longshan (5 min andando)", tip: "Hay varios restaurantes buenos cerca del templo. Si queréis el mejor: Yong Kang Beef Noodles (otro día, está en Daan).", mapUrl: "https://maps.google.com/?q=Longshan+Temple+Taipei+restaurants", mustDo: true },
            { time: "15:00", period: "afternoon", name: "Templo Longshan (龍山寺)", desc: "Templo budista/taoísta más antiguo de Taipei (1738). Impresionante arquitectura.", zone: "Wanhua", duration: "1h", cost: "Gratis", transport: "🚶 Al lado del hotel (3 min)", tip: "Comprad incienso gratuito en la entrada. Observad el ritual de los creyentes. Muy fotogénico.", mapUrl: "https://maps.google.com/?q=Longshan+Temple+Taipei", mustDo: true },
            { time: "16:30", period: "afternoon", name: "Barrio Ximending (西門町)", desc: "El Shibuya de Taipei. Zona peatonal con street art, tiendas, comida y ambiente joven.", zone: "Wanhua/Ximending", duration: "2h", cost: "Gratis", transport: "🚇 Blue/Green Line → Ximen (1 parada desde Longshan)", tip: "La calle peatonal principal es brutal. Probad el pollo frito gigante (雞排) de Hot Star.", mapUrl: "https://maps.google.com/?q=Ximending+Taipei", mustDo: true },
            { time: "19:00", period: "evening", name: "Cena callejera en Ximending", desc: "Street food taiwanés: gua bao, bubble tea, oyster omelette, pollo frito.", zone: "Ximending", duration: "1.5h", cost: "~NT$300 (~9€)", transport: "🚶 Ya estáis en Ximending", tip: "Las esquinas están llenas de puestos. Probad TODO. El bubble tea aquí es el original.", mapUrl: "https://maps.google.com/?q=Ximending+Night+Market+Taipei", mustDo: true }
        ]
    },
    {
        city: "taipei", dayNumber: 2, date: "2026-03-17",
        title: "Jiufen + Shilin Night Market",
        zone: "Jiufen (excursión) + Norte Taipei",
        activities: [
            { time: "08:30", period: "morning", name: "Desayuno: Dan Bing (蛋餅)", desc: "Crepe taiwanés de huevo. Lo desayunan todos los taiwaneses. Barato y delicioso.", zone: "Wanhua", duration: "30min", cost: "~NT$40 (~1.20€)", transport: "🚶 Cualquier puesto callejero cerca del hotel", tip: "Pedir dan bing + soy milk caliente. Combo perfecto taiwanés.", mapUrl: "", mustDo: false },
            { time: "09:30", period: "morning", name: "Bus a Jiufen (九份)", desc: "Pueblo de montaña que inspiró 'El Viaje de Chihiro' de Miyazaki. Callejones de farolillos.", zone: "Jiufen (fuera de Taipei)", duration: "1.5h trayecto", cost: "NT$102 bus (~3€)", transport: "🚇 MRT → Zhongxiao Fuxing (salida 2) → 🚌 Bus 1062 directo a Jiufen (1h 15min)", tip: "Bus 1062 sale cada 15 min. Sentaos a la derecha para vistas al mar durante el trayecto.", mapUrl: "https://maps.google.com/?q=Jiufen+Old+Street", mustDo: true },
            { time: "11:00", period: "morning", name: "Jiufen Old Street", desc: "Callejones empinados llenos de puestos de comida, tiendas de té y vistas al mar.", zone: "Jiufen", duration: "3h", cost: "Gratis (+ comida)", transport: "🚶 Bajad del bus en la parada de Jiufen Old Street", tip: "Probad los taro balls (芋圓) y el ice cream roll. Las vistas desde la terraza de A-MEI Tea House son las de Chihiro.", mapUrl: "https://maps.google.com/?q=Jiufen+Old+Street", mustDo: true },
            { time: "14:00", period: "afternoon", name: "A-MEI Tea House", desc: "La casa de té que inspiró la casa de baños de 'El Viaje de Chihiro'. Icónica.", zone: "Jiufen", duration: "1h", cost: "~NT$300 (~9€) set de té", transport: "🚶 En la calle principal de Jiufen", tip: "Sentaos en la terraza con vistas al mar. Pedir set de té oolong. Foto al atardecer brutal.", mapUrl: "https://maps.google.com/?q=A-MEI+Tea+House+Jiufen", mustDo: true },
            { time: "15:30", period: "afternoon", name: "Vuelta a Taipei", desc: "Bus 1062 de vuelta. Si hay tiempo, parada en Ruifang para tren local.", zone: "Tránsito", duration: "1.5h", cost: "NT$102", transport: "🚌 Bus 1062 Jiufen → MRT Zhongxiao Fuxing", tip: "Los buses se llenan los fines de semana. Id a la parada pronto.", mapUrl: "", mustDo: true },
            { time: "18:00", period: "evening", name: "Shilin Night Market (士林夜市)", desc: "El night market más grande y famoso de Taipei. Comida callejera épica.", zone: "Norte Taipei", duration: "2.5h", cost: "~NT$400 (~12€)", transport: "🚇 Red Line → Jiantan (salida 1, NO Shilin)", tip: "Bajad en JIANTAN, no en Shilin. Empezad por el mercado subterráneo (comida) y luego las calles de arriba. Must: stinky tofu, oyster omelette, pepper bun.", mapUrl: "https://maps.google.com/?q=Shilin+Night+Market+Taipei", mustDo: true }
        ]
    },
    {
        city: "taipei", dayNumber: 3, date: "2026-03-18",
        title: "Taipei 101 + Elephant Mountain + Daan",
        zone: "East Taipei / Xinyi",
        activities: [
            { time: "09:00", period: "morning", name: "Taipei 101", desc: "Rascacielos icónico de 508m. Observatorio en planta 89. Amortiguador de viento visible.", zone: "Xinyi", duration: "1.5h", cost: "NT$600 (~18€)", transport: "🚇 Red Line → Taipei 101/World Trade Center (salida 4)", tip: "Comprar entrada online. Los fast pass ahorran 30 min de cola. Mejor por la mañana (menos niebla).", mapUrl: "https://maps.google.com/?q=Taipei+101", mustDo: false },
            { time: "11:00", period: "morning", name: "Yong Kang Beef Noodle Soup", desc: "El MEJOR beef noodle soup de Taipei. Institución gastronómica.", zone: "Daan", duration: "1h", cost: "~NT$250 (~7.50€)", transport: "🚇 Red Line → Dongmen (salida 5, 5 min andando)", tip: "Cola de 20-30 min habitual. Merece la pena. Pedir braised beef noodle + side dishes.", mapUrl: "https://maps.google.com/?q=Yong+Kang+Beef+Noodles+Taipei", mustDo: true },
            { time: "12:30", period: "afternoon", name: "Yongkang Street", desc: "Calle gastronómica premium. Las mejores heladerías, bubble teas y cafés de Taipei.", zone: "Daan", duration: "1.5h", cost: "Variable", transport: "🚶 Misma zona que el beef noodle (2 min)", tip: "Probad el mango shaved ice en Smoothie House. El bubble tea de 50 Lan está aquí.", mapUrl: "https://maps.google.com/?q=Yongkang+Street+Taipei", mustDo: false },
            { time: "15:00", period: "afternoon", name: "Daan Forest Park", desc: "El Central Park de Taipei. Perfecto para descansar y pasear.", zone: "Daan", duration: "1h", cost: "Gratis", transport: "🚇 Red Line → Daan Forest Park", tip: "Buen sitio para descansar los pies antes de subir Elephant Mountain.", mapUrl: "https://maps.google.com/?q=Daan+Forest+Park+Taipei", mustDo: false },
            { time: "16:30", period: "evening", name: "Elephant Mountain (象山) al atardecer", desc: "Subida de 20 min con las mejores vistas panorámicas de Taipei 101 y la ciudad.", zone: "Xinyi", duration: "1.5h", cost: "Gratis", transport: "🚇 Red Line → Xiangshan (salida 2) → seguir señales a la montaña", tip: "Subid ~45 min antes del atardecer (~17:45 en marzo). Llevad agua. Las escaleras son empinadas pero cortas.", mapUrl: "https://maps.google.com/?q=Elephant+Mountain+Taipei", mustDo: true },
            { time: "18:30", period: "evening", name: "Última cena taiwanesa + preparar vuelo", desc: "Vuelo mañana TPE→BKK 18:35. Día libre por la mañana para compras o repetir favorites.", zone: "Xinyi", duration: "2h", cost: "Variable", transport: "🚶 Restaurants en zona Xinyi/Taipei 101", tip: "Mañana tenéis todo el día libre antes del vuelo de las 18:35. Podéis repetir night market o explorar.", mapUrl: "", mustDo: false }
        ]
    },

    // ─────────────────── BANGKOK TRANSIT 1 (1 día: 19-20 Mar) ───────────────────
    {
        city: "bangkok1", dayNumber: 1, date: "2026-03-19",
        title: "Llegada nocturna (transit)",
        zone: "Aeropuerto / Hotel",
        activities: [
            { time: "21:30", period: "evening", name: "Llegada a DMK (Don Mueang)", desc: "Vuelo AirAsia FD231 desde Taipei. Inmigración rápida. Hotel cerca de Suvarnabhumi.", zone: "Aeropuerto", duration: "1h", cost: "—", transport: "✈️ Vuelo FD231 aterriza 21:30", tip: "Aterrizáis en DMK pero el hotel Cozy Blu está cerca de BKK (Suvarnabhumi). Coged Grab directamente.", mapUrl: "https://maps.google.com/?q=Don+Mueang+Airport", mustDo: true },
            { time: "22:30", period: "evening", name: "Traslado al hotel", desc: "Cozy Blu Suvarnabhumi. Desayuno incluido.", zone: "Suvarnabhumi", duration: "40min", cost: "฿200-400 Grab (~5-10€)", transport: "🚕 Grab (app) — pedir desde la zona de llegadas", tip: "Hotel para dormir. Mañana vuelo BKK→KBV a las 07:05. Poner alarma a las 04:30.", mapUrl: "https://maps.google.com/?q=Cozy+Blu+Suvarnabhumi", mustDo: true }
        ]
    },

    // ─────────────────── KRABI (9 días: 20-28 Mar) ───────────────────
    {
        city: "krabi", dayNumber: 1, date: "2026-03-20",
        title: "Llegada a Krabi + Ao Nang Beach",
        zone: "Ao Nang",
        activities: [
            { time: "08:30", period: "morning", name: "Llegada a KBV (Krabi Airport)", desc: "Vuelo VietJet VZ340 aterriza 08:30. Aeropuerto pequeño y rápido.", zone: "Aeropuerto", duration: "30min", cost: "—", transport: "✈️ Vuelo VZ340 desde BKK", tip: "Aeropuerto pequeño. En 15 min estáis fuera.", mapUrl: "https://maps.google.com/?q=Krabi+Airport", mustDo: true },
            { time: "09:30", period: "morning", name: "Traslado a Ao Nang + check-in", desc: "Ao Nang Goodwill Hotel in Ao Nang Beach area.", zone: "Ao Nang", duration: "40min", cost: "฿150 shuttle / ฿600 taxi", transport: "🚐 Shuttle compartido (counter del aeropuerto) 30 min", tip: "El shuttle es la mejor opción. Taxi solo si lleváis mucho equipaje.", mapUrl: "https://maps.google.com/?q=Ao+Nang+Goodwill+Hotel", mustDo: true },
            { time: "11:00", period: "morning", name: "Explorar Ao Nang Beach", desc: "Playa principal de la zona. Paseo marítimo con restaurantes, bares y tiendas.", zone: "Ao Nang", duration: "2h", cost: "Gratis", transport: "🚶 Andando desde el hotel (5-10 min)", tip: "Primer contacto con el paraíso. Bañaos, descansad del madrugón. Agua turquesa.", mapUrl: "https://maps.google.com/?q=Ao+Nang+Beach+Krabi", mustDo: true },
            { time: "18:00", period: "evening", name: "Atardecer + Seafood BBQ", desc: "Cena de marisco a la brasa con vistas al mar. Gambas, calamares, pescado.", zone: "Ao Nang", duration: "2h", cost: "~฿300-500 (~8-13€)", transport: "🚶 Restaurantes en el paseo de Ao Nang", tip: "Comparad precios en 2-3 restaurantes. El marisco fresco es espectacular y baratísimo.", mapUrl: "https://maps.google.com/?q=Ao+Nang+Seafood+Restaurants", mustDo: true }
        ]
    },
    {
        city: "krabi", dayNumber: 2, date: "2026-03-21",
        title: "⭐ Tour 4 Islas (must do!)",
        zone: "Islas de Krabi",
        activities: [
            { time: "08:30", period: "morning", name: "Tour 4 Islas (salida)", desc: "Excursión en long-tail boat: Koh Tup, Chicken Island, Koh Poda, Phra Nang Cave Beach.", zone: "Islas", duration: "7h (vuelta ~15:30)", cost: "฿800-1200 (~22-33€)", transport: "🛶 Long-tail boat desde Ao Nang pier (recogida en hotel)", tip: "Reservar en agencia de Ao Nang el día anterior. Regatear: pedir 800-900 THB. Incluye snorkel + almuerzo.", mapUrl: "https://maps.google.com/?q=Koh+Poda+Krabi", mustDo: true },
            { time: "10:00", period: "morning", name: "Koh Tup + Chicken Island", desc: "Banco de arena que conecta dos islas cuando baja la marea. Snorkel brutal.", zone: "Islas", duration: "2h", cost: "Incluido en tour", transport: "🛶 Long-tail boat", tip: "Llevad zapatos de agua. El sand bar es mágico con marea baja.", mapUrl: "https://maps.google.com/?q=Chicken+Island+Krabi", mustDo: true },
            { time: "12:30", period: "afternoon", name: "Koh Poda + almuerzo", desc: "Isla paradisíaca con playa de arena blanca. Almuerzo en la playa.", zone: "Islas", duration: "2h", cost: "Incluido", transport: "🛶 Long-tail boat", tip: "La playa más bonita del tour. Agua cristalina, cocoteros. Instagram heaven.", mapUrl: "https://maps.google.com/?q=Koh+Poda+Krabi", mustDo: true },
            { time: "14:30", period: "afternoon", name: "Phra Nang Cave Beach", desc: "Playa espectacular con cueva sagrada y formaciones kársticas verticales.", zone: "Railay", duration: "1.5h", cost: "Incluido", transport: "🛶 Long-tail boat", tip: "La cueva tiene ofrendas de fertilidad. La playa es una de las más bonitas del mundo.", mapUrl: "https://maps.google.com/?q=Phra+Nang+Cave+Beach", mustDo: true }
        ]
    },
    {
        city: "krabi", dayNumber: 3, date: "2026-03-22",
        title: "Railay Beach (día completo)",
        zone: "Railay Peninsula",
        activities: [
            { time: "09:00", period: "morning", name: "Long-tail boat a Railay Beach", desc: "Playa paradisíaca solo accesible por barco. Acantilados kársticos espectaculares.", zone: "Railay", duration: "15min trayecto", cost: "฿100-200 ida (~3-5€)", transport: "🛶 Long-tail boat desde Ao Nang Beach (salen cuando se llenan, cada 15 min)", tip: "Ir temprano (antes de las 10) para pillar sitio. Volved antes de las 17:00 (último barco).", mapUrl: "https://maps.google.com/?q=Railay+Beach+Krabi", mustDo: true },
            { time: "10:00", period: "morning", name: "Railay West Beach + relax", desc: "La playa principal. Arena blanca, agua turquesa, acantilados de fondo.", zone: "Railay", duration: "3h", cost: "Gratis", transport: "🚶 Llegas directo en el barco", tip: "La playa más icónica de Tailandia. Llevad protector solar y agua.", mapUrl: "https://maps.google.com/?q=Railay+West+Beach", mustDo: true },
            { time: "13:00", period: "afternoon", name: "Almuerzo en Railay + explorar laguna", desc: "Comed en uno de los restaurantes de la playa. Después, subid a la Lagoon viewpoint.", zone: "Railay", duration: "3h", cost: "฿200-300 comida", transport: "🚶 Andando por sendero señalizado (15 min al viewpoint)", tip: "El viewpoint requiere escalar un poco con cuerdas. Mola mucho pero cuidado si ha llovido (resbaladizo).", mapUrl: "https://maps.google.com/?q=Railay+Lagoon+Viewpoint", mustDo: false },
            { time: "16:30", period: "evening", name: "Vuelta a Ao Nang + atardecer", desc: "Último barco ~17:00. Atardecer desde Ao Nang beach.", zone: "Ao Nang", duration: "—", cost: "฿100 barco", transport: "🛶 Long-tail boat Railay → Ao Nang", tip: "No os quedéis sin barco. A partir de las 16:30 empezad a buscar.", mapUrl: "", mustDo: true }
        ]
    },
    {
        city: "krabi", dayNumber: 4, date: "2026-03-23",
        title: "Día de relax + Ao Nang",
        zone: "Ao Nang",
        activities: [
            { time: "10:00", period: "morning", name: "Día libre de playa", desc: "Descanso después de dos días intensos. Playa, piscina, paseo.", zone: "Ao Nang", duration: "Todo el día", cost: "Gratis", transport: "🚶 Hotel/playa", tip: "Tenéis 9 noches — no hace falta correr. Disfrutad del ritmo tailandés.", mapUrl: "", mustDo: false },
            { time: "19:00", period: "evening", name: "Masaje tailandés", desc: "Masaje corporal completo de 1 hora. Los masajes en Tailandia son increíbles y baratos.", zone: "Ao Nang", duration: "1h", cost: "฿300-500 (~8-14€)", transport: "🚶 Hay masajes en todo Ao Nang", tip: "Probad el Thai massage tradicional (más intenso) o el oil massage (más relajante).", mapUrl: "https://maps.google.com/?q=Thai+Massage+Ao+Nang", mustDo: true }
        ]
    },
    {
        city: "krabi", dayNumber: 5, date: "2026-03-24",
        title: "🏝️ Hong Island + snorkel",
        zone: "Hong Island (excursión)",
        activities: [
            { time: "08:00", period: "morning", name: "Tour Hong Island", desc: "Archipiélago con laguna esmeralda rodeada de acantilados. Snorkel con peces tropicales.", zone: "Hong Island", duration: "6h (vuelta ~14:00)", cost: "฿900-1500 (~25-42€)", transport: "🚤 Speedboat desde Ao Nang (recogida hotel)", tip: "Es diferente al tour 4 islas. Hong Island tiene una laguna interior espectacular (Hong Lagoon). Mejor con speedboat.", mapUrl: "https://maps.google.com/?q=Hong+Island+Krabi", mustDo: true },
            { time: "15:00", period: "afternoon", name: "Tarde libre + Ao Nang Walking Street", desc: "Night market de Ao Nang los viernes y sábados. Comida, ropa, souvenirs.", zone: "Ao Nang", duration: "3h", cost: "Variable", transport: "🚶 Calle principal de Ao Nang", tip: "Si es viernes o sábado, hay walking street market. Si no, pasead y disfrutad.", mapUrl: "https://maps.google.com/?q=Ao+Nang+Walking+Street", mustDo: false }
        ]
    },
    {
        city: "krabi", dayNumber: 6, date: "2026-03-25",
        title: "Tiger Cave Temple 🐯",
        zone: "Interior de Krabi",
        activities: [
            { time: "07:30", period: "morning", name: "Tiger Cave Temple (Wat Tham Suea)", desc: "1,260 escalones hasta la cima con Buda dorado y vistas 360° de Krabi. Reto mítico.", zone: "Interior Krabi", duration: "3h (ida/vuelta/templo)", cost: "Gratis (entrada)", transport: "🚕 Grab/taxi desde Ao Nang (20 min, ฿300-400)", tip: "IR TEMPRANO (antes de las 08:00) para evitar el calor. Llevad 1L de agua mínimo. Los escalones son empinados pero vale totalmente la pena.", mapUrl: "https://maps.google.com/?q=Tiger+Cave+Temple+Krabi", mustDo: true },
            { time: "11:00", period: "morning", name: "Emerald Pool + Blue Pool", desc: "Piscina natural color esmeralda en la selva tropical. Agua cristalina y fresca.", zone: "Interior Krabi", duration: "2.5h", cost: "฿200 entrada (~5€)", transport: "🚕 Grab desde Tiger Cave (30 min, ฿400-500) o contratar tour combinado", tip: "El Blue Pool (cristal pool) es el más espectacular pero está prohibido bañarse. En Emerald Pool sí podéis nadar.", mapUrl: "https://maps.google.com/?q=Emerald+Pool+Krabi", mustDo: true },
            { time: "15:00", period: "afternoon", name: "Vuelta a Ao Nang + descanso", desc: "Tarde libre para playa o descanso después de los escalones.", zone: "Ao Nang", duration: "—", cost: "฿400-500 Grab vuelta", transport: "🚕 Grab/taxi", tip: "Os dolerán las piernas del Tiger Cave. Merece un masaje esta tarde.", mapUrl: "", mustDo: false }
        ]
    },
    {
        city: "krabi", dayNumber: 7, date: "2026-03-26",
        title: "Kayak manglares + día relax",
        zone: "Ao Thalane / Ao Nang",
        activities: [
            { time: "08:00", period: "morning", name: "Kayak por Ao Thalane", desc: "Ruta de kayak por manglares y cuevas kársticas. Naturaleza virgen.", zone: "Ao Thalane", duration: "4h", cost: "฿800-1200 con guía (~22-33€)", transport: "🚐 Recogida en hotel incluida en tour", tip: "Reservar en agencia local. Mañana temprano es la mejor hora (marea alta, más fácil remar). Llevad protección solar.", mapUrl: "https://maps.google.com/?q=Ao+Thalane+Kayak+Krabi", mustDo: false },
            { time: "14:00", period: "afternoon", name: "Tarde libre — playa y descanso", desc: "Relajarse en la playa o explorar tiendas de Ao Nang.", zone: "Ao Nang", duration: "Resto del día", cost: "—", transport: "🚶 Hotel/playa", tip: "Los últimos días en Tailandia. Aprovechad los masajes baratos y la comida callejera.", mapUrl: "", mustDo: false }
        ]
    },
    {
        city: "krabi", dayNumber: 8, date: "2026-03-27",
        title: "Día libre de playa",
        zone: "Ao Nang",
        activities: [
            { time: "10:00", period: "morning", name: "Día libre completo", desc: "Último día completo de playa. Sin planes fijos — disfrutad.", zone: "Ao Nang", duration: "Todo el día", cost: "—", transport: "🚶", tip: "Podéis repetir Railay, alquilar moto (฿300/día), explorar playas cercanas, o simplemente no hacer nada.", mapUrl: "", mustDo: false },
            { time: "19:00", period: "evening", name: "Última cena de seafood en Ao Nang", desc: "Despedida de Krabi con cena de marisco frente al mar.", zone: "Ao Nang", duration: "2h", cost: "฿400-600", transport: "🚶 Paseo marítimo", tip: "Probad lo que no hayáis probado: cangrejo, lobster, whole fish. Los precios son imposibles en Europa.", mapUrl: "", mustDo: true }
        ]
    },
    {
        city: "krabi", dayNumber: 9, date: "2026-03-28",
        title: "Último día + preparar salida",
        zone: "Ao Nang",
        activities: [
            { time: "09:00", period: "morning", name: "Mañana libre + check-out", desc: "Último baño. Check-out del hotel. Vuelo mañana 29 Mar a las 10:50 KBV→DMK.", zone: "Ao Nang", duration: "Todo el día", cost: "—", transport: "🚶", tip: "Mañana vuelo a las 10:50. Salid hacia el aeropuerto a las 08:30 (~30 min en shuttle).", mapUrl: "", mustDo: true }
        ]
    },

    // ─────────────────── BANGKOK TRANSIT 2 (1 día: 29-30 Mar) ───────────────────
    {
        city: "bangkok2", dayNumber: 1, date: "2026-03-29",
        title: "Bangkok express: Gran Palacio + Wat Arun",
        zone: "Old Bangkok / Rattanakosin",
        activities: [
            { time: "12:10", period: "afternoon", name: "Llegada a DMK desde Krabi", desc: "Vuelo AirAsia FD3230. Hotel Chakrabongse está en Old Bangkok, cerca de Wat Arun.", zone: "Aeropuerto", duration: "30min", cost: "—", transport: "✈️ Vuelo FD3230", tip: "Cogéis Grab al hotel. Zona vieja de Bangkok = sin metro, mejor taxi/Grab.", mapUrl: "", mustDo: true },
            { time: "13:30", period: "afternoon", name: "Check-in + almuerzo rápido", desc: "Hotel Chakrabongse, junto al río. Zona histórica. Comed en el hotel o callejero.", zone: "Rattanakosin", duration: "1h", cost: "฿100-200", transport: "🚕 Grab DMK → hotel (40-60 min según tráfico, ฿300-500)", tip: "Depósito de 500 THB en el hotel. Zona premium junto al río Chao Phraya.", mapUrl: "https://maps.google.com/?q=Chakrabongse+Villas+Bangkok", mustDo: true },
            { time: "15:00", period: "afternoon", name: "Wat Arun (Temple of Dawn)", desc: "Templo icónico de Bangkok. Torres decoradas con porcelana. Subid arriba para vistas.", zone: "Rattanakosin", duration: "1.5h", cost: "฿100 (~2.80€)", transport: "🚶 5 min andando desde hotel Chakrabongse (mismo lado del río)", tip: "Subid la torre central — las vistas al río y al Grand Palace son brutales. Ropa que cubra hombros y rodillas.", mapUrl: "https://maps.google.com/?q=Wat+Arun+Bangkok", mustDo: true },
            { time: "17:00", period: "evening", name: "Cruzar río → Gran Palacio (exterior)", desc: "El complejo palacial más impresionante del Sudeste Asiático. Si llegas antes de las 15:30 entráis.", zone: "Rattanakosin", duration: "1h", cost: "฿500 si entráis (~14€) / Gratis exterior", transport: "🛶 Ferry cruzar río (฿4) o puente", tip: "Cierra a las 15:30. Si no entráis, las fotos exteriores ya son increíbles. Mejor entrar otro viaje.", mapUrl: "https://maps.google.com/?q=Grand+Palace+Bangkok", mustDo: true },
            { time: "19:00", period: "evening", name: "Cena: Pad Thai callejero + Khao San Rd", desc: "Pad Thai en Thip Samai (legendario) o cenáis en Khao San Road (zona mochilera).", zone: "Rattanakosin/Banglamphu", duration: "2h", cost: "฿100-200", transport: "🚕 Grab o tuk-tuk (5 min desde Grand Palace)", tip: "Thip Samai tiene las mejores Pad Thai de Bangkok. Si queréis ambiente: Khao San Road.", mapUrl: "https://maps.google.com/?q=Thip+Samai+Bangkok", mustDo: true }
        ]
    },

    // ─────────────────── XI'AN (2 días: 31 Mar - 1 Abr) ───────────────────
    {
        city: "xian", dayNumber: 1, date: "2026-03-31",
        title: "Muslim Quarter + Muralla en bici",
        zone: "Centro histórico",
        activities: [
            { time: "10:00", period: "morning", name: "Check-out cápsula aeropuerto + metro al centro", desc: "Salir del Space Capsule Hotel → metro al Campanile Hotel Bell Tower.", zone: "Aeropuerto → Centro", duration: "1h", cost: "¥8 (~1€)", transport: "🚇 Línea 14 Airport → transfer → L2 Bell Tower (55 min)", tip: "El metro del aeropuerto es muy eficiente. Dejad equipaje en el hotel nuevo.", mapUrl: "https://maps.google.com/?q=Campanile+Hotel+Xian+Bell+Tower", mustDo: true },
            { time: "11:30", period: "morning", name: "Torre de la Campana + Torre del Tambor", desc: "Las dos torres icónicas del centro de Xi'an. Vistas panorámicas de la ciudad.", zone: "Centro", duration: "1h", cost: "¥30 combo (~4€)", transport: "🚶 Junto al hotel Campanile (5 min)", tip: "Subid a la Torre del Tambor para las mejores vistas. Espectáculo de tambores a ciertas horas.", mapUrl: "https://maps.google.com/?q=Bell+Tower+Xian", mustDo: true },
            { time: "12:30", period: "afternoon", name: "Muslim Quarter (回民街) — ¡COMIDA!", desc: "La mejor zona gastronómica de China. Callejones musulmanes con comida callejera increíble.", zone: "Muslim Quarter", duration: "2.5h", cost: "~¥50-80 (probar de todo)", transport: "🚶 5 min andando desde Torre del Tambor", tip: "MUST EAT: Rou Jia Mo (hamburguesa china ¥15), Biang Biang noodles (¥20), persimmon cake (¥5), lamb skewers (¥10). Id con hambre.", mapUrl: "https://maps.google.com/?q=Muslim+Quarter+Xian", mustDo: true },
            { time: "15:30", period: "afternoon", name: "Muralla de la Ciudad en bicicleta 🚲", desc: "Recorrer la muralla medieval más completa de China (13.7 km) en bici.", zone: "Muralla", duration: "2h", cost: "¥54 alquiler bici 2h (~7€)", transport: "🚶 Acceso sur de la muralla (South Gate, 10 min andando desde Muslim Quarter)", tip: "Coged la bici de 2 personas (tándem). La vuelta completa son ~13.7 km, ~1.5h pedaleando tranquilos. Vistas increíbles.", mapUrl: "https://maps.google.com/?q=Xian+City+Wall+South+Gate", mustDo: true },
            { time: "18:00", period: "evening", name: "Atardecer desde la muralla", desc: "Devolved la bici en cualquier punto y bajad. El atardecer desde arriba es espectacular.", zone: "Muralla", duration: "30min", cost: "Incluido", transport: "🚶 Bajad por la salida más cercana", tip: "Si podéis, devolved la bici en la puerta sur (donde la cogisteis) para no pagar extra.", mapUrl: "", mustDo: true },
            { time: "19:00", period: "evening", name: "Cena: Yang Rou Pao Mo", desc: "Sopa de cordero donde TÚ desmenugas el pan dentro. Ritual gastronómico de Xi'an.", zone: "Muslim Quarter", duration: "1.5h", cost: "~¥35", transport: "🚶 Volved al Muslim Quarter (10 min)", tip: "El camarero te da un pan y un bol. Tú desmenugas el pan en trozos pequeños, él lo cocina con caldo de cordero. Experiencia única.", mapUrl: "https://maps.google.com/?q=Old+Sun+Family+Xian", mustDo: false }
        ]
    },
    {
        city: "xian", dayNumber: 2, date: "2026-04-01",
        title: "⭐ Guerreros de Terracota",
        zone: "Lintong (afueras)",
        activities: [
            { time: "08:00", period: "morning", name: "Bus a Guerreros de Terracota", desc: "8.000 guerreros de terracota tamaño real. Patrimonio de la Humanidad. ¡Imprescindible!", zone: "Lintong (40 km)", duration: "1.5h trayecto", cost: "¥7 bus (~1€)", transport: "🚌 Bus 306 (游5) desde Xi'an Railway Station (salida cada 15 min, 1h trayecto)", tip: "SOLO bus oficial 306/游5 (verde). Ignorad a cualquiera que os ofrezca tour en la estación = estafa. El bus cuesta ¥7, los tours piratas ¥300+.", mapUrl: "https://maps.google.com/?q=Terracotta+Warriors+Xian", mustDo: true },
            { time: "09:30", period: "morning", name: "Museo Guerreros de Terracota", desc: "3 fosos de excavación + museo. Foso 1 es el más grande e impresionante (6.000 figuras).", zone: "Lintong", duration: "3h", cost: "¥120 (~15€)", transport: "🚌 Bus os deja en la puerta", tip: "Empezad por el Foso 1 (el grande). Luego Foso 2 y 3. El museo del bronce también es brutal. Audioguía en inglés ¥30.", mapUrl: "https://maps.google.com/?q=Terracotta+Army+Museum", mustDo: true },
            { time: "13:00", period: "afternoon", name: "Almuerzo cerca del museo", desc: "Zona de restaurantes frente al museo. Comida china estándar.", zone: "Lintong", duration: "1h", cost: "~¥30-50", transport: "🚶 Restaurantes frente a la puerta del museo", tip: "No demasiado gourmet pero funcional. Arroz frito + noodles.", mapUrl: "", mustDo: false },
            { time: "14:30", period: "afternoon", name: "Vuelta a Xi'an + Gran Mezquita", desc: "La Gran Mezquita de Xi'an (742 d.C.) — fusión única de arquitectura china e islámica.", zone: "Muslim Quarter", duration: "1h visita", cost: "¥25 (~3€)", transport: "🚌 Bus 306 vuelta a Xi'an (1h) → 🚶 10 min al Muslim Quarter", tip: "Una de las mezquitas más antiguas de China. Arquitectura stunning — parece un templo chino por fuera.", mapUrl: "https://maps.google.com/?q=Great+Mosque+Xian", mustDo: false },
            { time: "17:00", period: "evening", name: "Última comida callejera + preparar tren", desc: "Último paseo por Muslim Quarter. Mañana tren bala a Beijing.", zone: "Muslim Quarter", duration: "2h", cost: "¥50", transport: "🚶 Ya estáis en Muslim Quarter", tip: "Repetir favoritos: rou jia mo, biang biang noodles. Mañana os espera el tren bala (~4.5h).", mapUrl: "", mustDo: true }
        ]
    },

    // ─────────────────── BEIJING (5 días: 2-6 Abr) ───────────────────
    {
        city: "beijing", dayNumber: 1, date: "2026-04-02",
        title: "Llegada + Templo del Cielo + Hutongs",
        zone: "Centro / Dongcheng",
        activities: [
            { time: "12:00", period: "afternoon", name: "Llegada en tren bala desde Xi'an", desc: "Tren bala ~4.5h. Llegada a Beijing West o South Station.", zone: "Estación", duration: "30min", cost: "~¥500 (~65€)", transport: "🚄 Tren bala Xi'an → Beijing", tip: "Reservar en Trip.com o 12306.cn. Segunda clase está bien. Vistas de la campiña china.", mapUrl: "https://maps.google.com/?q=Beijing+South+Railway+Station", mustDo: true },
            { time: "13:00", period: "afternoon", name: "Metro al hotel + check-in", desc: "Comfort Hotel Tiantan, Dongcheng. Cerca del Templo del Cielo.", zone: "Dongcheng", duration: "45min", cost: "¥5 metro", transport: "🚇 Desde la estación → L4/L14 → zona Tiantan", tip: "El hotel está en zona perfecta: Templo del Cielo al lado, metro cercano para todo.", mapUrl: "https://maps.google.com/?q=Comfort+Hotel+Beijing+Tiantan", mustDo: true },
            { time: "14:30", period: "afternoon", name: "Templo del Cielo (天坛)", desc: "Donde el emperador rezaba por buenas cosechas. Patrimonio UNESCO. Parque enorme.", zone: "Tiantan", duration: "2.5h", cost: "¥34 combo (~4.50€)", transport: "🚶 Andando desde el hotel (10-15 min)", tip: "Id temprano/tarde para ver a los locales: tai chi, danza, canto coral. El Salón de Oración es icónico.", mapUrl: "https://maps.google.com/?q=Temple+of+Heaven+Beijing", mustDo: true },
            { time: "17:30", period: "evening", name: "Hutongs en rickshaw", desc: "Callejones tradicionales de Beijing. Casas con patio (siheyuan). El Beijing auténtico.", zone: "Dongcheng (Nanluoguxiang)", duration: "1.5h", cost: "¥100-150 rickshaw (~13-20€)", transport: "🚇 L5 → Beixinqiao o 🚕 taxi a Nanluoguxiang", tip: "Nanluoguxiang es la calle más famosa (turística). Para hutongs más auténticos, id a Wudaoying Hutong.", mapUrl: "https://maps.google.com/?q=Nanluoguxiang+Beijing", mustDo: true },
            { time: "19:30", period: "evening", name: "Cena: Pato Pekín 🦆", desc: "EL plato emblemático de Beijing. Pato laqueado cortado en mesa. Imprescindible.", zone: "Dongcheng", duration: "1.5h", cost: "~¥200-300 para 2 (~26-39€)", transport: "🚕 Grab/Didi a Da Dong o QuanJuDe", tip: "Da Dong es el más moderno y premium. QuanJuDe es el histórico (desde 1864). Reservar.", mapUrl: "https://maps.google.com/?q=Da+Dong+Roast+Duck+Beijing", mustDo: true }
        ]
    },
    {
        city: "beijing", dayNumber: 2, date: "2026-04-03",
        title: "⭐ Ciudad Prohibida + Tiananmén",
        zone: "Dongcheng / Eje central",
        activities: [
            { time: "07:30", period: "morning", name: "Jianbing callejero (desayuno)", desc: "Crepe callejero de huevo con crujiente y salsa. EL desayuno de Beijing.", zone: "Dongcheng", duration: "15min", cost: "¥8 (~1€)", transport: "🚶 Cualquier puesto callejero cercano al hotel (buscar señoras con plancha circular)", tip: "Señalad lo que queréis dentro: huevo, salsa picante, cebollino, crujiente. Brutal.", mapUrl: "", mustDo: true },
            { time: "08:00", period: "morning", name: "Plaza de Tiananmén", desc: "La plaza pública más grande del mundo (440.000 m²). Monumento, Mausoleo de Mao.", zone: "Tiananmén", duration: "1h", cost: "Gratis", transport: "🚇 L1 → Tiananmen East (salida A)", tip: "⚠️ RESERVA OBLIGATORIA con pasaporte en app 'Tiananmen Reservation'. Hacedlo 1-2 días antes. Escáner de seguridad.", mapUrl: "https://maps.google.com/?q=Tiananmen+Square+Beijing", mustDo: true },
            { time: "09:00", period: "morning", name: "Ciudad Prohibida (故宫)", desc: "El palacio imperial más grande del mundo. 980 edificios. Patrimonio UNESCO.", zone: "Tiananmén/Forbidden City", duration: "3.5h", cost: "¥60 (~8€)", transport: "🚶 Entrada por Meridian Gate (puerta sur, 5 min andando desde Tiananmén)", tip: "⚠️ RESERVA OBLIGATORIA en gu-gong.cn con pasaporte (días antes). Max 80.000 personas/día. Id a las 08:30. Sale por la puerta norte.", mapUrl: "https://maps.google.com/?q=Forbidden+City+Beijing", mustDo: true },
            { time: "13:00", period: "afternoon", name: "Jingshan Park (景山公园)", desc: "Colina artificial detrás de la Ciudad Prohibida. LAS MEJORES vistas de Beijing.", zone: "Jingshan", duration: "1h", cost: "¥10 (~1.30€)", transport: "🚶 Salid por la puerta norte de la Ciudad Prohibida → cruzar la calle → entrada", tip: "Subid hasta la cima (5 min). La foto panorámica de la Ciudad Prohibida desde arriba es LA foto del viaje.", mapUrl: "https://maps.google.com/?q=Jingshan+Park+Beijing", mustDo: true },
            { time: "14:30", period: "afternoon", name: "Almuerzo: Zhajiang Mian", desc: "Fideos fríos con salsa espesa de soja y cerdo. Plato típico de Beijing.", zone: "Dongcheng", duration: "1h", cost: "¥25 (~3€)", transport: "🚶 Restaurantes cerca de Jingshan/Beihai", tip: "Cualquier noodle house local. Pedid zhajiang mian + side de pepino.", mapUrl: "", mustDo: false },
            { time: "16:00", period: "afternoon", name: "Beihai Park + Lago", desc: "Parque imperial con lago, pagoda blanca y jardines. Muy bonito al atardecer.", zone: "Xicheng", duration: "1.5h", cost: "¥10 parque + ¥10 White Pagoda", transport: "🚶 10 min andando al oeste desde Jingshan", tip: "Podéis alquilar un bote de pedales en el lago (¥60/h). Muy romántico al atardecer.", mapUrl: "https://maps.google.com/?q=Beihai+Park+Beijing", mustDo: false }
        ]
    },
    {
        city: "beijing", dayNumber: 3, date: "2026-04-04",
        title: "⭐ Gran Muralla China (Mutianyu)",
        zone: "Mutianyu (80 km norte)",
        activities: [
            { time: "07:00", period: "morning", name: "Salida hacia Mutianyu", desc: "La Gran Muralla — sección Mutianyu. Menos turistas que Badaling, más paisaje, teleférico.", zone: "Mutianyu (80 km)", duration: "1.5-2h trayecto", cost: "¥160-200 tour bus", transport: "🚌 Bus 867 desde Dongzhimen (sale 07:00, 2h) o 🚐 Tour organizado (~¥200 ida/vuelta)", tip: "Mejor contratar tour con transporte en hotel/agencia (~¥200-300 ida/vuelta). El bus público es posible pero complicado.", mapUrl: "https://maps.google.com/?q=Mutianyu+Great+Wall", mustDo: true },
            { time: "09:30", period: "morning", name: "Gran Muralla — Mutianyu", desc: "Caminar por la Muralla entre torres de vigilancia con vistas a montañas infinitas.", zone: "Mutianyu", duration: "3-4h", cost: "¥40 entrada + ¥120 teleférico (~21€ total)", transport: "🚡 Teleférico sube + tobogán baja (¡diversión!)", tip: "Subid en teleférico (ahorra energía). Caminad hacia la izquierda (menos gente). Bajad en TOBOGÁN — es divertidísimo. Llevar agua y snacks.", mapUrl: "https://maps.google.com/?q=Mutianyu+Great+Wall+Beijing", mustDo: true },
            { time: "14:00", period: "afternoon", name: "Almuerzo en Mutianyu Village", desc: "Pueblo al pie de la muralla con restaurantes. Comida china de campo.", zone: "Mutianyu", duration: "1h", cost: "¥40-60", transport: "🚶 Bajada del tobogán → pueblo", tip: "Los restaurantes de la calle principal están bien. No es gourmet pero es local.", mapUrl: "", mustDo: false },
            { time: "15:30", period: "afternoon", name: "Vuelta a Beijing", desc: "Bus o tour de vuelta. Llegada ~17:00-18:00.", zone: "Tránsito", duration: "2h", cost: "Incluido si es tour", transport: "🚌 Tour bus vuelta o bus 867", tip: "Dormid en el bus si estáis cansados. El día de la muralla es intenso.", mapUrl: "", mustDo: true },
            { time: "19:00", period: "evening", name: "Cena: Hot Pot (Haidilao)", desc: "Hot Pot picante para reponer fuerzas. Experiencia social brutal.", zone: "Dongcheng", duration: "2h", cost: "¥100-150 por persona (~13-20€)", transport: "🚕 Didi/Grab a cualquier Haidilao", tip: "Haidilao: servicio legendario (manicura gratis mientras esperas, espectáculo de fideos). Pedir caldo mitad-mitad.", mapUrl: "https://maps.google.com/?q=Haidilao+Beijing", mustDo: false }
        ]
    },
    {
        city: "beijing", dayNumber: 4, date: "2026-04-05",
        title: "Summer Palace + Parque Olímpico",
        zone: "Noroeste + Norte Beijing",
        activities: [
            { time: "08:30", period: "morning", name: "Palacio de Verano (颐和园)", desc: "Jardín imperial con lago, colinas y pabellones. Patrimonio UNESCO. El más bonito de China.", zone: "Noroeste Beijing", duration: "3h", cost: "¥30 (~4€) + ¥10 jardines extras", transport: "🚇 L4 → Beigongmen (puerta norte)", tip: "Entrad por la puerta norte, bajad a pie hasta el lago. Pasead por el Long Corridor (728m de pinturas). Alquilad barca en el lago.", mapUrl: "https://maps.google.com/?q=Summer+Palace+Beijing", mustDo: true },
            { time: "12:00", period: "afternoon", name: "Almuerzo: comida de palacio", desc: "Restaurante dentro del Summer Palace con cocina imperial.", zone: "Summer Palace", duration: "1h", cost: "¥60-100", transport: "🚶 Restaurantes dentro del parque", tip: "La cafetería junto al lago es suficiente. No hace falta gastar mucho.", mapUrl: "", mustDo: false },
            { time: "14:00", period: "afternoon", name: "Parque Olímpico: Nido de Pájaro + Cubo de Agua", desc: "Estadio Nacional (Bird's Nest) y Centro Acuático (Water Cube). Iconos de los JJ.OO. 2008.", zone: "Norte Beijing", duration: "1.5h", cost: "¥50-70 por edificio (o gratis por fuera)", transport: "🚇 L8 → Olympic Green", tip: "Las fotos exteriores ya son brutales. Entrar al Nido cuesta ¥70 pero el interior es menos interesante. El Cubo (ahora parque acuático) solo si os apetece.", mapUrl: "https://maps.google.com/?q=Beijing+National+Stadium", mustDo: false },
            { time: "16:00", period: "afternoon", name: "Wudaoying Hutong", desc: "El hutong más hipster de Beijing. Cafés artesanales, tiendas de diseño, galerías.", zone: "Dongcheng", duration: "2h", cost: "Gratis", transport: "🚇 L2/L5 → Yonghegong (salida A)", tip: "Más auténtico que Nanluoguxiang. Perfecto para café + paseo. Justo al lado del Lama Temple.", mapUrl: "https://maps.google.com/?q=Wudaoying+Hutong+Beijing", mustDo: false },
            { time: "19:00", period: "evening", name: "Wangfujing Night Market", desc: "El night market más loco de China. Pinchos de escorpiones, estrellas de mar, serpientes.", zone: "Dongcheng", duration: "1.5h", cost: "¥50-100", transport: "🚇 L1 → Wangfujing (salida A)", tip: "Más para la experiencia que para comer (la comida normal de Wangfujing es mejor). Los pinchos exóticos son para turistas pero son divertidos.", mapUrl: "https://maps.google.com/?q=Wangfujing+Night+Market+Beijing", mustDo: false }
        ]
    },
    {
        city: "beijing", dayNumber: 5, date: "2026-04-06",
        title: "Último día: Lama Temple + compras + despedida",
        zone: "Dongcheng",
        activities: [
            { time: "09:00", period: "morning", name: "Lama Temple (Yonghegong)", desc: "El templo budista tibetano más importante fuera del Tíbet. Buda de 18m de alto.", zone: "Dongcheng", duration: "1.5h", cost: "¥25 (~3€)", transport: "🚇 L2/L5 → Yonghegong", tip: "Impresionante. El Buda gigante de madera de sándalo (18m) está en el último pabellón. Comprar incienso gratis en la entrada.", mapUrl: "https://maps.google.com/?q=Lama+Temple+Beijing", mustDo: true },
            { time: "11:00", period: "morning", name: "Confucius Temple + Imperial Academy", desc: "Templo tranquilo junto al Lama Temple. Menos turistas, muy zen.", zone: "Dongcheng", duration: "1h", cost: "¥30", transport: "🚶 Justo al lado del Lama Temple (2 min)", tip: "Buen complemento al Lama Temple. Los cipreses centenarios son bonitos.", mapUrl: "https://maps.google.com/?q=Confucius+Temple+Beijing", mustDo: false },
            { time: "12:30", period: "afternoon", name: "Almuerzo: último Jianbing + noodles", desc: "Despedida gastronómica de China. Repetid favoritos.", zone: "Dongcheng", duration: "1h", cost: "¥30-50", transport: "🚶 Zona Wudaoying/Yonghegong", tip: "Último día en China. Comed todo lo que no hayáis repetido.", mapUrl: "", mustDo: false },
            { time: "14:00", period: "afternoon", name: "Compras + souvenirs + preparar maletas", desc: "Último paseo. Comprar souvenirs. Preparar equipaje para el vuelo de mañana.", zone: "Hotel/Centro", duration: "3h", cost: "Variable", transport: "🚇 Metro a zonas comerciales o Wangfujing", tip: "Vuelo mañana 7 Abr a las 14:15 PKX→AMS→MAD. Check-out y salid al aeropuerto a las 10:00.", mapUrl: "", mustDo: true },
            { time: "19:00", period: "evening", name: "Última cena: Lamb Skewers + cerveza", desc: "Brochetas de cordero con comino en la calle. La despedida perfecta de Beijing.", zone: "Dongcheng", duration: "2h", cost: "¥50-80", transport: "🚶 Puestos callejeros o restaurante uigur", tip: "Las brochetas de cordero (yang rou chuan) son adictivas. Con cerveza Tsingtao. Último brindis en Asia.", mapUrl: "https://maps.google.com/?q=Lamb+Skewers+Beijing", mustDo: true }
        ]
    }

];
