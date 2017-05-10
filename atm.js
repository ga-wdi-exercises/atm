$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

checkingBalance = 0
savingsBalance = 0

checkingBalanceDisplay = $("#checking .balance")
savingsBalanceDisplay = $("#savings .balance")
depositButton = $(".deposit")
withdrawButton = $(".withdraw")
checkingInput = $("#checking .input")
savingsInput = $("#savings .input")


//$("body").css("background", "red")

depositButton.on("click",deposit)
withdrawButton.on("click",withdraw)



function deposit() {
  var depositAmount = parseInt(checkingInput.val())
  checkingBalance += depositAmount
  updateBalance()
  console.log("You made a deposit")
}

function withdraw(){
  var withdrawAmount = parseInt(checkingInput.val())
  if (checkingBalance < withdrawAmount) {
    alert("You need more moneyz!")
    return;
  }
  checkingBalance -= withdrawAmount
  updateBalance()
}

function updateBalance(){
  checkingBalanceDisplay.text("$" + checkingBalance)
  savingsBalanceDisplay.text("$" + savingsBalance)
  checkforZero()
}

function checkforZero(){
  if (checkingBalance == 0){
    checkingBalanceDisplay.css("color", "red")
  }
  if (savingsBalanceDisplay == 0){
    savingsBalanceDisplay.css("color", "red")
  }
}
