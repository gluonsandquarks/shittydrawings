function setup() {
	var cnv = createCanvas(100, 100);
	var x = (windowWidth - width) / 2;
 	var y = (windowHeight - height) /2;
 	cnv.position(x, y);
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}