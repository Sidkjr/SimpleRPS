//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
    var number = Math.floor(Math.random() * 3) + 1;
    if (number == 1) {
        return 'Rock'
    }
    else if (number == 2) {
        return 'Paper'
    }
    else {
        return 'Scissors'
    }
}

var score = 0;

//Function that plays a single round of Rock Paper Scissors. 
//The function should take two parameters - the playerSelection and computerSelection
// return a string that declares the winner of the round like so: 
//"You Lose! Paper beats Rock"

function playRound() {
    var playerSelection = prompt("Enter either Rock, Paper or Scissors (Case Sensitive!)");
    var computerSelection = getComputerChoice();
    
    switch(playerSelection) {
        case 'Rock':
            if (computerSelection == 'Rock') {
                return "You both picked Rock! It's a draw.";
            }
            else if(computerSelection == 'Paper') {
                return "Paper beats Rock! You lose."
            }
            else {
                score = score + 1;
                return "Rock beats Scissors! You win."
            }
        
        case 'Paper':
            if (computerSelection == 'Rock') {
                score = score + 1;
                return "Paper beats Rock! You win.";
            }
            else if(computerSelection == 'Paper') {
                return "You both picked Paper! It's a draw."
            }
            else {
                return "Scissors beat Paper! You lose."
            }

        case 'Scissors':
            if (computerSelection == 'Rock') {
                return "Rock beats Scissors! You lose.";
            }
            else if(computerSelection == 'Paper') {
                score = score + 1;
                return "Scissors beat Paper! You win."
            }
            else {
                return "You both picked Scissors! It's a draw."
            }
    }
}

//NEW function called game(). 
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    console.log("Your score at the end is: ", score, "/5")
    console.log("The computer's score is: ", 5 - score, "/5")
}