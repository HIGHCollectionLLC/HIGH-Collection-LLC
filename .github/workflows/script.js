const btn = document.getElementById("helloBtn");
const msg = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

btn.addEventListener("click", () => {
  msg.textContent = "Nice! Your JavaScript is working ✅";
});
// ===== World Cup 2026 Countdown (updates automatically) =====
(function worldCupCountdown() {
  // FIFA World Cup 2026 opening day (approx): June 11, 2026
  // We’ll count down to 2026-06-11 at 00:00 local time.
  const target = new Date(2026, 5, 11, 0, 0, 0); // month is 0-based: 5 = June

  function update() {
    const el = document.getElementById("wc-countdown");
    if (!el) return;

    const now = new Date();
    const diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      el.textContent = "World Cup 2026 is here! ⚽🔥";
      return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    el.textContent = `${days} days, ${hours} hours, ${minutes} minutes remaining until World Cup 2026.`;
  }

  update();
  // Update every minute (always current)
  setInterval(update, 60 * 1000);
})();
