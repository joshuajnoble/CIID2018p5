function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(0);
  
  noStroke();
  
  fill(255, 240, 240);
  ellipse(175, 110, 100, 90);
  ellipse(185, 120, 100, 90);
  fill(240, 255, 240);
  ellipse(150, 150, 100, 80);
  fill(255, 240, 220);
  ellipse(200, 160, 100, 80);
  
  fill(255);
  rect(100, 160, 150, 100);
  fill(0);
  ellipse(100, 220, 95, 75);
  ellipse(250, 220, 95, 75);
  
  
  stroke(255, 0, 0);
  strokeWeight(10);
  line(180, 110, 185, 115)
  stroke(255, 0, 255);
  line(150, 100, 155, 105)
  stroke(255, 255, 255);
  line(200, 110, 195, 115);
}