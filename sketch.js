let w = window.innerWidth;
let h = window.innerHeight;  

function setup() {
  canvas = createCanvas(w, h);
}

function draw() {
  background(0);

  fill(255,0,0);

  //Abdullah
  push()
  translate(w*0.35,h*0.25)
  //rect(0,0,w*0.10,h*0.20);
  pop()
  //


  //Marcos


  //
}

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.resize(w,h);
}