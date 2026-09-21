/* =========================================================
   REVEAL — fade content in as it enters the viewport
   Elements get .rv on load and .rv.in once seen (see base.css).
   ========================================================= */
(function () {
  "use strict";

  /* Everything that should animate in, in document order. */
  var SELECTOR = [
    "section > .wrap > *",
    ".feature",
    ".platform",
    ".step",
    ".license-card",
    ".problem-card"
  ].join(",");

  var targets = document.querySelectorAll(SELECTOR);
  if (!targets.length) return;

  /* Respect the visitor's motion preference — show everything at once. */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px" }
  );

  targets.forEach(function (el, index) {
    el.classList.add("rv");
    /* Stagger siblings slightly so grids cascade instead of popping. */
    el.style.transitionDelay = (index % 5) * 50 + "ms";
    observer.observe(el);
  });
})();
