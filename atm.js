$(document).ready(function(){

var depositChecking = $("#checking .deposit")
var withdrawChecking = $("#checking .withdraw")
var depositSavings = $("#savings .deposit")
var withdrawSavings = $("#savings .withdraw")
var inputChecking = $("#checking .input")
var inputSavings = $("#savings .input")
var balanceDisplayC = $("#checking .balance")
var balanceDisplayS = $("#savings .balance")
var checkingBalance = 0
var savingsBalance = 0
var checkingTotal
var savingsTotal
var inputValue

// checking deposit function
depositChecking.on("click", function (){
  if (inputChecking.val() === '') {
} else if (isNaN(inputChecking.val())) {
    alert("error: please enter a number")
  } else {
    var inputValue = inputChecking.val();
    checkingTotal = parseInt(inputValue) + parseInt(checkingBalance)
    checkingBalance = checkingTotal
    balanceDisplayC.text('$' + checkingTotal)
    inputChecking.val('')
  }
})

// savings deposit function
depositSavings.on("click", function (){
    if (inputSavings.val() === ''){
 } else if (isNaN(inputSavings.val())) {
   alert("error: please enter a number")
 } else {
   var inputValue = inputSavings.val();
   savingsTotal = parseInt(inputValue) + parseInt(savingsBalance)
   savingsBalance = savingsTotal
   balanceDisplayS.text("$" + savingsTotal)
   inputSavings.val('')
 }
})

// checking withdraw function
withdrawChecking.on("click", function() {
  if (inputChecking.val() === '') {
  } else if (isNaN(inputChecking.val())) {
    alert("error: please enter a number")
  } else if (parseInt(checkingBalance) - parseInt(inputChecking.val()) < 0) {
    alert("error: withdraw amount exceeds balance. Please withdraw a smaller amount")
  } else {
    var inputValue = inputChecking.val();
    checkingTotal = parseInt(checkingBalance) - parseInt(inputValue)
    checkingBalance = checkingTotal
    balanceDisplayC.text("$" + checkingTotal)
    inputChecking.val('')
  }
})

// savings withdraw function
withdrawSavings.on("click", function() {
  if (inputSavings.val() === '') {
  } else if (isNaN(inputSavings.val())) {
    alert("error: please enter a number")
  } else if (parseInt(savingsBalance) - parseInt(inputSavings.val()) < 0) {
    alert("error: withdraw amount exceeds balance. Please withdraw a smaller amount")
  } else {
    var inputValue = inputSavings.val();
    savingsTotal = parseInt(savingsBalance) - parseInt(inputValue)
    savingsBalance = savingsTotal
    balanceDisplayS.text("$" + savingsTotal)
    inputSavings.val('')
  }
})

})
