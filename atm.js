$(document).ready(function () {
/* global $ */


var balanceNum = 0
var balanceChecking = $('#checking .balance')
var balanceSavings = $('#savings .balance')
var checkingDeposit = $('#checking .deposit')
var savingsDeposit = $('#savings .deposit')
var checkingWithdraw = $('#checking .withdraw')
var savingsWithdraw = $('#savings .withdraw')
var checkingInput = $('#checking .input')
var savingsInput = $('#savings .input')

var depositDisplay = function () {
  var input = parseInt(checkingInput.val())
  balanceNum += input
  balanceChecking.text(`$ ${balanceNum}`)
}

var withdrawDisplay = function () {
  var input = parseInt(checkingInput.val())
  balanceNum -= input
  balanceChecking.text(`$ ${balanceNum}`)
}


var depositDisplaySavings = function () {
  var input = parseInt(savingsInput.val())
  balanceNum += input
  balanceSavings.text(`$ ${balanceNum}`)
}

var withdrawDisplaySavings = function () {
  var input = parseInt(savingsInput.val())
  balanceNum -= input
  balanceSavings.text(`$ ${balanceNum}`)
}

checkingDeposit.on('click', depositDisplay)
checkingWithdraw.on('click', withdrawDisplay)
savingsDeposit.on('click', depositDisplaySavings)
savingsWithdraw.on('click', withdrawDisplaySavings)


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
