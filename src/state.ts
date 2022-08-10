export type Jugada = "Piedra" | "Papel" | "Tijera"
export type Game = { computerPlay: Jugada, playerPlay: Jugada }

export const state = {
  data: {
      currentGame: {
        computerPlay: "",
        playerPlay: "",
      },
      history: {
        jugador: 0,
        computadora: 0,
      },
      mapa: [
        { nombre: "Piedra", gana: "Tijera" },
        { nombre: "Papel" , gana: "Piedra" },
        { nombre: "Tijera", gana: "Papel" }
      ],
      outcomes: ["Ganaste", "Empate", "Perdiste"],
    },
  listeners: [],
  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb(newState);
    }
  },
  subscribe(callback: (any) => { any }) {
    this.listeners.push(callback);
  },
  getRandomPlay(){
    const randomNumer = Math.floor(Math.random()*3)
    return this.data.mapa[randomNumer].nombre
  },
  whoWins(){
    const currentGame  = this.data.currentGame
    const infoPlayerPlay = this.data.mapa.find( e => {
        return e.nombre == currentGame.playerPlay
    })
    
    if(currentGame.computerPlay == infoPlayerPlay?.nombre){
      // Empate
      return this.data.outcomes[1]
    }else if(currentGame.computerPlay == infoPlayerPlay?.gana){
      // Gana
      return this.data.outcomes[0]
    }else{
      // Pierde
        return this.data.outcomes[2]
    }
  },
  pushToHistory(){
    const currentState = this.getState();

    if(this.whoWins() == this.data.outcomes[0]){
      currentState.history.jugador++
    }else if(this.whoWins() == this.data.outcomes[2]){
      currentState.history.computadora++
    }
    this.setState(currentState)
  },
  setGame(move: Jugada) {
    const currentState = this.getState();
    const randomPlay = this.getRandomPlay() as Jugada

    currentState.currentGame.playerPlay   = move;
    currentState.currentGame.computerPlay = randomPlay;

    this.pushToHistory()
  },
};