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
        <td>${guess.one.guess}, ${guess.one.evaluation}</td>
        <td>${guess.two.guess}, ${guess.two.evaluation}</td>
        <td>${guess.three.guess}, ${guess.three.evaluation}</td>
      </tr>
    `)
  }
  displayEvaluationResults(guesses[guesses.length-1]);
}

function displayEvaluationResults(guess) {
    if (guess.one.evaluation === 'win'){
      alert('congrats, player one, you won!');
    }else if(guess.two.evaluation === 'win') {
      alert('congrats, player two, you won!');
    }else if (guess.three.evalutation === 'win') {
    alert('congrats, player three, you won!');
    }
}
