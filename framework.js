let currentlyDrawing = false;

function drawStart(event) {
    currentlyDrawing = true;
    drawUtensil.start(event);
}
function drawContinue(event) {
    if(currentlyDrawing) {
        drawUtensil.continue(event);
    }
}
function drawStop(event) {
    if(currentlyDrawing) {
        currentlyDrawing = false;
        drawUtensil.stop(event);
    }
}

// // clear and undo implementation

function clearCanvas() {
    realContext.clearRect(0, 0, realLayer.width, realLayer.height);
}

