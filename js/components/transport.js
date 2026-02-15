// ═══════════════════════════════════════════════════════════
// TRANSPORT — Metro info + airport transfers
// ═══════════════════════════════════════════════════════════


function renderMetro() {
  const el = document.getElementById('metro-grid');
  el.innerHTML = METRO_DATA.map(m => `<div class="metro-card glass ${m.cc}">
    <div class="metro-header">
      <div class="metro-icon-wrap ${m.cc}">${m.icon}</div>
      <div>
        <div class="metro-city">${m.city}</div>
        <div class="metro-system">${m.system}</div>
      </div>
    </div>
    <div class="metro-stat"><span class="metro-stat-label">Líneas</span><span class="metro-stat-value">${m.lines}</span></div>
    <div class="metro-stat"><span class="metro-stat-label">Precio</span><span class="metro-stat-value">${m.priceRange}</span></div>
    <div class="metro-stat"><span class="metro-stat-label">Tarjeta</span><span class="metro-stat-value">${m.card.name} (${m.card.price})</span></div>
    <div class="metro-routes">
      <div class="metro-routes-title">Líneas útiles:</div>
      ${m.useful.map(u => `<div class="metro-route-item">→ ${u}</div>`).join('')}
    </div>
    <div class="metro-tips">
      ${m.tips.map(t => `<span class="metro-tip">${t}</span>`).join('')}
    </div>
  </div>`).join('');
}


function renderTransport() {
  const el = document.getElementById('transport-grid');
  el.innerHTML = TRANSPORT_DATA.map(t => `
    <div class="transport-card glass">
      <div class="transport-header">
        <div class="transport-city">${t.city}</div>
        <div class="transport-airport">${t.airport}</div>
      </div>
      <div class="transport-hotel">🏨 ${t.hotel}</div>
      <div class="transport-options">
        ${t.options.map(o => `
          <div class="transport-option">
            <div class="transport-mode">${o.mode}</div>
            <div class="transport-route">${o.route}</div>
            <div class="transport-meta">
              <span class="transport-cost">💰 ${o.cost}</span>
              <span class="transport-tip">💡 ${o.tip}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}


