$(document).ready(function(){

});

checkingDeposit = $("#checking").find('.deposit');
checkingWithdraw = $("#checking").find('.withdraw');
savingsDeposit = $("#savings").find('.deposit');
savingsWithdraw = $('#savings').find('.withdraw');
checkingBalance = 0;
savingsBalance = 0;
// function show() {
//   console.log('hello');
// }
// update checking balance with deposit
function updateCheckingDeposit () {
  checkingBalance += parseInt($('#checking .input').val());
  $("#checking .balance").html('$' + checkingBalance);
  $('#checking .input').val("");
  redChecking();
}


// update checking balance with withdraw
function updateCheckingWithdraw () {
  if (checkingBalance < parseInt($('#checking .input').val())) {
    alert('You have insufficient funds!');
    $('#checking .input').val("");
  }
  else {
    checkingBalance -= parseInt($('#checking .input').val());
    $("#checking .balance").html('$' + checkingBalance);
    $('#checking .input').val("");
    redChecking();
  }
}





// update savings balance with deposit
function updateSavingsDeposit () {
  savingsBalance += parseInt($('#savings .input').val());
  $("#savings .balance").html('$' + savingsBalance);
  $('#savings .input').val("");
  redSavings();
}


// update savings balance with Withdraw
function updateSavingsWithdraw () {
  if (savingsBalance < parseInt($('#savings .input').val())) {
    alert('You have insufficient funds!');
    $('#savings .input').val("");
  }
  else {
    savingsBalance -= parseInt($('#savings .input').val());
    $("#savings .balance").html('$' + savingsBalance);
    $('#savings .input').val("");
    redSavings();
  }
}


// Change color to red when checking balance is zero
function redChecking () {
if (checkingBalance === 0) {
  $('#checking .balance').addClass('zero');
}
else {
  $('#checking .balance').removeClass('zero');
  }
}
redChecking();

//  change color to red when savings balance is zero
function redSavings () {
if (savingsBalance === 0) {
  $('#savings .balance').addClass('zero');
}
else {
  $('#savings .balance').removeClass('zero');
  }
}
redSavings();

// CLICK event listeners..
checkingDeposit.on('click', updateCheckingDeposit);
checkingWithdraw.on('click', updateCheckingWithdraw);
savingsDeposit.on('click', updateSavingsDeposit);
savingsWithdraw.on('click', updateSavingsWithdraw);
