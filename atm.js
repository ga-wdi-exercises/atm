$(document).ready(function(){
  var checking = 0
  var savings = 0
  var checkingDeposit = $("#checking").find(".deposit");
  var checkingWithdraw = $("#checking").find(".withdraw")
  var checkingInput = $("#checking").find(".input")
  var checkingBalance = $("#checking").find(".balance")
  var savingsDeposit = $("#savings").find(".deposit");
  var savingsWithdraw = $ ("#savings").find(".withdraw")
  var savingsInput = $("#savings").find(".input");
  var savingsBalance = $ ("#savings").find(".balance")


  function depositToAccount(account) {
    if(account == 'checking') {
      var amount = parseInt(checkingInput.val());
      checking += amount;
      checkingBalance.text("$" + checking);
    }
    if(account == 'savings') {
      var amount = parseInt(savingsInput.val());
      savings += amount;
      savingsBalance.text("$" + savings);
    }
  }

  function withdrawFromAccount(account) {
    // var checkingAccountBalance = checkingBalance.html()
    if (account == 'checking') {
      var amount = parseInt(checkingInput.val());
      if (amount <= checking) {
        checking -= amount;
      }
      checkingBalance.text("$" + checking);
      // var amount > parseInt(checkingBalance.val());
      checkingBalance.text("$" + checking);
    }
    if (account == 'savings') {
      var amount = parseInt(savingsInput.val());
      if (account <= savings) {
            checking -= amount;
      }
      savingsBalance.text("$" + savings);
  //     var amount > parseInt(savingsBalance.val())
      savingsBalance.text("$" + savings);
   }
}
  checkingDeposit.on("click", function() {
    depositToAccount("checking");
  });
  savingsDeposit.on("click", function() {
    depositToAccount("savings");
  });
  checkingWithdraw.on("click", function() {
    withdrawFromAccount("checking");
  });
  savingsWithdraw.on("click", function() {
    withdrawFromAccount("savings");
  });
});
