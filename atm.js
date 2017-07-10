//$(document).ready(function(){
  //$('body').css('background', 'red')
//});


//create balance variable, withdrawal and deposit functions

//var balance = 0
//var amount = $('input').val()


/*var withdraw = function (amount) {
  return balance -= amount
  console.log(balance)
} */

/*var deposit = function (amount) {
  return balance += amount
  console.log(balance)
} */

//define withdrawal and deposit buttons in jquery
/*var deposit = $('.deposit')
var withdraw = $('withdraw') */

//add event listeners to deposit and withdrawal buttons

var checkingInput = $('#checking .input').val()
var checkingBalance = 0
var checkingDeposit = $('#checking .deposit')
var checkingWithdraw = $('#checking .withdraw')
var balanceDisplay = $('#checking .balance')


var depositChecking = function () {
  checkingBalance += parseInt($('input').val(), 10)
}

var withdrawChecking = function () {
  checkingBalance -= parseInt($('input').val(), 10)
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








//withdraw.on('click', withdraw())
