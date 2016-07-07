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
// $("#savings .deposit").on("click", function()  {
//
//     var deposit = $("#savings .input").val();
//      var floatDeposit = parseFloat(deposit);
//
//     console.log(deposit);
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

    var totalBalance = nUserDeposit + nBalanceAmount;
    console.log(totalBalance);
    $("#checking .balance").html(totalBalance.toFixed(2));
});

$("#savings .deposit").on("click", function(e)  {
  e.preventDefault();
  var userDeposit = $("#savings .input").val();
  var balanceAmount = $("#savings .balance").html();
  var nUserDeposit = parseFloat(userDeposit);
  var nBalanceAmount = parseFloat(balanceAmount.split("$")[1]);

  console.log(nUserDeposit);
  console.log(nBalanceAmount);

  var totalBalance = nUserDeposit + nBalanceAmount;
  console.log(totalBalance);
  $("#savings .balance").html(totalBalance.toFixed(2));

});

$("#checking .withdraw")



  // $('someElement').on('click', function(e){
  //     // stop the event from bubbling.
  //     e.stopPropagation();
  // });



















});
