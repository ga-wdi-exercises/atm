$(document).ready(function () {
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...


var checkingBalance = $('#checking .balance')
var savingsBalance = $('#savings .balance')
var checkingDeposit = $('#checking .deposit')
var checkingInput = $('#checking .input')

const checkDepositButton = $('checking .deposit')
const checkWithdrawButton = $('checking .withdraw')
const savingsDepositButton = $('savings .deposit')
const savingsWithdrawButton = $('savings .withdraw')

checkDepositButton.on('click', depositChecking)
checkWithdrawButton.on('click', withdrawChecking)
checkDepositButton.on('click', depositSavings)
savingsWithdrawButton.on('click', withdrawSavings)

  class Account {

    constructor (acct = null) {
      this.balance = 0
      this.history = []
    // this.otherAcct = acct
    }
    withdraw (num) {
      if (this.balance - num > 0) {
        this.balance -= num
      // this.history.push(-num)
      } else {
        var net = num - this.balance
        if (net > this.otherAcct.balance) {
          alert('Insuficient Funds')
        } else {
          alert('Insuficient Funds, withdrawing from secondary account')
          this.balance = 0
        // this.history.push(-net)

          this.otherAcct.balance -= net
        // this.otherAcct.history.push(-net)
        }
      }
    }
    deposit (num) {
      this.balance += num
    }

    linkAccount (acct) {
      this.otherAcct = acct
    }
}




function depositChecking () {
  checking.deposit(checkingInput.val())
  checkingBalance.text() = ('$' + savings.balance)
}


function withdrawChecking () {
  checking.withdraw(checkingInput.val())
  checkingBalance.text() = ('$'  + savings.balance)
}


function depositSavings () {
  savings.deposit(checkingInput.val())
  savingsBalance.text() = ('$' + savings.balance)
}



function withdrawSavings () {
  savings.withdraw(checkingInput.val())
  savingsBalance.text() = ('$' + savings.balance)
}


var checking = new Account()
var savings = new Account()

savings.otherAcct = checking
checking.otherAcct = savings


})
