$(document).ready(function(){
updateBalance()
});

//Define balance variables
checkingBalance = 0
savingsBalance = 0

//Define display, input and button variables
checkingBalanceDisplay = $("#checking .balance")
savingsBalanceDisplay = $("#savings .balance")
depositCheckingButton = $("#checking .deposit")
withdrawCheckingButton = $("#checking .withdraw")
depositSavingsButton = $("#savings .deposit")
withdrawSavingsButton = $("#savings .withdraw")
checkingInput = $("#checking .input")
savingsInput = $("#savings .input")

//Add JQuery events for button clicks
depositCheckingButton.on("click",depositChecking)
withdrawCheckingButton.on("click",withdrawChecking)

depositSavingsButton.on("click",depositSavings)
withdrawSavingsButton.on("click",withdrawSavings)


//Function for deposit into checking account
function depositChecking() {
  var depositAmount = parseInt(checkingInput.val())
  checkingBalance += depositAmount
  updateBalance()
}

//Function for deposit into savings account
function depositSavings() {
  var depositAmount = parseInt(savingsInput.val())
  savingsBalance += depositAmount
  updateBalance()
}

//Function for withdraw from checking account
function withdrawChecking(){
  var withdrawAmount = parseInt(checkingInput.val())

  if (checkingBalance < withdrawAmount) {
    if (confirm("Would you like to enable overdraft protection and withdraw from you Savings?")) {
      overdraftChecking(withdrawAmount)
    }
    return;
  }
  checkingBalance -= withdrawAmount
  updateBalance()
}

//Function for withdraw from savings account
function withdrawSavings(){
  var withdrawAmount = parseInt(savingsInput.val())

  if (savingsBalance  < withdrawAmount) {
    if (confirm("Would you like to enable overdraft protection and withdraw from you Checking?")) {
      overdraftSavings(withdrawAmount)
    }
    return;
  }

  savingsBalance -= withdrawAmount
  updateBalance()
}

//Update the balance displayed on view.  Should be invoked every time something is changed.
function updateBalance(){
  checkingBalanceDisplay.text("$" + checkingBalance)
  savingsBalanceDisplay.text("$" + savingsBalance)
  checkforZero()
}

//Check for balance of zero in either account.  Should be invoked whenever the balance is updated.
function checkforZero(){
  if (checkingBalance == 0){
    checkingBalanceDisplay.addClass("zero")
  }else{
    checkingBalanceDisplay.removeClass("zero")
  }
  if (savingsBalance == 0){
    savingsBalanceDisplay.addClass("zero")
  }else{
    savingsBalanceDisplay.removeClass("zero")
  }
}

//Overdraft Protection.  Check to see if the total is more than the amount and subtract from savings.
function overdraftChecking(amount){
  var totalBalance = checkingBalance + savingsBalance
  var remainder = checkingBalance - amount

  if (totalBalance >= amount) {
    checkingBalance = 0
    savingsBalance += remainder
  }else{
    alert("You need more moneyz!")
  }
  updateBalance()
}

//Overdraft Protection.  Check to see if the total is more than the amount and subtract from checking.
function overdraftSavings(amount){
  var totalBalance = checkingBalance + savingsBalance
  var remainder = savingsBalance - amount

  if (totalBalance >= amount) {
    savingsBalance = 0
    checkingBalance += remainder
  }else{
    alert("You need more moneyz!")
  }
  updateBalance()

}
