$(document).ready(function(){

var checkingAccount = $('#checking')
var savingsAccount = $('#savings')
var checkingBalance = 0
var savingsBalance = 0
var checkingDepositButton = $('#checking .deposit')
var checkingWithdrawButton = $('#checking .withdraw')
var savingsDepositButton = $('#savings .deposit')
var savingsWithdrawButton = $('#savings .withdraw')

checkingDepositButton.on('click', checkingDeposit)
checkingWithdrawButton.on('click', checkingWithdraw)
savingsDepositButton.on('click', savingsDeposit)
savingsWithdrawButton.on('click', savingsWithdraw)

function checkingDeposit () {
  checkingInput = parseInt($('#checking .input').val())
  checkingBalance += checkingInput
  checkingReflectBalance()
  checkingShowBalance()
}

function checkingWithdraw () {
  checkingInput = parseInt($('#checking .input').val())
  if (checkingBalance < checkingInput)
  { alert('insufficient funds, transaction can not be completed')
    return
  } else {
    checkingBalance -= checkingInput
  }
  checkingReflectBalance()
  checkingShowBalance()
}

function checkingReflectBalance () {
  if (checkingBalance <= 0 ) {
    checkingAccount.addClass('zero')
  }
  else if (checkingBalance > 0) {
    checkingAccount.removeClass('zero')
  }
}

function checkingShowBalance () {
  $('#checking .balance').text(`$ ${checkingBalance}`)
}

function savingsDeposit () {
  savingsInput = parseInt($('#savings .input').val())
  savingsBalance += savingsInput
  savingsReflectBalance()
  savingsShowBalance()
}

function savingsWithdraw () {
  if (savingsBalance < savingsInput)
  { alert('insufficient funds, transaction can not be completed')
    return
  } else {
    savingsBalance -= savingsInput
  }
  savingsReflectBalance()
  savingsShowBalance()
}

function savingsReflectBalance () {
  if (savingsBalance <= 0 ) {
    savingsAccount.addClass('zero')
  }
  else if (savingsBalance > 0) {
    savingsAccount.removeClass('zero')
  }
}

function savingsShowBalance () {
  $('#savings .balance').text(`$ ${savingsBalance}`)
}

});
