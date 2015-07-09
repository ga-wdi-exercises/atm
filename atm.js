$(document).ready (function (){
  //alert("Ready to go!")


var cInput;
var cBalance = 0;


// function savingsDeposit(amount){
//
// }
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }

// an eventListerner for each button, each one a "click"
//

//
// ###User Stories
// COMMIT ONE - As a user, I want to deposit money into one of the bank accounts
$("#cDepositButton").on("click", function(event){
  cInput = $("#cField").val();
  cBalance = cBalance + parseFloat(cInput) ;
  $(".balance:nth-child(2)").eq(0).html(cBalance);
  $("#cField").val("");
})

// COMMIT TWO - As a user, I want to withdraw money from one of the bank accounts
// $("#cWithdrawButton").on("click", function(event){
//   cInput = $("#cField").val();
//   cBalance = cBalance - parseFloat(cInput) ;
//   $(".balance:nth-child(2)").eq(0).html(cBalance);
//   $("#cField").val("");
// })

// COMMIT THREE - Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
$("#cWithdrawButton").on("click", function(event){
  cInput = $("#cField").val();
      if (parseFloat(cInput) < cBalance) {
          cBalance = cBalance - parseFloat(cInput) ;
          $(".balance:nth-child(2)").eq(0).html(cBalance);
          $("#cField").val("");}
      else {
          alert("Insufficient Funds");
          $("#cField").val("");}
})
// COMMIT FOUR - As a user, I want overdraft protection


// COMMIT FIVE - What happens when the user wants to withdraw more money from the checking account than is in the account?


// COMMIT SIX - If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.


// COMMIT SEVEN - If the withdrawal amount is more than the combined account balance, ignore it.


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
