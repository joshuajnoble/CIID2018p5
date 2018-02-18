function setup() {
  createCanvas(500, 500);

  colorMode(RGB); // we have two color modes RGB and HSB
}

function draw() {

  noStroke();

  colorMode(RGB); // we have two color modes RGB and HSB
  fill(255, 255, 255, 2);
  rect(0, 0, width, height);
  
  colorMode(HSB);
  fill( mouseX, 100, 100, mouseY);
  ellipse(mouseX, mouseY, 30, 30);
  
}