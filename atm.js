var checkingBalance = 0;
var savingsBalance= 0;
var $checkingBalanceDiv = $('#checkingBalanceDiv');
var $savingsBalanceDiv = $('#savingsBalanceDiv');
var $checkingAmount = $("#checkingAmount");
var $savingsAmount = $("#savingsAmount");


//var checkingBalance =  document.querySelector("div#checking_balance");
//checkingBalance = parseInt(checkingBalance.innerHTML.replace("$", ""));



var userCheckingInput = function(){
  var cAmount = parseInt($checkingAmount.val());
  $checkingAmount.val("");
  console.log(cAmount);
  return cAmount;

};

var userSavingsInput= function(){
  var sAmount = parseInt($checkingAmount.val());
  $checkingAmount.val("");
  console.log(sAmount);
  return sAmount;
};

var checkingDeposit = function(cAmount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );  checkingBalance += UserCheckingInput();
  $checkingBalanceDiv.html("$" + checkingBalance);


};

function checkingWithdrawal(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
  checkingBalance -= UserCheckingInput();
  $checkingBalanceDiv.html("$" + checkingBalance);
}

function savingsDeposit(amount){
  savingsBalance = parseInt( savingsBalance.innerHTML.replace("$", "") );  savingsBalance += UserSavingsInput();
  savingsBalance += UserSavingsInput;
  $savingsBalanceDiv.html("$" + savingsBalance);

}

function savingsWithdrawal(amount){
  savingsBalance = parseInt( savingsBalance.innerHTML.replace("$", "") );  savingsBalance += UserSavingsInput();
  savingsBalance -= UserSavingsInput;
  $savingsBalanceDiv.html("$" + savingsBalance);
}

// an eventListerner for each button, each one a "click"
$('#checkingDepositButton').on('click', checkingDeposit);
