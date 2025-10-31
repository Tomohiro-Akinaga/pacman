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
class Player {
    position;
    velocity;
    radius;
    constructor({ position, velocity }) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 10;
    }
    draw() {
        if (!ctx)
            throw new Error("2D context not found");
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
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
const player = new Player({ position: { x: 40, y: 40 }, velocity: { x: 0, y: 0 } });
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
player.draw();
export {};
//# sourceMappingURL=index.js.map