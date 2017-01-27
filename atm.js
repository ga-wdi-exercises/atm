var checkingBalance = 0;
var savingsBalance = 0;

$(document).ready(function(){

  $("#checking > .deposit").on("click", function(){
    var checkingInput = $("#checking > .input").val()
    checkingBalance = +checkingInput + +checkingBalance;
    $("#checking > .balance").text("$" + checkingBalance);

    });

  $("#checking > .withdraw").on("click", function(){
    var checkingInput = $("#checking > .input").val()
    checkingBalance = +checkingBalance - +checkingInput;
    $("#checking > .balance").text("$" + checkingBalance);
  });

  $("#savings > .deposit").on("click", function(){
    var savingsInput = $("#savings > .input").val()
    savingsBalance = +savingsInput + +savingsBalance;
    $("#savings > .balance").text("$" + savingsBalance);

    });

    $("#savings > .withdraw").on("click", function(){
      var savingsInput = $("#savings > .input").val()
      savingsBalance = +savingsBalance - +savingsInput;
      $("#savings > .balance").text("$" + savingsBalance);
    });


});
