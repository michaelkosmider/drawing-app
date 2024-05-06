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