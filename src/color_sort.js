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

function preload() {
// Define initial position for movable parallelogram
  shape1a[0] = createVector(50, 200);
  shape1a[1] = createVector(100, 100);
  shape1a[2] = createVector(200, 100);
  shape1a[3] = createVector(150, 200);

  mouseDiff = createVector(); // temp vec for randomPoly[]

  circleX = 100;
  
  
  // Define initial position for the movable triangle
  shape3a[0] = createVector(250, 500);
  shape3a[1] = createVector(300, 400);
  shape3a[2] = createVector(350, 500);

  // Define initial position for the movable diamond
  shape4a[0] = createVector(400, 600);
  shape4a[1] = createVector(450, 525);
  shape4a[2] = createVector(500, 600);
  shape4a[3] = createVector(450, 675);

}

function setup() {
  createCanvas(600, 750);

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
}