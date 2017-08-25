class ATM {
  static ACCOUNT_TYPES () {
    return ['checking','savings']
  }

  constructor () {
    ATM.ACCOUNT_TYPES().forEach( account => {
      this[account] = {
        balance: 0,
        $screen: $(`#${account}`).find('.balance'),
        $depositButton: $(`#${account}`).find('.deposit'),
        $withdrawButton: $(`#${account}`).find('.withdraw'),
        $amountInput: $(`#${account}`).find('.input')
      }
      this[account].$depositButton.click(e=>this.deposit(e))
      this[account].$withdrawButton.click(e=>this.withdraw(e))
      this[account].$screen
        .on('balanceWrite', e=>this.checkScreen(e))
        .text(`$${this[account].balance}`)
    })
  }

  checkScreen (e) {
    let account = $(e.target).parent().attr('id')
    if (this[account].balance === 0) {
      this[account].$screen.addClass('zero')
    } else {
      this[account].$screen.removeClass('zero')
    }
  }

  deposit (e) {
    let account      = $(e.target).parent().attr('id')
    let amountString = this[account].$amountInput.val()

    this[account].balance += parseInt(amountString)
    this[account].$screen
      .text(`$${this[account].balance}`)
      .trigger('balanceWrite')
  }

  withdraw (e) {
    let account      = $(e.target).parent().attr('id')
    let amountString = this[account].$amountInput.val()
    let newBalance   = this[account].balance - parseInt(amountString)

    if (newBalance < 0 && account === 'checking'){
      this.overdraft(newBalance)
    } else if (newBalance >= 0) {
      this[account].balance = newBalance
      this[account].$screen
        .text(`$${this[account].balance}`)
        .trigger('balanceWrite')
    }
  }

  overdraft(negativeCheckingBalance){
    let newSavingsBalance = this.savings.balance + negativeCheckingBalance
    if (newSavingsBalance < 0) {
      console.error('Insufficient funds.', `You are short $${-newSavingsBalance}.`);
    } else {
      this.checking.balance = 0
      this.savings.balance  = newSavingsBalance
      ATM.ACCOUNT_TYPES().forEach(account=>(
        this[account].$screen
          .text(`$${this.checking.balance}`)
          .trigger('balanceWrite')))
    }
  }
}

$(document).ready(readyEvent => {
  ATM_GLOBAL = new ATM()
})
