var checkingBalance_div = document.querySelector("div#checking_balance");
var savingsBalance_div = document.querySelector("div#savings_balance");
checkingBalance = 0;
savingsBalance = 0;
console.log(checkingBalance);

var checkingDeposit = function(amount){
  checkingBalance += parseInt(amount);
  checkingBalance_div.innerHTML = "$" + checkingBalance;
  if(checkingBalance >= 0){
    console.log("hi");
    $("div#checking_balance").removeClass("zero");
  }


}

function checkingWithdrawal(amount){
  checkingBalance -= parseInt(amount);
  checkingBalance_div.innerHTML = "$" + checkingBalance;
  if(checkingBalance <= 0){
    console.log("hi");
    $("div#checking_balance").addClass("zero");
  }

}

function savingsDeposit(amount){
  savingsBalance += parseInt(amount);
  savingsBalance_div.innerHTML = "$" + savingsBalance;
  if(savingsBalance >= 0){
    console.log("hi");
    $("div#savings_balance").removeClass("zero");
  }

}

function savingsWithdrawal(amount){
  savingsBalance -= parseInt(amount);
  savingsBalance_div.innerHTML = "$" + savingsBalance;
  if(savingsBalance <= 0){
    console.log("hi");
    $("div#savings_balance").addClass("zero");
  }

}

// an eventListerner for each button, each one a "click"
$("#checking_deposit").on("click", function(){
  checkingDeposit($("#checking_amount").val())
});

$("#checking_withdraw").on("click", function(){
  checkingWithdrawal($("#checking_amount").val())
});

$("#savings_withdraw").on("click", function(){
  savingsWithdrawal($("#savings_amount").val())
});

$("#savings_deposit").on("click", function(){
  savingsDeposit($("#savings_amount").val())
});
