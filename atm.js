$(document).ready(function(){
  // When any deposit or withdraw button is clicked ...
  $(':button').click(function() {
    // Assign that button's parent (.account) to an 'account' variable.
    var account = $(this).parent();
    // Assign that account's .input to an 'input' variable.
    var input = account.find('.input');
    // Convert input's value to a number, and store it in an 'amount' variable.
    var amount = parseInt(input.val());
    // Clear the .input field.
    input.val('');
    // If amount is greater than 0 (this handles empty input too, since it converts to NaN which is not > 0) ...
    if (amount > 0) {
      // Assign account's .balance to a 'balance' variable.
      var balance = account.find('.balance');
      // Extract the numerical portion of the inner html balance, convert it into a number, and store it in a 'bal' variable.
      var bal = parseInt(balance.html().slice(1));
      // If the clicked button has the 'deposit' class ...
      if ($(this).hasClass('deposit')) {
        // Add amount to bal.
        bal += amount;
      // Otherwise ...
      } else {
        // Pass account, balance, bal, and amount into the withdraw function (defined below).
        bal = withdraw(account, balance, bal, amount);
      }
      // Convert bal back to a string, prepend '$', and replace balance's html with the result.
      balance.html('$' + bal.toString());
      // Call the function (defined below) that updates the background colors of the accounts.
      updateColors();
    }
  });

  // This function handles withdraws.
  function withdraw(account, balance, bal, amount) {
    if (bal >= amount) {
      bal -= amount;
      return bal;
    } else {
      var overdraft = Math.abs(bal - amount);
      var altBalance = account.siblings('.account').find('.balance');
      var altBal = parseInt(altBalance.html().slice(1));
      if (altBal - overdraft >= 0) {
        bal = 0;
        altBal -= overdraft;
        altBalance.html('$' + altBal.toString());
        return bal;
      } else {
        alert('Insufficient Funds!');
      }
    }
  }

  // This function updates the background colors of each account after every transaction.
  function updateColors() {
    $('.account').each(function() {
      var account = $(this);
      var bal = parseInt(account.find('.balance').html().slice(1));
      if (bal === 0) {
        account.attr('class', 'account zero');
      } else {
        account.attr('class', 'account');
      }
    });
  }
});
