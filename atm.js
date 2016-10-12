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
var checkingTotal
var savingsBalance
var depositValue


depositChecking.on("click", function (){
  if (isNaN(inputChecking.val())) {
    console.log("error")
  } else {
    var depositValue = inputChecking.val();
    checkingTotal = parseInt(depositValue) + parseInt(checkingBalance)
    checkingBalance = checkingTotal
    balanceDisplayC.text('$' + checkingTotal)
    console.log(checkingBalance)
  }
})






























































































































});
