import { initWelcome } from "./pages/welcome/welcome";
import { initStart } from "./pages/start/start";
import { initGame } from "./pages/game/game";
import { initResult } from "./pages/result/result";

const BASE_PATH = "/Capitulo8-Desafio-final"

function isGitHubPages(){
    return location.host.includes("github.io")
}

export function initRouter(container : Element){
    const routes=[
        {
            path: /\/welcome/,
            component: initWelcome
        },
        {
            path: /\/start/,
            component: initStart
        },
        {
            path: /\/game/,
            component: initGame
        },
        {
            path: /\/result/,
            component: initResult
        },
]
    function goTo(path){
        const completePath = isGitHubPages()? BASE_PATH + path : path;
        history.pushState({},"", completePath);
        handleRoute(completePath)
    }
    function handleRoute(route){
        const newRoute = isGitHubPages()? route.replace(BASE_PATH, "") : route;
        for (const r of routes) {
            if(r.path.test(newRoute)){
                const el = r.component({goTo:goTo}) as any
                if(container.firstChild){
                    container.firstChild.remove()
                }
                container.appendChild(el)
            }
        }
    }
    if(location.pathname == "/"){
        goTo("/welcome")
    }else{
        handleRoute(location.pathname)
    }
    window.onpopstate = function (event){
        console.log("location: "+ document.location +", state: " + JSON.stringify(event.state))
        handleRoute(location.pathname)
    }
}