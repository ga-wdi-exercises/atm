
//lopped off $ in html for now

var checkingBalance = $("#checking_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

//sends amount to checkingBalance
var checkingDeposit = function(amount){
  checkingBalance.push(amount);
};
var checkTotal = 0;

//loop for checking balance
function checkingSum() {

}

//returns sum of checkingBalance array!
var getCheckingBalance = function() {
  checkTotal = 0;
  for (var i=0; i < checkingBalance.length; i++){
    checkTotal = checkTotal + checkingBalance[i];
  }
  return checkTotal;
};

function checkingWithdrawal(amount){
  checkingBalance.push(-amount);
  checkingSum();
  return (checkTotal);
}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
/*
As a user, I want to deposit money into one of the bank accounts
As a user, I want to withdraw money from one of the bank accounts
Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
As a user, I want overdraft protection
What happens when the user wants to withdraw more money from the checking account than is in the account?
If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
If the withdrawal amount is more than the combined account balance, ignore it.
*/
