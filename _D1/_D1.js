function setup() {
	var xlength = 1000;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) /2;
 	cnv.position(x, y);
  createCanvas(xlength, ylenght);

  background(9, 29, 87);
}

function draw() {

  ellipse(width/2, height/2, 80, 80);
  fill(255)
}