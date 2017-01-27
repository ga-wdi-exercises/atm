$(document).ready(function(){

  function getBalance(accountType) {
    var balance = $(`#${accountType}`).find(".balance"); //get the current balance from the display
    var balanceValue = balance.html(); //get the actual value
    var balanceNumber = balanceValue.substring(1, balanceValue.length); //remove the dollar sign
    return parseInt(balanceNumber); //return just the number
  }

  //get the number from the checking input and return it
  function getInput(accountType) {
    var input = $(`#${accountType}`).find("input").val();
    return parseInt(input);
  }

  function updateDisplay(accountType, amount) {
    $(`#${accountType}`).find(".balance").html(`$${amount}`);
    if (getBalance(`${accountType}`) === 0) {
      $(`#${accountType}`).find(".balance").addClass('zero');
    } else if(getBalance(`${accountType}`) !== 0) {
      $(`#${accountType}`).find(".balance").removeClass('zero');
    }
  }

  function deposit(accountType) {
    var currentBalance = getBalance(accountType); //get current balance for the account type
    var amount = getInput(accountType); //get the amount the user wants to deposit
    var newBalance = currentBalance + amount; //add em up
    updateDisplay(accountType, newBalance); //update the view
  }

  function withdraw(accountType) {
    var currentBalance = getBalance(accountType);
    var amount = getInput(accountType);
    var result = currentBalance - amount;
    var newBalance = result < 0 ? currentBalance : result;
    updateDisplay(accountType, newBalance);
  }

  //add click event listener to checking deposit button
  $("#checking").find(".deposit").click(function(){
    deposit("checking");
  });

  //add click event listener to withdraw deposit button
  $("#checking").find(".withdraw").click(function(){
    withdraw("checking");
  });

  $("#savings").find(".deposit").click(function(){
    deposit("savings");
  });

  $("#savings").find(".withdraw").click(function(){
    withdraw("savings");
  });

  // var buttons = $(".account").
  //
  // $(".account").delegate("", "click", function(){
  //   var buttons = $(this).attr('class', )
  //
  // });
});

// User Stories
// - Users can deposit money into one of the bank accounts
// - Users can withdraw money from one of the bank accounts
// - Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// - The color of a bank account should reflect its balance. (There's a CSS class called `.zero` already written for this.)
// - You may edit the HTML file (but might not need to).

/*PSEUDOCODE
-Checking account
  - Add click event listener to deposit button
  **  - *Get ahold of the number in the box so we can change it
  **  - *Get the entered amount from the input box
  HOLD- Validate that number (just make sure its a number - use typeof)
  **  - Add that entered number to the display number
  **  - Update the display
  - Add click event listener to withdraw button
  **  - Get ahold of the number in the box so we can change it
  **  - Get the entered amount from the input box
  HOLD- Validate that number
  **  - Subtract the entered number from the display number
  **  - Update the display
- Repeat for savings account
*/
