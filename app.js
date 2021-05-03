// console.log("Hello, World!")
// alert("Hello, World!")

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);


function game() {
    let choices = ["rock","paper","scissors"];
    const playerSelection = playerInput();
    const computerSelection = computerPlay();
    
    
    function playerInput() {
        let playerChoise = prompt("Please choose your object").toLowerCase();
        if (choices.includes(playerChoise)) {
            console.log(playerChoise);
            return playerChoise;
        }
            else {
            console.log("Please choose either rock, paper or scissors")  
            }
    }
    
    function computerPlay() {
        let randomChoices = choices[Math.floor(Math.random()*choices.length)];
        console.log(randomChoices);
        return randomChoices;
    }
    
    
    // If I devide it to 3 fuctions - computerWin a playerWin + draw -> it will be better for
    //         counding the score

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === "rock") {
            return("It's a draw.");
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
            return("You lost!");
        }   else if (playerSelection === "rock" && computerSelection === "scissors") {
            return("Congratz, you win!");
    
        }   else if (playerSelection === "paper" && computerSelection === "paper") {
            return("It's a draw."); 
        }   else if (playerSelection === "paper" && computerSelection === "scissors") {
            return("You lost!");
        }   else if (playerSelection === "paper" && computerSelection === "rock") {
            return("Congratz, you win!");
    
        }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
            return("It's a draw."); 
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            return("You lost!");
        }   else if (playerSelection === "scissors" && computerSelection === "paper") {
            return("Congratz, you win!");
    
        }   else {
            return("Something went terribly wrong.");
        }
    }
    
    return(playRound(playerSelection, computerSelection)); 
}

for (let i=0; i<5; i++) {
    console.log(game());
}

// // or while loop

// let i = 0;
// while (i<3) {
//     console.log(game());
//     i++;
// }

// // or different while loop
// let i=3;
// while(i) console.log(game())(i--);