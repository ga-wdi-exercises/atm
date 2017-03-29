$(document).ready(function(){
  console.log('jQuery Works!');

  // checking variables
  // buttons
  var checkingDeposit = $('#checking .deposit');
  var checkingWithdraw = $('#checking .withdraw');
  // input
  var checkingInput = $('#checking .input');
  //balance
  var checkingBalanceDisplay = $('#checking .balance');

  // savings variables
  // buttons
  var savingsDeposit = $('#savings .deposit');
  var savingsWithdraw = $('#savings .withdraw');
  // input
  var savingsInput = $('#savings .input');
  //balance
  var savingsBalanceDisplay = $('#savings .balance');

  // var checkingInputVal = checkingInput.val();
  // var checkingsUpdateBalance = checkingBalance.text('$' + checkingInputVal);

  var savingBalance = 0;
  var checkingBalance = 0;

  //checking functions
  //fires when you click the checking deposit button
  var depositChecking = function() {
    var checkingInputVal = checkingInput.val();
    var newValue = parseInt(checkingInputVal);

    checkingBalance += newValue;
    checkingBalanceDisplay.text('$' + checkingBalance);
  };

  //fires when you click the checking withdraw button
  var withdrawChecking = function() {
    console.log('withdrew some money')
    var checkingInputVal = checkingInput.val();
    var newValue = parseInt(checkingInputVal);

    checkingBalance -= checkingInputVal;
    console.log(checkingBalance);
  };

  //savings functions
  //fires when you click the savings deposit button
  var depositSavings = function() {
    console.log('made a savings deposit')
  };
  //fires when you click the savings withdraw button
  var withdrawSavings = function() {
    console.log('made a savings withdrawal')
  };

  checkingDeposit.on('click', depositChecking)
  checkingWithdraw.on('click', withdrawChecking)

  savingsDeposit.on('click', depositSavings)
  savingsWithdraw.on('click', withdrawSavings)
});
