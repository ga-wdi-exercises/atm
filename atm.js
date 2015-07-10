// As a user, I want to deposit money into one of the bank accounts
var balanceDisplay = $(".account").children().eq(1); // Selects Checking Balance HTML Area
var userInputChecking = $(".account").children().eq(2); // Selects Checking User Input
var checkDepositButton = $(".account").children().eq(3); // Checking Deposit Button
var checkWithdrawlButton = $(".account").children().eq(4); // Checking Withdrawl Button

var balanceDisplaySavings = $(".account").children().eq(6); // Selects Savings Balance HTML Area
var userInputSavings = $(".account").children().eq(7); // Selects Savings User Input
var savingsDepositButton = $(".account").children().eq(8); // Savings Deposit Button
var savingsWithdrawlButton = $(".account").children().eq(9); // Savings Withdrawl Button

$(checkDepositButton).click(function() { // Set up Checking Deposit button
  event.preventDefault(); // Prevents Default Refresh
  var depAmount = parseInt($( userInputChecking ).val()); // Get Deposit Value
  var balanceChecking = parseInt(balanceDisplay.html().replace("$", "")); // Remove '$' from Balance HTML
  var newBalance = "$" + (balanceChecking + depAmount); // New Balance Value + '$'
  balanceDisplay.html(newBalance); // Replace Balance HTML with New Balance Value

  if(newBalance !== "$0"){
    $(".account").first().css("background-color","#6C9A74");
  }
  console.log("depAmount is: " + depAmount)
  console.log("depAmount type is: " + typeof(depAmount))
  console.log("balance is: " + balanceChecking)
  console.log("balanceDisplay is: " + balanceDisplay)
  console.log("newbalance is: " + newBalance)
  console.log("Check Deposit button is working")
});

$(checkWithdrawlButton).click(function() { // Set up Checking Withdrawl and Overdraft Protection
  event.preventDefault(); // Prevents Default Refresh
  var withAmount = parseInt($( userInputChecking ).val()); // Get Withdrawl Value
  var balanceChecking = parseInt(balanceDisplay.html().replace("$", "")); // Remove '$' from Checking Balance HTML
  var balanceSavings = parseInt(balanceDisplaySavings.html().replace("$", "")); // Remove '$' from Checking Balance HTML
  var totalBalance = balanceChecking + balanceSavings; // Get Total Balance Value

  if((balanceChecking - withAmount) > 0){ // Checking Withdraw
    var newBalance = "$" + (balanceChecking - withAmount); // New Balance Value + '$'
    balanceDisplay.html(newBalance); // Replace Balance HTML with New Balance Value
  }
  else if((totalBalance - withAmount) >= 0){ // Overdraft only if Total Value is enough
    var balanceOverdraft = withAmount - balanceChecking; // Find how much can be withdrawn
    var newbalanceSavings = "$" + (balanceSavings - balanceOverdraft); // Subtract Overdraft Value from Savings Value
    balanceDisplay.html(newbalanceSavings); // Set Checking Balance to New Balance after Overdraft
    balanceDisplaySavings.html("$0"); // Set Savings Balance to '$' When Overdraft happens
  }
  console.log("Check Withdrawl button is working")
  console.log("New Savings Balance is: " + newbalanceSavings)
});

$(savingsDepositButton).click(function() { // Set up Savings Deposit Button
  event.preventDefault(); // Prevents Default Refresh
  var depAmount = parseInt($( userInputSavings ).val()); // Get Deposit Value
  var balanceSavings = parseInt(balanceDisplaySavings.html().replace("$", "")); // Remove '$' from Balance HTML
  var newBalance = "$" + (balanceSavings + depAmount); // New Balance Value + '$'
  balanceDisplaySavings.html(newBalance); // Replace Balance HTML with New Balance Value

  if(newBalance !== "$0"){ // If balance is set, background will be green
    $(".account:eq(1)").css("background-color","#6C9A74");
  }
  console.log("Savings Deposit button is working")
});

$(savingsWithdrawlButton).click(function() { // Set up Savings Withdrawl Button
  event.preventDefault(); // Prevents Default Refresh
  var withAmount = parseInt($( userInputSavings ).val()); // Get Withdrawl Value
  var balanceSavings = parseInt(balanceDisplaySavings.html().replace("$", "")); // Remove '$' from Balance HTML

  if((balanceSavings - withAmount) > 0){
    var newBalance = "$" + (balanceSavings - withAmount); // New Balance Value + '$'
    balanceDisplaySavings.html(newBalance); // Replace Balance HTML with New Balance Value
  }
  console.log("Savings Withdrawl button is working")
});

if(balanceDisplay.html() === "$0"){ // If balance is '$0', background will be .zero
  $(".account").first().addClass("zero");
}
if(balanceDisplaySavings.html() === "$0"){ // If balance is '$0', background will be .zero
  $(".account:eq(1)").addClass("zero");
}


// Code to discuss:
// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
