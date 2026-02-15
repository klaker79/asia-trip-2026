// ═══════════════════════════════════════════════════════════
// WEATHER — Live weather + timezone tracker
// ═══════════════════════════════════════════════════════════


async function renderWeather() {
  const el = document.getElementById('weather-grid');
  // Show loading state first
  el.innerHTML = CITY_WEATHER.map(c => `<div class="weather-card glass">
    <div class="weather-city-name">${c.name}</div>
    <div class="weather-dates">${c.start.slice(5)} → ${c.end.slice(5)}</div>
    <div class="weather-loading">⏳ Cargando datos reales...</div>
  </div>`).join('');

  // Fetch real-time weather for all cities in parallel
  const results = await Promise.allSettled(
    CITY_WEATHER.map(c =>
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${c.lat}&lon=${c.lon}&appid=${OWM_API_KEY}&units=metric&lang=es`)
        .then(r => r.ok ? r.json() : Promise.reject('API error'))
    )
  );

  el.innerHTML = CITY_WEATHER.map((c, i) => {
    const cl = CLIMATE_DATA[c.name] || {};
    const result = results[i];
    const live = result.status === 'fulfilled' ? result.value : null;

    if (live) {
      const emoji = getWeatherEmoji(live.weather[0].id);
      const temp = Math.round(live.main.temp);
      const feelsLike = Math.round(live.main.feels_like);
      const tempMin = Math.round(live.main.temp_min);
      const tempMax = Math.round(live.main.temp_max);
      const desc = live.weather[0].description;
      const humidity = live.main.humidity;
      const wind = Math.round(live.wind.speed * 3.6); // m/s → km/h

      return `<div class="weather-card glass">
        <div class="weather-city-name">${c.name}</div>
        <div class="weather-dates">${c.start.slice(5)} → ${c.end.slice(5)}</div>
        <div class="weather-live-badge">🔴 EN VIVO</div>
        <div class="weather-main">
          <div class="weather-icon">${emoji}</div>
          <div class="weather-temps">
            <span class="weather-high">${temp}°</span>
            <span class="weather-low">${feelsLike}°</span>
          </div>
        </div>
        <div class="weather-desc">${emoji} ${desc.charAt(0).toUpperCase() + desc.slice(1)}</div>
        <div class="weather-live-details">
          <span>🌡️ ${tempMin}° / ${tempMax}°</span>
          <span>💧 ${humidity}%</span>
          <span>💨 ${wind} km/h</span>
        </div>
        <div class="weather-trip-forecast">
          <div class="weather-trip-label">📅 En tu viaje (${c.start.slice(5).replace('-', '/')}):</div>
          <div class="weather-trip-data">${cl.tempMin}°–${cl.tempMax}° · ${cl.desc} · 🌧️ ${cl.rain}mm</div>
        </div>
        <div class="weather-pack">🧳 ${cl.pack || ''}</div>
      </div>`;
    } else {
      // Fallback to static data
      return `<div class="weather-card glass">
        <div class="weather-city-name">${c.name}</div>
        <div class="weather-dates">${c.start.slice(5)} → ${c.end.slice(5)}</div>
        <div class="weather-main">
          <div class="weather-icon">🌡️</div>
          <div class="weather-temps">
            <span class="weather-high">${cl.tempMax}°</span>
            <span class="weather-low">${cl.tempMin}°</span>
          </div>
        </div>
        <div class="weather-desc">${cl.desc || ''}</div>
        <div class="weather-rain">🌧️ ~${cl.rain}mm lluvia/mes</div>
        <div class="weather-pack">🧳 ${cl.pack || ''}</div>
      </div>`;
    }
  }).join('');
}


function renderTimezones() {
  const el = document.getElementById('timezone-grid');
  const update = () => {
    el.innerHTML = TIMEZONES.map(t => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat('es-ES', { timeZone: t.tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      const dateFmt = new Intl.DateTimeFormat('es-ES', { timeZone: t.tz, weekday: 'short', day: 'numeric', month: 'short' });
      const time = fmt.format(now);
      const date = dateFmt.format(now);
      const hour = parseInt(time.split(':')[0]);
      const period = hour >= 6 && hour < 12 ? '🌅' : hour >= 12 && hour < 18 ? '☀️' : hour >= 18 && hour < 22 ? '🌆' : '🌙';

      const madridFmt = new Intl.DateTimeFormat('es-ES', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', hour12: false });
      const madridTime = madridFmt.format(now);
      const diff = parseInt(time.split(':')[0]) - parseInt(madridTime.split(':')[0]);
      const diffStr = diff > 0 ? `+${diff}h` : `${diff}h`;

      return `<div class="tz-card glass">
        <div class="tz-emoji">${t.emoji}</div>
        <div class="tz-city">${t.city}</div>
        <div class="tz-time">${period} ${time}</div>
        <div class="tz-date">${date}</div>
        <div class="tz-diff">${t.tz === 'Europe/Madrid' ? '🏠 Tu hora' : diffStr + ' vs Madrid'}</div>
      </div>`;
    }).join('');
  };
  update();
  setInterval(update, 1000);
}


