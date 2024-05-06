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