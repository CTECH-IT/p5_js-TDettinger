var lines = []
let penColor
let bgColor
let penWidth
var clearBut
var checkbox

function setup() {
    createCanvas ( 500, 500)
    
    

    var options = createDiv().style('display: flex; margin-left: 30px; margin-top: 50px; font-size: 20px')

    var optionsTitles = createDiv().parent(options)
    document.createTextNode("Test")

    createP('Drawing Tools').parent(optionsTitles).style('margin: -25px 40px; font-size: 35px; white-space: nowrap')
    createP('Pen Color').parent(optionsTitles)
    createP('Background Color').parent(optionsTitles)
    createP('Pen Witdth').parent(optionsTitles)
    createP('Eraser').parent(optionsTitles)
    createP('Screenshot').parent(optionsTitles)

    var optionsValues = createDiv().parent(options).style('margin: 20px 35px; width: 30px')
    penColor = createColorPicker('#ffffff').parent(optionsValues)
    bgColor = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 15px')
    penWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px')
    penWidth.option('1')
    penWidth.option('2')
    penWidth.option('4')
    penWidth.option('8')
    penWidth.selected('2')

    checkbox = createCheckbox('',false).parent(optionsValues).style('margin-top: 10px')
    //checkbox.changed(checkbox)

    screenShotBut = createButton('Take').parent(optionsValues).style('margin-top: 10px')

    clearBut = createButton('clear').parent(options).style('width: 100px; height: 200px')
}

function draw() {
    background(bgColor.value())
    myEraser()

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


function myEraser() {
    if (checkbox.checked()) {
        penColor = bgColor //pen will appear to be erasing
        penWidth.value('8')
        line.show
    }
    else {
        penColor = penColor
        line.show
    }
}

