// document ready

$(document).ready(function(){
    console.log("ready");

//Global Vars

var currentCheckBalance = 0;
var currentSaveBalance = 0;

// event listeners

// checking deposit button

$('#checkDepositButton').click('click', function(){
    var deposit = $('#checkingInput').val();
    currentCheckBalance = currentCheckBalance + parseInt(deposit);
    console.log(currentCheckBalance);
    $('#checkBalanceWindow').text('$' + currentCheckBalance);
});

// withdraw deposit button

$('#checkWithdrawButton').click('click', function(){
    var withdraw = $('#checkingInput').val();
    currentCheckBalance = currentCheckBalance - parseInt(withdraw);
    $('#checkBalanceWindow').text('$' + currentCheckBalance);
});

// save deposit button

$('#saveDepositButton').click('click', function(){
    var deposit = $('#savingsInput').val();
    currentSaveBalance = currentSaveBalance + parseInt(deposit);
    $('#saveBalanceWindow').text('$' + currentSaveBalance);
});

// withdraw savings button

$('#saveWithdrawButton').click('click', function(){
    var withdraw = $('#savingsInput').val();
    currentSaveBalance = currentSaveBalance - parseInt(withdraw);
    $('#saveBalanceWindow').text('$' + currentSaveBalance);
});

});
