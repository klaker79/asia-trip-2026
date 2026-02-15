// ═══════════════════════════════════════════════════════════
// SETUP.JS — Trip Wizard Logic
// ═══════════════════════════════════════════════════════════

let currentStep = 1;
const TOTAL_STEPS = 5;

// ═══ Country data for auto-detection ═══
const COUNTRY_DB = {
    'china': { cc: 'cn', flag: '🇨🇳', name: 'China' },
    'taiwan': { cc: 'tw', flag: '🇹🇼', name: 'Taiwan' },
    'tailandia': { cc: 'th', flag: '🇹🇭', name: 'Thailand' },
    'thailand': { cc: 'th', flag: '🇹🇭', name: 'Thailand' },
    'japón': { cc: 'jp', flag: '🇯🇵', name: 'Japón' },
    'japan': { cc: 'jp', flag: '🇯🇵', name: 'Japón' },
    'corea del sur': { cc: 'kr', flag: '🇰🇷', name: 'Corea del Sur' },
    'south korea': { cc: 'kr', flag: '🇰🇷', name: 'Corea del Sur' },
    'vietnam': { cc: 'vn', flag: '🇻🇳', name: 'Vietnam' },
    'indonesia': { cc: 'id', flag: '🇮🇩', name: 'Indonesia' },
    'india': { cc: 'in', flag: '🇮🇳', name: 'India' },
    'españa': { cc: 'es', flag: '🇪🇸', name: 'España' },
    'spain': { cc: 'es', flag: '🇪🇸', name: 'España' },
    'francia': { cc: 'fr', flag: '🇫🇷', name: 'Francia' },
    'france': { cc: 'fr', flag: '🇫🇷', name: 'Francia' },
    'italia': { cc: 'it', flag: '🇮🇹', name: 'Italia' },
    'italy': { cc: 'it', flag: '🇮🇹', name: 'Italia' },
    'alemania': { cc: 'de', flag: '🇩🇪', name: 'Alemania' },
    'germany': { cc: 'de', flag: '🇩🇪', name: 'Alemania' },
    'portugal': { cc: 'pt', flag: '🇵🇹', name: 'Portugal' },
    'reino unido': { cc: 'gb', flag: '🇬🇧', name: 'Reino Unido' },
    'united kingdom': { cc: 'gb', flag: '🇬🇧', name: 'Reino Unido' },
    'estados unidos': { cc: 'us', flag: '🇺🇸', name: 'EEUU' },
    'united states': { cc: 'us', flag: '🇺🇸', name: 'EEUU' },
    'usa': { cc: 'us', flag: '🇺🇸', name: 'EEUU' },
    'méxico': { cc: 'mx', flag: '🇲🇽', name: 'México' },
    'mexico': { cc: 'mx', flag: '🇲🇽', name: 'México' },
    'colombia': { cc: 'co', flag: '🇨🇴', name: 'Colombia' },
    'argentina': { cc: 'ar', flag: '🇦🇷', name: 'Argentina' },
    'brasil': { cc: 'br', flag: '🇧🇷', name: 'Brasil' },
    'brazil': { cc: 'br', flag: '🇧🇷', name: 'Brasil' },
    'marruecos': { cc: 'ma', flag: '🇲🇦', name: 'Marruecos' },
    'morocco': { cc: 'ma', flag: '🇲🇦', name: 'Marruecos' },
    'turquía': { cc: 'tr', flag: '🇹🇷', name: 'Turquía' },
    'turkey': { cc: 'tr', flag: '🇹🇷', name: 'Turquía' },
    'grecia': { cc: 'gr', flag: '🇬🇷', name: 'Grecia' },
    'greece': { cc: 'gr', flag: '🇬🇷', name: 'Grecia' },
    'egipto': { cc: 'eg', flag: '🇪🇬', name: 'Egipto' },
    'egypt': { cc: 'eg', flag: '🇪🇬', name: 'Egipto' },
    'filipinas': { cc: 'ph', flag: '🇵🇭', name: 'Filipinas' },
    'philippines': { cc: 'ph', flag: '🇵🇭', name: 'Filipinas' },
    'malasia': { cc: 'my', flag: '🇲🇾', name: 'Malasia' },
    'malaysia': { cc: 'my', flag: '🇲🇾', name: 'Malasia' },
    'singapur': { cc: 'sg', flag: '🇸🇬', name: 'Singapur' },
    'singapore': { cc: 'sg', flag: '🇸🇬', name: 'Singapur' },
    'camboya': { cc: 'kh', flag: '🇰🇭', name: 'Camboya' },
    'cambodia': { cc: 'kh', flag: '🇰🇭', name: 'Camboya' },
    'nepal': { cc: 'np', flag: '🇳🇵', name: 'Nepal' },
    'sri lanka': { cc: 'lk', flag: '🇱🇰', name: 'Sri Lanka' },
    'países bajos': { cc: 'nl', flag: '🇳🇱', name: 'Países Bajos' },
    'holanda': { cc: 'nl', flag: '🇳🇱', name: 'Países Bajos' },
    'netherlands': { cc: 'nl', flag: '🇳🇱', name: 'Países Bajos' },
    'australia': { cc: 'au', flag: '🇦🇺', name: 'Australia' },
    'nueva zelanda': { cc: 'nz', flag: '🇳🇿', name: 'Nueva Zelanda' },
    'canadá': { cc: 'ca', flag: '🇨🇦', name: 'Canadá' },
    'canada': { cc: 'ca', flag: '🇨🇦', name: 'Canadá' },
};

const EMOJI_LIST = ['👨', '👩', '🧑', '👦', '👧', '👶', '🧔', '👱', '🧓', '👴', '👵'];

// ═══ City known coordinates (fallback) ═══
const CITY_COORDS = {
    'shanghai': { lat: 31.23, lng: 121.47 },
    'beijing': { lat: 39.90, lng: 116.41 },
    'taipei': { lat: 25.03, lng: 121.57 },
    'bangkok': { lat: 13.76, lng: 100.50 },
    'krabi': { lat: 8.04, lng: 98.84 },
    "xi'an": { lat: 34.34, lng: 108.94 },
    'xian': { lat: 34.34, lng: 108.94 },
    'tokyo': { lat: 35.68, lng: 139.69 },
    'osaka': { lat: 34.69, lng: 135.50 },
    'kyoto': { lat: 35.01, lng: 135.77 },
    'seoul': { lat: 37.57, lng: 126.98 },
    'hanoi': { lat: 21.03, lng: 105.85 },
    'ho chi minh': { lat: 10.82, lng: 106.63 },
    'bali': { lat: -8.34, lng: 115.09 },
    'singapore': { lat: 1.35, lng: 103.82 },
    'kuala lumpur': { lat: 3.14, lng: 101.69 },
    'madrid': { lat: 40.42, lng: -3.70 },
    'barcelona': { lat: 41.39, lng: 2.17 },
    'paris': { lat: 48.86, lng: 2.35 },
    'london': { lat: 51.51, lng: -0.13 },
    'rome': { lat: 41.90, lng: 12.50 },
    'new york': { lat: 40.71, lng: -74.01 },
    'amsterdam': { lat: 52.37, lng: 4.90 },
    'istanbul': { lat: 41.01, lng: 28.98 },
};

// ═══════════ STEP NAVIGATION ═══════════

function goToStep(step) {
    if (step < 1 || step > TOTAL_STEPS) return;
    currentStep = step;
    updateUI();
}

function nextStep() {
    if (currentStep < TOTAL_STEPS) {
        currentStep++;
        updateUI();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateUI();
    }
}

function updateUI() {
    // Update steps visibility
    document.querySelectorAll('.wizard-step').forEach(s => {
        s.classList.toggle('active', parseInt(s.dataset.step) === currentStep);
    });

    // Update progress dots
    document.querySelectorAll('.progress-step').forEach(s => {
        const step = parseInt(s.dataset.step);
        s.classList.toggle('active', step === currentStep);
        s.classList.toggle('done', step < currentStep);
    });

    // Update progress lines
    for (let i = 1; i < TOTAL_STEPS; i++) {
        const line = document.getElementById(`line-${i}-${i + 1}`);
        if (line) line.classList.toggle('done', i < currentStep);
    }

    // Update nav buttons
    document.getElementById('btn-back').style.display = currentStep > 1 ? '' : 'none';
    document.getElementById('btn-next').style.display = currentStep < TOTAL_STEPS ? '' : 'none';
    document.getElementById('btn-finish').style.display = currentStep === TOTAL_STEPS ? '' : 'none';

    // Update preview on last step
    if (currentStep === TOTAL_STEPS) updatePreview();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ═══════════ TRAVELERS ═══════════

function addTraveler(name = '', emoji = '') {
    const list = document.getElementById('travelers-list');
    const index = list.children.length;
    if (!emoji) emoji = EMOJI_LIST[index % EMOJI_LIST.length];

    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `
    <div class="traveler-row">
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" class="traveler-name" placeholder="Nombre completo" value="${name}">
      </div>
      <div class="form-group">
        <label>Emoji</label>
        <select class="traveler-emoji">
          ${EMOJI_LIST.map(e => `<option ${e === emoji ? 'selected' : ''}>${e}</option>`).join('')}
        </select>
      </div>
      <button class="remove-btn" onclick="this.closest('.form-card').remove()" title="Eliminar">✕</button>
    </div>
  `;
    list.appendChild(card);
}

// ═══════════ CITIES ═══════════

function addCity(data = {}) {
    const list = document.getElementById('cities-list');
    const index = list.children.length + 1;

    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `
    <div class="form-card-header">
      <div class="form-card-title"><span class="form-card-number">${index}</span> <span class="city-flag-display">${data.flag || '🏙️'}</span> Ciudad</div>
      <button class="remove-btn" onclick="this.closest('.form-card').remove()" title="Eliminar">✕</button>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Ciudad</label>
        <input type="text" class="city-name" placeholder="Ej: Shanghai" value="${data.name || ''}">
      </div>
      <div class="form-group">
        <label>País</label>
        <input type="text" class="city-country" placeholder="Ej: China" value="${data.country || ''}" oninput="detectCountry(this)">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Llegada</label>
        <input type="date" class="city-start" value="${data.start || ''}" onchange="calcNights(this)">
      </div>
      <div class="form-group">
        <label>Salida</label>
        <input type="date" class="city-end" value="${data.end || ''}" onchange="calcNights(this)">
      </div>
    </div>
    <div class="form-row triple">
      <div class="form-group">
        <label>Noches</label>
        <input type="number" class="city-nights" value="${data.nights || ''}" min="1" readonly style="opacity:0.7">
      </div>
      <div class="form-group">
        <label>Nota (opcional)</label>
        <input type="text" class="city-note" placeholder="Ej: Playa 🏖️" value="${data.note || ''}">
      </div>
      <div class="form-group">
        <label>Bandera</label>
        <input type="text" class="city-flag" value="${data.flag || ''}" placeholder="Auto" readonly style="opacity:0.7">
      </div>
    </div>
  `;
    list.appendChild(card);
}

function detectCountry(input) {
    const country = input.value.toLowerCase().trim();
    const match = COUNTRY_DB[country];
    const card = input.closest('.form-card');
    if (match) {
        card.querySelector('.city-flag').value = match.flag;
        card.querySelector('.city-flag-display').textContent = match.flag;
    }
}

function calcNights(input) {
    const card = input.closest('.form-card');
    const start = card.querySelector('.city-start').value;
    const end = card.querySelector('.city-end').value;
    if (start && end) {
        const diff = Math.round((new Date(end) - new Date(start)) / 86400000);
        card.querySelector('.city-nights').value = diff > 0 ? diff : '';
    }
}

// ═══════════ FLIGHTS ═══════════

function addFlight(data = {}) {
    const list = document.getElementById('flights-list');
    const s = data.segments ? data.segments[0] : {};

    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `
    <div class="form-card-header">
      <div class="form-card-title">✈️ Vuelo / Transporte</div>
      <button class="remove-btn" onclick="this.closest('.form-card').remove()" title="Eliminar">✕</button>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Etiqueta (ej: Madrid → Shanghai)</label>
        <input type="text" class="flight-label" placeholder="Origen → Destino" value="${data.label || ''}">
      </div>
      <div class="form-group">
        <label>Fecha</label>
        <input type="text" class="flight-date" placeholder="Ej: 12 Mar" value="${data.date || ''}">
      </div>
    </div>
    <div class="form-row triple">
      <div class="form-group">
        <label>Código origen</label>
        <input type="text" class="flight-from" placeholder="MAD" value="${s.from || ''}" maxlength="4" style="text-transform:uppercase">
      </div>
      <div class="form-group">
        <label>Ciudad origen</label>
        <input type="text" class="flight-from-city" placeholder="Madrid" value="${s.fromCity || ''}">
      </div>
      <div class="form-group">
        <label>Salida</label>
        <input type="text" class="flight-dep" placeholder="10:25" value="${s.dep || ''}">
      </div>
    </div>
    <div class="form-row triple">
      <div class="form-group">
        <label>Código destino</label>
        <input type="text" class="flight-to" placeholder="PVG" value="${s.to || ''}" maxlength="4" style="text-transform:uppercase">
      </div>
      <div class="form-group">
        <label>Ciudad destino</label>
        <input type="text" class="flight-to-city" placeholder="Shanghai" value="${s.toCity || ''}">
      </div>
      <div class="form-group">
        <label>Llegada</label>
        <input type="text" class="flight-arr" placeholder="10:30+1" value="${s.arr || ''}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Nº vuelo / tren</label>
        <input type="text" class="flight-number" placeholder="HU728" value="${s.flight || ''}">
      </div>
      <div class="form-group">
        <label>Aerolínea / compañía</label>
        <input type="text" class="flight-airline" placeholder="Hainan Airlines" value="${s.airline || ''}">
      </div>
    </div>
    <div class="form-row triple">
      <div class="form-group">
        <label>Duración</label>
        <input type="text" class="flight-dur" placeholder="14h 10min" value="${s.dur || ''}">
      </div>
      <div class="form-group">
        <label>Asientos</label>
        <input type="text" class="flight-seats" placeholder="58E/G" value="${s.seats || '—'}">
      </div>
      <div class="form-group">
        <label>Referencia</label>
        <input type="text" class="flight-ref" placeholder="NKX5J4" value="${data.ref || ''}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Tipo</label>
        <select class="flight-type">
          <option value="flight" ${data.type !== 'train' ? 'selected' : ''}>✈️ Vuelo</option>
          <option value="train" ${data.type === 'train' ? 'selected' : ''}>🚄 Tren</option>
        </select>
      </div>
      <div class="form-group">
        <label>Estado</label>
        <select class="flight-status">
          <option value="confirmed" ${data.status !== 'pending' ? 'selected' : ''}>✅ Confirmado</option>
          <option value="pending" ${data.status === 'pending' ? 'selected' : ''}>⏳ Pendiente</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>URL gestión (opcional)</label>
        <input type="url" class="flight-url" placeholder="https://..." value="${data.manageUrl || ''}">
      </div>
      <div class="form-group">
        <label>Precio (opcional)</label>
        <input type="text" class="flight-price" placeholder="136,74€" value="${data.price || ''}">
      </div>
    </div>
  `;
    list.appendChild(card);
}

// ═══════════ HOTELS ═══════════

function addHotel(data = {}) {
    const list = document.getElementById('hotels-list');

    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `
    <div class="form-card-header">
      <div class="form-card-title">🏨 Hotel</div>
      <button class="remove-btn" onclick="this.closest('.form-card').remove()" title="Eliminar">✕</button>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Nombre del hotel</label>
        <input type="text" class="hotel-name" placeholder="Ej: Shanghai Yuhang Hotel" value="${data.name || ''}">
      </div>
      <div class="form-group">
        <label>Ciudad</label>
        <input type="text" class="hotel-city" placeholder="Shanghai" value="${data.city || ''}">
      </div>
    </div>
    <div class="form-row triple">
      <div class="form-group">
        <label>Check-in</label>
        <input type="text" class="hotel-checkin" placeholder="13 Mar" value="${data.checkIn || ''}">
      </div>
      <div class="form-group">
        <label>Check-out</label>
        <input type="text" class="hotel-checkout" placeholder="16 Mar" value="${data.checkOut || ''}">
      </div>
      <div class="form-group">
        <label>Noches</label>
        <input type="number" class="hotel-nights" value="${data.nights || ''}" min="1">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Dirección</label>
        <input type="text" class="hotel-address" placeholder="525 Sichuan North Rd" value="${data.address || ''}">
      </div>
      <div class="form-group">
        <label>Plataforma</label>
        <select class="hotel-platform">
          <option value="—" ${!data.platform || data.platform === '—' ? 'selected' : ''}>Sin especificar</option>
          <option value="Booking.com" ${data.platform === 'Booking.com' ? 'selected' : ''}>Booking.com</option>
          <option value="Agoda" ${data.platform === 'Agoda' ? 'selected' : ''}>Agoda</option>
          <option value="Trip.com" ${data.platform === 'Trip.com' ? 'selected' : ''}>Trip.com</option>
          <option value="Airbnb" ${data.platform === 'Airbnb' ? 'selected' : ''}>Airbnb</option>
          <option value="Hotels.com" ${data.platform === 'Hotels.com' ? 'selected' : ''}>Hotels.com</option>
          <option value="Expedia" ${data.platform === 'Expedia' ? 'selected' : ''}>Expedia</option>
          <option value="Otro" ${data.platform === 'Otro' ? 'selected' : ''}>Otro</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Referencia</label>
        <input type="text" class="hotel-ref" placeholder="623036703" value="${data.ref || ''}">
      </div>
      <div class="form-group">
        <label>Precio (opcional)</label>
        <input type="text" class="hotel-price" placeholder="24,02€" value="${data.price || ''}">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>URL reserva (opcional)</label>
        <input type="url" class="hotel-booking-url" placeholder="https://..." value="${data.bookingUrl || ''}">
      </div>
      <div class="form-group">
        <label>Estado</label>
        <select class="hotel-status">
          <option value="confirmed" ${data.status !== 'pending' ? 'selected' : ''}>✅ Confirmado</option>
          <option value="pending" ${data.status === 'pending' ? 'selected' : ''}>⏳ Pendiente</option>
        </select>
      </div>
    </div>
  `;
    list.appendChild(card);
}

// ═══════════ ACTIVITIES ═══════════

function addActivity(data = {}) {
    const list = document.getElementById('activities-list');
    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `
    <div class="form-card-header">
      <div class="form-card-title">🎯 Actividad</div>
      <button class="remove-btn" onclick="this.closest('.form-card').remove()" title="Eliminar">✕</button>
    </div>
    <div class="form-row triple">
      <div class="form-group">
        <label>Actividad</label>
        <input type="text" class="activity-name" placeholder="Gran Muralla China" value="${data.name || ''}">
      </div>
      <div class="form-group">
        <label>Ciudad</label>
        <input type="text" class="activity-city" placeholder="Beijing" value="${data.city || ''}">
      </div>
      <div class="form-group">
        <label>Icono</label>
        <input type="text" class="activity-icon" placeholder="🏔️" value="${data.icon || '🎯'}" maxlength="4" style="text-align:center;font-size:1.4rem">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Fecha</label>
        <input type="text" class="activity-date" placeholder="4 Abr 2026" value="${data.date || ''}">
      </div>
      <div class="form-group">
        <label>Estado</label>
        <select class="activity-status">
          <option value="confirmed" ${data.status === 'confirmed' ? 'selected' : ''}>✅ Confirmado</option>
          <option value="planned" ${data.status !== 'confirmed' ? 'selected' : ''}>📝 Planear</option>
        </select>
      </div>
    </div>
  `;
    list.appendChild(card);
}

// ═══════════ TODOS ═══════════

function addTodo(data = {}) {
    const list = document.getElementById('todos-list');
    const card = document.createElement('div');
    card.className = 'form-card';
    card.innerHTML = `
    <div class="traveler-row">
      <div class="form-group" style="flex:2">
        <label>Tarea</label>
        <input type="text" class="todo-text" placeholder="Comprar hotel Taipei" value="${data.text || ''}">
      </div>
      <div class="form-group" style="flex:0 0 120px">
        <label>Prioridad</label>
        <select class="todo-priority">
          <option value="high" ${data.priority === 'high' ? 'selected' : ''}>🔴 Alta</option>
          <option value="medium" ${data.priority === 'medium' ? 'selected' : ''}>🟡 Media</option>
          <option value="low" ${data.priority !== 'high' && data.priority !== 'medium' ? 'selected' : ''}>🟢 Baja</option>
        </select>
      </div>
      <button class="remove-btn" onclick="this.closest('.form-card').remove()" title="Eliminar">✕</button>
    </div>
  `;
    list.appendChild(card);
}

// ═══════════ COLLECT DATA ═══════════

function collectData() {
    const tripName = document.getElementById('trip-name').value || 'Mi Viaje';
    const tripStart = document.getElementById('trip-start').value;
    const tripEnd = document.getElementById('trip-end').value;
    const totalDays = tripStart && tripEnd ? Math.round((new Date(tripEnd) - new Date(tripStart)) / 86400000) : 0;

    // Travelers
    const travelers = [...document.querySelectorAll('#travelers-list .form-card')].map(card => ({
        name: card.querySelector('.traveler-name').value || 'Viajero',
        emoji: card.querySelector('.traveler-emoji').value
    }));

    // Cities
    const cities = [...document.querySelectorAll('#cities-list .form-card')].map((card, i) => {
        const name = card.querySelector('.city-name').value || 'Ciudad';
        const country = card.querySelector('.city-country').value || '';
        const countryKey = country.toLowerCase().trim();
        const countryInfo = COUNTRY_DB[countryKey] || { cc: 'xx', flag: '🏳️' };
        const cityKey = name.toLowerCase().trim();
        const coords = CITY_COORDS[cityKey] || { lat: 0, lng: 0 };

        return {
            id: name.toLowerCase().replace(/[^a-z0-9]/g, '') + (i > 0 ? i : ''),
            name: name,
            country: countryInfo.name || country,
            cc: countryInfo.cc,
            flag: card.querySelector('.city-flag').value || countryInfo.flag,
            start: card.querySelector('.city-start').value || '',
            end: card.querySelector('.city-end').value || '',
            nights: parseInt(card.querySelector('.city-nights').value) || 1,
            lat: coords.lat,
            lng: coords.lng,
            note: card.querySelector('.city-note').value || undefined
        };
    });

    // Flights
    const flights = [...document.querySelectorAll('#flights-list .form-card')].map(card => {
        const label = card.querySelector('.flight-label').value;
        const cc = 'multi'; // simplified for custom
        return {
            label: label || 'Vuelo',
            date: card.querySelector('.flight-date').value || '',
            segments: [{
                dep: card.querySelector('.flight-dep').value || 'TBD',
                arr: card.querySelector('.flight-arr').value || 'TBD',
                from: card.querySelector('.flight-from').value.toUpperCase() || '???',
                fromCity: card.querySelector('.flight-from-city').value || '',
                to: card.querySelector('.flight-to').value.toUpperCase() || '???',
                toCity: card.querySelector('.flight-to-city').value || '',
                flight: card.querySelector('.flight-number').value || '—',
                airline: card.querySelector('.flight-airline').value || '—',
                dur: card.querySelector('.flight-dur').value || '—',
                seats: card.querySelector('.flight-seats').value || '—'
            }],
            ref: card.querySelector('.flight-ref').value || '—',
            status: card.querySelector('.flight-status').value,
            cc: cc,
            type: card.querySelector('.flight-type').value,
            manageUrl: card.querySelector('.flight-url').value || '',
            price: card.querySelector('.flight-price').value || undefined
        };
    });

    // Hotels
    const hotels = [...document.querySelectorAll('#hotels-list .form-card')].map(card => ({
        name: card.querySelector('.hotel-name').value || 'Hotel',
        city: card.querySelector('.hotel-city').value || '',
        cc: 'multi',
        checkIn: card.querySelector('.hotel-checkin').value || '',
        checkOut: card.querySelector('.hotel-checkout').value || '',
        nights: parseInt(card.querySelector('.hotel-nights').value) || 1,
        status: card.querySelector('.hotel-status').value,
        address: card.querySelector('.hotel-address').value || '—',
        ref: card.querySelector('.hotel-ref').value || '—',
        platform: card.querySelector('.hotel-platform').value,
        price: card.querySelector('.hotel-price').value || undefined,
        bookingUrl: card.querySelector('.hotel-booking-url').value || undefined
    }));

    // Activities
    const activities = [...document.querySelectorAll('#activities-list .form-card')].map(card => ({
        name: card.querySelector('.activity-name').value || 'Actividad',
        city: card.querySelector('.activity-city').value || '',
        date: card.querySelector('.activity-date').value || 'Por planificar',
        status: card.querySelector('.activity-status').value,
        icon: card.querySelector('.activity-icon').value || '🎯'
    }));

    // Todos
    const todos = [...document.querySelectorAll('#todos-list .form-card')].map(card => ({
        text: card.querySelector('.todo-text').value || 'Tarea',
        priority: card.querySelector('.todo-priority').value,
        done: false
    }));

    return {
        trip: { name: tripName, startDate: tripStart, endDate: tripEnd, totalDays },
        travelers,
        cities,
        flights,
        hotels,
        activities,
        todos,
        budget: []
    };
}

// ═══════════ PREVIEW ═══════════

function updatePreview() {
    const data = collectData();
    const el = document.getElementById('preview-summary');
    el.innerHTML = `
    <h3>📊 Resumen de tu viaje</h3>
    <div class="preview-stat"><span class="preview-stat-label">🌍 Nombre</span><span class="preview-stat-value">${data.trip.name}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">📅 Fechas</span><span class="preview-stat-value">${data.trip.startDate || '—'} → ${data.trip.endDate || '—'}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">⏱️ Duración</span><span class="preview-stat-value">${data.trip.totalDays} días</span></div>
    <div class="preview-stat"><span class="preview-stat-label">👥 Viajeros</span><span class="preview-stat-value">${data.travelers.map(t => t.emoji + ' ' + t.name).join(', ') || '—'}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">🏙️ Ciudades</span><span class="preview-stat-value">${data.cities.map(c => c.flag + ' ' + c.name).join(', ') || '—'}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">✈️ Vuelos</span><span class="preview-stat-value">${data.flights.length}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">🏨 Hoteles</span><span class="preview-stat-value">${data.hotels.length}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">🎯 Actividades</span><span class="preview-stat-value">${data.activities.length}</span></div>
    <div class="preview-stat"><span class="preview-stat-label">📝 Tareas</span><span class="preview-stat-value">${data.todos.length}</span></div>
  `;
}

// ═══════════ FINISH + SAVE ═══════════

function finishWizard() {
    const data = collectData();

    // Validate minimum
    if (!data.trip.name) { showToast('Pon un nombre a tu viaje', 'error'); goToStep(1); return; }
    if (data.cities.length === 0) { showToast('Añade al menos una ciudad', 'error'); goToStep(2); return; }

    // Save to localStorage
    localStorage.setItem('custom_trip', JSON.stringify(data));

    showToast('✅ ¡Viaje guardado! Redirigiendo...', 'success');

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// ═══════════ IMPORT / EXPORT ═══════════

function exportTrip() {
    const data = collectData();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `trip-${data.trip.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('📤 JSON exportado', 'success');
}

function importTrip(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            loadDataIntoWizard(data);
            showToast('📥 Viaje importado correctamente', 'success');
        } catch (err) {
            showToast('❌ Error al leer el archivo JSON', 'error');
        }
    };
    reader.readAsText(file);
}

function loadDataIntoWizard(data) {
    // Step 1: Trip basics
    if (data.trip) {
        document.getElementById('trip-name').value = data.trip.name || '';
        document.getElementById('trip-start').value = data.trip.startDate || '';
        document.getElementById('trip-end').value = data.trip.endDate || '';
    }

    // Travelers
    document.getElementById('travelers-list').innerHTML = '';
    (data.travelers || []).forEach(t => addTraveler(t.name, t.emoji));

    // Cities
    document.getElementById('cities-list').innerHTML = '';
    (data.cities || []).forEach(c => addCity(c));

    // Flights
    document.getElementById('flights-list').innerHTML = '';
    (data.flights || []).forEach(f => addFlight(f));

    // Hotels
    document.getElementById('hotels-list').innerHTML = '';
    (data.hotels || []).forEach(h => addHotel(h));

    // Activities
    document.getElementById('activities-list').innerHTML = '';
    (data.activities || []).forEach(a => addActivity(a));

    // Todos
    document.getElementById('todos-list').innerHTML = '';
    (data.todos || []).forEach(t => addTodo(t));
}

// ═══════════ TOAST ═══════════

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ═══════════ INIT ═══════════

document.addEventListener('DOMContentLoaded', () => {
    // Check if there's existing data in localStorage
    const saved = localStorage.getItem('custom_trip');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            loadDataIntoWizard(data);
            showToast('📋 Viaje cargado desde guardado anterior', 'success');
            return;
        } catch (e) { /* ignore */ }
    }

    // Default: add 2 empty travelers
    addTraveler();
    addTraveler();
});
