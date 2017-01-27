var checkingTotal = 0;
var savingsTotal = 0;

$(document).ready(function(){

//add value to checking and update checking total
function addValueChecking(){
  var userInputChecking = $("#checking > .input").val()
  checkingTotal = +checkingTotal + +userInputChecking;
  $("#checking > .balance").text("$" + checkingTotal)
}

//subtract value from checking and update checking total
function subValueChecking(){
  var userInputChecking = $("#checking > .input").val()
  if (userInputChecking < checkingTotal) {
    checkingTotal = +checkingTotal - +userInputChecking;
  } else {
    alert("You cannot withdraw money that you don't have!");
  }
  $("#checking > .balance").text("$" + checkingTotal)
}

//add value to savings and update savings total
function addValueSavings(){
  var userInputSavings = $("#savings > .input").val()
  savingsTotal = +savingsTotal + +userInputSavings;
  $("#savings > .balance").text("$" + savingsTotal)
}

//subtract value from savings and update savings total
function subValueSavings(){
  var userInputSavings = $("#savings > .input").val()
  if (userInputSavings < savingsTotal) {
    savingsTotal = +savingsTotal - +userInputSavings;
  } else {
    alert("You cannot withdraw money that you don't have!")
  }
  $("#savings > .balance").text("$" + savingsTotal)
}

$("#checking > .deposit").click(addValueChecking)
$("#checking > .withdraw").click(subValueChecking)
$("#savings > .deposit").click(addValueSavings)
$("#savings > .withdraw").click(subValueSavings)

});
