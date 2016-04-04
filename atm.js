$(document).ready(function(){
  console.log("working yey!");

  var checkingInput = $("#checkingInput");
  var depositButton = $("#checkingDepositButton");
  var withdrawButton = $("#withdrawButton");
  var checkingBalance = 0;
  var checkingBalanceDiv = $("#checkingBalanceDiv");


  var savingInput = $("#savingInput");
  var savingDepositButton = $("#savingDepositButton");
  var savingBalanceDiv = $("#savingBalanceDiv");
  var savingBalance = 0;
  var savingWithdrawButton = $("#savingWithdrawButton");


  // we can't use variable in the console
  //add an event Listener to the deposit button for click
  // when it gets clicked console.log i was clicked
  //get the value that is inside the text box
  //console.log it

  function depositChecking(){
    console.log("deposit cliked");
    console.log(checkingInput.val());
    var input = checkingInput.val();
    var amountForDeposit = parseInt(input);
    checkingBalance = checkingBalance + amountForDeposit;
    console.log(checkingBalance);
    checkingBalanceDiv.html("$" + checkingBalance);
  }

  function withdrawChecking(){
    console.log("withdraw cliked");
    var input = checkingInput.val();
    var amountForDeposit = parseInt(input);
    checkingBalance = checkingBalance - amountForDeposit;
    console.log();
    checkingBalanceDiv.html("$" + checkingBalance);
  }

  function depositSaving(){
    console.log("saving depo clicked");
    var input = savingInput.val();
    var amountForDeposit = parseInt(input);
    savingBalance = savingBalance + amountForDeposit;
    console.log(savingBalance);
    savingBalanceDiv.html("$" + savingBalance);
  }

  function withdrawSaving(){
    console.log("withdraw is working");
    var input = savingInput.val();
    var amountForDeposit = parseInt(input);
    savingBalance = savingBalance - amountForDeposit;
    console.log(savingBalance);
    savingBalanceDiv.html("$" + savingBalance);
  }


    savingWithdrawButton.on("click", withdrawSaving);
    savingDepositButton.on("click", depositSaving);
    depositButton.on("click", depositChecking);
    withdrawButton.on("click", withdrawChecking);

});
