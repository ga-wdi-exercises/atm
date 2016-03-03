var checking =0;
var savings = 0;
var $checking_amount = $("#checking_amount");
var $savings_amount = $("#savings_amount");
var $checking_balance = $(".checking_balance");
var $saving_balance = $(".saving_balance");
$checking_amount.val(" ")
savingsNewBalance = parseInt($($saving_balance.val())

var checkingDeposit = function(){
  checkingNewBalance = parseInt($checking_amount.val())
  checking += checkingNewBalance;
  $checking_balance.html("$"+checking);
  if(checking === 0){
    $checking_amount.addClass("zero")
  }
  else{
    $checking_amount.removeClass("zero")
  }
}

function checkingWithdrawal(){
  checkingNewBalance = parseInt($checking_amount.val())
  checking -= checkingNewBalance;
  $checking_balance.html("$"+checking);
  if(checking === 0){
    $checking_amount.addClass("zero")
  }
  else {
    $checking_amount.removeClass("zero")
  }
}

function savingsDeposit(){
  savingsNewBalance = parseInt($($saving_balance.val())
  savings += savingsBalance;
  $savings_balance.html("$"+savings)
  if(savings === 0){
    $savings_amount.addClass("zero")
  }
  else {
    $savings_amount.removeClass("zero")
  }

}

function savingsWithdrawal(){
  savingsNewBalance = parseInt($($saving_balance.val())
  savings -= savingsBalance;
  $savings_balance.html("$"+savings)
  if(savings === 0){
    $savings_amount.addClass("zero")
  }
  else {
    $savings_amount.removeClass("zero")
  }
}

// an eventListerner for each button, each one a "click"
$("#checking_deposit").on("click", checkingDeposit)
$("#checking_withdraw").on("click", checkingWithdrawal)
$("#saving_deposit").on("click", savingsDeposit)
$("#savings_withdraw").on("click",savingsWithdrawal)
