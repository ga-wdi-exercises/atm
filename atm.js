$(document).ready(function(){

  //Starts with zero balance
  checkBalanceZero($("#balanceChecking"));
  checkBalanceZero($("#balanceSavings"));

  //deposit checking
  var moneyDeposit = $("#checking").find(".deposit")
  moneyDeposit.on("click", function(){
    var moneyInput = parseInt($("#checkingInput").val());
    var balanceDeposit = parseInt($("#balanceChecking").html().replace("$", ""));
    var balanceChange = $("#balanceChecking");
    var totalBalance = moneyInput + balanceDeposit;
    balanceChange.html("$" + totalBalance);
    checkBalanceZero($("#balanceChecking"));
  });

  //withdraw checking
  var moneyWithdraw = $("#checking").find(".withdraw")
  moneyWithdraw.on("click", function(){
    var moneyInput = parseInt($("#checkingInput").val());
    var balanceCurrent = parseInt($("#balanceChecking").html().replace("$", ""));
    var balanceCurrentSavings = parseInt($("#balanceSavings").html().replace("$", ""));
    var totalBalance = balanceCurrent - moneyInput;

     if(moneyInput > balanceCurrent){
          var remainder = moneyInput - balanceCurrent;

        if (remainder > balanceCurrentSavings){
          alert("Error! Can't withdraw that much");
        } else {
          balanceCurrent = 0
          balanceCurrentSavings = balanceCurrentSavings - remainder;
          }
        } else {
          balanceCurrent = balanceCurrent - moneyInput;
        }
            $("#balanceChecking").html("$" + balanceCurrent);
            $("#balanceSavings").html("$" + balanceCurrentSavings);
            checkBalanceZero($("#balanceChecking"));
        })




  //deposit savings
  var moneyDeposit = $("#savings").find(".deposit")
  moneyDeposit.on("click", function(){
    var moneyInput = parseInt($("#savingsInput").val());
    var balanceDeposit = parseInt($("#balanceSavings").html().replace("$", ""));
    var balanceChange = $("#balanceSavings");
    var totalBalance = moneyInput + balanceDeposit;
    balanceChange.html("$" + totalBalance);
    checkBalanceZero($("#balanceSavings"));
  });

  //withdraw savings
  var moneyWithdraw = $("#savings").find(".withdraw")
  moneyWithdraw.on("click", function(){
    var moneyInput = parseInt($("#savingsInput").val());
    var balanceCurrentSavings = parseInt($("#balanceSavings").html().replace("$", ""));
    var balanceChange = $("#balanceSavings");
    var totalBalance = balanceCurrentSavings  - moneyInput;
     if (moneyInput <= balanceCurrentSavings ){
    balanceChange.html("$" + totalBalance);
    checkBalanceZero($("#balanceSavings"));
    if (balanceCurrentSavings == 0){
      balanceChange.html("$0");
      checkBalanceZero($("#balanceSavings"));
    }
}
  });

  //checking for zero
  function checkBalanceZero(checkZero){
    if (checkZero.html() == "$0"){
      checkZero.addClass("zero");
    } else {
      checkZero.removeClass("zero");
    }
  }


});
