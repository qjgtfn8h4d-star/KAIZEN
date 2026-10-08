(() => {
  "use strict";
  const IMG_DIR = "assets/images/products/";
  const $ = (s, r = document) => r.querySelector(s);
  const grid = $("#grid"), qIn = $("#q"), countEl = $("#count"), emptyEl = $("#empty");
  const modal = $("#modal");
  let filter = "todos", query = "", lastFocus = null;

  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const money = n => "$" + Number(n).toLocaleString("es-UY");
  const hasPrice = p => typeof p.transfer === "number" || typeof p.mp === "number";

  // ---------- WhatsApp ----------
  const waUrl = text => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const MSG_GENERAL = "Hola! Quiero consultar por una fragancia de Kaizen.";
  const MSG_ASK = "Hola! Estoy buscando una fragancia que no aparece en el catálogo de Kaizen. ¿Me pueden ayudar?";
  function productMsg(p) {
    const ml = p.ml ? ` de ${p.ml} ml` : "";
    const who = `${p.name} de ${p.brand}${ml}`;
    if (!hasPrice(p)) return `Hola! Me interesa el ${who} que vi en Kaizen. ¿Me pasan precio y disponibilidad?`;
    const parts = [];
    if (typeof p.transfer === "number") parts.push(`transferencia ${money(p.transfer)}`);
    if (typeof p.mp === "number") parts.push(`Mercado Pago ${money(p.mp)}`);
    return `Hola! Quiero comprar el ${who} que vi en Kaizen (${parts.join(" · ")}). ¿Sigue disponible?`;
  }
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = waUrl(a.dataset.msg === "ask" ? MSG_ASK : MSG_GENERAL);
    a.target = "_blank"; a.rel = "noopener";
  });

  // ---------- Datos del sitio ----------
  $("#loc").textContent = STORE_LOCATION;
  const ig = $("#ig");
  ig.href = `https://instagram.com/${INSTAGRAM_USERNAME}`;
  ig.textContent = "@" + INSTAGRAM_USERNAME;

  // ---------- Render ----------
  const specOf = p => [p.concentration, p.ml ? p.ml + " ml" : ""].filter(Boolean).join(" · ");
  function pricesHTML(p) {
    if (!hasPrice(p)) return `<div class="ask">Consultar</div>`;
    const t = typeof p.transfer === "number" ? `${money(p.transfer)} <small>UYU</small>` : "Consultar";
    const m = typeof p.mp === "number" ? `${money(p.mp)} UYU` : "Consultar";
    return `<div class="p1">${t}</div><div class="l1">Transferencia</div>
            <div class="p2">${m}</div><div class="l2">Mercado Pago · hasta ${MP_INSTALLMENTS} cuotas</div>`;
  }
  const imgHTML = (p, lazy = true) => p.image
    ? `<div class="ph"><img src="${IMG_DIR}${esc(p.image)}" alt="${esc(p.brand + " " + p.name)}" width="800" height="1000" ${lazy ? 'loading="lazy"' : ""} decoding="async"></div>`
    : `<div class="ph none"><span>Imagen próximamente</span></div>`;

  function cardHTML(p) {
    return `<article class="card" data-id="${esc(p.id)}">
      <div class="card-open" role="button" tabindex="0" aria-label="Ver ${esc(p.brand + " " + p.name)}">
        ${imgHTML(p)}
        <div class="card-t"><div class="b">${esc(p.brand)}</div><h3>${esc(p.name)}</h3><div class="spec">${esc(specOf(p))}</div></div>
        <div class="prices">${pricesHTML(p)}</div>
      </div>
      <a class="btn" href="${esc(waUrl(productMsg(p)))}" target="_blank" rel="noopener">Comprar</a>
    </article>`;
  }

  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -6% 0px" })
    : null;
  const reveal = el => io ? io.observe(el) : el.classList.add("in");

  function render() {
    const q = norm(query.trim());
    const list = PRODUCTS.filter(p =>
      (filter === "todos" || p.category === filter) &&
      (!q || norm(`${p.brand} ${p.name}`).includes(q)));
    grid.innerHTML = list.map(cardHTML).join("");
    grid.querySelectorAll(".card").forEach(reveal);
    emptyEl.hidden = list.length > 0;
    countEl.textContent = list.length
      ? `${list.length} ${list.length === 1 ? "fragancia" : "fragancias"}`
      : (filter === "disenador" && !q ? "Pronto sumaremos fragancias de diseñador." : "");
    if (!list.length && filter === "disenador" && !q) emptyEl.hidden = true;
  }

  document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
    filter = b.dataset.f;
    document.querySelectorAll(".filters button").forEach(x => x.classList.toggle("on", x === b));
    render();
  }));
  qIn.addEventListener("input", () => { query = qIn.value; render(); });

  // ---------- Modal ----------
  function openModal(id) {
    const p = PRODUCTS.find(x => x.id === id); if (!p) return;
    lastFocus = document.activeElement;
    $("#m-img").innerHTML = imgHTML(p, false);
    $("#m-brand").textContent = p.brand;
    $("#m-name").textContent = p.name;
    $("#m-spec").textContent = specOf(p);
    $("#m-prices").innerHTML = pricesHTML(p);
    $("#m-buy").href = waUrl(productMsg(p));
    modal.hidden = false; document.body.classList.add("lock");
    $(".m-x").focus();
  }
  function closeModal() {
    modal.hidden = true; document.body.classList.remove("lock");
    if (lastFocus) lastFocus.focus();
  }
  grid.addEventListener("click", e => {
    const open = e.target.closest(".card-open");
    if (open) openModal(open.closest(".card").dataset.id);
  });
  grid.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card-open")) {
      e.preventDefault(); openModal(e.target.closest(".card").dataset.id);
    }
  });
  modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

  // ---------- Header y menú ----------
  const hdr = $("#hdr"), nav = $("#nav"), burger = $("#burger");
  const onScroll = () => hdr.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  const setMenu = open => {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("lock", open);
    hdr.classList.toggle("solid", open || scrollY > 40);
  };
  burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });

  // ---------- Aparición suave de secciones ----------
  document.querySelectorAll(".rv").forEach(reveal);

  // ---------- Portada: fragancias destacadas ----------
  const feat = $("#feat");
  feat.innerHTML = FEATURED.map(id => PRODUCTS.find(p => p.id === id)).filter(p => p && p.image).map(p =>
    `<button class="ff" data-id="${esc(p.id)}" aria-label="Ver ${esc(p.brand + " " + p.name)}"><span class="ph"><img src="${IMG_DIR}${esc(p.image)}" alt="${esc(p.brand + " " + p.name)}" width="800" height="1000"></span><span class="fl">${esc(p.brand)}<b>${esc(p.name)}</b></span></button>`).join("");
  feat.addEventListener("click", e => { const b = e.target.closest(".ff"); if (b) openModal(b.dataset.id); });

  // ---------- Control de duplicados (aviso en consola) ----------
  const seen = new Set();
  PRODUCTS.forEach(p => { if (seen.has(p.id)) console.warn("KAIZEN: id duplicado en products.js →", p.id); seen.add(p.id); });

  render();
})();
