/* =========================================================
   FOOTER — print the current Jalali year in the copyright line
   Approximate conversion: good enough for a year label, since the
   Gregorian year only shifts around Nowruz (≈ March 21).
   ========================================================= */
(function () {
  "use strict";

  var slot = document.getElementById("current-year");
  if (!slot) return;

  var now = new Date();
  var gYear = now.getFullYear();
  var gMonth = now.getMonth() + 1;
  var gDay = now.getDate();

  var afterNowruz = gMonth > 3 || (gMonth === 3 && gDay >= 21);
  var jYear = afterNowruz ? gYear - 621 : gYear - 622;

  slot.textContent = jYear.toLocaleString("fa-IR", { useGrouping: false });
})();
