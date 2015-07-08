
$('#checking_deposit').on('click', function() {
    cInput =  $('#checking_input');
    cBalance = $('.balance').eq(0)

    newChecking = parseFloat(cBalance.html().substr(1)) + parseInt(cInput.val())

    cBalance.html('$' + newChecking)
    currentChecking = cBalance.html();
})

// var cInput =  $('#checking_input');
// var cBalance = $('.balance').eq(0)
// var currentChecking = cBalance.html();
// var newChecking = (parseFloat(cBalance.html().substr(1)) + parseInt(cInput.val()))

$('#checking_withdraw').on('click', function(){

  alert('test')

})
