var checkingBalance = 0;
var savingsBalance = 0;

var checkingDeposit = function(amount){
 var amount = parseInt($("#checkingAmount").val());
 if (amount) {
   checkingBalance = checkingBalance + amount;
 }
 $("#checkingBalance").html("$"+checkingBalance);
 $("#checkingAmount").val($(this).attr('placeholder'));

}

function checkingWithdrawal(amount){
  var amount = parseInt($("#checkingAmount").val());
  if (amount) {
    checkingBalance = checkingBalance - amount;
  }
  $("#checkingBalance").html("$"+checkingBalance);
  $("#checkingAmount").val($(this).attr('placeholder'));
}

function savingsDeposit(amount){
  var amount = parseInt($("#savingsAmount").val());
  if (amount) {
    savingsBalance = savingsBalance + amount;
  }
  $("#savingsBalance").html("$"+savingsBalance);
  $("#savingsAmount").val($(this).attr('placeholder'));
}

function savingsWithdrawal(amount){
  var amount = parseInt($("#savingsAmount").val());
  if (amount) {
    savingsBalance = savingsBalance - amount;
  }
  $("#savingsBalance").html("$"+savingsBalance);
  $("#savingsAmount").val($(this).attr('placeholder'));
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
