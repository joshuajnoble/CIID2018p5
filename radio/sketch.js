/*
 * @name Input and Button
 * @description You will need to include the 
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.<br><br>
 * Input text and click the button to see it affect the the canvas.
 */
var input, button, greeting;
var radio, bigTextCheck, redTextCheck;

function setup() {

  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(greet);
  
  radio = createRadio();
  radio.option("green");
  radio.option("white");
  radio.option("gray");
  radio.position(50, 100);
  
  bigTextCheck = createCheckbox('big', false);
  bigTextCheck.changed(makeBig);
  bigTextCheck.position(50, 150);
  
  redTextCheck = createCheckbox('red', false);
  redTextCheck.changed(makeRed);
  redTextCheck.position(50, 200);

  greeting = createElement('span', 'what is your name?');
  greeting.style('font-size:20px;');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function makeBig()
{
  if(bigTextCheck.checked())
  {
    greeting.style('font-size:40px;');
  }
  else
  {
    greeting.style('font-size:20px;');
  }
}

function makeRed()
{
  if(redTextCheck.checked())
  {
    greeting.style('color:red;');
  }
  else
  {
    greeting.style('color:black;');
  }
}

function draw() {
  var val = radio.value();
  background(val);
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}
