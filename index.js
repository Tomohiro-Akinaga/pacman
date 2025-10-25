var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var Boundary = /** @class */ (function () {
    function Boundary(_a) {
        var position = _a.position;
        this.position = position;
        this.width = 40;
        this.height = 40;
    }
    Boundary.prototype.draw = function () {
        if (!ctx)
            throw new Error("Failed to get 2D context");
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    return Boundary;
}());
var boundary = new Boundary({ position: { x: 0, y: 0 } });
boundary.draw();
