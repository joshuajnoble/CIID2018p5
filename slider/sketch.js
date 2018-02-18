var slider, hueSlider;

function setup() {
  
  createCanvas(500, 500);
  
  slider = createSlider(0, 255, 0, 1);
  slider.position(20, 20);

  hueSlider = createSlider(0, 255, 0, 1);
  hueSlider.position(20, 50);

  colorMode(HSB);
}

function draw() {
  background(0);
  fill(hueSlider.value(), 100, 100);
  ellipse(width/2, height/2, slider.value(), slider.value());
}