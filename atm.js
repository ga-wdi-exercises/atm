var checkingBalance = $(".balance")[0];
var checkingInt = Number.parseInt(checkingBalance.innerHTML.replace("$", ""));
// console.log(checkingInt);
var savingsBalance = $(".balance")[1];
var savingsInt = Number.parseInt(savingsBalance.innerHTML.replace("$", ""));
// console.log(savingsInt);


// add eventListener to each button
$("[value=\"Deposit\"]")[0].click( checkingDeposit(event) );
$("[value=\"Withdrawal\"]")[0].click( checkingWithdrawal(event) );

// event listeners for savings account buttons
$("[value=\"Deposit\"]")[1].click( savingsDeposit(event) );
$("[value=\"Withdrawal\"]")[1].click( savingsWithdrawal(event) );


function checkingDeposit(event){
  // Check contents (integer form) of text input field
  // Sum together that number and the number parsed from the current balance
  // Clear the text input field

}

function checkingWithdrawal(event){
  // if amount > checkingBalance, check if the remaining withdrawal request could be taken from savingsBalance
  //  if remainder can be taken from savingsBalance, empty checkingBalance then take remainder from savingsBalance
  //clear the text input field

  // if checking account balance = 0, change class to 'zero'
}

function savingsDeposit(event){
// Check contents (integer form) of text input field
// Sum together that number and the number parsed from the current balance
// Clear the text input field
}

function savingsWithdrawal(event){
//if amount > savingsBalance, clear the entry field and don't change the balance value
//else, withdraw the amount
//clear the text input field

// if savings account balance = 0, change class to 'zero'
}
