


//adding balance to the ATM.
$("#checking .deposit").on("click",function() {
  var deposit = parseInt($("#checking .input").val());
    var balance = parseInt($("#checking .balance").text().replace("$", ""));
    var newBalance = "$" + (balance + deposit);
    $("#checking .balance").text(newBalance);
  });


$("#checking .withdraw").on("click", function(){
    var withdraw = parseInt($("#checking .input").val());
    var checkingBalance = parseInt($("#checking .balance").text().replace("$", ""));
    var savingsBalance = parseInt($("#savings .withdraw").text().replace("$", ""));
    var totalBalance = checkingBalance + savingsBalance;
    if((checkingBalance - withdraw) >= 0){
      var newBalance = "$" + (checkingBalance - withdraw)
      $("#checking .balance").text(newBalance);
    }
    else if((totalBalance - withdraw) > 0){
      var overDraft = withdraw - checkingBalance;
      $("#checking .balance").text("$0");
      var newSavingsBalance = "$" + (savingsBalance - overDraft);
      $("#savings.balance").text(newSavingsBalance);
    }
  });

$("#savings .deposit").on("click", function(){
    var deposit = parseInt($("#savings .input").val());
    var balance = parseInt($("#savings .balance").text().replace("$", ""));
    var newBalance = "$" + (balance + deposit);
    $("#savings .balance").text(newBalance);
  })

  // savings withdraw
  $("#savings .withdraw").on("click", function(){
    var withdraw = parseInt($("#savings .input").val());
    var savingsBalance = parseInt($("#savings .balance").text().replace("$", ""));
    if((savingsBalance - withdraw) >= 0){
      var newBalance = "$" + (savingsBalance - withdraw);
      $("#savings .balance").text(newBalance)
    }
  });
  

