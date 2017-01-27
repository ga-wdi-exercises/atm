//Start with checknng acccount
  //when aomunt = zero, make color red
  //when greater than zero, make color green
  //user input moneys
  //user can then click deposit
  //if button clicked, add amount to current balance
  //if withdraw button is clicked, check to see withdraw less tha  amonut blanace
  //if less than deduct amount from account balance
  //if greater than show error as deined transcation
//Start logic for savings acccount
  //user input money
  //then click deposit button
  //if button clicked, add amount into balance
  var checking = 0;
  var savings = 0;
  checkingBalance = 0;
  savingsBalance = 0;
  input = 0;

$(document).ready(function(){
  $("body").css("background", "red")
});

 //checking deposit start
$("#checking").children(".deposit").on("click", function() {
  var clear = "";
  checkingBalance += parseInt($("#checking .input").val());
  console.log("Update " + checkingBalance);
  $("#checking .balance").html("$ " + checkingBalance)
  $("#checking .input").val(clear);
  negativeAmount1();

})

$("#checking").children(".withdraw").on("click", function() {
  var clear = "";
  checkingBalance -= parseInt($("#checking .input").val());
  console.log("Update " + checkingBalance);
  $("#checking .balance").html("$ " + checkingBalance)
  $("#checking .input").val(clear);
  negativeAmount1();
})
//savings deposit start here
 $("#savings").children(".deposit").on("click", function() {
   var clear = "";
   savingsBalance += parseInt($("#savings .input").val());
   console.log("Update " + savingsBalance);
   $("#savings .balance").html("$" + savingsBalance)
   $("#savings.input").val(clear);
 })
 $("#savings").children(".withdraw").on("click", function() {
   var clear = "";
   savingsBalance -= parseInt($("#savings .input").val());
   console.log("Update " + savingsBalance);
   $("#savings .balance").html("$" + savingsBalance)
   $("#savings.input").val(clear);
 })
  function negativeAmount1() {
    if (checking == 0){
      $("#checking .balance").addClass("zero");
    }
    else {
      $("#checking .balance").removeClass("zero");
    }

    if (savings == 0){
      $("#savings .balance").addClass("zero");
    }
    else {
      $("#savings .balance").removeClass("zero");
    }
  }
  negativeAmount1();

  //overdraft protection
  //$("#checkingWithdraw").on("click", function(){
  //withdraw = parseInt($("#checkingInput").val())
