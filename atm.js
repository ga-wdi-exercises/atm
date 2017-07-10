
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

function deposit () {
  console.log(checkInputVal.val())
  checkBalance += parseInt(checkInputVal.val())
  updateBal()
  checkInputVal.val('enter an ammount')
}

function updateBal () {
  checkBalVal.text('$' + checkBalance)
}

checkDepositBut.on('click', deposit)
