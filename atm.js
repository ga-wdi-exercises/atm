// document ready

$(document).ready(function() {
    console.log("ready");
});

//Global Vars

var checkingInput = $('#checkingInput');
var checkDepositButton = $('#checkDepositButton');
var checkWithdrawButton = $('#checkWithdrawButton');

var savingsInput = $('savingsInput');
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

    if (checkingInput == true){
        // add amount to checking balance
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
    console.log('checkDepositButton');
});

// withdraw deposit button

$('#checkWithdrawButton').click('click', function(event){
    console.log('checkWithdrawButton');
});

// save deposit button

$('#saveDepositButton').click('click', function(event){
    console.log('saveDepositButton');
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
