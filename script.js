//function for computer to make a choice

function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choice[num].toLowerCase();
}

let computerSelection = computerPlay;

function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection){
        return "It's a tie.  Both you and the computer chose " + playerSelection.toLowerCase() + ".";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        return "You lose.  You chose " + playerSelection.toLowerCase() + " while the computer chose " + computerSelection + ".";
    } else {
        return "You win.  You chose " + playerSelection.toLowerCase() + " while the computer chose " + computerSelection + ".";
    }
}

console.log(playRound("rock"));
