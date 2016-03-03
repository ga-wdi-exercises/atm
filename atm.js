//checking
var checkingDepoButt = $("#checking_deposit")
var checkingWithdrawButt = $("#checking_withdraw")
var checkingInput = $("#checking_amount")
var checkingBalance = $("#checking_balance")
var checkingTotal = 0
//savings
var savingsDepoButton = $("#savings_deposit")
var savingsWithdrawButt = $("#savings_withdraw")
var savingsInput = $("#savings_amount")
var savingsBalance = $("#savings_balance")
var savingsTotal = 0


// enter number in the text field
//make the deposit button work
//transfer number from field to the balance area.
checkingDepoButt.click(function(){
  checkingTotal += parseFloat(checkingInput.val());
  checkingBalance.html(checkingTotal); // this line is putting in the checkingtotal value as an innerHTML for checkingBalance
});

//withdraw amount from the checking account
checkingWithdrawButt.click(function(){

  // if the user tries to make a withdrawl greater than their balance
  if (checkingBalance.html() < checkingInput.val() ) {
    checkingBalance.addClass("zero");
    alert("$$Ain't got no monay$$")
  }
  // otherwise, if the balance is greater than the input, let them withdraw
  else {
    // this code does not execture if the blance is less than input
    checkingTotal -= parseFloat(checkingInput.val());
    checkingBalance.html(checkingTotal);
  }

});

savingsDepoButton.click(function(){
  savingsTotal += parseFloat(savingsInput.val());
  savingsBalance.html(savingsTotal);
});

//withdraw amount from the savings account
savingsWithdrawButt.click(function(){
  //this is comparing the amount between balance and input
  if (savingsBalance.html() < savingsInput.val() ) {
    savingsBalance.addClass("zero");
    alert("$$Ain't got no monay$$");
  }
  
  else
  //this is withdrawing amount
  savingsTotal -= parseFloat(savingsInput.val());
  savingsBalance.html(savingsTotal);
});
