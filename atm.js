$(document).ready(function(){

var depositChecking = $("#checking .deposit")
var withdrawChecking = $("#checking .withdraw")
var depositSavings = $("#savings .deposit")
var withdrawSavings = $("#savings .withdraw")
var inputChecking = $("#checking .input")
var inputSavings = $("#savings .input")
var balanceDisplayC = $("#checking .balance")
var balanceDisplayS = $("#savings .balance")
var checkingWindow = $("#checking")
var savingsWindow = $("#savings")
var checkingBalance = 0
var savingsBalance = 0
var checkingTotal
var savingsTotal
var inputValue
var overdraftValue

//checks balances for zero and changes class
function zeroChecking() {if (parseInt(checkingBalance) === 0) {
  checkingWindow.addClass("zero")
} else if (checkingBalance > 0) {
  checkingWindow.removeClass("zero")
}}

function zeroSavings() {if (parseInt(savingsBalance) === 0) {
  savingsWindow.addClass("zero")
} else if ( savingsBalance > 0) {
  savingsWindow.removeClass("zero")
}}

zeroChecking()
zeroSavings()


// checking deposit function
depositChecking.on("click", function (){
  if (inputChecking.val() === '') {
} else if (isNaN(inputChecking.val())) {
    alert("error: please enter a number")
    inputChecking.val('')
  } else {
    var inputValue = inputChecking.val();
    checkingTotal = parseFloat(parseFloat(inputValue) + parseFloat(checkingBalance)).toFixed(2)
    checkingBalance = checkingTotal
    balanceDisplayC.text('$' + checkingTotal)
    inputChecking.val('')
    zeroChecking()
  }
})

// savings deposit function
depositSavings.on("click", function (){
    if (inputSavings.val() === ''){
 } else if (isNaN(inputSavings.val())) {
   alert("error: please enter a number")
   inputSavings.val('')
 } else {
   var inputValue = inputSavings.val();
   savingsTotal = parseFloat(parseFloat(inputValue) + parseFloat(savingsBalance)).toFixed(2)
   savingsBalance = savingsTotal
   balanceDisplayS.text("$" + savingsTotal)
   inputSavings.val('')
   zeroSavings()
 }
})

// checking withdraw function
withdrawChecking.on("click", function() {
  if (inputChecking.val() === '') {
  } else if (isNaN(inputChecking.val())) {
    alert("error: please enter a number")
    inputChecking.val('')
  }
// overdraft protection function
  else if (parseFloat(checkingBalance) - parseFloat(inputChecking.val()) < 0) {
      if (parseFloat(savingsBalance) + (parseFloat(checkingBalance) - parseFloat(inputChecking.val())) < 0 ) {
        alert("Withdraw amount exceeds Overdraft Protection Amount. Please choose a smaller amount")
        inputChecking.val('')
      } else {
    var overdraftValue = parseFloat(inputChecking.val()) - parseFloat(checkingBalance)
    savingsTotal = parseFloat((savingsBalance) - parseFloat(overdraftValue)).toFixed(2)
    savingsBalance = savingsTotal
    checkingTotal = parseFloat(0).toFixed(2)
    checkingBalance = parseFloat(0).toFixed(2)
    balanceDisplayC.text("$" + checkingTotal)
    balanceDisplayS.text("$" + savingsTotal)
    inputChecking.val('')
    zeroChecking()
    zeroSavings()
  }
} else {
    var inputValue = inputChecking.val();
    checkingTotal = parseFloat(parseFloat(checkingBalance) - parseFloat(inputValue)).toFixed(2)
    checkingBalance = checkingTotal

    balanceDisplayC.text("$" + checkingTotal)
    inputChecking.val('')
    zeroChecking()
  }
})

// savings withdraw function
withdrawSavings.on("click", function() {
  if (inputSavings.val() === '') {
  } else if (isNaN(inputSavings.val())) {
    alert("error: please enter a number")
    inputSavings.val('')
  } else if (parseFloat(savingsBalance) - parseFloat(inputSavings.val()) < 0) {
    alert("error: withdraw amount exceeds balance. Please withdraw a smaller amount")
    inputSavings.val('')
  } else {
    var inputValue = inputSavings.val();
    savingsTotal = parseFloat(parseFloat(savingsBalance) - parseFloat(inputValue)).toFixed(2)
    savingsBalance = savingsTotal
    balanceDisplayS.text("$" + savingsTotal)
    inputSavings.val('')
    zeroSavings()
  }
})

})
