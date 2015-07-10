var atm = {
savingsBalance: 0,
balance: 0,
  elements: {
    textField: $("#textField"),
    balanceField: $("#balanceField"),
    depositButton: $("#depositButton"),
    withdrawButton: $("#withdrawButton"),
    savingsBalanceField: $("#savingsBalanceField"),
    savingsTextField: $("#savingsTextField"),
    savingsDepositButton: $("#savingsDepositButton"),
    savingsWithdrawButton: $("#savingsWithdrawButton")
  },
listen: function(){
  this.elements.depositButton.on("click", depositMoney);
  function depositMoney(){
    enteredAmount=parseInt(textField.val());
    this.balance = this.balance + enteredAmount;
    this.elements.balanceField.html("$" + this.balance);
  }
  this.elements.withdrawButton.on("click", this.elements.withdrawMoney);
  function withdrawMoney(){
    enteredAmount=parseInt(this.elements.textField.val());
    this.balance = this.balance - enteredAmount;
    this.elements.balanceField.html("$" + this.balance);
  }
  this.elements.savingsWithdrawButton.on("click", this.elements.savingsWithdrawMoney);
  function savingsWithdrawMoney(){
    savingsEnteredAmount=parseInt(this.elements.savingsTextField.val());
    this.savingsBalance = this.savingsBalance - savingsEnteredAmount;
    this.elements.savingsBalanceField.html("$" + savingsBalance);
  }
  this.elements.savingsDepositButton.on("click", this.elements.savingsDepositMoney);
  function savingsDepositMoney(){
    savingsEnteredAmount=parseInt(this.elements.savingsTextField.val());
    this.savingsBalance = this.savingsBalance + savingsEnteredAmount;
    this.elements.savingsBalanceField.html("$" + savingsBalance);
  }

  }
}
atm.listen()
