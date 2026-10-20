/* ── Field-site map + gallery ───────────────────────────────
   Islands get one marker at the island's centre. Mainland work is shown
   only at the level of a whole state (hover/click the state), and Florida
   only as a single region, so no collecting locality is ever published.
   Edit PAPERS / PLACES below; photos come from photos.js (PLACE_PHOTOS).
   ─────────────────────────────────────────────────────────── */
(function () {
  const PAPERS = {
    ibt:      { cite: 'Hirst et al. 2025, Evolution', title: 'Island biogeography and competition drive rapid venom complexity evolution across rattlesnakes', url: 'https://doi.org/10.1093/evolut/qpaf074' },
    tox:      { cite: 'Hirst et al. 2026, Toxicon', title: 'Functional venom activity and antivenom neutralization in rattlesnakes across Baja California and Gulf of California islands', url: 'https://doi.org/10.1016/j.toxicon.2026.109266' },
    farleigh: { cite: 'Farleigh et al. 2026, PNAS', title: 'Evolution of genome-wide barriers to gene flow during complex speciation in rattlesnakes', url: 'https://doi.org/10.1073/pnas.2609058123' },
    cruber:   { cite: 'Hirst et al. 2024, Genome Biol. Evol.', title: 'Where the ‘Ruber’ meets the road: using the genome of the red diamond rattlesnake to unravel venom evolution', url: 'https://doi.org/10.1093/gbe/evae198' },
    wnan:     { cite: 'Hirst et al. 2026, W. N. Am. Naturalist', title: 'Lack of an ontogenetic shift in Crotalus enyo cerralvensis venom', url: 'https://scholarsarchive.byu.edu/wnan/vol86/iss1/8/' },
    gbe:      { cite: 'Margres et al. 2026, Genome Biol. Evol.', title: 'Truncated life history underlies rapid local adaptation in island rattlesnake venom expression', url: 'https://doi.org/10.1093/gbe/evag131' },
    guedouar: { cite: 'Guedouar et al. 2026, Toxicon', title: 'Ontogenetic co-option of myotoxin expression variation in island eastern diamondback venoms', url: 'https://doi.org/10.1016/j.toxicon.2026.109094' },
    // natural history notes
    sauro:    { note: true, cite: 'Hirst et al. 2023, Bull. Chicago Herp. Soc.', title: 'The Hunchback of Isla Piojo: first record of putative kyphosis in the spiny chuckwalla', url: 'pdf/Hirst_et_al_Sauromalus_hispidus_2023.pdf' },
    herp:     { note: true, cite: 'Franz-Chávez et al. 2023, Bull. Chicago Herp. Soc.', title: 'New herpetological records for islands in the Gulf of California', url: 'pdf/Franz_Chvez_et_al_2023.pdf' },
    skink:    { note: true, cite: 'McDonald et al. 2025, Herpetological Review', title: 'Plestiodon egregius (mole skink) geographic distribution', url: 'pdf/McDonald_Skink.pdf' }
  };

  const STATES = { bc: 'Baja California', bcs: 'Baja California Sur', fl: 'Florida' };
  const S = {
    pyrrhus: ['Crotalus pyrrhus', 'Southwestern speckled rattlesnake'],
    mitchellii: ['Crotalus mitchellii', 'Speckled rattlesnake'],
    enyo: ['Crotalus enyo', 'Baja California rattlesnake'],
    ruber: ['Crotalus ruber', 'Red diamond rattlesnake'],
    adamanteus: ['Crotalus adamanteus', 'Eastern diamondback rattlesnake']
  };

  // species: [scientific, common, status]  status: true = endemic, 'nd' = present but not detected by us
  const PLACES = [
    // ── Baja California ──
    { id: 'bcpen', kind: 'state', state: 'bc', name: 'Baja California', region: 'Peninsula',
      note: 'Mainland populations sampled across the northern half of the peninsula. Localities are withheld.',
      species: [S.ruber, S.enyo, S.pyrrhus], papers: ['tox', 'farleigh', 'cruber'] },
    { id: 'muerto', kind: 'island', state: 'bc', zoom: 13, name: 'Isla El Muerto', region: 'Northern Gulf', lat: 30.088, lng: -114.541,
      species: [S.pyrrhus], papers: ['ibt', 'tox'] },
    { id: 'angel', kind: 'island', state: 'bc', zoom: 9, name: 'Isla Ángel de la Guarda', region: 'Midriff islands', lat: 29.290, lng: -113.390,
      note: 'The largest island in the study, about 936 km². Its speckled rattlesnake, C. angelensis, is a striking case of island gigantism, growing much larger than its mainland relatives, likely driven by its unusually large prey, the island’s giant spiny chuckwallas.',
      species: [['Crotalus angelensis', 'Ángel de la Guarda Island speckled rattlesnake', true], [...S.ruber, 'nd']],
      papers: ['ibt', 'tox'] },
    { id: 'smith', kind: 'island', state: 'bc', zoom: 13, name: 'Isla Smith (Coronado)', region: 'Bahía de los Ángeles', lat: 29.057, lng: -113.502,
      species: [S.pyrrhus], papers: ['ibt', 'tox'] },
    { id: 'piojo', kind: 'island', state: 'bc', zoom: 14, name: 'Isla El Piojo', region: 'Bahía de los Ángeles', lat: 29.018, lng: -113.465,
      species: [['Crotalus thalassoporus', 'Louse Island speckled rattlesnake', true]], papers: ['ibt', 'tox', 'sauro'] },
    { id: 'cabeza', kind: 'island', state: 'bc', zoom: 14, name: 'Isla Cabeza de Caballo', region: 'Bahía de los Ángeles', lat: 28.973, lng: -113.479,
      species: [['Crotalus polisi', 'Horsehead Island speckled rattlesnake', true]], papers: ['ibt', 'tox'] },
    // ── Baja California Sur ──
    { id: 'bcspen', kind: 'state', state: 'bcs', name: 'Baja California Sur', region: 'Peninsula',
      note: 'Mainland populations sampled across the southern half of the peninsula, including the mainland comparison for Cerralvo’s rattlesnakes. Localities are withheld.',
      species: [S.ruber, S.enyo, S.mitchellii], papers: ['tox', 'farleigh', 'cruber', 'wnan'] },
    { id: 'danzante', kind: 'island', state: 'bcs', zoom: 12, name: 'Isla Danzante', region: 'Bahía de Loreto', lat: 25.788, lng: -111.251,
      species: [S.ruber], papers: ['ibt', 'tox'] },
    { id: 'sanjose', kind: 'island', state: 'bcs', zoom: 11, name: 'Isla San José', region: 'La Paz islands', lat: 24.970, lng: -110.630,
      species: [S.mitchellii, S.enyo, S.ruber], papers: ['ibt', 'tox', 'herp'] },
    { id: 'sanfrancisco', kind: 'island', state: 'bcs', zoom: 13, name: 'Isla San Francisco', region: 'La Paz islands', lat: 24.825, lng: -110.575,
      species: [S.enyo], papers: ['ibt', 'tox'] },
    { id: 'partida', kind: 'island', state: 'bcs', zoom: 12, name: 'Isla Partida', region: 'La Paz islands', lat: 24.560, lng: -110.390,
      species: [S.mitchellii, S.enyo], papers: ['ibt', 'tox'] },
    { id: 'espiritu', kind: 'island', state: 'bcs', zoom: 11, name: 'Isla Espíritu Santo', region: 'La Paz islands', lat: 24.470, lng: -110.350,
      species: [S.mitchellii, S.enyo], papers: ['ibt', 'tox', 'herp'] },
    { id: 'cerralvo', kind: 'island', state: 'bcs', zoom: 10, name: 'Isla Cerralvo', region: 'La Paz islands', lat: 24.255, lng: -109.888,
      species: [S.mitchellii, ['Crotalus enyo cerralvensis', 'Cerralvo Island rattlesnake', true]], papers: ['ibt', 'tox', 'wnan'] },
    // ── Florida (one general region; no island markers) ──
    { id: 'florida', kind: 'state', state: 'fl', name: 'Florida', region: 'Eastern diamondbacks on Gulf Coast islands',
      note: 'Young barrier islands on Florida’s Gulf Coast, a few thousand years old. Island diamondbacks show rapid venom change, with truncated life histories and myotoxin folded into the shift from juvenile to adult venom.',
      species: [S.adamanteus], papers: ['gbe', 'guedouar', 'skink'] }
  ];

  const el = document.getElementById('fieldmap');
  if (!el || typeof L === 'undefined') return;

  const byId = Object.fromEntries(PLACES.map(p => [p.id, p]));
  const PHOTOS = (window.PLACE_PHOTOS || []).filter(p => p.place === 'field' || byId[p.place]);
  const photosOf = id => PHOTOS.filter(p => p.place === id);
  const stateOf = p => p.place === 'field' ? 'baja' : byId[p.place].state;
  const shortName = pl => pl.name.replace(/ \(.*\)$/, '');
  const captionOf = p => {
    const pl = byId[p.place];
    return pl && pl.kind === 'island' && !p.caption.includes(shortName(pl)) ? `${p.caption} · ${shortName(pl)}` : p.caption;
  };
  const lbItem = p => ({ src: p.src, caption: captionOf(p) + (p.credit ? ` · Photo: ${p.credit}` : '') });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = window.matchMedia('(pointer: coarse)').matches;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const map = L.map(el, { scrollWheelZoom: false, dragging: !touch, tap: false });
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16, attribution: 'Imagery © Esri, Maxar, Earthstar Geographics · Boundaries © OpenStreetMap'
  }).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16, opacity: 0.6
  }).addTo(map);
  el.addEventListener('click', () => map.scrollWheelZoom.enable(), { once: true });

  const panel = document.getElementById('fm-panel');
  const chips = document.getElementById('fm-chips');
  const areaBar = document.getElementById('fm-areas');
  const filterBar = document.getElementById('gallery-filters');
  const gallery = document.getElementById('gallery');

  let area = 'baja';
  let current = null;

  // ── state shapes ───────────────────────────────────────────
  const base = { color: '#ffffff', weight: 1, opacity: 0.55, fillColor: '#ed8b22', fillOpacity: 0.08 };
  const hot = { weight: 2, opacity: 0.9, fillOpacity: 0.2 };
  const shapes = {};
  const stateBounds = {};
  Object.entries({ bc: 'bcpen', bcs: 'bcspen', fl: 'florida' }).forEach(([st, placeId]) => {
    const geom = window.STATE_SHAPES && window.STATE_SHAPES[st];
    if (!geom) return;
    const layer = L.geoJSON(geom, { style: base }).addTo(map);
    layer.bindTooltip(`${STATES[st]} · click to explore`, { sticky: true, className: 'fm-tip', direction: 'top' });
    layer.on('mouseover', () => layer.setStyle(hot));
    layer.on('mouseout', () => { if (current !== placeId) layer.setStyle(base); });
    layer.on('click', () => select(placeId));
    shapes[placeId] = layer;
    stateBounds[st] = layer.getBounds();
  });
  const copy = b => L.latLngBounds(b.getSouthWest(), b.getNorthEast());
  const areaBounds = {
    baja: stateBounds.bc && stateBounds.bcs ? copy(stateBounds.bc).extend(stateBounds.bcs)
          : L.latLngBounds(PLACES.filter(p => p.lat).map(p => [p.lat, p.lng])).pad(0.1),
    florida: stateBounds.fl ? copy(stateBounds.fl).pad(0.05) : L.latLngBounds([[25, -87.6], [31, -80]])
  };

  // ── island markers ─────────────────────────────────────────
  const markers = {};
  PLACES.filter(p => p.kind === 'island').forEach(p => {
    const icon = L.divIcon({ className: 'fm-marker', html: '<span></span>', iconSize: [18, 18] });
    const m = L.marker([p.lat, p.lng], { icon, title: p.name, keyboard: true, riseOnHover: true }).addTo(map);
    m.bindTooltip(p.name, { direction: 'top', offset: [0, -10], className: 'fm-tip' });
    m.on('click', () => select(p.id));
    markers[p.id] = m;
  });

  // ── chips, grouped by state ────────────────────────────────
  ['bc', 'bcs'].forEach(st => {
    const g = document.createElement('div');
    g.className = 'fm-chip-group';
    g.innerHTML = `<span class="fm-chip-label">${STATES[st]}</span>`;
    PLACES.filter(p => p.state === st).forEach(p => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'fm-chip' + (p.kind === 'state' ? ' fm-chip-state' : '');
      b.textContent = p.kind === 'state' ? 'Peninsula' : shortName(p).replace(/^Isla /, '');
      b.dataset.id = p.id;
      b.addEventListener('click', () => select(p.id));
      g.appendChild(b);
    });
    chips.appendChild(g);
  });

  // ── region switch ──────────────────────────────────────────
  const AREAS = { baja: 'Baja California', florida: 'Florida' };
  Object.entries(AREAS).forEach(([k, label]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'fm-area'; b.textContent = label; b.dataset.area = k;
    b.addEventListener('click', () => k === 'florida' ? select('florida') : (setArea('baja'), reset()));
    areaBar.appendChild(b);
  });
  function setArea(k) {
    area = k;
    areaBar.querySelectorAll('.fm-area').forEach(b => {
      b.classList.toggle('active', b.dataset.area === k);
      b.setAttribute('aria-pressed', b.dataset.area === k);
    });
    chips.hidden = k !== 'baja';
  }

  function fitTo(bounds, opts) {
    if (reduceMotion) map.fitBounds(bounds, opts); else map.flyToBounds(bounds, { ...opts, duration: 1.4 });
  }
  function panelPadding() {
    const wide = window.matchMedia('(min-width: 769px)').matches;
    return wide ? { paddingTopLeft: [20, 20], paddingBottomRight: [panel.offsetWidth + 34, 20] }
                : { paddingTopLeft: [10, 10], paddingBottomRight: [10, Math.round(el.clientHeight * 0.6)] };
  }

  function select(id) {
    const p = byId[id];
    current = id;
    setArea(p.state === 'fl' ? 'florida' : 'baja');

    Object.entries(markers).forEach(([k, m]) => m.getElement() && m.getElement().classList.toggle('active', k === id));
    chips.querySelectorAll('.fm-chip').forEach(c => c.classList.toggle('active', c.dataset.id === id));
    Object.entries(shapes).forEach(([k, s]) => s.setStyle(k === id ? hot : base));

    if (p.kind === 'island') {
      const wide = window.matchMedia('(min-width: 769px)').matches;
      const off = wide ? L.point(panel.offsetWidth / 2 + 7, 0) : L.point(0, el.clientHeight * 0.28);
      const target = map.unproject(map.project([p.lat, p.lng], p.zoom).add(off), p.zoom);
      if (reduceMotion) map.setView(target, p.zoom); else map.flyTo(target, p.zoom, { duration: 1.6 });
    } else if (shapes[id]) {
      fitTo(shapes[id].getBounds(), panelPadding());
    }

    const ph = photosOf(id);
    const sp = p.species.map(([sci, common, status]) => status === 'nd'
      ? `<li class="fm-nd"><em>${esc(sci)}</em> ?<span>${esc(common)}, known from the island but not detected in our surveys</span></li>`
      : `<li><em>${esc(sci)}</em><span>${esc(common)}${status ? ' <b class="fm-endemic">endemic</b>' : ''}</span></li>`).join('');
    const list = keys => keys.map(k => PAPERS[k]).map(x =>
      `<li><a href="${esc(x.url)}" target="_blank" rel="noreferrer">${esc(x.title)}</a><span>${esc(x.cite)}</span></li>`).join('');
    const papers = p.papers.filter(k => !PAPERS[k].note), notes = p.papers.filter(k => PAPERS[k].note);

    panel.innerHTML = `
      <button type="button" class="fm-close" aria-label="Close and show the whole region">&times;</button>
      <p class="fm-region">${esc(p.region)}</p>
      <h3>${esc(p.name)}</h3>
      ${p.note ? `<p class="fm-note">${esc(p.note)}</p>` : ''}
      ${ph.length ? `<div class="fm-photos">${ph.map((x, i) =>
        `<button type="button" class="fm-photo" data-i="${i}" aria-label="${esc(x.caption)}"><img src="${esc(x.thumb)}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
      <h4>Rattlesnakes</h4><ul class="fm-species">${sp}</ul>
      ${papers.length ? `<h4>Research</h4><ul class="fm-papers">${list(papers)}</ul>` : ''}
      ${notes.length ? `<h4>Natural history notes</h4><ul class="fm-papers">${list(notes)}</ul>` : ''}`;
    panel.classList.add('open');
    panel.scrollTop = 0;
    panel.querySelector('.fm-close').addEventListener('click', reset);
    panel.querySelectorAll('.fm-photo').forEach(b =>
      b.addEventListener('click', () => window.openLightbox(ph.map(lbItem), +b.dataset.i)));

    setFilter(p.state);
  }

  function reset() {
    current = null;
    panel.classList.remove('open');
    Object.values(markers).forEach(m => m.getElement() && m.getElement().classList.remove('active'));
    chips.querySelectorAll('.fm-chip').forEach(c => c.classList.remove('active'));
    Object.values(shapes).forEach(s => s.setStyle(base));
    setArea('baja');
    fitTo(areaBounds.baja);
  }

  // ── gallery, filtered by state ─────────────────────────────
  const FILTERS = { all: 'All', bc: 'Baja California', bcs: 'Baja California Sur', fl: 'Florida' };
  let filter = null;
  Object.entries(FILTERS).forEach(([k, label]) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'fm-chip'; b.textContent = label; b.dataset.f = k;
    b.addEventListener('click', () => setFilter(k));
    filterBar.appendChild(b);
  });
  function setFilter(k) {
    if (k === filter) return;
    filter = k;
    filterBar.querySelectorAll('.fm-chip').forEach(b => {
      b.classList.toggle('active', b.dataset.f === k);
      b.setAttribute('aria-pressed', b.dataset.f === k);
    });
    const shown = PHOTOS.filter(p => {
      const st = stateOf(p);
      return k === 'all' || st === k || (st === 'baja' && (k === 'bc' || k === 'bcs'));
    });
    const items = shown.map(lbItem);
    gallery.innerHTML = '';
    shown.forEach((p, i) => {
      const d = document.createElement('div');
      d.className = 'gallery-item' + (i % 9 === 0 ? ' gi-tall' : '');
      d.innerHTML = `<img src="${esc(p.thumb)}" alt="${esc(captionOf(p))}" loading="lazy" decoding="async" /><div class="gallery-overlay"><span>View</span></div>`;
      d.addEventListener('click', () => window.openLightbox(items, i));
      gallery.appendChild(d);
    });
  }

  setArea('baja');
  setFilter('all');
  map.fitBounds(areaBounds.baja);
  new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { map.invalidateSize(); map.fitBounds(areaBounds[area]); o.disconnect(); } }).observe(el);
  window.addEventListener('resize', () => { if (!current) map.fitBounds(areaBounds[area]); });
})();
