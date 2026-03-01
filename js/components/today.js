// ═══════════════════════════════════════════════════════════
// TODAY VIEW — Auto-shows today's itinerary based on date
// ═══════════════════════════════════════════════════════════

function renderToday() {
    const container = document.getElementById('today-view');
    if (!container || typeof ITINERARY_DATA === 'undefined') return;

    const now = new Date();
    const todayStr = now.toISOString().split('T')[0]; // "2026-03-13"

    // Find today's itinerary
    const todayPlan = ITINERARY_DATA.find(d => d.date === todayStr);

    // Find trip dates
    const tripStart = new Date(TRIP_DATA.trip.startDate);
    const tripEnd = new Date(TRIP_DATA.trip.endDate);

    // Get city info
    function getCityInfo(cityId) {
        const c = TRIP_DATA.cities.find(c => c.id === cityId);
        return c || { name: cityId, flag: '📍', country: '' };
    }

    function getPeriodEmoji(period) {
        return { morning: '🌅', afternoon: '☀️', evening: '🌙' }[period] || '📍';
    }

    // BEFORE TRIP
    if (now < tripStart) {
        const diffMs = tripStart - now;
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

        // Find next upcoming day for preview
        const firstDay = ITINERARY_DATA[0];
        const city = getCityInfo(firstDay.city);

        container.innerHTML = `
      <div class="today-pretrip glass">
        <div class="today-status">⏳ Faltan <strong>${diffDays} días</strong> para el viaje</div>
        <div class="today-preview-label">Primer día: ${city.flag} ${city.name}</div>
        <div class="today-preview-title">${firstDay.title}</div>
        <div class="today-preview-activities">
          ${firstDay.activities.slice(0, 3).map(a => `
            <div class="today-mini-act">
              <span class="today-mini-time">${a.time}</span>
              <span>${a.mustDo ? '⭐ ' : ''}${a.name}</span>
            </div>
          `).join('')}
          ${firstDay.activities.length > 3 ? `<div class="today-more">+${firstDay.activities.length - 3} más…</div>` : ''}
        </div>
      </div>
    `;
        return;
    }

    // AFTER TRIP
    if (now > tripEnd) {
        container.innerHTML = `
      <div class="today-posttrip glass">
        <div class="today-status">✅ ¡Viaje completado!</div>
        <div class="today-memory">🌏 27 días · 3 países · 6 ciudades · recuerdos infinitos</div>
      </div>
    `;
        return;
    }

    // DURING TRIP — no specific plan for today
    if (!todayPlan) {
        // Travel day or unplanned
        const currentCity = TRIP_DATA.cities.find(c => {
            return todayStr >= c.start && todayStr < c.end;
        });
        const city = currentCity ? getCityInfo(currentCity.id) : { flag: '✈️', name: 'En tránsito' };

        container.innerHTML = `
      <div class="today-transit glass">
        <div class="today-status">${city.flag} <strong>Hoy en ${city.name}</strong></div>
        <div class="today-info">Día libre o en tránsito — disfrutad 🎉</div>
      </div>
    `;
        return;
    }

    // DURING TRIP — there IS a plan!
    const city = getCityInfo(todayPlan.city);
    const tripDay = Math.floor((now - tripStart) / (1000 * 60 * 60 * 24)) + 1;

    // Determine current/next activity based on time
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const nowMinutes = currentHour * 60 + currentMin;

    let currentIdx = -1;
    let nextIdx = -1;
    todayPlan.activities.forEach((a, i) => {
        const [h, m] = a.time.split(':').map(Number);
        const actMin = h * 60 + (m || 0);
        if (actMin <= nowMinutes) currentIdx = i;
        if (nextIdx === -1 && actMin > nowMinutes) nextIdx = i;
    });

    container.innerHTML = `
    <div class="today-active">
      <!-- Header -->
      <div class="today-header glass">
        <div class="today-header-top">
          <div class="today-city">${city.flag} ${city.name}</div>
          <div class="today-trip-day">Día ${tripDay}/27</div>
        </div>
        <div class="today-title">${todayPlan.title}</div>
        <div class="today-zone">📍 ${todayPlan.zone}</div>
      </div>

      <!-- Current Activity -->
      ${currentIdx >= 0 ? `
        <div class="today-current glass">
          <div class="today-current-label">🔴 AHORA</div>
          <div class="today-current-name">${todayPlan.activities[currentIdx].name}</div>
          <div class="today-current-desc">${todayPlan.activities[currentIdx].desc}</div>
          ${todayPlan.activities[currentIdx].tip ? `<div class="today-current-tip">💡 ${todayPlan.activities[currentIdx].tip}</div>` : ''}
          ${todayPlan.activities[currentIdx].mapUrl ? `<a href="${todayPlan.activities[currentIdx].mapUrl}" target="_blank" class="today-map-btn">📍 Abrir Google Maps</a>` : ''}
        </div>
      ` : ''}

      <!-- Next Activity -->
      ${nextIdx >= 0 ? `
        <div class="today-next glass">
          <div class="today-next-label">⏭️ SIGUIENTE — ${todayPlan.activities[nextIdx].time}</div>
          <div class="today-next-name">${todayPlan.activities[nextIdx].name}</div>
          <div class="today-next-transport">🚀 ${todayPlan.activities[nextIdx].transport}</div>
        </div>
      ` : ''}

      <!-- Full Timeline -->
      <div class="today-timeline">
        ${todayPlan.activities.map((a, i) => {
        const isPast = i < currentIdx;
        const isCurrent = i === currentIdx;
        const isNext = i === nextIdx;
        return `
            <div class="today-act ${isPast ? 'past' : ''} ${isCurrent ? 'current' : ''} ${isNext ? 'next' : ''}" onclick="this.classList.toggle('expanded')">
              <div class="today-act-time">${getPeriodEmoji(a.period)} ${a.time}</div>
              <div class="today-act-info">
                <div class="today-act-name">${a.mustDo ? '⭐ ' : ''}${a.name}</div>
                <div class="today-act-details">
                  <div class="today-act-transport">🚀 ${a.transport}</div>
                  ${a.tip ? `<div class="today-act-tip">💡 ${a.tip}</div>` : ''}
                  ${a.mapUrl ? `<a href="${a.mapUrl}" target="_blank" class="today-act-map">📍 Maps</a>` : ''}
                </div>
              </div>
              ${a.cost && a.cost !== '—' ? `<div class="today-act-cost">${a.cost === 'Gratis' ? '🆓' : a.cost}</div>` : ''}
            </div>
          `;
    }).join('')}
      </div>
    </div>
  `;
}
