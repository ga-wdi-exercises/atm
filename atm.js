/* 
   Boil the ocean one ounce at a time.
   This ATM allows a user to deposit and withdraw money
   user chooses to deposit into Checking or Savings by clicking into input
   field. Event is triggered!!!
   user can now set the dollar amount by typing in a number value.
   user chooses to deposit or withdraw
   balance is stored
   balance number window reflects the new value resulting in the user's action
   addition operator
   don't let the user go negative
   checking vs savings and then nested in, depositing vs withdrawing
*/



var input = $("#checking .input")
var balance = 0
var displayBalance = $("#checking .balance") // event listener
var deposit = $("#checking .deposit") 

deposit.on("click", add)

function add() {
   // var newBalance = userMoney + previousBalance
  // $("#checking div.balance").text(displayBalance)

var checkInput = input.val()
var newBalance = parseInt(checkInput)

balance = newBalance + balance

displayBalance.text("$" + balance)
}
