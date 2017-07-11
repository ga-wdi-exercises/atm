/* global $ */
console.log('linked2')
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
