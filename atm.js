$(document).ready(function(){

var checkingBalance = 0;
var savingBalance = 0;

  function checkingsDeposit (){
    $("#checking .deposit").on("click", function(){
    var userInput = Number($("#checking .input").val());
    checkingBalance += userInput;
    $("#checking .balance").html("$"+checkingBalance);
    });
  }
  function checkingsWithdrawl(){
    $("#checking .withdraw").on("click", function(){
    var userInput = Number($("#checking .input").val());
      if (checkingBalance >= userInput){
        checkingBalance -= userInput;
        $("#checking .balance").html("$"+checkingBalance);
      } else {
        alert ("no monayyyyy");
      }
    });
  }

  function savingsDeposit (){
    $("#savings .deposit").on("click", function(){
    var userInput = Number($("#savings .input").val());
    savingBalance += userInput;
    $("#savings .balance").html("$"+savingBalance);
    });
  function savingsWithdrawl (){
    $("#savings .withdraw").on("click", function(){
    var userInput = Number($("#savings .input").val());
    savingBalance -= userInput;
    $("#savings .balance").html("$"+savingBalance);
    });
  }
}

checkingsDeposit();
checkingsWithdrawl();
savingsDeposit();
savingsWithdrawl();
});
