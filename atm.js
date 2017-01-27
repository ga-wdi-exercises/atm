// Follow the commented instructions just above '</body>' in index.html.
// Make sure that jQuery is working.
// Then, follow your pseudo-code below, or follow the recommended commits in README.md (or do some combination of these).

$(document).ready(function(){

  // Add an event listener to each account's deposit button. When it is clicked ...
    // Get the value of this account's input field.
    // Add that amount to this account's balance.
    // Update the inner html of this account's .balance div to '$<new-balance>'.
    // If the balance is now greater than $0, make sure that this account's class is "account" (rather than "account zero").
    // Clear the input field.

  // Add an event listener to each account's withdraw button. When it is clicked ...
    // Get the value of this account's input field.
    // If that amount is greater than or equal to this account's balance:
      // Subtract the field amount from the balance amount.
      // Update the inner html of this account's .balance div to '$<new-balance>'.
      // If the balance is now $0, make sure that this account's class is "account zero" (rather than "account").
    // Clear the input field.

});
