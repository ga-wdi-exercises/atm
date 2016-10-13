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
    console.log("error")
  } else {
    var inputValue = inputChecking.val();
    checkingTotal = parseInt(inputValue) + parseInt(checkingBalance)
    checkingBalance = checkingTotal
    balanceDisplayC.text('$' + checkingTotal)
  }
})

// savings deposit function
depositSavings.on("click", function (){
    if (inputSavings.val() === ''){
 } else if (isNaN(inputSavings.val())) {
   console.log("error")
 } else {
   var inputValue = inputSavings.val();
   savingsTotal = parseInt(inputValue) + parseInt(savingsBalance)
   savingsBalance = savingsTotal
   balanceDisplayS.text("$" + savingsTotal)
 }
})































































































































});
