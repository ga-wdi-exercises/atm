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
    console.log(totalC);
    totalC = totalC + xC;
    checkingBalance.html("$" + totalC.toFixed(2));
  }

  //withdraws from checking balance
  function addWithdrawC() {
    xC = parseFloat(checkingInput.val());
    console.log(totalC);
    totalC = totalC - xC;
    checkingBalance.html("$" + totalC.toFixed(2));

    // if totalC = 0 {
    //   checkingBalance.addClass("zero");
    // }
  }

  // adds to savings balance
  function addDepositS() {
    xS = parseFloat(savingsInput.val());
    console.log(totalS);
    totalS = totalS + xS;
    savingsBalance.html("$" + totalS.toFixed(2));
  }

  //withdraws from savings balance
  function addWithdrawS() {
    xS = parseFloat(savingsInput.val());
    console.log(totalS);
    totalS = totalS - xS;
    savingsBalance.html("$" + totalS.toFixed(2));
  }

  //checking deposit button function
  checkingDeposit.on("click", addDepositC);
    console.log("cheking deposit button");

  //checking withdrawal button function
  checkingWithdraw.on("click", addWithdrawC);
    console.log("checking withdraw button");

    //checking deposit button function
    savingsDeposit.on("click", addDepositS);
      console.log("cheking deposit button");

    //checking withdrawal button function
    savingsWithdraw.on("click", addWithdrawS);
      console.log("checking withdraw button");

});//the end of document ready function
