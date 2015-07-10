// As a user, I want to deposit money into one of the bank accounts
var balanceDisplay = $(".account").children().eq(1); // Selects Checking Balance HTML Area
var userInputChecking = $(".account").children().eq(2); // Selects Checking User Input
var checkDepositButton = $(".account").children().eq(3); // Checking Deposit Button
var checkWithdrawlButton = $(".account").children().eq(4); // Checking Withdrawl Button

var balanceDisplaySavings = $(".account").children().eq(6); // Selects Savings Balance HTML Area
var userInputSavings = $(".account").children().eq(7); // Selects Savings User Input
var savingsDepositButton = $(".account").children().eq(8); // Savings Deposit Button
var savingsDepositButton = $(".account").children().eq(9); // Savings Withdrawl Button

$(checkDepositButton).click(function() { // Set up Checking Deposit button
  event.preventDefault(); // Prevents Default Refresh
  var depAmount = parseInt($( userInputChecking ).val()); // Get Deposit Value
  var balance = parseInt(balanceDisplay.html().replace("$", "")) // Remove '$' from Balance HTML
  var newBalance = "$" + (balance + depAmount) // New Balance Value + '$'
  balanceDisplay.html(newBalance); // Replace Balance HTML with New Balance Value

  console.log("depAmount is: " + depAmount)
  console.log("depAmount type is: " + typeof(depAmount))
  console.log("balance is: " + balance)
  console.log("balanceDisplay is: " + balanceDisplay)
  console.log("newbalance is: " + newBalance)
  console.log("Check Deposit button is working");
});

$(checkWithdrawlButton).click(function() {
  event.preventDefault(); // Prevents Default Refresh
  var withAmount = parseInt($( userInputChecking ).val()); // Get Withdrawl Value
  var balance = parseInt(balanceDisplay.html().replace("$", "")) // Remove '$' from Balance HTML

  if((balance - withAmount) > 0){
    var newBalance = "$" + (balance - withAmount) // New Balance Value + '$'
    balanceDisplay.html(newBalance); // Replace Balance HTML with New Balance Value
  }
  else {
    balanceDisplay.html("$0"); // Ensure Balance cannot go below $0
  }
  console.log("Check Withdrawl button is working");
});

$(savingsDepositButton).click(function(){
  event.preventDefault(); // Prevents Default Refresh
  var depAmount = parseInt($( userInputSavings ).val()); // Get Deposit Value
  var balance = parseInt(balanceDisplaySavings.html().replace("$", "")) // Remove '$' from Balance HTML
  var newBalance = "$" + (balance + depAmount) // New Balance Value + '$'
  balanceDisplaySavings.html(newBalance); // Replace Balance HTML with New Balance Value

  console.log("Savings Deposit button is working");
});

function savingsWithdrawal(amount){

}

// An eventListener for each button, each one a "click"


// Code to discuss:
// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
