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
  // Define the initial position for green parallelogram
  shape1g[0] = createVector(50, 650);
  shape1g[1] = createVector(100, 550);
  shape1g[2] = createVector(200, 550);
  shape1g[3] = createVector(150, 650);

  // Define the initial position for the blue parallelogram
  shape1b[0] = createVector(550, 650);
  shape1b[1] = createVector(600, 550);
  shape1b[2] = createVector(700, 550);
  shape1b[3] = createVector(650, 650);

  mouseDiff = createVector(); // temp vec for randomPoly[]

  // Define initial position for the green circle
  circleXg = 780;
  circleYg = 600;
  
  // Define initial position for the blue circle
  circleXb = 550;
  circleYb = 500;
  
  
  // Define initial position for the green triangle
  shape3g[0] = createVector(250, 500);
  shape3g[1] = createVector(300, 400);
  shape3g[2] = createVector(350, 500);

  // Define initial position for the blue triangle
  shape3b[0] = createVector(250, 600);
  shape3b[1] = createVector(300, 500);
  shape3b[2] = createVector(350, 600);

  // Define initial position for the green diamond
  shape4g[0] = createVector(400, 600);
  shape4g[1] = createVector(450, 525);
  shape4g[2] = createVector(500, 600);
  shape4g[3] = createVector(450, 675);

  // Define initial position for the blue diamond
  shape4b[0] = createVector(400, 700);
  shape4b[1] = createVector(450, 625);
  shape4b[2] = createVector(500, 700);
  shape4b[3] = createVector(450, 775);


}

function setup() {
  createCanvas(1200, 750);

  myButton = new Clickable();     //Create button
  myButton.locate(250, 20);        //Position Button
  myButton.text = "Return to\nmain menu";    //Set the text displayed in the button
  myButton.onPress = function(){  //When myButton is pressed
  this.color = "#AAAAFF";         //Change button color
  alert("Yay!");                  //Show an alert message
  }

  fireworks = loadImage("assets/giphy.gif")

  frameRate(240);
}

function draw() {
  background(120);

  // Draw the blue destination area
  fill(103, 64, 240);
  rect(600, 0, 600, 500);
  
  // Draw all the green shapes
  fill(178, 180, 5);

  // Draw the green destination area
  rect(0, 0, 600, 500)

  // Draw the green parallelogram
  beginShape();
  for (const { x, y } of shape1g)  vertex(x, y);
  endShape(CLOSE);



  circle(circleXg, circleYg, 125);

  // Draw the green triangle
  beginShape();
  for (const { x, y } of shape3g)  vertex(x, y);
  endShape(CLOSE);

  // Draw the green diamond
  beginShape();
  for (const { x, y } of shape4g)  vertex(x, y);
  endShape(CLOSE);

  // Draw all the blue shapes
  fill(103, 64, 240);

  // Draw the blue parallelogram
  beginShape();
  for (const { x, y } of shape1b)  vertex(x, y);
  endShape(CLOSE);

  // Draw the blue circle
  circle(circleXb, circleYb, 125);

  // Draw the blue triangle
  beginShape();
  for (const { x, y } of shape3b)  vertex(x, y);
  endShape(CLOSE);

  // Draw the blue diamond
  beginShape();
  for (const { x, y } of shape4b)  vertex(x, y);
  endShape(CLOSE);



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

}