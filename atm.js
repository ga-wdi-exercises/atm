$(document).ready(function(){

// define savings/checking account
var $savings = $("#savings");
var $savingsBalance = $("#savings.balance");
var $checking = $("#checking");
var $checkingBalance = $("#checking.balance");

// other variables
var $savingsInput;
var $checkingInput;
var updatedBalance;
var $balance = $(".balance");
var $depositCheckingBtn = $("#checking .deposit");
var $withdrawCheckingBtn = $("#checking .withdraw")
var $depositSavingsBtn = $("#savings .deposit");
var $withdrawSavingsBtn = $("#savings .withdraw")
var $depositBtn = $(".deposit");

// starting balance with .zero
$balance.addClass("zero");

// on click of deposit, user input added to total value of specific account
$depositBtn.on("click", depositSomething);
$depositSavingsBtn.on("click", depositSavings);
$withdrawSavingsBtn.on("click", withdrawSavings);
$depositCheckingBtn.on("click", depositChecking);
$withdrawCheckingBtn.on("click", withdrawChecking);

// function depositSomething(e) {
//   e.preventDefault();
//   console.log($(this).attr("id"));
// }

function depositSavings(e) {
  e.preventDefault();
  console.log(event.target);
  // define value of user input
  $savingsInput = parseInt($("#savings .input").val());
  // define balance
  $savingsBalance = parseInt($("#savings .balance").text().replace("$", ""));
  updatedBalance = $savingsBalance + $savingsInput;
  $("#savings .balance").text("$" + updatedBalance);
  // clear input field after amount is added
  $(".input").val("");
     // if amount is > 0, remove zero class
    if (updatedBalance > 0) {
      $("#savings .balance").removeClass("zero");
    }
}

// on click of withdraw, user input subtracted from total value of specific account
function withdrawSavings(e) {
  e.preventDefault();
  // define value of user input
  $savingsInput = parseInt($("#savings .input").val());
  // define balance
  $savingsBalance = parseInt($("#savings .balance").text().replace("$", ""));
  // if amount to withdraw > total funds, ignore transaction
  if ($savingsInput <= $savingsBalance) {
    updatedBalance = $savingsBalance - $savingsInput;
    $("#savings .balance").text("$" + updatedBalance);
  }
  // clear input field after amount is added
  $(".input").val("");
     // if total amount = 0, apply zero class
    if (updatedBalance == 0) {
      $("#savings .balance").addClass("zero");
    }
}

function depositChecking(e) {
  e.preventDefault();
  // define value of user input
  $checkingInput = parseInt($("#checking .input").val());
  // define balance
  $checkingBalance = parseInt($("#checking .balance").text().replace("$", ""));
  updatedBalance = $checkingBalance + $checkingInput;
  $("#checking .balance").text("$" + updatedBalance);
  // clear input field after amount is added
  $(".input").val("");
     // if amount is > 0, remove zero class
    if (updatedBalance > 0) {
      $("#checking .balance").removeClass("zero");
    }
}

// on click of withdraw, user input subtracted from total value of specific account
function withdrawChecking(e) {
  e.preventDefault();
  // define value of user input
  $checkingInput = parseInt($("#checking .input").val());
  // define balance
  $checkingBalance = parseInt($("#checking .balance").text().replace("$", ""));
  // if amount to withdraw > total funds, ignore transaction
  if ($checkingInput <= $checkingBalance) {
    updatedBalance = $checkingBalance - $checkingInput;
    $("#checking .balance").text("$" + updatedBalance);
  }
  // clear input field after amount is added
  $(".input").val("");
     // if total amount = 0, apply zero class
    if (updatedBalance == 0) {
      $("#checking .balance").addClass("zero");
    }
}


//Bonus

// if total to withdraw is equal to total in both accounts
// have current account total = 0
// subtract remaining amount from other account

// if total to withdraw > than amounts in both accounts, display error

});
