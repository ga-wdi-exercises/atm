// var checkingBalance = document.querySelector(".checking_balance").innerHTML;
var extraAmount = 0;

checkingDeposit = function(){
  inputAmount = parseInt($('.inputField').val());
  checkingBalance = parseInt( document.querySelector(".checking_balance").innerHTML.replace("$", "") );
  balanceAmount = inputAmount + checkingBalance;
  $('.checking_balance').html(balanceAmount);
}

checkingWithdrawal = function(){
inputAmount = parseInt($('.inputField').val());
if (inputAmount > checkingBalance){
  checkingBalance = parseInt( document.querySelector(".checking_balance").innerHTML.replace("$", "") );
  extraAmount = inputAmount - checkingBalance;
  savingsDeposit2(extraAmount);
  $('.checking_balance').html('0');
  return;
}
balanceAmount = checkingBalance - inputAmount;
$('.checking_balance').html(balanceAmount);
checkingBalance = parseInt( document.querySelector(".checking_balance").innerHTML.replace("$", "") );
}

savingsDeposit2 = function(amount){
  savingsUpdate();
  if (amount > savingsBalance){
    alert('NOT ENOUGH DOUGH, BRO!')
  }
  else if (amount < savingsBalance){
    sBalanceAmount = savingsBalance - amount;
    $('.savings_balance').html(sBalanceAmount);
    savingsUpdate();
  }
}

$(".deposit").on('click',checkingDeposit)
$(".withdraw").on('click',checkingWithdrawal)

savingsUpdate = function(){
  savingsBalance = parseInt( document.querySelector(".savings_balance").innerHTML.replace("$", "") );
}

savingsDeposit = function(){
  sInputAmount = parseInt($('.sInputField').val());
  savingsUpdate();
  sBalanceAmount = sInputAmount + savingsBalance;
  $('.savings_balance').html(sBalanceAmount);
  savingsUpdate();
}
$(".sDeposit").on('click',savingsDeposit)

savingsWithdrawal = function(){
sInputAmount = parseInt($('.sInputField').val());
sBalanceAmount = savingsBalance - sInputAmount;
$('.savings_balance').html(sBalanceAmount);
savingsUpdate();
}

$(".sWithdraw").on('click',savingsWithdrawal)
