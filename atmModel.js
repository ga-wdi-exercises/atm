class Atm {
  constructor (account, money = 0) {
    this.type = account
    this.transactionHistory = []
    this.lowCheckingFunds = false
    this.lowSavingsFunds = false
    this.checkingBalance = 0
    this.savingsBalance = 0
  }
  withdrawChecking (amount) {
    if (this.checkingBalance - amount >= 0) {
      this.checkingBalance -= amount
      this.transactionHistory.push(`you withdrew $${amount}`)
    } else {
      console.log('not enough funds')
      this.lowCheckingFunds = true
    }
  }
  withdrawSavings (amount) {
    if (this.savingsBalance - amount >= 0) {
      this.savingsBalance -= amount
      this.transactionHistory.push(`you withdrew $${amount}`)
    } else {
      console.log('not enough funds')
      this.lowSavingsFunds = true
    }
  }
  depositChecking (amount) {
    this.checkingBalance += amount
    this.transactionHistory.push(`you deposited $${amount}`)
  }
  depositSavings (amount) {
    this.savingsBalance += amount
  }
}
