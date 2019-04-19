function setup() {
	//canvas position and background color
	createCanvas(720, 400);
}

function draw() {
	background(216, 244, 255);
	noStroke();
	for (let i = 0; i < height; i+= 20) {
		fill(255, 140, 201);
		rect(0, i, width, 10);
		fill(255, 255, 255);
		rect(i, 0, 10, height); 
	}
}
