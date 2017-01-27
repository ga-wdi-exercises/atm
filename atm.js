var checkingBalance = 0;
var savingsBalance = 0;


$("#checking .deposit").on("click", function(){
 var checkingInput = $("#checking .input").val()
 checkingBalance = +checkingInput + +checkingBalance;
 $("#checking .balance").html("$" + checkingBalance);
});

$("#checking .withdraw").on("click", function(){
 var checkingInput = $("#checking .input").val()
 checkingBalance = +checkingBalance - +checkingInput;
 $("#checking .balance").html("$" + checkingBalance);
});

$("#savings .deposit").on("click", function(){
 var savingsInput = $("#savings .input").val()
 savingsBalance = +savingsInput + +savingsBalance;
 $("#savings .balance").html("$" + savingsBalance);
});

$("#savings .withdraw").on("click", function(){
 var savingsInput = $("#savings .input").val()
 savingsBalance = +savingsBalance - +savingsInput;
 $("#savings .balance").html("$" + savingsBalance);
});
