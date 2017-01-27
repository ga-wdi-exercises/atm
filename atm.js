var checkingBalance = 0;
var savingsBalance = 0;


$("#checking .deposit").on("click", function(){
 var checkingInput = $("#checking .input").val()
 checkingBalance = +checkingInput + +checkingBalance;
 $("#checking .balance").html("$" + checkingBalance);
 if (this.checking > 0){
     $("#checking").removeClass("zero");
   }
});

$("#checking .withdraw").on("click", function(){
 var checkingInput = $("#checking .input").val()
 checkingBalance = +checkingBalance - +checkingInput;
 $("#checking .balance").html("$" + checkingBalance);
 if(this.checking >= 0){
   $("#checking .balance").text("$" + this.checking);
 } else {
    this.checking = 0;
   $("#checking").addClass("zero")
 }
});

$("#savings .deposit").on("click", function(){
 var savingsInput = $("#savings .input").val()
 savingsBalance = +savingsInput + +savingsBalance;
 $("#savings .balance").html("$" + savingsBalance);
 if (this.checking > 0){
     $("#checking").removeClass("zero");
   }
});

$("#savings .withdraw").on("click", function(){
 var savingsInput = $("#savings .input").val()
 savingsBalance = +savingsBalance - +savingsInput;
 $("#savings .balance").html("$" + savingsBalance);
 if(this.checking >= 0){
   $("#savings .balance").text("$" + this.savings);
 } else {
    this.savings = 0;
   $("#savings").addClass("zero")
 }
});
