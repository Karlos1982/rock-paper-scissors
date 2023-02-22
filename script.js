/* set ai choice
get user choice
decide winner
award point
play another round
announce winner of 5 rounds
*/

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const roundResult = document.querySelector('#round-result');
const computerPoints = document.querySelector('#computer-score');
const playerPoints = document.querySelector('#player-score');
const gameResult = document.querySelector('#game-result');

//declare variables
const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//set random computer choice
function getComputerChoice(){
    return choices[Math.floor(Math.random()*choices.length)];
}

function clickButton(event) {

    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}

rockButton.addEventListener('click', clickButton);
paperButton.addEventListener('click', clickButton);
scissorsButton.addEventListener('click', clickButton);

function reset() {
    
    playerScore = 0;
    playerPoints.textContent = "Player :";
    computerScore = 0;
    computerPoints.textContent = "Computer :";
    roundResult.textContent = "";
    
}


//play a round
function playRound(playerSelection, computerSelection){
    
    function playerWin() {
        playerScore++;
        playerPoints.textContent = `Player : ${playerScore}`;
    }
    
    function computerWin() {
        computerScore++;
        computerPoints.textContent = `Computer : ${computerScore}`;
    }

    //determine winner
    if (playerSelection === computerSelection)
    roundResult.textContent = 'It is a draw';
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    roundResult.textContent = 'You Lose! Paper beats Rock';
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    roundResult.textContent = 'You Win! Rock beats Scissors';
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    roundResult.textContent = 'You Win! Paper beats Rock';
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    roundResult.textContent = 'You Lose! Scissors beat Paper';
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    roundResult.textContent = 'You Lose! Rock beats Scissors';
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    roundResult.textContent = 'You Win! Scissors beat Paper';
    
    //Scoring
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper')
        playerWin();
        else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock')
        computerWin();

        // if playerScore === 5 => display You Win => reset scores
        if (playerScore === 5){
            gameResult.textContent = 'Congratulations, You Won!!!';
            reset();
        } 
        // if computerScore === 5 => display You Lose => reset scores
        else if (computerScore === 5) {
            gameResult.textContent = 'Sorry but you lost :(';
            reset();
        } 
}