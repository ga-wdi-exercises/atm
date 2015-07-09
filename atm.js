//var checkingBalance = document.querySelector("div#checking_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

//var checkingDeposit = function(amount){
  //checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );}

//add button functions
  var cDeposit;
  var checkingWithdrawal;
  var sDeposit;
  var savingsWithdrawal;
  var checkingBalance= 0;
  var savingsBalance= 0;
  var totalBalance = checkingBalance + savingsBalance;


if (checkingBalance === 0){
  console.log("zero")
  $(".balance").eq(0).addClass("zero")
}
if (savingsBalance === 0){
  console.log("zero")
  $(".balance").eq(1).addClass("zero")
}

//DEPOSIT IN CHECKING
$(":button").eq(0).on("click", function checkingDeposit(){
     cDeposit= parseInt($("input").eq(0).val());
     console.log(cDeposit)
     checkingBalance = checkingBalance + cDeposit;
     totalBalance = checkingBalance + savingsBalance;
    $(".balance").eq(0).text("$"+checkingBalance);
    if (checkingBalance > 0){
      $(".balance").eq(0).removeClass("zero")
    }
    $("input").eq(0).val("");

    // else if (checkingBalance > 0) {
      // $(".balance").removeClass("zero")
})

//WITHDRAWL FROM CHECKING
$(":button").eq(1).on("click", function(){
  cWithdrawl= parseInt($("input").eq(0).val());
  if (checkingBalance >= cWithdrawl){
  console.log(cDeposit)
  checkingBalance = checkingBalance - cWithdrawl;
  $(".balance").eq(0).text("$"+checkingBalance);
  if (checkingBalance === 0){
   console.log("zero")
   $(".balance").eq(0).addClass("zero")
 }
 $("input").eq(0).val("");
  }
  else if ((checkingBalance < cWithdrawl) && (totalBalance > cWithdrawl)){
    savingsBalance = totalBalance - cWithdrawl;
      $(".balance").eq(0).text("$"+checkingBalance);
      $(".balance").eq(1).text("$"+savingsBalance);
  }
else{
  alert("You're going to overdraft, be more responsible")
}
})

//DEPOSIT IN SAVINGS
$(":button").eq(2).on("click", function(){
  sDeposit= parseInt($("input").eq(3).val());
  console.log(sDeposit)
  savingsBalance = savingsBalance + sDeposit;
  totalBalance = checkingBalance + savingsBalance;
 $(".balance").eq(1).text("$"+savingsBalance);
 if (savingsBalance > 0){
   $(".balance").eq(1).removeClass("zero")
 }
 $("input").eq(3).val("");
})
//WITHDRAWL FROM SAVINGS
$(":button").eq(3).on("click", function(){
  savingsWithdrawal= parseInt($("input").eq(3).val());
  if (savingsBalance >= savingsWithdrawal){
  console.log(sDeposit)
  savingsBalance = savingsBalance - savingsWithdrawal;
 $(".balance").eq(1).text("$"+savingsBalance);
 if (savingsBalance <= 0){
   console.log("zero")
   $(".balance").eq(1).addClass("zero")
 }
 $("input").eq(3).val("");
  }
  else if ((savingsBalance < savingsWithdrawal) && (totalBalance > savingsWithdrawal)){
    checkingBalance = totalBalance - savingsWithdrawal;
      $(".balance").eq(0).text("$"+checkingBalance);
      $(".balance").eq(1).text("$"+savingsBalance);
    }
  else{
    alert("You're going to overdraft, be more responsible")
  }
})

function checkingDeposit(amount){

}
function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
