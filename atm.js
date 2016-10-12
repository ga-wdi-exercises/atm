$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var depositBalance = 0;
var checkingBalance = 0;

console.log("asfd");

  //Step 2/3/4 - Click listener/Log User Input/Show user deposit
  $("#checking .deposit").on('click', function (evt) {
    evt.preventDefault();

    var entry = Number($("#checking .input").val()); //Capture user entry, turns it into a number
    checkingBalance += entry; //Updates checkingBalance variable to hold for future

    $('#checking .balance').html("$" + checkingBalance); //Updates HTML with entry + balance
    $('#checking .balance').val(checkingBalance); //Updates Value of bank account with entry

    

  })

  //Step 4


});
