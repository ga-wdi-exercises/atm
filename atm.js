
$(document).ready (function(){
  //Checkings account
    //when click on deposit,
      //enter and store amount,
      //show amount entered
      //add from the total amount
    //when click on withdraw
      //enter and subtract amount
      //show amount entered
      //subtract from the total amount
  //Savings account
    //repeat steps for checking

  //Make sure the balance in an account can't go negative. If a user tries to
  //withdraw more money than exists in the account, ignore the transaction.

var cTotal = 0;
var sTotal = 0;

//Checking
  $("#cDepositButton").on("click", function() {
    var cDepositUserInput = parseFloat($("#cPlaceHolder").val());
    cTotal += cDepositUserInput;
    $("#cBalance").text("$ " + cTotal);
  });

  $("#cWithdrawButton").on("click", function() {
    var cWithdrawUserInput = parseFloat($("#cPlaceHolder").val());
    if (cTotal >= cWithdrawUserInput) {
      cTotal -= cWithdrawUserInput;
      $("#cBalance").text("$ " + cTotal);
      //Make sure the balance in an account can't go negative. If a user tries to
      //withdraw more money than exists in the account, ignore the transaction.
    }else if (cTotal < cWithdrawUserInput) {
      var answer = confirm("You don't have enought money. Would you like to withdraw from savings?");
        if ("ok") {
          if (sTotal >= cWithdrawUserInput){
            sTotal -= cWithdrawUserInput;
            $("#sBalance").text("$" + sTotal);
          //overdraft protection
            //when amount goes below zero from withdrawing,
              //alert will pop up telling the user there is not enought money
              //prevent the withdraw from happening
          }else {
            alert("You don't have enough money.")
          }
        }
    }
  });

//Savings
  $("#sDepositButton").on("click", function() {
    var sDepositUserInput = parseFloat($("#sPlaceHolder").val());
    sTotal += sDepositUserInput;
    $("#sBalance").text("$ " + sTotal);
  });

  $("#sWithdrawButton").on("click", function() {
    var sWithdrawUserInput = parseFloat($("#sPlaceHolder").val());
    if ( sTotal >= sWithdrawUserInput) {
      sTotal -= sWithdrawUserInput;
      $("#sBalance").text("$ " + sTotal);
    }else {
      alert("You don't have enough money.")
    }
  });
});
