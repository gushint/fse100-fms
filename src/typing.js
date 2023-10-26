const words = ["imagine", "fine", "motor", "skills", "creation", "typing", "fun", "math", "opening", "sleep", "editor", "sketch", "easy", "omnipotent"];
let input, button, message, currentWord, word, feedback, score, scoreboard, yaySound, wrongSound;
function preload() {
    yaySound = loadSound('yay_effect.mp3');
    wrongSound = loadSound('wrong_effect.mp3');
}

function setup() {
  preload();
  createCanvas(400, 400);
  wordMessage = createElement('h2', "Enter the Word: ");
  updateCurrentWord();
  feedback = createElement('h2', '');
  score = 0;
  scoreBoard = createElement('h2',"Score: " + score.toString());
  scoreBoard.position(270,200)
  feedback.position(150,200);
  wordMessage.position(200,150);
  
  input = createInput('');
  input.position(200,200);
  formButton();
  textAlign(CENTER);
  createBackButton();
  
}

function draw() {}

function formButton() {
   button = createButton('Check');
  button.position(input.x + input.width + 2, 200);
  button.mousePressed(checkSpelling);
}

function createBackButton() {
  const drawButton = createButton("Back");
  drawButton.position(10,10);
  drawButton.mousePressed(backToMenu);
}

function checkSpelling() {
  let inputName = input.value();
  inputName.toLowerCase();
  input.value('');

  if(inputName === currentWord) {
    feedback.html("correct!");
    yaySound.play();
    score++;
    scoreBoard.html("Score: " + score.toString())
  } else {
    feedback.html("Incorrect");
    wrongSound.play();
  }
  updateCurrentWord();
}

function backToMenu() {
window.open('/index.html');
}

function updateCurrentWord() {
  let previousWord = currentWord;
  currentWord = words[Math.floor(Math.random()*words.length)];
  if(currentWord === previousWord) { // ensures no duplicate word
    updateCurrentWord();
  }
  wordMessage.html("Enter the Word: " + currentWord);
}