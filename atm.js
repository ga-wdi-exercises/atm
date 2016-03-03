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
  var sAmount = parseInt($savingsAmount.val());
  $savingsAmount.val("");
  console.log(sAmount);
  return sAmount;
};

var checkingDeposit = function(cAmount){
  console.log($checkingBalanceDiv);
  checkingBalance = parseInt($checkingBalanceDiv.html().replace("$", "") );
  checkingBalance += userCheckingInput();
  $checkingBalanceDiv.html("$" + checkingBalance);
};

var checkingWithdrawal = function(cAmount){
  console.log($checkingBalanceDiv);
  checkingBalance = parseInt($checkingBalanceDiv.html().replace("$", "") );
  checkingBalance -= userCheckingInput();
  $checkingBalanceDiv.html("$" + checkingBalance);
  // if (checkingBalance <= 0){
  //   savingsWithdrawal
  //   //
  // }
  //working on the overdraft... wtf
};

var savingsDeposit = function(sAmount){
  console.log($savingsBalanceDiv);
  savingsBalance = parseInt($savingsBalanceDiv.html().replace("$", ""));
  savingsBalance += userSavingsInput();
  console.log(savingsBalance);
  $savingsBalanceDiv.html("$" + savingsBalance);

};

var savingsWithdrawal = function(sAmount){
  console.log($savingsBalanceDiv);
  savingsBalance = parseInt($savingsBalanceDiv.html().replace("$", ""));
  savingsBalance -= userSavingsInput();
  $savingsBalanceDiv.html("$" + savingsBalance);
};

// an eventListerner for each button, each one a "click"
$('#checkingDepositButton').on('click', checkingDeposit);
$('#withdrawButton').on('click', checkingWithdrawal);
$('#savingsDButton').on('click', savingsDeposit);
$('#savingsWButton').on('click', savingsWithdrawal);
