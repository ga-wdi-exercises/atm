$(document).ready(function(){
  checkZero($("#balanceCheck"));
  checkZero($("#balanceSave"));
  //Checking Account Deposit
  var moneyDeposit = $("#checking").find(".deposit")
  moneyDeposit.on("click", function(){
    var currentBalance = parseInt($("#balanceCheck").html().replace("$", ""));
    var moneyInput = parseInt($("#checkInput").val());
    var totalBalance = moneyInput + currentBalance;
    var balanceChange = $("#balanceCheck");
    balanceChange.html("$"+totalBalance);
    checkZero($("#balanceCheck"));
  })
  //Checking Account Withdraw
  var moneyWithdraw = $("#checking").find(".withdraw")
  moneyWithdraw.on("click", function(){
    var checkingBalance = parseInt($("#balanceCheck").html().replace("$", ""));
    var moneyInput = parseInt($("#checkInput").val());
    var savingsBalance = parseInt($("#balanceSave").html().replace("$", ""));
    if(moneyInput > checkingBalance){
      var remainder = moneyInput - checkingBalance
      if(remainder > savingsBalance){
        alert("Error! Can't withdraw that much")
      }else{
        checkingBalance = 0
        savingsBalance = savingsBalance - remainder
      }
    }else{
      checkingBalance = checkingBalance - moneyInput;
    }
    $("#balanceCheck").html("$" + checkingBalance);
    $("#balanceSave").html("$" + savingsBalance);
      checkZero($("#balanceCheck"));
  })
  //Savings Account Desposit
  var moneydepositSave = $("#savings").find(".deposit")
  moneydepositSave.on("click", function(){
    var currentBalance = parseInt($("#balanceSave").html().replace("$", ""));
    var moneyInput = parseInt($("#saveInput").val());
    var totalBalance = moneyInput + currentBalance;
    var balanceChange = $("#balanceSave");
    balanceChange.html("$"+totalBalance);
    checkZero($("#balanceSave"));
  })
  //Savings Account Withdraw
  var moneywithdrawSave = $("#savings").find(".withdraw")
  moneywithdrawSave.on("click", function(){
    var currentBalance = parseInt($("#balanceSave").html().replace("$", ""));
    var moneyInput = parseInt($("#saveInput").val());
    var totalBalance = currentBalance - moneyInput;
    var balanceChange = $("#balanceSave");
    if (moneyInput <= currentBalance){
    balanceChange.html("$"+totalBalance);
    checkZero($("#balanceSave"));
    if(currentBalance == 0){
      balanceChange.html("$0")
      checkZero($("#balanceSave"));
      }
    }
  })
});
function checkZero(accountDiv){
  if (accountDiv.html() === "$0") {
    accountDiv.addClass("zero")
  } else {
    accountDiv.removeClass("zero")
  }
}
