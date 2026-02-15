// ═══════════════════════════════════════════════════════════
// FINANCE — Currency converter + expense tracker + budget
// ═══════════════════════════════════════════════════════════

// ═══════════════════ CURRENCY EXCHANGE ═══════════════════

async function fetchExchangeRates() {
  try {
    const resp = await fetch('https://api.frankfurter.app/latest?from=EUR&to=CNY,TWD,THB');
    const data = await resp.json();
    exchangeRates = data.rates;
    lastRateUpdate = new Date();
    renderCurrency();
  } catch (e) {
    console.warn('Exchange rate API unavailable, using fallback rates');
    exchangeRates = { CNY: 7.85, TWD: 35.2, THB: 38.5 };
    lastRateUpdate = null;
    renderCurrency();
  }
}

function convertEUR(amount, currency) {
  if (!exchangeRates[currency]) return '—';
  return (amount * exchangeRates[currency]).toFixed(2);
}

function renderCurrency() {
  const el = document.getElementById('currency-content');
  const quickAmounts = [10, 20, 50, 100, 200];
  const updateText = lastRateUpdate
    ? `Actualizado: ${lastRateUpdate.toLocaleTimeString('es-ES')} (Frankfurter/BCE)`
    : 'Tasas de referencia (sin conexión)';

  el.innerHTML = `
    <div class="currency-update glass">
      <span class="currency-update-dot ${lastRateUpdate ? 'live' : 'offline'}"></span>
      ${updateText}
    </div>
    <div class="currency-converter glass">
      <div class="converter-input-wrap">
        <label class="converter-label">Cantidad en EUR</label>
        <div class="converter-input-row">
          <span class="converter-symbol">€</span>
          <input type="number" id="eur-input" class="converter-input" value="50" min="0" step="5" oninput="updateConversion()">
        </div>
      </div>
      <div class="converter-results" id="converter-results">
        ${CURRENCIES.map(c => `<div class="converter-result" style="border-left: 3px solid ${c.color}">
          <div class="converter-result-header">
            <span>${c.flag} ${c.code}</span>
            <span class="converter-rate">1€ = ${exchangeRates[c.code] ? exchangeRates[c.code].toFixed(2) : '—'} ${c.symbol}</span>
          </div>
          <div class="converter-result-value">${c.symbol} ${convertEUR(50, c.code)}</div>
          <div class="converter-result-cities">${c.cities}</div>
        </div>`).join('')}
      </div>
    </div>
    <div class="currency-table glass">
      <div class="currency-table-title">Tabla de referencia rápida</div>
      <table>
        <thead><tr><th>EUR €</th>${CURRENCIES.map(c => `<th>${c.flag} ${c.code}</th>`).join('')}</tr></thead>
        <tbody>
          ${quickAmounts.map(a => `<tr>
            <td><strong>${a}€</strong></td>
            ${CURRENCIES.map(c => `<td>${c.symbol} ${convertEUR(a, c.code)}</td>`).join('')}
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <div class="currency-tips">
      <div class="currency-tip glass">💡 <strong>China:</strong> Alipay y WeChat Pay son imprescindibles. Activa Alipay Tour Pass antes de ir.</div>
      <div class="currency-tip glass">💡 <strong>Taiwán:</strong> Cajeros Post Office ATM sin comisión. Tarjetas Visa/MC aceptadas en muchos sitios.</div>
      <div class="currency-tip glass">💡 <strong>Tailandia:</strong> SuperRich exchange houses tienen las mejores tasas. Evita cambiar en aeropuerto.</div>
    </div>
  `;
}

function updateConversion() {
  const amount = parseFloat(document.getElementById('eur-input').value) || 0;
  const results = document.getElementById('converter-results');
  results.innerHTML = CURRENCIES.map(c => `<div class="converter-result" style="border-left: 3px solid ${c.color}">
    <div class="converter-result-header">
      <span>${c.flag} ${c.code}</span>
      <span class="converter-rate">1€ = ${exchangeRates[c.code] ? exchangeRates[c.code].toFixed(2) : '—'} ${c.symbol}</span>
    </div>
    <div class="converter-result-value">${c.symbol} ${convertEUR(amount, c.code)}</div>
    <div class="converter-result-cities">${c.cities}</div>
  </div>`).join('');
}


// ═══════════════════ TODOS ═══════════════════
function renderTodos() {
  const el = document.getElementById('todo-list');
  el.innerHTML = TRIP_DATA.todos.map((t, i) => `<div class="todo-item glass ${t.done ? 'done' : ''}" onclick="toggleTodo(${i})">
    <div class="todo-check"></div>
    <span class="todo-text">${t.text}</span>
    <span class="todo-priority ${t.priority}">${t.priority}</span>
  </div>`).join('');
}
function toggleTodo(i) {
  TRIP_DATA.todos[i].done = !TRIP_DATA.todos[i].done;
  renderTodos();
}

// ═══════════════════ BUDGET ═══════════════════
function renderBudget() {
  const total = TRIP_DATA.budget.reduce((s, b) => s + b.amount, 0);
  document.getElementById('budget-total').textContent = total.toFixed(2) + '€';
  document.getElementById('budget-items').innerHTML = TRIP_DATA.budget.map(b => `<div class="budget-item glass">
    <span class="budget-concept">${b.concept}</span>
    <span class="budget-value">${b.amount.toFixed(2)}€</span>
  </div>`).join('');
}


function getExpenses() {
  return JSON.parse(localStorage.getItem('trip_expenses') || '[]');
}

function saveExpenses(expenses) {
  localStorage.setItem('trip_expenses', JSON.stringify(expenses));
}

function renderExpenses() {
  const el = document.getElementById('expenses-grid');
  const expenses = getExpenses();

  // Calculate totals
  const totalEUR = expenses.reduce((sum, e) => sum + e.amountEUR, 0);
  const byCountry = {};
  const byCategory = {};
  expenses.forEach(e => {
    byCountry[e.currency] = (byCountry[e.currency] || 0) + e.amountEUR;
    byCategory[e.category] = (byCategory[e.category] || 0) + e.amountEUR;
  });

  // Budget (estimated ~2500€ for 27 days)
  const budget = 2500;
  const budgetPct = Math.min(100, Math.round((totalEUR / budget) * 100));

  el.innerHTML = `
    <div class="expense-summary glass">
      <div class="expense-total">
        <span class="expense-total-label">💰 Total gastado</span>
        <span class="expense-total-amount">${totalEUR.toFixed(2)}€</span>
      </div>
      <div class="expense-budget-bar">
        <div class="expense-budget-fill" style="width:${budgetPct}%;background:${budgetPct > 80 ? '#e74c3c' : budgetPct > 60 ? '#f1c40f' : '#2ecc71'}"></div>
      </div>
      <div class="expense-budget-label">${budgetPct}% del presupuesto (${budget}€)</div>
      ${Object.keys(byCountry).length > 0 ? `
        <div class="expense-breakdown">
          ${Object.entries(byCountry).map(([cur, amt]) =>
    `<span class="expense-country-tag">${EXPENSE_CURRENCIES[cur]?.flag || '🌍'} ${amt.toFixed(0)}€</span>`
  ).join('')}
        </div>
      ` : ''}
      ${Object.keys(byCategory).length > 0 ? `
        <div class="expense-breakdown">
          ${Object.entries(byCategory).map(([cat, amt]) => {
    const catInfo = EXPENSE_CATEGORIES.find(c => c.id === cat) || { emoji: '📎', label: cat };
    return `<span class="expense-cat-tag">${catInfo.emoji} ${catInfo.label}: ${amt.toFixed(0)}€</span>`;
  }).join('')}
        </div>
      ` : ''}
    </div>
    
    <div class="expense-add glass">
      <div class="expense-add-title">➕ Nuevo gasto</div>
      <div class="expense-form">
        <input type="number" id="expense-amount" placeholder="Cantidad" step="0.01" class="expense-input">
        <select id="expense-currency" class="expense-select">
          ${Object.entries(EXPENSE_CURRENCIES).map(([code, c]) => `<option value="${code}">${c.flag} ${code} (${c.symbol})</option>`).join('')}
        </select>
        <select id="expense-category" class="expense-select">
          ${EXPENSE_CATEGORIES.map(c => `<option value="${c.id}">${c.emoji} ${c.label}</option>`).join('')}
        </select>
        <input type="text" id="expense-note" placeholder="Nota (opcional)" class="expense-input">
        <button onclick="addExpense()" class="expense-add-btn">💾 Guardar</button>
      </div>
    </div>
    
    ${expenses.length > 0 ? `
      <div class="expense-history glass">
        <div class="expense-history-title">📋 Últimos gastos</div>
        ${expenses.slice(-15).reverse().map((e, i) => {
    const catInfo = EXPENSE_CATEGORIES.find(c => c.id === e.category) || { emoji: '📎' };
    return `<div class="expense-row">
            <span class="expense-row-cat">${catInfo.emoji}</span>
            <span class="expense-row-note">${e.note || e.category}</span>
            <span class="expense-row-amount">${EXPENSE_CURRENCIES[e.currency]?.symbol || ''}${e.amount} → ${e.amountEUR.toFixed(2)}€</span>
            <span class="expense-row-date">${e.date}</span>
            <span class="expense-row-del" onclick="deleteExpense(${expenses.length - 1 - i})">✕</span>
          </div>`;
  }).join('')}
      </div>
    ` : '<div class="expense-empty glass">🎒 Aún no hay gastos. ¡Empieza a registrar!</div>'}
  `;
}

function addExpense() {
  const amount = parseFloat(document.getElementById('expense-amount').value);
  if (!amount || amount <= 0) return alert('Introduce una cantidad válida');

  const currency = document.getElementById('expense-currency').value;
  const category = document.getElementById('expense-category').value;
  const note = document.getElementById('expense-note').value;
  const rate = EXPENSE_CURRENCIES[currency]?.rate || 1;
  const amountEUR = amount * rate;

  const now = new Date();
  const date = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}`;

  const expenses = getExpenses();
  expenses.push({ amount, currency, category, note, amountEUR, date, timestamp: Date.now() });
  saveExpenses(expenses);
  renderExpenses();
}

function deleteExpense(index) {
  const expenses = getExpenses();
  expenses.splice(index, 1);
  saveExpenses(expenses);
  renderExpenses();
}


