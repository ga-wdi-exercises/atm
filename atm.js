// amount = $("input").val();
// CheckingBalance = "";
checkingBalance = 0;
savingsBalance = 0;
balance = checkingBalance + savingsBalance;
// insufficientFunds = 0;
// balance = ("#savings .balance");



$(document).ready(function(){
  $("body").css("background", "orange")
  if (balance == 0){
      $("#checking .balance").css("background", "red");
      $("#savings .balance").css("background", "red");
    }
});

$("#checking").children(".deposit").on("click", function (){
  var clear = "";
  checkingBalance += parseInt($("#checking .input").val());
  $("#checking .balance").html("$" + checkingBalance);
  console.log("Checking Deposit of amount: " + checkingBalance);
  $("#checking .input").val(clear);
  insufficientFunds();
})

$("#checking").children(".withdraw").on("click", function (){
  var clear = "";
  checkingBalance -= parseInt($("#checking .input").val());
  $("#checking .balance").html("$" + checkingBalance);
  console.log("Checking Deposit of amount: " + checkingBalance);
  $("#checking .input").val(clear);
  insufficientFunds();
})

$("#savings").children(".deposit").on("click", function() {
  var clear = "";
  savingsBalance  += parseInt($("#savings .input").val());
  $("#savings .balance").html("$" + savingsBalance);
  console.log("Savings Deposit of amount: " + savingsBalance);
  $("#savings .input").val(clear);
  insufficientFunds();
})

$("#savings").children(".withdraw").on("click", function() {
  var clear = "";
  savingsBalance -= parseInt($("#savings .input").val());
  $("#savings .balance").html("$" + savingsBalance);
  console.log("Savings Deposit of amount: " + savingsBalance);
  $("#savings .input").val(clear);
  insufficientFunds();

})
/// Attempt At bonus (below)
function insufficientFunds (){
  var balance = checkingBalance + savingsBalance;
  if (balance === 0) {
      $("#checking .balance").css("background", "red");
      //$("#savings .balance").css("background", "red");
      console.log("inside else one");
    }else if (checkingBalance <= 0){
        $("#checking .balance").css("background", "red");
        $("#savings .balance").css("background", "red");
    }else if (savingsBalance > 0){
          $("#savings .balance").css("background", "white");
    }else (balance > 0)
      $("#checking .balance").css("background", "white");
      $("#savings .balance").css("background", "white");
      console.log("inside else");
    }
    // console.log("no money");
// if (CheckingBalance < 0){
//   prompt("You broke, Get Money");
// }


// amountWithdaw -= parseInt($("#checking .input").val());
//Withdraw function
// parseInt($("input").val()));

// $("#checking .balance").html(amountChecking);

  // console.log(amount);

// html(parseInt($())
  // $("#checking").html();


// $("button").on("click", function () {
//   console.log("dom");
// })

// $(".deposit").on("click", function() {
//   var amount = $("input").val();
//   console.log(amount);

// $("")
