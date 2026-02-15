// ═══════════════════════════════════════════════════════════
// HELPERS — Shared utility functions
// ═══════════════════════════════════════════════════════════

function formatRange(s, e) {
    const sd = new Date(s), ed = new Date(e);
    const m = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${sd.getDate()} – ${ed.getDate()} ${m[sd.getMonth()]}`;
}

function getCheckinConfig(airline) {
    if (!airline) return { days: 1, label: '24h antes' };
    const a = airline.toLowerCase();
    if (a.includes('airasia')) return { days: 14, label: '14 días antes' };
    if (a.includes('spring')) return { days: 1, label: '24h antes' };
    if (a.includes('hainan')) return { days: 1, label: '24h antes' };
    if (a.includes('vietjet')) return { days: 1, label: '24h antes' };
    if (a.includes('lion')) return { days: 1, label: '24h antes' };
    if (a.includes('iberia') || a.includes('southern')) return { days: 1, label: '24h antes' };
    return { days: 1, label: '24h antes' };
}

function getFlightFullDate(dateStr) {
    const months = { 'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11 };
    const clean = dateStr.replace('~', '').trim();
    const parts = clean.split(' ');
    if (parts.length >= 2) {
        const day = parseInt(parts[0]);
        const month = months[parts[1]];
        if (!isNaN(day) && month !== undefined) {
            return new Date(2026, month, day);
        }
    }
    return null;
}

function getWeatherEmoji(code) {
    if (code >= 200 && code < 300) return '⛈️';
    if (code >= 300 && code < 500) return '🌦️';
    if (code >= 500 && code < 600) return '🌧️';
    if (code >= 600 && code < 700) return '❄️';
    if (code >= 700 && code < 800) return '🌫️';
    if (code === 800) return '☀️';
    if (code === 801) return '🌤️';
    if (code <= 803) return '⛅';
    return '☁️';
}
