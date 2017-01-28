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
        // Pass account, balance, bal, and amount into the withdraw function (defined below), and assign its return value to bal.
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
    // If account has sufficient funds ...
    if (bal >= amount) {
      // Subtract amount from bal.
      bal -= amount;
      // Return bal to the anonymous function in the click handler; the bal variable there will be updated, and the flow will continue.
      return bal;
    // If account does not have sufficient funds ...
    } else {
      // Calculate the overdraft, and assign it to an 'overdraft' variable.
      var overdraft = Math.abs(bal - amount);
      // Get the other .account's .balance and assign it to an 'altBalance' variable.
      var altBalance = account.siblings('.account').find('.balance');
      // Extract the numerical portion of altBalance, convert it to a number, and assign it to an 'altBal' variable.
      var altBal = parseInt(altBalance.html().slice(1));
      // If altBal is great enough to cover the overdraft ...
      if (altBal - overdraft >= 0) {
        // Zero out bal (which, remember, represents the balance in the first account).
        bal = 0;
        // Subtract the overdraft from altBal.
        altBal -= overdraft;
        // Convert altBal back to a string, prepend '$', and replace altBalance's html with the result.
        altBalance.html('$' + altBal.toString());
        // Return bal to the anonymous function in the click handler; the bal variable there will be updated, and the flow will continue.
        return bal;
      // If the alternative account does not have sufficient funds either ...
      } else {
        // Throw an alert.
        alert('Insufficient Funds!');
      }
    }
  }
  // This function updates the background colors of each account after every transaction.
  function updateColors() {
    // For each account ...
    $('.account').each(function() {
      var account = $(this);
      // Extract its balance.
      var bal = parseInt(account.find('.balance').html().slice(1));
      // If its balance is $0 ...
      if (bal === 0) {
        // Make sure it has the 'zero' class.
        account.attr('class', 'account zero');
      // Otherwise ...
      } else {
        // Make sure it does not have the 'zero' class.
        account.attr('class', 'account');
      }
    });
  }
});
