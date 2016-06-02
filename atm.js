$(document).ready(function(){

  var checkingInput = $("#checking .input").val()
  var savingsInput = $("#savings .input").val()
  var checkingTotal = 0
  var savingsTotal = 0
  // var totalBalance = savingsTotal + checkingTotal

  function checkingColor(){
    if (checkingTotal == 0){
      $("#checking .balance").addClass("zero");
    }
    else{
      $("#checking .balance").removeClass("zero");
      console.log("work bitch");
    }
  }
  function savingsColor(){
    if (savingsTotal == 0){
      $("#savings .balance").addClass("zero");
    }
    else{
      $("#savings .balance").removeClass("zero");
    }
  }
  function getTotalBalance(){
    var checkingTotal = $("#checking .balance").val()
    var savingsTotal = $("#savings .balance").val()
    checkingTotal = parseInt(checkingTotal);
    savingsTotal = parseInt(savingsTotal);
    $("div > .balance").val(checkingTotal + savingsTotal)
  }


  checkingColor();
  savingsColor();

  $("#checking .deposit").on("click", function(){
    var checkingInput = $("#checking .input").val()
    if (checkingInput <= 0){
      alert("Your desposit must be greater than zero.")
    }
    else {
      checkingInput = parseInt(checkingInput);
      checkingTotal += checkingInput;
      $("#checking .balance").html('$' + checkingTotal);
      checkingColor()
    }
  });

  $("#savings .deposit").on("click", function(){
    var savingsInput = $("#savings .input").val()
    if (savingsInput <= 0){
      alert("Your desposit must be greater than zero.")
    }
    else {
      savingsInput = parseInt(savingsInput);
      savingsTotal += savingsInput;
      $("#savings .balance").html('$' + savingsTotal);
      savingsColor()
    }
  });

  $("#checking .withdraw").on("click", function(){
    var checkingWithdraw = $("#checking .input").val();
    var totalBalance = checkingTotal + savingsTotal;
    checkingWithdraw = parseInt(checkingWithdraw);
    //
    if (checkingWithdraw > checkingTotal){
      alert("Account balance is too low for withdrawl.")
        if (checkingWithdraw > totalBalance){
          alert("Too low.")
          console.log("Please Work")
        }
        else if (checkingWithdraw > checkingTotal && checkingWithdraw < totalBalance){
          var overage = checkingWithdraw - checkingTotal;
          Math.abs(overage)
        }
        else{
          checkingTotal -= checkingWithdraw;
          $("#checking .balance").html('$' + checkingTotal);
          checkingColor();
        }

}


    // // else;
    // var checkingWithdraw = $("#checking .input").val();
    // var totalBalance = checkingTotal + savingsTotal;
    // switch(checkingWithdraw){
    //   case (checkingWithdraw < checkingTotal):
    //   checkingTotal -= checkingWithdraw;
    //     $("#checking .balance").html('$' + checkingTotal);
    //     checkingColor();
    //     break;
    //   case (checkingWithdraw >= checkingTotal):
    //     alert("Account balance is too low for withdrawl.");
    //     break;
    //   case (checkingWithdraw > totalBalance):
    //     alert("Too low.")
    //     console.log("Please Work")
    // }
  });

  $("#savings .withdraw").on("click", function(){
    var savingsWithdraw = $("#savings .input").val();

    savingsWithdraw = parseInt(savingsWithdraw);
    if (savingsWithdraw <= savingsTotal){
      savingsTotal -= savingsWithdraw;

      $("#savings .balance").html('$' + savingsTotal);
      savingsColor();

    }
    else {
      alert("Account balance is too low for withdrawl.")
    }
  });

});
