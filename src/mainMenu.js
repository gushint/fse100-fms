let img;
function setup() {
  createCanvas(400, 400);
  var drawButton = createButton("Typing");
  drawButton.position(160,100);
  drawButton.mousePressed(toTyping);
  
    var drawButton2 = createButton("Shape Sort");
  drawButton2.position(160,140);
  drawButton2.mousePressed(toShapeSort);
  
    var drawButton3 = createButton("activity 3");
  drawButton3.position(160,180);
  drawButton3.mousePressed(gotoGame1);
  
    var drawButton4 = createButton("Settings");
  drawButton4.position(160,220);
  drawButton4.mousePressed(gotoGame1);
  
    var drawButton5 = createButton("Credits");
  drawButton5.position(160,260);
  drawButton5.mousePressed(gotoGame1);
}

function draw() {
  background(48,172,217)
}

function gotoGame1() {
  window.open("https://editor.p5js.org/ahinterm/full/mIBNhnj1I");
}
function credits() {
  window.open("")
}
  
function toShapeSort() {
    window.open('/pages/shape_sort.html')
}

function toTyping() {
  window.open('/pages/typing.html');
}