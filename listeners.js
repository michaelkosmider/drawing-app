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
