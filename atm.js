var checkingBalance = document.querySelector("div.checking_balance").innerHTML;
/*checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );*/

//document.querySelector("div.checking_balance").innerHTML = parseInt(document.querySelector("input").value)


function checkingDeposit(){
  var newDeposit = parseInt($("#checkingInput").val());
  var balance = parseInt($(".checking_balance").html().replace("$",""));
  var newBalance = newDeposit + balance;
  $(".checking_balance").text("$" + newBalance);
  $("#checkingInput").val("");
}


function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListener for each button, each one a "click"
// click checking deposit
$(":button").eq(0).on("click", checkingDeposit);


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
