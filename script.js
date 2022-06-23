//function for computer to make a choice

function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choice[num];
}

function gamePlay(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie.  Both you and the computer chose " + playerSelection.toLowerCase() + ".";
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") || (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock")) {
        return "You lose.  You chose " + playerSelection.toLowerCase() + " while the computer chose " + computerSelection.toLowerCase() + ".";
    } else {
        return "You win.  You chose " + playerSelection.toLowerCase() + " while the computer chose " + computerSelection.toLowerCase() + ".";
    }
}

console.log(gamePlay("ROCK", "SCISSors"));
console.log(gamePlay("ROCK", "rock"));
console.log(gamePlay("ROCK", "paper"));
console.log(gamePlay("ROcK", "scissors"));