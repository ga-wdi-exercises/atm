var checkingBalance = $('#checking').children().eq(1)
var checkingInput = $('#checking').children().eq(2)
var checkingDepositButton = $('#checking').children().eq(3)
var checkingWithdrawButton = $('#checking').children().eq(4)

var savingBalance = $('#savings').children().eq(1)
var savingInput = $('#savings').children().eq(2)
var savingDepositButton = $('#savings').children().eq(3)
var savingWithdrawButton = $('#savings').children().eq(4)

var convertedNumber = checkingBalance.text().replace("$", "");
var totalCheckingValue = parseInt(convertedNumber);


function depositChecking() {
  var userDepositChecking = parseInt(checkingInput.val())
  totalCheckingValue = totalCheckingValue + userDepositChecking
  checkingBalance.text("$" + totalCheckingValue)
  // $('.balance').text(userDepositChecking)
}

$('.deposit').on("click",depositChecking);

//change



// $(document).ready(function(){
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });
//


//
// //1. insert card
// enter pin
// Presented with total amounts
// Prompted for checking or ssaving
// Select checking or ssaving


//Presented with total Amounts
// Create variable totalAmounts

// Enter the amount you would like to deposit/withdraw
////Amount is pulled from the box.
////Function also updates totalAmounts

// Confirm transaction
// Amounts updated and presented


// OTHER FEATURES
//accounts change color when hit zero


//account cannot be less than zero
