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
  amount = amount || parseInt($("#checkingAmount").val());

  if(!amount) {
    return;
  }
  if (amount > savingsBalance + checkingBalance) {
    return;
  }
  if (amount > checkingBalance) {
    savingsWithdrawal(amount - checkingBalance);
    checkingBalance = 0;
  }
  else if (amount <= checkingBalance) {
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
  amount = amount || parseInt($("#savingsAmount").val());

  if (!amount) {
    return;
  }
  if (amount > savingsBalance + checkingBalance) {
    return;
  }
  if (amount > savingsBalance) {
    checkingWithdrawal(amount - savingsBalance);
    savingsBalance = 0;
  }
  else if (amount <= savingsBalance) {
    savingsBalance = savingsBalance - amount;
  }

  $("#savingsBalance").html("$"+savingsBalance);
  $("#savingsAmount").val($(this).attr('placeholder'));
}

var balanceCheck = function() {
  if (checkingBalance === 0) {
    $("#checkingBalance").addClass("zero");
  }
  else {
    $("#checkingBalance").removeClass("zero");
  }

  if (savingsBalance === 0) {
    $("#savingsBalance").addClass("zero");
  }
  else {
    $("#savingsBalance").removeClass("zero");
  }

}

// an eventListerner for each button, each one a "click"

$("#checkingDeposit").on("click", function() {
  checkingDeposit();
  balanceCheck();
});

$("#checkingWithdrawal").on("click", function() {
  checkingWithdrawal();
  balanceCheck();
});

$("#savingsDeposit").on("click", function() {
  savingsDeposit();
  balanceCheck();
});

$("#savingsWithdrawal").on("click", function() {
  savingsWithdrawal();
  balanceCheck();
});

$(document).ready(function() {
  balanceCheck();
})
