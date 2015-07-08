
var checkingBalance = 0;
var checkingDisplay = $(".checking_account .balance");
var checkingInput = $(".checking_input");
function checkingDeposit(){
  var depositAmount = parseFloat($(checkingInput).val());
  checkingBalance += depositAmount;
  checkingInput.val("");
  checkingDisplay.html("$"+checkingBalance);
  checkingDisplay.css("background-color","#61c419");


  //target and get value inside text box
}

// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }

// an eventListerner for each button, each one a "click"
$(".checking_account input[value=Deposit]").on("click",checkingDeposit);
