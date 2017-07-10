// Variables
var checkWithdrawBut = $('#checking').children('.withdraw')
var checkDepositBut = $('#checking').children('.deposit')
var saveWithdrawBut = $('#savings').children('.withdraw')
var saveDepositBut = $('#savings').children('.deposit')
var checkInputVal = $('#checking').children('.input')
var saveInputVal = $('#savings').children('.input')
var checkBalVal = $('#checking').children('.balance')
var saveBalVal = $('#savings').children('.balance')
var checkBalance = 0
var saveBalance = 0

//Functions
  //Functions for checking
function depositCheck () {
  checkBalance += parseInt(checkInputVal.val())
  updateBalCheck()
  checkInputVal.val('')
}

function withdrawCheck () {
  var diff = checkBalance - checkInputVal.val()
  if (diff < 0 && saveBalance > -diff) {
    negativeCheck()
  } else if (diff < 0 && checkBalance < -diff) {
    alert(`Sorry you dont have $${checkInputVal.val()} available.`)
  } else {
    checkBalance -= parseInt(checkInputVal.val())
    updateBalCheck()
    checkInputVal.val('')
  }
}

function negativeCheck () {
  var diff = checkBalance - checkInputVal.val()
  saveBalance += diff
  checkBalance = 0
  updateBalCheck()
  updateBalSave()
  checkInputVal.val('')
}

function updateBalCheck () {
  checkBalVal.text('$' + checkBalance)
  isZeroCheck()
}

function isZeroCheck () {
  if (checkBalance !== 0) {
    checkBalVal.removeClass('zero')
    checkBalVal.css('balance')
  } else if (checkBalance === 0) {
    checkBalVal.toggleClass('zero')
  }
}

  //Functions for savings
function depositSave () {
  saveBalance += parseInt(saveInputVal.val())
  updateBalSave()
  saveInputVal.val('')
}

function withdrawSave () {
  if (saveInputVal.val() < saveBalance) {
    saveBalance -= parseInt(saveInputVal.val())
    updateBalSave()
    saveInputVal.val('')
  } else {
    alert(`Sorry you dont have $${saveInputVal.val()} available.`)
  }

}

function updateBalSave () {
  saveBalVal.text('$' + saveBalance)
  isZeroSave()
}

function isZeroSave () {
  if (saveBalance !== 0) {
    saveBalVal.removeClass('zero')
    saveBalVal.css('balance')
  } else if (checkBalance === 0) {
    saveBalVal.toggleClass('zero')
  }
}


//Listeners
checkDepositBut.on('click', depositCheck)
checkWithdrawBut.on('click', withdrawCheck)

saveDepositBut.on('click', depositSave)
saveWithdrawBut.on('click', withdrawSave)

if (checkBalVal <= 0) {
  $('.checkBalVal').toggle('.zero')
}
