$(document).ready(function(){

//declare global variables for total balance
var checkingTotal = 0;
var savingsTotal = 0;

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

//add value to checking and update checking total
function addValueChecking(){
  var userInputChecking = $("#checking > .input").val()
  checkingTotal = +checkingTotal + +userInputChecking;
  $("#checking > .balance").text("$" + checkingTotal)
  balanceCheck.checking();
}

//subtract value from checking and update checking total
function subValueChecking(){
  var userInputChecking = $("#checking > .input").val()
  if (userInputChecking <= checkingTotal) {
    checkingTotal = +checkingTotal - +userInputChecking;
  } else {
    alert("You cannot withdraw money that you don't have!");
  }
  $("#checking > .balance").text("$" + checkingTotal)
  balanceCheck.checking();
}

//add value to savings and update savings total
function addValueSavings(){
  var userInputSavings = $("#savings > .input").val()
  savingsTotal = +savingsTotal + +userInputSavings;
  $("#savings > .balance").text("$" + savingsTotal)
  balanceCheck.savings();
}

//subtract value from savings and update savings total
function subValueSavings(){
  var userInputSavings = $("#savings > .input").val()
  if (userInputSavings <= savingsTotal) {
    savingsTotal = +savingsTotal - +userInputSavings;
  } else {
    alert("You cannot withdraw money that you don't have!")
  }
  $("#savings > .balance").text("$" + savingsTotal)
  balanceCheck.savings();
}

//click events
$("#checking > .deposit").click(addValueChecking)
$("#checking > .withdraw").click(subValueChecking)
$("#savings > .deposit").click(addValueSavings)
$("#savings > .withdraw").click(subValueSavings)

});
