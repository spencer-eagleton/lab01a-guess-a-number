// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');
const guessesLeftDisplay = document.getElementById('guesses-left-display');
const playAgain = document.getElementById('play-again');

// initialize global state
let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber);

let guessesLeft = 4;






// set event listeners 
guessButton.addEventListener('click', ()=> {
    guessesLeft --;
    guessesLeftDisplay.textContent = guessesLeft;
   
  
  // get user input
    if (Number(userGuess.value) === randomNumber) {
        console.log(randomNumber);
        const resultText = 'You guessed it!';
        
        resultMessage.textContent = resultText;
        console.log(resultText);
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

playAgain.addEventListener('click', ()=>{
    
    let randomNumber = Math.floor(Math.random() * 20);
    console.log('random nummber:', randomNumber);

    guessesLeft = 4;
    
    guessesLeftDisplay.textContent = 4;
    

});
