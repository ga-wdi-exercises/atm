var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}

function bank(originalAmount){
  originalAmount = originalAmount 0;
  this.checking = originalAmount.checking;
  this.savings = originalAmount.savings;
  this.checking = parseInt(checking)
  this.savings = parseInt(savings)
}







function checkingWithdrawal(amount){
  return (this.checking - amount);
}

function savingsDeposit(amount){
  return (this.checking + amount);
}

function savingsWithdrawal(amount){
  return (this.savings - amount);
}

// an eventListerner for each button, each one a "click"
