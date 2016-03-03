var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}

function bank(originalAmount){
  originalAmount = originalAmount 0;
  this.checking = originalAmount.checking;
  this.saving = originalAmount.saving;
  this.checking = parseInt(checking)
  this.saving = parseInt(savings)

}







function checkingWithdrawal(amount){
  return checkingBalance - amount;
}

function savingsDeposit(amount){
  return checkingBalance + amount
}

function savingsWithdrawal(amount){
  return checkingBalance
}

// an eventListerner for each button, each one a "click"
