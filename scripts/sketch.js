function setup() {
    let dC = drawingContext;

    let myCanvas = createCanvas(600, 800);
    myCanvas.parent('myContainer');


    dC.shadowOffsetX = 5;
    dC.shadowOffsetY = -5;
    dC.shadowBlur = 10;
    dC.shadowColor = "magenta";
    background(200);
    ellipse(150, 150, 100, 100,);
    ellipse(150, 250, 100, 100);
}
function draw() {
    line(180, 200, 560, 250);
    
    
    
    rect(200, 400, 200, 200);
    rect(210, 410, 180, 180);
    rect(220, 420, 160, 160);
    rect(230, 430, 140, 140);
    rect(240, 440, 120, 120);
    rect(250, 450, 100, 100);
    
    
    
    let coords = [40, 40, 80, 60, 100, 100, 60, 120, 50, 150];

    noFill();
    stroke(0);
    beginShape();
    curveVertex(40, 40);
    curveVertex(40, 40);
    curveVertex(80, 60);
    curveVertex(100, 100);
    curveVertex(60, 120);
    curveVertex(50, 150);
    curveVertex(50, 150);
    endShape();

    for (let i = 0; i < coords.length; i += 2) {
        ellipse(coords[i], coords[i + 1], 10, 10);
    }


    let s = 'this is a test of my intelligence so I really hope it works how I want it to';
    text(s, 250, 450, 100, 100);
}


function touchMoved() {
    //do some stiff
    return false;
}