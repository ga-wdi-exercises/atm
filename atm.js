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
  }
}

var buttons = $("[type='button']");
var checkingDepositButton = buttons.eq(0);

var checkingAmountInput = $("[type='text']").eq(0)
var checkingAmountInputText =  checkingAmountInput.prop("placeholder")

checkingDepositButton.on("click", checkingDeposit)

checkingBalance2 = $(".balance").eq(0)

checkingBalance2.html()

checkingBalance2.html().replace("$", "")

function checkingDeposit() {
  atm.accounts.checking = +atm.accounts.checking + +checkingAmountInput.val()

  checkingBalance2.html("$" + atm.accounts.checking)
}


var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
