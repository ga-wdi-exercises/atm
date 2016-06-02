



$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

var checkingInput; //#checking .input
var savingsInput; //#savings .input
var checkingBalance=0; //#checking .balance
var savingBalance=0;
var checkingInput = $("#checking .input").val();




$("#checking .deposit").on("click", function(){

  console.log(checkingInput);

  checkingInput = parseInt(checkingInput);

  console.log((checkingInput+10)+" is the user input plus 10")


  $("#checking .balance").html("$"+checkingInput);
// 

  //separate the string of $ and value .val()

  //
  //
  // var checkingBalance = $("#checking .balance");
  //
  // var checkingBalance = parseInt(checkingBalance);



  })



//
// On clicking "Deposit", it should update the "balance" with the user input
//  - Just make the user input show up. Don't worry about actually keeping track of a balance yet.
// - On "Deposit", it should get the current "balance"
//  - How can you get the content of the "balance" element?
//  - The content has a `$` at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
//


});
