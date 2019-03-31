function setup() {
	var xlength = 1000;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) /2;
 	cnv.position(x, y);
  createCanvas(xlength, ylenght);
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}