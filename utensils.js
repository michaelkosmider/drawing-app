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

