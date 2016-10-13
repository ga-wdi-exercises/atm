$(document).ready(function(){
savingBalance = 0;
checkingBalance = 0;

  function checkingDeposit() {
    $("#checking .deposit").on("click", function(){
    var userInput = Number($("#checking .input").val());
    checkingBalance += userInput;
    $("#checking .balance").html("$"+checkingBalance);
    });
  }

  $("#checking .balance").html("$"+checkingBalance);

  function checkingWithdrawl() {
    $("#checking .withdraw").on("click", function(){
    var userInput = Number($("#checking .input").val());
      if (userInput > savingBalance + checkingBalance) {
        alert("Out of money dawg");
      } else if (checkingBalance - userInput < 0) {
        var overdraw = checkingBalance - userInput;
        savingBalance = savingBalance + overdraw;
        checkingBalance = checkingBalance - overdraw - userInput;
        $("#checking .balance").html("$"+checkingBalance);
        $("#savings .balance").html("$"+savingBalance);
      } else {
        checkingBalance = checkingBalance - userInput;
        $("#checking .balance").html("$"+checkingBalance);
      }
    });
  }
  function savingDeposit() {
    $("#savings .deposit").on("click", function(){
    var userInput = Number($("#savings .input").val());
    savingBalance += userInput;
    $("#savings .balance").html("$"+savingBalance);
    });
  }
  function savingWithdraw() {
    $("#savings .withdraw").on("click", function(){
    var userInput = Number($("#savings .input").val());
    if (savingBalance >= userInput) {
      savingBalance -= userInput;
      $("#savings .balance").html("$"+savingBalance);
    } else {
      alert("Out of money dawg");
    }
    });
  }

checkingDeposit();
checkingWithdrawl();
savingDeposit();
savingWithdraw();
});
