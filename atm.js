// DONE: Cut the link to atm.js from the index.html <head>, and paste it just above '</body'>
// DONE: Add a link to a jQuery CDN to the line above that.
// DONE: Make sure that jQuery is working by running console.log('jQuery is working!') inside of the following document-ready event listener.

$(document).ready(function(){
  // When an account's deposit button is clicked ...
  $('.deposit').click(function() {
    // Assign that button's parent (.account) to a variable.
    var account = $(this).parent();
    // Assign that account's .balance to a variable.
    var balance = account.find('.balance');
    // Assign that account's .input to a variable.
    var input = account.find('.input');
    // If the input field is not empty ...
    if (input.val() !== '') {
      // Extract the numerical portion of the inner html of the balance div, convert it into a number, and store it in a variable.
      bal = parseInt(balance.html().slice(1));
      // Convert the input value to a number, and store it in a variable.
      dep = parseInt(input.val());
      // Add the latter to the former.
      bal += dep;
      // Convert the result back to a string, prepend '$', and replace balance's html with the result.
      balance.html('$' + bal.toString());
      // If the balance is now greater than $0, make sure that this account's class is "account" (rather than "account zero").
      if (bal > 0) {
        account.attr('class', 'account');
      }
      // Clear the input field.
      input.val('');
    }
  });
  // When an account's withdraw button is clicked ...
  $('.withdraw').click(function() {
    // Assign that button's parent (.account) to a variable.
    var account = $(this).parent();
    // Assign that account's .balance to a variable.
    var balance = account.find('.balance');
    // Assign that account's .input to a variable.
    var input = account.find('.input');
    // If the input field is not empty ...
    if (input.val() !== '') {
      // Extract the numerical portion of the inner html of the balance div, convert it into a number, and store it in a variable.
      bal = parseInt(balance.html().slice(1));
      // Convert the input value to a number, and store it in a variable.
      wit = parseInt(input.val());
      // If the balance is greater than or equal to the withdraw ...
      if (bal >= wit) {
        // Subtract the latter from the former.
        bal -= wit;
      }
      // Convert the result back to a string, prepend '$', and replace balance's html with the result.
      balance.html('$' + bal.toString());
      // If the balance is now $0, make sure that this account's class is "account zero" (rather than "account").
      if (bal === 0) {
        account.attr('class', 'account zero');
      }
      // Clear the input field.
      input.val('');
    }
  });
});
