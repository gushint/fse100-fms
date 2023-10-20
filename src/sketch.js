var click1;
// The movable parallelogram
shape1a = [];
// The destination parallelogram
shape1b = [];
var hit, mouseDiff = false;
function preload() {
  // Define initial position for movable parallelogram
  shape1a[0] = createVector(50, 200);
  shape1a[1] = createVector(100, 100);
  shape1a[2] = createVector(200, 100);
  shape1a[3] = createVector(150, 200);
  
  // Define position for destination parallelogram
  shape1b[0] = createVector(425, 500);
  shape1b[1] = createVector(475, 400);
  shape1b[2] = createVector(575, 400);
  shape1b[3] = createVector(525, 500);

  mouseDiff = createVector(); // temp vec for randomPoly[]
}
function setup() {
  createCanvas(600, 600);

  myButton = new Clickable();     //Create button
  myButton.locate(20, 20);        //Position Button
  myButton.onPress = function(){  //When myButton is pressed
  this.color = "#AAAAFF";       //Change button color
  alert("Yay!");                //Show an alert message
  
}

  }
  
function draw() {
  //
  background(120);
  
  // Draw the destination parallelogram
  beginShape();
  for (const { x, y } of shape1b)  vertex(x, y);
  endShape(CLOSE);
  
  // Draw the movable parallelogram
  beginShape();
  for (const { x, y } of shape1a)  vertex(x, y);
  endShape(CLOSE);

  circle(mouseX, mouseY, 10);

  hit = collidePointPoly(mouseX, mouseY, shape1a);
  //hit = collidePointPoint(100, 100, 100, 100);
  
  if (hit && mouseIsPressed) {
    shape1a[0].set(mouseX -75, mouseY + 50);
    shape1a[1].set(mouseX - 25, mouseY - 50);
    shape1a[2].set(mouseX + 75, mouseY - 50);
    shape1a[3].set(mouseX + 25, mouseY + 50);
    
  }
  
  //quad(75, 200, 125, 100, 225, 100, 175, 200);
  //square(155,155,155);
  myButton.draw();  
  
}

