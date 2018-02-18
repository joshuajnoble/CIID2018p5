var checks = [];
var selected = 0; 

function setup() {
  noCanvas();

  for( var i = 0; i < 100; i++ ) {
    var check = createCheckbox(i.toString(), false);
    checks.push(check);
  }
}

function draw() {
  for( var i = 0; i < checks.length; i++) {
    if(abs(i - selected) < 10) {
      checks[i].checked(true);
      checks[i].elt.children[1].innerHTML = "WHEEEE!";
    } else {
      checks[i].checked(false);
      checks[i].elt.children[1].innerHTML = i;
    }
  }
  selected++;
  if(selected > checks.length + 10) {
    selected = -10;
  }
}
