$(document).ready(function(){
});

//Temporary Value in Checking and Savings Inputs
$("#checking .input").val(100);
$("#savings .input").val(100);

//Create Checking Input and Checking Balance Variables
var checkingInput = 0;
var checkingBalance = 0;

//Create Savings Input and Savings Balance Variables
var savingsInput = 0;
var savingsBalance = 0;

//Create Savings Input and Savings Balance Variables

//Upon Clicking, grab Checking Input, Console Log It, Make That Checking Balance
$("#checking .deposit").on("click", function(){
  checkingInput = $("#checking .input").val();
  checkingBalance = +checkingBalance + +checkingInput;
  console.log(checkingBalance);
  $("#checking .balance").html("$ " + checkingBalance);
  $("#checking .input").val("");
})

$("#checking .withdraw").on("click", function(){
  checkingInput = $("#checking .input").val();
  if (+checkingBalance - +checkingInput < 0) {
    alert("You don't have enough money for that!");
  } else {
    checkingBalance = +checkingBalance - +checkingInput;
  }
  console.log(checkingBalance);
  $("#checking .balance").html("$ " + checkingBalance);
  $("#checking .input").val("");
})


// SAVINGS THINGS ARE BELOW HERE

//Upon Clicking, grab Savings Input, Console Log It, Make That Checking Balance
$("#savings .deposit").on("click", function(){
  savingsInput = $("#savings .input").val();
  savingsBalance = +savingsBalance + +savingsInput;
  console.log(savingsBalance);
  $("#savings .balance").html("$ " + savingsBalance);
  $("#savings .input").val("");
})

$("#savings .withdraw").on("click", function(){
  savingsInput = $("#savings .input").val();
  if (+savingsBalance - +savingsInput < 0) {
    alert("You don't have enough money for that!");
  } else {
    savingsBalance = +savingsBalance - +savingsInput;
  }
  console.log(savingsBalance);
  $("#savings .balance").html("$ " + savingsBalance);
  $("#savings .input").val("");
})
