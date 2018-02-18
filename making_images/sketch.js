
var img;

function setup() {
  createCanvas(500, 500);

  // this is important to get right: the image has to be in the right
  // place relative to our file
  img = loadImage("josh.jpg");

  // we want to draw our images so that the center
  // of the image is at the pixel coordinates that we say
  imageMode(CENTER);

}

function draw() {


	background(255);
	
	// now we can draw the image that we loaded
	image(img, height/2, width/2);
  	
  	// now we'll color it, R G B A
  	tint(0, 255, mouseY/2, mouseX/2);
  	image(img, mouseX, mouseY);
  	tint(255, 255, 255, 255);
}