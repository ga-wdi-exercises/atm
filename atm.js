$(document).ready(function(){
  console.log("sup");

  bankAccount = {
    checkingBalance: 0,
    savingsBalance: 0
  };

//DEPOSIT
  // capture amount in the input field

  // store input amount as variable/array

  // deposit function: change display to "" + input variable

  // deposit function: change display to "" - input

  // global variable for balance amount

  // if balance amount is lower than input amount (don't allow function,)

// CHECKING
  $("div#checking>input.deposit").on("click", function(){
    var newAmount = parseFloat($("div#checking>input.input").val());
    var oldAmount = bankAccount.checkingBalance;
    bankAccount.checkingBalance = oldAmount + newAmount;
    console.log(bankAccount.checkingBalance);
    var displayChecking = $("div#checking>div.balance");
    displayChecking.text("$" + bankAccount.checkingBalance);
  });

  $("div#checking>input.withdraw").on("click", function(){
    var newAmount = parseFloat($("div#checking>input.input").val());
    var oldAmount = bankAccount.checkingBalance;
    if (newAmount> bankAccount.checkingBalance + bankAccount.savingsBalance){
      alert("YOU AIN'T GOT THE MONEY, SWAY!");
    } else if (oldAmount - newAmount <0) {
      var overdraft = oldAmount - newAmount;
      bankAccount.checkingBalance = oldAmount - overdraft - newAmount;
      bankAccount.savingsBalance = bankAccount.savingsBalance + overdraft;
      var displayChecking = $("div#checking>div.balance");
      displayChecking.text("$" + bankAccount.checkingBalance);
      var displaySavings = $("div#savings>div.balance");
      displaySavings.text("$" + bankAccount.savingsBalance);
      } else {
        bankAccount.checkingBalance = oldAmount - newAmount;
        console.log(bankAccount.checkingBalance);
        var displayChecking = $("div#checking>div.balance");
        displayChecking.text("$" + bankAccount.checkingBalance);
    }
  })


// SAVINGS
  $("div#savings>input.deposit").on("click", function(){
    var newAmount = parseFloat($("div#savings>input.input").val());
    var oldAmount = bankAccount.savingsBalance;
    bankAccount.savingsBalance = oldAmount + newAmount;
    console.log(bankAccount.savingsBalance);
    var displaySavings = $("div#savings>div.balance");
    displaySavings.text("$" + bankAccount.savingsBalance);
  });

  $("div#savings>input.withdraw").on("click", function(){
    var newAmount = parseFloat($("div#savings>input.input").val());
    var oldAmount = bankAccount.savingsBalance;
    bankAccount.savingsBalance = oldAmount - newAmount;
    console.log(bankAccount.savingsBalance);
    var displaySavings = $("div#savings>div.balance");
    displaySavings.text("$" + bankAccount.savingsBalance);
  })




});
