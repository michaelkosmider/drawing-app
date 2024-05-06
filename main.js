// selecting the canvas layers from the dom

const realLayer = document.querySelector("#real-layer");
const previewLayer = document.querySelector("#preview-layer");
const layers = document.querySelector("#layers");

// selecting the tools from the dom

const colorPicker = document.querySelector("#color-picker");
const lineSizer = document.querySelector("#line-sizer");

const colorButtons = document.querySelectorAll(".color-button");

const mechanismButtonsArr = document.querySelectorAll(".mechanism");
const mechanismButtonsMap = new Map();
for (let i = 0; i < mechanismButtonsArr.length; i++) {
    mechanismButtonsMap.set(mechanismButtonsArr[i].dataset.mechanism, mechanismButtonsArr[i]);
}

// canvas setup

const layersRect = layers.getBoundingClientRect();
realLayer.width = window.innerWidth-20;
realLayer.height = 600;

previewLayer.style.position = "absolute";
previewLayer.style.top = layersRect.top+"px";
previewLayer.style.left = layersRect.left+"px";
previewLayer.width = realLayer.width;
previewLayer.height = realLayer.height;

const realContext = realLayer.getContext("2d");

// setting defaults for drawing

let colors = ["black", "white"];
let activeColor = 0; 
let drawMechanism = "pen";

realContext.lineCap = "round";
realContext.lineJoin = "round";
realContext.lineWidth = 5;
lineSizer.value = realContext.lineWidth;
realContext.strokeStyle = colors[activeColor];

// initializing the color and mechanism buttons

colorButtons[0].style.backgroundColor = colors[0];
colorButtons[activeColor].classList.add("active");
colorButtons[1].style.backgroundColor = colors[1];
mechanismButtonsMap.get(drawMechanism).classList.add("active");

// setting canvas event listeners

layers.addEventListener("mousedown", drawStart);
layers.addEventListener("mousemove", drawContinue);
layers.addEventListener("mouseup", drawStop);
layers.addEventListener("mouseleave", drawStop);

// setting toolbox event listeners

colorPicker.addEventListener("change", changeColorOfActive);
lineSizer.addEventListener("input", changeLineSize);

colorButtons[0].addEventListener("click", changeActiveColor);
colorButtons[1].addEventListener("click", changeActiveColor);

for (let i = 0; i < mechanismButtonsArr.length; i++) {
    mechanismButtonsArr[i].addEventListener("click", changeMechanism);
}









// FUNCTIONS

// mechanism switch implementation

function changeMechanism(event) {
    if(drawMechanism === "eraser") {
        realContext.strokeStyle = colors[activeColor];
    }
    mechanismButtonsMap.get(drawMechanism).classList.remove("active");
    drawMechanism = event.target.dataset.mechanism;
    if(drawMechanism === "eraser") {
        realContext.strokeStyle = "white";
    }
    mechanismButtonsMap.get(drawMechanism).classList.add("active");
}

// defining color and brush size modifiers

function changeActiveColor(event) {
    if(!(drawMechanism === "eraser")) {
        colorButtons[activeColor].classList.remove("active");
        activeColor = event.target.dataset.index;
        colorButtons[activeColor].classList.add("active");
        realContext.strokeStyle = colors[activeColor];
    }
}

function changeColorOfActive(event) {
    realContext.strokeStyle = event.target.value;
    colors[activeColor] = event.target.value;
    colorButtons[activeColor].style.backgroundColor = event.target.value;
}

function changeLineSize(event) {
    realContext.lineWidth = event.target.value;
}
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

