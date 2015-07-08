
var checkingBalance = 0;
var savingsBalance = 0;

// CHECKING ACCOUNT
var checkingDisplay = $(".checking_account .balance");
var checkingInput = $(".checking_input");
function checkingDeposit(){
  var depositAmount = parseFloat($(checkingInput).val());
  checkingBalance += depositAmount;
  checkingInput.val("");
  checkingDisplay.html("$"+checkingBalance);
  checkingDisplay.css("background-color","#61c419");


}

function checkingWithdrawal(){
  var depositAmount = parseFloat($(checkingInput).val());
  checkingBalance -= depositAmount;
  checkingInput.val("");
  checkingDisplay.html("$"+checkingBalance);
  checkingDisplay.css("background-color","red");


}

 //SAVINGS ACCOUNT

var savingsDisplay = $(".savings_account .balance");
var savingsInput = $(".savings_input");

function savingsDeposit(){
  var depositAmount = parseFloat($(savingsInput).val());
  savingsBalance += depositAmount;
  savingsInput.val("");
  savingsDisplay.html("$" + savingsBalance);
  savingsDisplay.css("background-color","#61c419");

}

function savingsWithdrawal(){
  var depositAmount = parseFloat($(savingsInput).val());
  savingsBalance -= depositAmount;
  savingsInput.val("");
  savingsDisplay.html("$"+ savingsBalance);
  savingsDisplay.css("background-color","red");
}

$(".checking_account input[value=Deposit]").on("click",checkingDeposit);
$(".savings_account input[value=Deposit]").on("click",savingsDeposit);
$(".checking_account input[value=Withdraw]").on("click",checkingWithdrawal);
$(".savings_account input[value=Withdraw]").on("click",savingsWithdrawal);
