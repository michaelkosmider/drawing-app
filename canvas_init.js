// drawing space setup
realLayer.width = window.innerWidth-20;
realLayer.height = window.innerHeight-100;
const layersRect = layers.getBoundingClientRect();
previewLayer.style.position = "absolute";
previewLayer.style.top = layersRect.top+"px";
previewLayer.style.left = layersRect.left+"px";
previewLayer.width = realLayer.width;
previewLayer.height = realLayer.height;
const realContext = realLayer.getContext("2d");
const previewContext = previewLayer.getContext("2d");
const drawingSpace = {real: realContext, prev: previewContext, rect:layersRect}

// initializing utensils
const utensilMap = new Map();
let pen = new Pen(drawingSpace);
let rectangle = new Rectangle(drawingSpace);
let eraser = new Pen(drawingSpace, true);
let line = new Line(drawingSpace);
let circle = new Circle(drawingSpace);
utensilMap.set(pen.name, pen);
utensilMap.set(rectangle.name, rectangle);
utensilMap.set(eraser.name, eraser);
utensilMap.set(line.name, line);
utensilMap.set(circle.name, circle);

// setting defaults for drawing
let colors = ["black", "white"];
let activeColor = 0; 
let drawUtensil = pen;
realContext.lineCap = "round";
realContext.lineJoin = "round";
realContext.lineWidth = 5;
previewContext.lineCap = "round";
previewContext.lineJoin = "round";
previewContext.lineWidth = 5;
lineSizer.value = realContext.lineWidth;
realContext.strokeStyle = colors[activeColor];
previewContext.strokeStyle = colors[activeColor];

// initializing the color and utensil buttons

colorButtons[0].style.backgroundColor = colors[0];
colorButtons[activeColor].classList.add("active");
colorButtons[1].style.backgroundColor = colors[1];
utensilButtonsMap.get(drawUtensil.name).classList.add("active");
