let img;
function setup() {
  createCanvas(400, 420);
  var drawButton = createButton("Typing");
  drawButton.position(160,100);
  drawButton.mousePressed(toTyping);
  
  var drawButton2 = createButton("Shape Sort");
  drawButton2.position(160,140);
  drawButton2.mousePressed(toShapeSort);
  
  var drawButton3 = createButton("Color Sort");
  drawButton3.position(160,180);
  drawButton3.mousePressed(gotoGame1);

  var drawButton4 = createButton("Block Stack");
  drawButton4.position(160,220);
  drawButton4.mousePressed(toBlockStack);
  
  var drawButton5 = createButton("Settings");
  drawButton5.position(160,260);
  drawButton5.mousePressed(gotoGame1);
  
  var drawButton6 = createButton("Credits");
  drawButton6.position(160,320);
  drawButton6.mousePressed(gotoGame1);
}

function draw() {
  background(48,172,217)
}

function gotoGame1() {
  window.open("/pages/color_sort.html");
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

function toBlockStack() {
  window.open('/pages/block_stack.html');
}