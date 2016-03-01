
var checkingDeposit = function(){
  $('input[value="Deposit"]').on("click", function() {
    console.log("click");
    $("#checking_balance").text("$" + parseInt($("#amountEntry").val()));
  });
};




function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"

checkingDeposit();
