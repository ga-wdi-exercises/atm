//lopped off $ in html for now
// var checkingBalance = $("#checking_balance");
// var savingsBalance = $("#savings_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
var checkTotal = 0;
var saveTotal = 0;

//sends amount to checkingBalance
var checkingDeposit = function(amount){
  checkTotal = checkTotal + amount;
};

//removes number from checking total
function checkingWithdrawal(amount){
  //first check if withdraw is more than in acct
  if (amount > checkTotal) {
    //if it is, then check the sum of both accounts
    if (amount <= (checkTotal + saveTotal)){
      amount = amount - checkTotal;
      checkTotal = 0;
      //take it out of savings!
      saveTotal = saveTotal - amount;
      $('.balance').eq(0).html(checkTotal);
      $('.balance').eq(1).html(saveTotal);
      return saveTotal;
    }else{
    return "can't let you do that";}
  }else{
    checkTotal = checkTotal - amount;
    $('.balance').eq(0).html(checkTotal);
    return checkTotal;
  }
}

//increase save total
function savingsDeposit(amount){
  saveTotal = saveTotal + amount;
  // $('.balance').eq(1).html(saveTotal);
}

function savingsWithdrawal(amount){
  if (amount > saveTotal) {
    if (amount <= (checkTotal + saveTotal)){
      amount = amount - saveTotal;
      saveTotal = 0;
      checkTotal = checkTotal - amount;
      $('.balance').eq(1).html(saveTotal);
      $('.balance').eq(0).html(checkTotal);
      return checkTotal;
    }else{
    return "can't let you do that";}
  }else{
    saveTotal = saveTotal - amount;
    $('.balance').eq(1).html(saveTotal);
    return saveTotal;
  }
}

//not sure if worth attempting to DRY up with only 4 events listeners - perhaps in an object??
// an eventListerner for each button, each one a "click"
//checking Deposit
$(':button').eq(0).on("click", function() {
  if ($("input").eq(0).val() === "") {
  }else{
    var newNum = $("input").eq(0).val();
    checkingDeposit(parseInt(newNum));
    $('.balance').eq(0).html(checkTotal);
  }
});
//checking withdraw
$(':button').eq(1).on("click", function() {
  if ($("input").eq(0).val()===""){
  }else{
    var newNum = $("input").eq(0).val();
    checkingWithdrawal(parseInt(newNum));
    $('.balance').eq(0).html(checkTotal);
    $('.balance').eq(1).html(saveTotal);
  }
});
//savings deposit
$(':button').eq(2).on("click", function() {
  if($("input").eq(3).val() === ""){
  }else{
    var newNum = $("input").eq(3).val();
    savingsDeposit(parseInt(newNum));
    $('.balance').eq(1).html(saveTotal);
  }
});
//savings withdraw
$(':button').eq(3).on("click", function() {
  if ($("input").eq(3).val()===""){
  }else{
    var newNum = $("input").eq(3).val();
    savingsWithdrawal(parseInt(newNum));
    $('.balance').eq(0).html(checkTotal);
    $('.balance').eq(1).html(saveTotal);
  }
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
