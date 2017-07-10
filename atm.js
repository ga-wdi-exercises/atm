//$(document).ready(function(){
  //$('body').css('background', 'red')
//});


//create balance variable, withdrawal and deposit functions

//var balance = 0

//define withdrawal and deposit buttons in jquery

//add event listeners to deposit and withdrawal buttons
var checkingInput = $('#checking .input')
var checkingBalance = 0
var checkingDeposit = $('#checking .deposit')
var checkingWithdraw = $('#checking .withdraw')
var balanceDisplay = $('#checking .balance')

var savingsInput = $('#savings .input')
var savingsBalance = 0
var savingsDeposit = $('#savings .deposit')
var savingsWithdraw = $('#savings .withdraw')
var savingsBalanceDisplay = $('#savings .balance')



var depositChecking = function () {
  checkingBalance += parseInt(checkingInput.val(), 10)
}

var withdrawChecking = function () {
  checkingBalance -= parseInt(checkingInput.val(), 10)
}


var deposit = function () {
    console.log($('input').val())
    depositChecking()
    console.log(checkingBalance)
    balanceDisplay.text(`$ ${checkingBalance}`)
}


var withdraw = function () {
  console.log($('input').val())
  withdrawChecking()
  console.log(checkingBalance)
  balanceDisplay.text(`$ ${checkingBalance}`)
}

checkingDeposit.on('click', deposit)
checkingWithdraw.on('click', withdraw)

savingsDeposit.on('click', depositS)
savingsWithdraw.on('click', withdrawS)



var depositSavings = function () {
  savingsBalance += parseInt(savingsInput.val(), 10)
}

var withdrawSavings = function () {
  savingsBalance -= parseInt(savingsInput.val(), 10)
}

function depositS () {
    console.log($('#savings .input').val())
    depositSavings()
    console.log(savingsBalance)
    savingsBalanceDisplay.text(`$ ${savingsBalance}`)
}


function withdrawS () {
  console.log($('#savings .input').val())
  withdrawSavings()
  console.log(savingsBalance)
  savingsBalanceDisplay.text(`$ ${savingsBalance}`)
}










//withdraw.on('click', withdraw())
