$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var depositBalance = 0;
var checkingBalance = 0;

console.log("asfd");

  //Step 2/3 - Click listener/Log User Input
  $("#checking .deposit").on('click', function () {

    checkingBalance = $("#checking .input").val();
    $('#checking .balance').html("$" + checkingBalance);
  })

  //Step 4


});
