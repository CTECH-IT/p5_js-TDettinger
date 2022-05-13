class MyLine {
    constructor () {
        this.px = pwinMouseX;
        this.py = pwinMouseY;
        this.x = winMouseX;
        this.y = winMouseY;
    }

    show () {
        stroke(225);
        line(this.px, this.py, this.x, this.y);

    }
}