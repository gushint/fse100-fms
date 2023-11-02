// The green destination zone
shape0g = [];

// The blue destination zone
shape0b = [];


// The movable parallelogram
shape1g = [];
// The destination parallelogram
shape1b = [];

// The movable triangle
shape3g = [];
// The destination triangle
shape3b = [];

// The movable diamond
shape4g = [];
// The destination diamond
shape4b = [];

function preload() {
  // Define initial position for green desination zone
  shape0g[0] = createVector(0, 0);
  shape0g[1] = createVector(600, 0); 
  shape0g[2] = createVector(600, 500);
  shape0g[3] = createVector(0, 500);

  // Define initial position for blue desination zone
  shape0b[0] = createVector(600, 0);
  shape0b[1] = createVector(1200, 0);
  shape0b[2] = createVector(1200, 500);
  shape0b[3] = createVector(600, 500);

  // Define the initial position for green parallelogram
  shape1g[0] = createVector(25, 650);
  shape1g[1] = createVector(75, 550);
  shape1g[2] = createVector(175, 550);
  shape1g[3] = createVector(125, 650);

  // Define the initial position for the blue parallelogram
  shape1b[0] = createVector(575, 650);
  shape1b[1] = createVector(625, 550);
  shape1b[2] = createVector(725, 550);
  shape1b[3] = createVector(675, 650);

  mouseDiff = createVector(); // temp vec for randomPoly[]

  // Define initial position for the green circle
  circleXg = 800;
  circleYg = 600;
  
  // Define initial position for the blue circle
  circleXb = 250;
  circleYb = 600;
  
  
  // Define initial position for the green triangle
  shape3g[0] = createVector(325, 650);
  shape3g[1] = createVector(375, 550);
  shape3g[2] = createVector(425, 650);

  // Define initial position for the blue triangle
  shape3b[0] = createVector(900, 650);
  shape3b[1] = createVector(950, 550);
  shape3b[2] = createVector(1000, 650);

  // Define initial position for the green diamond
  shape4g[0] = createVector(450, 600);
  shape4g[1] = createVector(500, 525);
  shape4g[2] = createVector(550, 600);
  shape4g[3] = createVector(500, 675);

  // Define initial position for the blue diamond
  shape4b[0] = createVector(1050, 600);
  shape4b[1] = createVector(1100, 525);
  shape4b[2] = createVector(1150, 600);
  shape4b[3] = createVector(1100, 675);

}

function setup() {
  createCanvas(1200, 750);

  myButton = new Clickable();     //Create button
  myButton.locate(250, 20);        //Position Button
  myButton.text = "Return to\nmain menu";    //Set the text displayed in the button
  myButton.onPress = function(){  //When myButton is pressed
    this.color = "#AAAAFF";         //Change button color
    window.close();                  //Close the window since the main manu is still open in the previus tab
  }

  // Initialize variables for collision detection
  parallelogramGreenMatch = false;
  parallelogramBlueMatch = false;
  circleGreenMatch = false;
  circleBlueMatch = false;
  triangleGreenMatch = false;
  triangleBlueMatch = false;
  diamondGreenMatch = false;
  diamondBlueMatch = false;

  fireworks = loadImage("/assets/giphy.gif");

  frameRate(500);
}

function draw() {
  //var scribble = new Scribble();
  randomSeed(5675);
  

  background(120);

  // Draw the blue destination area
  fill(103, 64, 240);
  beginShape();
  for (const { x, y } of shape0b)  vertex(x, y);
  endShape(CLOSE);
  
  // Draw all the green shapes
  fill(178, 180, 5);

  // Draw the green destination area
  beginShape();
  for (const { x, y } of shape0g)  vertex(x, y);
  endShape(CLOSE);

  if (parallelogramGreenMatch == true) {
    fill(50, 250, 50);
  }
  // Draw the green parallelogram
  beginShape();
  for (const { x, y } of shape1g)  vertex(x, y);
  endShape(CLOSE);

  if (parallelogramGreenMatch == true) {
    fill(178, 180, 5);
  }

  if (circleGreenMatch) {
    fill(50, 250, 50);
  }
  // Draw the green circle
  circle(circleXg, circleYg, 125);
  if (circleGreenMatch) {
    fill(178, 180, 5);
  }

  if (triangleGreenMatch) {
    fill(50, 250, 50);
  }
  // Draw the green triangle
  beginShape();
  for (const { x, y } of shape3g)  vertex(x, y);
  endShape(CLOSE);

  if (triangleGreenMatch) {
    fill(178, 180, 5);
  }

  if (diamondGreenMatch) {
    fill(50, 250, 50);
  }
  // Draw the green diamond
  beginShape();
  for (const { x, y } of shape4g)  vertex(x, y);
  endShape(CLOSE);

  // Draw all the blue shapes
  fill(103, 64, 240);

  if (parallelogramBlueMatch == true) {
    fill(50, 250, 50);
  }

  // Draw the blue parallelogram
  beginShape();
  for (const { x, y } of shape1b)  vertex(x, y);
  endShape(CLOSE);

  if (parallelogramBlueMatch == true) {
    fill(103, 64, 240);
  }

  if (circleBlueMatch) {
    fill(50, 250, 50);
  }
  // Draw the blue circle
  circle(circleXb, circleYb, 125);
  if (circleBlueMatch) {
    fill(103, 64, 240);
  }

  if (triangleBlueMatch) {
    fill(50, 250, 50);
  }
  // Draw the blue triangle
  beginShape();
  for (const { x, y } of shape3b)  vertex(x, y);
  endShape(CLOSE);
  if (triangleBlueMatch) {
    fill(103, 64, 240);
  }

  if (diamondBlueMatch) {
    fill(50, 250, 50);
  }
  // Draw the blue diamond
  beginShape();
  for (const { x, y } of shape4b)  vertex(x, y);
  endShape(CLOSE);
  if (diamondBlueMatch) {
    fill(103, 64, 240);
  }

  // Check if the mouse is over the parallelogram
  hitParallelogramGreen = collidePointPoly(mouseX, mouseY, shape1g);
  // Move the Paralleleogram with the mouse
  if (hitParallelogramGreen && mouseIsPressed) {
    shape1g[0].set(mouseX -75, mouseY + 50);
    shape1g[1].set(mouseX - 25, mouseY - 50);
    shape1g[2].set(mouseX + 75, mouseY - 50);
    shape1g[3].set(mouseX + 25, mouseY + 50);
  }

  // Check if the mouse is hovering over the green circle
  hitCircleGreen = collidePointCircle(mouseX, mouseY, circleXg, circleYg, 125);
  // Move the circle with the mouse
  if (hitCircleGreen && mouseIsPressed) {
    circleXg = mouseX;
    circleYg = mouseY;
  }

  // Check if the mouse is over the green triangle
  hitTriangleGreen = collidePointPoly(mouseX, mouseY, shape3g);
  // Move the triangle with the mouse
  if (hitTriangleGreen && mouseIsPressed) {
    shape3g[0].set(mouseX - 50, mouseY + 50);
    shape3g[1].set(mouseX, mouseY - 50);
    shape3g[2].set(mouseX + 50, mouseY + 50);
  }

  // Check if the mouse is over the green diamond
  hitDiamondGreen = collidePointPoly(mouseX, mouseY, shape4g);
  // Move the diamond with the mouse
  if (hitDiamondGreen && mouseIsPressed) {
    shape4g[0].set(mouseX - 50, mouseY);
    shape4g[1].set(mouseX, mouseY - 75);
    shape4g[2].set(mouseX + 50, mouseY);
    shape4g[3].set(mouseX, mouseY + 75);
  }


  // Check if the mouse is over the blue parallelogram
  hitParallelogramBlue = collidePointPoly(mouseX, mouseY, shape1b);
  // Move the Paralleleogram with the mouse
  if (hitParallelogramBlue && mouseIsPressed) {
    shape1b[0].set(mouseX -75, mouseY + 50);
    shape1b[1].set(mouseX - 25, mouseY - 50);
    shape1b[2].set(mouseX + 75, mouseY - 50);
    shape1b[3].set(mouseX + 25, mouseY + 50);
  }

  // Check if the mouse is hovering over the blue circle
  hitCircleBlue = collidePointCircle(mouseX, mouseY, circleXb, circleYb, 125);
  // Move the circle with the mouse
  if (hitCircleBlue && mouseIsPressed) {
    circleXb = mouseX;
    circleYb = mouseY;
  }

  // Check if the mouse is over the blue triangle
  hitTriangleBlue = collidePointPoly(mouseX, mouseY, shape3b);
  // Move the triangle with the mouse
  if (hitTriangleBlue && mouseIsPressed) {
    shape3b[0].set(mouseX - 50, mouseY + 50);
    shape3b[1].set(mouseX, mouseY - 50);
    shape3b[2].set(mouseX + 50, mouseY + 50);
  }

  // Check if the mouse is over the blue diamond
  hitDiamondBlue = collidePointPoly(mouseX, mouseY, shape4b);
  // Move the diamond with the mouse
  if (hitDiamondBlue && mouseIsPressed) {
    shape4b[0].set(mouseX - 50, mouseY);
    shape4b[1].set(mouseX, mouseY - 75);
    shape4b[2].set(mouseX + 50, mouseY);
    shape4b[3].set(mouseX, mouseY + 75);
  }


  parallelogramGreenMatch = collidePolyPoly(shape0g, shape1g, true);
  parallelogramBlueMatch = collidePolyPoly(shape0b, shape1b, true);

  circleGreenMatch = collideCirclePoly(circleXg, circleYg, 125, shape0g, true);
  circleBlueMatch = collideCirclePoly(circleXb, circleYb, 125, shape0b, true);

  triangleGreenMatch = collidePolyPoly(shape0g, shape3g, true);
  triangleBlueMatch = collidePolyPoly(shape0b, shape3b, true);

  diamondGreenMatch = collidePolyPoly(shape0g, shape4g, true);
  diamondBlueMatch = collidePolyPoly(shape0b, shape4b, true);


  if (parallelogramBlueMatch && parallelogramGreenMatch && circleBlueMatch && circleGreenMatch && triangleBlueMatch && triangleGreenMatch && diamondBlueMatch && diamondGreenMatch) {
    console.log("fireworks");
    image(fireworks, 80, 100);
    image(fireworks, 600, 100);
  }

}