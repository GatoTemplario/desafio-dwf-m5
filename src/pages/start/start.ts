export function initStart({ goTo }) {
  const divEl = document.createElement("div");

  divEl.classList.add("start__container");
  divEl.innerHTML = `
    <p class="start__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
    <div class="start__container-button">
      <button-el class="start__button">¡Jugar!</button-el>
    </div>
    <div class="start__container-options">
        <ppt-el class="start__option" checked=true variant="Tijera"></ppt-el>
        <ppt-el class="start__option" checked=true variant="Papel"></ppt-el>
        <ppt-el class="start__option" checked=true variant="Piedra"></ppt-el>
    `;

  const button = divEl.querySelector(".start__button");
  button?.addEventListener("click", () => {goTo("/game")});
  
  return divEl;
}
