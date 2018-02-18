function setup() {
  createCanvas(500, 500);

  var name = "ciid";
  var age = 11;
  var anotherThing;

  print(anotherThing); // well, that's nothing so far
  print(name + age); // ok, this sort of makes sense
  print(name - age); // huh?

  var list = ["Copenhagen", "Aarhus", "Lyngby", "Odense"];

  print(list[0]);

  for( var i = 0; i < list.length; i++ ) {
    print(list[i]);
  }

  if( age == 2018 - 2007)
  {
    print(" 11 years old!");
  }
  else
  {
    print(" not 11 years old ");
  }

}

function draw() {

  
}