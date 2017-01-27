//Pseudo-code
//ATM, We're going to build an application to track checking and savings account balances.
//Make sure the user can only deposit money into one of the bank accounts. (Checking/Savings)
//Make sure the user can only withdrawl money from one bank account. (Checking/Savings)
//Make sure the balance in an account can not go negative.
//Make sure to setup a block for a user who tries to withdraw more money than they have in their account by ignoring the transaction.
//Make sure when the bank accounts have money in them that the background is lit to green. (Look into .zero css)
//Make sure when the bank accounts have no money in them that the background is lit to red. (Look into .zero css)
//Let's build!

$(document).ready(function () {
  var checkingBalance = 0
  var savingsBalance = 0
  var checkingDepositButton = $('#checking').find(".deposit")
  var savingsDepositButton = $('#savings').find(".deposit")
  var checkingWithdrawButton = $('checking').find(".withdraw")
  var savingsWithdrawButton = $('savings').find(".withdraw")
  var checkingInput = $('checking').find(".input")
  var savingsInput = $('savings').find(".input")


  function depositToChecking() {
    event.preventDefault();
    var amount = $('#checking').find('.input').val();
    console.log(amount)
  function depositToSavings() {
    event.preventDefault();
    var amount = $('#savings').find('.deposit').val();
    console.log(amount)
  function withdrawFromChecking() {
    event.preventDefault();
    var amount = $('#checking').find('.withdraw').val();
    console.log(amount)
  function withdrawFromSaving() {
    event.preventDefault();
    var amount = $('savings').find('.withdraw').val();
    console.log(amount)

  }


  }

  checkingDepositButton.click(depositToChecking)
  savingsDepositButton.click(depositToSavings)
  
