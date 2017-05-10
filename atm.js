$(document).ready( function(){

var balance = 0;
//Once the page loads, it is waiting for user input/event
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
$("#checking input.deposit").on("click", addMoney);
console.log('hello');
$("#savings input.deposit").on("click", addMoney);
console.log('hello2');


  //on deposit click, execute this function

  function addMoney(){
    console.log(this);
    //prevBalance + inputAmount = return NewBalance
      //prevBalance is what is in the bank account upon the click
    var inputAmount = $("#checking .input").val();
    var cleanedInput = inputAmount.replace("$","");
      var resultInput = parseInt(cleanedInput);
     balance = (balance + resultInput) //need more here to push this to the display
     $("#checking .balance").text("$" + balance)
  }



















  //WITHDRAW MONEY

  //EVENT LISTENERS
  var checkingWithdraw = $("#checking input.withdraw").on("click", subtractMoney);
  var savingsWithdraw =$("#savings input.withdraw").on("click", subtractMoney);

  //on withdraw button click, execute this function
  function subtractMoney(){

  }
});
