import { initRouter } from "./router"
import { initPPT } from "./components/PiedraPapelTijera/ppt-el"
import { initTimer}  from "./components/timer-el/timer"
import { initCircle } from "./components/timer-el/circle"
import { initButton } from "./components/button-el/button-el"

(()=>{
    const fondo = require("url:./images/fondo.png")
    const div   = document.querySelector(".root") as HTMLElement
    const body  = document.querySelector("body") as HTMLElement

    initPPT()
    initRouter(div)
    initTimer()
    initCircle()
    initButton()
    
    const auxDivEl = document.createElement("div")

    auxDivEl.classList.add("imagen-fondo__container")
    auxDivEl.innerHTML= `<img class="imagen-fondo__image" src="${fondo}" alt="">`
    body.appendChild(auxDivEl)
})()