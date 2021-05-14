// console.log("Hello, World!")
// alert("Hello, World!")

let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

////////////////////////////////////////////////////////////////////////////////

// this tut is crutial –> https://www.w3schools.com/jsref/met_document_addeventlistener.asp



// buttons is a node list. It looks and acts much like an array but you can not use the same array methods.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', function(e) { // this part of the code needs to be executed before the other -> game is triggered
        clickedButton = e.target.name;
    });
    button.addEventListener('click', game);
});


// Mutation observer -> https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe
//This is the part that effectivly displays winner announcement to user
const observer = new MutationObserver(function() {
    if  (playerScore === 5 || computerScore === 5) { 
        winnerAnnouncement();
    }
});


let selectElement = document.querySelector('.scoreDisplay');
observer.observe(selectElement, {
    childList: true,
    subtree: true,
    characterData: true
});


//variable used in the game() function stated here
let choices = ["rock","paper","scissors"];
let clickedButton = ""; //Does not matter if this variable is stated here or at the top
let playerScore = 0;
let computerScore = 0;
//Actually I am not using this, may come handy when refactoring the code
let winner = Math.max(playerScore, computerScore);



//actual logic of the game goes here
function game() {

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
        div1.classList.add('numCount');
        score1.replaceChild(div1, score1.children[0]);    //there needs to be some page element, <p></p> in this case, for replaceChild to work
    }

    function scoreboardComputer() {
        const score2 = document.querySelector('#computerScore');
        div2 = document.createElement('div');
        div2.innerHTML = computerScore;
        div2.classList.add('numCount');
        score2.replaceChild(div2, score2.children[0]);    //there needs to be some page element, <p></p> in this case, for replaceChild to work
    }   

    function printTheResult(text) {
        const roundResult = document.querySelector('.roundResult');
        let textResult = document.createElement('p');
        textResult.innerHTML = `${text}`;
        roundResult.replaceChild(textResult, roundResult.children[0]); 
    }

    function playRound() {
        if (playerScore === 5 || computerScore === 5) {
            // winnerAnnouncement();
            console.log("Winner is displayed on the DOM now"); 
 
        }    
            else if (playerSelection === "rock" && computerSelection === "rock") {
            printTheResult("It's a draw.")
            console.log("It's a draw.");
        }   else if (playerSelection === "rock" && computerSelection === "paper") {
            printTheResult("You lost!")
            console.log("You lost!");
            computerScore += 1;
        }   else if (playerSelection === "rock" && computerSelection === "scissors") {
            printTheResult("Congratz, you win!")
            console.log("Congratz, you win!");
            playerScore += 1;
            
        }   else if (playerSelection === "paper" && computerSelection === "paper") {
            printTheResult("It's a draw.");
            console.log("It's a draw.");
        }   else if (playerSelection === "paper" && computerSelection === "scissors") {
            printTheResult("You lost!");
            console.log("You lost!");
            computerScore += 1;
        }   else if (playerSelection === "paper" && computerSelection === "rock") {
            printTheResult("Congratz, you win!");
            console.log("Congratz, you win!");
            playerScore += 1;
    
        }   else if (playerSelection === "scissors" && computerSelection === "scissors") {
            printTheResult("It's a draw.");
            console.log("It's a draw."); 
        }   else if (playerSelection === "scissors" && computerSelection === "rock") {
            printTheResult("You lost!");
            console.log("You lost!");
            computerScore += 1;
        }   else if (playerSelection === "scissors" && computerSelection === "paper") {
            printTheResult("Congratz, you win!");
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

    // //listening to score change
    // const selectElements = document.querySelectorAll('.numCount');
    // selectElements.forEach(element => console.log(element));
}   

function winnerAnnouncement() {

    if  (playerScore === 5) {
        playerWon();
        playAgain();
        }   else if (computerScore === 5) {
            computerWon();
            playAgain();
        }   else {
            game();
            // console.log("Something went terribly wrong during winner announcement.");
        }

    function playerWon() {
        const winnerIs = document.querySelector('#winnerAnnouncement');
        let playerWon = document.createElement('div');
        playerWon.innerHTML = "You won this GAME!";
        winnerIs.replaceChild(playerWon, winnerIs.children[0]); 
    }
    
    function computerWon() {
        const winnerIs = document.querySelector('#winnerAnnouncement');
        let computerWon = document.createElement('div');
        computerWon.innerHTML = "Computer won this time.";
        winnerIs.replaceChild(computerWon, winnerIs.children[0]); 
    }

    function playAgain() {
        const winnerIs = document.querySelector('#container2');
        let wannaPlayAgain = document.createElement('button');
        wannaPlayAgain.setAttribute("id", "playAgain");
        wannaPlayAgain.onclick = function() { // Note this is a function
            document.location.reload();
          };
        wannaPlayAgain.innerHTML = "Play Again";
        winnerIs.replaceChild(wannaPlayAgain, winnerIs.children[0]); 
    }
}