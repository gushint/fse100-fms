
var click1;
// The movable parallelogram
shape1a = [];
// The destination parallelogram
shape1b = [];

// The movable triangle
shape3a = [];
// The destination triangle
shape3b = [];

// The movable diamond
shape4a = [];
// The destination diamond
shape4b = [];

var hit, mouseDiff = false;
let instructions;
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

  circleX = 100;
  circleY = 300;
  
  
  // Define initial position for the movable triangle
  shape3a[0] = createVector(50, 500);
  shape3a[1] = createVector(100, 400);
  shape3a[2] = createVector(150, 500);
  // Define position for destination triangle
  shape3b[0] = createVector(450, 350);
  shape3b[1] = createVector(500, 250);
  shape3b[2] = createVector(550, 350);

  // Define initial position for the movable diamond
  shape4a[0] = createVector(50, 600);
  shape4a[1] = createVector(100, 525);
  shape4a[2] = createVector(150, 600);
  shape4a[3] = createVector(100, 675);

  // Define position for destination diamond
  shape4b[0] = createVector(450, 150);
  shape4b[1] = createVector(500, 75);
  shape4b[2] = createVector(550, 150);
  shape4b[3] = createVector(500, 225);
}
function setup() {
  createCanvas(600, 750);

  myButton = new Clickable();     //Create button
  myButton.locate(250, 120);        //Position Button
  myButton.text = "Return to\nmain menu";    //Set the text displayed in the button
  myButton.onPress = function(){  //When myButton is pressed
    window.location.href = "https://fse100-fms.pages.dev/";
  }
  instructions = createElement('h3', "Drag the Shapes on the Left to the Same Shape on the right.");
  instructions.position(400, 25);

  parallelogramColor = (250, 50, 50);
  parallelogramMatch = false;
  circleMatch = false;

  triangleMatch = false;

  diamondMatch = false;

  fireworks = loadImage("/assets/giphy.gif")

  frameRate(240);
}
  
function draw() {
  background(120);
  
  // Draw the destination parallelogram
  beginShape(); 
  fill(150, 150, 150);
  for (const { x, y } of shape1b)  vertex(x, y);
  endShape(CLOSE);
  
  // Draw the movable parallelogram
  beginShape();
  if (parallelogramMatch == false) {
    fill(250, 50, 50);
  } else {
    fill(50, 250, 50);
  }
  for (const { x, y } of shape1a)  vertex(x, y);
  endShape(CLOSE);

  

  hitParallelogram = collidePointPoly(mouseX, mouseY, shape1a);
  //hit = collidePointPoint(100, 100, 100, 100);
  

  // Move the Paralleleogram with the mouse
  if (hitParallelogram && mouseIsPressed) {
    shape1a[0].set(mouseX -75, mouseY + 50);
    shape1a[1].set(mouseX - 25, mouseY - 50);
    shape1a[2].set(mouseX + 75, mouseY - 50);
    shape1a[3].set(mouseX + 25, mouseY + 50);
  }
  
  if (p5.Vector.sub(shape1a[0], shape1b[0]).mag() < 10 &&
      p5.Vector.sub(shape1a[1], shape1b[1]).mag() < 10 &&
      p5.Vector.sub(shape1a[2], shape1b[2]).mag() < 10 &&
      p5.Vector.sub(shape1a[3], shape1b[3]).mag() < 10) {
      parallelogramMatch = true;
  }


  hitCircle = collidePointCircle(mouseX, mouseY, circleX, circleY, 125);
  
  // Draw the destination circle
  fill(150, 150, 150);
  circle(500, 600, 125);
  
  // Draw the movable circle
  if (circleMatch == false) {
    fill (250, 50, 50);
  }
  else {
    fill (50, 250, 50);
  }
  
  circle(circleX, circleY, 125);

  

  if (hitCircle && mouseIsPressed) {
    circleX = mouseX;
    circleY = mouseY;
  }

  circleMatch = collideCircleCircle(500, 600, 25, circleX, circleY, 25);

  // Draw the destination triangle
  beginShape();
  fill(150, 150, 150);
  for (const { x, y } of shape3b)  vertex(x, y);
  endShape(CLOSE);

  
  // Draw the movable triangle
  beginShape();
  if (triangleMatch == false) {
    fill(250, 50, 50);
  } else {
    fill(50, 250, 50);
  }
  for (const { x, y } of shape3a)  vertex(x, y);
  endShape(CLOSE);
  
  hitTriangle = collidePointPoly(mouseX, mouseY, shape3a);
  if (hitTriangle && mouseIsPressed) {
    shape3a[0].set(mouseX - 50, mouseY + 50);
    shape3a[1].set(mouseX, mouseY - 50);
    shape3a[2].set(mouseX + 50, mouseY + 50);
  }


  if (p5.Vector.sub(shape3a[0], shape3b[0]).mag() < 10 &&
      p5.Vector.sub(shape3a[1], shape3b[1]).mag() < 10 &&
      p5.Vector.sub(shape3a[2], shape3b[2]).mag() < 10) {
      triangleMatch  = true;
  }


  // Draw the destination diamond
  beginShape();
  fill(150, 150, 150);
  for (const { x, y } of shape4b)  vertex(x, y);
  endShape(CLOSE);

  // Draw the movable diamond
  beginShape();
  if (diamondMatch == false) {
    fill(250, 50, 50);
  } else {
    fill(50, 250, 50);
  }
  for (const { x, y } of shape4a)  vertex(x, y);
  endShape(CLOSE);

  hitDiamond = collidePointPoly(mouseX, mouseY, shape4a);

  if (hitDiamond && mouseIsPressed) {
    shape4a[0].set(mouseX - 50, mouseY);
    shape4a[1].set(mouseX, mouseY - 75);
    shape4a[2].set(mouseX + 50, mouseY);
    shape4a[3].set(mouseX, mouseY + 75);
  }

  if (p5.Vector.sub(shape4a[0], shape4b[0]).mag() < 10 &&
      p5.Vector.sub(shape4a[1], shape4b[1]).mag() < 10 &&
      p5.Vector.sub(shape4a[2], shape4b[2]).mag() < 10 &&
      p5.Vector.sub(shape4a[3], shape4b[3]).mag() < 10) {
      diamondMatch = true;
  }

  if (circleMatch && parallelogramMatch && triangleMatch && diamondMatch) {
    image(fireworks, 80, 100);
  }
  

  
  myButton.draw();  

  fill(250,250,250);
  circle(mouseX, mouseY, 10);

}


