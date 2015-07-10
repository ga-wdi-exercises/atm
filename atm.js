$(document).ready (function (){
  //alert("Ready to go!")

var sInput;
var cInput;
var cBalance = 0;
var sBalance = 0;

var inTheRed = function () {
   if (cBalance === 0) {
     $(".balance:nth-child(2)").eq(0).addClass("zero")
   }
   else {
     $(".balance:nth-child(2)").eq(0).removeClass("zero")
   }
   if (sBalance === 0) {
     $(".balance:nth-child(2)").eq(1).addClass("zero")
   }
   else {
     $(".balance:nth-child(2)").eq(1).removeClass("zero")
}}

//Starting in the Ready
inTheRed();

//Deposit CHECKING
$("#cDepositButton").on("click", function(event){
  cInput = $("#cField").val();
  cBalance = cBalance + parseFloat(cInput) ;
  $(".balance:nth-child(2)").eq(0).html(cBalance);
  $("#cField").val("");
  inTheRed();
})
//Deposit Savings
$("#sDepositButton").on("click", function(event){
  sInput = $("#sField").val();
  console.log(sInput)
  sBalance = sBalance + parseFloat(sInput);
  $(".balance:nth-child(2)").eq(1).html(sBalance);
  $("#sField").val("");
  $(".balance:nth-child(2)").eq(1).removeClass("zero")
  inTheRed();
})

//Withdraw Savings
$("#sWithdrawButton").on("click", function(event){
  sInput = $("#sField").val();
      if (parseFloat(sInput) <= sBalance) {
          sBalance = sBalance - parseFloat(sInput) ;
          $(".balance:nth-child(2)").eq(1).html(sBalance);
          $("#sField").val("");
          inTheRed();}
      else {
          alert("Insufficient Funds");
          $("#cField").val("");}
        })


//Checking Withdraw and Overdraft Protection

$("#cWithdrawButton").on("click", function(event){
  cInput = $("#cField").val();
  var totalAccount = sBalance + cBalance;
      if (parseFloat(cInput) <= cBalance) {
          cBalance = cBalance - parseFloat(cInput) ;
          $(".balance:nth-child(2)").eq(0).html(cBalance);
          $("#cField").val("");
          inTheRed();
          }
      else if (parseFloat(cInput) <= totalAccount) {
          var carryOverCharge = (cBalance - parseFloat(cInput))
          sBalance = sBalance + carryOverCharge;
          cBalance = 0;
          $(".balance:nth-child(2)").eq(1).html(sBalance);
          $(".balance:nth-child(2)").eq(0).html(cBalance);
          $("#cField").val("");
          inTheRed();
      }
      else {
          alert("Insufficient Funds");
          $("#cField").val("");}
})

//ORIGINAL STARTING CODE IS BELOW
// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
})
