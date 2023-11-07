// This is the block stack game
l1a = [];
l1b = [];
l1c = [];
l1d = [];

l2a = [];
l2b = [];
l2c = [];

l3a = [];
l3b = [];
l3c = [];

l4a = [];
l4b = [];

l5a = [];
l5b = [];

l6a = [];
l6b = [];

l7a = [];

l8a = [];

l9a = [];

l10a = [];
function preload() {
// Level 1 blocks
// left most block
// (-500,-500) (-425,-500)
// (-500,-425) (-425,-425)

direction = "right";

l1_top = 675;
l1_bottom = 750;

l1a_left = 226;
// this is the furtest right line
l1a_right = 301;

l1a[0] = createVector(l1a_right,l1_bottom);
l1a[1] = createVector(l1a_left,l1_bottom);
l1a[2] = createVector(l1a_left,l1_top);
l1a[3] = createVector(l1a_right,l1_top);

l1b_left = 151;
l1b_right = 226;
l1b[0] = createVector(l1b_right, l1_bottom);
l1b[1] = createVector(l1b_left, l1_bottom);
l1b[2] = createVector(l1b_left, l1_top);
l1b[3] = createVector(l1b_right, l1_top);

l1c_left = 76;
l1c_right = 151;
l1c[0] = createVector(l1c_right, l1_bottom);
l1c[1] = createVector(l1c_left, l1_bottom);
l1c[2] = createVector(l1c_left, l1_top);
l1c[3] = createVector(l1c_right, l1_top);

// This is the furthest left line
l1d_left = 1;
l1d_right = 76;
l1d[0] = createVector(l1d_right, l1_bottom);
l1d[1] = createVector(l1d_left, l1_bottom);
l1d[2] = createVector(l1d_left, l1_top);
l1d[3] = createVector(l1d_right, l1_top);


}

function setup() {
  createCanvas(900, 750);

  myButton = new Clickable();     //Create button
  myButton.locate(550, 120);        //Position Button
  myButton.text = "Return to\nmain menu";    //Set the text displayed in the button
  myButton.onPress = function(){  //When myButton is pressed
    this.color = "#AAAAFF";         //Change button color
    window.close();                  //Close the window since the main manu is still open in the previus tab
  }

  fireworks = loadImage("/assets/giphy.gif");

  frameRate(500);
}

function draw() {
    background(120);

    fill(103, 64, 240);
    beginShape();
    for (const { x, y } of l1a)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l1b)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l1c)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l1d)  vertex(x, y);
    endShape(CLOSE);

    direction = check_wall_collision(l1d_left, l1a_right);

    move(direction, 10, l1a_left, l1a_right);
    move(direction, 10, l1b_left, l1b_right);
    move(direction, 10, l1c_left, l1c_right);
    move(direction, 10, l1d_left, l1d_right);


}

function move(direction, speed, left, right) {
    if (direction == "left") {
        left -= speed;
        right -= speed;
    } 
    else if (direction == "right") {
        left += speed;
        right += speed;
    }
}

function check_wall_collision(left, right) {
    if (left <= 0) {
        return "right"
    }
    else if (right >= 900) {
        return "left"
    }
}