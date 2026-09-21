/* =========================================================
   HEADER — sticky border on scroll + mobile navigation drawer
   ========================================================= */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".nav-menu");

  if (!header || !burger || !menu) return;

  /* Show a hairline under the header only once the page has scrolled. */
  function syncStuckState() {
    header.classList.toggle("is-stuck", window.scrollY > 10);
  }

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
  }

  window.addEventListener("scroll", syncStuckState, { passive: true });
  syncStuckState();

  burger.addEventListener("click", function () {
    setMenu(!menu.classList.contains("is-open"));
  });

  /* Close the drawer after the visitor picks a section. */
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setMenu(false);
  });

  /* Close on Escape, and whenever the layout returns to desktop width. */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) setMenu(false);
  });
})();
