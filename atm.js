$(document).ready(function(){
updateBalance()// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

checkingBalance = 0
savingsBalance = 0

checkingBalanceDisplay = $("#checking .balance")
savingsBalanceDisplay = $("#savings .balance")
depositCheckingButton = $("#checking .deposit")
withdrawCheckingButton = $("#checking .withdraw")
depositSavingsButton = $("#savings .deposit")
withdrawSavingsButton = $("#savings .withdraw")
checkingInput = $("#checking .input")
savingsInput = $("#savings .input")


//$("body").css("background", "red")

depositCheckingButton.on("click",depositChecking)
withdrawCheckingButton.on("click",withdrawChecking)

depositSavingsButton.on("click",depositSavings)
withdrawSavingsButton.on("click",withdrawSavings)



function depositChecking() {
  var depositAmount = parseInt(checkingInput.val())
  //var accountId = $(this).parent().attr('id')
  checkingBalance += depositAmount
  updateBalance()
}


function depositSavings() {
  var depositAmount = parseInt(savingsInput.val())
  //var accountId = $(this).parent().attr('id')
  savingsBalance += depositAmount
  updateBalance()
}


function withdrawChecking(){
  var withdrawAmount = parseInt(checkingInput.val())
  //var accountId = $(this).parent().attr('id')

  if (checkingBalance < withdrawAmount) {
    if (confirm("Would you like to enable overdraft protection and withdraw from you Savings?")) {
      overdraftChecking(withdrawAmount)
    }
    return;
  }

  checkingBalance -= withdrawAmount
  updateBalance()
}


function withdrawSavings(){
  var withdrawAmount = parseInt(savingsInput.val())
  //var accountId = $(this).parent().attr('id')

  if (savingsBalance  < withdrawAmount) {
    if (confirm("Would you like to enable overdraft protection and withdraw from you Checking?")) {
      overdraftSavings(withdrawAmount)
    }
    return;
  }

  savingsBalance -= withdrawAmount
  updateBalance()
}


function updateBalance(){
  checkingBalanceDisplay.text("$" + checkingBalance)
  savingsBalanceDisplay.text("$" + savingsBalance)
  checkforZero()
}


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
