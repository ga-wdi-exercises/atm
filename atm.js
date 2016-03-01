
//lopped off $ in html for now
var checkingBalance = $("#checking_balance");
var savingsBalance = $("#savings_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
var checkTotal = 0;
var saveTotal = 0;

//sends amount to checkingBalance
var checkingDeposit = function(amount){
  checkTotal = checkTotal + amount;
};

//removes number from checking total unless larger than
function checkingWithdrawal(amount){
  if (amount > checkTotal) {
    return "can't let you do that";
  }else{
    checkTotal = checkTotal - amount;
    return checkTotal;
  }
}

//increase save total
function savingsDeposit(amount){
  saveTotal = saveTotal + amount;
}

function savingsWithdrawal(amount){
  if (amount > saveTotal) {
    return "can't let you do that";
  }else{
    saveTotal = saveTotal - amount;
    return saveTotal;
  }
}

//not sure if worth attempting to DRY up with only 4 events listeners - perhaps in an object??
// an eventListerner for each button, each one a "click"
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

/* Pseudocode for halp:
As a user, I want to deposit money into one of the bank accounts
As a user, I want to withdraw money from one of the bank accounts
Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
As a user, I want overdraft protection
What happens when the user wants to withdraw more money from the checking account than is in the account?
If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
If the withdrawal amount is more than the combined account balance, ignore it.
*/
