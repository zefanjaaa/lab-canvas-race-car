class Game {
  constructor() {
    this.ctx = undefined;
    this.bg = undefined;
    this.player = undefined;
    this.obstacle = undefined;
    this.frame = 0;
    this.myObstacles = [];
  }
  startGame() {
    const canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    const car = new Car(100, 100, 250, 400);
    const block1 = new Block()
    this.player = car;
    this.obstacle = block1;
    const background = new Image();
    background.src = "/images/road.png";
    background.onload = () => {
      this.bg = background;
      this.updateCanvas();
      this.drawPlayer();
      this.drawObstacle();
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

  drawObstacle() {
    this.myObstacles.forEach((block) => {
      this.ctx.drawImage(
        this.obstacle.block,
        block.posX,
        block.posY,
        block.width,
        block.height
      );
      if (block.posY > 501) {
        this.myObstacles.shift();
      }
    });
  }

  updateCanvas() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, 500, 700);
      this.ctx.drawImage(this.bg, 0, 0, 500, 700);
      this.drawPlayer();

      this.frame += 5;
      if (this.frame % 120 === 0) {
        let blockk = Math.random() * 410;
        const newBlock = new Block(40, 40, blockk, 0);
        this.myObstacles.push(newBlock);
      }
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

class Block {
  constructor(height, width, posX, posY) {
    this.height = height;
    this.width = width;
    this.posX = posX;
    this.posY = posY;

    this.block = this.createBlock();
  }

  imageBlock() {
    
  }
  createBlock() {
    
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
