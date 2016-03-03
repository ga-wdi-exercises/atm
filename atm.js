var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
};
// var checkingBalance = document.querySelector(".checking_balance").innerHTML;
var extraAmount = 0;

checkingDeposit = function(){
  inputAmount = parseInt($('.inputField').val());
  checkingBalance = parseInt( document.querySelector(".checking_balance").innerHTML.replace("$", "") );
  balanceAmount = inputAmount.checkingBalance;
  $('.checking_balance').html(balanceAmount);
};

function checkingWithdrawal(amount){
  var checkingWithdrawal = function(){
    inputAmount = parseInt($('.inputField').val());
    if (inputAmount > checkingBalance){
      checkingBalance = parseInt( document.querySelector(".checking_balance").innerHTML.replace("$", "") );
      extraAmount = inputAmount - checkingBalance;
      savingsDeposit2(extraAmount);
      $('.checking_balance').html('0');
      return;
    }
  };
  balanceAmount = checkingBalance - inputAmount;
  $('.checking_balance').html(balanceAmount);
  checkingBalance = parseInt( document.querySelector(".checking_balance").innerHTML.replace("$", "") );
}

savingsDeposit2 = function(amount){
  savingsUpdate();
  if (amount > savingsBalance){
    alert('You need mo money');
  }
  else if (amount < savingsBalance){
    sBalanceAmount = savingsBalance - amount;
    $('.savings_balance').html(sBalanceAmount);
    savingsUpdate();
  }
};

function savingsDeposit(amount){
  $(".deposit").on('click',checkingDeposit);
  $(".withdraw").on('click',checkingWithdrawal);

  savingsUpdate = function(){
    savingsBalance = parseInt( document.querySelector(".savings_balance").innerHTML.replace("$", "") );
  };
}

function savingsWithdrawal(amount){
  var savingsDeposit = function(){
    sInputAmount = parseInt($('.sInputField').val());
    savingsUpdate();
    sBalanceAmount = sInputAmount.savingsBalance;
    $('.savings_balance').html(sBalanceAmount);
    savingsUpdate();
  };
}
$(".sDeposit").on('click',savingsDeposit);

var savingsWithdrawal = function(){
  sInputAmount = parseInt($('.sInputField').val());
  sBalanceAmount = savingsBalance - sInputAmount;
  $('.savings_balance').html(sBalanceAmount);
  savingsUpdate();
};

// an eventListerner for each button, each one a "click"
$(".sWithdraw").on('click',savingsWithdrawal);
