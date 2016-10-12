$(document).ready(function(){
//initialize totals for each account
var checkingBalance = 0;
var savingsBalance = 0;
//adds deposits to checking account
//listens for user input
  $("#checking .deposit").on("click", function(){
//store user input to variable entry
  var checkingEntry = Number($("#checking .input").val()); //stores user input, runs function
    checkingBalance += checkingEntry;
    //display entry to the checking account div
    $("#checking .balance").html("$" + checkingBalance);
    //updates value of checkingBalance
    $("#checking .balance").val(checkingBalance);
    // console.log(checkingBalance);
  })
  //adds deposits to savings account
  $("#savings .deposit").on("click", function(){
    var savingsEntry = Number($("#savings .input").val());
      savingsBalance += savingsEntry;
      $("#savings .balance").html("$" + savingsBalance);
      $("#savings .balance").val(savingsBalance);
      console.log(savingsBalance);
  })
  //withdraws from checking account
  $("#checking .withdraw").on("click", function(){
    var checkingWithdrawal = Number($("#checking .input").val());
      checkingBalance -= checkingWithdrawal;
      $("#checking .balance").html("$" + checkingBalance);
      $("#checking .balance").val(checkingBalance);
      // console.log(checkingBalance);
      overDraft();
  })

  //withdraws from savings account
  $("#savings .withdraw").on("click", function(){
    var savingsWithdrawal = Number($("#savings .input").val());
      savingsBalance -= savingsWithdrawal;
      $("#savings .balance").html("$" + savingsBalance);
      $("#savings .balance").val(savingsBalance);
      console.log(savingsBalance);
  })

  //overdraft protection
  function overDraft(){
    var withdrawal = Number($("#checking .input").val());
  if (checkingBalance < withdrawal){
      savingsBalance += checkingBalance;
      checkingBalance = 0;
      console.log(savingsBalance);
      $("#checking .balance").html("$" + checkingBalance);
      $("#checking .balance").val(checkingBalance);

      $("#savings .balance").html("$" + savingsBalance);
      $("#savings .balance").val(savingsBalance);
      return;
  } else if ((checkingBalance + savingsBalance) < withdrawal){
     alert("insufficient funds to make this transaction. Please try a different amount");
  }
  }
});
