"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas = document.querySelector("canvas");
if (!canvas)
    throw new Error("Canvas not found");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
class Boundary {
    position;
    width;
    height;
    static width = 40;
    static height = 40;
    constructor({ position }) {
        this.position = position;
        this.width = 40;
        this.height = 40;
    }
    draw() {
        if (!ctx)
            throw new Error("2D context not found");
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}
const map = [
    ["-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", " ", "-", "-", " ", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-"],
];
const boundaries = [];
map.forEach((raw, i) => {
    raw.forEach((symbol, j) => {
        switch (symbol) {
            case "-":
                boundaries.push(new Boundary({ position: { x: Boundary.width * j, y: Boundary.height * i } }));
                break;
        }
    });
});
boundaries.forEach((boundary) => boundary.draw());
//# sourceMappingURL=index.js.map