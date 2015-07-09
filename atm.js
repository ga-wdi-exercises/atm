
function overDraft(){
  if (savingsBalance > 0) {
    var depositAmount = parseFloat($(checkingInput).val());
    savingsBalance -= depositAmount;
    checkingInput.val("");
    savingsDisplay.html("$"+ savingsBalance);
    savingsDisplay.css("background-color","red");
    $("body").append("<h1>Overdraft! YOU ARE BROKE FOOL!</h1>");

  }

};


// CHECKING ACCOUNT
var checkingBalance = 10;

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
  if (checkingBalance <= 0){

    overDraft();

  } else{

  var depositAmount = parseFloat($(checkingInput).val());
  checkingBalance -= depositAmount;
  checkingInput.val("");
  checkingDisplay.html("$"+checkingBalance);
  checkingDisplay.css("background-color","red");
}

}

 //SAVINGS ACCOUNT

var savingsBalance = 10;

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
    if (savingsBalance > 0) {
      var depositAmount = parseFloat($(savingsInput).val());
      savingsBalance -= depositAmount;
      savingsInput.val("");
      savingsDisplay.html("$"+ savingsBalance);
      savingsDisplay.css("background-color","red");
    }
}

savingsDisplay.html("$"+ savingsBalance);
checkingDisplay.html("$"+checkingBalance);

$(".checking_account input[value=Deposit]").on("click",function(){
    if (isNaN(this) == false){
        checkingDeposit;
    }
    });
$(".checking_account input[value=Withdraw]").on("click", function(){
      if (isNaN(this) == false){
          checkingWithdrawal;
      }

    });
$(".savings_account input[value=Deposit]").on("click",function(){
      if (isNaN(this) == false){
         savingsDeposit;
      }
    });
$(".savings_account input[value=Withdraw]").on("click",function(){
      if (isNaN(this) == false){
         savingsWithdrawal;
      }
    });
