// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const button = document.getElementById('button');
const resultMessage = document.getElementById('result-message');
const guessesLeftDisplay = document.getElementById('guesses-left-display');

// initialize global state
let randomNumber = [Math.floor(Math.random() * 20)];
console.log(randomNumber);

let guessesLeft = 4;






// set event listeners 
button.addEventListener('click', ()=> {
    guessesLeft --;
    guessesLeftDisplay.textContent = guessesLeft;
   
  
  // get user input
    if (Number(userGuess.value) === randomNumber) {
        const resultText = 'You guessed it!';
        resultMessage.textContent = resultText;
    
    
    } else if (guessesLeft === 0) {
        const resultText = 'Sorry, you\'re a loser, refresh page to try again';
        resultMessage.textContent = resultText;

    } else if (guessesLeft < 0) {
        const resultText = 'Wow, you don\'t know when to give up. Hit refresh, loser!';
        resultMessage.textContent = resultText;

    } else if (Number(userGuess.value) < randomNumber) {
      
        const resultText = 'Guess Higher!';
        resultMessage.textContent = resultText;

     

    } else if (Number(userGuess.value) > randomNumber) {
      
        const resultText = 'Too high. Guess again!';
        resultMessage.textContent = resultText;
    }
   
    
 
  
  // use user input to update state 
  // update DOM to reflect the new state
});


