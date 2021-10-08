// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const resultMessage = document.getElementById('result-message');
const guessesLeftDisplay = document.getElementById('guesses-left-display');
const playAgain = document.getElementById('play-again');
const hiddenImg = document.getElementById('dancing-guy');
const winSpan = document.getElementById('wins');
const lossSpan =document.getElementById('losses');

// initialize global state
let randomNumber = Math.floor(Math.random() * 20);

let guessesLeft = 4;

let wins = 0;
let losses = 0;


function rename(rDisplay, rText){
    rDisplay.textContent = rText
}





// set event listeners 
guessButton.addEventListener('click', ()=> {
    guessesLeft --;
    guessesLeftDisplay.textContent = guessesLeft;
    console.log(randomNumber);
    
  
  // get user input
    if (Number(userGuess.value) === randomNumber) {
        const resultText = 'You guessed it!';
        hiddenImg.classList.remove('hidden');
        rename(resultMessage,  resultText);
        wins ++;
        winSpan.textContent= wins;
        


    } else if (guessesLeft === 0) {
        const resultText = 'Sorry, you\'re a loser, refresh page to try again';
        rename(resultMessage,  resultText);
        losses ++;
        lossSpan.textContent =losses;
        
    } else if (guessesLeft < 0) {
        const resultText = 'Wow, you don\'t know when to give up. Hit refresh, loser!';
        resultMessage.textContent = resultText;
        guessButton.classList.add('hidden');
        

    } else if (Number(userGuess.value) < randomNumber) {
      
        const resultText = 'Guess Higher!';
        rename(resultMessage,  resultText);

     
    } else if (Number(userGuess.value) > randomNumber) {
      
        const resultText = 'Too high. Guess again!';
        rename(resultMessage,  resultText);
    }
   
    
 
  
  // use user input to update state 
  // update DOM to reflect the new state
});

playAgain.addEventListener('click', ()=>{
    
    let randomNumber2 = Math.floor(Math.random() * 20);
    guessesLeft = 4;
    hiddenImg.classList.add('hidden');
    guessesLeftDisplay.textContent = 4;
    resultMessage.textContent = '';
    // console.log(randomNumber, randomNumber2)
    randomNumber = randomNumber2;
    return randomNumber
    

});
