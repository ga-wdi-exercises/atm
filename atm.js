var checking = {
  Balance: $('#checking').children().eq(1),
  Input: $('#checking').children().eq(2),
  DepositButton: $('#checking').children().eq(3),
  WithdrawButton: $('#checking').children().eq(4)
}

var saving = {
  Balance: $('#savings').children().eq(1),
  Input: $('#savings').children().eq(2),
  DepositButton: $('#savings').children().eq(3),
  WithdrawButton: $('#savings').children().eq(4)
}

var convertedNumber = checking.Balance.text().replace("$", "");
var totalCheckingValue = parseInt(convertedNumber);


function depositChecking() {  //Deposit Button
  var userDepositChecking = parseInt(checking.Input.val())
  totalCheckingValue = totalCheckingValue + userDepositChecking
  checking.Balance.text("$" + totalCheckingValue)
}
checking.DepositButton.on("click",depositChecking);

function withdrawChecking() {  //Deposit Button
  var userWithdrawChecking = parseInt(checking.Input.val())
  totalCheckingValue = totalCheckingValue - userWithdrawChecking
  checking.Balance.text("$" + totalCheckingValue)
}
checking.WithdrawButton.on("click",withdrawChecking);







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
