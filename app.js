// ═══════════════════════════════════════════════════════════
// APP.JS — Orchestrator (state, tab system, init)
// All components are loaded from js/components/
// All data is loaded from js/data/
// ═══════════════════════════════════════════════════════════

// Mutable state (exchange rates)
let exchangeRates = { CNY: null, TWD: null, THB: null };
let lastRateUpdate = null;

// ═══ Load custom trip data from Setup Wizard ═══
(function loadCustomTrip() {
  const saved = localStorage.getItem('custom_trip');
  if (!saved) return;
  try {
    const custom = JSON.parse(saved);
    // Override global TRIP_DATA with custom data
    if (custom.trip) TRIP_DATA.trip = custom.trip;
    if (custom.travelers) TRIP_DATA.travelers = custom.travelers;
    if (custom.cities && custom.cities.length) TRIP_DATA.cities = custom.cities;
    if (custom.flights && custom.flights.length) TRIP_DATA.flights = custom.flights;
    if (custom.hotels && custom.hotels.length) TRIP_DATA.hotels = custom.hotels;
    if (custom.activities) TRIP_DATA.activities = custom.activities;
    if (custom.todos) TRIP_DATA.todos = custom.todos;
    if (custom.budget) TRIP_DATA.budget = custom.budget;
    console.log('✅ Custom trip loaded from Setup Wizard');
  } catch (e) {
    console.warn('⚠️ Error loading custom trip:', e);
  }
})();

// ═══════════════════ TAB SYSTEM ═══════════════════
function switchTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  const panel = document.querySelector(`.tab-panel[data-tab="${tabName}"]`);
  const btn = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
  if (panel) panel.classList.add('active');
  if (btn) btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Initialize map only when Explorar tab is shown
  if (tabName === 'explorar' && !window._mapInitialized) {
    setTimeout(() => { initMap(); window._mapInitialized = true; }, 300);
  }
}

function toggleEmergency() {
  const modal = document.getElementById('emergency-modal');
  modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}


// ═══════════════════ INIT ═══════════════════
document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  renderTimeline();
  renderStats();
  renderWeather();
  renderTimezones();
  renderFlights();
  renderHotels();
  renderActivities();
  renderMetro();
  fetchExchangeRates();
  renderAgenda();
  renderPacking();
  renderTransport();
  renderCheckinAlerts();
  renderVault();
  renderExpenses();
  renderBucketList();
  renderEmergency();
  renderPhrases();
  renderTodos();
  renderBudget();
  renderCityExplorer();
  renderFoodGuide();
  renderEsimGuide();
  renderAppsChecklist();
  renderScamTips();

  // PWA Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => { });
  }
});
