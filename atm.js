//Need to target the checking placeholder text box and then put an event listener on it.
  //checkingAmountInput.prop("placeholder")
// [x] Need to target the checking display amount
  //checkingBalance2 = $(".balance").eq(0)
//[x] Need to target the deposit checking button
  //var checkingDepositButton = buttons.eq(0);
// Need a function for the event listener to catpure the user input and print the amount on the screen

atm = {
  accounts: {
    checking: 0,
    savings: 0
  },
  buttons: {
    checkingDeposit: $("[type='button']").eq(0),
    checkingWithdrawal: $("[type='button']").eq(1),
    savingsDeposit: $("[type='button']").eq(2),
    savingsWithdrawal: $("[type='button']").eq(3)
  },
  display: {
    checking: $(".balance").eq(0),
    checkingInputBox: $("[type='text']").eq(0),
    savings: $(".balance").eq(1),
    savingsInputBox: $("[type='text']").eq(1)
  }
}

// --> Event listeners:
atm.buttons.checkingDeposit.on("click", checkingDeposit)
atm.buttons.checkingWithdrawal.on("click", checkingWithdrawal)

atm.buttons.savingsDeposit.on("click", savingsDeposit)
atm.buttons.savingsWithdrawal.on("click", savingsWithdrawal)

function checkingDeposit() {
  atm.accounts.checking = +atm.accounts.checking + +atm.display.checkingInputBox.val()

  atm.display.checking.html("$" + atm.accounts.checking)
}

function checkingWithdrawal(amount){
  atm.accounts.savings = +atm.accounts.savings - +atm.display.checkingInputBox.val()

  atm.display.checking.html("$" + atm.accounts.checking)
}

function savingsDeposit(amount){
  console.log("I got clicked")
  atm.accounts.savings = +atm.accounts.savings + +atm.display.savingsInputBox.val()

  atm.display.savings.html("$" + atm.accounts.savings)
}

function savingsWithdrawal(amount){
  atm.accounts.savings = +atm.accounts.savings - +atm.display.savingsInputBox.val()

  atm.display.savings.html("$" + atm.accounts.savings)
}

// an eventListerner for each button, each one a "click"
