$(document).ready(function(){
  console.log("JS is working");

var balance;
var totalBalance;

  $("#checking .deposit").on("click", function(e){
      console.log("button working");
      e.preventDefault();
      var userAmount = $("#checking .input").val();
      var userAmountN = parseFloat(userAmount);
      balance = $("#checking .balance").html();
      var nBalance = parseFloat(balance.split("$")[1])
      totalBalance = nBalance + userAmountN;
      $("#checking .balance").html("$" + totalBalance.toFixed(2));

      $("#checking .input").val("");
      if(totalBalance === 0) {
        $("#checking .balance").css("background", "red")
      };

  })

  $("#checking .withdraw").on("click", function(e){
      console.log("button working");
      e.preventDefault();
      var userAmount = $("#checking .input").val();
      var userAmountN = parseFloat(userAmount);
      balance = $("#checking .balance").html();
      var nBalance = parseFloat(balance.split("$")[1]);
      totalBalance = nBalance - userAmountN;
      if(totalBalance <0) {
        $("#checking .balance").html("You have overdrawn. We are sending assasins.");
        $("#checking .balance").css("background", "red");
        return;
      } else if(totalBalance ==0) {
        $("#checking .balance").css("background", "red");
      };
      $("#checking .balance").html("$" + totalBalance.toFixed(2));
      $("#checking .input").val("");
  })

  $("#savings .deposit").on("click", function(e){
      console.log("button working");
      e.preventDefault();
      var userAmount = $("#savings .input").val();
      var userAmountN = parseFloat(userAmount);
      balance = $("#savings .balance").html();
      var nBalance = parseFloat(balance.split("$")[1])
      totalBalance = nBalance + userAmountN;
      $("#savings .balance").html("$" + totalBalance.toFixed(2));

      $("#savings .input").val("");
      if(totalBalance === 0) {
        $("#savings .balance").css("background", "red")
      };

  })

  $("#savings .withdraw").on("click", function(e){
      console.log("button working");
      e.preventDefault();
      var userAmount = $("#savings .input").val();
      var userAmountN = parseFloat(userAmount);
      balance = $("#savings .balance").html();
      var nBalance = parseFloat(balance.split("$")[1]);
      totalBalance = nBalance - userAmountN;
      if(totalBalance <0) {
        $("#savings .balance").html("You have overdrawn. We are sending assasins.");
        $("#savings .balance").css("background", "red");
        return;
      } else if(totalBalance ==0) {
        $("#savings .balance").css("background", "red");
      };
      $("#savings .balance").html("$" + totalBalance.toFixed(2));
      $("#savings .input").val("");
  })



});
