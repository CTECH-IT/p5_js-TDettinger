var lines = []
var penColor
var bgColor
var penWidth


function setup() {
   // let dC = drawingContext;

    let myCanvas = createCanvas(600, 800);
   // myCanvas.parent('myContainer');

    var options = createDiv().style('display: flex')

    var optionsTitles = createDiv().parent(options)
    createP('Pen Color').parent(optionsTitles)
    createP('background Color').parent(optionsTitles)
    createP('pen Witdth').parent(optionsTitles)

    var optionsValues = createDiv().parent(options).style('margin: 10px, 40px; width; 30px')
    penColor = createColorPicker('ffffff').parent(optionsValues)
    bgPicker = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 10px')
    penWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px')
    penWidth.option('1')
    penWidth.option('2')
    penWidth.option('3')
    penWidth.option('4')
    penWidth.selected('2')



}


function draw() {
    background(bgColor.value());

    if(mouseIsPressed) {
        var line = new MyLine(penColor.value().penWidth.value());
        lines.push(line);

    }

    for (var line of lines) {
        line.show();

    }

}