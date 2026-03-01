// ═══════════════════════════════════════════════════════════
// PHOTO SPOTS — Best Instagram-worthy locations per city
// ═══════════════════════════════════════════════════════════

const PHOTO_SPOTS = [
    {
        city: "shanghai", flag: "🇨🇳", name: "Shanghai",
        spots: [
            { name: "The Bund (de noche)", desc: "Skyline de Pudong con luces. LA foto de Shanghai.", when: "🌙 21:00-22:00 (luces encendidas)", tip: "Lado Puxi mirando a Pudong. Trípode para larga exposición.", mapUrl: "https://maps.google.com/?q=The+Bund+Shanghai", mustSee: true },
            { name: "Lujiazui Skybridge", desc: "Pasarela circular elevada entre los 3 rascacielos de Pudong.", when: "☀️ Atardecer", tip: "Debajo de la Oriental Pearl Tower. Vista 360° de los 3 gigantes.", mapUrl: "https://maps.google.com/?q=Lujiazui+Skybridge", mustSee: true },
            { name: "Yu Garden — puente zigzag", desc: "Puente sobre el estanque del jardín. Arquitectura clásica china.", when: "🌅 Temprano (antes 10:00)", tip: "Ir temprano para evitar multitudes. El reflejo en el agua es mágico.", mapUrl: "https://maps.google.com/?q=Yu+Garden+Shanghai", mustSee: true },
            { name: "Nanjing Road (neones)", desc: "Calle peatonal con neones gigantes. Vibra de metrópolis.", when: "🌙 Noche (20:00+)", tip: "Desde la mitad de la calle mirando hacia el este.", mapUrl: "https://maps.google.com/?q=Nanjing+Road+Shanghai", mustSee: false },
            { name: "French Concession callejuelas", desc: "Calles arboladas con arquitectura colonial francesa. Very aesthetic.", when: "☀️ Media mañana", tip: "Las calles Wukang y Xinle son las más fotogénicas. Cafés bonitos.", mapUrl: "https://maps.google.com/?q=Wukang+Road+Shanghai", mustSee: false }
        ]
    },
    {
        city: "taipei", flag: "🇹🇼", name: "Taipei",
        spots: [
            { name: "Elephant Mountain → Taipei 101", desc: "Vista panorámica de Taipei 101 entre montañas. Icónica.", when: "🌅 Atardecer (17:30 en marzo)", tip: "Subir 20 min antes. Trípode. Quedarse para foto nocturna con 101 iluminado.", mapUrl: "https://maps.google.com/?q=Elephant+Mountain+Taipei", mustSee: true },
            { name: "Jiufen — farolillos rojos", desc: "Callejón de farolillos que inspiró 'El Viaje de Chihiro'.", when: "🌙 Atardecer-noche", tip: "La escalera junto a A-MEI Tea House. Al atardecer los farolillos se encienden.", mapUrl: "https://maps.google.com/?q=Jiufen+Old+Street", mustSee: true },
            { name: "Longshan Temple — incienso", desc: "Templo centenario con humo de incienso y dragones dorados.", when: "🌅 Mañana temprano", tip: "El humo del incienso crea una atmósfera increíble para fotos.", mapUrl: "https://maps.google.com/?q=Longshan+Temple+Taipei", mustSee: true },
            { name: "Shilin Night Market", desc: "Caos colorido de comida taiwanesa. Street food photography.", when: "🌙 20:00-22:00", tip: "La entrada principal con todos los carteles luminosos.", mapUrl: "https://maps.google.com/?q=Shilin+Night+Market", mustSee: false },
            { name: "Taipei 101 desde abajo", desc: "El rascacielos más icónico visto desde la plaza.", when: "☀️ Mediodía (luz directa)", tip: "Tumbarse en la plaza mirando arriba. Perspectiva épica.", mapUrl: "https://maps.google.com/?q=Taipei+101", mustSee: false }
        ]
    },
    {
        city: "bangkok", flag: "🇹🇭", name: "Bangkok",
        spots: [
            { name: "Wat Arun — torres", desc: "Templo icónico con torres decoradas de porcelana. Deslumbrante.", when: "🌅 Atardecer (luz dorada)", tip: "Subid la torre central. Las vistas al río + Grand Palace desde arriba.", mapUrl: "https://maps.google.com/?q=Wat+Arun+Bangkok", mustSee: true },
            { name: "Grand Palace exterior", desc: "Muros dorados y tejados puntiagudos. Arquitectura irreal.", when: "☀️ Mañana (8:30)", tip: "Las fotos exteriores son igual de buenas. Cielo azul = mejor foto.", mapUrl: "https://maps.google.com/?q=Grand+Palace+Bangkok", mustSee: true },
            { name: "Chao Phraya al atardecer", desc: "El río con templos de fondo. Silueta de Bangkok.", when: "🌅 Atardecer desde el hotel", tip: "Desde la terraza del Chakrabongse Villas (vuestro hotel!).", mapUrl: "https://maps.google.com/?q=Chao+Phraya+River+Bangkok", mustSee: true },
            { name: "Khao San Road de noche", desc: "Neones, gente, mochileros. El caos bonito de Bangkok.", when: "🌙 22:00+", tip: "Wide angle. Los carteles luminosos con tuk-tuks pasando.", mapUrl: "https://maps.google.com/?q=Khao+San+Road+Bangkok", mustSee: false }
        ]
    },
    {
        city: "krabi", flag: "🇹🇭", name: "Krabi",
        spots: [
            { name: "Railay Beach", desc: "Acantilados kársticos verticales + playa turquesa. Portada de revista.", when: "☀️ Mañana (luz frontal)", tip: "Desde el agua mirando a los acantilados. O desde la playa con long-tails.", mapUrl: "https://maps.google.com/?q=Railay+Beach+Krabi", mustSee: true },
            { name: "Koh Poda — arena blanca", desc: "Isla con arena blanca infinita y agua cristalina.", when: "☀️ Mediodía (sol alto = agua turquesa)", tip: "La foto con palmeras + agua turquesa. Llegar en el tour 4 islas.", mapUrl: "https://maps.google.com/?q=Koh+Poda+Krabi", mustSee: true },
            { name: "Tiger Cave Temple (cima)", desc: "Buda dorado en la cima con vistas 360° de Krabi.", when: "🌅 Amanecer o mañana temprano", tip: "1.260 escalones pero las vistas son BRUTALES. Foto con Buda dorado.", mapUrl: "https://maps.google.com/?q=Tiger+Cave+Temple+Krabi", mustSee: true },
            { name: "Hong Lagoon", desc: "Laguna color esmeralda rodeada de acantilados verticales.", when: "☀️ Marea alta (mañana)", tip: "Solo accesible en kayak o speedboat. COLOR increíble.", mapUrl: "https://maps.google.com/?q=Hong+Island+Krabi", mustSee: true },
            { name: "Phra Nang Cave Beach", desc: "Cueva en la playa con formaciones kársticas.", when: "☀️ Tarde (luz lateral)", tip: "La cueva + las rocas + el agua turquesa. Uno de los mejores spots del viaje.", mapUrl: "https://maps.google.com/?q=Phra+Nang+Cave+Beach", mustSee: false },
            { name: "Ao Nang atardecer", desc: "Long-tail boats silueteados contra el atardecer.", when: "🌅 Atardecer (18:15)", tip: "Desde la playa de Ao Nang con los barcos en primer plano.", mapUrl: "https://maps.google.com/?q=Ao+Nang+Beach+Sunset", mustSee: false }
        ]
    },
    {
        city: "xian", flag: "🇨🇳", name: "Xi'an",
        spots: [
            { name: "Guerreros de Terracota — Foso 1", desc: "6.000 guerreros tamaño real en formación. Impactante.", when: "☀️ Abrir (9:00) — menos gente", tip: "Desde la barandilla del fondo: toda la formación en una foto. Top 3 del viaje.", mapUrl: "https://maps.google.com/?q=Terracotta+Warriors", mustSee: true },
            { name: "Muralla al atardecer", desc: "La muralla medieval más completa de China con luz dorada.", when: "🌅 Atardecer (17:30-18:30)", tip: "Desde la bici mirando a lo largo de la muralla. La perspectiva infinita.", mapUrl: "https://maps.google.com/?q=Xian+City+Wall", mustSee: true },
            { name: "Muslim Quarter — callejones", desc: "Puestos de comida humeantes, farolillos, callejones estrechos.", when: "🌙 Noche (20:00+)", tip: "El humo de las brochetas + farolillos rojos = foto mood perfecto.", mapUrl: "https://maps.google.com/?q=Muslim+Quarter+Xian", mustSee: true },
            { name: "Torre del Tambor", desc: "Vista panorámica desde la torre histórica.", when: "☀️ Mañana", tip: "Subir para panorámica. Se ve la muralla, Muslim Quarter y la ciudad.", mapUrl: "https://maps.google.com/?q=Drum+Tower+Xian", mustSee: false }
        ]
    },
    {
        city: "beijing", flag: "🇨🇳", name: "Beijing",
        spots: [
            { name: "Jingshan Park → Ciudad Prohibida", desc: "LA panorámica: toda la Ciudad Prohibida vista desde arriba.", when: "☀️ Mediodía (luz cenital) o 🌅 atardecer", tip: "Subir a la cima (5 min). Llegar justo después de salir de la Ciudad Prohibida. LA FOTO DEL VIAJE.", mapUrl: "https://maps.google.com/?q=Jingshan+Park+Beijing", mustSee: true },
            { name: "Gran Muralla — Mutianyu", desc: "La Muralla serpenteando por montañas infinitas.", when: "☀️ Media mañana (10:00)", tip: "Caminar hacia la izquierda (menos gente). Las torres de vigilancia con montañas brumosas.", mapUrl: "https://maps.google.com/?q=Mutianyu+Great+Wall", mustSee: true },
            { name: "Templo del Cielo", desc: "El Salón de Oración con cielo azul. Perfección arquitectónica.", when: "☀️ Mañana temprano", tip: "Enmarcarlo con los árboles del parque. Los locales haciendo tai chi en primer plano.", mapUrl: "https://maps.google.com/?q=Temple+of+Heaven+Beijing", mustSee: true },
            { name: "Hutong — Wudaoying", desc: "Callejones tradicionales con cafés modernos. Contraste bonito.", when: "☀️ Tarde", tip: "Puertas rojas, bicicletas aparcadas, farolillos. El Beijing auténtico.", mapUrl: "https://maps.google.com/?q=Wudaoying+Hutong", mustSee: false },
            { name: "Ciudad Prohibida — interior", desc: "Palacios rojos y dorados en perspectiva infinita.", when: "☀️ Temprano (8:30 apertura)", tip: "Las puertas en perspectiva, una dentro de otra. Disparar en línea recta por el eje central.", mapUrl: "https://maps.google.com/?q=Forbidden+City+Beijing", mustSee: true },
            { name: "Night Skyline — Bird's Nest", desc: "El Nido de Pájaro iluminado de noche.", when: "🌙 Noche (20:00+)", tip: "Desde la explanada del Olympic Green. Se refleja en el agua.", mapUrl: "https://maps.google.com/?q=Beijing+National+Stadium+Night", mustSee: false }
        ]
    }
];
