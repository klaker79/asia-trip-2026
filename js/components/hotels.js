// ═══════════════════════════════════════════════════════════
// HOTELS — Hotel cards + activities
// ═══════════════════════════════════════════════════════════

// ═══════════════════ HOTELS ═══════════════════
function renderHotels() {
  const el = document.getElementById('hotels-grid');
  el.innerHTML = TRIP_DATA.hotels.map(h => `<div class="hotel-card glass ${h.cc}">
    <div class="flight-header">
      <div><div class="hotel-name">${h.name}</div><div class="hotel-city">${h.city}</div></div>
      <span class="flight-badge ${h.status}">${h.status === 'confirmed' ? '✓ Confirmado' : '⏳ Pendiente'}</span>
    </div>
    <div class="hotel-dates-row">
      <span>${h.checkIn}</span>
      <span class="arrow">→</span>
      <span>${h.checkOut}</span>
      <span class="hotel-nights-badge">${h.nights} noche${h.nights > 1 ? 's' : ''}</span>
    </div>
    <div class="hotel-info">
      ${h.address !== '—' ? `<span class="hotel-tag">📍 ${h.address}</span>` : ''}
      ${h.mapUrl ? `<a href="${h.mapUrl}" target="_blank" class="hotel-tag hotel-link">🗺️ Ver en mapa</a>` : ''}
      ${h.platform !== '—' ? `<span class="hotel-tag">🔗 ${h.platform}</span>` : ''}
      ${h.ref && h.ref !== '—' ? `<span class="hotel-tag">🔑 Ref: ${h.ref}</span>` : ''}
      ${h.price ? `<span class="hotel-tag">💰 ${h.price}</span>` : ''}
      ${(h.extras || []).map(e => `<span class="hotel-tag">${e}</span>`).join('')}
    </div>
    ${h.bookingUrl ? `<div class="card-actions"><a href="${h.bookingUrl}" target="_blank" class="action-btn action-booking">🔗 Ver reserva en ${h.platform}</a></div>` : ''}
  </div>`).join('');
}

// ═══════════════════ ACTIVITIES ═══════════════════
function renderActivities() {
  const el = document.getElementById('activities-grid');
  el.innerHTML = TRIP_DATA.activities.map(a => `<div class="activity-card glass">
    <div class="activity-icon">${a.icon}</div>
    <div class="activity-info"><div class="activity-name">${a.name}</div><div class="activity-meta">${a.city} · ${a.date}</div></div>
    <span class="activity-status ${a.status}">${a.status === 'confirmed' ? '✓ Comprado' : '📝 Planear'}</span>
  </div>`).join('');
}


