function setup() {
  createCanvas(windowWidth/2, windowHeight/2);
}


function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}