var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = "red";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "yellow";
ctx.fillRect(300, 30, 80, 80);

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }