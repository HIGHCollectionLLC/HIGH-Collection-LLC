const btn = document.getElementById("helloBtn");
const msg = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

btn.addEventListener("click", () => {
  msg.textContent = "Nice! Your JavaScript is working ✅";
});
