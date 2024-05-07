class Pen {

    constructor(drawingSpace,eraser=false) {
        this.real = drawingSpace.real;
        this.rect = drawingSpace.rect; 
        if(eraser === false) {
            this.name = "pen";
        }
        else {
            this.name = "eraser";
        }
    }

    start(event) {
        this.real.beginPath();
        this.real.moveTo(event.clientX - this.rect.left, event.clientY - this.rect.top);  
        this.real.lineTo(event.clientX - this.rect.left, event.clientY - this.rect.top);
        this.real.stroke();  
    }
    continue(event) {
        this.real.lineTo(event.clientX - this.rect.left, event.clientY - this.rect.top);
        this.real.stroke();
    }
    stop(event) {}

}

class Rectangle {

    constructor(drawingSpace) {
        this.real = drawingSpace.real;
        this.prev = drawingSpace.prev;
        this.rect = drawingSpace.rect; 
        this.name = "rectangle";
        this.startX = undefined;
        this.startY = undefined;
    }

    start(event) {
        this.prev.beginPath();
        this.real.beginPath();
        this.startX = event.clientX - this.rect.left;
        this.startY = event.clientY - this.rect.top;  
    }
    continue(event) {
        this.prev.clearRect(0, 0, this.rect.width, this.rect.height);
        let width = event.clientX - this.rect.left - this.startX;
        let height = event.clientY - this.rect.top - this.startY;
        this.prev.beginPath();
        this.prev.rect(this.startX, this.startY, width, height);
        this.prev.stroke();
    }
    stop(event) {
        this.prev.clearRect(0, 0, this.rect.width, this.rect.height);
        let width = event.clientX - this.rect.left - this.startX;
        let height = event.clientY - this.rect.top - this.startY;
        this.real.rect(this.startX, this.startY, width, height);
        this.real.stroke();
    }
}

class Line {

    constructor(drawingSpace) {
        this.real = drawingSpace.real;
        this.prev = drawingSpace.prev;
        this.rect = drawingSpace.rect; 
        this.name = "line";
        this.startX = undefined;
        this.startY = undefined;
    }

    start(event) {
        this.prev.beginPath();
        this.real.beginPath();
        this.startX = event.clientX - this.rect.left;
        this.startY = event.clientY - this.rect.top;  
        this.prev.moveTo(this.startX, this.startY);
        this.real.moveTo(this.startX, this.startY);
    }
    continue(event) {
        this.prev.clearRect(0, 0, this.rect.width, this.rect.height);
        let width = event.clientX - this.rect.left - this.startX;
        let height = event.clientY - this.rect.top - this.startY;
        this.prev.beginPath();
        this.prev.moveTo(this.startX, this.startY);
        this.prev.lineTo(this.startX + width, this.startY + height);
        this.prev.stroke();
    }
    stop(event) {
        this.prev.clearRect(0, 0, this.rect.width, this.rect.height);
        let width = event.clientX - this.rect.left - this.startX;
        let height = event.clientY - this.rect.top - this.startY;
        this.real.lineTo(this.startX + width, this.startY + height);
        this.real.stroke();
    }
}

class Circle {

    constructor(drawingSpace) {
        this.real = drawingSpace.real;
        this.prev = drawingSpace.prev;
        this.rect = drawingSpace.rect; 
        this.name = "circle";
        this.startX = undefined;
        this.startY = undefined;
    }

    start(event) {
        this.prev.beginPath();
        this.real.beginPath();
        this.startX = event.clientX - this.rect.left;
        this.startY = event.clientY - this.rect.top;  
    }
    continue(event) {
        this.prev.clearRect(0, 0, this.rect.width, this.rect.height);
        let width = event.clientX - this.rect.left - this.startX;
        let height = event.clientY - this.rect.top - this.startY;
        this.prev.beginPath();
        this.prev.ellipse(this.startX+width/2, this.startY+height/2, Math.abs(width/2), Math.abs(height/2), 0, 0, 2*Math.PI);
        this.prev.stroke();
    }
    stop(event) {
        this.prev.clearRect(0, 0, this.rect.width, this.rect.height);
        let width = event.clientX - this.rect.left - this.startX;
        let height = event.clientY - this.rect.top - this.startY;
        this.real.ellipse(this.startX+width/2, this.startY+height/2, Math.abs(width/2), Math.abs(height/2), 0, 0, 2*Math.PI);
        this.real.stroke();
    }
}