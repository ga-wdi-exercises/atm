/*
select user input
convert input to float with 2 decimal places
if (withdraw button pressed){
subtract input from current balance
}
if (deposit button pressed){
add input to current balance
}
if (balance < 0){
do not update balance on dom
reset balance to previous value
display error message within input field
}
else if (balance == 0){
use css to change box background to red
}
else{
update account balance on DOM
bank color should be green
}
clear specific input field
*/
$(document).ready(function(){
  $("#checking .deposit").on("click", function(evt){
    evt.preventDefault();
    $("#checking .balance.zero").removeClass("zero");
    $("#checking .input").css("color", "black");
    $("#checking .input").select();
    var displayedBalance = $("#checking .balance").html();
    var totalBalance = parseFloat(displayedBalance.split("$")[1]);
    console.log(totalBalance);
    var amount = $("#checking .input").val();
    var floatAmount = parseFloat(amount).toFixed(2);
    var balance = parseFloat(floatAmount) + totalBalance;
    $("#checking .balance").html("$" + balance);

  })

  $("#checking .withdraw").on("click", function(evt){
    evt.preventDefault();
    $("#checking .balance.zero").removeClass("zero");
    $("#checking .input").select();
    var displayedBalance = $("#checking .balance").html();
    var totalBalance = parseFloat(displayedBalance.split("$")[1]);
    console.log(totalBalance);
    var amount = $("#checking .input").val();
    var floatAmount = parseFloat(amount).toFixed(2);
    var balance = totalBalance - parseFloat(floatAmount);
    if (balance < 0){
      balance = totalBalance;
      redTextWarning("#checking .input");
    }
    else{
      $("#checking .balance").html("$" + balance);
      $("#checking .input").css("color", "black");
      if (balance == 0){
        $("#checking .balance").addClass("zero");
      }
    }
  })

  $("#savings .deposit").on("click", function(evt){
    evt.preventDefault();
    $("#savings .balance.zero").removeClass("zero");
    $("#savings .input").css("color", "black");
    $("#savings .input").select();
    var displayedBalance = $("#savings .balance").html();
    var totalBalance = parseFloat(displayedBalance.split("$")[1]);
    console.log(totalBalance);
    var amount = $("#savings .input").val();
    var floatAmount = parseFloat(amount).toFixed(2);
    var balance = parseFloat(floatAmount) + totalBalance;
    $("#savings .balance").html("$" + balance);

  })

  $("#savings .withdraw").on("click", function(evt){
    evt.preventDefault();
    $("#savings .input").select();
    var displayedBalance = $("#savings .balance").html();
    var totalBalance = parseFloat(displayedBalance.split("$")[1]);
    console.log(totalBalance);
    var amount = $("#savings .input").val();
    var floatAmount = parseFloat(amount).toFixed(2);
    var balance = totalBalance - parseFloat(floatAmount);
    if (balance < 0){
      balance = totalBalance;
      redTextWarning("#savings .input");
    }

    else{
      $("#savings .balance").html("$" + balance);
      $("#savings .input").css("color", "black");
      if (balance == 0){
        $("#savings .balance").addClass("zero");
      }
    }
  })
  var redTextWarning = function (location){
    $(location).css("color", "red");
    $(location).val("INSUFFICIENT FUNDS!");
    $(location).select();
  }
});
