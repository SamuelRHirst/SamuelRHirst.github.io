/* ── Field-site map ─────────────────────────────────────────
   One marker per island at the island's centre, never at collecting sites
   (several of these rattlesnakes are single-island endemics).
   Edit ISLANDS / PAPERS below to change what the map shows.
   ─────────────────────────────────────────────────────────── */
(function () {
  const PAPERS = {
    ibt:   { cite: 'Hirst et al. 2025, Evolution', title: 'Island biogeography and competition drive rapid venom complexity evolution', url: 'https://doi.org/10.1093/evolut/qpaf074' },
    tox:   { cite: 'Hirst et al. 2026, Toxicon', title: 'Functional venom activity and antivenom neutralization across Baja California and Gulf islands', url: 'https://doi.org/10.1016/j.toxicon.2026.109266' },
    wnan:  { cite: 'Hirst et al. 2026, W. N. Am. Naturalist', title: 'Lack of an ontogenetic shift in Crotalus enyo cerralvensis venom', url: 'https://scholarsarchive.byu.edu/wnan/vol86/iss1/8/' },
    sauro: { cite: 'Hirst et al. 2023, Bull. Chicago Herp. Soc.', title: 'The Hunchback of Isla Piojo', url: 'pdf/Hirst_et_al_Sauromalus_hispidus_2023.pdf' },
    gbe:   { cite: 'Margres et al. 2026, Genome Biol. Evol.', title: 'Truncated life history underlies rapid local adaptation in island rattlesnake venom expression', url: 'https://doi.org/10.1093/gbe/evag131' },
    guedouar: { cite: 'Guedouar et al. 2026, Toxicon', title: 'Ontogenetic co-option of myotoxin expression variation in island eastern diamondback venoms', url: 'https://doi.org/10.1016/j.toxicon.2026.109094' },
    herp:  { cite: 'Franz-Chávez et al. 2023, Bull. Chicago Herp. Soc.', title: 'New herpetological records for islands in the Gulf of California', url: 'pdf/Franz_Chvez_et_al_2023.pdf' }
  };

  const AREAS = { gulf: 'Gulf of California', florida: 'Florida' };

  // species: [scientific, common, status]  status: true = endemic, 'nd' = present but not detected by us
  // area defaults to 'gulf'
  const ISLANDS = [
    { id: 'muerto', zoom: 13, name: 'Isla El Muerto', region: 'Northern Gulf', lat: 30.088, lng: -114.541,
      species: [['Crotalus pyrrhus', 'Southwestern speckled rattlesnake']],
      photos: [], papers: ['ibt', 'tox'] },
    { id: 'angel', zoom: 9, name: 'Isla Ángel de la Guarda', region: 'Midriff islands', lat: 29.290, lng: -113.390,
      note: 'The largest island in the study, about 936 km². Its speckled rattlesnake, C. angelensis, is a striking case of island gigantism, growing much larger than its mainland relatives, likely driven by its unusually large prey, the island’s giant spiny chuckwallas.',
      species: [['Crotalus angelensis', 'Ángel de la Guarda Island speckled rattlesnake', true],
                ['Crotalus ruber', 'Red diamond rattlesnake', 'nd']],
      photos: ['images/IMG_9039.jpg', 'images/DSC_0458.jpg', 'images/IMG_9021.jpg'], papers: ['ibt', 'tox'] },
    { id: 'smith', zoom: 13, name: 'Isla Smith (Coronado)', region: 'Bahía de los Ángeles', lat: 29.057, lng: -113.502,
      species: [['Crotalus pyrrhus', 'Southwestern speckled rattlesnake']],
      photos: ['images/Crotalus phyrrus isla smith 1.JPG'], papers: ['ibt', 'tox'] },
    { id: 'piojo', zoom: 14, name: 'Isla El Piojo', region: 'Bahía de los Ángeles', lat: 29.018, lng: -113.465,
      species: [['Crotalus thalassoporus', 'Louse Island speckled rattlesnake', true]],
      photos: [], papers: ['ibt', 'tox', 'sauro'] },
    { id: 'cabeza', zoom: 14, name: 'Isla Cabeza de Caballo', region: 'Bahía de los Ángeles', lat: 28.973, lng: -113.479,
      species: [['Crotalus polisi', 'Horsehead Island speckled rattlesnake', true]],
      photos: [], papers: ['ibt', 'tox'] },
    { id: 'danzante', zoom: 12, name: 'Isla Danzante', region: 'Bahía de Loreto', lat: 25.788, lng: -111.251,
      species: [['Crotalus ruber', 'Red diamond rattlesnake']],
      photos: [], papers: ['ibt', 'tox'] },
    { id: 'sanjose', name: 'Isla San José', region: 'La Paz islands', lat: 24.970, lng: -110.630,
      species: [['Crotalus mitchellii', 'Speckled rattlesnake'], ['Crotalus enyo', 'Baja California rattlesnake'],
                ['Crotalus ruber', 'Red diamond rattlesnake']],
      photos: ['images/Habitat 2 SJ.JPG', 'images/C. ruber 2 SJ F.JPG', 'images/C. mithcelli 1 SJ 2.JPG',
               'images/Hypsiglena SJ.JPG', 'images/Baja_2022-40.jpg', 'images/Baja_2022-59.jpg'],
      papers: ['ibt', 'tox', 'herp'] },
    { id: 'sanfrancisco', zoom: 13, name: 'Isla San Francisco', region: 'La Paz islands', lat: 24.825, lng: -110.575,
      species: [['Crotalus enyo', 'Baja California rattlesnake']],
      photos: ['images/Baja_2022-39.jpg'], papers: ['ibt', 'tox'] },
    { id: 'partida', zoom: 12, name: 'Isla Partida', region: 'La Paz islands', lat: 24.560, lng: -110.390,
      species: [['Crotalus mitchellii', 'Speckled rattlesnake'], ['Crotalus enyo', 'Baja California rattlesnake']],
      photos: [], papers: ['ibt', 'tox'] },
    { id: 'espiritu', name: 'Isla Espíritu Santo', region: 'La Paz islands', lat: 24.470, lng: -110.350,
      species: [['Crotalus mitchellii', 'Speckled rattlesnake'], ['Crotalus enyo', 'Baja California rattlesnake']],
      photos: ['images/C. enyo 2 ES 2.JPG', 'images/C. enyo 3 ES 1.JPG', 'images/C. mitchelli 1 ES.JPG',
               'images/B. rosaliae 2 ES 2.JPG', 'images/Boa 2 ES 1.JPG', 'images/Baja_2022-23.jpg', 'images/Baja_2022-30.jpg'],
      papers: ['ibt', 'tox', 'herp'] },
    { id: 'cerralvo', zoom: 10, name: 'Isla Cerralvo', region: 'La Paz islands', lat: 24.255, lng: -109.888,
      species: [['Crotalus mitchellii', 'Speckled rattlesnake'], ['Crotalus enyo cerralvensis', 'Cerralvo Island rattlesnake', true]],
      photos: [], papers: ['ibt', 'tox', 'wnan'] },

    { id: 'stgeorge', area: 'florida', zoom: 11, name: 'Little St. George Island', region: 'Apalachicola Bay, Florida', lat: 29.607, lng: -85.030,
      note: 'A young island (under 2,000 years old) about 7 km off the mouth of the Apalachicola River. Diamondbacks here stay smaller and keep juvenile-like venom as adults, a truncated life history that underlies rapid local adaptation.',
      species: [['Crotalus adamanteus', 'Eastern diamondback rattlesnake']],
      photos: [], papers: ['gbe'] },
    { id: 'anclote', area: 'florida', zoom: 13, name: 'Anclote Key', region: 'Gulf Coast barrier islands, Florida', lat: 28.184, lng: -82.849,
      note: 'One of three young barrier islands (about 3,000 to 5,000 years old). Island diamondbacks have folded myotoxin into their ontogenetic venom shift, with juveniles expressing it and adults largely losing it.',
      species: [['Crotalus adamanteus', 'Eastern diamondback rattlesnake']],
      photos: [], papers: ['guedouar'] },
    { id: 'honeymoon', area: 'florida', zoom: 13, name: 'Honeymoon Island', region: 'Gulf Coast barrier islands, Florida', lat: 28.071, lng: -82.832,
      note: 'One of three young barrier islands (about 3,000 to 5,000 years old). Island diamondbacks have folded myotoxin into their ontogenetic venom shift, with juveniles expressing it and adults largely losing it.',
      species: [['Crotalus adamanteus', 'Eastern diamondback rattlesnake']],
      photos: [], papers: ['guedouar'] },
    { id: 'caladesi', area: 'florida', zoom: 13, name: 'Caladesi Island', region: 'Gulf Coast barrier islands, Florida', lat: 28.026, lng: -82.82,
      note: 'One of three young barrier islands (about 3,000 to 5,000 years old). Island diamondbacks have folded myotoxin into their ontogenetic venom shift, with juveniles expressing it and adults largely losing it.',
      species: [['Crotalus adamanteus', 'Eastern diamondback rattlesnake']],
      photos: [], papers: ['guedouar'] }
  ];
  ISLANDS.forEach(i => { i.area = i.area || 'gulf'; });

  const el = document.getElementById('fieldmap');
  if (!el || typeof L === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const touch = window.matchMedia('(pointer: coarse)').matches;

  const map = L.map(el, {
    zoomControl: true,
    scrollWheelZoom: false,          // don't hijack page scrolling
    dragging: !touch,                // on phones, one-finger drags scroll the page
    tap: false,
    attributionControl: true
  });

  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16,
    attribution: 'Imagery © Esri, Maxar, Earthstar Geographics'
  }).addTo(map);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 16, opacity: 0.6
  }).addTo(map);

  // turn wheel zoom on once someone engages with the map
  el.addEventListener('click', () => map.scrollWheelZoom.enable(), { once: true });

  const bounds = {};
  Object.keys(AREAS).forEach(a =>
    bounds[a] = L.latLngBounds(ISLANDS.filter(i => i.area === a).map(i => [i.lat, i.lng])).pad(a === 'florida' ? 0.35 : 0.08));
  let area = 'gulf';
  const overview = () => bounds[area];
  map.fitBounds(overview());

  const panel   = document.getElementById('fm-panel');
  const chips   = document.getElementById('fm-chips');
  const areaBar = document.getElementById('fm-areas');
  const markers = {};

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const thumb = src => src.replace('images/', 'images/thumbs/');

  ISLANDS.forEach(isl => {
    const icon = L.divIcon({ className: 'fm-marker', html: '<span></span>', iconSize: [18, 18] });
    const m = L.marker([isl.lat, isl.lng], { icon, title: isl.name, keyboard: true, riseOnHover: true }).addTo(map);
    m.bindTooltip(isl.name, { direction: 'top', offset: [0, -10], className: 'fm-tip' });
    m.on('click', () => select(isl.id));
    markers[isl.id] = m;

    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'fm-chip';
    b.textContent = isl.name.replace(/^Isla /, '').replace(/ \(.*\)$/, '');
    b.dataset.id = isl.id;
    b.addEventListener('click', () => select(isl.id));
    chips.appendChild(b);
  });

  Object.entries(AREAS).forEach(([k, label]) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'fm-area';
    b.textContent = label;
    b.dataset.area = k;
    b.addEventListener('click', () => showArea(k));
    areaBar.appendChild(b);
  });

  function showArea(k, fly = true) {
    area = k;
    areaBar.querySelectorAll('.fm-area').forEach(b => {
      b.classList.toggle('active', b.dataset.area === k);
      b.setAttribute('aria-pressed', b.dataset.area === k);
    });
    chips.querySelectorAll('.fm-chip').forEach(c =>
      c.hidden = ISLANDS.find(i => i.id === c.dataset.id).area !== k);
    if (fly) reset();
  }
  showArea('gulf', false);

  function select(id) {
    const isl = ISLANDS.find(i => i.id === id);
    if (isl.area !== area) showArea(isl.area, false);
    Object.entries(markers).forEach(([k, m]) => m.getElement() && m.getElement().classList.toggle('active', k === id));
    chips.querySelectorAll('.fm-chip').forEach(c => c.classList.toggle('active', c.dataset.id === id));

    const zoom = isl.zoom || 11;
    // shift the view so the island sits in the part of the map the panel doesn't cover
    const wide = window.matchMedia('(min-width: 769px)').matches;
    const off = wide ? L.point(panel.offsetWidth / 2 + 7, 0) : L.point(0, el.clientHeight * 0.28);
    const target = map.unproject(map.project([isl.lat, isl.lng], zoom).add(off), zoom);
    if (reduceMotion) map.setView(target, zoom);
    else map.flyTo(target, zoom, { duration: 1.6 });

    const sp = isl.species.map(([sci, common, status]) => status === 'nd'
      ? `<li class="fm-nd"><em>${esc(sci)}</em> ?<span>${esc(common)}, known from the island but not detected in our surveys</span></li>`
      : `<li><em>${esc(sci)}</em><span>${esc(common)}${status ? ' <b class="fm-endemic">endemic</b>' : ''}</span></li>`).join('');
    const ph = isl.photos.slice(0, 6).map(p =>
      `<button type="button" class="fm-photo" data-src="${esc(p)}"><img src="${esc(thumb(p))}" alt="" loading="lazy"></button>`).join('');
    const pa = isl.papers.map(k => PAPERS[k]).map(p =>
      `<li><a href="${esc(p.url)}" target="_blank" rel="noreferrer">${esc(p.title)}</a><span>${esc(p.cite)}</span></li>`).join('');

    panel.innerHTML = `
      <button type="button" class="fm-close" aria-label="Close and show all islands">&times;</button>
      <p class="fm-region">${esc(isl.region)}</p>
      <h3>${esc(isl.name)}</h3>
      ${isl.note ? `<p class="fm-note">${esc(isl.note)}</p>` : ''}
      ${ph ? `<div class="fm-photos">${ph}</div>` : ''}
      <h4>Rattlesnakes</h4><ul class="fm-species">${sp}</ul>
      <h4>Research from this island</h4><ul class="fm-papers">${pa}</ul>`;
    panel.classList.add('open');
    panel.scrollTop = 0;

    panel.querySelector('.fm-close').addEventListener('click', reset);
    panel.querySelectorAll('.fm-photo').forEach(b =>
      b.addEventListener('click', () => window.openLightboxBySrc && window.openLightboxBySrc(b.dataset.src)));
  }

  function reset() {
    panel.classList.remove('open');
    Object.values(markers).forEach(m => m.getElement() && m.getElement().classList.remove('active'));
    chips.querySelectorAll('.fm-chip').forEach(c => c.classList.remove('active'));
    if (reduceMotion) map.fitBounds(overview()); else map.flyToBounds(overview(), { duration: 1.4 });
  }

  // tiles size themselves on first paint inside a lazily-shown section
  new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { map.invalidateSize(); map.fitBounds(overview()); o.disconnect(); } }).observe(el);
  window.addEventListener('resize', () => { if (!panel.classList.contains('open')) map.fitBounds(overview()); });
})();
