// ═══════════════════════════════════════════════════════════
// FLIGHTS — Flight cards, check-in alerts, QR scanner
// ═══════════════════════════════════════════════════════════

function renderFlights() {
  const el = document.getElementById('flights-grid');
  const now = new Date();
  const savedQR = JSON.parse(localStorage.getItem('flight_qr_data') || '{}');

  el.innerHTML = TRIP_DATA.flights.map(f => {
    const s = f.segments[0];
    const isTrainClass = f.type === 'train' ? ' train' : '';

    // Check-in info
    let checkinHTML = '';
    if (f.type !== 'train' && f.status === 'confirmed') {
      const config = getCheckinConfig(s.airline);
      const flightDate = getFlightFullDate(f.date);

      if (flightDate) {
        const daysUntilFlight = Math.ceil((flightDate - now) / 86400000);
        const checkinOpensDate = new Date(flightDate);
        checkinOpensDate.setDate(checkinOpensDate.getDate() - config.days);
        const daysUntilCheckin = Math.ceil((checkinOpensDate - now) / 86400000);

        const monthNames = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
        const opensStr = `${checkinOpensDate.getDate()} ${monthNames[checkinOpensDate.getMonth()]}`;

        let urgency, urgencyLabel;
        if (daysUntilCheckin <= 0) {
          urgency = 'checkin-open';
          urgencyLabel = '🟢 ¡CHECK-IN ABIERTO!';
        } else if (daysUntilCheckin <= 3) {
          urgency = 'checkin-soon';
          urgencyLabel = `🟡 Abre en ${daysUntilCheckin}d`;
        } else if (daysUntilCheckin <= 7) {
          urgency = 'checkin-week';
          urgencyLabel = `🔵 Abre en ${daysUntilCheckin}d`;
        } else {
          urgency = 'checkin-future';
          urgencyLabel = `⏳ Abre en ${daysUntilCheckin}d`;
        }

        checkinHTML = `<div class="flight-checkin-info ${urgency}">
          <div class="checkin-info-row">
            <span class="checkin-info-window">📋 Check-in: <strong>${config.label}</strong></span>
            <span class="checkin-info-opens">📅 Abre: <strong>${opensStr}</strong></span>
          </div>
          <div class="checkin-info-badge">${urgencyLabel}</div>
        </div>`;
      }
    }

    // QR data
    const qrRef = f.ref.split(' / ')[0];
    const hasQR = savedQR[qrRef];
    const qrHTML = f.type !== 'train' ? `<div class="flight-qr-section">
      ${hasQR ? `
        <div class="flight-qr-data" onclick="toggleQRDetail('${qrRef}')">
          <span class="qr-saved-badge">✅ QR guardado</span>
          <span class="qr-view-btn">👁️ Ver datos</span>
        </div>
        <div class="flight-qr-detail" id="qr-detail-${qrRef}" style="display:none">
          <pre class="qr-data-content">${hasQR}</pre>
          <button class="qr-delete-btn" onclick="deleteQR('${qrRef}')">🗑️ Eliminar QR</button>
        </div>
      ` : `
        <button class="qr-scan-btn" onclick="startQRScan('${qrRef}')">
          📷 Escanear boarding pass
        </button>
      `}
    </div>` : '';

    return `<div class="flight-card glass ${f.cc}">
      <div class="flight-header">
        <div><div class="flight-label">${f.label}</div><div class="flight-date">${f.date}</div></div>
        <span class="flight-badge ${f.status}">${f.status === 'confirmed' ? '✓ Confirmado' : '⏳ Pendiente'}</span>
      </div>
      <div class="flight-route">
        <div class="flight-airport"><div class="flight-code">${s.from}</div><div class="flight-city">${s.fromCity}</div><div class="flight-time">${s.dep}</div></div>
        <div class="flight-line"><div class="flight-line-bar${isTrainClass}"></div><div class="flight-duration">${s.dur}</div></div>
        <div class="flight-airport"><div class="flight-code">${s.to}</div><div class="flight-city">${s.toCity}</div><div class="flight-time">${s.arr}</div></div>
      </div>
      <div class="flight-details">
        <span class="flight-detail">${s.flight}</span>
        <span class="flight-detail">${s.airline}</span>
        ${s.seats !== '—' ? `<span class="flight-detail">🪑 ${s.seats}</span>` : ''}
        <span class="flight-detail">📋 ${f.ref}</span>
        ${f.price ? `<span class="flight-detail">💰 ${f.price}</span>` : ''}
      </div>
      ${checkinHTML}
      ${f.manageUrl ? `<div class="card-actions">
        <a href="${f.manageUrl}" target="_blank" class="action-btn action-checkin">${f.type === 'train' ? '🚄 Comprar billete' : '✈️ Check-in / Gestionar'}</a>
        <span class="action-copy" onclick="navigator.clipboard.writeText('${f.ref.split(' / ')[0]}');this.textContent='✅ Copiado!';setTimeout(()=>this.textContent='📋 Copiar ref',1500)" title="Copiar referencia">📋 Copiar ref</span>
      </div>
      ${f.checkinTip ? `<div class="checkin-tip">💡 ${f.checkinTip}</div>` : ''}` : ''}
      ${qrHTML}
    </div>`;
  }).join('');
}

// QR Scanner functions
function toggleQRDetail(ref) {
  const el = document.getElementById('qr-detail-' + ref);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function deleteQR(ref) {
  if (!confirm('¿Eliminar datos QR de este vuelo?')) return;
  const saved = JSON.parse(localStorage.getItem('flight_qr_data') || '{}');
  delete saved[ref];
  localStorage.setItem('flight_qr_data', JSON.stringify(saved));
  renderFlights();
}

function startQRScan(ref) {
  // Create scanner modal
  const modal = document.createElement('div');
  modal.id = 'qr-scanner-modal';
  modal.innerHTML = `
    <div class="qr-scanner-overlay">
      <div class="qr-scanner-container glass">
        <div class="qr-scanner-header">
          <span>📷 Escanear QR — ${ref}</span>
          <button onclick="stopQRScan()" class="qr-close-btn">✕</button>
        </div>
        <video id="qr-video" autoplay playsinline></video>
        <canvas id="qr-canvas" style="display:none"></canvas>
        <div class="qr-scanner-status" id="qr-status">Iniciando cámara...</div>
        <div class="qr-scanner-alt">
          <label class="qr-upload-alt">
            📁 O sube imagen del QR
            <input type="file" accept="image/*" onchange="scanQRFromFile('${ref}', this)" hidden>
          </label>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Start camera
  navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    .then(stream => {
      const video = document.getElementById('qr-video');
      video.srcObject = stream;
      window._qrStream = stream;
      window._qrScanning = true;
      window._qrRef = ref;
      requestAnimationFrame(scanQRFrame);
    })
    .catch(err => {
      document.getElementById('qr-status').textContent = '⚠️ No se pudo acceder a la cámara. Sube una imagen.';
    });
}

function scanQRFrame() {
  if (!window._qrScanning) return;
  const video = document.getElementById('qr-video');
  const canvas = document.getElementById('qr-canvas');
  if (!video || !canvas || !video.videoWidth) {
    requestAnimationFrame(scanQRFrame);
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  if (typeof jsQR !== 'undefined') {
    const code = jsQR(imageData.data, canvas.width, canvas.height);
    if (code) {
      saveQRData(window._qrRef, code.data);
      stopQRScan();
      return;
    }
  }

  document.getElementById('qr-status').textContent = '🔍 Enfocando... Apunta al código QR';
  requestAnimationFrame(scanQRFrame);
}

function scanQRFromFile(ref, input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      if (typeof jsQR !== 'undefined') {
        const code = jsQR(imageData.data, canvas.width, canvas.height);
        if (code) {
          saveQRData(ref, code.data);
          stopQRScan();
        } else {
          document.getElementById('qr-status').textContent = '⚠️ No se encontró QR en la imagen. Intenta con otra.';
        }
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function saveQRData(ref, data) {
  const saved = JSON.parse(localStorage.getItem('flight_qr_data') || '{}');
  saved[ref] = data;
  localStorage.setItem('flight_qr_data', JSON.stringify(saved));
  renderFlights();
}

function stopQRScan() {
  window._qrScanning = false;
  if (window._qrStream) {
    window._qrStream.getTracks().forEach(t => t.stop());
    window._qrStream = null;
  }
  const modal = document.getElementById('qr-scanner-modal');
  if (modal) modal.remove();
}


// ═══════════════════ CHECK-IN COUNTDOWN ═══════════════════
function renderCheckinAlerts() {
  const el = document.getElementById('checkin-alerts');
  const now = new Date();

  const flightDates = TRIP_DATA.flights.filter(f => f.status === 'confirmed').map(f => {
    // Parse flight date
    const months = { 'Mar': 2, 'Abr': 3 };
    const parts = f.date.replace('~', '').trim().split(' ');
    const day = parseInt(parts[0]);
    const month = months[parts[1]] || 2;
    const flightDate = new Date(2026, month, day);
    const daysUntil = Math.ceil((flightDate - now) / (1000 * 60 * 60 * 24));

    // Check-in window
    let checkinWindow = '24h antes';
    let checkinDays = 1;
    if (f.segments[0].airline?.includes('AirAsia')) { checkinWindow = '14 días antes'; checkinDays = 14; }

    const daysUntilCheckin = daysUntil - checkinDays;
    let urgency = 'future';
    if (daysUntilCheckin <= 0) urgency = 'now';
    else if (daysUntilCheckin <= 3) urgency = 'soon';
    else if (daysUntilCheckin <= 7) urgency = 'week';

    return { ...f, flightDate, daysUntil, checkinWindow, daysUntilCheckin, urgency };
  }).sort((a, b) => a.daysUntil - b.daysUntil);

  el.innerHTML = flightDates.map(f => `
    <div class="checkin-alert-card glass checkin-${f.urgency}">
      <div class="checkin-alert-header">
        <span class="checkin-flight-label">${f.label}</span>
        <span class="checkin-days-badge">${f.daysUntil > 0 ? `${f.daysUntil} días` : '¡HOY!'}</span>
      </div>
      <div class="checkin-alert-body">
        <div class="checkin-countdown">
          ${f.urgency === 'now' ? '🟢 ¡Check-in ABIERTO!' :
      f.urgency === 'soon' ? `🟡 Check-in en ${f.daysUntilCheckin} días` :
        `⚪ Check-in: ${f.checkinWindow}`}
        </div>
        <div class="checkin-airline">${f.segments[0].airline} · ${f.date}</div>
        ${f.manageUrl ? `<a href="${f.manageUrl}" target="_blank" class="action-btn action-checkin" style="margin-top:8px;font-size:0.72rem">✈️ Ir al check-in</a>` : ''}
      </div>
    </div>
  `).join('');
}


