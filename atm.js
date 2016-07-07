$(document).ready(function(){
  console.log("JS is working");

var balance;
var totalBalance;

  $("#checking .deposit").on("click", function(e){
      e.preventDefault();

      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#checking .balance").html();
      var nBalance = parseFloat(balance.split("$")[1])

      //sets userAmount to whatever is in the input and makes it a  number
      var userAmount = $("#checking .input").val();
      var userAmountN = parseFloat(userAmount);

      totalBalance = nBalance + userAmountN;
      $("#checking .balance").html("$" + totalBalance.toFixed(2));

      if (totalBalance > 0) {
        $("#checking .balance").removeClass("zero");
      }

      $("#checking .input").val("");
  })

  $("#checking .withdraw").on("click", function(e){
      e.preventDefault();
      // $("#checking .balance").html(totalBalance);
      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#checking .balance").html();
      var nBalance = parseFloat(balance.split("$")[1]);

      //sets userAmount to whatever is in the input and makes it a  number
      var userAmount = $("#checking .input").val();
      var userAmountN = parseFloat(userAmount);

      totalBalance = nBalance - userAmountN;
      $("#checking .balance").html("$" + totalBalance.toFixed(2));
      $("#checking .input").val("");

      if (totalBalance < 0) {
        totalBalance = nBalance;
        alert("You can't overdraw, mofo.");
        $("#checking .balance").html("$" + totalBalance.toFixed(2));
      }

      if (totalBalance === 0) {
        $("#checking .balance").addClass("zero");
      } else if (totalBalance > 0) {
        $("#checking .balance").removeClass("zero");
      }

      if (userAmount === "") {
        $("#checking .balance").html(balance);
        }

      $("#checking .input").val("");
  })

  $("#savings .deposit").on("click", function(e){
      e.preventDefault();

      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#savings .balance").html();
      var nBalance = parseFloat(balance.split("$")[1])

      //sets userAmount to whatever is in the input and makes it a  number
      var userAmount = $("#savings .input").val();
      var userAmountN = parseFloat(userAmount);

      totalBalance = nBalance + userAmountN;
      $("#savings .balance").html("$" + totalBalance.toFixed(2));

      if (totalBalance > 0) {
        $("#savings .balance").removeClass("zero");
      }

      $("#savings .input").val("");
  })

  $("#savings .withdraw").on("click", function(e){
      e.preventDefault();
      // $("#checking .balance").html(totalBalance);
      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#savings .balance").html();
      var nBalance = parseFloat(balance.split("$")[1]);

      //sets userAmount to whatever is in the input and makes it a  number
      var userAmount = $("#savings .input").val();
      var userAmountN = parseFloat(userAmount);

      totalBalance = nBalance - userAmountN;
      $("#savings .balance").html("$" + totalBalance.toFixed(2));
      $("#savings .input").val("");

      if (totalBalance < 0) {
        totalBalance = nBalance;
        alert("You can't overdraw, mofo.");
        $("#savings .balance").html("$" + totalBalance.toFixed(2));
      }

      if (totalBalance === 0) {
        $("#savings .balance").addClass("zero");
      } else if (totalBalance > 0) {
        $("#savings .balance").removeClass("zero");
      }

      if (userAmount === "") {
        $("#savings .balance").html(balance);
        }

      $("#savings .input").val("");
  })

});
