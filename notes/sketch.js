var osc, envelope, fft;

var scaleArray = [60, 62, 64, 65, 67, 69, 71, 72];
var note = 0;
var speed = 60;

function setup() {
  createCanvas(710, 200);

  colorMode(HSB, 100);

  osc = new p5.SinOsc();

  // Instantiate the envelope
  envelope = new p5.Env();

  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);

  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);

  osc.start();

  fft = new p5.FFT();
  noStroke();
}

function mouseMoved() {
  for( var i = 0; i < scaleArray.length; i++) {
    scaleArray[i] = 40 + (mouseY/4) + (i * 2); 
  }

  speed = floor(mouseX/8);
  console.log(speed + " " + mouseY)
}

function draw() {
  fill( 0, 0, 100, 2);
  rect(0, 0, width, height);

  if (frameCount % speed == 0 || frameCount == 1) {
    var midiValue = scaleArray[note];
    var freqValue = midiToFreq(midiValue);
    osc.freq(freqValue);

    envelope.play(osc, 0, 0.5);
    note = (note + 1) % scaleArray.length;
    var drawNoteX = map( midiValue, 40, 110, 0, width);
    var hue = map( midiValue, 40, 110, 0, 360);
    fill( midiValue, 100, 100 );

    rect( drawNoteX, 0, 50, height );
  }

}
