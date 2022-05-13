var lines = []


function setup() {
    let dC = drawingContext;

    let myCanvas = createCanvas(600, 800);
    myCanvas.parent('myContainer');


  
}
function draw() {
    background(30);

    if(mouseIsPressed) {
        var line = new MyLine();
        lines.push(line);

    }

    for (var line of lines) {
        line.show();

    }

}