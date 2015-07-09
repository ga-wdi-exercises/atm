// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  alert("CD");
}

function checkingWithdrawal(amount){
  alert("CW");
}

function savingsDeposit(amount){
  alert("SD");
}

function savingsWithdrawal(amount){
  alert("SW");
}

// an eventListerner for each button, each one a "click"

$("#checkingDeposit").on("click", function() {
  checkingDeposit();
});

$("#checkingWithdrawal").on("click", function() {
  checkingWithdrawal();
});

$("#savingsDeposit").on("click", function() {
  savingsDeposit();
});

$("#savingsWithdrawal").on("click", function() {
  savingsWithdrawal();
});
