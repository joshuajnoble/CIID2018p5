
var loops = ["broken-videogame.wav",
 "conga2.wav",
 "ethno-strummer.wav",
 "sitar-dulcimer-thing.wav",
 "gentle-mind-ratchet.wav",
 "robot-909-bouncy.wav",
 "solid-triangle-wave-synthline.wav",
 "triplet-shuffler.wav"];

var loadedLoops = [];

var controlKeys = ['A','S','D','F','J','K','L','º'];

function preload() {
  soundFormats('wav', 'ogg');
  var i = 0; 
  for( i = 0; i < loops.length; i+=1) {
    loadedLoops.push(loadSound("assets/" + loops[i]));
    print(" loaded " + loops[i]);
  }

  createCanvas(800, 400);
  colorMode(HSB, 255);
  noStroke();
}

function setup() {
}

function draw() {

  background(255);


  
  var i = 0;
  for( i = 0; i < loadedLoops.length; i+=1) {
    if(loadedLoops[i].isPlaying()) {
      fill(i * 30, 255, 255);
      rect(i * 50, 0, 50, height);
    }
  }

}

function keyReleased() {
  var releasedKey = controlKeys.indexOf(key);
  print(key + " " + releasedKey);
  if( releasedKey != -1 ) {
    loadedLoops[releasedKey].setLoop(false);
  }
}

function keyPressed() {

  var releasedKey = controlKeys.indexOf(key);

  print(key + " " + releasedKey);
  if( releasedKey != -1 ) {

    if(!loadedLoops[releasedKey].isPlaying()) {
      loadedLoops[releasedKey].setLoop(true);
      loadedLoops[releasedKey].play();
    }
  }
}