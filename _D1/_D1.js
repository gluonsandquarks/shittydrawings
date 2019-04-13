function setup() {
	//canvas position and background color
	var xlength = 600;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
 	cnv.position(0, 0);
 	createCanvas(xlength, ylenght);
 	background('#0f0036');

	//stars
 	for (var i = 0; i<=300; i++) {

		x = random(0, 600);
    	y = random(0, 600);
    	smooth(120);
  		noStroke();
		fill('#eeeeee');	
		ellipse(x, y, 2, 2);
		
    }
}

function draw() {

	//moon
	var xmoon = 435;
	var ymoon = 120;
	smooth(1000);
	noStroke();
	fill('#ffff77');
    ellipse(xmoon, ymoon, 100, 100);

}
