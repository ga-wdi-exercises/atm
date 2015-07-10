$(document).ready (function (){
  //alert("Ready to go!")

var sInput;
var cInput;
var cBalance = 0;
var sBalance = 0;



//CHECKING
$("#cDepositButton").on("click", function(event){
  cInput = $("#cField").val();
  cBalance = cBalance + parseFloat(cInput) ;
  $(".balance:nth-child(2)").eq(0).html(cBalance);
  $("#cField").val("");
})
//Deposit Savings
$("#sDepositButton").on("click", function(event){
  sInput = $("#sField").val();
  console.log(sInput)
  sBalance = sBalance + parseFloat(sInput);
  $(".balance:nth-child(2)").eq(1).html(sBalance);
  $("#sField").val("");
  $(".balance:nth-child(2)").eq(1).removeClass("zero")

})

//Withdraw Savings
$("#sWithdrawButton").on("click", function(event){
  sInput = $("#sField").val();
      if (parseFloat(sInput) <= sBalance) {
          sBalance = sBalance - parseFloat(sInput) ;
          $(".balance:nth-child(2)").eq(1).html(sBalance);
          $("#sField").val("");}
      else {
          alert("Insufficient Funds");
          $("#cField").val("");}
      if (sBalance === 0) {
          $(".balance:nth-child(2)").eq(1).addClass("zero")
          }
        })

// COMMIT FOUR - As a user, I want overdraft protection
// $("#cWithdrawButton").on("click", function(event){
//   cInput = $("#cField").val();
//   var overDraftTotal = cBalance + sBalance;
//   console.log(overDraftTotal)
//       if (parseFloat(cInput) <= cBalance) {
//           cBalance = cBalance - parseFloat(cInput) ;
//           $(".balance:nth-child(2)").eq(0).html(cBalance);
//           $("#cField").val("");}
//       else if (parseFloat(cInput) <= overDraftTotal) {
//           sBalance = sBalance - parseFloat(cInput) ;
//           $(".balance:nth-child(2)").eq(1).html(sBalance);
//           $("#cField").val("");
//       }
//       else {
//           alert("Insufficient Funds");
//           $("#cField").val("");}
//
// })

//Trial

$("#cWithdrawButton").on("click", function(event){
  cInput = $("#cField").val();
  var totalAccount = sBalance + cBalance;
      if (parseFloat(cInput) <= cBalance) {
          cBalance = cBalance - parseFloat(cInput) ;
          $(".balance:nth-child(2)").eq(0).html(cBalance);
          $("#cField").val("");}
      else if (parseFloat(cInput) <= totalAccount) {
          var carryOverCharge = (cBalance - parseFloat(cInput))
          sBalance = sBalance + carryOverCharge;
          cBalance = 0;
          $(".balance:nth-child(2)").eq(1).html(sBalance);
          $(".balance:nth-child(2)").eq(0).html(cBalance);
          $("#cField").val("");
      }
      else {
          alert("Insufficient Funds");
          $("#cField").val("");}

})

//Color change
// if (cBalance === 0) {
//   $(".balance:nth-child(2)").eq(0).addClass("zero")
// }
// else {
//   $(".balance:nth-child(2)").eq(0).removeClass("zero")
// }
// if (sBalance === 0) {
//   $(".balance:nth-child(2)").eq(1).addClass("zero")
// }
// else {
//   $(".balance:nth-child(2)").eq(1).removeClass("zero")
// }
// if  (cBalance === 0) {
//         $(".balance:nth-child(2)").eq(0).css("background-color", "#F52F4F");
//     }
// else if  (sBalance === 0) {
//         $(".balance:nth-child(2)").eq(1).css("background-color", "#F52F4F");
//     }
// else {
//           $(".balance:nth-child(2)").eq(0).css("background-color", "white");
//     }

// if  (cBalance === 0) {
//     $(".balance:nth-child(2)").eq(0).css("background-color", "#F52F4F");
// }
// else {
//       $(".balance:nth-child(2)").eq(0).css("background-color", "white");
// }
// - What happens when the user wants to withdraw more money from the checking account than is in the account?
//See above

//- If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
//See above

// - If the withdrawal amount is more than the combined account balance, ignore it.
//see above

// COMMIT EIGHT - As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)


// COMMIT NINE - Are there ways to refactor your code to make it DRYer or more Object-Oriented?


//
// ###Tips
// * Tackle making your accounts work individually first
// * Then tackle them working together with overdraft protection
// * Only start working with the DOM after you have the logic down
//
// ###Resources
// * [What is window.onload for?](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onload)
// * [Adding Event Listeners so things happen when you click](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget.addEventListener)
// * [Adding or removing a CSS class using JS](https://developer.mozilla.org/en-US/docs/Web/API/Element.classList)
// * [Changing HTML with JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Element.innerHTML)

//ORIGINAL
// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
})
