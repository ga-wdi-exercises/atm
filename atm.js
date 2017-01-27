$(document).ready(function(){

  function getCheckingBalance() {
    //get the checking balance and save it in a variable
    var checkingBalance = $("#checking").find(".balance");
    //get the number from the balance display and save it
    var checkingBalanceValue = $("#checking").find('.balance').html();
    //remove the dollar sign
    var checkingBalanceNumber = checkingBalanceValue.substring(1, checkingBalanceValue.length);
    return checkingBalanceNumber;
  }

  function getCheckingInput() {
    //get the number from the checking input and save it
    var checkingInput = $("#checking").find("input").val();

    return checkingInput;
  }



  function depositChecking(currentBalance, depositAmount) {
    //add the checking input to checking balance
    var newBalance = parseInt(currentBalance) + parseInt(depositAmount);
    //update the checking balance html
    $("#checking").find(".balance").html(`$${newBalance}`);
  }

  function withdrawChecking(currentBalance, withdrawAmount) {
    //subtract widthdrawamount from currentBalance
    var newBalance = parseInt(currentBalance) - parseInt(withdrawAmount);
    //update the checking balance html
    checkingBalance.html(`$${newBalance}`);
  }

  //add click event listener to checking deposit button
  $("#checking").find(".deposit").click(function(){
    var balance = getCheckingBalance();
    var amount = getCheckingInput();
    depositChecking(balance, amount);
  });

  //add click event listener to withdraw deposit button
  $("#checking").find(".withdraw").click(function(){
    withdrawChecking();
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
      - *Get ahold of the number in the box so we can change it
      - *Get the entered amount from the input box
  HOLD- Validate that number (just make sure its a number - use typeof)
      - Add that entered number to the display number
      - Update the display
  - Add click event listener to withdraw button
      - Get ahold of the number in the box so we can change it
      - Get the entered amount from the input box
      - Validate that number
      - Get the number currently in the display box
      - Subtract the entered number from the display number
      - Update the display
- Repeat for savings account
*/
