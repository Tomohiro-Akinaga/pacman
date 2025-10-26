var canvas = document.querySelector("canvas");
if (!canvas)
    throw new Error("Canvas not found");
var ctx = canvas.getContext("2d");
var Boundary = /** @class */ (function () {
    function Boundary(_a) {
        var position = _a.position;
        this.position = position;
        this.width = 40;
        this.height = 40;
    }
    Boundary.prototype.draw = function () {
        if (!ctx)
            throw new Error("2D context not found");
        ctx.fillStyle = "blue";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };
    return Boundary;
}());
var map = [
    ["-", "-", "-", "-", "-", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", " ", " ", " ", " ", "-"],
    ["-", "-", "-", "-", "-", "-"],
];
var boundaries = [];
map.forEach(function (raw, i) {
    raw.forEach(function (symbol, j) {
        switch (symbol) {
            case "-":
                boundaries.push(new Boundary({ position: { x: 40 * j, y: 40 * i } }));
                break;
        }
    });
});
boundaries.forEach(function (boundary) { return boundary.draw(); });
