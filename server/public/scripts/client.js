$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");

  $('#submit').on('click', submitGuesses); 
}

function submitGuesses() {
  let allGuesses = {
      guessOne: $('#firstGuessIn').val(),
      guessTwo: $('#secondGuessIn').val(),
      guessThree: $('#thirdGuessIn').val()
    }

    $.ajax({
      method: "POST",
      url: "/guesses",
      data: allGuesses
    }).then((response) => {
      console.log('this is working?!?!');
      console.log(allGuesses);
    });
}