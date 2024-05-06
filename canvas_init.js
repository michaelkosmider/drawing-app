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
