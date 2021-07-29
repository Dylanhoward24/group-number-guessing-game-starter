const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

let storedGuesses = [];
// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// let target = getRandomNumber(1, 25);
let target = 1;

app.post('/guesses', (req, res) => {
  let newGuesses = req.body;
  // run checks on all guesses
  // guesses format:
  // guessOne: $('#firstGuessIn').val(),
  // guessTwo: $('#secondGuessIn').val(),
  // guessThree: $('#thirdGuessIn').val()
  for (guess of Object.values(newGuesses)) {
    if (guessOne === target) {
      console.log('congrats, Dylan, you won!');
    }else if (guessTwo === target) {
      console.log('congrats, Dan, you won!');
    }else if (guessThree === target) {
      console.log('congrats, Curtis, you won!');
    }else{
      console.log('oops, you all stink at this game');
    }
  }
  // pack into newGuesses object
  storedGuesses.push(newGuesses);
  console.log(newGuesses);
  console.log(storedGuesses.length);
  res.sendStatus(201);
})

app.get('/all-guesses', (req, res) => {
  res.send(storedGuesses);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
