function setup() {
	//canvas position and background color
	var xlength = 800;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
 	cnv.position(0, 0);
 	createCanvas(xlength, ylenght);
 	background('#0f0036');
}

function draw() {

	var xlength = 800;
	var ylenght = 600;
	var cnv = createCanvas(xlength, ylenght);
 	cnv.position(0, 0);
 	createCanvas(xlength, ylenght);
 	background('#0f0036');

    //stars
	drawStars(200);

	//moon
	var xmoon = 600;
	var ymoon = 150;
	smooth(1000);
	noStroke();
	fill('#ffff77');
    ellipse(xmoon, ymoon, 95, 95);

    //river (not the eminem song) 
    beginShape();
	fill('#54b2a9');
	vertex(246,440);
	vertex(500,440);
	vertex(400,500);
	vertex(0,500);
	endShape(CLOSE);

	//Mountains boy
    fill('#005555');
    triangle(80,600,170,350,280,600);
	fill('#006666');
	triangle(-50,600,100,250,300,600);
	fill('#007777'); 
	triangle(-50,600,20,325,200,600);
	fill('#007777'); 
	triangle(50,600,200,340,350,600);
	fill('#008080') 
	triangle(80,600,180,425,300,600);
	fill('#009688'); 
	triangle(0,600,110,380,250,600);
	fill('#35a79c'); 
	triangle(150,600,300,480,400,600);
}

function drawStars(stars) {
	for (var i = 0; i<=stars; i++) {
		x = random(0, 800);
    	y = random(0, 600);
    	noSmooth();
  		noStroke();
		fill('#eeeeee');
		z = random(2);	
		ellipse(x, y, z, z);
    }
}