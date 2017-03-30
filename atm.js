$(document).ready(function(){


  var checkingBalance = $("#checkingBalance");
  var checkingInput = $("#checkingInput");
  var checkingDepositBt = $("#checkingDeposit");
  var checkingWithdrawBt = $("#checkingWithdraw");
  // var clean = function(input) {
  //   return parseInt(input.text().replace("$", ""));
  // }


  checkingDepositBt.on("click", moneyDepositChecking);

  function moneyDepositChecking(){
    var inputAmount = parseInt(checkingInput.val());
    var balance = parseInt(checkingBalance.text().replace("$", ""));
    var newBalance = "$" + (inputAmount + balance);
    checkingBalance.text(newBalance);
  }

  checkingWithdrawBt.on("click", moenyWithdrawChecking);

  function moenyWithdrawChecking() {
    var withdrawAmount = parseInt(checkingInput.val());
    var balance = parseInt(checkingBalance.text().replace("$", ""));
    var newBalance = balance - withdrawAmount;
    if (newBalance >= 0) {
        checkingBalance.text("$"+newBalance);
    } else {
    var savingBalance = parseInt($("#savingBalance").text().replace("$", ""));
    var fromSaving = newBalance + savingBalance
        $("#savingBalance").text("$"+ fromSaving);
        checkingBalance.text("$"+0);
    }
  }



  var savingBalance = $("#savingBalance");
  var savingInput = $("#savingInput");
  var savingDepositBt = $("#savingDeposit");
  var savingWithdrawBt = $("#savingWithdraw");
  // var clean = function(input) {
  //   return parseInt(input.text().replace("$", ""));
  // }

savingDepositBt.on("click", moneyDepositsaving);

function moneyDepositsaving(){
  var inputAmount = parseInt(savingInput.val());
  var balance = parseInt(savingBalance.text().replace("$", ""));
  var newBalance = "$" + (inputAmount + balance);
  savingBalance.text(newBalance);
}

savingWithdrawBt.on("click", moenyWithdrawsaving);

  function moenyWithdrawsaving() {
    var withdrawAmount = parseInt(savingInput.val());
    var balance = parseInt(savingBalance.text().replace("$", ""));
    var newBalance = balance - withdrawAmount;
    if (withdrawAmount > balance) {
        alert("Cannot withdraw" + "$" + withdrawAmount);
    } else savingBalance.text("$"+ newBalance);

}




});
