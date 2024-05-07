// setting canvas event listeners

layers.addEventListener("mousedown", drawStart);
layers.addEventListener("mousemove", drawContinue);
layers.addEventListener("mouseup", drawStop);
layers.addEventListener("mouseleave", drawStop);

// setting toolbox event listeners

colorPicker.addEventListener("change", changeColorOfActive);
lineSizer.addEventListener("input", changeLineSize);
clearButton.addEventListener("click", clearCanvas);

colorButtons[0].addEventListener("click", changeActiveColor);
colorButtons[1].addEventListener("click", changeActiveColor);

for (let i = 0; i < utensilButtonsArr.length; i++) {
    utensilButtonsArr[i].addEventListener("click", changeUtensil);
}
