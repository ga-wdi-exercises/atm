
$(document).ready(function(){

var savingsBalance = parseInt($("#savings_balance").html().replace("$", ""));
var checkingBalance = $("#checking_balance").html().replace("$", "");
var checkingEntry = $("#checkingEntry").val();





  $('#depositChecking').on("click", function() {
    $("#checking_balance").text("$" + (parseInt($("#checking_balance").html().replace("$", "")) + parseInt($("#checkingEntry").val())));
    $("#checkingEntry").val('');
    $("#checkingEntry").focus();
  });

  $('#withdrawChecking').on("click", function() {
    $("#checking_balance").text("$" + (parseInt($("#checking_balance").html().replace("$", "")) - parseInt($("#checkingEntry").val())));
    $("#checkingEntry").val('');
    $("#checkingEntry").focus();


    if ($("#checkingEntry").val() > parseInt($("#checking_balance").html().replace("$", ""))) {

      var difference = $("#checkingEntry").val() - parseInt($("#checking_balance").html().replace("$", ""));

      $("#checking_balance").text(parseInt($("#savings_balance").html().replace("$", "")) - $("checkingEntry"));
    }







  });

  $('#depositSavings').on("click", function() {
    $("#savings_balance").text("$" + (parseInt($("#savings_balance").html().replace("$", "")) + parseInt($("#savingsEntry").val())));
    $("#savingsEntry").val('');
    $("#savingsEntry").focus();
  });

  $('#withdrawSavings').on("click", function() {
    $("#savings_balance").text("$" + (parseInt($("#savings_balance").html().replace("$", "")) - parseInt($("#savingsEntry").val())));
    $("#savingsEntry").val('');
    $("#savingsEntry").focus();
  });

});
