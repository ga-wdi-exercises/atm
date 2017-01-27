$(document).ready(function(){
  // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
  console.log("js file is connected");

  var checkingInput = $("#checking .input"); //selects the checking input box
  var checkingDeposit = $("#checking .deposit"); //selects the checking deposit button
  var checkingWithdraw = $("#checking .withdraw");//selects the checking withdraw button
  var checkingBalance = $("#checking .balance");//checking balance window
  var totalC = 0;
  var xC;

  var savingsInput = $("#savings .input"); //selects the savings input box
  var savingsDeposit = $("#savings .deposit"); //selects the savings deposit button
  var savingsWithdraw = $("#savings .withdraw"); //selects the savings withdraw button
  var savingsBalance = $("#savings .balance"); //savings balance window
  var totalS = 0;
  var xS;

  // adds to checking balance
  function addDepositC() {
    xC = parseFloat(checkingInput.val());
    totalC = totalC + xC;
    checkingBalance.html("$" + totalC.toFixed(2));
    checkingBalance.removeClass("zero");
  }

  //withdraws from checking balance
  function addWithdrawC() {
    xC = parseFloat(checkingInput.val());
    if ((totalC-xC) < 0) {
      checkingBalance.addClass("zero");
    } else {
    // withdraws from checking
      checkingBalance.removeClass("zero");
      totalC = totalC - xC;
      checkingBalance.html("$" + totalC.toFixed(2));
    }
  }

  // adds to savings balance
  function addDepositS() {
    xS = parseFloat(savingsInput.val());
    totalS = totalS + xS;
    savingsBalance.html("$" + totalS.toFixed(2));
    savingsBalance.removeClass("zero");
  }

  //withdraws from savings balance
  function addWithdrawS() {
    xS = parseFloat(savingsInput.val());
    if ((totalS-xS) < 0) {
      savingsBalance.addClass("zero");
    } else {
      savingsBalance.addClass("balance");
      totalS = totalS - xS;
      savingsBalance.html("$" + totalS.toFixed(2));
    }
  }

  //checking deposit button function
  checkingDeposit.on("click", addDepositC);

  //checking withdrawal button function
  checkingWithdraw.on("click", addWithdrawC);

  //checking deposit button function
  savingsDeposit.on("click", addDepositS);

  //checking withdrawal button function
  savingsWithdraw.on("click", addWithdrawS);

});//the end of document ready function
