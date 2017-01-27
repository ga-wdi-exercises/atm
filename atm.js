// Declare all variables (global)
var cBalance = $ ('#checking div.balance'),
    cInput = $ ('#checking input.input'),
    cDeposit = $ ('#checking input.deposit'),
    cWithdraw = $ ('#checking input.withdraw'),
    cAmount = 0,
    sBalance = $ ('#savings div.balance'),
    sInput = $ ('#savings input.input'),
    sDeposit = $ ('#savings input.deposit'),
    sWithdraw = $ ('#savings input.withdraw'),
    sAmount = 0;

// Creating object for checking functions
var checking = {
  checkingDeposit : function() {
    cAmount += eval(cInput.val());
    cBalance.text('$' + cAmount);
},
  checkingWithdraw : function() {
    if (cAmount - eval(cInput.val()) >= 0){
    cAmount - eval(cInput.val());
    cBalance.text('$' + cAmount);
}   else { alert('Insufficient Funds')
};
}
}
// Creating object for savings functions
var savings = {
  savingsDeposit: function() {
    sAmount += eval(sInput.val());
    sBalance.text('$' + sAmount);
},
  savingsWithdraw: function() {
    if (sAmount - eval(sInput.val()) >= 0){
    sAmount - eval(sInput.val());
    sBalance.text('$' + sAmount);
}   else { alert('Insufficient Funds')
};
}
}

// Creating event listeners
cDeposit.on('click', checking.checkingDeposit);
cWithdraw.on('click', checking.checkingWithdraw);
sDeposit.on('click', savings.savingsDeposit);
sWithdraw.on('click', savings.savingsWithdraw);
