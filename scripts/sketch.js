class MyLine {
    constructor (penColor, penWidth) {
        this.px = pwinMouseX;
        this.py = pwinMouseY;
        this.x = winMouseX;
        this.y = winMouseY;

        this.penColor = penColor
        this.penWidth = penWidth
    }

    show () {
        stroke(this.penColor);
        strokeWeight(this.penWidth);
        line(this.px, this.py + 170, this.x, this.y + 170);

    }
}