// defining the drawing framework: all drawing mechanisms must implement 
// their own start, continue and stop functions

let currentlyDrawing = false;

var drawStartFunctions = {
    "pen": penStart,
    "eraser": penStart,
    "rectangle": rectangleStart, 
};
var drawContinueFunctions = {
    "pen": penContinue,
    "eraser": penContinue,
    "rectangle": rectangleContinue, 
};
var drawStopFunctions = {
    "pen": penStop,
    "eraser": penStop,
    "rectangle": rectangleStop, 
};

function drawStart(event) {
    currentlyDrawing = true;
    drawStartFunctions[drawMechanism](event)
}
function drawContinue(event) {
    if(currentlyDrawing) {
        drawContinueFunctions[drawMechanism](event)
    }
}
function drawStop(event) {
    if(currentlyDrawing) {
        currentlyDrawing = false;
        drawStopFunctions[drawMechanism](event)
    }
}

// pen implementation

function penStart(event) {
    realContext.beginPath();
    realContext.moveTo(event.clientX - layersRect.left, event.clientY - layersRect.top);    
}
function penContinue(event) {
    realContext.lineTo(event.clientX - layersRect.left, event.clientY - layersRect.top);
    realContext.stroke();
}
function penStop(event) {
}

// rectangle implementation

let rectX;
let rectY;
function rectangleStart(event) {
    realContext.beginPath()
    rectX = event.clientX - layersRect.left;
    rectY = event.clientY - layersRect.top;
}
function rectangleContinue(event) {}
function rectangleStop(event) {
    let width = event.clientX - layersRect.left - rectX;
    let height = event.clientY - layersRect.top - rectY;
    realContext.rect(rectX, rectY, width, height);
    realContext.stroke();
}

// clear and undo implementation

function clearCanvas() {
    realContext.clearRect(0, 0, realLayer.width, realLayer.height);
}

