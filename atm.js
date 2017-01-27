$(document).ready(function(){
});

//Create Checking Input and Checking Balance Variables
var checkingInput = 0;
var checkingBalance = 0;

//Create Savings Input and Savings Balance Variables
var savingsInput = 0;
var savingsBalance = 0;

//Check for Balances of Zero at Load
isSavingsZero();
isCheckingZero();

//Declare a Function that turns the Checking Account Red if Empty
function isCheckingZero() {
  if (checkingBalance > 0) {
    $("#checking").removeClass("zero");
  } else if (checkingBalance == 0) {
    $("#checking").addClass("zero");
  }
}
//Declare a Function that turns the Savings Account Red if Empty
function isSavingsZero() {
  if (savingsBalance == 0) {
    $("#savings").addClass("zero");
  }
  if (savingsBalance > 0) {
    $("#savings").removeClass("zero");
  }
}

//CHECKING DEPOSIT
$("#checking .deposit").on("click", function(){
  checkingInput = $("#checking .input").val();
  checkingBalance = +checkingBalance + +checkingInput;
  $("#checking .balance").html("$ " + checkingBalance);
  $("#checking .input").val("");
  isCheckingZero();
})

//CHECKING WITHDRAW
$("#checking .withdraw").on("click", function(){
  checkingInput = $("#checking .input").val();
  if (+checkingBalance - +checkingInput < 0) {
    alert("You don't have enough money for that!");
  } else {
    checkingBalance = +checkingBalance - +checkingInput;
  }
  $("#checking .balance").html("$ " + checkingBalance);
  $("#checking .input").val("");
  isCheckingZero();
})

//SAVINGS DEPOSIT
$("#savings .deposit").on("click", function(){
  savingsInput = $("#savings .input").val();
  savingsBalance = +savingsBalance + +savingsInput;
  $("#savings .balance").html("$ " + savingsBalance);
  $("#savings .input").val("");
  isSavingsZero();
})

//SAVINGS WITHDRAW
$("#savings .withdraw").on("click", function(){
  savingsInput = $("#savings .input").val();
  if (+savingsBalance - +savingsInput < 0) {
    alert("You don't have enough money for that!");
  } else {
    savingsBalance = +savingsBalance - +savingsInput;
  }
  $("#savings .balance").html("$ " + savingsBalance);
  $("#savings .input").val("");
  isSavingsZero();
})
