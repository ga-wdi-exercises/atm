$(document).ready (function(){
$('#checking_deposit').on('click', function() {
    cInput =  $('#checking_input');
    cBalance = $('.balance').eq(0)

    newChecking = parseFloat(cBalance.html().substr(1)) + parseInt(cInput.val())

    cBalance.html('$' + newChecking)
    currentChecking = cBalance.html();
    $(cBalance).removeClass('zero')
    cInput.val('')


})


$('#checking_withdraw').on('click', function(){

  newChecking = parseFloat(cBalance.html().substr(1)) - parseInt(cInput.val())



    if (newChecking > 0){
        cBalance.html('$' + newChecking)
        currentChecking = cBalance.html();
        cInput.val('')
      }
    if (newChecking === 0){
      cBalance.html('$' + newChecking)
      cBalance.addClass('zero')
      cInput.val('');
    }
})

$('#savings_deposit').on('click', function() {
    sInput =  $('#savings_input');
    sBalance = $('.balance').eq(1)

    newSavings = parseFloat(sBalance.html().substr(1)) + parseInt(sInput.val())

    sBalance.html('$' + newSavings)
    currentSavings = sBalance.html();
    $(sBalance).removeClass('zero')
    sInput.val('')
})

$('#savings_withdraw').on('click', function() {
    sInput =  $('#savings_input');
    sBalance = $('.balance').eq(1)


    newSavings = parseFloat(sBalance.html().substr(1)) - parseInt(sInput.val())
  if(newSavings > 0){
    sBalance.html('$' + newSavings)
    currentSavings = sBalance.html();
    sInput.val('')
  }
  if (newSavings === 0){
    sBalance.html('$' + newSavings)
    sBalance.addClass('zero')
    sInput.val('');
  }
  })
})
