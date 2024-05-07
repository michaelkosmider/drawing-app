// utensil switch
function changeUtensil(event) {
    if(drawUtensil.name === "eraser") {
        realContext.strokeStyle = colors[activeColor];
    }
    utensilButtonsMap.get(drawUtensil.name).classList.remove("active");
    drawUtensil = utensilMap.get(event.target.dataset.utensil);
    if(drawUtensil.name === "eraser") {
        realContext.strokeStyle = "white";
    }
    utensilButtonsMap.get(drawUtensil.name).classList.add("active");
}

// color and brush size modifiers

function changeActiveColor(event) {
    if(!(drawUtensil.name === "eraser")) {
        colorButtons[activeColor].classList.remove("active");
        activeColor = event.target.dataset.index;
        colorButtons[activeColor].classList.add("active");
        realContext.strokeStyle = colors[activeColor];
        previewContext.strokeStyle = colors[activeColor];
    }
}

function changeColorOfActive(event) {
    realContext.strokeStyle = event.target.value;
    previewContext.strokeStyle = event.target.value;
    colors[activeColor] = event.target.value;
    colorButtons[activeColor].style.backgroundColor = event.target.value;
}

function changeLineSize(event) {
    realContext.lineWidth = event.target.value;
    previewContext.lineWidth = event.target.value;
}