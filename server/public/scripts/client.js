$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");

  $('#submit').on('click', submitGuesses); 
  // display guesses and count

}

function submitGuesses() {
  let allGuesses = {
    one:
      {
        guess: $('#firstGuessIn').val(),
        evaluation: ''
      },
    two:
      {
        guess: $('#secondGuessIn').val(),
        evaluation: ''
      },
    three:
      {
        guess: $('#thirdGuessIn').val(),
        evaluation: ''
      },
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
    let guesses = response;
    console.log('response: ', response);
    console.log('guesses: ', guesses);
    // call display function
    displayGuessHistory(guesses);
  })
}

function displayGuessHistory(guesses) {
  $('#totalGuesses').empty();
  $('#totalGuesses').append(guesses.length);
  $('#feedback').empty();

  for (guess of guesses) {
    $('#feedback').append(`
      <tr>
        <td>${guess.one.guess}</td>
        <td>${guess.two.guess}</td>
        <td>${guess.three.guess}</td>
      </tr>
    `)
  }
}