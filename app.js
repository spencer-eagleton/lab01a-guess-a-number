// import functions and grab DOM elements
const userGuess = document.getElementById('user-guess');
const button = document.getElementById('button');
const resultMessage = document.getElementById('result-message');

// initialize global state
let randomNumber = [Math.floor(Math.random() * 20)];
console.log(randomNumber)


// set event listeners 
button.addEventListener('click', ()=> {
  console.log('click!')
  console.log(userGuess.value)
  // get user input
  if(Number(userGuess.value) == randomNumber) {
    const resultText = "You guessed it!"
    resultMessage.textContent = resultText
    
    
  } else if (Number(userGuess.value) < randomNumber) {
      
      const resultText = "Guess Higher!"
      resultMessage.textContent = resultText

  } else if (Number(userGuess.value) > randomNumber) {
      
      const resultText = "Too high. Guess again!"
      resultMessage.textContent = resultText
  }
  
  
  
  // use user input to update state 
  // update DOM to reflect the new state
});

