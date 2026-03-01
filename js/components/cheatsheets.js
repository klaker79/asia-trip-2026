// ═══════════════════════════════════════════════════════════
// CHEAT SHEET COMPONENT — Quick reference card per city
// ═══════════════════════════════════════════════════════════

function renderCheatSheets() {
    const container = document.getElementById('cheatsheet-grid');
    if (!container || typeof CHEAT_SHEETS === 'undefined') return;

    let active = 0;

    function render() {
        const cs = CHEAT_SHEETS[active];
        container.innerHTML = `
      <!-- City Tabs -->
      <div class="cs-tabs">
        ${CHEAT_SHEETS.map((c, i) => `
          <button class="cs-tab ${i === active ? 'active' : ''}" onclick="selectCheatSheet(${i})">
            ${c.flag} ${c.name}
          </button>
        `).join('')}
      </div>

      <div class="cs-card glass">
        <!-- Header -->
        <div class="cs-header">
          <span class="cs-city-name">${cs.flag} ${cs.name}</span>
          ${cs.internet.vpn ? '<span class="cs-vpn-badge">🔒 VPN</span>' : '<span class="cs-wifi-badge">📶 OK</span>'}
        </div>

        <!-- Currency -->
        <div class="cs-section">
          <div class="cs-section-title">💰 Moneda</div>
          <div class="cs-row"><strong>${cs.currency.code}</strong> (${cs.currency.symbol}) — ${cs.currency.rate}</div>
          <div class="cs-tip">${cs.currency.tip}</div>
        </div>

        <!-- Metro -->
        <div class="cs-section">
          <div class="cs-section-title">🚇 Transporte</div>
          <div class="cs-row"><strong>${cs.metro.card}</strong></div>
          <div class="cs-tip">${cs.metro.tip}</div>
        </div>

        <!-- Internet -->
        <div class="cs-section">
          <div class="cs-section-title">📶 Internet</div>
          <div class="cs-tip">${cs.internet.tip}</div>
        </div>

        <!-- Apps -->
        <div class="cs-section">
          <div class="cs-section-title">📱 Apps esenciales</div>
          <div class="cs-apps">
            ${cs.apps.map(a => `<div class="cs-app">• ${a}</div>`).join('')}
          </div>
        </div>

        <!-- Phrases -->
        <div class="cs-section">
          <div class="cs-section-title">💬 Frases clave</div>
          <div class="cs-phrases">
            ${cs.phrases.map(p => `
              <div class="cs-phrase">
                <span class="cs-phrase-es">${p.es}</span>
                <span class="cs-phrase-local">${p.local}</span>
                <span class="cs-phrase-pron">${p.pron}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Don'ts -->
        <div class="cs-section">
          <div class="cs-section-title">⚠️ Cuidado con…</div>
          <div class="cs-donts">
            ${cs.donts.map(d => `<div class="cs-dont">${d}</div>`).join('')}
          </div>
        </div>

        <!-- Food -->
        <div class="cs-section">
          <div class="cs-section-title">🍽️ Probar SÍ o SÍ</div>
          <div class="cs-food">
            ${cs.food.map(f => `<div class="cs-food-item">${f}</div>`).join('')}
          </div>
        </div>

        <!-- Emergency -->
        <div class="cs-section cs-emergency">
          <div class="cs-section-title">🚨 Emergencia</div>
          <div class="cs-emer-row">
            <a href="tel:${cs.emergency.police}" class="cs-emer-btn">🚔 ${cs.emergency.police}</a>
            <a href="tel:${cs.emergency.ambulance}" class="cs-emer-btn">🚑 ${cs.emergency.ambulance}</a>
            ${cs.emergency.embassy ? `<a href="tel:${cs.emergency.embassy}" class="cs-emer-btn">🇪🇸 Embajada</a>` : ''}
            ${cs.emergency.touristPolice ? `<a href="tel:${cs.emergency.touristPolice}" class="cs-emer-btn">👮 Tourist: ${cs.emergency.touristPolice}</a>` : ''}
          </div>
        </div>
      </div>
    `;
    }

    window.selectCheatSheet = function (idx) {
        active = idx;
        render();
    };

    render();
}
