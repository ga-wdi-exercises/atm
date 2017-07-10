

var cDeposit = $('#checking .deposit')
var cWithdraw = $('#checking .withdraw')
var cBalance = $('#checking .balance')
var cInput= $('#checking .input')
var cAccount = $('#checking')
var cBalanceNum = 0

var sDeposit = $('#savings .deposit')
var sWithdraw = $('#savings .withdraw')
var sBalance = $('#savings .balance')
var sInput = $('#savings .input')
var sAccount = $('#savings')
var sBalanceNum = 0

cDeposit.on('click', function() {
  cBalanceNum += parseInt(cInput.val())
  cBalance.text('$' + cBalanceNum)
  if (cBalanceNum > 0) {
    cAccount.attr('class', 'account')
  }
})

cWithdraw.on('click', function() {
  if (cBalanceNum >= parseInt(cInput.val())) {
  cBalanceNum -= parseInt(cInput.val())
  cBalance.text('$' + cBalanceNum)
    if (cBalanceNum === 0) {
      cAccount.attr('class', 'zero')
    }
}
  else if(cBalanceNum < parseInt(cInput.val())) {
    if (cBalanceNum + sBalanceNum < parseInt(cInput.val())) {
    alert('That amount exceeds your available balance in both accounts')
    }

    else {
      var remainder = parseInt(cInput.val()) - cBalanceNum
      sBalanceNum -= remainder
      cBalanceNum = 0
      cBalance.text('$' + cBalanceNum)
      sBalance.text('$' + sBalanceNum)
      if (cBalanceNum === 0) {
        cAccount.attr('class', 'zero')
      }
      if (sBalanceNum === 0) {
        sAccount.attr('class', 'zero')
      }
    }
  }
})

sDeposit.on('click', function() {
  sBalanceNum += parseInt(sInput.val())
  sBalance.text('$' + sBalanceNum)
    if (sBalanceNum > 0) {
      sAccount.attr('class', 'account')
    }
})

sWithdraw.on('click', function() {
  if (sBalanceNum >= parseInt(sInput.val())) {
    sBalanceNum -= parseInt(sInput.val())
    sBalance.text('$' + sBalanceNum)
    if (sBalanceNum === 0) {
      sAccount.attr('class', 'zero')
    }
  }
})
