// document ready

$(document).ready(function() {
    console.log("ready");
});

//Global Vars

var checkingInput = $('#checkingInput').val();
var checkDepositButton = $('#checkDepositButton');
var checkWithdrawButton = $('#checkWithdrawButton');

var savingsInput = $('#savingsInput').val();
var saveDepositButton = $('saveDepositButton');
var saveWithdrawButton = $('saveWithdrawButton');

var checkingBalance = $("#checking_balance");
var savingsBalance = $('#savings_balance');

var currentCheckBalance = 0;
var currentSaveBalance = 0;

// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// var checkingDeposit = function(amount){
  // checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// };

function deposit (deposit){
    //be able to deposit depending on which button is pushed

    if (deposit == checkingInput){
        // add amount to checking balance
        currentCheckBalance = currentCheckBalance + parseInt(deposit);
        console.log(currentCheckBalance);
        // triggered by eventListerner
        // checkingBalance = parseInt(checkingBalance.html());
    }

    else if (deposit == savingsInput){
        // add amount to savings balance
        currentSaveBalance = currentSaveBalance + parseInt(deposit);
        console.log(currentSaveBalance);
        // triggered by eventListerner
        // savingsBalance = parseInt(checkingBalance.html());
    }
    return currentCheckBalance || currentSaveBalance;
}

function withdraw (withdraw){
    if (withdraw == checkingInput){
        currentCheckBalance = currentCheckBalance - parseInt(withdraw);
    }

    else if (withdraw == savingsInput){
        currentSaveBalance = currentSaveBalance - parseInt(withdraw);
        console.log('withdraw output');
    }
    return currentCheckBalance && currentSaveBalance;
}

// balance window function

function balanceWindow (accountBalance){
    var checkBalanceWindow = $('#checkBalanceWindow');
    var saveBalanceWindow = $('#saveBalanceWindow');

    if (accountBalance == currentCheckBalance){
        checkBalanceWindow.html(currentCheckBalance);
    }
    else if (accountBalance == currentSaveBalance){
        saveBalanceWindow.html(currentSaveBalance);
    }

};

balanceWindow(currentCheckBalance);
// event listeners

// checking deposit button

$('#checkDepositButton').click('click', function(event){
    event.preventDefault();
    console.log(checkingInput);
    // take #checkingingInput; store it; pass it to deposit()
    deposit(checkingInput);
    balanceWindow(currentCheckBalance);
});

// withdraw deposit button

$('#checkWithdrawButton').click('click', function(event){
    console.log(checkWithdrawButton);
    event.preventDefault();
    withdraw(checkingInput);
    balanceWindow(currentCheckBalance);
});

// save deposit button

$('#saveDepositButton').click('click', function(event){
    console.log('saveDepositButton');
    // take #savingsInput; store it; pass it to deposit()
    deposit(savingsInput);
    balanceWindow(currentSaveBalance);
});

// withdraw savings button

$('#saveWithdrawButton').click('click', function(event){
    console.log('saveWithdrawButton');
    event.preventDefault();
    withdraw(savingsInput);
    balanceWindow(currentSaveBalance);
});




// function checkingWithdrawal(amount){

// }

// function savingsDeposit(amount){

// }

// function savingsWithdrawal(amount){

// }

// an eventListerner for each button, each one a "click"
