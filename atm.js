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

$("#checking .deposit").on("click", function() {
  checkingDeposit();
});

$("#checking .withdrawal").on("click", function() {
  checkingWithdrawal();
});

$("#savings .deposit").on("click", function() {
  savingsDeposit();
});

$("#savings .withdrawal").on("click", function() {
  savingsWithdrawal();
});
