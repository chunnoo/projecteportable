var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

var frames = 0;
var time = 0;

var numPoints = 5;

var mouse = new point(0,0);
var clicks = 0;

function draw(e) {
  time = frames/120;

  ctx.fillStyle = "#222";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.strokeStyle = "#fff";
  ctx.beginPath();
  ctx.moveTo(
    Math.cos(time)*canvas.width*(0.25 + Math.sin(time*10)/50) + canvas.width*0.5,
    Math.sin(time)*canvas.width*(0.25 + Math.sin(time*10)/50) + canvas.height*0.5);
  for (var i = 1; i < numPoints; i++) {
    ctx.lineTo(
      Math.cos(2*i*Math.PI/numPoints + time)*canvas.width*(0.25 + Math.sin(time*10)/50) + canvas.width*0.5,
      Math.sin(2*i*Math.PI/numPoints + time)*canvas.width*(0.25 + Math.sin(time*10)/50) + canvas.height*0.5);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  
  frames++;
  requestAnimationFrame(draw);
}

window.addEventListener("resize", function (e) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

canvas.addEventListener("mousemove", function (e) {
  mouse.x = e.clientX - canvas.getBoundingClientRect().left;
  mouse.y = e.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("click", function (e) {
  mouse.x = e.clientX - canvas.getBoundingClientRect().left;
  mouse.y = e.clientY - canvas.getBoundingClientRect().top;
  
  if (Math.sqrt(Math.pow(canvas.width*0.5 - mouse.x, 2) + Math.pow(canvas.height*0.5 - mouse.y, 2)) <= canvas.width*(0.25 + Math.sin(time*10)/50)) {
    numPoints++;
  } else {
    numPoints--;
  }
  
  clicks++;
});

draw();









