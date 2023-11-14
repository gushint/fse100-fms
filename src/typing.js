const words = ['happy', 'fun', 'play', 'friend', 'smile', 'laugh', 'joy', 'color', 'sweet', 'magic', 'candy', 'sunshine', 'puppy', 'kitty', 'rainbow', 'butterfly', 'sparkle', 'giggle', 'bounce', 'gummy', 'hug', 'dream', 'wonder', 'merry', 'snuggle', 'daisy', 'twinkle', 'song', 'treat', 'cuddle', 'jolly', 'playful', 'storybook', 'giggly', 'cherish', 'glisten', 'whisper', 'grin', 'delight', 'lullaby', 'peaches', 'fluffy', 'soar', 'treasure', 'peekaboo', 'silly', 'glimmer', 'snicker', 'munchkin'];
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
  window.location.href = "https://fse100-fms.pages.dev/";
}

function updateCurrentWord() {
  let previousWord = currentWord;
  currentWord = words[Math.floor(Math.random()*words.length)];
  if(currentWord === previousWord) { // ensures no duplicate word
    updateCurrentWord();
  }
  wordMessage.html("Enter the Word: " + currentWord);
}