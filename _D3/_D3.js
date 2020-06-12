//Variables needed (also they are the intial conditions for the diff. equation)
var x = 1, y = 0.3, z = 0.2, s = 10, r = 28, b = 8.0/3.0, i = 0;
let points = [], lines = [];
//line stroke color: 255, 102, 102
function setup() {
	//canvas position and background color
	createCanvas(720, 400, WEBGL);
	background(255, 204, 229);
}

function draw() {
	background(255, 204, 229);
	//mouseX position
	var rate = mouseX/720;
	
	scale(3);



	//Timestep (dt)
	var dt = 0.009;

	//Diff equations
	var dx = (s*(y - x))*dt;
	var dy = (x*(r - z) - y)*dt;
	var dz = (x*y - b*z)*dt;

	//Updating the variables.
	let xold = x;
	let yold = y;
	let zold = z;
	x = x + dx;
	y = y + dy;
	z = z + dz;
	//Array of the points. Easier to manipulate
	rotateY(TWO_PI*rate);
	points[i] = point(x, y, z);
	stroke(255, 102, 102);
	lines[i] = line(xold, yold, zold, x, y, z);
	//rotateZ(PI);
	console.log(x + ", " + y + ", " + z);
	i++;
}
