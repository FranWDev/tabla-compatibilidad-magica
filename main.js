const icons = {
  agua: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" /></svg>`,
  fuego: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a7.3 7.3 0 0 1-1.38-1.66c-.33-.5-.54-1.06-.63-1.64c-.05-.33-.4-.53-.7-.36c-.47.27-.85.66-1.12 1.15c-1.28 2.27-1.1 5.25.46 7.37c1.3 1.77 3.32 2.81 5.48 2.81c.54 0 1.08-.06 1.62-.2c2.81-.7 4.95-3.07 5.44-5.96c.16-.9.03-1.84-.37-2.65l-.23-.59z"/></svg>`,
  naturaleza: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/></svg>`,
  hielo: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M22,12L19,10.27V7.5L16.23,7.5L14.5,4.73L12,6V2H10V6L7.5,4.73L5.77,7.5L3,7.5V10.27L0,12L3,13.73V16.5L5.77,16.5L7.5,19.27L10,18V22H12V18L14.5,19.27L16.23,16.5L19,16.5V13.73L22,12Z"/></svg>`,
  electrico: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M7,2V13H10V22L17,10H13L17,2H7Z"/></svg>`,
  sagrado: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M19,20.25L20.25,17.5L23,16.25L20.25,15L19,12.25L17.75,15L15,16.25L17.75,17.5L19,20.25M10.5,16.5L12.5,11.5L17.5,9.5L12.5,7.5L10.5,2.5L8.5,7.5L3.5,9.5L8.5,11.5L10.5,16.5Z"/></svg>`,
  sangre: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12,2A9,9 0 0,0 3,11C3,14.03 4.5,16.7 6.83,18.33V20A2,2 0 0,0 8.83,22H15.17A2,2 0 0,0 17.17,20V18.33C19.5,16.7 21,14.03 21,11A9,9 0 0,0 12,2M12,4A7,7 0 0,1 19,11C19,13.37 17.82,15.47 16,16.72V19H8V16.72C6.18,15.47 5,13.37 5,11A7,7 0 0,1 12,4Z"/></svg>`,
  invocador: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M8 21V19H14V21H8M10 3V5H16V3H10M20 8V16C20 17.1 19.1 18 18 18H16V16H18V8H6V16H8V18H6C4.9 18 4 17.1 4 16V8C4 6.9 4.9 6 6 6H8V8H10V6H14V8H16V6H18C19.1 6 20 6.9 20 8M14 10H10V14H14V10Z"/></svg>`,
  ender: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>`,
  eldritch: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12,2L14.8,8.2L21,11L14.8,13.8L12,20L9.2,13.8L3,11L9.2,8.2L12,2M12,8.5A2.5,2.5 0 0,0 9.5,11A2.5,2.5 0 0,0 12,13.5A2.5,2.5 0 0,0 14.5,11A2.5,2.5 0 0,0 12,8.5Z" /></svg>`
};

const elements = [
  { id: 'agua',       label: 'Agua',       icon: icons.agua,       color: '#3498db', strongAgainst: ['fuego', 'ender'],                                                                    weakAgainst: ['naturaleza', 'electrico', 'eldritch'] },
  { id: 'fuego',      label: 'Fuego',      icon: icons.fuego,      color: '#d35400', strongAgainst: ['naturaleza', 'hielo'],                                                               weakAgainst: ['agua', 'sangre', 'eldritch'] },
  { id: 'naturaleza', label: 'Naturaleza', icon: icons.naturaleza, color: '#2ecc71', strongAgainst: ['agua', 'electrico'],                                                                 weakAgainst: ['fuego', 'hielo', 'eldritch'] },
  { id: 'hielo',      label: 'Hielo',      icon: icons.hielo,      color: '#00ffff', strongAgainst: ['naturaleza', 'sangre'],                                                              weakAgainst: ['fuego', 'sagrado', 'eldritch'] },
  { id: 'electrico',  label: 'Eléctrico',  icon: icons.electrico,  color: '#f39c12', strongAgainst: ['agua', 'invocador'],                                                                 weakAgainst: ['naturaleza', 'ender', 'eldritch'] },
  { id: 'sagrado',    label: 'Sagrado',    icon: icons.sagrado,    color: '#f1c40f', strongAgainst: ['hielo', 'sangre'],                                                                   weakAgainst: ['invocador', 'ender', 'eldritch'] },
  { id: 'sangre',     label: 'Sangre',     icon: icons.sangre,     color: '#e74c3c', strongAgainst: ['fuego', 'invocador'],                                                                weakAgainst: ['hielo', 'sagrado', 'eldritch'] },
  { id: 'invocador',  label: 'Invocador',  icon: icons.invocador,  color: '#95a5a6', strongAgainst: ['sagrado', 'ender'],                                                                  weakAgainst: ['electrico', 'sangre', 'eldritch'] },
  { id: 'ender',      label: 'Ender',      icon: icons.ender,      color: '#9b59b6', strongAgainst: ['electrico', 'sagrado'],                                                              weakAgainst: ['agua', 'invocador', 'eldritch'] },
  { id: 'eldritch',   label: 'Eldritch',   icon: icons.eldritch,   color: '#b533ff', strongAgainst: ['agua', 'fuego', 'naturaleza', 'hielo', 'electrico', 'sagrado', 'sangre', 'invocador', 'ender', 'eldritch'], weakAgainst: ['eldritch'] }
];

// ──────────────────────────────────────────────
// SINERGIAS — CÓMPUTO DINÁMICO
// ──────────────────────────────────────────────
const svgShield  = `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`;
const svgWarning = `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`;
const svgBlock   = `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.68L5.68 16.9A7.96 7.96 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.68L18.32 7.1A7.96 7.96 0 0 1 20 12c0 4.42-3.58 8-8 8z"/></svg>`;

// Metadata por categoría (sin pares — se calculan dinámicamente)
const compatGrupos = {
  equilibrada: { tipo: 'equilibrada', label: 'Sinergias Equilibradas', color: '#2ecc71', icon: svgShield,
    descripcion: 'Sin debilidades críticas (x4). Cobertura amplia con debilidades repartidas entre múltiples tipos.' },
  polarizada:  { tipo: 'polarizada',  label: 'Sinergias Polarizadas',  color: '#f39c12', icon: svgWarning,
    descripcion: 'Viable pero con un Punto Ciego Crítico (x4): ambas clases comparten una vulnerabilidad externa.' },
  conflictiva: { tipo: 'conflictiva', label: 'Sinergias Conflictivas', color: '#e74c3c', icon: svgBlock,
    descripcion: 'Incompatible: una magia domina directamente a la otra. El flujo de poder es inestable.' }
};

// Notas de lore personalizadas para cada par conflictivo.
// Clave: IDs ordenados alfabéticamente separados por '|'.
const conflictNotas = {
  'agua|fuego':           'Agua apaga Fuego.',
  'agua|naturaleza':      'Naturaleza absorbe Agua.',
  'agua|electrico':       'Eléctrico electrifica Agua.',
  'agua|ender':           'Agua daña a Ender.',
  'fuego|naturaleza':     'Fuego quema Naturaleza.',
  'fuego|hielo':          'Fuego derrite Hielo.',
  'fuego|sangre':         'Sangre sofoca Fuego.',
  'hielo|naturaleza':     'Hielo marchita Naturaleza.',
  'electrico|naturaleza': 'Naturaleza aísla Eléctrico.',
  'hielo|sagrado':        'Sagrado quiebra Hielo.',
  'hielo|sangre':         'Hielo congela Sangre.',
  'electrico|invocador':  'Eléctrico fulmina a Invocador.',
  'electrico|ender':      'Ender esquiva Eléctrico.',
  'sagrado|sangre':       'Sagrado purifica Sangre.',
  'invocador|sagrado':    'Invocador abruma Sagrado.',
  'ender|sagrado':        'Ender consume Sagrado.',
  'invocador|sangre':     'Sangre corrompe Invocador.',
  'ender|invocador':      'Invocador acorrala a Ender.',
};

/**
 * Calcula todas las sinergias par a par a partir de la lista de elementos.
 * Reglas:
 *   1. CONFLICTIVA  — A.id ∈ B.strongAgainst  OR  B.id ∈ A.strongAgainst
 *   2. POLARIZADA   — sin conflicto directo, pero ∃ Z ∈ A.weakAgainst ∩ B.weakAgainst
 *                     (excluye 'eldritch', que todos comparten)
 *   3. EQUILIBRADA  — ninguna de las anteriores
 */
function buildCompatData(elementList) {
  const paresMap = { equilibrada: [], polarizada: [], conflictiva: [] };
  const lookup   = {};

  for (let i = 0; i < elementList.length; i++) {
    for (let j = i + 1; j < elementList.length; j++) {
      const elA = elementList[i];
      const elB = elementList[j];

      const strongA = elA.strongAgainst || [];
      const strongB = elB.strongAgainst || [];
      // Exclude 'eldritch' from weakness comparisons (shared universal weakness → always noise)
      const weakA = (elA.weakAgainst || []).filter(id => id !== 'eldritch');
      const weakB = (elB.weakAgainst || []).filter(id => id !== 'eldritch');

      // ── Regla 1: Conflictiva ────────────────────────────────────────
      const aBeatsB = strongA.includes(elB.id);
      const bBeatsA = strongB.includes(elA.id);

      if (aBeatsB || bBeatsA) {
        // Use custom lore note if available (key is the two IDs sorted alphabetically)
        const noteKey = [elA.id, elB.id].sort().join('|');
        const nota = conflictNotas[noteKey] || (
          (aBeatsB && bBeatsA)
            ? `${elA.label} y ${elB.label} se dominan mutuamente — el flujo de poder es caótico.`
            : aBeatsB
              ? `${elA.label} domina directamente a ${elB.label}.`
              : `${elB.label} domina directamente a ${elA.label}.`
        );
        const par = { ids: [elA.id, elB.id], nota };
        paresMap.conflictiva.push(par);
        const entry = { ...par, ...compatGrupos.conflictiva };
        lookup[`${elA.id}|${elB.id}`] = entry;
        lookup[`${elB.id}|${elA.id}`] = entry;
        continue;
      }

      // Combined coverage (excluding themselves)
      const allStrong = [...new Set([...strongA, ...strongB])]
        .filter(id => id !== elA.id && id !== elB.id);
      const allWeak   = [...new Set([...weakA, ...weakB])];

      // ── Regla 2: Polarizada ─────────────────────────────────────────
      const shared = weakA.filter(id => weakB.includes(id));

      if (shared.length > 0) {
        const weakRest = allWeak.filter(id => !shared.includes(id));
        const par = { ids: [elA.id, elB.id], strongAgainst: allStrong,
                      criticalWeaknesses: shared, weakAgainst: weakRest };
        paresMap.polarizada.push(par);
        const entry = { ...par, ...compatGrupos.polarizada };
        lookup[`${elA.id}|${elB.id}`] = entry;
        lookup[`${elB.id}|${elA.id}`] = entry;
        continue;
      }

      // ── Regla 3: Equilibrada ────────────────────────────────────────
      const par = { ids: [elA.id, elB.id], strongAgainst: allStrong, weakAgainst: allWeak };
      paresMap.equilibrada.push(par);
      const entry = { ...par, ...compatGrupos.equilibrada };
      lookup[`${elA.id}|${elB.id}`] = entry;
      lookup[`${elB.id}|${elA.id}`] = entry;
    }
  }

  const compatibilidades = [
    { ...compatGrupos.equilibrada, pares: paresMap.equilibrada },
    { ...compatGrupos.polarizada,  pares: paresMap.polarizada  },
    { ...compatGrupos.conflictiva, pares: paresMap.conflictiva },
  ];
  return { compatibilidades, compatLookup: lookup };
}

// Elements that participate in synergies (Eldritch is a universal boss, not a playable synergy)
const compatOnlyElements = elements.filter(el => el.id !== 'eldritch');
const { compatibilidades, compatLookup } = buildCompatData(compatOnlyElements);


// ──────────────────────────────────────────────
// NAVEGACIÓN (shared)
// ──────────────────────────────────────────────
function switchView(viewId, btnElement, controlsId, viewsId) {
  document.getElementById(controlsId).querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(viewsId).querySelectorAll('.view-container').forEach(view => view.classList.remove('active'));
  btnElement.classList.add('active');
  document.getElementById('view-' + viewId).classList.add('active');
}

// ──────────────────────────────────────────────
// SECCIÓN 1: TIPOS ELEMENTALES
// ──────────────────────────────────────────────
function initMobileLegend() {
  const container = document.getElementById('mobile-legend');
  let html = '';
  elements.forEach(el => {
    html += `<div class="legend-pill" style="border-color: ${el.color};"><span style="color:${el.color}">${el.icon}</span> ${el.label}</div>`;
  });
  container.innerHTML = html;
}

function placeElementsOnCircle(els, centerX, centerY, radius) {
  const circle = els.filter(el => el.id !== 'eldritch');
  const angleStep = (2 * Math.PI) / circle.length;
  circle.forEach((el, i) => {
    const angle = i * angleStep - Math.PI / 2;
    el.x = centerX + radius * Math.cos(angle);
    el.y = centerY + radius * Math.sin(angle);
  });
  const eldritch = els.find(el => el.id === 'eldritch');
  if (eldritch) { eldritch.x = centerX; eldritch.y = centerY; }
}

function initChart() {
  placeElementsOnCircle(elements, 50, 50, 40);

  const container = document.getElementById("chart");
  const svgLayer = document.getElementById("lines-layer");
  const elementNodes = {};

  elements.forEach((source) => {
    source.strongAgainst.forEach((targetId) => {
      const target = elements.find((e) => e.id === targetId);
      if (target && target.id !== source.id) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const d = `M ${source.x * 10} ${source.y * 10} Q 500 500 ${target.x * 10} ${target.y * 10}`;
        path.setAttribute("d", d);
        path.setAttribute("stroke", source.color);
        path.classList.add("line");
        path.dataset.source = source.id;
        path.dataset.target = target.id;
        if (source.id === 'eldritch') {
          path.dataset.isEldritch = 'true';
          path.style.opacity = "0"; path.style.strokeWidth = "4";
        } else {
          path.style.opacity = "0.15"; path.style.strokeWidth = "2";
        }
        svgLayer.appendChild(path);
      }
    });
  });

  elements.forEach((el) => {
    const node = document.createElement("div");
    node.className = "node";
    node.dataset.id = el.id;
    node.style.left = el.x + "%";
    node.style.top = el.y + "%";
    node.style.borderColor = el.color;
    node.style.color = el.color;
    node.innerHTML = `<div class="node-icon">${el.icon}</div><div class="node-label">${el.label}</div>`;
    node.addEventListener("mouseenter", () => highlightRelations(el.id, elementNodes, "#lines-layer", ".node"));
    node.addEventListener("mouseleave", () => resetHighlight("#lines-layer", ".node"));
    container.appendChild(node);
    elementNodes[el.id] = node;
  });
}

function highlightRelations(activeId, elementNodes, svgId, nodeSelector) {
  const paths = document.querySelectorAll(`${svgId} path.line`);
  const nodes = document.querySelectorAll(nodeSelector);

  paths.forEach((p) => {
    p.style.opacity = p.dataset.isEldritch === 'true' ? "0" : "0.05";
  });
  nodes.forEach((n) => (n.style.opacity = "0.3"));

  elementNodes[activeId].style.opacity = "1";
  elementNodes[activeId].style.transform = activeId !== 'eldritch'
    ? "translate(-50%, -50%) scale(1.2)"
    : "translate(-50%, -50%) scale(1.35)";

  paths.forEach((p) => {
    if (p.dataset.source === activeId) {
      p.style.opacity = "1"; p.style.strokeWidth = "5"; p.style.strokeDasharray = "none";
      if (elementNodes[p.dataset.target]) elementNodes[p.dataset.target].style.opacity = "1";
    }
    if (p.dataset.target === activeId) {
      if (p.dataset.source === 'eldritch') return;
      p.style.opacity = "0.8"; p.style.strokeWidth = "4"; p.style.strokeDasharray = "10,10";
      if (elementNodes[p.dataset.source]) elementNodes[p.dataset.source].style.opacity = "1";
    }
  });
}

function resetHighlight(svgId, nodeSelector) {
  document.querySelectorAll(`${svgId} path.line`).forEach(p => {
    if (p.dataset.isEldritch === 'true') { p.style.opacity = "0"; p.style.strokeWidth = "4"; }
    else { p.style.opacity = "0.15"; p.style.strokeWidth = "2"; }
    p.style.strokeDasharray = "none";
  });
  document.querySelectorAll(nodeSelector).forEach(n => {
    n.style.opacity = "1";
    n.style.transform = n.dataset.id !== 'eldritch'
      ? "translate(-50%, -50%) scale(1)"
      : "translate(-50%, -50%) scale(1.15)";
  });
}

function initMatrix() {
  const table = document.getElementById('matrix-table');
  let html = '<tr><th>ATACA \\ DEFIENDE</th>';
  elements.forEach(el => { html += `<th style="color: ${el.color}"><span class="matrix-icon">${el.icon}</span>${el.label}</th>`; });
  html += '</tr>';
  elements.forEach(attacker => {
    html += `<tr><th class="row-header" style="color: ${attacker.color}"><span class="matrix-icon">${attacker.icon}</span> ${attacker.label}</th>`;
    elements.forEach(defender => {
      if (attacker.strongAgainst.includes(defender.id))    { html += `<td class="mult-2x">2x</td>`; }
      else if (attacker.weakAgainst.includes(defender.id)) { html += `<td class="mult-half">½</td>`; }
      else if (attacker.id === defender.id)                 { html += `<td class="mult-neutral">-</td>`; }
      else                                                  { html += `<td class="mult-neutral">1x</td>`; }
    });
    html += `</tr>`;
  });
  table.innerHTML = html;
}

function initCalculator() {
  const attSelect = document.getElementById('calc-attacker');
  const defSelect = document.getElementById('calc-defender');
  let optionsHtml = '';
  elements.forEach(el => { optionsHtml += `<option value="${el.id}">${el.label}</option>`; });
  attSelect.innerHTML = optionsHtml;
  defSelect.innerHTML = optionsHtml;
  defSelect.selectedIndex = 1;

  const calculate = () => {
    const att = elements.find(e => e.id === attSelect.value);
    const defId = defSelect.value;
    const box = document.getElementById('calc-result');
    const num = document.getElementById('calc-num');
    const txt = document.getElementById('calc-txt');
    if (att.strongAgainst.includes(defId)) {
      box.style.borderColor = "#2ecc71"; box.style.color = "#2ecc71"; box.style.boxShadow = "0 0 20px rgba(46,204,113,0.2)";
      num.innerText = "2x"; txt.innerText = "Súper Efectivo";
    } else if (att.weakAgainst.includes(defId)) {
      box.style.borderColor = "#e74c3c"; box.style.color = "#e74c3c"; box.style.boxShadow = "0 0 20px rgba(231,76,60,0.2)";
      num.innerText = "½"; txt.innerText = "Poco Efectivo";
    } else if (att.id === defId) {
      box.style.borderColor = "#555"; box.style.color = "#888"; box.style.boxShadow = "none";
      num.innerText = "-"; txt.innerText = "Mismo Tipo / Sin Efecto";
    } else {
      box.style.borderColor = "#555"; box.style.color = "#fff"; box.style.boxShadow = "none";
      num.innerText = "1x"; txt.innerText = "Daño Neutro";
    }
  };
  attSelect.addEventListener('change', calculate);
  defSelect.addEventListener('change', calculate);
  calculate();
}

function initCards() {
  const container = document.getElementById('cards-wrapper');
  const createBadge = (id) => {
    const el = elements.find(e => e.id === id);
    return `<div class="type-badge" style="background-color: ${el.color};">${el.icon} ${el.label}</div>`;
  };
  let html = '';
  elements.forEach(el => {
    html += `
      <div class="type-card" style="border-top-color: ${el.color}">
        <div class="card-header" style="color: ${el.color}">${el.icon} ${el.label}</div>
        <div class="card-section"><div class="card-section-title">Hace doble daño a (2x):</div>
          <div class="badge-list">${el.strongAgainst.map(id => createBadge(id)).join('')}</div>
        </div>
        <div class="card-section" style="margin-top: 15px;"><div class="card-section-title">Recibe doble daño de (2x):</div>
          <div class="badge-list">${el.weakAgainst.map(id => createBadge(id)).join('')}</div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

// ──────────────────────────────────────────────
// SECCIÓN 2: SINERGIAS — GRÁFICO CÓSMICO
// ──────────────────────────────────────────────

const compatElements = compatOnlyElements.map(el => ({ ...el }));

function initCompatChart() {
  placeElementsOnCircle(compatElements, 50, 50, 40);

  const container = document.getElementById("compat-chart");
  const svgLayer = document.getElementById("compat-lines-layer");
  const nodeMap = {};

  // Draw lines for each synergy pair
  compatibilidades.forEach(grupo => {
    grupo.pares.forEach(par => {
      const [idA, idB] = par.ids;
      const elA = compatElements.find(e => e.id === idA);
      const elB = compatElements.find(e => e.id === idB);
      if (!elA || !elB) return;

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = `M ${elA.x * 10} ${elA.y * 10} Q 500 500 ${elB.x * 10} ${elB.y * 10}`;
      path.setAttribute("d", d);
      path.setAttribute("stroke", grupo.color);
      path.classList.add("line");
      path.dataset.source = idA;
      path.dataset.target = idB;
      path.dataset.synergy = grupo.tipo;
      path.style.opacity = "0.2";
      path.style.strokeWidth = "2";

      if (grupo.tipo === 'conflictiva') {
        path.style.strokeDasharray = "8,6";
      } else if (grupo.tipo === 'polarizada') {
        path.style.strokeDasharray = "4,4";
      }
      svgLayer.appendChild(path);
    });
  });

  // Render nodes (eldritch excluded)
  compatElements.forEach((el) => {
    const node = document.createElement("div");
    node.className = "node";
    node.dataset.id = el.id;
    node.style.left = el.x + "%";
    node.style.top = el.y + "%";
    node.style.borderColor = el.color;
    node.style.color = el.color;
    node.innerHTML = `<div class="node-icon">${el.icon}</div><div class="node-label">${el.label}</div>`;

    node.addEventListener("mouseenter", () => highlightCompatRelations(el.id, nodeMap));
    node.addEventListener("mouseleave", resetCompatHighlight);

    container.appendChild(node);
    nodeMap[el.id] = node;
  });
}

function highlightCompatRelations(activeId, nodeMap) {
  const paths = document.querySelectorAll("#compat-lines-layer path.line");
  const nodes = document.querySelectorAll("#compat-chart .node");

  paths.forEach(p => { p.style.opacity = "0.03"; });
  nodes.forEach(n => { n.style.opacity = "0.25"; });

  nodeMap[activeId].style.opacity = "1";
  nodeMap[activeId].style.transform = "translate(-50%,-50%) scale(1.2)";

  paths.forEach(p => {
    if (p.dataset.source === activeId || p.dataset.target === activeId) {
      p.style.opacity = "1";
      p.style.strokeWidth = "5";
      const otherId = p.dataset.source === activeId ? p.dataset.target : p.dataset.source;
      if (nodeMap[otherId]) nodeMap[otherId].style.opacity = "1";
    }
  });
}

function resetCompatHighlight() {
  document.querySelectorAll("#compat-lines-layer path.line").forEach(p => {
    p.style.opacity = "0.2";
    p.style.strokeWidth = "2";
  });
  document.querySelectorAll("#compat-chart .node").forEach(n => {
    n.style.opacity = "1";
    n.style.transform = "translate(-50%,-50%) scale(1)";
  });
}

// ──────────────────────────────────────────────
// SECCIÓN 2: SINERGIAS — MATRIZ CLÁSICA
// ──────────────────────────────────────────────
function initCompatMatrix() {
  const table = document.getElementById('compat-matrix-table');

  const synergyCell = (entry) => {
    if (!entry) return `<td class="mult-neutral" style="color:#2a2a2a;">·</td>`;
    const svgMap = { equilibrada: svgShield, polarizada: svgWarning, conflictiva: svgBlock };
    return `<td class="compat-cell compat-cell-${entry.tipo}" title="${entry.label}: ${entry.ids.join(' + ')}">
      <span class="compat-cell-svg" style="color:${entry.color}">${svgMap[entry.tipo]}</span></td>`;
  };

  let html = '<tr><th>A / B</th>';
  compatOnlyElements.forEach(el => { html += `<th style="color:${el.color}"><span class="matrix-icon">${el.icon}</span>${el.label}</th>`; });
  html += '</tr>';

  compatOnlyElements.forEach(elA => {
    html += `<tr><th class="row-header" style="color:${elA.color}"><span class="matrix-icon">${elA.icon}</span> ${elA.label}</th>`;
    compatOnlyElements.forEach(elB => {
      if (elA.id === elB.id) { html += `<td class="mult-neutral" style="color:#2a2a2a;">—</td>`; }
      else { html += synergyCell(compatLookup[`${elA.id}|${elB.id}`]); }
    });
    html += `</tr>`;
  });
  table.innerHTML = html;
}

// ──────────────────────────────────────────────
// SECCIÓN 2: SINERGIAS — MODO VERSUS
// ──────────────────────────────────────────────
function initCompatVersus() {
  const selA = document.getElementById('compat-select-a');
  const selB = document.getElementById('compat-select-b');
  let optionsHtml = '';
  compatOnlyElements.forEach(el => { optionsHtml += `<option value="${el.id}">${el.label}</option>`; });
  selA.innerHTML = optionsHtml;
  selB.innerHTML = optionsHtml;
  selB.selectedIndex = 1;

  const makeBadge = (id) => {
    const el = elements.find(e => e.id === id);
    return `<div class="type-badge" style="background:${el.color}">${el.icon} ${el.label}</div>`;
  };

  const calculate = () => {
    const idA = selA.value;
    const idB = selB.value;
    const box   = document.getElementById('compat-result');
    const iconEl= document.getElementById('compat-result-icon');
    const title = document.getElementById('compat-result-title');
    const desc  = document.getElementById('compat-result-desc');

    if (idA === idB) {
      box.style.borderColor = '#555'; box.style.color = '#888'; box.style.boxShadow = 'none';
      iconEl.innerHTML = '—'; title.innerText = 'Mismo tipo';
      desc.innerHTML = '<em>Selecciona dos tipos distintos.</em>';
      return;
    }
    const entry = compatLookup[`${idA}|${idB}`];
    if (!entry) {
      box.style.borderColor = '#555'; box.style.color = '#aaa'; box.style.boxShadow = 'none';
      iconEl.innerHTML = '·'; title.innerText = 'Sin sinergia registrada';
      desc.innerHTML = '<em>Esta combinación no tiene datos de sinergia.</em>';
      return;
    }
    box.style.borderColor = entry.color;
    box.style.color       = entry.color;
    box.style.boxShadow   = `0 0 20px ${entry.color}44`;
    iconEl.innerHTML = `<span style="font-size:2rem">${entry.icon}</span>`;
    title.innerText  = entry.label;

    let detailHtml = `<p class="compat-result-subdesc">${entry.descripcion}</p>`;

    if (entry.tipo === 'equilibrada') {
      detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#2ecc71">Fuerte contra (x2)</div><div class="badge-list">${entry.strongAgainst.map(makeBadge).join('')}</div></div>`;
      detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#e74c3c">Débil contra (x2)</div><div class="badge-list">${entry.weakAgainst.map(makeBadge).join('')}</div></div>`;
    } else if (entry.tipo === 'polarizada') {
      detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#2ecc71">Fuerte contra (x2)</div><div class="badge-list">${entry.strongAgainst.map(makeBadge).join('')}</div></div>`;
      const weakRest = entry.weakAgainst || [];
      if (weakRest.length) {
        detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#e74c3c">Débil contra (x2)</div><div class="badge-list">${weakRest.map(makeBadge).join('')}</div></div>`;
      }
      const crits = entry.criticalWeaknesses || [];
      if (crits.length) {
        detailHtml += `<div class="compat-critical-box"><div class="compat-critical-label">${svgWarning} PUNTO CIEGO CRÍTICO (×4)</div><div class="badge-list">${crits.map(makeBadge).join('')}</div></div>`;
      }
    } else if (entry.tipo === 'conflictiva') {
      detailHtml += `<div class="compat-conflict-note">${entry.nota}</div>`;
    }

    desc.innerHTML = detailHtml;
  };

  selA.addEventListener('change', calculate);
  selB.addEventListener('change', calculate);
  calculate();
}

// ──────────────────────────────────────────────
// SECCIÓN 2: SINERGIAS — TARJETAS
// ──────────────────────────────────────────────
function initCompatCards() {
  const container = document.getElementById('compat-cards-wrapper');
  const makeBadge = (id) => {
    const el = elements.find(e => e.id === id);
    return `<div class="type-badge" style="background:${el.color}">${el.icon} ${el.label}</div>`;
  };

  let html = '';
  compatibilidades.forEach(grupo => {
    html += `
      <div class="syn-group">
        <div class="syn-group-header syn-group-${grupo.tipo}">
          <span class="syn-group-icon">${grupo.icon}</span>
          <div>
            <div class="syn-group-title">${grupo.label}</div>
            <div class="syn-group-desc">${grupo.descripcion}</div>
          </div>
        </div>
        <div class="syn-cards-row">`;

    grupo.pares.forEach(par => {
      const [idA, idB] = par.ids;
      const elA = elements.find(e => e.id === idA);
      const elB = elements.find(e => e.id === idB);

      html += `<div class="syn-card syn-card-${grupo.tipo}">`;

      // Header: the two elements + category badge
      html += `<div class="syn-card-pair">
        <div class="syn-el" style="color:${elA.color}">
          <span class="syn-el-icon">${elA.icon}</span>
          <span class="syn-el-name">${elA.label}</span>
        </div>
        <span class="syn-plus">+</span>
        <div class="syn-el" style="color:${elB.color}">
          <span class="syn-el-icon">${elB.icon}</span>
          <span class="syn-el-name">${elB.label}</span>
        </div>
      </div>`;

      // Body content differs by type
      if (grupo.tipo === 'equilibrada') {
        html += `<div class="syn-section">
          <div class="syn-section-title" style="color:#2ecc71">Fuerte contra (x2)</div>
          <div class="badge-list">${par.strongAgainst.map(makeBadge).join('')}</div>
        </div>
        <div class="syn-section">
          <div class="syn-section-title" style="color:#e74c3c">Débil contra (x2)</div>
          <div class="badge-list">${par.weakAgainst.map(makeBadge).join('')}</div>
        </div>`;
      } else if (grupo.tipo === 'polarizada') {
        const crits = par.criticalWeaknesses || [];
        const weakRest = par.weakAgainst || [];
        html += `<div class="syn-section">
          <div class="syn-section-title" style="color:#2ecc71">Fuerte contra (x2)</div>
          <div class="badge-list">${(par.strongAgainst || []).map(makeBadge).join('')}</div>
        </div>`;
        if (weakRest.length) {
          html += `<div class="syn-section">
            <div class="syn-section-title" style="color:#e74c3c">Débil contra (x2)</div>
            <div class="badge-list">${weakRest.map(makeBadge).join('')}</div>
          </div>`;
        }
        if (crits.length) {
          html += `<div class="compat-critical-box">
            <div class="compat-critical-label">${svgWarning} PUNTO CIEGO CRÍTICO (×4)</div>
            <div class="badge-list">${crits.map(makeBadge).join('')}</div>
          </div>`;
        }
      } else if (grupo.tipo === 'conflictiva') {
        html += `<div class="compat-conflict-note">${par.nota}</div>`;
      }

      html += `</div>`; // close syn-card
    });

    html += `</div></div>`; // close syn-cards-row + syn-group
  });

  container.innerHTML = html;
}

// ──────────────────────────────────────────────
// INIT
// ──────────────────────────────────────────────
window.onload = () => {
  initMobileLegend();
  initChart();
  initMatrix();
  initCalculator();
  initCards();

  initCompatChart();
  initCompatMatrix();
  initCompatVersus();
  initCompatCards();
};
