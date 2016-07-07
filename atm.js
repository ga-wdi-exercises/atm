$(document).ready(function(){

// define savings/checking account
var $savingsBalance = $("#savings .balance");
var $checkingBalance = $("#checking .balance");
var $accountBalance;
var $otherAccountBalance;

// other variables
var $accountInput;
var updatedBalance;
var otherUpdatedBalance;
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
      $accountBalance = parseInt($checkingBalance.text().replace("$", ""));
      // define balance
      updatedBalance = $accountBalance + $accountInput;
      $checkingBalance.text("$" + updatedBalance);
      // clear input field after amount is added
      $(".input").val("");
        if (updatedBalance > 0) {
          $checkingBalance.removeClass("zero");
        }
    } else if ($accountId == "savings") {
      $accountInput = parseInt($("#savings .input").val());
      $accountBalance = parseInt($savingsBalance.text().replace("$", ""));
      // define balance
      updatedBalance = $accountBalance + $accountInput;
      $savingsBalance.text("$" + updatedBalance);
      // clear input field after amount is added
      $(".input").val("");
        if (updatedBalance > 0) {
          $savingsBalance.removeClass("zero");
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
      $accountBalance = parseInt($checkingBalance.text().replace("$", ""));
      otherAccountBalance = parseInt($savingsBalance.text().replace("$", ""));
        if ($accountInput <= $accountBalance) {
          updatedBalance = $accountBalance - $accountInput;
          $checkingBalance.text("$" + updatedBalance);
          // clear input field after amount is added
          $(".input").val("");
          // if amount is > 0, remove zero class
          if (updatedBalance == 0) {
              $checkingBalance.addClass("zero");
            }
        } else if (($accountInput > $accountBalance) && ($accountInput == ($accountBalance + otherAccountBalance))) {
          // if total to withdraw is equal to total in both accounts
          // have current account total = 0
          // subtract remaining amount from other account
          $accountInput = parseInt($("#checking .input").val());
          var remainderBalance = $accountBalance - $accountInput;
          var otherBalanceCalc = otherAccountBalance + remainderBalance;
          $checkingBalance.text("$" + 0);
          $checkingBalance.addClass("zero");
          $savingsBalance.text("$" + otherBalanceCalc);
          if (otherBalanceCalc == 0) {
            $savingsBalance.addClass("zero");
          }
          $(".input").val("");
        } else {
          console.log("Sorry, not 'nuff funds!'")
        }
    } else if ($accountId == "savings") {
      $accountInput = parseInt($("#savings .input").val());
      $accountBalance = parseInt($savingsBalance.text().replace("$", ""));
      otherAccountBalance = parseInt($checkingBalance.text().replace("$", ""));
        if ($accountInput <= $accountBalance) {
          updatedBalance = $accountBalance - $accountInput;
          $savingsBalance.text("$" + updatedBalance);
          $(".input").val("");
          // if amount is > 0, remove zero class
          if (updatedBalance == 0) {
              $checkingBalance.addClass("zero");
            }
        } else if (($accountInput > $accountBalance) && ($accountInput == ($accountBalance + otherAccountBalance))) {
          $accountInput = parseInt($("#savings .input").val());
          var remainderBalance = $accountBalance - $accountInput;
          var otherBalanceCalc = otherAccountBalance + remainderBalance;
          $savingsBalance.text("$" + 0);
          $savingsBalance.addClass("zero");
          $checkingBalance.text("$" + otherBalanceCalc);
          if (otherBalanceCalc == 0) {
            $checkingBalance.addClass("zero");
          }
          $(".input").val("");
        } else {
          console.log("Sorry, not 'nuff funds!'")
        }
      }
    }

});
