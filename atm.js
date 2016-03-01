
var checkingAccount = document.querySelector("#checking_account");
//Get inner html of balance
var currentBalance = $(".balance");
//Get value of input
var userInput = $("input:text").val();

var depositButton = $("input[value='Deposit']");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
function checkingDeposit(amount){
    enteredAmount = parseInt(amount);
    //must add old and new amount together
    finalBalance = parseInt(currentBalance.html()) + enteredAmount;

    return currentBalance.html(finalBalance);

}

depositButton.on("click", function(){
    checkingDeposit(userInput);
});

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
