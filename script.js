//Generate a random number between 1 and 2
let randomNumber = parseInt((Math.random()*2)+1);
let previousGuesses = [];

let numGuesses = 3;
let playGame = true;
let endGame = false;
const userInput = (prompt("Please type your username?"));
document.cookie = userInput;
// alert(document.cookie);
// console.log(randomNumber);

// console.log("The cookie is : " + document.cookie);

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 1!');
    } else if (guess > 2){
        alert('Please enter a number less than 2!')
    } else {
        //Keep record of number of attempted guesses
        previousGuesses.push(guess);
        //Check to see if game is over
        if (numGuesses === 2){
            // alert(guess);
            alert(`Game Over! Number was ${randomNumber}`);
            return false;
        } else {
        //Display previous guessed numbers
        alert("Your input is: " + guess);
        //Check guess and display if wrong
        checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //Display clue if guess is too high or too low
  
    if (guess === randomNumber){
        alert(`You guessed correctly! ` + randomNumber);
        return endGame;
    } else if (guess < randomNumber) {
        return(`Too low! Try again!`);
    } else if (guess > randomNumber) {
        return(`Too High! Try again!`);
    }
}

if (playGame){
     const guess = parseInt(userInput); 
  validateGuess(guess);
console.log( "Your input: " + guess + '\n' +
             "The answer is: " + randomNumber);
}
