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
    herp:  { cite: 'Franz-Chávez et al. 2023, Bull. Chicago Herp. Soc.', title: 'New herpetological records for islands in the Gulf of California', url: 'pdf/Franz_Chvez_et_al_2023.pdf' }
  };

  // species: [scientific, common, endemic?]
  const ISLANDS = [
    { id: 'muerto', zoom: 13, name: 'Isla El Muerto', region: 'Northern Gulf', lat: 30.088, lng: -114.541,
      species: [['Crotalus pyrrhus', 'Southwestern speckled rattlesnake']],
      photos: [], papers: ['ibt', 'tox'] },
    { id: 'angel', zoom: 9, name: 'Isla Ángel de la Guarda', region: 'Midriff islands', lat: 29.290, lng: -113.390,
      note: 'The largest island in the study, about 936 km².',
      species: [['Crotalus angelensis', 'Ángel de la Guarda Island speckled rattlesnake', true]],
      photos: ['images/IMG_9039.jpg', 'images/DSC_0458.jpg'], papers: ['ibt', 'tox'] },
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
      photos: [], papers: ['ibt', 'tox', 'wnan'] }
  ];

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

  const overview = L.latLngBounds(ISLANDS.map(i => [i.lat, i.lng])).pad(0.08);
  map.fitBounds(overview);

  const panel   = document.getElementById('fm-panel');
  const chips   = document.getElementById('fm-chips');
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

  function select(id) {
    const isl = ISLANDS.find(i => i.id === id);
    Object.entries(markers).forEach(([k, m]) => m.getElement() && m.getElement().classList.toggle('active', k === id));
    chips.querySelectorAll('.fm-chip').forEach(c => c.classList.toggle('active', c.dataset.id === id));

    const zoom = isl.zoom || 11;
    // shift the view so the island sits in the part of the map the panel doesn't cover
    const wide = window.matchMedia('(min-width: 769px)').matches;
    const off = wide ? L.point(panel.offsetWidth / 2 + 7, 0) : L.point(0, el.clientHeight * 0.28);
    const target = map.unproject(map.project([isl.lat, isl.lng], zoom).add(off), zoom);
    if (reduceMotion) map.setView(target, zoom);
    else map.flyTo(target, zoom, { duration: 1.6 });

    const sp = isl.species.map(([sci, common, endemic]) =>
      `<li><em>${esc(sci)}</em><span>${esc(common)}${endemic ? ' <b class="fm-endemic">endemic</b>' : ''}</span></li>`).join('');
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
      <h4>Rattlesnakes sampled</h4><ul class="fm-species">${sp}</ul>
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
    if (reduceMotion) map.fitBounds(overview); else map.flyToBounds(overview, { duration: 1.4 });
  }

  // tiles size themselves on first paint inside a lazily-shown section
  new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { map.invalidateSize(); map.fitBounds(overview); o.disconnect(); } }).observe(el);
  window.addEventListener('resize', () => { if (!panel.classList.contains('open')) map.fitBounds(overview); });
})();
