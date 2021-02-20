var canvas1 = document.getElementById("mainC");
var ctx = canvas1.getContext("2d");

function doThing(e) {
    ctx.clearRect(0, 0, canvas1.width, canvas1.height) 
    rectangle.draw();                                      
}

class Rectangle {
    constructor(myX, myY, myW, myH) {
        this.x = myX;
        this.y = myY; 
        this.w = myW; 
        this.h = myH; 
    }
    draw() {
        //Fills rectangle with correct info
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

let rect = new Rectangle(100, 100, 50, 50);
rect.draw();