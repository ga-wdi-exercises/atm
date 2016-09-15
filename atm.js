// Four functions
// Two Deposit Functions and
// Two withdraw functions
// Four event listener
// Each Function will be an event listener

// Variables
var checkingAdd = $("#checking").children("input.deposit");
var checkingSub = $("#checking").children("input.withdraw");
var savingAdd = $("#savings").children("input.deposit");
var savingSub = $("#savings").children("input.withdraw");

var checkingBalance = $("#checking").children(".balance");
var savingsBalance = $("#savings").children(".balance");

var checkingInput = ($("#checking").children("input.input").val());
var savingsInput = $("#savings").children("input.input").val();

// Function Time

var oldBalance = 0;

$("#checking .deposit").on("click", handleChecking);

function handleChecking() {
  var checkingInput = parseInt($("#checking").children("input.input").val());
  var newBalance = parseInt(checkingInput);
  oldBalance = oldBalance + newBalance;
  checkingBalance.text(oldBalance);
}

// console.log(CheckingInput);
// }
//
// // Function Two
//
// checkingAdd.on("click", handleBalance);
//
// function handleBalance() {
//   var balance = CheckingInput.val();
//   CheckingBalance.text(balance);
// }
//
// // function handleBalance() {
// //   var CheckingBalance = parseInt($("#checking").children(".balance").val());
// //   var NewAmount = CheckingBalance + CheckingInput;
// //   console.log(NewAmount);
// // }
//
//
// // var NewAmount = CheckingBalance + CheckingInput;
