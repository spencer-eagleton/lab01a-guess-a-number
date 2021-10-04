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
      console.log('You guessed it!')
  } else if (Number(userGuess.value) < randomNumber) {
      console.log('Guess higher!')
  } else if (Number(userGuess.value) > randomNumber) {
      console.log('Too high! Guess again.')
  }
  
  
  
  // use user input to update state 
  // update DOM to reflect the new state
});

