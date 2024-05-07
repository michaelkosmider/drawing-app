// selecting the canvas layers from the dom

const realLayer = document.querySelector("#real-layer");
const previewLayer = document.querySelector("#preview-layer");
const layers = document.querySelector("#layers");

// selecting the tools from the dom

const toolbox = document.querySelector(".toolbox");
const colorPicker = document.querySelector("#color-picker");
const lineSizer = document.querySelector("#line-sizer");
const clearButton = document.querySelector("#clear-button");

const colorButtons = document.querySelectorAll(".color-button");

const utensilButtonsArr = document.querySelectorAll(".utensil");
const utensilButtonsMap = new Map();
for (let i = 0; i < utensilButtonsArr.length; i++) {
    utensilButtonsMap.set(utensilButtonsArr[i].dataset.utensil, utensilButtonsArr[i]);
}