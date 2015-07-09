var checkingBalance = 0;
var savingsBalance = 0;

var checkingDeposit = function(amount){
 var amount = parseInt($("#checkingAmount").val());
 checkingBalance = checkingBalance + amount;
 $("#checkingBalance").html("$"+checkingBalance);
 $("#checkingAmount").val($(this).attr('placeholder'));

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
