import { Jugada, state } from "../../state";

export function initGame({goTo}){
    const divEl = document.createElement("div") as HTMLElement;
    
    divEl.classList.add("game__container");
    divEl.innerHTML = `
        <circle-el class="game__circle"></circle-el>
        <div class="game__container-options">
            <ppt-el class="game__option" variant="Tijera"></ppt-el>
            <ppt-el class="game__option" variant="Papel"></ppt-el>
            <ppt-el class="game__option" variant="Piedra"></ppt-el>
        </div>
    `;

    const htmlElements = divEl.getElementsByTagName("ppt-el")
    const setDeOptions = Array.from(htmlElements)
    var choosenID = 0
    
    for (let i = 0; i < setDeOptions.length; i++) {
        const element = setDeOptions[i];
        
        element.setAttribute("id",i.toString())
        element.addEventListener("click", () => {
            const optionsRestantes = setDeOptions.filter( el => {
                return el != element
            })
            optionsRestantes.map( el => {
                const options = el.shadowRoot?.querySelector(".imagen") as any
                if (options.className != "imagen image-grey"){
                    options.className  = "imagen image-grey"
                }
            })
            choosenID = i
        })
    }
    function setGame(){
        const optionChoosen = document.getElementById(choosenID.toString())
        const myPlay = optionChoosen?.getAttribute("variant") as Jugada

        state.setGame(myPlay)
    }
    setTimeout( () => {
        setGame()
        goTo("/result")
    }, 3500)

    return divEl;
}