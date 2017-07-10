/* global $ */

$(document).ready(function () {
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
})

// make background red as a test
$('html').css('background', 'red')

// create a class = atm
class Atm {
  // constructor includes (name, starting balance = 0,
  // backupAccount = null)
  constructor (name, begBal = 0, backupAcc = null) {
    // name
    this.name = name
    // starting balance
    this.bal = begBal
    // backup
    this.backupAcc = backupAcc
  }
  // methods: deposit, withdraw (calls verBal [integrated in withdraw])
  deposit (amt) {
    console.log(`Depositing ${amt} to balance.`)
    return this.bal += amt
  }
  withdraw (amt) {
    console.log(`Verifying amount in account...`)
    // ternary
    this.bal > amt ? this.bal -= amt : alert('Insufficient funds, transaction cancelled') && console.log('Insufficient Funds, Transaction Cancelled')
    return `current balance is ${this.bal}.`
  }
}

var checking = new Atm('checking', 100)
