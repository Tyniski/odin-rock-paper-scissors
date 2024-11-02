function getComputerChoice() {
    let liczba = Math.floor(Math.random() * (4 - 1) + 1);
    if (liczba == 1) {
        return 'rock';
    }
    else if (liczba == 2) {
        return 'paper';
    }
    else if (liczba == 3) {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('rock, paper or scissors?');
        return choice;
    
}

function playRound(hchoice, cchoice) {
    let human = hchoice.toUpperCase();
    let computer = cchoice.toUpperCase();

    if (human == computer) {
        console.log('Tie');
    }
    else if (human == 'ROCK') {
        if (computer == 'PAPER') {
            console.log('You lose! Paper beats rock');
            return computerScore++;
        }
        else if (computer == 'SCISSORS') {
            console.log('You win! Rock beats scissors');
            return humanScore++;
        }
    }
    else if (human == 'PAPER') {
        if (computer == 'SCISSORS') {
            console.log('You lose! Scissors beats paper')
            computerScore++;
        }
        else if (computer == 'ROCK') {
            console.log('You win! Paper beats rock');
            humanScore++;
        }
    }
    else if (human == 'SCISSORS') {
        if (computer == 'ROCK') {
            console.log('You lose! Rock bets scissors');
            computerScore++;
        }
        else if (computer == 'PAPER') {
            console.log('You win! Scissors beats paper');
            humanScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++){
        const humanchoice = getHumanChoice();
        const computerchoice = getComputerChoice();
        playRound(humanchoice, computerchoice);
    }
    if (humanScore > computerScore) {
        console.log('You won! Score is ' + humanScore + ' to ' + computerScore);
        const winner = 'human';
        return winner;
    }
    else if (computerScore > humanScore) {
        console.log('Computer won! Score is ' + computerScore + ' to ' + humanScore);
        const winner = 'computer';
        return winner;
    }
    else if (humanScore == computerScore) {
        console.log('Tie! Score is ' + humanScore + ' to ' + computerScore);
        const winner = 'tie';
        return winner;
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();


