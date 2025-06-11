let w = window.innerWidth;
let h = window.innerHeight;  

let eye;
let customCursor;

class Eye{
  constructor(x,y){
    this.position = createVector(0,0);
    this.width = 0;
  }

  display(){
  //Marcos
  push()
  fill(0);
  noStroke();
  translate(w*0.50,h*0.50);

  //Follow mouse
  let mouseXReference = map(mouseX, 0,w,-w*0.20,w*0.20);
  let mouseYReference = map(mouseY, 0,h,-h*0.04,h*0.04);
  circle(mouseXReference,mouseYReference,this.width);
  pop();
  }

  //Because of responsiveness.
  updateValues(){
    this.width = h*0.10;
  }
}

function preload() {
  // Load your custom PNG image
  customCursor = loadImage('media/cursorimg.png'); // Replace with your image path
}

function setup() {
  canvas = createCanvas(w, h);
  eye = new Eye(0,0);
  
  //Change cursor image.

}

function draw() {
  background(0);
  cursor(customCursor); // 0,0 = hotspot (top-left of the image)


  //Abdullah
/*   push()
  fill(0)
  strokeWeight(2);
  stroke(255);
  translate(w*0.50,h*0.40)
  circle(0,0,w *0.25);
  pop();

  push();
  fill(0)
  strokeWeight(2);
  stroke(255);
  translate(w*0.50,h*0.50)
  circle(0,0,w*0.25);
  pop() */

  push();
  fill(255);
  strokeWeight(2);
  stroke(255);
  translate(w*0.5,h*0.50)
  arc(0,0, w*0.60,h*0.20, 0, PI / 1.)
  pop();

  push();
  fill(255);
  strokeWeight(2);
  stroke(255);
  translate(w*0.5,h*0.501)
  rotate(3.142)
  arc(0,0, w*0.6,h*0.20, 0, PI / 1.0)
  pop();

  //



  //Marcos
  eye.display();
  eye.updateValues();
  //
}

function windowResized() {
  // assigns new values for width and height variables
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.resize(w,h);
}