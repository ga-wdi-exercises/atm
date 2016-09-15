$(document).ready(function(){
//Declare all global variables
var checkingBalance = 0,
    checkingDisplay = $('#checking div.balance'),
    checkingInput = $('#checking input.input'),
    checkingDeposit = $('#checking input.deposit'),
    checkingWithdraw = $('#checking input.withdraw'),
    savingsBalance = 0,
    savingsDisplay = $('#checking div.balance'),
    savingsInput = $('#checking input.input'),
    savingsDeposit = $('#checking input.deposit'),
    savingsWithdraw = $('#checking input.withdraw');

//set event listeners to trigger ATM functionality
checkingDeposit.on('click', atm.depositToChecking);
checkingWithdraw.on('click', atm.withdrawFromChecking);
savingsDeposit.on('click', atm.depositToSavings);
savingsWithdraw.on('click', atm.withdrawFromSavings);

//Object containing ATM functionality
var atm = {

};
});
