$(document).ready(function(){
  console.log("JS is working");

  // var depositChecking;
  // var withdrawChecking;
  // $("#checking .input").on("change")
  // depositChecking = $(".input").val();
  // console.log(depositChecking);
  // console.log(typeof(depositChecking));

  $("#checking .deposit").on("click", function(e){
      console.log("button working");
      e.preventDefault();
      var userAmount = $("#checking .input").val();
      var userAmountN = parseFloat(userAmount);
      var balance = $("#checking .balance").html();
      var nBalance = parseFloat(balance.split("$")[1])
      var totalBalance = nBalance + userAmountN;
      $("#checking .balance").html("$" + totalBalance.toFixed(2));

      $("#checking .input").val("");

  })



});
