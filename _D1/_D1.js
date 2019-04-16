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

	//moon
	noLoop();
	var xmoon = 600;
	var ymoon = 150;
	smooth(1000);
	noStroke();
	fill('#ffff77');
    ellipse(xmoon, ymoon, 95, 95);

    //stars
	for (var i = 0; i<=200; i++) {

		x = random(0, 800);
    	y = random(0, 600);
    	noSmooth();
  		noStroke();
		fill('#eeeeee');	
		ellipse(x, y, 2, 2);
    }

    //Mountains boy
    fill('#005555');
    triangle(80,600,170,350,280,600);
	fill('#006666');
	triangle(-50,600,100,250,300,600);
	fill('#007777'); 
	triangle(-50,600,20,325,200,600);
	fill('#007777'); 
	triangle(50,600,200,340,350,600);
	fill('#009688') 
	triangle(110,600,200,400,300,600);
	fill('#008080'); 
	triangle(0,600,110,380,250,600);
}
