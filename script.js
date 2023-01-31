/* set ai choice
get user choice
decide winner
award point
play another round
announce winner of 5 rounds
*/

//declare variables
const choices = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;


//play a round
function playRound(playerSelection, computerSelection){
    //set random computer choice
    function getComputerChoice(){
        return choices[Math.floor(Math.random()*choices.length)];
    }
    computerSelection = getComputerChoice();
    
    //get user choice
    playerSelection = 
    prompt("Choose Rock, Paper or Scissors").toLowerCase();

    //determine winner
    if (playerSelection === computerSelection)
    console.log('It is a draw');
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    console.log('You Lose! Paper beats Rock');
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    console.log('You Win! Rock beats Scissors');
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    console.log('You Win! Paper beats Rock');
    else if (playerSelection === 'paper' && computerSelection === 'scissors')
    console.log('You Lose! Scissors beat Paper');
    else if (playerSelection === 'scissors' && computerSelection === 'rock')
    console.log('You Lose! Rock beats Scissors');
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    console.log('You Win! Scissors beat Paper');
    
    //Scoring
        if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper')
        playerScore++;
        else if (playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors' || playerSelection === 'scissors' && computerSelection === 'rock')
        computerScore++;
}


//play a game of 5 rounds
function game(){
    for (let i = 0; i < 5; i++){
        playRound();
        console.log(playerScore +' : ' +computerScore)
    }
        if (playerScore > computerScore)
        console.log('You won the game!!!')
        else if (computerScore > playerScore)
        console.log('You lost the game!!!')
        else console.log('It was a draw')
}


game();