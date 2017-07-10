

var cDeposit = $('#checking .deposit')
var cWithdraw = $('#checking .withdraw')
var cBalance = $('#checking .balance')
var cInput= $('#checking .input')
var cBalanceNum = 0

var sDeposit = $('#savings .deposit')
var sWithdraw = $('#savings .withdraw')
var sBalance = $('#savings .balance')
var sInput = $('#savings .input')
var sBalanceNum = 0

cDeposit.on('click', function() {
  cBalanceNum += parseInt(cInput.val())
  cBalance.text('$' + cBalanceNum)
})

cWithdraw.on('click', function() {
  if (cBalanceNum >= parseInt(cInput.val())) {
  cBalanceNum -= parseInt(cInput.val())
  cBalance.text('$' + cBalanceNum)
}
})

sDeposit.on('click', function() {
  sBalanceNum += parseInt(sInput.val())
  sBalance.text('$' + sBalanceNum)
})

sWithdraw.on('click', function() {
  if (sBalanceNum >= parseInt(sInput.val())) {
    sBalanceNum -= parseInt(sInput.val())
    sBalance.text('$' + sBalanceNum)
  }
})
