function setup() {
<<<<<<< HEAD
	var cnv = createCanvas(100, 100);
	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) /2;
 	cnv.position(x, y);
=======
  createCanvas(200, 200);
>>>>>>> a6fec74f53a3120399db5c7b6959a29e24476456
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}