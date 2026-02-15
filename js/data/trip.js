// ═══════════════════════════════════════════════════════════
// TRIP DATA — Core travel information (flights, hotels, cities)
// ═══════════════════════════════════════════════════════════

const TRIP_DATA = {
    trip: { name: "Asia Trip 2026", startDate: "2026-03-12", endDate: "2026-04-08", totalDays: 27 },
    travelers: [
        { name: "Iker Fernandez Caballero", emoji: "👨" },
        { name: "Xo Anais Moragon Garcia", emoji: "👩" }
    ],
    cities: [
        { id: "shanghai", name: "Shanghai", country: "China", cc: "cn", flag: "🇨🇳", start: "2026-03-13", end: "2026-03-16", nights: 3, lat: 31.2304, lng: 121.4737 },
        { id: "taipei", name: "Taipei", country: "Taiwan", cc: "tw", flag: "🇹🇼", start: "2026-03-16", end: "2026-03-19", nights: 3, lat: 25.033, lng: 121.5654 },
        { id: "bangkok1", name: "Bangkok", country: "Thailand", cc: "th", flag: "🇹🇭", start: "2026-03-19", end: "2026-03-20", nights: 1, lat: 13.7563, lng: 100.5018, note: "Transit" },
        { id: "krabi", name: "Krabi", country: "Thailand", cc: "th", flag: "🇹🇭", start: "2026-03-20", end: "2026-03-29", nights: 9, lat: 8.0363, lng: 98.8362, note: "Ao Nang 🏖️" },
        { id: "bangkok2", name: "Bangkok", country: "Thailand", cc: "th", flag: "🇹🇭", start: "2026-03-29", end: "2026-03-30", nights: 1, lat: 13.7563, lng: 100.5018, note: "Transit" },
        { id: "xian", name: "Xi'an", country: "China", cc: "cn", flag: "🇨🇳", start: "2026-03-31", end: "2026-04-02", nights: 2, lat: 34.3416, lng: 108.9398 },
        { id: "beijing", name: "Beijing", country: "China", cc: "cn", flag: "🇨🇳", start: "2026-04-02", end: "2026-04-07", nights: 5, lat: 39.9042, lng: 116.4074 }
    ],
    flights: [
        { label: "Madrid → Shanghai", date: "12 Mar", segments: [{ dep: "10:25", arr: "10:30+1", from: "MAD", fromCity: "Madrid", to: "PVG", toCity: "Shanghai", flight: "HU728 + HU7494", airline: "Hainan Airlines", dur: "14h 10min (escala CKG)", seats: "58E/G · 43B/C" }], ref: "NKX5J4", status: "confirmed", cc: "cn", type: "flight", manageUrl: "https://www.hainanairlines.com/builder/GoPage?type=manage", checkinTip: "Check-in online 24h antes · Ref: NKX5J4 + Apellido" },
        { label: "Shanghai → Taipei", date: "16 Mar", segments: [{ dep: "08:25", arr: "10:30", from: "PVG", fromCity: "Shanghai", to: "TPE", toCity: "Taipei", flight: "9C8951", airline: "Spring Airlines", dur: "2h 5min", seats: "—" }], ref: "1433808606921603", price: "136,74€", status: "confirmed", cc: "tw", type: "flight", manageUrl: "https://flights.ch.spring.com/OrderSearch", checkinTip: "Usar nº pedido 1433808606921603 en Spring Airlines" },
        { label: "Taipei → Bangkok", date: "19 Mar", segments: [{ dep: "18:35", arr: "21:30", from: "TPE", fromCity: "Taipei", to: "DMK", toCity: "Bangkok", flight: "FD231", airline: "Thai AirAsia", dur: "3h 55min", seats: "—" }], ref: "IHI3HH", status: "confirmed", cc: "th", type: "flight", manageUrl: "https://www.airasia.com/check-in/en/gb?bookingId=IHI3HH", checkinTip: "Poner ref IHI3HH + apellido FERNANDEZ · 14 días antes" },
        { label: "Bangkok → Krabi", date: "20 Mar", segments: [{ dep: "07:05", arr: "08:30", from: "BKK", fromCity: "Bangkok", to: "KBV", toCity: "Krabi", flight: "VZ340", airline: "Thai VietJet Air", dur: "1h 25min", seats: "—" }], ref: "4Z44R2", status: "confirmed", cc: "th", type: "flight", manageUrl: "https://www.vietjetair.com/en/manage-booking", checkinTip: "Ref: 4Z44R2 · Check-in 24h antes en web o app" },
        { label: "Krabi → Bangkok", date: "29 Mar", segments: [{ dep: "10:50", arr: "12:10", from: "KBV", fromCity: "Krabi", to: "DMK", toCity: "Bangkok", flight: "FD3230", airline: "Thai AirAsia", dur: "1h 20min", seats: "—" }], ref: "NGUN2K", status: "confirmed", cc: "th", type: "flight", manageUrl: "https://www.airasia.com/check-in/en/gb?bookingId=NGUN2K", checkinTip: "Poner ref NGUN2K + apellido FERNANDEZ · 14 días antes" },
        { label: "Bangkok → Xi'an", date: "30 Mar", segments: [{ dep: "20:00", arr: "00:35+1", from: "DMK", fromCity: "Bangkok", to: "XIY", toCity: "Xi'an", flight: "SL950", airline: "Thai Lion Air", dur: "3h 35min", seats: "—" }], ref: "OHSEFR", status: "confirmed", cc: "cn", type: "flight", manageUrl: "https://www.lionairthai.com/en/manage-booking", checkinTip: "Ref: OHSEFR · Descargar app Lion Air para boarding pass" },
        { label: "Xi'an → Beijing", date: "~2 Abr", segments: [{ dep: "TBD", arr: "TBD", from: "XIY", fromCity: "Xi'an", to: "PKX", toCity: "Beijing", flight: "Tren Bala 🚄", airline: "China Railway", dur: "~4h 30min", seats: "—" }], ref: "Pendiente", status: "pending", cc: "cn", type: "train", manageUrl: "https://www.trip.com/trains/" },
        { label: "Beijing → Madrid", date: "7 Abr", segments: [{ dep: "14:15", arr: "10:05+1", from: "PKX", fromCity: "Beijing", to: "MAD", toCity: "Madrid", flight: "CZ0345 + IB0740", airline: "China Southern + Iberia", dur: "25h 50min (escala AMS)", seats: "—" }], ref: "NKZ9RH / JJMFL", status: "confirmed", cc: "multi", type: "flight", manageUrl: "https://www.iberia.com/es/gestionar-reserva/", checkinTip: "Iberia: check-in 24h antes · CZ tramo Pekín-AMS, Iberia AMS-MAD" }
    ],
    hotels: [
        { name: "Shanghai Yuhang Hotel", city: "Shanghai", cc: "cn", checkIn: "13 Mar", checkOut: "16 Mar", nights: 3, status: "confirmed", address: "525 Sichuan North Rd", ref: "623036703", platform: "Agoda", mapUrl: "https://maps.google.com/?q=Shanghai+Yuhang+Hotel", bookingUrl: "https://www.agoda.com/account/bookings.html" },
        { name: "Longshan Hotel", city: "Taipei", cc: "tw", checkIn: "16 Mar", checkOut: "19 Mar", nights: 3, status: "confirmed", address: "No.139 Section 1 of Xiyuan Road, Wanhua, Taipei", ref: "1433809196618753", platform: "Trip.com", extras: ["⏰ Check-in 15:30-22:00 / Check-out 08:00-11:30", "🧳 Consigna de equipaje gratis", "📶 Wifi gratis"], mapUrl: "https://maps.google.com/?q=Longshan+Hotel+Taipei", bookingUrl: "https://www.trip.com/orders/" },
        { name: "Cozy Blu Suvarnabhumi", city: "Bangkok", cc: "th", checkIn: "19 Mar", checkOut: "20 Mar", nights: 1, status: "confirmed", address: "Racha Thewa, Samut Prakan", ref: "Trip.com", platform: "Trip.com", price: "24,02€", extras: ["🍳 Desayuno incluido"], mapUrl: "https://maps.google.com/?q=Cozy+Blu+Suvarnabhumi", bookingUrl: "https://www.trip.com/orders/" },
        { name: "Ao Nang Goodwill Hotel", city: "Krabi", cc: "th", checkIn: "20 Mar", checkOut: "29 Mar", nights: 9, status: "confirmed", address: "420/22 Moo2, Ao Nang", ref: "Trip.com", platform: "Trip.com", extras: ["🍈 No durian allowed!"], mapUrl: "https://maps.google.com/?q=Ao+Nang+Goodwill+Hotel", bookingUrl: "https://www.trip.com/orders/" },
        { name: "Hotel Chakrabongse", city: "Bangkok", cc: "th", checkIn: "29 Mar", checkOut: "30 Mar", nights: 1, status: "confirmed", address: "33-35 Chakrabongse Rd", ref: "Trip.com", platform: "Trip.com", extras: ["💰 Depósito 500 THB"], mapUrl: "https://maps.google.com/?q=33-35+Chakrabongse+Rd+Bangkok", bookingUrl: "https://www.trip.com/orders/" },
        { name: "Airport Space Capsule Hotel", city: "Xi'an (aeropuerto)", cc: "cn", checkIn: "30 Mar", checkOut: "31 Mar", nights: 1, status: "confirmed", address: "Gate 312, 1F, T3, Xianyang Airport", ref: "Booking.com", platform: "Booking.com", extras: ["✈️ Dentro del aeropuerto", "⏰ Check-in 14:00 / Check-out 10:00"], mapUrl: "https://maps.google.com/?q=Xianyang+Airport+T3+Xian", bookingUrl: "https://secure.booking.com/myreservations.html" },
        { name: "Campanile Hotel Bell Tower", city: "Xi'an", cc: "cn", checkIn: "31 Mar", checkOut: "2 Abr", nights: 2, status: "confirmed", address: "No.8 Zhengxue Street, 710001", ref: "Booking.com", platform: "Booking.com", extras: ["⭐ 4 estrellas", "🚇 Junto a estación metro"], mapUrl: "https://maps.google.com/?q=Campanile+Hotel+Xian+Bell+Tower", bookingUrl: "https://secure.booking.com/myreservations.html" },
        { name: "Comfort Hotel (Beijing South - Tiantan South Gate)", city: "Beijing", cc: "cn", checkIn: "2 Abr", checkOut: "7 Abr", nights: 5, status: "confirmed", address: "Room 113, Building 9, No. 11 Yongwaitaoyang Road, Dongcheng, Beijing", ref: "1433809196762269", platform: "Trip.com", extras: ["⏰ Check-in 14:00 / Check-out 14:00", "📞 Recepción 24h"], mapUrl: "https://maps.google.com/?q=Comfort+Hotel+Beijing+Tiantan", bookingUrl: "https://www.trip.com/orders/" },
        { name: "Hotel Ben Centre", city: "Ámsterdam (escala)", cc: "multi", checkIn: "7 Abr", checkOut: "8 Abr", nights: 1, status: "confirmed", address: "7 Beursstraat, 1012 JT", ref: "5506753815", platform: "Booking.com", extras: ["📞 +31 20626370", "⏰ Check-in 12:00 / Check-out 10:30"], mapUrl: "https://maps.google.com/?q=7+Beursstraat+Amsterdam", bookingUrl: "https://secure.booking.com/myreservations.html" }
    ],
    activities: [
        { name: "Plaza de Tiananmén", city: "Beijing", date: "4 Abr 2026", status: "confirmed", icon: "🏛️" },
        { name: "Guerreros de Terracota", city: "Xi'an", date: "Por planificar", status: "planned", icon: "🗿" },
        { name: "Gran Muralla China", city: "Beijing", date: "Por planificar", status: "planned", icon: "🏔️" },
        { name: "Ciudad Prohibida", city: "Beijing", date: "Por planificar", status: "planned", icon: "🏯" }
    ],
    todos: [
        { text: "Comprar hotel Taipei (16-19 Mar, 3 noches)", priority: "high", done: true },
        { text: "Comprar hotel Beijing (2-7 Abr, 5 noches)", priority: "high", done: true },
        { text: "Compartir datos hotel Xi'an", priority: "medium", done: true },
        { text: "Comprar billetes tren bala Xi'an → Beijing", priority: "high", done: false },
        { text: "Registrar todos los costes", priority: "low", done: false },
        { text: "Revisar equipaje permitido por aerolínea", priority: "medium", done: false }
    ],
    budget: [
        { concept: "Vuelo Shanghai → Taipei", amount: 136.74 },
        { concept: "Hotel Cozy Blu Suvarnabhumi", amount: 24.02 }
    ]
};
