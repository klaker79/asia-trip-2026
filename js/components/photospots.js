// ═══════════════════════════════════════════════════════════
// PHOTO SPOTS COMPONENT — Best photo locations per city
// ═══════════════════════════════════════════════════════════

function renderPhotoSpots() {
    const container = document.getElementById('photospots-grid');
    if (!container || typeof PHOTO_SPOTS === 'undefined') return;

    let active = 0;

    function render() {
        const cityData = PHOTO_SPOTS[active];
        container.innerHTML = `
      <div class="ps-tabs">
        ${PHOTO_SPOTS.map((c, i) => `
          <button class="ps-tab ${i === active ? 'active' : ''}" onclick="selectPhotoCity(${i})">
            ${c.flag} ${c.name}
          </button>
        `).join('')}
      </div>

      <div class="ps-spots">
        ${cityData.spots.map(s => `
          <div class="ps-spot glass ${s.mustSee ? 'must-see' : ''}" onclick="this.classList.toggle('expanded')">
            <div class="ps-spot-header">
              <div class="ps-spot-name">${s.mustSee ? '📸 ' : '📷 '}${s.name}</div>
              <div class="ps-spot-when">${s.when}</div>
            </div>
            <div class="ps-spot-desc">${s.desc}</div>
            <div class="ps-spot-details">
              <div class="ps-spot-tip">💡 ${s.tip}</div>
              <a href="${s.mapUrl}" target="_blank" class="ps-spot-map">📍 Abrir en Google Maps</a>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="ps-summary glass">
        📸 ${cityData.spots.filter(s => s.mustSee).length} imprescindibles · ${cityData.spots.length} spots totales
      </div>
    `;
    }

    window.selectPhotoCity = function (idx) {
        active = idx;
        render();
    };

    render();
}
