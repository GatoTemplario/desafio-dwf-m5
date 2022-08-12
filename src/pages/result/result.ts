import { state } from "../../state";
const imgWinningStar  = require("url:../../images/winning-star.png");
const imgLosingStar   = require("url:../../images/losing-star.png");

export function initResult({goTo}){
    const divEl = document.createElement("div")
    const currentState = state.getState()
    
    function renderStar(){
        if(state.whoWins() == currentState.outcomes[0]){
            return imgWinningStar
        }else if (state.whoWins() == currentState.outcomes[2]){
            return imgLosingStar
        }else{
            return ""
        }
    }
    
    divEl.classList.add("result__container")
    
    divEl.innerHTML = ` 
        <div class="result__options-container">
            <ppt-el class="ppt result__option--inverted" id="1" checked=true variant="${currentState.currentGame.computerPlay}"></ppt-el>
            <ppt-el class="ppt result__option--normal" id="2" checked=true variant="${currentState.currentGame.playerPlay}"></ppt-el>
        </div>

        <div class="result__score-container">
            <div class="result__score-title-container">
                <img src="${renderStar()}" alt="" class="result__score-star">
                <h1 class="result__score-title">${state.whoWins()}</h1>
            </div>
            <div class="result__score-text-container">
                <h2 class="result__score-subtitle">Score</h2>
                <h3 class="result__text">Vos: ${currentState.history.jugador}</h3>
                <h3 class="result__text">Máquina: ${currentState.history.computadora}</h3>
            </div>
            <button-el class="result__button">Volver a jugar</button-el>
        </div>
    `

    const button = divEl.querySelector(".result__button");
    button?.addEventListener("click", () => {goTo("/game")});
    
    function renderColor(){
        if(state.whoWins() == currentState.outcomes[0]){
            divEl.style.backgroundColor = "rgba(0, 255, 0, 0.4)"
        }else if (state.whoWins() == currentState.outcomes[2]){
            divEl.style.backgroundColor = "rgba(255, 0, 0, 0.4)"
        }
    }
    
    setTimeout(()=>{
        const optionsContainer = divEl.querySelector(".result__options-container") as HTMLElement
        const scoreContainer   = divEl.querySelector(".result__score-container") as HTMLElement
        
        renderColor()
        optionsContainer.style.display = "none"
        scoreContainer.style.display   = "flex"
    },2000)

    return divEl
}