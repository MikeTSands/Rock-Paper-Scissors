//function for computer to make a choice

function computerPlay(){
    let choice = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);
    return choice[num].toLowerCase();
}

let computerSelection = computerPlay;

let playerWin = 0;
let compWin = 0;
let gameTie = 0;





//function to play a single round
/*
function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection){
        console.log("It's a tie.  Both you and the computer chose " + playerSelection.toLowerCase() + "."); 
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        console.log("You lose.  You chose " + playerSelection.toLowerCase() + " while the computer chose " + computerSelection + "."); 
    } else {
        console.log("You win.  You chose " + playerSelection.toLowerCase() + " while the computer chose " + computerSelection + "."); 
    }
}
*/
// variables to hold scores are changing, but html is not
function playRound(playerSelection){
    let computerSelection = computerPlay();
    if (playerSelection.toLowerCase() === computerSelection){
        gameTie++ 
        document.getElementById('tie').textContent = "Ties: " + gameTie;
    } else if ((playerSelection.toLowerCase() === "rock" && computerSelection === "paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock")) {
        compWin++
        document.getElementById('computer').textContent = "Computer wins: " + compWin;
    } else {
        playerWin++
        document.getElementById('player').textContent = "Player wins: " + playerWin;
    }
    if (compWin === 5){
        alert("Computer wins!");
    } else if (playerWin === 5){
        alert("Player wins!");
    }
}

//add event listener to play round using buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.innerText)); 
});


/*
function game(){
    // create a way to store the scores
    let scores = [0, 0, 0]
    // create a loop to run the game 5 times and save the score each time, as well as displaying it
    for (let i = 0 ; i < 5 ; i++){
        // create a prompt to get input from human player and match it against the computer's guess
        let selection = window.prompt("Rock, Paper or Scissors?");
        playRound(selection);
        if (selection.toLowerCase() === computerSelection()){
            scores[2] += 1;
        } else if ((selection.toLowerCase() === "rock" && computerSelection() === "paper") || (selection.toLowerCase() === "paper" && computerSelection() === "scissors") || (selection.toLowerCase() === "scissors" && computerSelection() === "rock")){
            scores[1] += 1;
        } else {
            scores[0] += 1;
        }
        
        console.log("You have won " + scores[0] + "time(s), lost " + scores[1] + "time(s) and drew " + scores[2] + " times.")
    }
    
}

game();

*/