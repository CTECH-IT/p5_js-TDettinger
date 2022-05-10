function setup() {
    let dC = drawingContext;

    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('myContainer');

    dC.shadowOffsetX = 5;
    dC.shadowOffsetY = -5;
    dC.shadowBlur = 40;
    dC.shadowColor = "black";
    background(200);
    ellipse(150, 150, 100, 100,);
    ellipse(150, 250, 100, 100);
}

function draw() {
    line(180, 200, 560, 250);
}

function touchMoved () {
    //do some stiff
    return false;
}