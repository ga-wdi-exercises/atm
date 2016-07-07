$(document).ready(function(){
  console.log("Your Mom");
//
// // change body to red on mouseover:
//
// $("body").on("mouseover", bodyRed);
//
//   function bodyRed() {
//
//     $("body").css("background", "red");
//   }
//
// // log hello in console on click of checking deposit button:
//
// $("#checking .deposit").on("click", hello);
//
//   function hello()  {
//     console.log("Hello.");
//   }
//
// });

$("#checking .deposit").on("click", function(e)  {
    e.preventDefault();
    var userDeposit = $("#checking .input").val();
    var balanceAmount = $("#checking .balance").html();
    var nUserDeposit = parseFloat(userDeposit);
    var nBalanceAmount = parseFloat(balanceAmount.split("$")[1]);

    console.log(nUserDeposit);
    console.log(nBalanceAmount);

    $("#checking .balance").html("$" + (nUserDeposit + nBalanceAmount).toFixed(2));

});


$("#checking .withdraw").on("click", function(e)  {
  e.preventDefault();
  var userWithdraw = $("#checking .input").val();
  var balanceAmount = $("#checking .balance").html();
  var nUserWithdraw = parseFloat(userWithdraw);
  var nBalanceAmount = parseFloat(balanceAmount.split("$")[1]);

  console.log(nUserWithdraw);
  console.log(nBalanceAmount);

  $("#checking .balance").html("$" + (nBalanceAmount - nUserWithdraw).toFixed(2));

});


$("#savings .deposit").on("click", function(e)  {
  e.preventDefault();
  var userDeposit = $("#savings .input").val();
  var balanceAmount = $("#savings .balance").html();
  var nUserDeposit = parseFloat(userDeposit);
  var nBalanceAmount = parseFloat(balanceAmount.split("$")[1]);

  console.log(nUserDeposit);
  console.log(nBalanceAmount);

  $("#savings .balance").html("$" + (nUserDeposit + nBalanceAmount).toFixed(2));

});


$("#savings .withdraw").on("click", function(e)  {
  e.preventDefault();
  var userWithdraw = $("#savings .input").val();
  var balanceAmount = $("#savings .balance").html();
  var nUserWithdraw = parseFloat(userWithdraw);
  var nBalanceAmount = parseFloat(balanceAmount.split("$")[1]);

  console.log(nUserWithdraw);
  console.log(nBalanceAmount);

  $("#savings .balance").html("$" + (nBalanceAmount - nUserWithdraw).toFixed(2));

});


});
