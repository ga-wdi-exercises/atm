
$(document).ready (function(){

var cTotal= 0;
var sTotal = 0

//Checking
  $("#cDepositButton").on("click", function() {
    var cAmount = parseFloat($("#cPlaceHolder").val());
    cTotal += cAmount;
    $("#cBalance").text("$ " + cTotal);
  });

  $("#cWithdrawButton").on("click", function() {
    var cAmount = parseFloat($("#cPlaceHolder").val());
    cTotal -= cAmount;
    $("#cBalance").text("$ " + cTotal);
  });

//Savings
  $("#sDepositButton").on("click", function() {
    var sAmount = parseFloat($("#sPlaceHolder").val());
    sTotal += sAmount;
    $("#sBalance").text("$ " + sTotal);
  });

  $("#sWithdrawButton").on("click", function() {
    var sAmount = parseFloat($("#sPlaceHolder").val());
    sTotal -= sAmount;
    $("#sBalance").text("$ " + sTotal);
  });










});



/*var checkingBalance = document.querySelector("div#checking_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}*/

// an eventListerner for each button, each one a "click"

//Checking account
  //when click on deposit,
    //enter and store amount,
    //show amount entered
    //add from the total amount
  //when click on withdraw
    //enter and subtract amount
    //show amount entered
    //subtract from the total amount
