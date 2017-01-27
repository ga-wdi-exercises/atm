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

  //update the display with the new balance for the given account
  function updateDisplay(accountType, balance) {
    $(`#${accountType}`).find(".balance").html(`$${balance}`);
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
    updateDisplay(accountType, newBalance); //update the display
  }

  function withdraw(accountType) {
    var currentBalance = getBalance(accountType); //get current balance
    var amount = getInput(accountType); //get the amount the user wants to withdraw
    var result = currentBalance - amount; //calculate the result of the transaction
    var newBalance = result < 0 ? /* handleOverdraft goes here */ currentBalance : result; //only allow it if the result is greater than 0
    updateDisplay(accountType, newBalance); //update the display
  }

  function handleOverdraft(accountType) {

  }


  //delegate click event listeners to buttons within the accounts
  $(".account").delegate(":button", "click", function(){
    var buttonType = $(this).attr('class'); //get the type of the button that was clicked (deposit or withdraw)
    var accountType = $(this).parent().attr('id'); //get the type of the account containing clicked button (checking or savings)
    buttonType === "deposit" ? deposit(accountType) : withdraw(accountType); //either deposit or withdraw to that account based on button type
  });
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
