
//lopped off $ in html for now
var checkingBalance = $("#checking_balance");
var savingsBalance = $("#savings_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
var checkTotal = 0;
var saveTotal = 0;

//returns sum of checkingBalance array!
var getCheckingBalance = function() {
  checkTotal = 0;
  for (var i=0; i < checkingBalance.length; i++){
    checkTotal = checkTotal + checkingBalance[i];
  }
  return checkTotal;
};

//sends amount to checkingBalance
var checkingDeposit = function(amount){
  checkingBalance.push(amount);
};

function checkingWithdrawal(amount){
  getCheckingBalance();
  if (amount > checkTotal) {
    return "can't let you do that";
  }else{
    checkingBalance.push(-amount);
    checkTotal = checkTotal - amount;
    return checkTotal;
  }
}

//run the most current savings balance
var getSavingsBalance = function() {
  saveTotal = 0;
  for (var i=0; i < savingsBalance.length; i++){
    saveTotal = saveTotal + saveBalance[i];
  }
  return saveTotal;
};
//sends amount to savingsBalance array
function savingsDeposit(amount){
  savingsBalance.push(amount);
}

function savingsWithdrawal(amount){
  getSavingsBalance();
  if (amount > saveTotal) {
    return "can't let you do that";
  }else{
    savingsBalance.push(-amount);
    saveTotal = saveTotal - amount;
    return saveTotal;
  }
}

// an eventListerner for each button, each one a "click"

//not sure if worth attempting to DRY up with only 4 events listeners
//checking Deposit
$(':button').eq(0).on("click", function() {
  console.log("I was clicked - checkings deposit");
});
//checking withdraw
$(':button').eq(1).on("click", function() {
  console.log("I was clicked - checkings withdraw");
});
//savings deposit
$(':button').eq(2).on("click", function() {
  console.log("I was clicked - savings deposit");
});
//savings withdraw
$(':button').eq(3).on("click", function() {
  console.log("I was clicked - savings withdraw");
});

/*
As a user, I want to deposit money into one of the bank accounts
As a user, I want to withdraw money from one of the bank accounts
Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
As a user, I want overdraft protection
What happens when the user wants to withdraw more money from the checking account than is in the account?
If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
If the withdrawal amount is more than the combined account balance, ignore it.
*/
