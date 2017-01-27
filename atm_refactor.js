$(document).ready(function() {
  //come these vars with a selector?
  // var savingsDep = $("#savings .deposit");
  // var savingsBal = $("#savings .balance");
  // var savingsWith = $("#savings .withdraw");
  // var savingsAmt = 0;
  //
  // var checkingDep = $("#checking .deposit");
  // var checkingBal = $("#checking .balance");
  // var checkingWith = $("#checking .withdraw");
  // var checkingAmt = 0;
  //
  // checkSavings();
  // verifyChecking();
  var totalChecking = 0;
  var totalSavings = 0;

$(":button").on("click", function depositAndWithdraw() {
  var depOrWith = $(this).val();
  console.log(depOrWith);
  //Deposit or Withdraw
  var whichAccount = $(this).parent().attr('id');
  console.log(whichAccount);
  //Checking or Savings
  var account = $(this).parent().find(".balance");
  console.log(account);
  //selected the div which shows current balance
  var amount = parseInt($(this).parent().find(".input").val());
  //Value of Action (amount)
  var allMoney = totalSavings+totalChecking;
  // // is there a way to string two things together like this here?
  // (depOrWith === "Deposit")? ((whichAccount === "checking")? totalChecking+=amount : totalSavings+=amount
  // (whichAccount === "checking")? account.text(totalChecking) : account.text(totalSavings);
  // :
  // (whichAccount === "checking")? totalChecking-=amount : totalSavings-=amount;
  // (whichAccount === "checking")? account.text(totalChecking) : account.text(totalSavings);)

  if (depOrWith === "Deposit") {
    (whichAccount === "checking")? totalChecking+=amount : totalSavings+=amount;
    (whichAccount === "checking")? account.text(totalChecking) : account.text(totalSavings);
  }
  else {
    (whichAccount === "checking")? totalChecking-=amount : totalSavings-=amount;
    (whichAccount === "checking")? account.text(totalChecking) : account.text(totalSavings);
  }
});

// if (checkingInput() > checkingAmt && allTheMoney() > checkingInput()) {
//       var overAmt = Math.abs(checkingAmt-checkingInput());
//       checkingAmt = 0;
//       savingsAmt -= overAmt;
//       savingsBal.text(savingsAmt);
//       checkingBal.text(checkingAmt);
//     }
//     else if (checkingInput() <= checkingAmt) {
//       checkingAmt -= checkingInput();
//       checkingBal.text(checkingAmt);
//     }
//     else {
//       console.log("Nope");
//     }
//   }



// //why use callbacks here and not calls? run the operations inside of the function rather than the function itself? is it because there's no return statement?
//
//
//
//   checkingDep.on("click", checkingDeposit);
//   savingsDep.on("click", savingsDeposit);
//   checkingWith.on("click", checkingWtihdrawal);
//   savingsWith.on("click", savingsWithdrawal);
//
//   function checkingInput() {
//     var checkingInput = $("#checking .input").val();
//     return parseInt(checkingInput);
//   }
//
//   function checkingDeposit() {
//     checkingAmt += checkingInput();
//     checkingBal.text("$"+checkingAmt);
//     verifyChecking();
//   }
//
//   function allTheMoney() {
//     return checkingAmt+savingsAmt;
//   }
//
//   function checkingWtihdrawal() {
//     if (checkingInput() > checkingAmt && allTheMoney() > checkingInput()) {
//       var overAmt = Math.abs(checkingAmt-checkingInput());
//       checkingAmt = 0;
//       savingsAmt -= overAmt;
//       savingsBal.text(savingsAmt);
//       checkingBal.text(checkingAmt);
//     }
//     else if (checkingInput() <= checkingAmt) {
//       checkingAmt -= checkingInput();
//       checkingBal.text(checkingAmt);
//     }
//     else {
//       console.log("Nope");
//     }
//   }
//   function savingsInput() {
//     var savingsInput = $("#savings .input").val();
//     return parseInt(savingsInput);
//   }
//
//   function savingsDeposit() {
//     savingsAmt += savingsInput();
//     savingsBal.text("$"+savingsAmt);
//     checkSavings();
//   }
//
//   function savingsWithdrawal() {
//     if (savingsInput() > savingsAmt && allTheMoney() > savingsInput()) {
//       var overAmt = Math.abs(savingsAmt-savingsInput());
//       savingsAmt = 0;
//       checkingAmt -= overAmt;
//       savingsBal.text(savingsAmt);
//       checkingBal.text(checkingAmt);
//     }
//     else if (savingsInput() <= savingsAmt) {
//       savingsAmt -= savingsInput();
//       savingsBal.text("$"+savingsAmt);
//     }
//     else {
//       console.log("Nope");
//     }
//   }
// //combine these functions somehow, selector?
//   function verifyChecking() {
//     if (checkingAmt == 0) {
//       checkingBal.addClass("zero");
//     }
//     else {
//       checkingBal.removeClass("zero");
//     }
//   }
//
//   function checkSavings() {
//     if (savingsAmt == 0) {
//       savingsBal.addClass("zero");
//     }
//     else {
//       savingsBal.removeClass("zero");
//     }
//   }
});
