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
  var accountId = $(this).parent().attr('id')

  if (accountId == "checking") {
    checkingBalance += depositAmount
  }else if (accountId == "savings") {
    savingsBalance += depositAmount
  }

  updateBalance()
  console.log("You made a deposit")
}

function withdraw(){
  var withdrawAmount = parseInt(checkingInput.val())
  var accountId = $(this).parent().attr('id')

  if (accountType < withdrawAmount) {
    alert("You need more moneyz!")
    return;
  }

  if (accountId == "checking") {
    checkingBalance -= withdrawAmount
  } else if (accountId == "savings") {
    savingsBalance -= withdrawAmount
  }

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
  if (savingsBalanceDisplay == 0){
    savingsBalanceDisplay.addClass("zero")
  }else{
    savingsBalanceDisplay.removeClass("zero")
  }
}
