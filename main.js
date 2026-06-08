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
  eldritch: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12,2L14.8,8.2L21,11L14.8,13.8L12,20L9.2,13.8L3,11L9.2,8.2L12,2M12,8.5A2.5,2.5 0 0,0 9.5,11A2.5,2.5 0 0,0 12,13.5A2.5,2.5 0 0,0 14.5,11A2.5,2.5 0 0,0 12,8.5Z" /></svg>`,
  tierra: `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" /></svg>`,
};

const corruptChars = "§kЖΩΣψλθΦΔΞ";
const getCorruptHtml = () => `<div class="corrupt-container"><div class="corrupt-text"><div class="corrupt-text-inner">${corruptChars.split("").map((c) => `<span>${c}</span>`).join("")}</div></div></div>`;

const elements = [
  {
    id: "agua",
    label: "Agua",
    icon: icons.agua,
    color: "#3498db",
    strongAgainst: ["fuego", "ender", "tierra"],
    weakAgainst: ["naturaleza", "electrico", "eldritch"],
  },
  {
    id: "fuego",
    label: "Fuego",
    icon: icons.fuego,
    color: "#d35400",
    strongAgainst: ["naturaleza", "hielo"],
    weakAgainst: ["agua", "sangre", "tierra", "eldritch"],
  },
  {
    id: "naturaleza",
    label: "Naturaleza",
    icon: icons.naturaleza,
    color: "#2ecc71",
    strongAgainst: ["agua", "electrico", "tierra"],
    weakAgainst: ["fuego", "hielo", "eldritch"],
  },
  {
    id: "tierra",
    label: "Tierra",
    icon: icons.tierra,
    color: "#a67c52",
    strongAgainst: ["electrico", "fuego"],
    weakAgainst: ["agua", "naturaleza", "eldritch"],
  },
  {
    id: "hielo",
    label: "Hielo",
    icon: icons.hielo,
    color: "#00ffff",
    strongAgainst: ["naturaleza", "sangre"],
    weakAgainst: ["fuego", "sagrado", "eldritch"],
  },
  {
    id: "electrico",
    label: "Eléctrico",
    icon: icons.electrico,
    color: "#f39c12",
    strongAgainst: ["agua", "invocador"],
    weakAgainst: ["naturaleza", "ender", "tierra", "eldritch"],
  },
  {
    id: "sagrado",
    label: "Sagrado",
    icon: icons.sagrado,
    color: "#f1c40f",
    strongAgainst: ["hielo", "sangre"],
    weakAgainst: ["invocador", "ender", "eldritch"],
  },
  {
    id: "sangre",
    label: "Sangre",
    icon: icons.sangre,
    color: "#e74c3c",
    strongAgainst: ["fuego", "invocador"],
    weakAgainst: ["hielo", "sagrado", "eldritch"],
  },
  {
    id: "invocador",
    label: "Invocador",
    icon: icons.invocador,
    color: "#95a5a6",
    strongAgainst: ["sagrado", "ender"],
    weakAgainst: ["electrico", "sangre", "eldritch"],
  },
  {
    id: "ender",
    label: "Ender",
    icon: icons.ender,
    color: "#9b59b6",
    strongAgainst: ["electrico", "sagrado"],
    weakAgainst: ["agua", "invocador", "eldritch"],
  },
  {
    id: "eldritch",
    label: "Eldritch",
    icon: icons.eldritch,
    color: "#b533ff",
    strongAgainst: [
      "agua",
      "fuego",
      "naturaleza",
      "hielo",
      "electrico",
      "sagrado",
      "sangre",
      "invocador",
      "ender",
      "tierra",
      "eldritch",
    ],
    weakAgainst: ["eldritch"],
  },
];

const svgShield = `<svg viewBox="0 0 24 24" width="1em" height="1em"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`;

const svgPrism = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="svg-prism"><path fill="currentColor" d="M12 2L4 12L12 22L20 12L12 2Z" opacity="0.9"/><path fill="rgba(255,255,255,0.3)" d="M12 2L12 22L20 12Z"/><path fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="0.5" d="M12 2L12 22M4 12L20 12"/></svg>`;

const svgPrismBroken = `
<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="svg-prism-broken">
  <g class="prism-main">
    <path fill="currentColor" d="M12 2L7 8L12 12V2Z"></path>
    <path fill="currentColor" d="M12 22L17 16L12 12V22Z" opacity="0.8"></path>
    <path fill="currentColor" d="M4 12L12 12L8 10Z" opacity="0.6"></path>
  </g>
  <path class="frag f1" fill="currentColor" d="M3 10L6 9L5 11Z" opacity="0.7"></path>
  <path class="frag f2" fill="currentColor" d="M21 11L18 13L19 10Z" opacity="0.7"></path>
  <path class="frag f3" fill="currentColor" d="M11 3L13 5L10 4Z" opacity="0.5"></path>
  <path class="frag f4" fill="currentColor" d="M13 21L11 19L14 20Z" opacity="0.5"></path>
  <path class="frag f5" fill="currentColor" d="M12 11L15 9L16 12Z" opacity="0.9"></path>
  <path class="frag f1" fill="currentColor" d="M5 15L7 14L6 16Z" opacity="0.4"></path>
</svg>`;

const compatGrupos = {
  equilibrada: {
    tipo: "equilibrada",
    label: "Sinergias Equilibradas",
    color: "#2ecc71",
    icon: svgShield,
    descripcion:
      "Sin debilidades críticas (x4). Cobertura amplia con debilidades repartidas entre múltiples tipos.",
  },
  polarizada: {
    tipo: "polarizada",
    label: "Sinergias Polarizadas",
    color: "#f39c12",
    icon: svgPrism,
    descripcion:
      "Viable pero con un Punto Ciego Crítico (x4): ambas clases comparten una vulnerabilidad externa.",
  },
  conflictiva: {
    tipo: "conflictiva",
    label: "Sinergias Inestables",
    color: "#e74c3c",
    icon: svgPrismBroken,
    descripcion:
      "Riesgo máximo: uno de tus elementos domina al otro. Recibes ×4 de daño del elemento dominante.",
  },
};

const conflictNotas = {
  "agua|fuego": "Agua apaga Fuego.",
  "agua|naturaleza": "Naturaleza absorbe Agua.",
  "agua|electrico": "Eléctrico electrifica Agua.",
  "agua|ender": "Agua daña a Ender.",
  "fuego|naturaleza": "Fuego quema Naturaleza.",
  "fuego|hielo": "Fuego derrite Hielo.",
  "fuego|sangre": "Sangre sofoca Fuego.",
  "hielo|naturaleza": "Hielo marchita Naturaleza.",
  "electrico|naturaleza": "Naturaleza aísla Eléctrico.",
  "hielo|sagrado": "Sagrado quiebra Hielo.",
  "hielo|sangre": "Hielo congela Sangre.",
  "electrico|invocador": "Eléctrico fulmina a Invocador.",
  "electrico|ender": "Ender esquiva Eléctrico.",
  "sagrado|sangre": "Sagrado purifica Sangre.",
  "invocador|sagrado": "Invocador abruma Sagrado.",
  "ender|sagrado": "Ender consume Sagrado.",
  "invocador|sangre": "Sangre corrompe Invocador.",
  "ender|invocador": "Invocador acorrala a Ender.",
  "electrico|tierra": "Tierra aísla Eléctrico.",
  "fuego|tierra": "Tierra sofoca Fuego.",
  "agua|tierra": "Agua erosiona Tierra.",
  "naturaleza|tierra": "Naturaleza enraíza en Tierra.",
};

function buildCompatData(elementList) {
  const paresMap = { equilibrada: [], polarizada: [], conflictiva: [] };
  const lookup = {};

  for (let i = 0; i < elementList.length; i++) {
    for (let j = i + 1; j < elementList.length; j++) {
      const elA = elementList[i];
      const elB = elementList[j];

      const strongA = elA.strongAgainst || [];
      const strongB = elB.strongAgainst || [];
      const weakA = (elA.weakAgainst || []).filter((id) => id !== "eldritch");
      const weakB = (elB.weakAgainst || []).filter((id) => id !== "eldritch");

      const aBeatsB = strongA.includes(elB.id);
      const bBeatsA = strongB.includes(elA.id);

      if (aBeatsB || bBeatsA) {
        const noteKey = [elA.id, elB.id].sort().join("|");
        const nota =
          conflictNotas[noteKey] ||
          (aBeatsB && bBeatsA
            ? `${elA.label} y ${elB.label} se dominan mutuamente.`
            : aBeatsB
              ? `${elA.label} domina directamente a ${elB.label}.`
              : `${elB.label} domina directamente a ${elA.label}.`);

        const criticalWeakness = aBeatsB ? elA.id : elB.id;

        const allStrongI = [...new Set([...strongA, ...strongB])].filter(
          (id) => id !== elA.id && id !== elB.id,
        );

        const weakAI = weakA.filter((id) => id !== criticalWeakness);
        const weakBI = weakB.filter((id) => id !== criticalWeakness);
        const sharedExt = weakAI.filter((id) => weakBI.includes(id));

        const allWeakI = [...new Set([...weakA, ...weakB])].filter(
          (id) => id !== criticalWeakness,
        );
        const weakRestI = allWeakI.filter((id) => !sharedExt.includes(id));

        const par = {
          ids: [elA.id, elB.id],
          nota,
          criticalWeakness,
          criticalWeaknesses: sharedExt,
          strongAgainst: allStrongI,
          weakAgainst: weakRestI,
        };
        paresMap.conflictiva.push(par);
        const entry = { ...par, ...compatGrupos.conflictiva };
        lookup[`${elA.id}|${elB.id}`] = entry;
        lookup[`${elB.id}|${elA.id}`] = entry;
        continue;
      }

      const allStrong = [...new Set([...strongA, ...strongB])].filter(
        (id) => id !== elA.id && id !== elB.id,
      );
      const allWeak = [...new Set([...weakA, ...weakB])];

      const shared = weakA.filter((id) => weakB.includes(id));

      if (shared.length > 0) {
        const weakRest = allWeak.filter((id) => !shared.includes(id));
        const par = {
          ids: [elA.id, elB.id],
          strongAgainst: allStrong,
          criticalWeaknesses: shared,
          weakAgainst: weakRest,
        };
        paresMap.polarizada.push(par);
        const entry = { ...par, ...compatGrupos.polarizada };
        lookup[`${elA.id}|${elB.id}`] = entry;
        lookup[`${elB.id}|${elA.id}`] = entry;
        continue;
      }

      const par = {
        ids: [elA.id, elB.id],
        strongAgainst: allStrong,
        weakAgainst: allWeak,
      };
      paresMap.equilibrada.push(par);
      const entry = { ...par, ...compatGrupos.equilibrada };
      lookup[`${elA.id}|${elB.id}`] = entry;
      lookup[`${elB.id}|${elA.id}`] = entry;
    }
  }

  const compatibilidades = [
    { ...compatGrupos.equilibrada, pares: paresMap.equilibrada },
    { ...compatGrupos.polarizada, pares: paresMap.polarizada },
    { ...compatGrupos.conflictiva, pares: paresMap.conflictiva },
  ];
  return { compatibilidades, compatLookup: lookup };
}

const compatOnlyElements = elements.filter((el) => el.id !== "eldritch");
const { compatibilidades, compatLookup } = buildCompatData(compatOnlyElements);

function switchView(viewId, btnElement, controlsId, viewsId) {
  document
    .getElementById(controlsId)
    .querySelectorAll(".toggle-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .getElementById(viewsId)
    .querySelectorAll(".view-container")
    .forEach((view) => view.classList.remove("active"));
  btnElement.classList.add("active");
  document.getElementById("view-" + viewId).classList.add("active");
}

function switchSection(sectionId) {
  document
    .querySelectorAll(".main-section")
    .forEach((s) => s.classList.remove("active-section"));

  document
    .querySelectorAll(".section-tab")
    .forEach((b) => b.classList.remove("active"));

  document
    .getElementById("section-" + sectionId)
    .classList.add("active-section");
  document.getElementById("sec-btn-" + sectionId).classList.add("active");
}

function initMobileLegend() {
  const containers = [
    document.getElementById("mobile-legend"),
    document.getElementById("mobile-legend-compat"),
  ];
  let html = "";
  elements.forEach((el) => {
    html += `<div class="legend-pill" style="border-color: ${el.color};"><span style="color:${el.color}">${el.icon}</span> ${el.label}</div>`;
  });
  containers.forEach((c) => {
    if (c) c.innerHTML = html;
  });
}

function placeElementsOnCircle(els, centerX, centerY, radius) {
  const circle = els.filter((el) => el.id !== "eldritch");
  const angleStep = (2 * Math.PI) / circle.length;
  circle.forEach((el, i) => {
    const angle = i * angleStep - Math.PI / 2;
    el.x = centerX + radius * Math.cos(angle);
    el.y = centerY + radius * Math.sin(angle);
  });
  const eldritch = els.find((el) => el.id === "eldritch");
  if (eldritch) {
    eldritch.x = centerX;
    eldritch.y = centerY;
  }
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
        const path = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path",
        );
        const d = `M ${source.x * 10} ${source.y * 10} Q 500 500 ${target.x * 10} ${target.y * 10}`;
        path.setAttribute("d", d);
        path.setAttribute("stroke", source.color);
        path.classList.add("line");
        path.dataset.source = source.id;
        path.dataset.target = target.id;
        if (source.id === "eldritch") {
          path.dataset.isEldritch = "true";
          path.style.opacity = "0";
          path.style.strokeWidth = "4";
        } else {
          path.style.opacity = "0.15";
          path.style.strokeWidth = "2";
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
    node.addEventListener("mouseenter", () =>
      highlightRelations(el.id, elementNodes, "#lines-layer", ".node"),
    );
    node.addEventListener("mouseleave", () =>
      resetHighlight("#lines-layer", ".node"),
    );
    container.appendChild(node);
    elementNodes[el.id] = node;
  });
}

function highlightRelations(activeId, elementNodes, svgId, nodeSelector) {
  const paths = document.querySelectorAll(`${svgId} path.line`);
  const nodes = document.querySelectorAll(nodeSelector);

  paths.forEach((p) => {
    p.style.opacity = p.dataset.isEldritch === "true" ? "0" : "0.05";
  });
  nodes.forEach((n) => (n.style.opacity = "0.3"));

  elementNodes[activeId].style.opacity = "1";
  elementNodes[activeId].style.transform =
    activeId !== "eldritch"
      ? "translate(-50%, -50%) scale(1.2)"
      : "translate(-50%, -50%) scale(1.35)";

  paths.forEach((p) => {
    if (p.dataset.source === activeId) {
      p.style.opacity = "1";
      p.style.strokeWidth = "5";
      if (p.dataset.isEldritch === "true") {
        p.style.strokeDasharray = "2,5,10,3";
      } else {
        p.style.strokeDasharray = "none";
      }
      if (elementNodes[p.dataset.target])
        elementNodes[p.dataset.target].style.opacity = "1";
    }
    if (p.dataset.target === activeId) {
      if (p.dataset.source === "eldritch") return;
      p.style.opacity = "0.8";
      p.style.strokeWidth = "4";
      p.style.strokeDasharray = "10,10";
      if (elementNodes[p.dataset.source])
        elementNodes[p.dataset.source].style.opacity = "1";
    }
  });
}

function resetHighlight(svgId, nodeSelector) {
  document.querySelectorAll(`${svgId} path.line`).forEach((p) => {
    if (p.dataset.isEldritch === "true") {
      p.style.opacity = "0";
      p.style.strokeWidth = "4";
      p.style.strokeDasharray = "2,5,10,3";
    } else {
      p.style.opacity = "0.15";
      p.style.strokeWidth = "2";
      p.style.strokeDasharray = "none";
    }
  });
  document.querySelectorAll(nodeSelector).forEach((n) => {
    n.style.opacity = "1";
    n.style.transform =
      n.dataset.id !== "eldritch"
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -50%) scale(1.15)";
  });
}

function initMatrix() {
  const table = document.getElementById("matrix-table");
  let html = "<tr><th>ATACA \\ DEFIENDE</th>";
  elements.forEach((el) => {
    html += `<th style="color: ${el.color}"><span class="matrix-icon">${el.icon}</span>${el.label}</th>`;
  });
  html += "</tr>";

  const eldritchEl = elements.find((e) => e.id === "eldritch");

  elements.forEach((attacker) => {
    html += `<tr><th class="row-header" style="color: ${attacker.color}"><span class="matrix-icon">${attacker.icon}</span> ${attacker.label}</th>`;
    elements.forEach((defender) => {
      const isEldritch = attacker.id === "eldritch" || defender.id === "eldritch";

      if (isEldritch) {
        html += `<td class="mult-eldritch">${getCorruptHtml()}</td>`;
      } else if (attacker.strongAgainst.includes(defender.id)) {
        html += `<td class="mult-2x">1.5x</td>`;
      } else if (attacker.weakAgainst.includes(defender.id)) {
        html += `<td class="mult-half">½</td>`;
      } else if (attacker.id === defender.id) {
        html += `<td class="mult-neutral">-</td>`;
      } else {
        html += `<td class="mult-neutral">1x</td>`;
      }
    });
    html += `</tr>`;
  });
  table.innerHTML = html;
}

function initCalculator() {
  const attSelect = document.getElementById("calc-attacker");
  const defSelect = document.getElementById("calc-defender");
  let optionsHtml = "";
  elements.forEach((el) => {
    optionsHtml += `<option value="${el.id}">${el.label}</option>`;
  });
  attSelect.innerHTML = optionsHtml;
  defSelect.innerHTML = optionsHtml;
  defSelect.selectedIndex = 1;

  const calculate = () => {
    const att = elements.find((e) => e.id === attSelect.value);
    const defId = defSelect.value;
    const box = document.getElementById("calc-result");
    const num = document.getElementById("calc-num");
    const txt = document.getElementById("calc-txt");
    const isEldritch = att.id === "eldritch" || defId === "eldritch";

    box.classList.remove("mult-eldritch");

    if (isEldritch) {
      box.classList.add("mult-eldritch");
      box.style.borderColor = "#b533ff";
      box.style.color = "#b533ff";
      box.style.boxShadow = "0 0 20px rgba(181, 51, 255, 0.2)";
      num.innerHTML = getCorruptHtml();
      txt.innerText = "";
    } else if (att.strongAgainst.includes(defId)) {
      box.style.borderColor = "#2ecc71";
      box.style.color = "#2ecc71";
      box.style.boxShadow = "0 0 20px rgba(46,204,113,0.2)";
      num.innerText = "1.5x";
      txt.innerText = "Súper Efectivo";
    } else if (att.weakAgainst.includes(defId)) {
      box.style.borderColor = "#e74c3c";
      box.style.color = "#e74c3c";
      box.style.boxShadow = "0 0 20px rgba(231,76,60,0.2)";
      num.innerText = "½";
      txt.innerText = "Poco Efectivo";
    } else if (att.id === defId) {
      box.style.borderColor = "#555";
      box.style.color = "#888";
      box.style.boxShadow = "none";
      num.innerText = "-";
      txt.innerText = "Mismo Tipo / Sin Efecto";
    } else {
      box.style.borderColor = "#555";
      box.style.color = "#fff";
      box.style.boxShadow = "none";
      num.innerText = "1x";
      txt.innerText = "Daño Neutro";
    }
  };
  attSelect.addEventListener("change", calculate);
  defSelect.addEventListener("change", calculate);
  calculate();
}

function initCards() {
  const container = document.getElementById("cards-wrapper");
  const createBadge = (id) => {
    const el = elements.find((e) => e.id === id);
    return `<div class="type-badge" style="background-color: ${el.color};">${el.icon} ${el.label}</div>`;
  };
  const createCorruptBadge = () =>
    `<div class="corrupt-badge">${getCorruptHtml()}</div>`;

  let html = "";
  elements.forEach((el) => {
    const isEldritch = el.id === "eldritch";

    const strongAgainst = isEldritch
      ? ["corrupt"]
      : el.strongAgainst.filter((id) => id !== "eldritch");
    const weakAgainst = isEldritch
      ? ["corrupt"]
      : el.weakAgainst.filter((id) => id !== "eldritch");

    const renderBadges = (list) => {
      if (!list.length) return `<div class="mult-neutral">-</div>`;
      return list
        .map((id) => (id === "corrupt" ? createCorruptBadge() : createBadge(id)))
        .join("");
    };

    html += `
      <div class="type-card" style="border-top-color: ${el.color}">
        <div class="card-header" style="color: ${el.color}">${el.icon} ${el.label}</div>
        <div class="card-section"><div class="card-section-title" style="${isEldritch ? "color:#b533ff;" : ""}">Hace daño incrementado (1.5x):</div>
          <div class="badge-list">${renderBadges(strongAgainst)}</div>
        </div>
        <div class="card-section" style="margin-top: 15px;"><div class="card-section-title" style="${isEldritch ? "color:#b533ff;" : ""}">Recibe daño incrementado (1.5x):</div>
          <div class="badge-list">${renderBadges(weakAgainst)}</div>
        </div>
      </div>`;
  });
  container.innerHTML = html;
}

const compatElements = compatOnlyElements.map((el) => ({ ...el }));

function initCompatChart() {
  placeElementsOnCircle(compatElements, 50, 50, 40);

  const container = document.getElementById("compat-chart");
  const svgLayer = document.getElementById("compat-lines-layer");
  const nodeMap = {};

  compatibilidades.forEach((grupo) => {
    grupo.pares.forEach((par) => {
      const [idA, idB] = par.ids;
      const elA = compatElements.find((e) => e.id === idA);
      const elB = compatElements.find((e) => e.id === idB);
      if (!elA || !elB) return;

      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      const d = `M ${elA.x * 10} ${elA.y * 10} Q 500 500 ${elB.x * 10} ${elB.y * 10}`;
      path.setAttribute("d", d);
      path.setAttribute("stroke", grupo.color);
      path.classList.add("line");
      path.dataset.source = idA;
      path.dataset.target = idB;
      path.dataset.synergy = grupo.tipo;
      path.style.opacity = "0.2";
      path.style.strokeWidth = "2";

      if (grupo.tipo === "conflictiva") {
        path.style.strokeDasharray = "8,6";
      } else if (grupo.tipo === "polarizada") {
        path.style.strokeDasharray = "4,4";
      }
      svgLayer.appendChild(path);
    });
  });

  compatElements.forEach((el) => {
    const node = document.createElement("div");
    node.className = "node";
    node.dataset.id = el.id;
    node.style.left = el.x + "%";
    node.style.top = el.y + "%";
    node.style.borderColor = el.color;
    node.style.color = el.color;
    node.innerHTML = `<div class="node-icon">${el.icon}</div><div class="node-label">${el.label}</div>`;

    node.addEventListener("mouseenter", () =>
      highlightCompatRelations(el.id, nodeMap),
    );
    node.addEventListener("mouseleave", resetCompatHighlight);

    container.appendChild(node);
    nodeMap[el.id] = node;
  });
}

function highlightCompatRelations(activeId, nodeMap) {
  const paths = document.querySelectorAll("#compat-lines-layer path.line");
  const nodes = document.querySelectorAll("#compat-chart .node");

  paths.forEach((p) => {
    p.style.opacity = "0.03";
  });
  nodes.forEach((n) => {
    n.style.opacity = "0.25";
  });

  nodeMap[activeId].style.opacity = "1";
  nodeMap[activeId].style.transform = "translate(-50%,-50%) scale(1.2)";

  paths.forEach((p) => {
    if (p.dataset.source === activeId || p.dataset.target === activeId) {
      p.style.opacity = "1";
      p.style.strokeWidth = "5";
      const otherId =
        p.dataset.source === activeId ? p.dataset.target : p.dataset.source;
      if (nodeMap[otherId]) nodeMap[otherId].style.opacity = "1";
    }
  });
}

function resetCompatHighlight() {
  document.querySelectorAll("#compat-lines-layer path.line").forEach((p) => {
    p.style.opacity = "0.2";
    p.style.strokeWidth = "2";
  });
  document.querySelectorAll("#compat-chart .node").forEach((n) => {
    n.style.opacity = "1";
    n.style.transform = "translate(-50%,-50%) scale(1)";
  });
}

function initCompatMatrix() {
  const table = document.getElementById("compat-matrix-table");

  const synergyCell = (entry) => {
    if (!entry) return `<td class="mult-neutral" style="color:#2a2a2a;">·</td>`;
    const svgMap = {
      equilibrada: svgShield,
      polarizada: svgPrism,
      conflictiva: svgPrismBroken,
    };
    return `<td class="compat-cell compat-cell-${entry.tipo}" title="${entry.label}: ${entry.ids.join(" + ")}">
      <span class="compat-cell-svg" style="color:${entry.color}">${svgMap[entry.tipo]}</span></td>`;
  };

  let html = "<tr><th>A / B</th>";
  compatOnlyElements.forEach((el) => {
    html += `<th style="color:${el.color}"><span class="matrix-icon">${el.icon}</span>${el.label}</th>`;
  });
  html += "</tr>";

  compatOnlyElements.forEach((elA) => {
    html += `<tr><th class="row-header" style="color:${elA.color}"><span class="matrix-icon">${elA.icon}</span> ${elA.label}</th>`;
    compatOnlyElements.forEach((elB) => {
      if (elA.id === elB.id) {
        html += `<td class="mult-neutral" style="color:#2a2a2a;">—</td>`;
      } else {
        html += synergyCell(compatLookup[`${elA.id}|${elB.id}`]);
      }
    });
    html += `</tr>`;
  });
  table.innerHTML = html;
}

function initCompatVersus() {
  const selA = document.getElementById("compat-select-a");
  const selB = document.getElementById("compat-select-b");
  let optionsHtml = "";
  compatOnlyElements.forEach((el) => {
    optionsHtml += `<option value="${el.id}">${el.label}</option>`;
  });
  selA.innerHTML = optionsHtml;
  selB.innerHTML = optionsHtml;
  selB.selectedIndex = 1;

  const makeBadge = (id) => {
    const el = elements.find((e) => e.id === id);
    return `<div class="type-badge" style="background:${el.color}">${el.icon} ${el.label}</div>`;
  };

  const calculate = () => {
    const idA = selA.value;
    const idB = selB.value;
    const box = document.getElementById("compat-result");
    const iconEl = document.getElementById("compat-result-icon");
    const title = document.getElementById("compat-result-title");
    const desc = document.getElementById("compat-result-desc");

    if (idA === idB) {
      box.style.borderColor = "#555";
      box.style.color = "#888";
      box.style.boxShadow = "none";
      iconEl.innerHTML = "—";
      title.innerText = "Mismo tipo";
      desc.innerHTML = "<em>Selecciona dos tipos distintos.</em>";
      return;
    }
    const entry = compatLookup[`${idA}|${idB}`];
    if (!entry) {
      box.style.borderColor = "#555";
      box.style.color = "#aaa";
      box.style.boxShadow = "none";
      iconEl.innerHTML = "·";
      title.innerText = "Sin sinergia registrada";
      desc.innerHTML = "<em>Esta combinación no tiene datos de sinergia.</em>";
      return;
    }
    box.style.borderColor = entry.color;
    box.style.color = entry.color;
    box.style.boxShadow = `0 0 20px ${entry.color}44`;

    box.style.animation = "none";
    box.offsetWidth;
    box.style.animation = null;

    const animClass =
      entry.tipo === "equilibrada"
        ? "anim-stable"
        : entry.tipo === "polarizada"
          ? "anim-polarized"
          : "anim-unstable";

    iconEl.innerHTML = `<div class="icon-anim-wrapper ${animClass}">${entry.icon}</div>`;
    const wrapper = iconEl.querySelector(".icon-anim-wrapper");
    wrapper.style.animation = "none";
    wrapper.offsetWidth;
    wrapper.style.animation = null;

    title.innerText = entry.label;

    let detailHtml = `<p class="compat-result-subdesc">${entry.descripcion}</p>`;

    if (entry.tipo === "equilibrada") {
      detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#2ecc71">Fuerte contra (1.5x)</div><div class="badge-list">${entry.strongAgainst.map(makeBadge).join("")}</div></div>`;
      detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#e74c3c">Débil contra (1.5x)</div><div class="badge-list">${entry.weakAgainst.map(makeBadge).join("")}</div></div>`;
    } else if (entry.tipo === "polarizada") {
      detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#2ecc71">Fuerte contra (1.5x)</div><div class="badge-list">${entry.strongAgainst.map(makeBadge).join("")}</div></div>`;
      const weakRest = entry.weakAgainst || [];
      if (weakRest.length) {
        detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#e74c3c">Débil contra (1.5x)</div><div class="badge-list">${weakRest.map(makeBadge).join("")}</div></div>`;
      }
      const crits = entry.criticalWeaknesses || [];
      if (crits.length) {
        detailHtml += `<div class="compat-critical-box"><div class="compat-critical-label">${svgPrism} PUNTO CIEGO CRÍTICO (×4)</div><div class="badge-list">${crits.map(makeBadge).join("")}</div></div>`;
      }
    } else if (entry.tipo === "conflictiva") {
      if ((entry.strongAgainst || []).length) {
        detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#2ecc71">Fuerte contra (1.5x)</div><div class="badge-list">${entry.strongAgainst.map(makeBadge).join("")}</div></div>`;
      }

      if ((entry.weakAgainst || []).length) {
        detailHtml += `<div class="compat-versus-section"><div class="compat-versus-label" style="color:#e74c3c">Débil contra (1.5x)</div><div class="badge-list">${entry.weakAgainst.map(makeBadge).join("")}</div></div>`;
      }

      const extCrits = entry.criticalWeaknesses || [];
      if (extCrits.length) {
        detailHtml += `<div class="compat-critical-box"><div class="compat-critical-label">${svgPrism} PUNTO CIEGO CRÍTICO (×4)</div><div class="badge-list">${extCrits.map(makeBadge).join("")}</div></div>`;
      }

      if (entry.criticalWeakness) {
        detailHtml += `<div class="compat-critical-box compat-risk-box"><div class="compat-critical-label compat-risk-label">${svgPrismBroken} RIESGO CRÍTICO (×4)</div><div class="badge-list">${makeBadge(entry.criticalWeakness)}</div></div>`;
      }

      detailHtml += `<div class="compat-conflict-note">${entry.nota}</div>`;
    }

    desc.innerHTML = detailHtml;
  };

  selA.addEventListener("change", calculate);
  selB.addEventListener("change", calculate);
  calculate();
}

function initCompatCards() {
  const container = document.getElementById("compat-cards-wrapper");
  const makeBadge = (id) => {
    const el = elements.find((e) => e.id === id);
    return `<div class="type-badge" style="background:${el.color}">${el.icon} ${el.label}</div>`;
  };

  let html = "";
  compatibilidades.forEach((grupo) => {
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

    grupo.pares.forEach((par) => {
      const [idA, idB] = par.ids;
      const elA = elements.find((e) => e.id === idA);
      const elB = elements.find((e) => e.id === idB);

      html += `<div class="syn-card syn-card-${grupo.tipo}">`;

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

      if (grupo.tipo === "equilibrada") {
        html += `<div class="syn-section">
          <div class="syn-section-title" style="color:#2ecc71">Fuerte contra (1.5x)</div>
          <div class="badge-list">${par.strongAgainst.map(makeBadge).join("")}</div>
        </div>
        <div class="syn-section">
          <div class="syn-section-title" style="color:#e74c3c">Débil contra (1.5x)</div>
          <div class="badge-list">${par.weakAgainst.map(makeBadge).join("")}</div>
        </div>`;
      } else if (grupo.tipo === "polarizada") {
        const crits = par.criticalWeaknesses || [];
        const weakRest = par.weakAgainst || [];
        html += `<div class="syn-section">
          <div class="syn-section-title" style="color:#2ecc71">Fuerte contra (1.5x)</div>
          <div class="badge-list">${(par.strongAgainst || []).map(makeBadge).join("")}</div>
        </div>`;
        if (weakRest.length) {
          html += `<div class="syn-section">
            <div class="syn-section-title" style="color:#e74c3c">Débil contra (1.5x)</div>
            <div class="badge-list">${weakRest.map(makeBadge).join("")}</div>
          </div>`;
        }
        if (crits.length) {
          html += `<div class="compat-critical-box">
            <div class="compat-critical-label">${svgPrism} PUNTO CIEGO CRÍTICO (×4)</div>
            <div class="badge-list">${crits.map(makeBadge).join("")}</div>
          </div>`;
        }
      } else if (grupo.tipo === "conflictiva") {
        if ((par.strongAgainst || []).length) {
          html += `<div class="syn-section">
            <div class="syn-section-title" style="color:#2ecc71">Fuerte contra (1.5x)</div>
            <div class="badge-list">${par.strongAgainst.map(makeBadge).join("")}</div>
          </div>`;
        }

        if ((par.weakAgainst || []).length) {
          html += `<div class="syn-section">
            <div class="syn-section-title" style="color:#e74c3c">Débil contra (1.5x)</div>
            <div class="badge-list">${par.weakAgainst.map(makeBadge).join("")}</div>
          </div>`;
        }

        const extCritsC = par.criticalWeaknesses || [];
        if (extCritsC.length) {
          html += `<div class="compat-critical-box">
            <div class="compat-critical-label">${svgPrism} PUNTO CIEGO CRÍTICO (×4)</div>
            <div class="badge-list">${extCritsC.map(makeBadge).join("")}</div>
          </div>`;
        }

        if (par.criticalWeakness) {
          html += `<div class="compat-critical-box compat-risk-box">
            <div class="compat-critical-label compat-risk-label">${svgPrismBroken} RIESGO CRÍTICO (×4)</div>
            <div class="badge-list">${makeBadge(par.criticalWeakness)}</div>
          </div>`;
        }
        html += `<div class="compat-conflict-note">${par.nota}</div>`;
      }

      html += `</div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

// ==========================================
// SISTEMA DE ENTORNOS MÁGICOS
// ==========================================

const envIcons = {
  doubleUp: `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="env-icon-buff-double"><path fill="currentColor" d="M7 14l5-5 5 5H7zm0 5l5-5 5 5H7z"/></svg>`,
  singleUp: `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="env-icon-buff-single"><path fill="currentColor" d="M7 14l5-5 5 5H7z"/></svg>`,
  neutral: `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="env-icon-neutral"><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>`,
  singleDown: `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="env-icon-debuff-single"><path fill="currentColor" d="M7 10l5 5 5-5H7z"/></svg>`,
  doubleDown: `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em" class="env-icon-debuff-double"><path fill="currentColor" d="M7 10l5 5 5-5H7zm0-5l5 5 5-5H7z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em"><path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`
};

const envCategories = {
  fisico: "Estado Físico",
  clima: "Clima Superficial / Biomas Externos",
  cavernas: "Biomas Cavernosos",
  dimensiones: "Dimensiones"
};

const envCatalog = [
  // Físicos
  { id: "ARDIENDO", name: "Ardiendo", cat: "fisico", desc: "El jugador está en llamas", priority: 1 },
  { id: "EN_LAVA", name: "En Lava", cat: "fisico", desc: "Sumergido en lava", priority: 2 },
  { id: "SUMERGIDO", name: "Sumergido", cat: "fisico", desc: "Completamente bajo el agua", priority: 3 },
  { id: "MOJADO", name: "Mojado / Lluvia", cat: "fisico", desc: "Superficialmente húmedo (lluvia/agua)", priority: 4 },
  { id: "VIDA_CRITICA", name: "Vida Crítica", cat: "fisico", desc: "Cercano a la muerte", priority: 5 },
  { id: "CERCA_LAVA", name: "Cerca de Lava", cat: "fisico", desc: "Calor extremo radiante", priority: 6 },
  { id: "TORMENTA", name: "Tormenta", cat: "fisico", desc: "Tormenta eléctrica activa", priority: 7 },
  { id: "NOCHE", name: "Noche", cat: "fisico", desc: "Oscuridad del mundo", priority: 8 },
  { id: "ALTURA_CELESTIAL", name: "Altura", cat: "fisico", desc: "Cumbres del mundo", priority: 9 },

  // Climas Superficiales
  { id: "CLIMA_CALIDO", name: "Clima Cálido", cat: "clima", desc: "Ambientes secos o de calor severo" },
  { id: "CLIMA_FRIO", name: "Clima Frío", cat: "clima", desc: "Ambientes helados o de temperaturas frías" },
  { id: "CLIMA_NEVADO", name: "Clima Nevado", cat: "clima", desc: "Tormenta de nieve activa encima del jugador" },

  // Cavernas
  { id: "CUEVA_MAGMATICA", name: "Cueva Magmática", cat: "cavernas", desc: "Calor infernal subterráneo" },
  { id: "CUEVA_FRIA", name: "Cueva Fría", cat: "cavernas", desc: "Frío glacial subterráneo" },
  { id: "CUEVA_FUNGAL", name: "Cueva Fungal", cat: "cavernas", desc: "Vida vegetal y hongos" },
  { id: "CUEVA_OSCURA", name: "Cueva Oscura", cat: "cavernas", desc: "Oscuridad ancestral" },
  { id: "CUEVA_CRISTAL", name: "Cueva de Cristal", cat: "cavernas", desc: "Resonancia arcana" },
  { id: "CUEVA_PROFUNDA", name: "Cueva Profunda", cat: "cavernas", desc: "Profundidades infestadas" },
  { id: "CUEVA_PIEDRA", name: "Cueva de Piedra", cat: "cavernas", desc: "Tierra y roca densa" },
  { id: "CUEVA_JUNGLA", name: "Cueva de Jungla", cat: "cavernas", desc: "Selva subterránea húmeda" },

  // Dimensiones
  { id: "DIMENSION_NETHER", name: "Nether", cat: "dimensiones", desc: "Reino del fuego y el caos" },
  { id: "DIMENSION_END", name: "End", cat: "dimensiones", desc: "Vacío entre mundos" }
];

const envMagesMatrix = {
  agua: {
    ARDIENDO: { val: "doubleDown" },
    EN_LAVA: { val: "doubleDown" },
    SUMERGIDO: { val: "doubleUp" },
    MOJADO: { val: "singleUp" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "singleUp" },
    NOCHE: { val: "neutral" },
    ALTURA_CELESTIAL: { val: "neutral" },
    CLIMA_CALIDO: { val: "singleDown" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "singleDown" },
    CUEVA_FRIA: { val: "singleUp" },
    CUEVA_FUNGAL: { val: "singleUp" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "neutral" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "singleUp" },
    DIMENSION_NETHER: { val: "doubleDown" },
    DIMENSION_END: { val: "neutral" }
  },
  fuego: {
    ARDIENDO: { val: "doubleUp" },
    EN_LAVA: { val: "doubleUp" },
    SUMERGIDO: { val: "doubleDown" },
    MOJADO: { val: "singleDown" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "doubleUp" },
    TORMENTA: { val: "singleDown" },
    NOCHE: { val: "singleDown" },
    ALTURA_CELESTIAL: { val: "neutral" },
    CLIMA_CALIDO: { val: "singleUp" },
    CLIMA_FRIO: { val: "singleDown" },
    CLIMA_NEVADO: { val: "doubleDown" },
    CUEVA_MAGMATICA: { val: "doubleUp" },
    CUEVA_FRIA: { val: "singleDown" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "neutral" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "singleDown" },
    DIMENSION_NETHER: { val: "doubleUp" },
    DIMENSION_END: { val: "singleDown" }
  },
  naturaleza: {
    ARDIENDO: { val: "singleDown" },
    EN_LAVA: { val: "doubleDown" },
    SUMERGIDO: { val: "singleUp" },
    MOJADO: { val: "doubleUp" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "singleDown" },
    NOCHE: { val: "singleUp" },
    ALTURA_CELESTIAL: { val: "neutral" },
    CLIMA_CALIDO: { val: "singleDown" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "singleDown" },
    CUEVA_FRIA: { val: "singleDown" },
    CUEVA_FUNGAL: { val: "doubleUp" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "neutral" },
    CUEVA_PROFUNDA: { val: "singleDown" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "doubleUp" },
    DIMENSION_NETHER: { val: "singleDown" },
    DIMENSION_END: { val: "neutral" }
  },
  tierra: {
    ARDIENDO: { val: "neutral" },
    EN_LAVA: { val: "neutral" },
    SUMERGIDO: { val: "singleDown" },
    MOJADO: { val: "singleDown" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "singleUp" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "neutral" },
    ALTURA_CELESTIAL: { val: "singleDown" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "singleUp" },
    CUEVA_FRIA: { val: "singleDown" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "singleUp" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "doubleUp" },
    CUEVA_JUNGLA: { val: "singleUp" },
    DIMENSION_NETHER: { val: "singleUp" },
    DIMENSION_END: { val: "doubleDown" }
  },
  hielo: {
    ARDIENDO: { val: "doubleDown" },
    EN_LAVA: { val: "doubleDown" },
    SUMERGIDO: { val: "singleUp" },
    MOJADO: { val: "singleUp" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "singleUp" },
    ALTURA_CELESTIAL: { val: "neutral" },
    CLIMA_CALIDO: { val: "singleDown" },
    CLIMA_FRIO: { val: "singleUp" },
    CLIMA_NEVADO: { val: "doubleUp" },
    CUEVA_MAGMATICA: { val: "doubleDown" },
    CUEVA_FRIA: { val: "doubleUp" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "singleUp" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "doubleDown" },
    DIMENSION_END: { val: "doubleUp" }
  },
  electrico: {
    ARDIENDO: { val: "singleDown" },
    EN_LAVA: { val: "singleDown" },
    SUMERGIDO: { val: "doubleUp" },
    MOJADO: { val: "singleUp" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "doubleUp" },
    NOCHE: { val: "neutral" },
    ALTURA_CELESTIAL: { val: "singleUp" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "singleDown" },
    CUEVA_FRIA: { val: "neutral" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "doubleUp" },
    CUEVA_PROFUNDA: { val: "singleDown" },
    CUEVA_PIEDRA: { val: "singleDown" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "singleDown" },
    DIMENSION_END: { val: "singleUp" }
  },
  sagrado: {
    ARDIENDO: { val: "singleDown" },
    EN_LAVA: { val: "doubleDown" },
    SUMERGIDO: { val: "neutral" },
    MOJADO: { val: "neutral" },
    VIDA_CRITICA: { val: "doubleUp" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "singleDown" },
    ALTURA_CELESTIAL: { val: "doubleUp" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "singleDown" },
    CUEVA_FRIA: { val: "neutral" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "doubleDown" },
    CUEVA_CRISTAL: { val: "singleUp" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "singleDown" },
    DIMENSION_END: { val: "doubleUp" }
  },
  sangre: {
    ARDIENDO: { val: "singleDown" },
    EN_LAVA: { val: "doubleDown" },
    SUMERGIDO: { val: "neutral" },
    MOJADO: { val: "neutral" },
    VIDA_CRITICA: { val: "doubleUp" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "singleUp" },
    ALTURA_CELESTIAL: { val: "singleDown" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "neutral" },
    CUEVA_FRIA: { val: "singleDown" },
    CUEVA_FUNGAL: { val: "singleDown" },
    CUEVA_OSCURA: { val: "neutral" },
    CUEVA_CRISTAL: { val: "neutral" },
    CUEVA_PROFUNDA: { val: "doubleUp" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "doubleUp" },
    DIMENSION_END: { val: "singleDown" }
  },
  invocador: {
    ARDIENDO: { val: "singleDown" },
    EN_LAVA: { val: "doubleDown" },
    SUMERGIDO: { val: "neutral" },
    MOJADO: { val: "neutral" },
    VIDA_CRITICA: { val: "singleUp" },
    CERCA_LAVA: { val: "singleDown" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "singleUp" },
    ALTURA_CELESTIAL: { val: "singleUp" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "singleDown" },
    CUEVA_FRIA: { val: "singleDown" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "doubleUp" },
    CUEVA_CRISTAL: { val: "neutral" },
    CUEVA_PROFUNDA: { val: "singleUp" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "singleDown" },
    DIMENSION_END: { val: "doubleUp" }
  },
  ender: {
    ARDIENDO: { val: "neutral" },
    EN_LAVA: { val: "neutral" },
    SUMERGIDO: { val: "doubleDown" },
    MOJADO: { val: "singleDown" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "neutral" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "doubleUp" },
    ALTURA_CELESTIAL: { val: "singleUp" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "neutral" },
    CUEVA_FRIA: { val: "neutral" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "singleUp" },
    CUEVA_CRISTAL: { val: "singleUp" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "singleDown" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "singleDown" },
    DIMENSION_END: { val: "doubleUp" }
  },
  eldritch: {
    ARDIENDO: { val: "neutral" },
    EN_LAVA: { val: "neutral" },
    SUMERGIDO: { val: "neutral" },
    MOJADO: { val: "neutral" },
    VIDA_CRITICA: { val: "neutral" },
    CERCA_LAVA: { val: "neutral" },
    TORMENTA: { val: "neutral" },
    NOCHE: { val: "neutral" },
    ALTURA_CELESTIAL: { val: "neutral" },
    CLIMA_CALIDO: { val: "neutral" },
    CLIMA_FRIO: { val: "neutral" },
    CLIMA_NEVADO: { val: "neutral" },
    CUEVA_MAGMATICA: { val: "neutral" },
    CUEVA_FRIA: { val: "neutral" },
    CUEVA_FUNGAL: { val: "neutral" },
    CUEVA_OSCURA: { val: "singleUp" },
    CUEVA_CRISTAL: { val: "neutral" },
    CUEVA_PROFUNDA: { val: "neutral" },
    CUEVA_PIEDRA: { val: "neutral" },
    CUEVA_JUNGLA: { val: "neutral" },
    DIMENSION_NETHER: { val: "neutral" },
    DIMENSION_END: { val: "neutral" }
  }
};

const envResistancesData = {
  ARDIENDO: {
    fort: [],
    weak: [
      { id: "fuego", val: -30, label: "-30% (x2)" },
      { id: "hielo", val: -15, label: "-15%" }
    ]
  },
  EN_LAVA: {
    fort: [],
    weak: [
      { id: "fuego", val: -45, label: "-45% (x3)" },
      { id: "hielo", val: -15, label: "-15%" }
    ]
  },
  SUMERGIDO: {
    fort: [
      { id: "fuego", val: 15, label: "+15%" },
      { id: "tierra", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "electrico", val: -30, label: "-30% (x2)" },
      { id: "hielo", val: -15, label: "-15%" }
    ]
  },
  MOJADO: {
    fort: [
      { id: "fuego", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "electrico", val: -15, label: "-15%" },
      { id: "hielo", val: -15, label: "-15%" }
    ]
  },
  VIDA_CRITICA: {
    fort: [],
    weak: [
      { id: "sangre", val: -30, label: "-30% (x2)" }
    ]
  },
  CERCA_LAVA: {
    fort: [
      { id: "hielo", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "fuego", val: -15, label: "-15%" }
    ]
  },
  TORMENTA: {
    fort: [],
    weak: [
      { id: "electrico", val: -30, label: "-30% (x2)" }
    ]
  },
  NOCHE: {
    fort: [
      { id: "ender", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "sagrado", val: -15, label: "-15%" }
    ]
  },
  ALTURA_CELESTIAL: {
    fort: [],
    weak: []
  },
  CLIMA_CALIDO: {
    fort: [
      { id: "hielo", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "fuego", val: -15, label: "-15%" }
    ]
  },
  CLIMA_FRIO: {
    fort: [
      { id: "fuego", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "hielo", val: -15, label: "-15%" },
      { id: "sangre", val: -15, label: "-15%" }
    ]
  },
  CLIMA_NEVADO: {
    fort: [
      { id: "fuego", val: 30, label: "+30% (x2)" }
    ],
    weak: [
      { id: "hielo", val: -30, label: "-30% (x2)" }
    ]
  },
  CUEVA_MAGMATICA: {
    fort: [
      { id: "hielo", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "fuego", val: -15, label: "-15%" },
      { id: "tierra", val: -15, label: "-15%" }
    ]
  },
  CUEVA_FRIA: {
    fort: [
      { id: "fuego", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "hielo", val: -15, label: "-15%" },
      { id: "sangre", val: -15, label: "-15%" }
    ]
  },
  CUEVA_FUNGAL: {
    fort: [
      { id: "invocador", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "naturaleza", val: -15, label: "-15%" },
      { id: "sagrado", val: -15, label: "-15%" }
    ]
  },
  CUEVA_OSCURA: {
    fort: [],
    weak: []
  },
  CUEVA_CRISTAL: {
    fort: [
      { id: "electrico", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "tierra", val: -15, label: "-15%" }
    ]
  },
  CUEVA_PROFUNDA: {
    fort: [
      { id: "sangre", val: 15, label: "+15%" },
      { id: "tierra", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "naturaleza", val: -15, label: "-15%" },
      { id: "sagrado", val: -15, label: "-15%" }
    ]
  },
  CUEVA_PIEDRA: {
    fort: [
      { id: "tierra", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "ender", val: -15, label: "-15%" }
    ]
  },
  CUEVA_JUNGLA: {
    fort: [
      { id: "tierra", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "fuego", val: -15, label: "-15%" },
      { id: "hielo", val: -15, label: "-15%" }
    ]
  },
  DIMENSION_NETHER: {
    fort: [
      { id: "hielo", val: 15, label: "+15%" },
      { id: "agua", val: 30, label: "+30% (x2)" }
    ],
    weak: [
      { id: "fuego", val: -30, label: "-30% (x2)" }
    ]
  },
  DIMENSION_END: {
    fort: [
      { id: "ender", val: 15, label: "+15%" },
      { id: "tierra", val: 15, label: "+15%" }
    ],
    weak: [
      { id: "sagrado", val: -15, label: "-15%" },
      { id: "electrico", val: -15, label: "-15%" },
      { id: "naturaleza", val: -15, label: "-15%" }
    ]
  }
};

function initEnvCatalog() {
  const treeContainer = document.getElementById("env-priority-tree");
  treeContainer.innerHTML = `
    <div class="priority-title">Jerarquía de Detección de Entornos</div>
    <div class="priority-subtitle">Los entornos se detectan de arriba a abajo. Múltiples entornos se acumulan, pero el estado físico prima en prioridades.</div>
    <div class="priority-flow">
      <div class="priority-step priority-1">
        <div class="step-num">1</div>
        <div class="step-content">
          <strong>Estado Físico (Máxima Prioridad)</strong>
          <span class="step-details">Ardiendo, En lava, Sumergido, Mojado, Vida Crítica, Cerca de lava, Lluvia, Altura</span>
        </div>
      </div>
      <div class="priority-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      </div>
      <div class="priority-step priority-2">
        <div class="step-num">2</div>
        <div class="step-content">
          <strong>Clima Superficial / Biomas Externos</strong>
          <span class="step-details">Clima Cálido, Clima Frío, Clima Nevado</span>
        </div>
      </div>
      <div class="priority-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      </div>
      <div class="priority-step priority-3">
        <div class="step-num">3</div>
        <div class="step-content">
          <strong>Bioma Subterráneo / Caverna</strong>
          <span class="step-details">Deep Dark, Cavernas de Terralith y Vanilla</span>
        </div>
      </div>
      <div class="priority-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      </div>
      <div class="priority-step priority-4">
        <div class="step-num">4</div>
        <div class="step-content">
          <strong>Dimensión</strong>
          <span class="step-details">Nether, End</span>
        </div>
      </div>
      <div class="priority-arrow">
        <svg viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>
      </div>
      <div class="priority-step priority-5">
        <div class="step-num">5</div>
        <div class="step-content">
          <strong>Estado del Entorno Dinámico</strong>
          <span class="step-details">Noche, Tormenta Eléctrica</span>
        </div>
      </div>
    </div>
  `;

  const gridContainer = document.getElementById("env-catalog-grid");
  let html = "";
  
  const cats = {
    fisico: { title: "Estados Físicos y Clima", class: "cat-fisico" },
    clima: { title: "Clima Superficial / Biomas Externos", class: "cat-clima" },
    cavernas: { title: "Biomas Cavernosos", class: "cat-cavernas" },
    dimensiones: { title: "Dimensiones", class: "cat-dimensiones" }
  };

  Object.entries(cats).forEach(([catKey, catInfo]) => {
    html += `
      <div class="catalog-category-block">
        <h3 class="category-block-title">${catInfo.title}</h3>
        <div class="catalog-cards-grid">
    `;

    envCatalog.filter(e => e.cat === catKey).forEach(env => {
      html += `
        <div class="env-card ${catInfo.class}">
          <div class="env-card-header">
            <span class="env-card-name">${env.name}</span>
          </div>
          <div class="env-card-body">
            <div class="env-card-field">
              <span class="field-value field-desc">${env.desc}</span>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  gridContainer.innerHTML = html;
}

let currentEnvMatrixFilter = "todos";

function initEnvMatrix() {
  const container = document.getElementById("view-env-matrix");
  let filtersHtml = `
    <div class="env-matrix-filters">
      <button class="filter-btn active" onclick="filterEnvMatrix('todos', this)">Todos</button>
      <button class="filter-btn" onclick="filterEnvMatrix('fisico', this)">Físico</button>
      <button class="filter-btn" onclick="filterEnvMatrix('clima', this)">Clima Superficial</button>
      <button class="filter-btn" onclick="filterEnvMatrix('cavernas', this)">Cavernas</button>
      <button class="filter-btn" onclick="filterEnvMatrix('dimensiones', this)">Dimensiones</button>
    </div>
  `;

  let filtersContainer = container.querySelector(".env-matrix-filters");
  if (!filtersContainer) {
    const wrapper = container.querySelector(".matrix-wrapper");
    filtersContainer = document.createElement("div");
    filtersContainer.className = "env-matrix-filters-wrapper";
    filtersContainer.innerHTML = filtersHtml;
    container.insertBefore(filtersContainer, wrapper);
  }

  renderEnvMatrixTable();
  renderEnvMatrixLegend();
}

function filterEnvMatrix(cat, btn) {
  currentEnvMatrixFilter = cat;
  const filterBtns = document.querySelectorAll(".env-matrix-filters .filter-btn");
  filterBtns.forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderEnvMatrixTable();
}

function renderEnvMatrixTable() {
  const table = document.getElementById("env-matrix-table");
  const activeEnvs = envCatalog.filter(e => currentEnvMatrixFilter === "todos" || e.cat === currentEnvMatrixFilter);
  
  let html = "<tr><th>ELEMENTO \\ ENTORNO</th>";
  activeEnvs.forEach(env => {
    html += `<th class="env-th" title="${env.desc}"><div class="th-env-name">${env.name}</div></th>`;
  });
  html += "</tr>";

  elements.forEach(el => {
    const labelWithDagger = el.id === "eldritch" ? `${el.label} †` : el.label;
    html += `<tr><th class="row-header" style="color: ${el.color}"><span class="matrix-icon">${el.icon}</span> ${labelWithDagger}</th>`;
    
    activeEnvs.forEach(env => {
      const cell = envMagesMatrix[el.id]?.[env.id] || { val: "neutral" };
      let cellClass = `cell-env-${cell.val}`;
      let icon = envIcons[cell.val] || "";
      
      let tooltip = "";
      if (cell.val === "doubleUp") tooltip = `Fortaleza Extrema (+25% Poder, +50% Maná)`;
      else if (cell.val === "singleUp") tooltip = `Fortaleza (+15% Poder, +30% Maná)`;
      else if (cell.val === "singleDown") tooltip = `Debilidad (-15% Poder, -30% Maná)`;
      else if (cell.val === "doubleDown") tooltip = `Debilidad Extrema (-25% Poder, -50% Maná)`;
      else tooltip = "Neutral";

      html += `
        <td class="env-cell ${cellClass}" title="${tooltip}">
          <div class="env-cell-content">
            <span class="env-cell-icon">${icon}</span>
          </div>
        </td>
      `;
    });
    
    html += `</tr>`;
  });

  table.innerHTML = html;
}

function renderEnvMatrixLegend() {
  const legend = document.getElementById("env-matrix-legend");
  legend.innerHTML = `
    <div style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; width: 100%;">
      <div class="legend-item">
        <div class="legend-icon-container" style="color: #2ece71">${envIcons.doubleUp}</div>
        <span><strong>Fortaleza Extrema</strong> (+25% SP / +50% Maná)</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon-container" style="color: #a3e4d7">${envIcons.singleUp}</div>
        <span><strong>Fortaleza</strong> (+15% SP / +30% Maná)</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon-container" style="color: #5d6d7e">${envIcons.neutral}</div>
        <span><strong>Neutral</strong></span>
      </div>
      <div class="legend-item">
        <div class="legend-icon-container" style="color: #f5b041">${envIcons.singleDown}</div>
        <span><strong>Debilidad</strong> (-15% SP / -30% Maná)</span>
      </div>
      <div class="legend-item">
        <div class="legend-icon-container" style="color: #e74c3c">${envIcons.doubleDown}</div>
        <span><strong>Debilidad Extrema</strong> (-25% SP / -50% Maná)</span>
      </div>
    </div>
    <div class="matrix-disclaimer" style="margin-top: 20px; font-size: 0.9em; opacity: 0.8; line-height: 1.4; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; width: 100%; text-align: left;">
      <p>• Los modificadores de entornos múltiples se <strong>acumulan</strong> (con cap de ±50% SP y ±60% maná).</p>
    </div>
  `;
}

function initEnvResistances() {
  const container = document.getElementById("env-resistances-wrapper");
  let html = `
    <div class="resist-intro">
      <h2>Modificadores de Resistencias Mágicas (Todas las clases)</h2>
      <p>Todos los jugadores reciben modificadores de resistencia elemental según el entorno. La intensidad base es de ±15%.</p>
    </div>
    <div class="resist-cards-grid">
  `;

  envCatalog.forEach(env => {
    const data = envResistancesData[env.id];
    if (!data) return;
    if (data.fort.length === 0 && data.weak.length === 0) {
      return;
    }

    const catName = envCategories[env.cat] || "";

    const makeBadge = (item) => {
      const el = elements.find(e => e.id === item.id);
      if (!el) return "";
      return `
        <div class="type-badge" style="background: ${el.color}">
          ${el.icon} ${el.label} <span class="badge-val">${item.label}</span>
        </div>
      `;
    };

    html += `
      <div class="resist-card">
        <div class="resist-card-header">
          <div class="resist-card-title-row">
            <span class="resist-card-name">${env.name}</span>
            <span class="resist-card-cat">${catName}</span>
          </div>
          <span class="resist-card-desc">${env.desc}</span>
        </div>
        <div class="resist-card-body">
          <div class="resist-col">
            <span class="col-title color-green">${envIcons.shield} Fortalezas (+Res)</span>
            <div class="badge-list">
              ${data.fort.length > 0 ? data.fort.map(makeBadge).join("") : `<span class="no-mods">Ninguna</span>`}
            </div>
          </div>
          <div class="resist-col">
            <span class="col-title color-red">${envIcons.shield} Debilidades (-Res)</span>
            <div class="badge-list">
              ${data.weak.length > 0 ? data.weak.map(makeBadge).join("") : `<span class="no-mods">Ninguna</span>`}
            </div>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function initEnvGuide() {
  const container = document.getElementById("env-guide-wrapper");
  container.innerHTML = `
    <div class="guide-grid" style="grid-template-columns: 1fr; max-width: 850px; margin: 0 auto; gap: 20px;">
      <div class="guide-card card-design">
        <h3>Dos Sistemas Independientes y Acumulativos</h3>
        <p style="line-height: 1.6; font-size: 1.05em; opacity: 0.95; margin-bottom: 20px;">
          Para entender cómo te afecta el entorno, debes diferenciar los dos efectos que ocurren simultáneamente. 
          Un mago puede ser neutral en su magia, pero seguir sufriendo vulnerabilidades en su cuerpo físico:
        </p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
          <div style="background: rgba(46, 204, 113, 0.05); border: 1px solid rgba(46, 204, 113, 0.2); padding: 15px; border-radius: 8px;">
            <h4 style="color: #2ecc71; margin-top: 0;">1. Canalización de Magia (Magos)</h4>
            <p style="font-size: 0.95em; opacity: 0.85; line-height: 1.5;">
              Afecta al daño que haces con tus hechizos (Poder de Hechizo) y a tu capacidad de maná. 
              Si un elemento es neutral, tu poder destructivo y maná no cambian en absoluto. Esto es lo que refleja la pestaña "Matriz de Magos".
            </p>
          </div>
          <div style="background: rgba(52, 152, 219, 0.05); border: 1px solid rgba(52, 152, 219, 0.2); padding: 15px; border-radius: 8px;">
            <h4 style="color: #3498db; margin-top: 0;">2. Resistencias del Cuerpo (Todos)</h4>
            <p style="font-size: 0.95em; opacity: 0.85; line-height: 1.5;">
              Afecta al daño que recibes de ataques enemigos. Se aplica a cualquier clase. 
              Por ejemplo, estar mojado te hace vulnerable a recibir más daño eléctrico (-15% resistencia), seas mago o no.
            </p>
          </div>
        </div>

        <div class="guide-section">
          <h4>Diferencias de Intensidad (Magos)</h4>
          <table class="guide-table">
            <tr><th>Nivel</th><th>Entorno típico</th><th>Poder de Hechizo (Daño saliente)</th><th>Maná Máximo</th></tr>
            <tr><td>Normal (Simple arriba)</td><td>Lluvia, mojado</td><td>+15%</td><td>+30%</td></tr>
            <tr><td>Normal (Simple abajo)</td><td>Bioma frío siendo Fuego</td><td>-15%</td><td>-30%</td></tr>
            <tr><td>Intensificado (Doble arriba)</td><td>Fuego en lava o Nether</td><td>+25%</td><td>+50%</td></tr>
            <tr><td>Intensificado (Doble abajo)</td><td>Agua en Nether o en llamas</td><td>-25%</td><td>-50%</td></tr>
          </table>
        </div>
        <div class="guide-section">
          <h4>Acumulación y Límites (Tope)</h4>
          <p>Los entornos se suman si estás en varios a la vez, pero existen topes de seguridad para evitar roturas de balance:</p>
          <ul>
            <li><strong>Magos (Poder y Maná):</strong> Máximo acumulable de <strong>±50% Poder de Hechizo</strong> y <strong>±60% Maná</strong>.</li>
            <li><strong>Resistencias (Todos los jugadores):</strong> Máximo acumulable de <strong>±40% de resistencia</strong> a cualquier elemento.</li>
          </ul>
        </div>
        <div class="guide-section">
          <h4>Casos Especiales Clarificados</h4>
          <ul>
            <li><strong>Eldritch e Indiferencia Terrenal (Ejemplo):</strong> La magia de Eldritch es un tipo de magia que difiere del resto. No le afecta el calor, el agua, la noche ni el End (es neutral en su canalización). Sin embargo, al tener un cuerpo físico, un jugador de clase Eldritch mojado <strong>sí sufrirá la debilidad de recibir más daño eléctrico (-15% resistencia)</strong> igual que todos los demás.</li>
            <li><strong>Sangre y Vida Crítica (Ejemplo):</strong> Al bajar del 30% de vida, se activa una alteración biológica: el mago de Sangre entra en frenesí y el de Sagrado intensifica su fe. Físicamente, el cuerpo de todos los jugadores se vuelve inestable ante la magia de sangre (recibiendo +30% de daño de esta escuela).</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

function initEnvVersus() {
  const playerSelect = document.getElementById("env-versus-player");
  const locSelect = document.getElementById("env-versus-location");

  if (!playerSelect || !locSelect) return;

  // Populates player options (without emojis in the text)
  let playerOptions = `<option value="no-mago">Jugador No-Mago (Cualquier Clase)</option>`;
  elements.forEach(el => {
    playerOptions += `<option value="mago-${el.id}">Mago de ${el.label}</option>`;
  });
  playerSelect.innerHTML = playerOptions;

  // Populates environment location options (without emojis in the text)
  let locOptions = "";
  envCatalog.forEach(env => {
    locOptions += `<option value="${env.id}">${env.name} [${envCategories[env.cat] || ""}]</option>`;
  });
  locSelect.innerHTML = locOptions;

  const updateResult = () => {
    const playerVal = playerSelect.value;
    const envId = locSelect.value;
    const env = envCatalog.find(e => e.id === envId);
    if (!env) return;

    const box = document.getElementById("env-versus-result");
    const content = document.getElementById("env-versus-content");

    let spellPowerMod = "0%";
    let manaMod = "0%";
    let isBuff = false;
    let isDebuff = false;

    // 1. Calculate Mage Spellpower / Mana modifier
    if (playerVal.startsWith("mago-")) {
      const elId = playerVal.replace("mago-", "");
      const mageCell = envMagesMatrix[elId]?.[envId] || { val: "neutral" };
      if (mageCell.val === "doubleUp") {
        spellPowerMod = "+25%";
        manaMod = "+50%";
        isBuff = true;
      } else if (mageCell.val === "singleUp") {
        spellPowerMod = "+15%";
        manaMod = "+30%";
        isBuff = true;
      } else if (mageCell.val === "singleDown") {
        spellPowerMod = "-15%";
        manaMod = "-30%";
        isDebuff = true;
      } else if (mageCell.val === "doubleDown") {
        spellPowerMod = "-25%";
        manaMod = "-50%";
        isDebuff = true;
      }
    }

    // 2. Calculate Bodily Resistances with Mage Immunity Check
    const resData = envResistancesData[envId] || { fort: [], weak: [] };
    const isMago = playerVal.startsWith("mago-");
    const magoElId = isMago ? playerVal.replace("mago-", "") : null;

    const fortList = resData.fort.map(item => {
      const el = elements.find(e => e.id === item.id);
      const labelText = el.label;
      return `<span class="type-badge" style="background:${el.color}; display:inline-flex; align-items:center; gap:5px; margin: 3px; font-size: 0.9em; padding: 4px 8px; border-radius: 4px; color:#fff; transition: all 0.3s ease;">${el.icon} ${labelText} <strong>${item.label}</strong></span>`;
    }).join("");

    const weakList = resData.weak.map(item => {
      const el = elements.find(e => e.id === item.id);
      const isImmune = isMago && item.id === magoElId;
      const labelText = el.label;

      if (isImmune) {
        return `<span class="type-badge" style="background:#555; text-decoration: line-through; opacity: 0.5; display:inline-flex; align-items:center; gap:5px; margin: 3px; font-size: 0.9em; padding: 4px 8px; border-radius: 4px; color:#aaa; transition: all 0.3s ease;" title="Inmune a debilidades corporales de su propio elemento">${el.icon} ${labelText} <strong>${item.label} (Inmune)</strong></span>`;
      }

      return `<span class="type-badge" style="background:${el.color}; display:inline-flex; align-items:center; gap:5px; margin: 3px; font-size: 0.9em; padding: 4px 8px; border-radius: 4px; color:#fff; transition: all 0.3s ease;">${el.icon} ${labelText} <strong>${item.label}</strong></span>`;
    }).join("");

    // Dynamic box glow coloring with transition animation
    box.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    box.style.borderColor = isBuff ? "#2ecc71" : (isDebuff ? "#e74c3c" : "#555");
    box.style.boxShadow = isBuff ? "0 0 15px rgba(46,204,113,0.15)" : (isDebuff ? "0 0 15px rgba(231,76,60,0.15)" : "none");

    // Add scale micro-animation on calculation refresh
    box.style.transform = "scale(0.98)";
    setTimeout(() => { box.style.transform = "scale(1)"; }, 50);

    let html = "";

    // Render Mage stats section if selected
    if (isMago) {
      const el = elements.find(e => e.id === magoElId);
      html += `
        <div style="margin-bottom: 20px; animation: fadeIn 0.4s ease;">
          <h5 style="margin: 0 0 10px 0; color: ${el.color}; font-size: 1.1em; display:flex; align-items:center; gap:8px;">${el.icon} Canalización de Magia (${el.label})</h5>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 6px; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
              <div style="font-size: 0.85em; opacity: 0.6;">Poder de Hechizo (Daño saliente)</div>
              <div style="font-size: 1.5em; font-weight: bold; margin-top: 5px; color: ${spellPowerMod.startsWith("+") ? "#2ecc71" : (spellPowerMod.startsWith("-") ? "#e74c3c" : "#fff")}">${spellPowerMod}</div>
            </div>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 10px; border-radius: 6px; transition: transform 0.2s;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
              <div style="font-size: 0.85em; opacity: 0.6;">Capacidad de Maná Máximo</div>
              <div style="font-size: 1.5em; font-weight: bold; margin-top: 5px; color: ${manaMod.startsWith("+") ? "#2ecc71" : (manaMod.startsWith("-") ? "#e74c3c" : "#fff")}">${manaMod}</div>
            </div>
          </div>
        </div>
      `;
    }

    // Render Physical resistances section (affects everyone)
    html += `
      <div>
        <h5 style="margin: 0 0 10px 0; color: #3498db; font-size: 1.1em;">🛡 Resistencias del Cuerpo Físico</h5>
        <p style="font-size: 0.9em; opacity: 0.8; margin: 0 0 12px 0;">Modifica la resistencia a daños entrantes del jugador en este entorno (afecta a todas las clases):</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
          <div style="background: rgba(46,204,113,0.03); border: 1px solid rgba(46,204,113,0.1); padding: 12px; border-radius: 6px;">
            <div style="font-size: 0.9em; color: #2ecc71; margin-bottom: 8px; font-weight: bold;">Fortalezas (+Resistencia / Recibes Menos Daño)</div>
            <div style="display: flex; flex-wrap: wrap;">${fortList || '<span style="font-size:0.9em; opacity:0.5;">Ninguna</span>'}</div>
          </div>
          <div style="background: rgba(231,76,60,0.03); border: 1px solid rgba(231,76,60,0.1); padding: 12px; border-radius: 6px;">
            <div style="font-size: 0.9em; color: #e74c3c; margin-bottom: 8px; font-weight: bold;">Debilidades (-Resistencia / Recibes Más Daño)</div>
            <div style="display: flex; flex-wrap: wrap;">${weakList || '<span style="font-size:0.9em; opacity:0.5;">Ninguna</span>'}</div>
          </div>
        </div>
      </div>
    `;

    content.innerHTML = html;
  };

  playerSelect.addEventListener("change", updateResult);
  locSelect.addEventListener("change", updateResult);
  updateResult();
}

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

  initEnvCatalog();
  initEnvMatrix();
  initEnvResistances();
  initEnvVersus();
  initEnvGuide();
};

