$(document).ready(function(){

  checkingAmount = $(".balance.checking");
  savingAmount = $(".balance.saving");

  checkingInput = $("input.checkingInput");
  savingInput = $("input.savingInput");

  checkingDeposit = $(".checkingDeposit");
  checkingWithdraw = $(".checkingWithdraw");
  savingDeposit = $(".savingDeposit");
  savingWithdraw = $(".savingWithdraw");

  checkingDeposit.on("click", depositCheckingMoney);
  checkingWithdraw.on("click", withdrawCheckingMoney);

  savingDeposit.on("click", depositSavingMoney);
  savingWithdraw.on("click", withdrawSavingMoney);

    function depositCheckingMoney(){

      var balance = $("#checkingBalance").text();
      checkingCurrentBalance = parseInt(balance.replace("$", ""));

      var deposit = parseInt(checkingInput.val());

      var newAmount = checkingCurrentBalance + deposit;
      $("div#checkingBalance").text("$" + newAmount);

      checkingInput.val("");

    }

    function withdrawCheckingMoney(){

      var balance = $("#checkingBalance").text();
      checkingCurrentBalance = parseInt(balance.replace("$", ""));

      var withdraw = parseInt(checkingInput.val());

      var savingCurrentBalance = $("#savingBalance").text();
      savingCurrentBalance = parseInt(savingCurrentBalance.replace("$", ""));

      var overDraftProtection = checkingCurrentBalance + savingCurrentBalance - withdraw;

        if (checkingCurrentBalance >= withdraw){
          var sum = checkingCurrentBalance - withdraw;
          $("div#checkingBalance").text("$" + sum);
        }
        else if (overDraftProtection >= 0){
          $("div#checkingBalance").text("$" + 0);
          $("#savingBalance").text("$" + overDraftProtection);
        }
        else {
          alert ("Not enough money to withdraw!")
        }

      checkingInput.val("");
    }

    function depositSavingMoney(){

      var balance = $("#savingBalance").text();
      savingCurrentBalance = parseInt(balance.replace("$", ""));

      var deposit = parseInt(savingInput.val());

      var newAmount = savingCurrentBalance + deposit;
      $("div#savingBalance").text("$" + newAmount);

      savingInput.val("");
    }

    function withdrawSavingMoney(){

      var balance = $("#savingBalance").text();
      savingCurrentBalance = parseInt(balance.replace("$", ""));

      var withdraw = parseInt(savingInput.val());

      var checkingCurrentBalance = $("#checkingBalance").text();
      checkingCurrentBalance = parseInt(checkingCurrentBalance.replace("$", ""));

      var overDraftProtection = checkingCurrentBalance + savingCurrentBalance - withdraw;

        if (savingCurrentBalance >= withdraw){
          var sum = savingCurrentBalance - withdraw;
          $("div#savingBalance").text("$" + sum);
        }
        else if (overDraftProtection >= 0){
          $("div#savingBalance").text("$" + 0);
          $("#checkingBalance").text("$" + overDraftProtection);
        }
        else {
          alert ("Not enough money to withdraw!")
        }

      savingInput.val("");
    }

})
