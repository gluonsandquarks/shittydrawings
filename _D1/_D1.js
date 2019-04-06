function setup() {
	var xlength = 1000;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) /2;
 	cnv.position(x, y);
 	createCanvas(xlength, ylenght);
 	background('#0f0036');
}

function draw() {
	noStroke();
	fill(255);
	ellipse(width/2, height/4, 80, 80);

}
