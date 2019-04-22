//Variables needed (also they are the intial conditions for the diff. equation)
var x = 1, y = 0.3, z = 0.2, s = 10, r = 28, b = 8.0/3.0, i = 0;
let points = [];
//line stroke color: 255, 102, 102
function setup() {
	//canvas position and background color
	createCanvas(720, 400, WEBGL);
}

function draw() {
	background(255, 204, 229);
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
	points[i] = point(x, y, z);
	stroke(255, 102, 102);
	line(xold, yold, zold, x, y, z);
	//rotateY(PI);
	//rotateZ(PI);
	console.log(x + ", " + y + ", " + z);
	i++;
}