var checkingBalance = 0;
var savingsBalance = 0;
//Deposit into Checking
$("#checking .deposit").on("click", function(){
  var checkingInput = $("#checking .input").val()
  checkingBalance = +checkingInput + +checkingBalance;
  $("#checking .balance").html("$" + checkingBalance);
  if (checkingBalance === 0) {
    $("#checking").css("background-color", "red");
  }
  else if (checkingBalance > 0) {
      $("#checking").css("background-color", "green");
    }
  if (checkingBalance < 0) {
      $("#checking .balance").html("$" + 0);
    }
})
//Withdraw from Checking
$("#checking .withdraw").on("click", function(){
  var checkingInput = $("#checking .input").val()
  checkingBalance = +checkingBalance - +checkingInput;
  $("#checking .balance").html("$" + checkingBalance);
  if (checkingBalance === 0) {
    $("#checking").css("background-color", "red");
  }
  else if (checkingBalance > 0) {
      $("#checking").css("background-color", "green");
    }
  if (checkingBalance < 0) {
      $("#checking .balance").html("$" + 0);
    }
})
//Deposit into Savings
$("#savings .deposit").on("click", function(){
  var savingsInput = $("#savings .input").val()
  savingsBalance = +savingsBalance + +savingsInput;
  $("#savings .balance").html("$" + savingsBalance);
  if (savingsBalance === 0) {
    $("#savings").css("background-color", "red");
  }
  else if (savingsBalance > 0) {
      $("#savings").css("background-color", "green");
    }
    if (savingsBalance < 0) {
      $("#savings .balance").html("$" + 0);
    }
})
//Withdraw from Savings
$("#savings .withdraw").on("click", function(){
  var savingsInput = $("#savings .input").val()
  savingsBalance = +savingsBalance - +savingsInput;
  $("#savings .balance").html("$" + savingsBalance);
  if (savingsBalance === 0) {
    $("#savings").css("background-color", "red");
    }
  else if (savingsBalance > 0) {
      $("#savings").css("background-color", "green");
    }
  if (savingsBalance < 0) {
    $("#savings .balance").html("$" + 0);
    }
})

//var savingsInput = $("#savings .input").val()
//if (savingsInput == 5) {
//  console.log("Input is $5");
//}
