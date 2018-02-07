var osc;

var note = 0;

function setup() {
  createCanvas(710, 200);

  colorMode(HSB, 100);

  osc = new p5.SinOsc();
  osc.start();

}

function mousePressed() {
  note = map(mouseX, 0, width, 40, 110);
  var freqValue = midiToFreq(note);
  osc.freq(freqValue);
}

function draw() {
  fill( 0, 0, 100, 10);
  rect(0, 0, width, height);

  var drawNoteX = map( note, 40, 110, 0, width);
  var hue = map( note, 40, 110, 0, 255);
  fill( note, 100, 100 );

  rect( drawNoteX, 0, 50, height );

}
