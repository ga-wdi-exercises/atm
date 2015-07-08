//var checkingBalance = document.querySelector("div#checking_balance");
//checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//var checkingDeposit = function(amount){
//  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//}

cBal = 0
sBal = 0

//Checking Account - deposit button
  //When user enters a value and clicks the deposit button, update account balance
    //User enters value in cUserInput field
    //user clicks cDepositButton
    //Update checkingBalance to reflect user deposit

$( "cDepositButton" ).on("click", function(){
  var cUserInput = parseInt($( "#cUserInput" ).val())
})

//Checking account - withdrawButton
$( "cWithdrawButton" ).on("click", function(){
  var cUserInput = parseInt($( "#cUserInput" ).val())
})


//function checkingWithdrawal(amount){}

//function savingsDeposit(amount){}

//function savingsWithdrawal(amount){}

// an eventListerner for each button, each one a "click"
