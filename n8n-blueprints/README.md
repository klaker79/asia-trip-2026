# 🤖 n8n Workflows — Asia Trip 2026

## Workflows disponibles

### 1. 💱 Exchange Rate Tracker
**Archivo**: `exchange-rate-tracker.json`

Monitoriza las tasas EUR→CNY/TWD/THB cada 6 horas.

| Componente | Detalle |
|-----------|---------|
| **Trigger** | Cada 6 horas |
| **API** | Frankfurter (BCE, gratuito) |
| **Output** | Google Sheets + Telegram |
| **Datos** | Tasa + equivalencia para 100€ |

**Setup:**
1. Crear Google Sheet con columnas: `timestamp, base, date, CNY, TWD, THB, CNY_for_100EUR, TWD_for_100EUR, THB_for_100EUR`
2. Crear bot Telegram vía [@BotFather](https://t.me/BotFather)
3. Importar JSON en n8n → Configurar credenciales → Activar

---

### 2. 🌅 Daily Briefing
**Archivo**: `daily-briefing.json`

Briefing diario inteligente que se adapta a la fase del viaje.

| Fase | Contenido del mensaje |
|------|----------------------|
| **Pre-viaje** | ⏱ Countdown + 💱 Tasas + 📋 Recordatorios |
| **En viaje** | 🌤 Meteo local + 💱 Tasa del país + 🗺 Próximo destino |
| **Post-viaje** | 🎉 Celebración |

**APIs usadas (ambas gratuitas, sin API key):**
- [Frankfurter](https://frankfurter.app) — Tasas de cambio (BCE)
- [Open-Meteo](https://open-meteo.com) — Meteorología

**Setup:**
1. Crear bot Telegram vía @BotFather
2. Obtener chat ID (envía un mensaje a [@userinfobot](https://t.me/userinfobot))
3. Importar JSON en n8n → Configurar Telegram credentials → Activar

---

## Cómo importar en n8n

1. En tu instancia de n8n, ve a **Workflows → Import from File**
2. Selecciona el archivo `.json`
3. Reemplaza los placeholders:
   - `YOUR_GOOGLE_SHEET_ID` → ID de tu Google Sheet
   - `YOUR_TELEGRAM_CHAT_ID` → Tu chat ID de Telegram
4. Conecta credenciales (Google Sheets, Telegram)
5. ¡Activa el workflow!

## Arquitectura

```
n8n (cron scheduled)
  ├── Frankfurter API (tasas cambio)
  ├── Open-Meteo API (meteorología)
  │
  ├─→ Google Sheets (histórico de datos)
  └─→ Telegram Bot (alertas & briefings)
          │
          └─→ Iker & Anais 📱
```
