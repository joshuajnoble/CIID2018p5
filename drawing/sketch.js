function setup() {

  // this makes our canvas, we say how big it is in pixels
  createCanvas(500, 500);
}

// don't forget that draw is a loop
// so it's running all the time
function draw() {

  rect(mouseX, mouseY, mouseX - pmouseX, mouseY - pmouseY);
  
  ellipse(mouseX + 20, mouseY - 20, 20, 20);

}