export function initWelcome({goTo}){
    const divEl = document.createElement("div")

    divEl.classList.add("welcome__container")
    divEl.innerHTML = `
    <div class="welcome__title-container">
        <h1 class="welcome__title">Piedra</h1>
        <h1 class="welcome__title">Papel
        <span class="welcome__span">ó </span>
        </h1>
        <h1 class="welcome__title">Tijera</h1>
    </div>
    <button-el class="welcome__button">Empezar</button-el>
    <div class="welcome__container-options">
        <ppt-el class="welcome__option" checked=true variant="Tijera"></ppt-el>
        <ppt-el class="welcome__option" checked=true variant="Papel"></ppt-el>
        <ppt-el class="welcome__option" checked=true variant="Piedra"></ppt-el>
    </div>
    `
    const button = divEl.querySelector(".welcome__button")
    button?.addEventListener("click",()=>{ goTo("/start") })
    
    return divEl
}
