// console.log("Hello, World!")
// alert("Hello, World!")

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

////////////////////////////////////////////////////////////////////////////////

// this tut is crutial –> https://www.w3schools.com/jsref/met_document_addeventlistener.asp



// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function(e) { // this part of the code needs to be executed before the other -> game is triggered
        clickedButton = e.target.name;
    });
    button.addEventListener('click', game);
});

let clickedButton = ""; //Does not matter if this variable is stated here or at the top
let playerScore = 0;
let computerScore = 0;

function game() {
    let choices = ["rock","paper","scissors"];
    const playerSelection = playerInput();
    const computerSelection = computerPlay();
    
    function playerInput() {
        console.log(clickedButton);
        return clickedButton;
    }
    
    function computerPlay() {
        let randomChoices = choices[Math.floor(Math.random()*choices.length)];
        console.log(randomChoices);
        return randomChoices;
    }
    
    //Make a function that creates div with current score
    function scoreboardPlayer() {
        const score1 = document.querySelector('#playerScore');
        let div1 = document.createElement('div');
        div1.innerHTML = playerScore;
        score1.replaceChild(div1, score1.children[0]);    //there needs to be some page element, <p></p> in this case, for replaceChild to work
    }

    function scoreboardComputer() {
        const score2 = document.querySelector('#computerScore');
        div2 = document.createElement('div');
        div2.innerHTML = computerScore;
        score2.replaceChild(div2, score2.children[0]);    //there needs to be some page element, <p></p> in this case, for replaceChild to work
    }

    function playRound() {
        // Kinda stuupid way how to handle it. But I am lazy to improve it now.
        // Maybe use some kind of event listener that watches #playerScore and #computerScore and fires after whoever win?
        if (playerScore > 4 || computerScore > 4) {
            return("How did you enjoy the game?"); // This could be funtion that modifies DOM like scoreboardPlayer.
            //return 0; no need to have return, variables are added nontheless (its because I vant to see values in the console)
        }    
            else if (playerSelection === "rock" && computerSelection === "rock") {
            console.log("It's a draw.");
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
            console.log("You lost!");
            computerScore += 1;
        }   else if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("Congratz, you win!");
            playerScore += 1;
            
        }   else if (playerSelection === "paper" && computerSelection === "paper") {
            console.log("It's a draw.");
        }   else if (playerSelection === "paper" && computerSelection === "scissors") {
            console.log("You lost!");
            computerScore += 1;
        }   else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("Congratz, you win!");
            playerScore += 1;
    
        }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
            console.log("It's a draw."); 
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            console.log("You lost!");
            computerScore += 1;
        }   else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("Congratz, you win!");
            playerScore += 1;
    
        }   else {
            console.log("Something went terribly wrong.");
        }
        
    
    }

    console.log(playRound()); //if the function above uses parametrs this function below needs to have them too & otheray around
    // return(playRound(playerSelection, computerSelection)); 
    scoreboardPlayer();
    scoreboardComputer();

}

