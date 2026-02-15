// ═══════════════════════════════════════════════════════════
// PREPARE — Packing list + document vault + agenda
// ═══════════════════════════════════════════════════════════

// ═══════════════════ DAILY AGENDA ═══════════════════
function renderAgenda() {
  const el = document.getElementById('agenda-grid');
  const now = new Date();
  const tripStart = new Date('2026-03-12');
  const tripEnd = new Date('2026-04-08');

  // Build daily events from all data sources
  const events = [];

  // Flights
  TRIP_DATA.flights.forEach(f => {
    const dateStr = f.date.replace('~', '').trim();
    events.push({ date: dateStr, type: 'flight', icon: f.type === 'train' ? '🚄' : '✈️', text: f.label, time: f.segments[0].dep, detail: f.segments[0].airline });
  });

  // Hotels check-in/out
  TRIP_DATA.hotels.forEach(h => {
    if (h.status === 'confirmed') {
      events.push({ date: h.checkIn, type: 'checkin', icon: '🏨', text: `Check-in: ${h.name}`, time: '', detail: h.city });
      events.push({ date: h.checkOut, type: 'checkout', icon: '🚪', text: `Check-out: ${h.name}`, time: '', detail: h.city });
    }
  });

  // City transitions
  TRIP_DATA.cities.forEach(c => {
    const startDate = new Date(c.start);
    const d = `${startDate.getDate()} ${['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'][startDate.getMonth()]}`;
    events.push({ date: d, type: 'city', icon: c.flag, text: `Llegada a ${c.name}`, time: '', detail: `${c.nights} noches · ${c.country}` });
  });

  // Activities
  TRIP_DATA.activities.forEach(a => {
    const dateStr = a.date.replace(' 2026', '').trim();
    events.push({ date: dateStr, type: 'activity', icon: a.icon, text: a.name, time: '', detail: a.city });
  });

  // Group by date
  const grouped = {};
  events.forEach(e => {
    if (!grouped[e.date]) grouped[e.date] = [];
    grouped[e.date].push(e);
  });

  // Sort dates
  const months = { 'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5 };
  const sortedDates = Object.keys(grouped).sort((a, b) => {
    const [dA, mA] = a.split(' ');
    const [dB, mB] = b.split(' ');
    return (months[mA] || 0) * 100 + parseInt(dA) - ((months[mB] || 0) * 100 + parseInt(dB));
  });

  el.innerHTML = sortedDates.map(date => `
    <div class="agenda-day glass">
      <div class="agenda-date">${date}</div>
      <div class="agenda-events">
        ${grouped[date].map(e => `
          <div class="agenda-event agenda-${e.type}">
            <span class="agenda-icon">${e.icon}</span>
            <div class="agenda-text">
              <div class="agenda-title">${e.text}</div>
              <div class="agenda-detail">${e.time ? e.time + ' · ' : ''}${e.detail}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}


function renderPacking() {
  const el = document.getElementById('packing-grid');
  const saved = JSON.parse(localStorage.getItem('packing_checked') || '{}');

  const renderCategory = (title, emoji, items) => {
    return `<div class="packing-category glass">
      <div class="packing-cat-title">${emoji} ${title}</div>
      <div class="packing-items">
        ${items.map((item, i) => {
      const key = `${title}_${i}`;
      const checked = saved[key] ? 'checked' : '';
      return `<label class="packing-item ${item.critical ? 'packing-critical' : ''} ${checked ? 'packing-done' : ''}">
            <input type="checkbox" ${checked} onchange="togglePacking('${key}', this)">
            <span class="packing-text">
              ${item.item}${item.qty > 1 ? ` <span class="packing-qty">×${item.qty}</span>` : ''}
              ${item.for ? `<span class="packing-for">📍 ${item.for}</span>` : ''}
              ${item.note ? `<span class="packing-note">⚠️ ${item.note}</span>` : ''}
            </span>
          </label>`;
    }).join('')}
      </div>
    </div>`;
  };

  // Count progress
  const allItems = [...PACKING_DATA.essentials, ...PACKING_DATA.clothing_cold, ...PACKING_DATA.clothing_hot, ...PACKING_DATA.tech, ...PACKING_DATA.weather];
  const totalItems = allItems.length;
  const checkedCount = Object.keys(saved).filter(k => saved[k]).length;
  const pct = Math.round((checkedCount / totalItems) * 100);

  el.innerHTML = `
    <div class="packing-progress glass">
      <div class="packing-progress-header">
        <span class="packing-progress-label">🧳 Progreso: ${checkedCount}/${totalItems}</span>
        <span class="packing-progress-pct">${pct}%</span>
      </div>
      <div class="packing-bar"><div class="packing-bar-fill" style="width:${pct}%"></div></div>
    </div>
    ${renderCategory('Esenciales', '🛂', PACKING_DATA.essentials)}
    ${renderCategory('Ropa fría (China)', '🧥', PACKING_DATA.clothing_cold)}
    ${renderCategory('Ropa calor (Tailandia)', '👕', PACKING_DATA.clothing_hot)}
    ${renderCategory('Tech & Conectividad', '📱', PACKING_DATA.tech)}
    ${renderCategory('Según el clima', '🌦️', PACKING_DATA.weather)}
  `;
}

function togglePacking(key, checkbox) {
  const saved = JSON.parse(localStorage.getItem('packing_checked') || '{}');
  saved[key] = checkbox.checked;
  localStorage.setItem('packing_checked', JSON.stringify(saved));
  checkbox.closest('.packing-item').classList.toggle('packing-done', checkbox.checked);
  renderPacking();
}


function renderVault() {
  const el = document.getElementById('vault-grid');
  const stored = JSON.parse(localStorage.getItem('doc_vault') || '{}');
  const uploadedCount = Object.keys(stored).length;

  el.innerHTML = `
    <div class="vault-stats glass">
      <span>📁 ${uploadedCount}/${DOC_TYPES.length} documentos guardados</span>
      <span class="vault-hint">📷 Haz foto o sube imagen — se guarda offline en tu navegador</span>
    </div>
    <div class="vault-docs">
      ${DOC_TYPES.map(doc => {
    const hasDoc = stored[doc.id];
    return `<div class="vault-doc glass ${doc.critical ? 'vault-critical' : ''} ${hasDoc ? 'vault-uploaded' : ''}">
          <div class="vault-doc-header">
            <span class="vault-doc-label">${doc.label}</span>
            <span class="vault-doc-status">${hasDoc ? '✅' : '⬜'}</span>
          </div>
          ${hasDoc ? `
            <div class="vault-doc-preview" onclick="viewDoc('${doc.id}')">
              <img src="${hasDoc}" alt="${doc.label}" loading="lazy">
              <span class="vault-view-btn">👁️ Ver</span>
            </div>
            <button class="vault-remove" onclick="removeDoc('${doc.id}')">🗑️ Eliminar</button>
          ` : `
            <label class="vault-upload-btn">
              📷 Subir foto
              <input type="file" accept="image/*" capture="environment" onchange="uploadDoc('${doc.id}', this)" hidden>
            </label>
          `}
        </div>`;
  }).join('')}
    </div>
    <div id="vault-modal" class="vault-modal" onclick="this.style.display='none'">
      <img id="vault-modal-img" src="" alt="Documento">
    </div>
  `;
}

function uploadDoc(id, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    // Compress to fit localStorage (~5MB limit)
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const maxW = 1200;
      const scale = Math.min(1, maxW / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      const compressed = canvas.toDataURL('image/jpeg', 0.7);
      const stored = JSON.parse(localStorage.getItem('doc_vault') || '{}');
      stored[id] = compressed;
      try {
        localStorage.setItem('doc_vault', JSON.stringify(stored));
        renderVault();
      } catch (e) {
        alert('⚠️ Almacenamiento lleno. Intenta con una imagen más pequeña.');
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function viewDoc(id) {
  const stored = JSON.parse(localStorage.getItem('doc_vault') || '{}');
  if (stored[id]) {
    const modal = document.getElementById('vault-modal');
    document.getElementById('vault-modal-img').src = stored[id];
    modal.style.display = 'flex';
  }
}

function removeDoc(id) {
  if (!confirm('¿Eliminar este documento?')) return;
  const stored = JSON.parse(localStorage.getItem('doc_vault') || '{}');
  delete stored[id];
  localStorage.setItem('doc_vault', JSON.stringify(stored));
  renderVault();
}


