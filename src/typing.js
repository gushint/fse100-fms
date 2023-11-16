const words = ['happy', 'fun', 'play', 'friend', 'smile', 'laugh', 'joy', 'color', 'sweet', 'magic', 'candy', 'sunshine', 'puppy', 'kitty', 'rainbow', 'butterfly', 'sparkle', 'giggle', 'bounce', 'gummy', 'hug', 'dream', 'wonder', 'merry', 'snuggle', 'daisy', 'twinkle', 'song', 'treat', 'cuddle', 'jolly', 'playful', 'storybook', 'giggly', 'cherish', 'glisten', 'whisper', 'grin', 'delight', 'lullaby', 'peaches', 'fluffy', 'soar', 'treasure', 'peekaboo', 'silly', 'glimmer', 'snicker', 'munchkin'];
let input, button, message, currentWord, word, feedback, score, scoreboard, yaySound, wrongSound,img;
function preload() {
    yaySound = loadSound('yay_effect.mp3');
    wrongSound = loadSound('wrong_effect.mp3');
    img = loadImage('typingbg.jpg');
}

function setup() {
  preload();
  createCanvas(600, 600);
  wordMessage = createElement('h1', "Enter the Word: ");
  updateCurrentWord();
  feedback = createElement('h1', '');
  score = 0;
  scoreBoard = createElement('h1',"Score: " + score.toString());
  scoreBoard.position(450,300)
  feedback.position(450,200);
  wordMessage.position(450,150);
  
  input = createInput('');
  input.position(450,300);
  //input.size(500);
  formButton();
  //textAlign(CENTER);
  createBackButton();
  background(img);
  
}

function draw() {
  background(img);
}

function formButton() {
   button = createButton('Check');
  button.position(input.x + input.width + 2, 300);
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