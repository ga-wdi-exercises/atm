$(document).ready(function(){

  checkingAmount = $("#checkingBalance");
  savingAmount = $("#savingBalance");

  checkingInputAmount = $("input.checkingInputAmount");
  savingInputAmount = $("input.savingInputAmount");

  checkingDepositButton = $(".checkingDepositButton");
  checkingWithdrawButton = $(".checkingWithdrawButton");
  savingDepositButton = $(".savingDepositButton");
  savingWithdrawButton = $(".savingWithdrawButton");

  // deposit checking
  checkingDepositButton.on("click", depositMoney);

    function depositMoney(){
      var balance = checkingAmount.text();
      currentBalance = parseInt(balance.replace("$", ""));

      var deposit = parseInt(checkingInputAmount.val());
      var newBalance = deposit + currentBalance;
      checkingAmount.text("$" + newBalance);

    // placeholder clear after entering value
      checkingInputAmount.val("");
    };

  // withdraw checking
  checkingWithdrawButton.on("click", withdrawMoney);
    function withdrawMoney(){
      var balance = checkingAmount.text();
      currentBalance = parseInt(balance.replace("$", ""));

      var withdraw = parseInt(checkingInputAmount.val());
      var newBalance = currentBalance - withdraw;
      checkingAmount.text("$" + newBalance);

    // placeholder clear after entering value
      checkingInputAmount.val("");
    }

  // deposit saving
  savingDepositButton.on("click", depositMoney)
  function depositMoney(){
    var balance = savingAmount.text();
    currentBalance = parseInt(balance.replace("$", ""));

    var deposit = parseInt(savingInputAmount.val());
    var newBalance = deposit + currentBalance;
    savingAmount.text("$" + newBalance);

  // placeholder clear after entering value
    savingInputAmount.val("");
  };

  // withdraw saving
  savingWithdrawButton.on("click", withdrawMoney);
  function withdrawMoney(){
    var balance = savingAmount.text();
    currentBalance = parseInt(balance.replace("$", ""));

    var withdraw = parseInt(savingInputAmount.val());
    var newBalance = currentBalance - withdraw;
    savingAmount.text("$" + newBalance);

  // placeholder clear after entering value
    savingInputAmount.val("");
  }




// this is for closing document.ready
})
