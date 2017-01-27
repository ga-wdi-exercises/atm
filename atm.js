$(document).ready(function(){
//Notes for Anyone Who Cares to Read Them
console.log("I decided to give myself money when the page loads rather than giving me values of Zero in each account.");
console.log("The page still checks to see if the accounts are empty when the page loads.");
console.log("So if you set the Checking and Savings accounts to 0, they will turn red and be flagged Empty.");


//Create Checking Input and Checking Balance Variables
var checkingInput = 0;
var checkingBalance = 1750;

//Create Savings Input and Savings Balance Variables
var savingsInput = 0;
var savingsBalance = 50000;

//Set Checking and Savings Balances at Page Load
$("#checking .balance").html("$" + checkingBalance);
$("#savings .balance").html("$" + savingsBalance);

//Check for Balances of Zero at Load
isSavingsZero();
isCheckingZero();

//Function to be Run when Withdrawing from Checking
function checkingWithdraw() {
  if (+checkingBalance >= +checkingInput) {
    checkingBalance = +checkingBalance - +checkingInput;
  } else if ((+checkingBalance + +savingsBalance) >= +checkingInput) {
    savingsBalance = +savingsBalance - (+checkingInput - +checkingBalance);
    $("#savings .balance").html("$" + savingsBalance);
    checkingBalance = 0;
  } else if ((+checkingBalance + +savingsBalance) < +checkingInput) {
    alert("You're to poor to do that!");
  }
}

//Function to be Run when Withdrawing from Savings
function savingsWithdraw() {
  if (+savingsBalance >= +savingsInput) {
    savingsBalance = +savingsBalance - +savingsInput;
  } else if ((+checkingBalance + +savingsBalance) >= +savingsInput) {
    checkingBalance = +checkingBalance - (+savingsInput - +savingsBalance);
    $("#checking .balance").html("$" + checkingBalance);
    savingsBalance = 0;
  } else if ((+checkingBalance + +savingsBalance) < +savingsInput) {
    alert("You're to poor to do that!");
  }
}

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
  $("#checking .balance").html("$" + checkingBalance);
  $("#checking .input").val("");
  isCheckingZero();
})

//CHECKING WITHDRAW
$("#checking .withdraw").on("click", function(){
  checkingInput = $("#checking .input").val();
  checkingWithdraw();
  $("#checking .balance").html("$" + checkingBalance);
  $("#checking .input").val("");
  isCheckingZero();
})

//SAVINGS DEPOSIT
$("#savings .deposit").on("click", function(){
  savingsInput = $("#savings .input").val();
  savingsBalance = +savingsBalance + +savingsInput;
  $("#savings .balance").html("$" + savingsBalance);
  $("#savings .input").val("");
  isSavingsZero();
})

//SAVINGS WITHDRAW
$("#savings .withdraw").on("click", function(){
  savingsInput = $("#savings .input").val();
  savingsWithdraw();
  $("#savings .balance").html("$" + savingsBalance);
  $("#savings .input").val("");
  isSavingsZero();
})

});
