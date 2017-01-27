$(document).ready(function(){
  $(':button').click(function() {
    var account = $(this).parent();
    var input = account.find('.input');
    var amount = parseInt(input.val());
    input.val('');
    if (amount > 0) {
      var balance = account.find('.balance');
      var bal = parseInt(balance.html().slice(1));
      if ($(this).hasClass('deposit')) {
        bal += amount;
      } else {
        bal = withdraw(account, balance, bal, amount);
      }
      balance.html('$' + bal.toString());
      updateColors();
    }
  });
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
