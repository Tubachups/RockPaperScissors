let win = 0;
let loss = 0;
let draw = 0;

const rockbtn = document.querySelector('.rockbtn');
const paperbtn = document.querySelector('.paperbtn');
const scissorbtn = document.querySelector('.scissorbtn');
const result = document.querySelector('.result');
const resetbtn = document.querySelector('.resetbtn');

const myChoice = document.querySelector('.playerChoice');
const cpChoice = document.querySelector('.compChoice');
const winStreak = document.querySelector('.win');
const lossStreak = document.querySelector('.loss');
const drawStreak = document.querySelector('.draw');
const scoreContainer = document.querySelector('.score');

rockbtn.onclick = () => makeMove('rock');
paperbtn.onclick = () => makeMove('paper');
scissorbtn.onclick = () => makeMove('scissors');
resetbtn.onclick = () => resetScore();



function makeMove(playerChoice) {
  const pick = ['rock', 'paper', 'scissors'];
  const randomPick = Math.round(Math.random() * 2);

  const compChoice = pick[randomPick];

  if (playerChoice == compChoice) {
    result.innerHTML = `<strong>Tie</strong>`;
    drawStreak.innerText = ++draw;
    myChoice.src = `img/${playerChoice}.png`;
    cpChoice.src = `img/${compChoice}.png`;

  } else if (
    (playerChoice == 'rock' && compChoice == 'scissors') ||
    (playerChoice == 'paper' && compChoice == 'rock') ||
    (playerChoice == 'scissors' && compChoice == 'paper')
  ) {
    result.innerHTML = `<strong>You win :)</strong>`;
    winStreak.innerText = ++win;
    myChoice.src = `img/${playerChoice}.png`;
    cpChoice.src = `img/${compChoice}.png`;

  } else {
    result.innerHTML = `<strong>You lose noob hahah</strong>`;
    lossStreak.innerText = ++loss;
    myChoice.src = `img/${playerChoice}.png`;
    cpChoice.src = `img/${compChoice}.png`;
  }

  scoreContainer.style.display = 'block';
}

function resetScore(){
  win = 0;
  loss = 0;
  draw = 0;
  
  winStreak.innerText = win;
  lossStreak.innerText = loss;
  drawStreak.innerText = draw;
}
  