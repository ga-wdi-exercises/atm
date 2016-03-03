$(document).ready(function(){

atm = {
  checking: 0,
  savings: 0
}

var buttons = $("[type='button']");
checkingDepositButton = buttons.eq(0);
checkingWithdrawalButton = buttons.eq(1);
savingsDepositButton = buttons.eq(2);
savingsWithdrawalButton = buttons.eq(3);

 var userInput = parseInt(account.children("[type='text']").val())

checkingBalance = $(".balance").eq(0).html()

checkingDepositButton.on("click", checkingDeposit)

var checkingDeposit = function(amount){
  // balance = parseInt( checkingBalance("$", "") );

}


function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"

checkingBalance.on("click",checkingDeposit)

});
