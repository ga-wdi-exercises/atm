$(document).ready(function () {
/* global $ */


var balanceCheck = 0
var balanceSav = 0
var totalBalance = 0
var balanceChecking = $('#checking .balance')
var balanceSavings = $('#savings .balance')
var checkingDeposit = $('#checking .deposit')
var savingsDeposit = $('#savings .deposit')
var checkingWithdraw = $('#checking .withdraw')
var savingsWithdraw = $('#savings .withdraw')
var checkingInput = $('#checking .input')
var savingsInput = $('#savings .input')

balanceChecking.addClass('zero')
balanceSavings.addClass('zero')

var deposit = function () {
  var input = parseInt(checkingInput.val())
  balanceCheck += input
  totalBalance += input
  balanceChecking.text(`$ ${balanceCheck}`)
  isZero()
  }

var withdraw = function () {
  var input = parseInt(checkingInput.val())
  if (balanceCheck >= input) {
    balanceCheck -= input
    totalBalance -= input
    balanceChecking.text(`$ ${balanceCheck}`)
  } else if (balanceSav && totalBalance >= input) {
      var diff = balanceCheck - input
      balanceSav += diff
      balanceCheck -= diff
      balanceCheck -= input
      totalBalance = balanceSav + balanceCheck
      balanceChecking.text(`$ ${balanceCheck}`)
      balanceSavings.text(`$ ${balanceSav}`)
    } else {
      alert('You tried to withdraw more than you have in Savings and Checking combined!')
    }
    isZero()
}


var depositSavings = function () {
  var input = parseInt(savingsInput.val())
  balanceSav += input
  totalBalance += input
  balanceSavings.text(`$ ${balanceSav}`)
  isZero()
}

var withdrawSavings = function () {
  var input = parseInt(savingsInput.val())
  if (balanceSav >= input) {
    balanceSav -= input
    totalBalance -= input
    balanceSavings.text(`$ ${balanceSav}`)
  } else if (balanceCheck && totalBalance >= input) {
      var diff = balanceSav - input
      balanceCheck += diff
      balanceSav -= diff
      balanceSav -= input
      totalBalance = balanceSav + balanceCheck
      balanceChecking.text(`$ ${balanceCheck}`)
      balanceSavings.text(`$ ${balanceSav}`)
    } else {
      alert('You tried to withdraw more than you have in Savings and Checking combined!')
    }
  isZero()
}

function isZero () {
  if(balanceCheck === 0) {
    balanceChecking.addClass('zero')
  } else {
    balanceChecking.removeClass('zero')
  }
  if(balanceSav === 0) {
    balanceSavings.addClass('zero')
  } else {
    balanceSavings.removeClass('zero')
  }
}
checkingDeposit.on('click', deposit)
checkingWithdraw.on('click', withdraw)
savingsDeposit.on('click', depositSavings)
savingsWithdraw.on('click', withdrawSavings)



// Do not delete these braces fool
}
)


/*
Pseudocode

Idea - create one master ATM class, then create withdraw and deposit methods
  - rationale: the behavior of withdraw/deposit is the same, regardless of checking or savings

  Users can deposit money into one of the bank accounts
    - for both checking and saving:
      - input amount to be deposited
      - on click 'deposit', total should increase by the amount
      - the bank account color should reflect its balance
  Users can withdraw money from one of the bank accounts
    - for both checking and saving:
      - input amount to be withdrawn
      - check the balance to make sure there is enough money
        - if they try to withdraw more than exists, ignore
        - else allow the withdrawal
      - on click 'withdraw', total should decrease by the amount
      - the bank account color should reflect its balance (css class of .zero)

*/


//
//   class ATM {
//     constructor (type) {
//       this.balance = 0
//       this.acttype = type
//     }
//     withdraw () {
//       console.log(this.accttype);
//       var input = (`'#${this.accttype} .input'`).val()
//       console.log(input)
//       this.balance -= input
//       balanceChecking.text(`$ ${balanceNum}`)
//       console.log(`You withdrew ${input} from ${this.accttype}`)
//       return this.balance
//     }
//     deposit (amount) {
//       console.log(`You deposited ${amount} into ${this.accttype}`)
//       this.balance += amount
//       return this.balance
//     }
// }
//
// var checking = new ATM('checking')
// var savings = new ATM('savings')
//
