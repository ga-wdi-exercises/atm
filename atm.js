/*var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}*/

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListener for each button, each one a "click"
// click checking deposit
$(":button").eq(0).on("click", function(){
  console.log("click check dep");
})
// click checking withdrawal
$(":button").eq(1).on("click", function(){
  console.log("click check wd");
})
// click checking deposit
$(":button").eq(2).on("click", function(){
  console.log("click sav dep");
})
// click checking deposit
$(":button").eq(3).on("click", function(){
  console.log("click sav wd");
})
