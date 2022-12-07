class Game {
  constructor() {
    this.ctx = undefined;
    this.bg = undefined;
    this.player = undefined;
  }
  startGame() {
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    const car = new Car(100, 100, 250, 400);
    this.player = car;
    const background = new Image();
    background.src = "/images/road.png";
    background.onload = () => {
      this.bg = background;
      this.updateCanvas();
      this.drawPlayer();
    };
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.player.img,
      this.player.posX - this.player.width / 2,
      this.player.posY,
      this.player.width,
      this.player.height
    );
  }
  drawObstacle() {}
  updateCanvas() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, 500, 700);
      this.ctx.drawImage(this.bg, 0, 0, 500, 700);
      this.drawPlayer();
    }, 20);
  }
}

class Car {
  constructor(height, width, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.img = this.createCar();
  }
  createCar() {
    const car = new Image();
    car.src = "/images/car.png";
    return car;
  }

  moveRight() {
    this.posX += 12;
  }
  moveLeft() {
    this.posX -= 12;
  }
  move(event) {
    switch (event) {
      case "ArrowRight":
        this.moveRight();
        break;

      case "ArrowLeft":
        this.moveLeft();
        break;
    }
  }
}
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const gamez = new Game();
    gamez.startGame();
    document.addEventListener("keydown", (e) => {
      gamez.player.move(e.key);
    });
  };
};
