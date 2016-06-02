$(document).ready(function(){
  $("#checkingDeposit").on("click", deposit);
  $("#savingsDeposit").on("click", deposit);
  $("#checkingWithdraw").on("click", withdraw);
  $("#savingsWithdraw").on("click", withdraw);

  $("#checkingDeposit").on("click", function(){
    var checkingDeposit = parseInt($("#checkingDeposit").val());
    var checkingWithdraw = parseInt($("#checkingWithdraw").val());
    var checkingInput = parseInt($("#checkingInput").val());

    function deposit(){
      var prevBalance = $(this).siblings("div.balance");
      var result = prevBalance.text();
      var currentBalance = parseInt(result.replace("$", ""));
      var newValue = parseInt($(this).siblings("input.moneyInTheBank").val());

      $(prevBalance).text(function(){
        var total = newEntry + currentBalance;
        return "$" + total;
      });
    }

    var balanceSum;
    function getSumBalances() {
      var balanceChecking = $("#balanceChecking").text();
      var checkingBalance = parseInt(cBalance.replace("$", ""));
      var balanceSavings = $("#balanceSavings").text();
      var savingsBalance = parseInt(sBalance.replace("$", ""));
      balanceSum = savingsBalance + checkingBalance;
      return balanceSum;
    }
    function withdrawlMoney(){
      getSumBalance();
      var prevBalance = $(this).siblings("div.balance");
      var result = prevBalance.text();
      var currentBalance = parseInt(result.replace("$", ""));
      var newWithdrawl = parseInt($(this).siblings("input.moneyInTheBank").val());
    }
    $(prevBalance).text(function(){
      var total = currentBalance - newWithdrawl;

    }
