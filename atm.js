
var checkWithdrawBut = $('#checking').children('.withdraw')
var checkDepositBut = $('#checking').children('.deposit')
var saveWithdrawBut = $('#savings').children('.withdraw')
var saveDepositBut = $('#savings').children('.deposit')
var checkInputVal = $('#checking').children('.input')
var depositInputVal = $('#savings').children('.input')
var checkBalVal = $('#checking').children('.balance')
var saveBalVal = $('#checking').children('.balance')
var checkBalance = 0
var saveBalance = 0
var amount = 0

function getValue () {
  console.log(checkInputVal.val())
  checkInputVal.val('enter an ammount')
}

checkDepositBut.on('click', getValue)
