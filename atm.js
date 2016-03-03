var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  // checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
  console.log(checkingBalance);

}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
$(".checking-deposit").click(checkingDeposit);
$(".checking-withdrawal").click(checkingWithdrawal);
$(".savings-deposit").click(savingsDeposit);
$(".savings-withdrawal").click(savingsWithdrawal);
