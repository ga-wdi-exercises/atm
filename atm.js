// As a user, I want to deposit money into one of the bank accounts
var balanceDisplay = $(".account").children().eq(1).html(); // Selects Balance HTML Area (cannot be called in function?)
var userInput = $(".account").children().eq(2); // Selects User Input
var checkDepositButton = $(".account").children().eq(3); // Checking Deposit Button

$(checkDepositButton).click(function() { // Set up Checking Deposit button
  event.preventDefault(); // Prevents Default Refresh
  var depAmount = parseInt($( userInput ).val()); // New Total Value
  var balance = parseInt($( "#check-balance" ).text().replace("$", "")) // Does not work with stored variable
  var newBalance = "$" + (balance + depAmount)
  $( "#check-balance" ).html(newBalance); // Does not work with stored variable

  console.log("depAmount is: " + depAmount)
  console.log("depAmount type is: " + typeof(depAmount))
  console.log("balanceDisplay is: " + balanceDisplay)
  console.log("newbalance is: " + newBalance)
  console.log("Check Deposit button is working");
});

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// An eventListener for each button, each one a "click"


// Code to discuss:
// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
