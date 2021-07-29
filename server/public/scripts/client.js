$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

  $.ajax({
    method: "GET",
    url: "/guesses"
  }).then((response) => {
    
  })
}