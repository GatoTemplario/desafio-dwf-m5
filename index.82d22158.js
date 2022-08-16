function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequire1256;function r({goTo:e}){const t=document.createElement("div");t.classList.add("welcome__container"),t.innerHTML='\n    <div class="welcome__title-container">\n        <h1 class="welcome__title">Piedra</h1>\n        <h1 class="welcome__title">Papel\n        <span class="welcome__span">ó </span>\n        </h1>\n        <h1 class="welcome__title">Tijera</h1>\n    </div>\n    <div class="welcome__container-button">\n        <button-el class="welcome__button">Empezar</button-el>\n    </div>\n    <div class="welcome__container-options">\n        <ppt-el class="welcome__option" checked=true variant="Tijera"></ppt-el>\n        <ppt-el class="welcome__option" checked=true variant="Papel"></ppt-el>\n        <ppt-el class="welcome__option" checked=true variant="Piedra"></ppt-el>\n    </div>\n    ';return t.querySelector(".welcome__button")?.addEventListener("click",(()=>{e("/start")})),t}function s({goTo:e}){const t=document.createElement("div");t.classList.add("start__container"),t.innerHTML='\n    <p class="start__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>\n    <div class="start__container-button">\n      <button-el class="start__button">¡Jugar!</button-el>\n    </div>\n    <div class="start__container-options">\n        <ppt-el class="start__option" checked=true variant="Tijera"></ppt-el>\n        <ppt-el class="start__option" checked=true variant="Papel"></ppt-el>\n        <ppt-el class="start__option" checked=true variant="Piedra"></ppt-el>\n    ';return t.querySelector(".start__button")?.addEventListener("click",(()=>{e("/game")})),t}null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire1256=o),o.register("7PhYn",(function(t,n){var a,o;e(t.exports,"resolve",(()=>o),(e=>o=e)),e(t.exports,"register",(()=>a),(e=>a=e));var r={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("7PhYn").register(JSON.parse('{"di8mO":"index.82d22158.js","bXWWy":"winning-star.338ce7c5.png","bxTtQ":"losing-star.20502957.png","3Lfnw":"piedra.790facdd.png","kZKib":"papel.c102b8b9.png","5TSXz":"tijera.4d455951.png","kgAqW":"fondo.554a4660.png"}'));const i={data:{currentGame:{computerPlay:"",playerPlay:""},history:{jugador:0,computadora:0},mapa:[{nombre:"Piedra",gana:"Tijera"},{nombre:"Papel",gana:"Piedra"},{nombre:"Tijera",gana:"Papel"}],outcomes:["Ganaste","Empate","Perdiste"]},listeners:[],initState(){const e=localStorage.getItem("saved-state");this.setState(JSON.parse(e))},getState(){return this.data},setState(e){this.data=e;for(const t of this.listeners)t(e);localStorage.setItem("saved-state",JSON.stringify(e))},subscribe(e){this.listeners.push(e)},getRandomPlay(){const e=Math.floor(3*Math.random());return this.data.mapa[e].nombre},whoWins(){const e=this.data.currentGame,t=this.data.mapa.find((t=>t.nombre==e.playerPlay));return e.computerPlay==t?.nombre?this.data.outcomes[1]:e.computerPlay==t?.gana?this.data.outcomes[0]:this.data.outcomes[2]},pushToHistory(){const e=this.getState();this.whoWins()==this.data.outcomes[0]?e.history.jugador++:this.whoWins()==this.data.outcomes[2]&&e.history.computadora++,this.setState(e)},setGame(e){const t=this.getState(),n=this.getRandomPlay();t.currentGame.playerPlay=e,t.currentGame.computerPlay=n,this.pushToHistory()}};function c({goTo:e}){const t=document.createElement("div");t.classList.add("game__container"),t.innerHTML='\n        <circle-el class="game__circle"></circle-el>\n        <div class="game__container-options">\n            <ppt-el class="game__option" variant="Tijera"></ppt-el>\n            <ppt-el class="game__option" variant="Papel"></ppt-el>\n            <ppt-el class="game__option" variant="Piedra"></ppt-el>\n        </div>\n    ';const n=t.getElementsByTagName("ppt-el"),a=Array.from(n);var o=3;for(let e=0;e<a.length;e++){const t=a[e];t.setAttribute("id",e.toString()),t.addEventListener("click",(()=>{a.filter((e=>e!=t)).map((e=>{const t=e.shadowRoot?.querySelector(".imagen");"imagen image-grey"!=t.className&&(t.className="imagen image-grey")})),o=e}))}return setTimeout((()=>{3!==o?(!function(){const e=document.getElementById(o.toString())?.getAttribute("variant");i.setGame(e)}(),e("/result")):e("/start")}),3500),t}var l;o.register("kVZsc",(function(t,n){var a;e(t.exports,"getBundleURL",(()=>a),(e=>a=e));var o={};function r(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return r(e[2])}return"/"}(),o[e]=t),t}})),l=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("bXWWy");var d;function p({goTo:e}){const t=document.createElement("div"),n=i.getState();t.classList.add("result__container"),t.innerHTML=` \n        <div class="result__options-container">\n            <ppt-el class="ppt result__option--inverted" id="1" checked=true variant="${n.currentGame.computerPlay}"></ppt-el>\n            <ppt-el class="ppt result__option--normal" id="2" checked=true variant="${n.currentGame.playerPlay}"></ppt-el>\n        </div>\n\n        <div class="result__score-container">\n            <div class="result__score-title-container">\n                <img src="${i.whoWins()==n.outcomes[0]?l:i.whoWins()==n.outcomes[2]?d:""}" alt="" class="result__score-star">\n                <h1 class="result__score-title">${i.whoWins()}</h1>\n            </div>\n            <div class="result__score-text-container">\n                <h2 class="result__score-subtitle">Score</h2>\n                <h3 class="result__text">Vos: ${n.history.jugador}</h3>\n                <h3 class="result__text">Máquina: ${n.history.computadora}</h3>\n            </div>\n            <button-el class="result__button--jugar">Volver a jugar</button-el>\n            <button-el class="result__button--reiniciar">Reiniciar score</button-el>\n        </div>\n    `;t.querySelector(".result__button--jugar")?.addEventListener("click",(()=>{e("/game")}));return t.querySelector(".result__button--reiniciar")?.addEventListener("click",(()=>{n.history.jugador=0,n.history.computadora=0,i.setState(n),e("/start")})),setTimeout((()=>{const e=t.querySelector(".result__options-container"),a=t.querySelector(".result__score-container");i.whoWins()==n.outcomes[0]?t.style.backgroundColor="rgba(0, 255, 0, 0.4)":i.whoWins()==n.outcomes[2]&&(t.style.backgroundColor="rgba(255, 0, 0, 0.4)"),e.style.display="none",a.style.display="flex"}),2e3),t}d=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("bxTtQ");function u(){return location.host.includes("gatotemplario.github.io")}var m;m=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("3Lfnw");var h;h=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("kZKib");var g;g=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("5TSXz"),o.register("arK5X",(function(e,t){e.exports=o("kVZsc").getBundleURL("di8mO")+o("7PhYn").resolve("kgAqW")})),(()=>{const e=o("arK5X"),t=document.querySelector(".root"),n=document.querySelector("body");i.initState(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render();const e=document.createElement("style");e.innerHTML="\n                .imagen{\n                    width: 100%;\n                }\n                .image-coloured{\n                    filter: grayscale(0%);\n                }\n                .image-grey{\n                    filter: grayscale(100%);\n                }\n                .container{\n                    width: 100%;\n                }\n            ",this.shadow.appendChild(e);const t=this.shadow.querySelector(".image-grey");t?.addEventListener("click",(()=>{t.className="imagen image-grey",t.className="imagen image-coloured"}))}render(){const e=document.createElement("div"),t=document.createElement("img");let n=this.getAttribute("checked")||!1;e.classList.add("container"),t.className=n?"imagen image-coloured":"imagen image-grey";let a=this.getAttribute("variant")||"Piedra";t.src="Piedra"==a?m:"Papel"==a?h:g,e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("ppt-el",e)}(),function(e){const t=[{path:/\/welcome/,component:r},{path:/\/start/,component:s},{path:/\/game/,component:c},{path:/\/result/,component:p}];function n(e){const t=u()?"/desafio-dwf-m5"+e:e;history.pushState({},"",t),a(t)}function a(a){const o=u()?a.replace("/desafio-dwf-m5",""):a;for(const a of t)if(a.path.test(o)){const t=a.component({goTo:n});e.firstChild&&e.firstChild.remove(),e.appendChild(t)}}"/"==location.pathname||"/desafio-dwf-m5/"==location.pathname?n("/welcome"):a(location.pathname),window.onpopstate=function(e){console.log("location: "+document.location+", state: "+JSON.stringify(e.state)),a(location.pathname)}}(t),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.initCountdown()}render(){const e=document.createElement("div"),t=document.createElement("p");e.appendChild(t),this.shadow.appendChild(e)}initCountdown(){const e=this.shadow.querySelector("p");let t=3;e.innerHTML=`Tiempo: ${t}`;const n=setInterval((()=>{t-=1,e.innerHTML=`Tiempo: ${t}`,t<1&&clearInterval(n)}),1e3)}}customElements.define("timer-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("div"),t=document.createElement("style");e.innerHTML='\n            <div class="base-timer">\n                <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">\n                    <g class="base-timer__circle">\n                        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />\n                        <path\n                        id="base-timer-path-remaining"\n                        stroke-dasharray="283"\n                        class="base-timer__path-remaining green"\n                        d="\n                            M 50, 50\n                            m -45, 0\n                            a 45,45 0 1,0 90,0\n                            a 45,45 0 1,0 -90,0\n                        "\n                        ></path>\n                    </g>\n                </svg>\n                <span class="base-timer__label">\n                    <timer-el></timer-el>\n                </span>\n            </div>\n            ',t.innerHTML="\n            .base-timer {\n                position: relative;\n                height: 300px;\n                width: 300px;\n            }\n            .base-timer__circle {\n                fill: none;\n                stroke: none;\n            }\n            .base-timer__path-elapsed {\n                stroke-width: 7px;\n                stroke: grey;\n            }\n            .base-timer__label {\n                position: absolute;\n                \n                /* Size should match the parent container */\n                width: 300px;\n                height: 300px;\n                \n                /* Keep the label aligned to the top */\n                top: 0;\n                \n                /* Create a flexible box that centers content vertically and horizontally */\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            \n                /* Sort of an arbitrary number; adjust to your liking */\n                font-size: 48px;\n            }\n            .base-timer__path-remaining {\n                /* Just as thick as the original ring */\n                stroke-width: 7px;\n            \n                /* Rounds the line endings to create a seamless circle */\n                stroke-linecap: round;\n            \n                /* Makes sure the animation starts at the top of the circle */\n                transform: rotate(90deg);\n                transform-origin: center;\n            \n                /* One second aligns with the speed of the countdown timer */\n                transition: 1s linear all;\n            \n                /* Allows the ring to change color when the color value updates */\n                stroke: currentColor;\n            }\n            \n            .base-timer__svg {\n                /* Flips the svg and makes the animation to move left-to-right */\n                transform: scaleX(-1);\n            }\n            ",this.startTimer(),e.appendChild(t),this.shadow.appendChild(e)}startTimer(){var e=0;const t=setInterval((()=>{const n=(3-++e)/3,a=`${(283*(n-1/3*(1-n))).toFixed(0)} 283`;this.shadow.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray",a),e>=3&&clearInterval(t)}),1e3)}}customElements.define("circle-el",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("style"),n=this.textContent;e.innerHTML=`\n                <button class="button">${n}</button>\n            `,t.innerHTML="\n                .container{\n                    height: 100%;\n                }\n                .button{\n                    width: 322px;\n                    height: 100%;\n                    background-color: #006CFC;\n                    border: solid;\n                    border-color: #001997;\n                    border-radius: 10px;\n                    font-family: inherit;\n                    font-size: inherit;\n                    color: white;\n                }\n                @media(min-width: 769px){\n                    .button{\n                        width: 422px;\n                    }\n                }\n            ",e.appendChild(t),this.shadow.appendChild(e)}}customElements.define("button-el",e)}();const a=document.createElement("div");a.classList.add("imagen-fondo__container"),a.innerHTML=`<img class="imagen-fondo__image" src="${e}" alt="">`,n.appendChild(a)})();
//# sourceMappingURL=index.82d22158.js.map
