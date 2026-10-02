const descent = document.querySelector(".descent-scene");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

if (descent) {
  let frame = 0;

  const updateDescent = () => {
    frame = 0;
    const rect = descent.getBoundingClientRect();
    const distance = Math.max(1, descent.offsetHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, -rect.top / distance));
    const exit = Math.min(1, Math.max(0, (progress - 0.7) / 0.3));

    descent.style.setProperty("--descent-progress", progress.toFixed(4));
    descent.style.setProperty("--sprite-exit", exit.toFixed(4));
  };

  const requestUpdate = () => {
    if (!frame) frame = requestAnimationFrame(updateDescent);
  };

  updateDescent();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}
