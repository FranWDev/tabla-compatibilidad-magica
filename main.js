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
  { id: 'agua',      label: 'Agua',      icon: icons.agua,      color: '#3498db', strongAgainst: ['fuego', 'ender'],                                                                   weakAgainst: ['naturaleza', 'electrico', 'eldritch'] },
  { id: 'fuego',     label: 'Fuego',     icon: icons.fuego,     color: '#d35400', strongAgainst: ['naturaleza', 'hielo'],                                                              weakAgainst: ['agua', 'sangre', 'eldritch'] },
  { id: 'naturaleza',label: 'Naturaleza',icon: icons.naturaleza,color: '#2ecc71', strongAgainst: ['agua', 'electrico'],                                                                weakAgainst: ['fuego', 'hielo', 'eldritch'] },
  { id: 'hielo',     label: 'Hielo',     icon: icons.hielo,     color: '#00ffff', strongAgainst: ['naturaleza', 'sangre'],                                                             weakAgainst: ['fuego', 'sagrado', 'eldritch'] },
  { id: 'electrico', label: 'Eléctrico', icon: icons.electrico, color: '#f39c12', strongAgainst: ['agua', 'invocador'],                                                                weakAgainst: ['naturaleza', 'ender', 'eldritch'] },
  { id: 'sagrado',   label: 'Sagrado',   icon: icons.sagrado,   color: '#f1c40f', strongAgainst: ['hielo', 'sangre'],                                                                  weakAgainst: ['invocador', 'ender', 'eldritch'] },
  { id: 'sangre',    label: 'Sangre',    icon: icons.sangre,    color: '#e74c3c', strongAgainst: ['fuego', 'invocador'],                                                               weakAgainst: ['hielo', 'sagrado', 'eldritch'] },
  { id: 'invocador', label: 'Invocador', icon: icons.invocador, color: '#95a5a6', strongAgainst: ['sagrado', 'ender'],                                                                 weakAgainst: ['electrico', 'sangre', 'eldritch'] },
  { id: 'ender',     label: 'Ender',     icon: icons.ender,     color: '#9b59b6', strongAgainst: ['electrico', 'sagrado'],                                                             weakAgainst: ['agua', 'invocador', 'eldritch'] },
  { id: 'eldritch',  label: 'Eldritch',  icon: icons.eldritch,  color: '#b533ff', strongAgainst: ['agua', 'fuego', 'naturaleza', 'hielo', 'electrico', 'sagrado', 'sangre', 'invocador', 'ender', 'eldritch'], weakAgainst: ['eldritch'] }
];

function switchView(viewId, btnElement) {
  document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.view-container').forEach(view => view.classList.remove('active'));
  btnElement.classList.add('active');
  document.getElementById('view-' + viewId).classList.add('active');
}

function initMobileLegend() {
  const container = document.getElementById('mobile-legend');
  let html = '';
  elements.forEach(el => {
    html += `<div class="legend-pill" style="border-color: ${el.color};"><span style="color:${el.color}">${el.icon}</span> ${el.label}</div>`;
  });
  container.innerHTML = html;
}

function initChart() {
  const container = document.getElementById("chart");
  const svgLayer = document.getElementById("lines-layer");
  const elementNodes = {};

  const centerX = 50, centerY = 50, radius = 40;

  const circleElements = elements.filter(el => el.id !== 'eldritch');
  const angleStep = (2 * Math.PI) / circleElements.length;

  circleElements.forEach((el, index) => {
    const angle = index * angleStep - Math.PI / 2;
    el.x = centerX + radius * Math.cos(angle);
    el.y = centerY + radius * Math.sin(angle);
  });

  const eldritchEl = elements.find(el => el.id === 'eldritch');
  if (eldritchEl) { eldritchEl.x = centerX; eldritchEl.y = centerY; }

  elements.forEach((source) => {
    source.strongAgainst.forEach((targetId) => {
      const target = elements.find((e) => e.id === targetId);
      if (target && target.id !== source.id) {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const sx = source.x * 10, sy = source.y * 10;
        const tx = target.x * 10, ty = target.y * 10;
        const cx = 500, cy = 500;

        const d = `M ${sx} ${sy} Q ${cx} ${cy} ${tx} ${ty}`;
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

    node.addEventListener("mouseenter", () => highlightRelations(el.id, elementNodes));
    node.addEventListener("mouseleave", resetHighlight);

    container.appendChild(node);
    elementNodes[el.id] = node;
  });
}

function highlightRelations(activeId, elementNodes) {
  const paths = document.querySelectorAll("path.line");
  const nodes = document.querySelectorAll(".node");

  paths.forEach((p) => {
    if (p.dataset.isEldritch === 'true') { p.style.opacity = "0"; }
    else { p.style.opacity = "0.05"; }
  });
  nodes.forEach((n) => (n.style.opacity = "0.3"));

  elementNodes[activeId].style.opacity = "1";
  elementNodes[activeId].style.transform = activeId !== 'eldritch' ? "translate(-50%, -50%) scale(1.2)" : "translate(-50%, -50%) scale(1.35)";

  paths.forEach((p) => {
    if (p.dataset.source === activeId) {
      p.style.opacity = "1"; p.style.strokeWidth = "5"; p.style.strokeDasharray = "none";
      elementNodes[p.dataset.target].style.opacity = "1";
    }
    if (p.dataset.target === activeId) {
      if (p.dataset.source === 'eldritch') return;
      p.style.opacity = "0.8"; p.style.strokeWidth = "4"; p.style.strokeDasharray = "10,10";
      elementNodes[p.dataset.source].style.opacity = "1";
    }
  });
}

function resetHighlight() {
  document.querySelectorAll("path.line").forEach(p => {
    if (p.dataset.isEldritch === 'true') { p.style.opacity = "0"; p.style.strokeWidth = "4"; }
    else { p.style.opacity = "0.15"; p.style.strokeWidth = "2"; }
    p.style.strokeDasharray = "none";
  });
  document.querySelectorAll(".node").forEach(n => {
    n.style.opacity = "1";
    n.style.transform = n.dataset.id !== 'eldritch' ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -50%) scale(1.15)";
  });
}

function initMatrix() {
  const table = document.getElementById('matrix-table');
  let html = '<tr><th>ATACA \\ DEFIENDE</th>';

  elements.forEach(el => { html += `<th style="color: ${el.color}"><span class="matrix-icon">${el.icon}</span>${el.label}</th>`; });
  html += '</tr>';

  elements.forEach(attacker => {
    html += `<tr>`;
    html += `<th class="row-header" style="color: ${attacker.color}"><span class="matrix-icon">${attacker.icon}</span> ${attacker.label}</th>`;

    elements.forEach(defender => {
      if (attacker.strongAgainst.includes(defender.id))      { html += `<td class="mult-2x">2x</td>`; }
      else if (attacker.weakAgainst.includes(defender.id))   { html += `<td class="mult-half">½</td>`; }
      else if (attacker.id === defender.id)                   { html += `<td class="mult-neutral">-</td>`; }
      else                                                    { html += `<td class="mult-neutral">1x</td>`; }
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
      box.style.borderColor = "#2ecc71"; box.style.color = "#2ecc71"; box.style.boxShadow = "0 0 20px rgba(46, 204, 113, 0.2)";
      num.innerText = "2x"; txt.innerText = "Súper Efectivo";
    } else if (att.weakAgainst.includes(defId)) {
      box.style.borderColor = "#e74c3c"; box.style.color = "#e74c3c"; box.style.boxShadow = "0 0 20px rgba(231, 76, 60, 0.2)";
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
  let html = '';
  const createBadge = (id) => {
    const el = elements.find(e => e.id === id);
    return `<div class="type-badge" style="background-color: ${el.color};">${el.icon} ${el.label}</div>`;
  };

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

window.onload = () => {
  initMobileLegend();
  initChart();
  initMatrix();
  initCalculator();
  initCards();
};
