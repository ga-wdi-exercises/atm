var checking_balance = document.querySelector("#checking_balance");
checkingBalance = parseInt( checking_balance.innerHTML.replace("$", "") );
savings_amount = querySelectorall("savings_deposit").value;
checking_amount = querySelectorall("savings_deposit").value;

var checkingDeposit = function(checking_amount){
  checkingBalance = parseInt( checking_balance.innerHTML.replace("$", "") );
  checkingBalance+= checking_amount;
  checking_balance.innerHTML = '$'+ checkingBalance;
  checking_amount = "";
}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
