let playerWinCount = 0;
let computerWinCount = 0;
let playerWin = false;
let compWin = false;



function startGame() {
    let playAgain = true;
    while (playAgain === true) {
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        playAgain = playAgainPrompt();

    }
}


function getPlayerChoice() {
    let correctSelection = false;
    while (correctSelection === false) {
        let playerSelectionInput = prompt("CHOOSE YOUR WEAPON");
        let playerSelection = playerSelectionInput.toUpperCase();
        if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
            console.log("YOU HAVE CHOSEN", playerSelection)
            correctSelection = true;
            return playerSelection;
        }
        else {
            console.log("THAT IS THE WEAPON OF FOOLS AND COWARDS. TRY AGAIN.")
        }
    }
}



function getComputerChoice() {
    let selectionArray = ["ROCK", "PAPER", "SCISSORS"]
    let computerSelection = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    console.log("YOUR OPPONENT HAS CHOSEN", computerSelection)

    return computerSelection;
};




function playRound(playerChoiceRound, computerChoiceRound) {
    console.log("LET COMBAT BEGIN");

    if (playerChoiceRound === "ROCK") {
        if (computerChoiceRound === "SCISSORS") {
            console.log(playerChoiceRound, " BEATS ", computerChoiceRound, "! YOU WIN!");
            playerWin = true;
            compWin = false;
        }
        else {
            if (computerChoiceRound === "PAPER") {
                console.log(computerChoiceRound, " BEATS ", playerChoiceRound, "! YOU LOSE!");
                playerWin = false;
                compWin = true;
            }
            else {
                console.log("A TIE! EVERYONE LOSES.")
                playerWin = false;
                compWin = false;
            }
        }
    }
    else {
        if (playerChoiceRound === "PAPER") {
            if (computerChoiceRound === "ROCK") {
                console.log(playerChoiceRound, " BEATS ", computerChoiceRound, "! YOU WIN!");
                playerWin = true;
                compWin = false;
            }
            else {
                if (computerChoiceRound === "SCISSORS") {
                    console.log(computerChoiceRound, " BEATS ", playerChoiceRound, "! YOU LOSE!");
                    playerWin = false;
                    compWin = true;
                }
                else {
                    console.log("A TIE! EVERYONE LOSES.")
                    playerWin = false;
                    compWin = false;
                }

            }
        }
        else {
            if (playerChoiceRound === "SCISSORS") {
                if (computerChoiceRound === "PAPER") {
                    console.log(playerChoiceRound, " BEATS ", computerChoiceRound, "! YOU WIN!");
                    playerWin = false;
                    compWin = false;
                }
                else {
                    if (computerChoiceRound === "ROCK") {
                        console.log(computerChoiceRound, " BEATS ", playerChoiceRound, "! YOU LOSE!");
                        playerWin = false;
                        compWin = true;
                    }
                    else {
                        console.log("A TIE! EVERYONE LOSES.");
                        playerWin = false;
                        compWin = false;
                    }
                }

            }
        }
    }

    if (playerWin = true) { playerWinCount++ }
    else {
        if (compWin = true) { computerWinCount++ }
        else { }
    }
    console.log("Player Wins", playerWinCount);
    console.log("Computer Wins: ", computerWinCount);
}


function playAgainPrompt() {
    let playAgainPromptInput = prompt("Play again?");
    let playAgainPrompt = playAgainPromptInput.toUpperCase();
    let playAgainCorrectSelection = false;
    let playAgainAnswer = true;


    while (playAgainCorrectSelection === false) {
        if (playAgainPrompt === "Y" || playAgainPrompt === "YES") {
            console.log("COMBAT BEGINS ANEW");
            playAgainCorrectSelection = true;
            playAgainAnswer = true;
            return playAgainAnswer;
        }
        else {
            if (playAgainPrompt === "N" || playAgainPrompt === "NO") {
                playAgainCorrectSelection = true;
                console.log("YOUR WEAKNESS WILL NOT GO UNNOTED. BEGONE.")
                playAgainAnswer = false;
                return playAgainAnswer;
            }
            else {
                playAgainPromptInput = prompt("I DON'T UNDERSTAND. YES OR NO?");
                playAgainPrompt = playAgainPromptInput.toUpperCase();
            }
        }
    }
}