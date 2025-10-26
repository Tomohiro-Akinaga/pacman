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

const map = [
  ["-", "-", "-", "-", "-", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", " ", " ", " ", " ", "-"],
  ["-", "-", "-", "-", "-", "-"],
];

const boundaries: Boundary[] = [];

map.forEach((raw, i) => {
  raw.forEach((symbol, j) => {
    switch (symbol) {
      case "-":
        boundaries.push(new Boundary({ position: { x: 40 * j, y: 40 * i } }));
        break;
    }
  });
});

boundaries.forEach((boundary) => boundary.draw());
