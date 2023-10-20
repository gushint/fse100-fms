var click1;

shape1 = [];
var hit = false;
function preload() {
  shape1[0] = createVector(75, 200);
  shape1[1] = createVector(125, 100);
  shape1[2] = createVector(225, 100);
  shape1[3] = createVector(175, 200);
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
  
  beginShape();
  for (const { x, y } of shape1)  vertex(x, y);
  endShape(CLOSE);

  circle(mouseX, mouseY, 10);

  //hit = collidePointPoly(mouseX, mouseY, shape1);
  //hit = collidePointPoint(100, 100, 100, 100);
  console.log("hit");
  
  //quad(75, 200, 125, 100, 225, 100, 175, 200); 
  //square(155,155,155);
  myButton.draw();  
  
}

