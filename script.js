<script>
  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // World Cup 2026 countdown
  (function worldCupCountdown() {
    const el = document.getElementById("wc-countdown");
    if (!el) return;

    const target = new Date(2026, 5, 11, 0, 0, 0);

    function tick() {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        el.textContent = "It’s World Cup time! 🏆";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);

      el.textContent = `${days} days, ${hours} hours, ${mins} minutes remaining`;
    }

    tick();
    setInterval(tick, 60 * 1000);
  })();

  // Snipcart: sync selects/inputs into item custom values
  (function wireProductSelectors() {
    const buttons = document.querySelectorAll(".add-to-cart.snipcart-add-item");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const sizeId = btn.getAttribute("data-size-select");
        const colorId = btn.getAttribute("data-color-select");
        const textId = btn.getAttribute("data-text-select");

        const sizeEl = sizeId ? document.getElementById(sizeId) : null;
        const colorEl = colorId ? document.getElementById(colorId) : null;
        const textEl = textId ? document.getElementById(textId) : null;

        if (sizeEl) btn.setAttribute("data-item-custom1-value", sizeEl.value);
        if (colorEl) btn.setAttribute("data-item-custom2-value", colorEl.value);

        if (textEl) {
          const v = textEl.value.trim();
          btn.setAttribute("data-item-custom3-value", v);
        }
      });
    });
  })();
</script>
if (sizeEl) btn.setAttribute("data-item-custom1-value", sizeEl.value);
if (colorEl) btn.setAttribute("data-item-custom2-value", colorEl.value);

const textId = btn.getAttribute("data-text-select");
const textEl = textId ? document.getElementById(textId) : null;
if (textEl) btn.setAttribute("data-item-custom3-value", textEl.value.trim());

