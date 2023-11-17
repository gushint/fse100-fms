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

    
    // Level 1 Blocks 
    l1_top = 75;
    l1_bottom = 150;

    a_left = 226;
    // this is the furtest right line
    a_right = 301;

    l1a[0] = createVector(a_right,l1_bottom);
    l1a[1] = createVector(a_left,l1_bottom);
    l1a[2] = createVector(a_left,l1_top);
    l1a[3] = createVector(a_right,l1_top);

    b_left = 151;
    b_right = 226;
    l1b[0] = createVector(b_right, l1_bottom);
    l1b[1] = createVector(b_left, l1_bottom);
    l1b[2] = createVector(b_left, l1_top);
    l1b[3] = createVector(b_right, l1_top);

    c_left = 76;
    c_right = 151;
    l1c[0] = createVector(c_right, l1_bottom);
    l1c[1] = createVector(c_left, l1_bottom);
    l1c[2] = createVector(c_left, l1_top);
    l1c[3] = createVector(c_right, l1_top);

    // This is the furthest left line
    d_left = 1;
    d_right = 76;
    l1d[0] = createVector(d_right, l1_bottom);
    l1d[1] = createVector(d_left, l1_bottom);
    l1d[2] = createVector(d_left, l1_top);
    l1d[3] = createVector(d_right, l1_top);


    // Level 2 blocks
    l2_top = 11150;
    l2_bottom = 11225;

    l2a[0] = createVector(a_right, l2_bottom);
    l2a[1] = createVector(a_left, l2_bottom);
    l2a[2] = createVector(a_left, l2_top);
    l2a[3] = createVector(a_right, l2_top);

    l2b[0] = createVector(b_right, l2_bottom);
    l2b[1] = createVector(b_left, l2_bottom);
    l2b[2] = createVector(b_left, l2_top);
    l2b[3] = createVector(b_right, l2_top);

    l2c[0] = createVector(c_right, l2_bottom);
    l2c[1] = createVector(c_left, l2_bottom);
    l2c[2] = createVector(c_left, l2_top);
    l2c[3] = createVector(c_right, l2_top);

    // Level 3 blocks
    l3_top = 22325;
    l3_bottom = 22385;


    l3a[0] = createVector(181, l3_bottom);
    l3a[1] = createVector(121, l3_bottom);
    l3a[2] = createVector(121, l3_top);
    l3a[3] = createVector(181, l3_top);

    l3b[0] = createVector(121, l3_bottom);
    l3b[1] = createVector(61, l3_bottom);
    l3b[2] = createVector(61, l3_top);
    l3b[3] = createVector(121, l3_top);

    l3c[0] = createVector(61, l3_bottom);
    l3c[1] = createVector(1, l3_bottom);
    l3c[2] = createVector(1, l3_top);
    l3c[3] = createVector(61, l3_top);

    // Level 4 blocks   
    l4_top = 33400;
    l4_bottom = 33460;

    l4a[0] = createVector(121, l4_bottom);
    l4a[1] = createVector(61, l4_bottom);
    l4a[2] = createVector(61, l4_top);
    l4a[3] = createVector(121, l4_top);

    l4b[0] = createVector(61, l4_bottom);
    l4b[1] = createVector(1, l4_bottom);
    l4b[2] = createVector(1, l4_top);
    l4b[3] = createVector(61, l4_top);

    // Level 5 blocks
    l5_top = 44475;
    l5_bottom = 44520;

    l5a[0] = createVector(91, l5_bottom);
    l5a[1] = createVector(46, l5_bottom);
    l5a[2] = createVector(46, l5_top);
    l5a[3] = createVector(91, l5_top);

    l5b[0] = createVector(46, l5_bottom);
    l5b[1] = createVector(1, l5_bottom);
    l5b[2] = createVector(1, l5_top);
    l5b[3] = createVector(46, l5_top);

    // Level 6 blocks
    l6_top = 55550;
    l6_bottom = 55595;

    l6a[0] = createVector(91, l6_bottom);
    l6a[1] = createVector(46, l6_bottom);
    l6a[2] = createVector(46, l6_top);
    l6a[3] = createVector(91, l6_top);

    l6b[0] = createVector(46, l6_bottom);
    l6b[1] = createVector(1, l6_bottom);
    l6b[2] = createVector(1, l6_top);
    l6b[3] = createVector(46, l6_top);

    // Level 7 blocks
    l7_top = 66625;
    l7_bottom = 66670;

    l7a[0] = createVector(46, l7_bottom);
    l7a[1] = createVector(1, l7_bottom);
    l7a[2] = createVector(1, l7_top);
    l7a[3] = createVector(46, l7_top); 

    // Level 8 blocks
    l8_top = 77700;
    l8_bottom = 77730;

    l8a[0] = createVector(31, l8_bottom);
    l8a[1] = createVector(1, l8_bottom);
    l8a[2] = createVector(1, l8_top);
    l8a[3] = createVector(31, l8_top);

    // Level 9 blocks
    l9_top = 88800;
    l9_bottom = 88825;

    l9a[0] = createVector(26, l9_bottom);
    l9a[1] = createVector(1, l9_bottom);
    l9a[2] = createVector(1, l9_top);
    l9a[3] = createVector(26, l9_top);


    level = 1;
    dropping = false;
    direction = "right";

    yaySound = loadSound('yay_effect.mp3');
    wrongSound = loadSound('wrong_effect.mp3');

    isGameOver = false;
    gameLost = false;
    gameWon = false;
}


function setup() {
    createCanvas(900, 750);

    myButton = new Clickable();     //Create button
    myButton.locate(750, 10);        //Position Button
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
    } else if (level == 3) {
        direction = check_wall_collision(l3c[1].array()[0], l3a[0].array()[0], direction);
    } else if (level == 4) {
        direction = check_wall_collision(l4b[1].array()[0], l4a[0].array()[0], direction);
    } else if (level == 5) {
        direction = check_wall_collision(l5b[1].array()[0], l5a[0].array()[0], direction);
    } else if (level == 6) {
        direction = check_wall_collision(l6b[1].array()[0], l6a[0].array()[0], direction);
    } else if (level == 7) {
        direction = check_wall_collision(l7a[1].array()[0], l7a[0].array()[0], direction);
    } else if (level == 8) {
        direction = check_wall_collision(l8a[1].array()[0], l8a[0].array()[0], direction);
    } else if (level == 9) {
        direction = check_wall_collision(l9a[1].array()[0], l9a[0].array()[0], direction);
    }
    
    if (level == 1) {
        move(direction, 10, l1a);
        move(direction, 10, l1b);
        move(direction, 10, l1c);
        move(direction, 10, l1d);
    } else if (level == 2) {
        move(direction, 12, l2a);
        move(direction, 12, l2b);
        move(direction, 12, l2c);
    } else if (level == 3) {
        move(direction, 15, l3a);
        move(direction, 15, l3b);
        move(direction, 15, l3c);
    } else if (level == 4) {
        move(direction, 19, l4a);
        move(direction, 19, l4b);
    } else if (level == 5) {
        move(direction, 21, l5a);
        move(direction, 21, l5b);
    } else if (level == 6) {
        move(direction, 25, l6a);
        move(direction, 25, l6b);
    } else if (level == 7) {
        move(direction, 25, l7a);
    } else if (level == 8) {
        move(direction, 25, l8a);
    } else if (level == 9) {
        move(direction, 30, l9a);
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
            //console.log("dropping");
            drop(l2a, -8);
            drop(l2b, -8);
            drop(l2c, -8);  
            newBlockCenter = (l2b[0].array()[0] + l2b[1].array()[0]) / 2;
            dropping = checkBlockCollision(l2b, newBlockCenter, l1a, l1d);
        } else if(level - 1 == 3) {
            drop(l3a, -8);
            drop(l3b, -8);
            drop(l3c, -8);

            newBlockCenter = (l3b[0].array()[0] + l3b[1].array()[0]) / 2;
            dropping = checkBlockCollision(l3b, newBlockCenter, l2a, l2c);
        } else if(level - 1 == 4) {
            drop(l4a, -8);
            drop(l4b, -8);

            newBlockCenter = l4b[0].array()[0];
            dropping = checkBlockCollision(l4b, newBlockCenter, l3a, l3c);
        } else if(level - 1 == 5) {
            drop(l5a, -8);
            drop(l5b, -8);

            newBlockCenter = l5b[0].array()[0];
            dropping = checkBlockCollision(l5b, newBlockCenter, l4a, l4b);
        } else if(level - 1 == 6) {
            drop(l6a, -8);
            drop(l6b, -8);

            newBlockCenter = l6b[0].array()[0];
            dropping = checkBlockCollision(l6b, newBlockCenter, l5a, l5b);
        } else if(level - 1 == 7) {
            drop(l7a, -8);

            newBlockCenter = (l7a[0].array()[0] + l7a[1].array()[0]) / 2;
            dropping = checkBlockCollision(l7a, newBlockCenter, l6a, l6b);
        } else if(level - 1 == 8) {
            drop(l8a, -8);

            newBlockCenter = (l8a[0].array()[0] + l8a[1].array()[0]) / 2;
            dropping = checkBlockCollision(l8a, newBlockCenter, l7a, l7a);
        } else if(level - 1 == 9) {
            drop(l9a, -8);

            newBlockCenter = (l9a[0].array()[0] + l9a[1].array()[0]) / 2;
            dropping = checkBlockCollision(l9a, newBlockCenter, l8a, l8a);
        }
    }

    if (gameLost) {
        background(120);
        fill(255, 255, 255);
        textSize(50);
        text("Game Over", 300, 300);
    } else if (gameWon) {
        background(120);
        image(fireworks, 0, 0, 900, 750);
        fill(255, 255, 255);
        textSize(50);
        text("You Win!", 300, 300);
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
            direction = "right";
        }
        if (level == 2) {
            spawnBlock(11075, l2a);
            spawnBlock(11075, l2b);
            spawnBlock(11075, l2c);
        } else if (level == 3) {
            spawnBlock(22250, l3a);
            spawnBlock(22250, l3b);
            spawnBlock(22250, l3c);
        } else if (level == 4) {
            spawnBlock(33350, l4a);
            spawnBlock(33350, l4b);
        } else if (level == 5) {
            spawnBlock(44425, l5a);
            spawnBlock(44425, l5b);
        } else if (level == 6) {
            spawnBlock(55500, l6a);
            spawnBlock(55500, l6b);
        } else if (level == 7) {
            spawnBlock(66575, l7a);
        } else if (level == 8) {
            spawnBlock(77650, l8a);
        } else if (level == 9) {
            spawnBlock(88750, l9a);
        }
    }
}

function drop(block, distance) {
    for (let i = 0; i < block.length; i++) { 
        block[i] = block[i].sub(0, distance);
    }
    return block;
}

function spawnBlock(amount, block) {
    for (let i = 0; i < block.length; i++) {
        block[i] = block[i].sub(0, amount);
    }
}


function actualDraw() {
    // Display the current level to the user
    fill(255, 255, 255);
    textSize(32);
    text("Level: " + level, 10, 30);

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

    beginShape();
    for (const { x, y } of l3a)  vertex(x, y);
    endShape(CLOSE);
    beginShape();
    for (const { x, y } of l3b)  vertex(x, y);
    endShape(CLOSE);
    beginShape();
    for (const { x, y } of l3c)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l4a)  vertex(x, y);
    endShape(CLOSE);
    beginShape();
    for (const { x, y } of l4b)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l5a)  vertex(x, y);
    endShape(CLOSE);
    beginShape();
    for (const { x, y } of l5b)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l6a)  vertex(x, y);
    endShape(CLOSE);
    beginShape();
    for (const { x, y } of l6b)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l7a)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l8a)  vertex(x, y);
    endShape(CLOSE);

    beginShape();
    for (const { x, y } of l9a)  vertex(x, y);
    endShape(CLOSE);

    myButton.draw();                //Draw the button
}


function checkBlockCollision(newBlock, newBlockCenter, rightMostBlock, leftMostBlock) {
    //console.log(newBlock[0].array()[0]);
    
    if (newBlockCenter <= rightMostBlock[0].array()[0] && newBlockCenter >= leftMostBlock[1].array()[0]) {
        //console.log("checking dropping");
        if (newBlock[0].array()[1] >= rightMostBlock[2].array()[1]) {
            if (level == 9) {
                gameWin();
            }
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
    isGameOver = true;
    gameLost = true;

}

function gameWin() {
    yaySound.play();
    isGameOver = true;
    gameWon = true;

}