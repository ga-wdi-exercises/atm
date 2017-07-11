$(document).ready(function () {
  const check = new Atm()
  const checking = new AtmView(check)
  checking.init()
})
class AtmView {
  constructor (model) {
    this.model = model   // store the model as a property
  }
  init () {   // target relevant elements
    this.inputs = {  // inputs here
      inputChecking: $('#checking .input'),
      depositChecking: $('#checking .deposit'),
      withdrawChecking: $('#checking .withdraw'),
      inputSavings: $('#savings .input'),
      withdrawSavings: $('#savings .withdraw'),
      depositSavings: $('#savings .deposit')
    }
    this.displays = { // displays AKA balance here // define variables for savings
      balanceChecking: $('#checking .balance'),
      balanceSavings: $('#savings .balance')
    }
    this.listen()
  }
  listen () {     // associate event listeners with inputs
    this.inputs.depositChecking.on('click', this.handleDepositChangeCheck.bind(this))
    this.inputs.withdrawChecking.on('click', this.handleWithdrawChangeCheck.bind(this))
    this.inputs.depositSavings.on('click', this.handleDepositChangeSave.bind(this))
    this.inputs.withdrawSavings.on('click', this.handleWithdrawChangeSave.bind(this))
  }
  handleWithdrawChangeCheck () {
    const amount = Number(this.inputs.inputChecking.val())
    this.model.withdrawChecking(amount)
    if (this.model.lowCheckingFunds === true) {
      this.lowFundRenderChecking()
    } else {
      this.renderChecking()
    }
  }
  handleWithdrawChangeSave () {
    const amount = Number(this.inputs.inputSavings.val())
    this.model.withdrawSavings(amount)
    if (this.model.lowSavingsFunds === true) {
      this.lowFundRenderSavings()
    } else {
      this.renderSavings()
    }
  }
  handleDepositChangeSave () { // create if statement for checking/savings
    const amount = Number(this.inputs.inputSavings.val())
    this.model.depositSavings(amount)
    this.renderSavings()
  }
  handleDepositChangeCheck () { // create if statement for checking/savings
    const amount = Number(this.inputs.inputChecking.val())
    this.model.depositChecking(amount)
    this.renderChecking()
  }
  renderChecking () {     // update displays based on model
    this.displays.balanceChecking.text('$' + this.model.checkingBalance)
  }
  renderSavings () {
    this.displays.balanceSavings.text('$' + this.model.savingsBalance)
  }
  lowFundRenderChecking () {
    this.displays.balanceChecking.addClass('zero')
  }
  lowFundRenderSavings () {
    this.displays.balanceSavings.addClass('zero')
  }
}
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
