class Game {
  constructor() {
    this.ctx = undefined;
    this.bg = undefined;
    this.player = undefined;
  }
  startGame() {
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    const car = new Car(45, 100, 250, 400);
    this.player = car;
    const background = new Image();
    background.src = "/images/road.png";
    background.onload = () => {
      this.bg = background;
      this.updateCanvas();
      this.drawPlayer();
    };
  }
  
}
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const gamez = new Game();
    gamez.startGame();
  };
};
