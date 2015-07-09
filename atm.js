// document ready

$(document).ready(function() {
    console.log("ready");
});

//Global Vars

var checkingInput = $('#checkingInput').val();
var checkDepositButton = $('#checkDepositButton');
var checkWithdrawButton = $('#checkWithdrawButton');

var savingsInput = $('savingsInput').val();
var saveDepositButton = $('saveDepositButton');
var saveWithdrawButton = $('saveWithdrawButton');

var checkingBalance = $("#checking_balance");
var savingsBalance = $('#savings_balance');
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// var checkingDeposit = function(amount){
  // checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// };

function deposit (amount){
    //be able to deposit depending on which button is pushed

    if (amount > 1){
        var currentBalance = 0;
        console.log(amount);

        // add amount to checking balance
        currentBalance = currentBalance + amount;
        console.log(currentBalance);

        // triggered by eventListerner
        // checkingBalance = parseInt(checkingBalance.html());
    }
    return checkingBalance;

    if (savingsInput == true){
        // add amount to savings balance
        // triggered by eventListerner
        // savingsBalance = parseInt(checkingBalance.html());
    }
    return savingsBalance;
}

// event listeners

// checking deposit button

$('#checkDepositButton').click('click', function(event){
    event.preventDefault();
    console.log(checkingInput);
    // take #checkingingInput; store it; pass it to deposit()
    deposit(checkingInput);
});

// withdraw deposit button

$('#checkWithdrawButton').click('click', function(event){
    console.log('checkWithdrawButton');
});

// save deposit button

$('#saveDepositButton').click('click', function(event){
    console.log('saveDepositButton');
    // take #savingsInput; store it; pass it to deposit()
    deposit(savingsInput);
});

// withdraw savings button

$('#saveWithdrawButton').click('click', function(event){
    console.log('saveWithdrawButton');
});
// function checkingWithdrawal(amount){

// }

// function savingsDeposit(amount){

// }

// function savingsWithdrawal(amount){

// }

// an eventListerner for each button, each one a "click"
