//declare global variables for total balance
var checkingTotal = 0;
var savingsTotal = 0;

$(document).ready(function(){

//object with methods to check balance and change color if zero/not zero
var balanceCheck = {
  checking: function(){
    if (checkingTotal == 0) {
      $("#checking > .balance").addClass("zero")
    } else {
      $("#checking > .balance").removeClass("zero")
    }
  },
    savings: function(){
    if (savingsTotal == 0) {
      $("#savings > .balance").addClass("zero")
    } else {
      $("#savings > .balance").removeClass("zero")
    }
  }
}

//prevent user from overdrawing money from an account
var overdraftProtect = {
  checking: function(a){
    if (a > checkingTotal && (a - checkingTotal) <= savingsTotal) {
      savingsTotal = savingsTotal - (a - checkingTotal);
      checkingTotal = 0;
      $("#savings > .balance").text("$" + savingsTotal)
    } else if (a <= checkingTotal) {
      checkingTotal = +checkingTotal - +a;
    } else {
      alert("You cannot withdraw money that you don't have!");
    }
    balanceCheck.savings();
  },
  savings: function(a){
    if (a > savingsTotal && (a - savingsTotal) <= checkingTotal){
      checkingTotal = checkingTotal - (a - savingsTotal);
      savingsTotal = 0;
      $("#checking > .balance").text("$" + checkingTotal)
    } else if (a <= savingsTotal) {
      savingsTotal = +savingsTotal - +a;
    } else {
      alert("You cannot withdraw money that you don't have!")
    }
    balanceCheck.checking();
  }
}

//add value to checking and update checking total
function addValueChecking(){
  var userInputChecking = $("#checking > .input").val()
  checkingTotal = +checkingTotal + +userInputChecking;
  $("#checking > .balance").text("$" + checkingTotal)
  balanceCheck.checking();
  $("#checking > .input").val("")
}

//subtract value from checking and update checking total
function subValueChecking(){
  var userInputChecking = $("#checking > .input").val()
  overdraftProtect.checking(userInputChecking);
  $("#checking > .balance").text("$" + checkingTotal)
  balanceCheck.checking();
  $("#checking > .input").val("")
}

//add value to savings and update savings total
function addValueSavings(){
  var userInputSavings = $("#savings > .input").val()
  savingsTotal = +savingsTotal + +userInputSavings;
  $("#savings > .balance").text("$" + savingsTotal)
  balanceCheck.savings();
  $("#savings > .input").val("")
}

//subtract value from savings and update savings total
function subValueSavings(){
  var userInputSavings = $("#savings > .input").val()
  overdraftProtect.savings(userInputSavings);
  $("#savings > .balance").text("$" + savingsTotal)
  balanceCheck.savings();
  $("#savings > .input").val("")
}

//click events
$("#checking > .deposit").click(addValueChecking)
$("#checking > .withdraw").click(subValueChecking)
$("#savings > .deposit").click(addValueSavings)
$("#savings > .withdraw").click(subValueSavings)

});
