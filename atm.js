// var checkingBalance = document.querySelector("div.balance");
// //checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "amount") );
//
//   return checkingBalance;
// };

var checkingBalance1 = $(".balance").eq(0);
var checkingBalance2 = $(".balance").eq(1);


function checkingDeposit(amount){
   checkingBalance1.html("$" + amount);
}

function checkingWithdrawal(amount){
   checkingBalance1.html("$" + amount);
}

function savingsDeposit(amount){
  return checkingBalance2.html("$" + amount);

}

function savingsWithdrawal(amount){
  return checkingBalance2.html("$" + amount);

}

// an eventListerner for each button, each one a "click"
//first deposit button
var checkDeposit = $("input[value='Deposit']").eq(0);
//console.log(checkDeposit);
checkDeposit.click(function(){
  checkingDeposit($("input").eq(0).val());
});

//first withdraw button
var checkWithdraw = $("input[value='Withdraw']").eq(0);
checkWithdraw.click(function(){
  checkingWithdrawal($("input").eq(0).val());
});

//second deposit button
var saveDeposit = $("input[value='Deposit']").eq(1);
saveDeposit.click(function(){
  console.log($("input").eq(3).val());
  savingsDeposit($("input").eq(3).val());
});



var saveWithdraw = $("input[value='Withdraw']").eq(1);
saveWithdraw.click(function(){
  savingsWithdrawal($("input").eq(3).val());
});
