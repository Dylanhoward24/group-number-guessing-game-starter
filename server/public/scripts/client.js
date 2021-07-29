$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");

  $('#submit').on('click', submitGuesses); 
  // display guesses and count

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
      displayGuessesAndCount();
    });


}

function displayGuessesAndCount(guesses) {
  // $('#totalGuesses').append(allGuesses.length);
  $.ajax({
    method: 'GET',
    url: '/all-guesses'
  }).then((response) => {
    let guesses = response.body;
    // call display function
    displayGuessHistory(guesses);
  })
}

function displayGuessHistory(guesses) {
  $('#totalGuesses').empty();
  // $('#totalGuesses').val(guesses.length);
  $('#feedback').empty();

  for (guess in guesses) {
    $('#feedback').append(`
      <tr>
        <td>${guess.guessOne}</td>
        <td>${guess.guessTwo}</td>
        <td>${guess.guessThree}</td>
      </tr>
    `)
  }
}