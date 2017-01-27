amount = $("input").val();
CheckingBalance = "";
amountWithdaw = 0;
amountDeposit = 0;
insufficientFunds = 0;

$(document).ready(function(){
  $("body").css("background", "orange")
});

$("#checking").children(".deposit").on("click", function (){
  amountDeposit += parseInt($("#checking .input").val());
  console.log("Checking Deposit of amount: " + amountDeposit);
  $("#checking .balance").html("$" + amountDeposit);
})

$("#checking").children(".withdraw").on("click", function (){
  amountDeposit -= parseInt($("#checking .input").val());
  console.log("Checking Deposit of amount: " + amountDeposit);
  $("#checking .balance").html("$" + amountDeposit);
  // if (CheckingBalance < 0){
  //   prompt("You broke, Get Money");
  // }

})



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
