$(document).ready( function(){
/*Once the page loads, it is waiting for user input/event
  /* 1.Users can deposit money into one of the bank accounts
  2.Users can withdraw money from one of the bank accounts
  3.Make sure the balance in an account can't go negative. If a user
  tries to withdraw more money than exists in the account, ignore
  the transaction.
  // 4. The color of a bank account should reflect its balance.
  (There's a CSS class called .zero already written for this.) */

  //Deposit money
  //1. Setup an event listener for when the button is pressed that will add the money to the existing balance.
  //2. There will be one of these setup for each account to keep the balances separate
  //3. Will I need a default prohibitor so page doesn't refresh?
  //4. Change account to red if balance at 0


  //Withdraw money
  //Setup an event listener for when the button is pressed that will subtract money crom each account's existing balance
  //2. Set a condition that balance cannot go below $0
  //3. Make an alert that the user cannot make a withdraw of that amount
  //4. Set this up for each account
  //5. Will I need a default prohibitor so page doesn't refresh?
  //6. If at 0, account should be red

  //DEPOSIT MONEY
  //Event Listeners for button clicks
var checkingBalance = 0;
var savingsBalance = 0;
$("#checking .deposit").click(function() {

   //function reference!
console.log('hello');
var inputAmount = $("#checking .input").val();
var cleanedInput = inputAmount.replace("$","");
  var resultInput = parseInt(cleanedInput);
 checkingBalance = (checkingBalance + resultInput) //need more here to push this to the display
 $("#checking .balance").text("$" + checkingBalance);
//console.log(balance);
 if(checkingBalance <= 0){
   $("#checking").removeClass("zero");
 }
})

$("#savings .deposit").click(function() {  //function reference!
console.log('hello2');
    var inputAmount = $("#savings .input").val();
    var cleanedInput = inputAmount.replace("$","");
      var resultInput = parseInt(cleanedInput);
     savingsBalance = (savingsBalance + resultInput) //need more here to push this to the display
     $("#savings .balance").text("$" + savingsBalance);

     if(savingsBalance <= 0){
       $("#checking").removeClass("zero");
     }
   })


  //WITHDRAW MONEY
  $("#checking .withdraw").click(function() {

     //function reference!
  console.log('hello3');
  var inputAmount = $("#checking .input").val();
  var cleanedInput = inputAmount.replace("$","");
    var resultInput = parseInt(cleanedInput);
   checkingBalance = (checkingBalance - resultInput) //need more here to push this to the display
   $("#checking .balance").text("$" + checkingBalance);
  //console.log(balance);
   if(checkingBalance <= 0){
     $("#checking").addClass("zero");
   }
  })

  $("#savings .withdraw ").click(function() {  //function reference!
  console.log('hello4');
      var inputAmount = $("#savings .input").val();
      var cleanedInput = inputAmount.replace("$","");
        var resultInput = parseInt(cleanedInput);
       savingsBalance = (savingsBalance - resultInput) //need more here to push this to the display
       $("#savings .balance").text("$" + savingsBalance);

       if(savingsBalance <= 0){
         $("#checking").addClass("zero");
       }
     })
});
