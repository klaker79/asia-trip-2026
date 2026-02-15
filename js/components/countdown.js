// ═══════════════════════════════════════════════════════════
// COUNTDOWN — Trip countdown timer + route timeline + stats
// ═══════════════════════════════════════════════════════════

// ═══════════════════ COUNTDOWN ═══════════════════
function updateCountdown() {
  const now = new Date();
  const dep = new Date('2026-03-12T10:25:00+01:00');
  const diff = dep - now;
  if (diff <= 0) { document.getElementById('countdown').innerHTML = '<div class="countdown-item glass"><div class="countdown-value">🎉</div><div class="countdown-label">¡En viaje!</div></div>'; return; }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent = d;
  document.getElementById('cd-hours').textContent = h;
  document.getElementById('cd-mins').textContent = m;
  document.getElementById('cd-secs').textContent = s;
}

// ═══════════════════ ROUTE TIMELINE ═══════════════════
function renderTimeline() {
  const el = document.getElementById('route-timeline');
  const origin = `<div class="route-stop"><div class="stop-dot" style="background:rgba(52,152,219,0.15);border:2px solid #3498db">🇪🇸</div><div class="stop-name">Madrid</div><div class="stop-dates">12 Mar</div><div class="stop-nights">Salida</div></div>`;
  const cities = TRIP_DATA.cities.map(c => `<div class="route-stop"><div class="stop-dot ${c.cc}">${c.flag}</div><div class="stop-name">${c.name}</div><div class="stop-dates">${formatRange(c.start, c.end)}</div><div class="stop-nights">${c.nights} noche${c.nights > 1 ? 's' : ''}</div></div>`).join('');
  const dest = `<div class="route-stop"><div class="stop-dot" style="background:rgba(52,152,219,0.15);border:2px solid #3498db">🇪🇸</div><div class="stop-name">Madrid</div><div class="stop-dates">8 Abr</div><div class="stop-nights">Vuelta</div></div>`;
  el.innerHTML = origin + cities + dest;
}


// ═══════════════════ STATS ═══════════════════
function renderStats() {
  document.getElementById('stat-days').textContent = TRIP_DATA.trip.totalDays;
  document.getElementById('stat-flights').textContent = TRIP_DATA.flights.length;
  document.getElementById('stat-hotels').textContent = TRIP_DATA.hotels.length;
  document.getElementById('stat-countries').textContent = '3';
  document.getElementById('stat-cities').textContent = TRIP_DATA.cities.length;
}


