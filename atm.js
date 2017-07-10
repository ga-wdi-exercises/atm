
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

function changeBrushColor (evt) {
   evt.preventDefault()
   brush.css('background', input.val())
}

// function addDeposit () {
//   var value = checkInputVal.val()
//   console.log(value)
// }

// possible functions
//   increment balance
//   decrease balance
//   change balance color based on balance


// function test1 () {
//   console.log('worked')
//   $('body').css('background', 'red')
// }
//
// function test2 () {
//   console.log(checkBalVal.text())
//   $('body').css('background', 'red')
// }
//
checkWithdrawBut.on('click', getValue)
// checkDepositBut.on('click', test1)
// saveWithdrawBut.on('click', test1)
// saveDepositBut.on('click', test1)
// checkInputVal.on('keypress', test2)
// checkWithdrawBut.on('click', test)
