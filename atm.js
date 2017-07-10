

var cDeposit = $('#checking .deposit')
var cWithdraw = $('#checking .withdraw')
var cBalance = $('#checking .balance')
var inputValue = $('.input')
var cBalanceNum = 0

cDeposit.on('click', function() {
  cBalanceNum += parseInt(inputValue.val())
  cBalance.text('$' + cBalanceNum)
})

cWithdraw.on('click', function() {
  if (cBalanceNum >= parseInt(inputValue.val())) {
  cBalanceNum -= parseInt(inputValue.val())
  cBalance.text('$' + cBalanceNum)
}
})
