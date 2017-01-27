$(document).ready(function(){
  alert('Welcome to Goliath National Bank!  Member FDIC.\n\nWARNING: non-GNB members pay $10 per transaction at this ATM for the privilege of doing business with us.  GNB loves you!');
});

var checkingBalance = 100;
var savingsBalance = 100;
$('#checking').find($('.balance')).html('$' + checkingBalance);
$('#savings').find($('.balance')).html('$' + savingsBalance);

// Deposit - Checking
$('#checking').find($('.deposit')).on('click',depositChecking);
function depositChecking(){
  var depositAmount = parseInt($('#checking').find($('.input')).val());
  if(checkingBalance<0){
    overdraftCheck(depositAmount);
  }
  else{
    checkingBalance = checkingBalance + depositAmount;
    $('#checking').find($('.balance')).html('$' + checkingBalance);
    alert('Thank you.  GNB loves you!');
  }
};

// Withdraw - Checking
$('#checking').find($('.withdraw')).on('click',withdrawChecking);
function withdrawChecking(){
  var withdrawAmount = parseInt($('#checking').find($('.input')).val());
  checkingBalance = checkingBalance - withdrawAmount;
  if(checkingBalance<0){
    overdraftApproval();
  }
  else if(checkingBalance=0){
    $('#checking').find($('.balance')).html('$' + checkingBalance);
    $('#checking').find($('.balance')).css('background-color','red');
    alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
  }
  else{
    $('#checking').find($('.balance')).html('$' + checkingBalance);
    alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
  }
};

// Deposit - savings
$('#savings').find($('.deposit')).on('click',depositSavings);
function depositSavings(){
  var depositAmount = parseInt($('#savings').find($('.input')).val());
  if(checkingBalance<0){
    alert('Your checking account is overdrafted.  Submitting deposit to checking.');
    overdraftCheck(depositAmount);
  }
  else{
    savingsBalance = savingsBalance + depositAmount;
    $('#savings').find($('.balance')).html('$' + savingsBalance);
    alert('Thank you.  GNB loves you!');
  }
};

// Withdraw - savings
$('#savings').find($('.withdraw')).on('click',withdrawSavings);
function withdrawSavings(){
  var withdrawAmount = parseInt($('#savings').find($('.input')).val());
  savingsBalance = savingsBalance - withdrawAmount;
  if(savingsBalance<0){
    alert('Insufficient funds.  Withdrawing from checking account.');
    checkingBalance = checkingBalance + savingsBalance;
    if(checkingBalance<0){
      savingsBalance=0;
      overdraftApproval();
    }
    else if(checkingBalance=0){
      savingsBalance=0;
      $('#checking').find($('.balance')).html('$' + checkingBalance);
      $('#savings').find($('.balance')).html('$' + savingsBalance);
      $('#checking').find($('.balance')).css('background-color','red');
      alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
    }
    else{
      savingsBalance=0;
      $('#checking').find($('.balance')).html('$' + checkingBalance);
      $('#savings').find($('.balance')).html('$' + savingsBalance);
      alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
    }
  }
  else{
    savingsBalance=0;
    $('#savings').find($('.balance')).html('$' + savingsBalance);
    alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
  }
};

// Overdraft Protection
function overdraftApproval(){
  var overdraftApproval = prompt('You have insufficient funds for this transaction. Would you like to draft from savings? (y/n)');
  if(overdraftApproval==='y' || overdraftApproval==='Y'){
    savingsBalance = savingsBalance + checkingBalance;
    checkingBalance = 0;
    if(savingsBalance<0){
      checkingBalance = savingsBalance;
      savingsBalance = 0;
      $('#checking').find($('.balance')).html('$' + checkingBalance);
      $('#savings').find($('.balance')).html('$' + savingsBalance);
      $('#checking').find($('.balance')).css('background-color','red');
      alert('You have insufficient savings and have overdrafted your checking account.  Have you considered working for GNB to make more money?  PLEASE?  GNB loves you!');
    }
    else if(savingsBalance = 0){
      $('#checking').find($('.balance')).html('$' + checkingBalance);
      $('#savings').find($('.balance')).html('$' + savingsBalance);
      $('#checking').find($('.balance')).css('background-color','red');
      alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
    }
    else{
      $('#checking').find($('.balance')).html('$' + checkingBalance);
      $('#savings').find($('.balance')).html('$' + savingsBalance);
      $('#checking').find($('.balance')).css('background-color','red');
      alert('Thank you.  Please take your cash.  And remember, GNB loves you!');
    }
  }
  else{
    $('#checking').find($('.balance')).html('$' + checkingBalance);
    $('#checking').find($('.balance')).css('background-color','red');
    alert('You have overdrafted your account.  Fees are $1,000 per day until you attain a positive balance.  Thank you, and remember GNB loves you!');
  }
}

// Checking to see if still overdrafted after deposit
function overdraftCheck(depositAmount){
  checkingBalance = checkingBalance + depositAmount;
  if(checkingBalance>0){
    $('#checking').find($('.balance')).css('background-color','#E3E3E3');
    $('#checking').find($('.balance')).html('$' + checkingBalance);
    alert("Your balance is positive and you will no longer incur overdraft fees.  Congratulations!  GNB loves you!");
  }
  else{
    $('#checking').find($('.balance')).html('$' + checkingBalance);
    alert("You still don't have a positive balance.  Why don't you come work for GNB?  PLEASE?  GNB loves you!");
  }
}
