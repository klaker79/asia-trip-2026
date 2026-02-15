// ═══════════════════════════════════════════════════════════
// EXPLORE — City explorer, food guide, eSIM, apps, scam tips,
//           bucket list, emergency, phrases
// ═══════════════════════════════════════════════════════════

// ═══════════════════ MAP ═══════════════════
function initMap() {
  const map = L.map('map', { zoomControl: true, scrollWheelZoom: true }).setView([25, 105], 4);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OSM', maxZoom: 18 }).addTo(map);

  const points = [
    { lat: 40.4168, lng: -3.7038, name: 'Madrid 🇪🇸', color: '#3498db' },
    ...TRIP_DATA.cities.map(c => ({ lat: c.lat, lng: c.lng, name: `${c.flag} ${c.name}`, color: c.cc === 'cn' ? '#e74c3c' : c.cc === 'tw' ? '#1abc9c' : '#9b59b6' })),
    { lat: 40.4168, lng: -3.7038, name: 'Madrid 🇪🇸 (vuelta)', color: '#3498db' }
  ];

  points.forEach(p => {
    L.circleMarker([p.lat, p.lng], { radius: 8, fillColor: p.color, color: '#fff', weight: 2, opacity: 0.9, fillOpacity: 0.8 }).addTo(map).bindPopup(`<b>${p.name}</b>`);
  });

  const routeCoords = points.map(p => [p.lat, p.lng]);
  L.polyline(routeCoords, { color: '#f1c40f', weight: 2, dashArray: '8,8', opacity: 0.6 }).addTo(map);

  const asiaPoints = TRIP_DATA.cities.map(c => [c.lat, c.lng]);
  if (asiaPoints.length) map.fitBounds(asiaPoints, { padding: [50, 50] });
}



function renderBucketList() {
  const el = document.getElementById('bucket-grid');
  const saved = JSON.parse(localStorage.getItem('bucket_checked') || '{}');

  const allItems = BUCKET_LIST.flatMap(c => c.items);
  const totalItems = allItems.length;
  const doneCount = Object.keys(saved).filter(k => saved[k]).length;
  const pct = Math.round((doneCount / totalItems) * 100);

  el.innerHTML = `
    <div class="bucket-progress glass">
      <div class="bucket-progress-header">
        <span>🎯 Experiencias: ${doneCount}/${totalItems}</span>
        <span class="bucket-progress-pct">${pct}%</span>
      </div>
      <div class="packing-bar"><div class="packing-bar-fill" style="width:${pct}%"></div></div>
    </div>
    ${BUCKET_LIST.map(city => {
    const cityDone = city.items.filter(i => saved[i.id]).length;
    return `<div class="bucket-city glass">
        <div class="bucket-city-header">
          <span class="bucket-city-name">${city.flag} ${city.city}</span>
          <span class="bucket-city-count">${cityDone}/${city.items.length}</span>
        </div>
        <div class="bucket-items">
          ${city.items.map(item => {
      const checked = saved[item.id] ? 'checked' : '';
      return `<label class="bucket-item ${item.must ? 'bucket-must' : ''} ${checked ? 'bucket-done' : ''}">
              <input type="checkbox" ${checked} onchange="toggleBucket('${item.id}', this)">
              <span class="bucket-text">${item.text}${item.must ? ' <span class="bucket-must-tag">MUST DO</span>' : ''}</span>
            </label>`;
    }).join('')}
        </div>
      </div>`;
  }).join('')}
  `;
}

function toggleBucket(id, checkbox) {
  const saved = JSON.parse(localStorage.getItem('bucket_checked') || '{}');
  saved[id] = checkbox.checked;
  localStorage.setItem('bucket_checked', JSON.stringify(saved));
  renderBucketList();
}


function renderPhrases() {
  const el = document.getElementById('phrases-grid');
  el.innerHTML = PHRASES_DATA.map(p => `<div class="phrases-card glass ${p.cc}">
    <div class="phrases-header">
      <div class="phrases-country">${p.country}</div>
    </div>
    <table class="phrases-table">
      <thead><tr><th>Español</th><th>Local</th><th>Pronunciación</th></tr></thead>
      <tbody>${p.phrases.map(ph => `<tr>
        <td>${ph.es}</td>
        <td class="phrases-local">${ph.local}</td>
        <td class="phrases-pron">${ph.pron}</td>
      </tr>`).join('')}</tbody>
    </table>
  </div>`).join('');
}

// switchTab + toggleEmergency → app.js (orchestrator)

function renderEmergency() {
  const el = document.getElementById('emergency-grid');
  el.innerHTML = EMERGENCY_DATA.map(e => `<div class="emergency-card glass ${e.cc}">
    <div class="emergency-header">
      <div class="emergency-country">${e.country}</div>
    </div>
    <div class="emergency-numbers">
      <div class="emergency-num"><span class="emergency-num-label">Policía</span><a href="tel:${e.police}" class="emergency-num-value emergency-call">📞 ${e.police}</a></div>
      <div class="emergency-num"><span class="emergency-num-label">Ambulancia</span><a href="tel:${e.ambulance}" class="emergency-num-value emergency-call">🚑 ${e.ambulance}</a></div>
      <div class="emergency-num"><span class="emergency-num-label">Bomberos</span><a href="tel:${e.fire}" class="emergency-num-value emergency-call">🚒 ${e.fire}</a></div>
    </div>
    <div class="emergency-embassy">
      <div class="emergency-embassy-name">${e.embassy}</div>
      <a href="tel:${e.embassyPhone.replace(/\\s/g, '')}" class="emergency-call">${e.embassyPhone}</a>
      <div class="emergency-embassy-addr">📍 ${e.embassyAddr}</div>
      ${e.consulates ? `<div class="emergency-consulate">${e.consulates}</div>` : ''}
    </div>
    <div class="emergency-notes">💡 ${e.notes}</div>
  </div>`).join('');
}

function renderCityExplorer() {
  const el = document.getElementById('city-selector');
  if (!el) return;
  // Merge Bangkok entries for display
  const displayCities = TRIP_DATA.cities.filter(c => c.id !== 'bangkok2');

  el.innerHTML = `<div class="city-cards-scroll">${displayCities.map(c => {
    const photo = CITY_PHOTOS[c.id] || CITY_PHOTOS.shanghai;
    return `<div class="city-photo-card" onclick="selectCity('${c.id}')">
      <img src="${photo.url}" alt="${c.name}" loading="lazy">
      <div class="city-photo-overlay">
        <span class="city-photo-flag">${c.flag}</span>
        <span class="city-photo-name">${c.name}</span>
        <span class="city-photo-dates">${c.nights} noche${c.nights > 1 ? 's' : ''}</span>
      </div>
    </div>`;
  }).join('')}</div>`;
}

function selectCity(cityId) {
  const el = document.getElementById('city-detail');
  if (!el) return;
  const city = TRIP_DATA.cities.find(c => c.id === cityId);
  if (!city) return;

  // Highlight selected card
  document.querySelectorAll('.city-photo-card').forEach(c => c.classList.remove('selected'));
  document.querySelector(`.city-photo-card[onclick*="${cityId}"]`)?.classList.add('selected');

  const photo = CITY_PHOTOS[cityId] || CITY_PHOTOS.shanghai;
  const food = CITY_FOOD[cityId] || [];
  const scams = SCAM_TIPS.find(s => s.city.toLowerCase().includes(city.name.toLowerCase().split(' ')[0]));

  // Find matching flights, hotels
  const flights = TRIP_DATA.flights.filter(f => {
    const s = f.segments[0];
    return s.toCity?.toLowerCase().includes(city.name.toLowerCase().split(' ')[0]) ||
      s.fromCity?.toLowerCase().includes(city.name.toLowerCase().split(' ')[0]);
  });
  const hotels = TRIP_DATA.hotels.filter(h => h.city?.toLowerCase().includes(city.name.toLowerCase().split(' ')[0]));

  el.innerHTML = `
    <div class="city-detail-banner" style="background-image:url(${photo.url})">
      <div class="city-detail-banner-overlay">
        <span class="city-detail-flag">${city.flag}</span>
        <h3>${city.name}, ${city.country}</h3>
        <p>${city.nights} noche${city.nights > 1 ? 's' : ''} · ${formatRange(city.start, city.end)}</p>
      </div>
    </div>
    
    ${flights.length ? `<div class="city-info-block">
      <h4>✈️ Vuelos</h4>
      ${flights.map(f => `<div class="city-info-item glass"><strong>${f.label}</strong> · ${f.date} · ${f.segments[0].flight} · <a href="${f.manageUrl}" target="_blank">Gestionar</a></div>`).join('')}
    </div>` : ''}
    
    ${hotels.length ? `<div class="city-info-block">
      <h4>🏨 Hotel</h4>
      ${hotels.map(h => `<div class="city-info-item glass"><strong>${h.name}</strong> · ${h.checkIn} → ${h.checkOut} ${h.bookingUrl ? `· <a href="${h.bookingUrl}" target="_blank">Ver reserva</a>` : ''}</div>`).join('')}
    </div>` : ''}
    
    ${food.length ? `<div class="city-info-block">
      <h4>🍜 Qué comer</h4>
      <div class="food-cards">${food.map(f => `<div class="food-item glass">
        <div class="food-name">${f.dish} ${f.must ? '<span class="must-badge">MUST TRY</span>' : ''}</div>
        <div class="food-desc">${f.desc}</div>
        <div class="food-meta">📍 ${f.where} · ${f.price}</div>
      </div>`).join('')}</div>
    </div>` : ''}
    
    ${scams ? `<div class="city-info-block">
      <h4>⚠️ Tips & Scams</h4>
      ${scams.tips.map(t => `<div class="tip-item ${t.type} glass">
        <span class="tip-badge">${t.type === 'scam' ? '🚨 SCAM' : '💡 TIP'}</span>
        <strong>${t.title}</strong>
        <p>${t.desc}</p>
      </div>`).join('')}
    </div>` : ''}
  `;

  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderFoodGuide() {
  const el = document.getElementById('food-grid');
  if (!el) return;
  const allCities = Object.entries(CITY_FOOD).filter(([, foods]) => foods.length > 0);
  el.innerHTML = allCities.map(([cityId, foods]) => {
    const city = TRIP_DATA.cities.find(c => c.id === cityId);
    if (!city) return '';
    return `<div class="food-city-block">
      <h3>${city.flag} ${city.name}</h3>
      <div class="food-cards">${foods.map(f => `<div class="food-item glass">
        <div class="food-name">${f.dish} ${f.must ? '<span class="must-badge">MUST TRY</span>' : ''}</div>
        <div class="food-desc">${f.desc}</div>
        <div class="food-meta">📍 ${f.where} · ${f.price}</div>
      </div>`).join('')}</div>
    </div>`;
  }).join('');
}

function renderEsimGuide() {
  const el = document.getElementById('esim-grid');
  if (!el) return;
  el.innerHTML = `
    <div class="esim-provider glass">
      <div class="esim-header">
        <span class="esim-logo">${ESIM_DATA.logo}</span>
        <div>
          <h3>${ESIM_DATA.provider}</h3>
          <p>eSIM internacional con datos ilimitados</p>
        </div>
      </div>
      <div class="esim-plans">
        ${ESIM_DATA.plans.map(p => `<div class="esim-plan glass">
          <div class="esim-plan-region">${p.region}</div>
          <div class="esim-plan-details">
            <span>📅 ${p.days}</span>
            <span>📊 ${p.data}</span>
            <span>💰 ${p.price}</span>
          </div>
          <div class="esim-plan-note">${p.note}</div>
          <a href="${p.url}" target="_blank" class="action-btn action-checkin">🛒 Comprar eSIM</a>
        </div>`).join('')}
      </div>
    </div>
    
    <div class="vpn-section glass">
      <h3>🔒 VPN para China</h3>
      <div class="vpn-alert">${ESIM_DATA.vpn.china_reason}</div>
      <div class="vpn-solution">${ESIM_DATA.vpn.solution}</div>
      <div class="vpn-backup">🔄 ${ESIM_DATA.vpn.backup}</div>
      <div class="vpn-tip">${ESIM_DATA.vpn.tip}</div>
    </div>
    
    <div class="esim-steps glass">
      <h3>📋 Cómo activar la eSIM</h3>
      ${ESIM_DATA.steps.map(s => `<div class="esim-step">${s}</div>`).join('')}
    </div>
  `;
}

function renderAppsChecklist() {
  const el = document.getElementById('apps-grid');
  if (!el) return;
  const installed = JSON.parse(localStorage.getItem('apps_installed') || '{}');
  const categories = { essential: 'Imprescindibles', china: 'Para China', thailand: 'Para Tailandia', transport: 'Transporte', general: 'General' };

  const grouped = {};
  APPS_DATA.forEach(a => {
    const cat = a.essential ? 'essential' : a.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(a);
  });

  el.innerHTML = Object.entries(grouped).map(([cat, apps]) => `
    <div class="apps-category">
      <h3>${categories[cat] || cat}</h3>
      ${apps.map(a => `<div class="app-item glass ${installed[a.name] ? 'installed' : ''}">
        <label class="app-check">
          <input type="checkbox" ${installed[a.name] ? 'checked' : ''} onchange="toggleApp('${a.name}', this.checked)">
          <span class="app-icon">${a.icon}</span>
          <div class="app-info">
            <strong>${a.name}</strong>
            <span>${a.desc}</span>
          </div>
        </label>
        <a href="${a.url}" target="_blank" class="app-download">⬇️</a>
      </div>`).join('')}
    </div>
  `).join('');
}

function toggleApp(name, checked) {
  const installed = JSON.parse(localStorage.getItem('apps_installed') || '{}');
  installed[name] = checked;
  localStorage.setItem('apps_installed', JSON.stringify(installed));
  renderAppsChecklist();
}

function renderScamTips() {
  const el = document.getElementById('tips-grid');
  if (!el) return;
  el.innerHTML = SCAM_TIPS.map(s => `
    <div class="scam-city-block">
      <h3>${s.flag} ${s.city}</h3>
      ${s.tips.map(t => `<div class="tip-item ${t.type} glass">
        <span class="tip-badge">${t.type === 'scam' ? '🚨 SCAM' : '💡 TIP'}</span>
        <strong>${t.title}</strong>
        <p>${t.desc}</p>
      </div>`).join('')}
    </div>
  `).join('');
}


