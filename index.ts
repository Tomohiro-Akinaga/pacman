const canvas = document.querySelector("canvas");
if (!canvas) throw new Error("Canvas not found");

const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// Make canvas focusable for keyboard events
canvas.focus();
canvas.addEventListener("click", () => canvas.focus());

class Boundary {
  position: { x: number; y: number };
  width: number;
  height: number;

  static width = 40;
  static height = 40;
  constructor({ position }: { position: { x: number; y: number } }) {
    this.position = position;
    this.width = 40;
    this.height = 40;
  }

  draw() {
    if (!ctx) throw new Error("2D context not found");
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

class Player {
  position: { x: number; y: number };
  velocity: { x: number; y: number };
  radius: number;

  constructor({ position, velocity }: { position: { x: number; y: number }; velocity: { x: number; y: number } }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 15;
  }

  draw() {
    if (!ctx) throw new Error("2D context not found");
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

const map = [
  ["-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", "-", "-", " ", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-"],
];

const boundaries: Boundary[] = [];
const player: Player = new Player({
  position: { x: Boundary.width + Boundary.width / 2, y: Boundary.height + Boundary.height + 2 },
  velocity: { x: 0, y: 0 },
});

map.forEach((raw, i) => {
  raw.forEach((symbol, j) => {
    switch (symbol) {
      case "-":
        boundaries.push(new Boundary({ position: { x: Boundary.width * j, y: Boundary.height * i } }));
        break;
    }
  });
});

function animate() {
  requestAnimationFrame(animate);
  player.update();
}

animate();

boundaries.forEach((boundary) => boundary.draw());

player.draw();

window.addEventListener("keydown", ({ key }) => {
  switch (key) {
    case "w":
      player.velocity.y = -5;
      break;
    case "a":
      player.velocity.x = -5;
      break;
    case "s":
      player.velocity.y = 5;
      break;
    case "d":
      player.velocity.x = 5;
      break;
  }
});

window.addEventListener("keyup", ({ key }) => {
  switch (key) {
    case "w":
    case "s":
      player.velocity.y = 0;
      break;
    case "a":
    case "d":
      player.velocity.x = 0;
      break;
  }
});
