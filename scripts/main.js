var lines = []
let penColor
let bgColor
let penWidth
var clearBut

function setup() {
    createCanvas(600, 800);

    var options = createDiv().style('display: flex; margin-left: 30px')

    var optionsTitles = createDiv().parent(options)
    createP('Pen Color').parent(optionsTitles)
    createP('Background Color').parent(optionsTitles)
    createP('Pen Witdth').parent(optionsTitles)

    var optionsValues = createDiv().parent(options).style('margin: 10px 40px; width: 30px')
    penColor = createColorPicker('#ffffff').parent(optionsValues)
    bgColor = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 10px')
    penWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px')
    penWidth.option('1')
    penWidth.option('2')
    penWidth.option('4')
    penWidth.option('8')
    penWidth.selected('2')


    clearBut = createButton('clear').parent(options).style('width: 100px')
}

function draw() {
    background(bgColor.value())

    clearBut.mousePressed(function () {
        lines = []
    })

    if (mouseIsPressed) {
        var line = new MyLine(penColor.value(), penWidth.value())
        lines.push(line);

    }

    for (var line of lines) {
        line.show()

    }

}