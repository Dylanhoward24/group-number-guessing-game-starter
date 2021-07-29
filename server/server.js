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

let target = getRandomNumber(1, 25);

app.get('/guesses', (req, res) => {
  let newGuesses = req.body;
  console.log(newGuesses);
})

app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
