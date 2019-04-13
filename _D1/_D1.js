function setup() {
	var xlength = 600;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
 	cnv.position(0, 0);
 	createCanvas(xlength, ylenght);
 	background('#0f0036');
}

function draw() {

	//moon
	var xmoon = 435;
	var ymoon = 120;
	smooth(1000);
	noStroke();
	fill('#ffff77');
    ellipse(xmoon, ymoon, 100, 100);

    //stars
    var star=100;

    while (star == 100) {
    	smooth(120);
   		noStroke();
    	fill('#eeeeee');
    	x = random(0, 600);
    	y = random(0, 600);
    	z = random(0, 600);
   		ellipse(x, y, 2, 2);
   	}

}
