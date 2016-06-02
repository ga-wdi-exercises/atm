



$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

var checkingInput; //#checking .input
var savingsInput; //#savings .input
var checkingBalance=0; //#checking .balance
var savingBalance=0;
var checkingInput = $("#checking .input").val();




$("#checking .deposit").on("click", function(){

  var checkingInput = $("#checking .input").val();

    if (checkingInput <=0) {
      alert("Please enter an amount greater than 0");
      }

    else {
  // console.log(checkingInput);
  checkingInput = parseInt(checkingInput);
  // console.log((checkingInput+10)+" is the user input plus 10")
  checkingBalance=checkingBalance+checkingInput
  $("#checking .balance").html("$"+checkingBalance);
  console.log("the new balance is $"+checkingBalance);
  }

  })


$("#checking .withdraw").on("click", function(){

  var checkingInput = $("#checking .input").val();

    if (checkingInput <=0) {
      alert("Please enter an amount greater than 0");
      }

    else {
  
    checkingInput = parseInt(checkingInput);
    // console.log((checkingInput+10)+" is the user input plus 10")
    checkingBalance=checkingBalance-checkingInput
    $("#checking .balance").html("$"+checkingBalance);
    console.log("the new balance is $"+checkingBalance);
    }

    })



//
// On clicking "Deposit", it should update the "balance" with the user input
//  - Just make the user input show up. Don't worry about actually keeping track of a balance yet.
// - On "Deposit", it should get the current "balance"
//  - How can you get the content of the "balance" element?
//  - The content has a `$` at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
//


});
