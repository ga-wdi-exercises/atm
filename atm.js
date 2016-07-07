$(document).ready(function(){

// define savings/checking account
var $savingsBalance = $("#savings.balance");
var $checkingBalance = $("#checking.balance");
var $accountBalance;

// other variables
var $accountInput;
var updatedBalance;
var $balance = $(".balance");
var $depositBtn = $(".deposit");
var $withdrawBtn = $(".withdraw");


// starting balance with .zero
$balance.addClass("zero");

// on click of deposit or withdraw, user adds/subtracts balance
$depositBtn.on("click", depositSomething);
$withdrawBtn.on("click", withdrawSomething);


function depositSomething(e) {
  e.preventDefault();
  // check to see if ID of parent div is checking or savings
  var $accountId = $(this).parent().attr("id");
    // define value of user input
    if ($accountId == "checking") {
      $accountInput = parseInt($("#checking .input").val());
      $accountBalance = parseInt($("#checking .balance").text().replace("$", ""));
      // define balance
      updatedBalance = $accountBalance + $accountInput;
      $("#checking .balance").text("$" + updatedBalance);
      // clear input field after amount is added
      $(".input").val("");
         // if amount is > 0, remove zero class
        if (updatedBalance > 0) {
          $("#checking .balance").removeClass("zero");
        }
    } else if ($accountId == "savings") {
      $accountInput = parseInt($("#savings .input").val());
      $accountBalance = parseInt($("#savings .balance").text().replace("$", ""));
      // define balance
      updatedBalance = $accountBalance + $accountInput;
      $("#savings .balance").text("$" + updatedBalance);
      // clear input field after amount is added
      $(".input").val("");
         // if amount is > 0, remove zero class
        if (updatedBalance > 0) {
          $("#savings .balance").removeClass("zero");
        }
    }
}


function withdrawSomething(e) {
  e.preventDefault();
  // check to see if ID of parent div is checking or savings
  var $accountId = $(this).parent().attr("id");
    // define value of user input
    if ($accountId == "checking") {
      $accountInput = parseInt($("#checking .input").val());
      $accountBalance = parseInt($("#checking .balance").text().replace("$", ""));
        if ($accountInput <= $accountBalance) {
          updatedBalance = $accountBalance - $accountInput;
          $("#checking .balance").text("$" + updatedBalance);
          // clear input field after amount is added
          $(".input").val("");
        }
        // if amount is > 0, remove zero class
        if (updatedBalance == 0) {
            $("#checking .balance").addClass("zero");
          }
    } else if ($accountId == "savings") {
      $accountInput = parseInt($("#savings .input").val());
      $accountBalance = parseInt($("#savings .balance").text().replace("$", ""));
        if ($accountInput <= $accountBalance) {
          updatedBalance = $accountBalance - $accountInput;
          $("#savings .balance").text("$" + updatedBalance);
          $(".input").val("");
        }
        // if amount is > 0, remove zero class
        if (updatedBalance == 0) {
            $("#savings .balance").addClass("zero");
          }
    }
}

//Bonus

// if total to withdraw is equal to total in both accounts
// have current account total = 0
// subtract remaining amount from other account

// if total to withdraw > than amounts in both accounts, display error

});
