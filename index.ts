const canvas = document.querySelector("canvas");
if (!canvas) throw new Error("Canvas not found");

const ctx = canvas.getContext("2d");

class Boundary {
  position: { x: number; y: number };
  width: number;
  height: number;

  constructor({ position }) {
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

const boundary = new Boundary({ position: { x: 0, y: 0 } });

boundary.draw();
