$(document).ready(function(){

  // DONE: Follow the commented instructions just above '</body>' in index.html.

  // DONE: Make sure that jQuery is working.
  console.log('jQuery is working!');

  // Then, follow your pseudo-code below, or follow the recommended commits in README.md (or do some combination of these).


  // When an account's deposit button is clicked ...
  $('.deposit').click(function() {
    // Assign that button's parent (div.account) to a variable.
    var account = $(this).parent();
    // Assign that account's div.balance to a variable.
    var balance = account.find('.balance');
    // Assign that account's div.input to a variable.
    var input = account.find('.input');
    // If the input field is not empty ...
    if (input.val() !== '') {
      // Extract the numerical portion of the inner html of the balance div, convert it into a number, and store it in a variable.
      bal = parseInt(balance.html().substring(1));
      // Convert the input value to a number, and store it in a variable.
      dep = parseInt(input.val());
      // Add the latter to the former.
      bal += dep;
      // Convert the result back to a string, and substitute it for the balance div's current html.
      balance.html('$' + bal.toString());
      // Clear the input field.
      input.val('');
    }
  });

    // If the balance is now greater than $0, make sure that this account's class is "account" (rather than "account zero").
    // if (this.balance > 0) {
    //   this.className = "account";
    // }






  // Add an event listener to each account's withdraw button. When it is clicked ...
    // Get the value of this account's input field.
    // If that amount is greater than or equal to this account's balance:
      // Subtract the field amount from the balance amount.
      // Update the inner html of this account's .balance div to '$<new-balance>'.
      // If the balance is now $0, make sure that this account's class is "account zero" (rather than "account").
    // Clear the input field.

});
