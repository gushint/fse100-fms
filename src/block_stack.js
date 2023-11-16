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

function preload() {
    // Level 1 blocks
    // left most block
    // (-500,-500) (-425,-500)
    // (-500,-425) (-425,-425)

    direction = "right";

    l1_top = 75;
    l1_bottom = 150;

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

    l2_top = 11150;
    l2_bottom = 11225;

    l2a_left = 151;
    // This is the furtest right line
    l2a_right = 226;
    l2a[0] = createVector(l2a_right, l2_bottom);
    l2a[1] = createVector(l2a_left, l2_bottom);
    l2a[2] = createVector(l2a_left, l2_top);
    l2a[3] = createVector(l2a_right, l2_top);

    l2b_left = 76;
    l2b_right = 151;
    l2b[0] = createVector(l2b_right, l2_bottom);
    l2b[1] = createVector(l2b_left, l2_bottom);
    l2b[2] = createVector(l2b_left, l2_top);
    l2b[3] = createVector(l2b_right, l2_top);

    // This is the furthest left line
    l2c_left = 1;
    l2c_right = 76;
    l2c[0] = createVector(l2c_right, l2_bottom);
    l2c[1] = createVector(l2c_left, l2_bottom);
    l2c[2] = createVector(l2c_left, l2_top);
    l2c[3] = createVector(l2c_right, l2_top);


    level = 1;
    dropping = false;

    yaySound = loadSound('yay_effect.mp3');
    wrongSound = loadSound('wrong_effect.mp3');

    isGameOver = false;
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

    direction = "right";


}

function draw() {
    background(120);

    actualDraw();
    if (level == 1) {
        direction = check_wall_collision(l1d[1].array()[0], l1a[0].array()[0], direction);
    } else if (level == 2) {
        direction = check_wall_collision(l2c[1].array()[0], l2a[0].array()[0], direction);
    }
    
    if (level == 1) {
        move(direction, 10, l1a);
        move(direction, 10, l1b);
        move(direction, 10, l1c);
        move(direction, 10, l1d);
    } else if (level == 2) {
        move(direction, 10, l2a);
        move(direction, 10, l2b);
        move(direction, 10, l2c);
    }

    if (dropping == true) {
        if (level - 1 == 1) {
            if (l1a[0].array()[1] < 750) {
                l1a = drop(l1a, -8);
                l1b = drop(l1b, -8);
                l1c = drop(l1c, -8);
                l1d = drop(l1d, -8);
            } else {
                dropping = false;
            }
        } else if (level - 1 == 2) {
            console.log("dropping");
            drop(l2a, -8);
            drop(l2b, -8);
            drop(l2c, -8);  
            
            dropping = checkBlockCollision(l2b, l1a, l1d);
        }
    }


}

function move(direction, speed, vector) {
    if (direction == "left") {
        vector[0].sub(speed, 0);
        vector[1].sub(speed, 0);
        vector[2].sub(speed, 0);
        vector[3].sub(speed, 0);
        return;
    } 
    else if (direction == "right") {
        vector[0].sub(-1 * speed, 0);
        vector[1].sub(-1 * speed, 0);
        vector[2].sub(-1 * speed, 0);
        vector[3].sub(-1 * speed, 0);
        return;
    }
}

function check_wall_collision(left, right, direction) {
    if (left <= 0) {
        return "right";
    }
    else if (right >= 900) {
        return "left";
    }
    return direction
}

function keyPressed() {
    if (isGameOver == false) {
        if (keyCode === ENTER) {
            level += 1;
            dropping = true;
        }
        if (level == 2) {
            spawnBlock(11075, l2a);
            spawnBlock(11075, l2b);
            spawnBlock(11075, l2c);
        }
    }
}

function drop(block, distance) {
    for (let i = 0; i < block.length; i++) { 
        block[i] = block[i].sub(0, distance);
    }
    return block;
}


function moveLevel2(vector) {
    if (level == 2) {
        vector[0].sub(0, 2000);
    }
}

function spawnBlock(amount, block) {
    for (let i = 0; i < block.length; i++) {
        block[i] = block[i].sub(0, amount);
    }
}


function actualDraw() {
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

    beginShape();
    for (const { x, y } of l2a)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l2b)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l2c)  vertex(x, y);
    endShape(CLOSE);
}


function checkBlockCollision(newBlock, rightMostBlock, leftMostBlock) {
    //console.log(newBlock[0].array()[0]);
    newBlockCenter = (newBlock[0].array()[0] + newBlock[1].array()[0]) / 2;
    
    if (newBlockCenter <= rightMostBlock[0].array()[0] && newBlockCenter >= leftMostBlock[1].array()[0]) {
        console.log("checking dropping");
        if (newBlock[0].array()[1] >= rightMostBlock[2].array()[1]) {
            return false;
        } else {
            
            return true;
        }
    } else {
        
        if (newBlock[2].array()[1] > 780) {
            gameOver();
            return false;
        } else {
            return true;
        }
    }
}

function gameOver() {
    wrongSound.play();
}