cDeposit = $('#checking_deposit')

$(cDeposit).on('click', function (event){

    var currentBalance = $('.balance').eq(0);
    depositInput = $('#checking_input');
    newBalance = ('$' + (depositInput + currentBalance.html())

    currentBalance.html('$' + newBalance)
})
