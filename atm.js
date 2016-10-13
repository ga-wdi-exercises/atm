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
    inputChecking.val('')
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
   inputSavings.val('')
 }
})

// checking withdraw function
withdrawChecking.on("click", function() {
  if (inputChecking.val() === '') {
  } else if (isNaN(inputChecking.val())) {
    console.log("error")
  } else if (parseInt(checkingBalance) - parseInt(inputChecking.val()) < 0) {
    console.log("error: negative balance")
  } else {
    var inputValue = inputChecking.val();
    checkingTotal = parseInt(checkingBalance) - parseInt(inputValue)
    checkingBalance = checkingTotal
    balanceDisplayC.text("$" + checkingTotal)
    inputChecking.val('')
  }



})






























































































































});
