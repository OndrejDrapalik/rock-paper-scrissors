// console.log("Hello, World!")
// alert("Hello, World!")

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', game);
});

function game() {
    
    let choices = ["rock","paper","scissors"];
    const playerSelection = playerInput();
    const computerSelection = computerPlay();
    
    
    function playerInput() {
        console.log("rockpesd");
        return("rock");
    }
 
    
    function computerPlay() {
        let randomChoices = choices[Math.floor(Math.random()*choices.length)];
        console.log(randomChoices);
        return randomChoices;
    }
    


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

// console.log(game())