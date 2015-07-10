//Global Vars

var currentCheckBalance = 0;
var currentSaveBalance = 0;

// event listeners

// checking deposit button

$('#checkDepositButton').click('click', function(){
    var deposit = $('#checkingInput').val();
    currentCheckBalance = currentCheckBalance + parseInt(deposit);
    $('#checkBalanceWindow').text('$' + currentCheckBalance);

    // zero balance color change
    if (currentCheckBalance == 0){
        $('#checkBalanceWindow').css('background-color', 'red');
    }
    else if (currentCheckBalance > 0){
        $('#checkBalanceWindow').css('background-color', '');
    }
});

// withdraw deposit button

$('#checkWithdrawButton').click('click', function(){
    var withdraw = $('#checkingInput').val();
    if (currentCheckBalance >= withdraw){
        currentCheckBalance = currentCheckBalance - parseInt(withdraw);
        $('#checkBalanceWindow').text('$' + currentCheckBalance);
    }
    // zero balance color change
    if (currentCheckBalance == 0){
        $('#checkBalanceWindow').css('background-color', 'red');
    }
    else if (currentCheckBalance > 0){
        $('#checkBalanceWindow').css('background-color', '');
    }
});

// save deposit button

$('#saveDepositButton').click('click', function(){
    var deposit = $('#savingsInput').val();
    currentSaveBalance = currentSaveBalance + parseInt(deposit);
    $('#saveBalanceWindow').text('$' + currentSaveBalance);

    // zero balance color change
    if (currentSaveBalance == 0){
        $('#saveBalanceWindow').css('background-color', 'red');
    }
    else if (currentSaveBalance > 0){
        $('#saveBalanceWindow').css('background-color', '');
    }
});

// withdraw savings button

$('#saveWithdrawButton').click('click', function(){
    var withdraw = $('#savingsInput').val();
    if (currentSaveBalance >= withdraw){
        currentSaveBalance = currentSaveBalance - parseInt(withdraw);
        $('#saveBalanceWindow').text('$' + currentSaveBalance);
    }

    // zero balance color change
    if (currentSaveBalance == 0){
        $('#saveBalanceWindow').css('background-color', 'red');
    }
    else if (currentSaveBalance > 0){
        $('#saveBalanceWindow').css('background-color', '');
    }

});



