// ═══════════════════════════════════════════════════════════
// ITINERARY COMPONENT — Day-by-day timeline renderer
// ═══════════════════════════════════════════════════════════

function renderItinerary() {
    const container = document.getElementById('itinerary-grid');
    if (!container || typeof ITINERARY_DATA === 'undefined') return;

    // Group days by city
    const cities = {};
    ITINERARY_DATA.forEach(day => {
        if (!cities[day.city]) cities[day.city] = [];
        cities[day.city].push(day);
    });

    // Get city info from TRIP_DATA
    const cityMap = {};
    if (typeof TRIP_DATA !== 'undefined') {
        TRIP_DATA.cities.forEach(c => { cityMap[c.id] = c; });
    }

    // City selector
    const cityIds = Object.keys(cities);
    let activeCity = cityIds[0];
    let activeDay = 0;

    function getCityLabel(id) {
        const c = cityMap[id];
        if (!c) return id;
        return `${c.flag} ${c.name}`;
    }

    function getPeriodEmoji(period) {
        const map = { morning: '🌅', afternoon: '☀️', evening: '🌙' };
        return map[period] || '📍';
    }

    function getPeriodLabel(period) {
        const map = { morning: 'Mañana', afternoon: 'Tarde', evening: 'Noche' };
        return map[period] || '';
    }

    function render() {
        const days = cities[activeCity];
        const day = days[activeDay];

        container.innerHTML = `
      <!-- City Tabs -->
      <div class="itin-city-tabs">
        ${cityIds.map(id => `
          <button class="itin-city-tab ${id === activeCity ? 'active' : ''}" onclick="selectItinCity('${id}')">
            ${getCityLabel(id)}
          </button>
        `).join('')}
      </div>

      <!-- Day Selector -->
      <div class="itin-day-selector">
        ${days.map((d, i) => `
          <button class="itin-day-btn ${i === activeDay ? 'active' : ''}" onclick="selectItinDay(${i})">
            <span class="itin-day-num">D${d.dayNumber}</span>
            <span class="itin-day-date">${new Date(d.date).toLocaleDateString('es', { day: 'numeric', month: 'short' })}</span>
          </button>
        `).join('')}
      </div>

      <!-- Day Title -->
      <div class="itin-day-header glass">
        <div class="itin-day-title">${day.title}</div>
        <div class="itin-day-zone">📍 ${day.zone}</div>
        <div class="itin-day-date-full">${new Date(day.date).toLocaleDateString('es', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</div>
      </div>

      <!-- Activities Timeline -->
      <div class="itin-timeline">
        ${day.activities.map((act, idx) => `
          <div class="itin-activity ${act.mustDo ? 'must-do' : ''}" onclick="this.classList.toggle('expanded')">
            <div class="itin-time-col">
              <div class="itin-time">${act.time}</div>
              <div class="itin-period">${getPeriodEmoji(act.period)}</div>
              ${idx < day.activities.length - 1 ? '<div class="itin-timeline-line"></div>' : ''}
            </div>
            <div class="itin-content glass">
              <div class="itin-act-header">
                <h4>${act.mustDo ? '⭐ ' : ''}${act.name}</h4>
                ${act.cost !== '—' && act.cost !== 'Gratis' && act.cost !== 'Incluido' ? `<span class="itin-cost">${act.cost}</span>` : act.cost === 'Gratis' ? '<span class="itin-cost free">Gratis</span>' : ''}
              </div>
              <p class="itin-desc">${act.desc}</p>
              <div class="itin-details">
                <div class="itin-detail"><span class="itin-detail-icon">🚀</span> ${act.transport}</div>
                ${act.duration ? `<div class="itin-detail"><span class="itin-detail-icon">⏱️</span> ${act.duration}</div>` : ''}
                ${act.zone ? `<div class="itin-detail"><span class="itin-detail-icon">📍</span> ${act.zone}</div>` : ''}
              </div>
              ${act.tip ? `<div class="itin-tip">💡 ${act.tip}</div>` : ''}
              ${act.mapUrl ? `<a href="${act.mapUrl}" target="_blank" class="itin-map-link">📍 Ver en Google Maps</a>` : ''}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Day Summary -->
      <div class="itin-summary glass">
        <span>📊 ${day.activities.length} actividades</span>
        <span>⭐ ${day.activities.filter(a => a.mustDo).length} imprescindibles</span>
      </div>
    `;
    }

    // Global functions for onclick
    window.selectItinCity = function (cityId) {
        activeCity = cityId;
        activeDay = 0;
        render();
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.selectItinDay = function (dayIdx) {
        activeDay = dayIdx;
        render();
    };

    render();
}
