
$(document).ready(function(){
// $('body').css('background','red');--jquery test
//get the number displayed in the balance field
var checkingBalance = $('#checking').find('.balance');
// console.log(checkingBalance);


function getCheckingBalance() {
  //gets the input from user for checking
  var checkingInput = $('#checking').find('input').val();
  //gets current balance value
  var checkingBalanceValue = $('#checking').find('.balance').html();
  //remove the dollar sign for manipulation
  var checkingBalanceNumber = checkingBalanceValue.substr(1,checkingBalanceValue.length);

  return parseInt(checkingBalanceNumber);
}

function checkingInput() {
  var checkingInput = $('#checking').find('input').val();

  return parseInt(checkingInput);
}

function depositChecking(currentBalance, depositAmount){
  var newBalance = parseInt(currentBalance)+ parseInt(depositAmount);
  checkingBalance.html(`$${newBalance}`);
}

function withdrawChecking(currentBalance, withdrawalAmount){
  var newBalance = parseInt(currentBalance)-parseInt(withdrawalAmount);
  checkingBalance.html(`$${newBalance}`);
}

// add click function for the deposit button on checking account
$('#checking').find('.deposit').click(function(){
    depositChecking(getCheckingBalance(),checkingInput());

});

//add click listener to withdraw button and call 
$('#checking').find('.withdraw').click(function(){
  withdrawChecking(getCheckingBalance(),checkingInput());
})






});


/*
-get amount of the bank account
-DONE  validate the amount from user, - make sure its a number (typeOf)
- DONE get the value of the number inside the box of checking -- validate that number against balance
- make sure its a number (typeOf)
-when deposit is presssed add that number to the number in the box click event listener
- add value to the display

-when withdraw is pressed subtract that nmber from the number in the box
- get the value of the number inside the box of checking -- validate that number
- make sure its a number (typeOf)
-when deposit is presssed subtract that number to the number in the box click event listener
- update display
-
*/






/*
function depositChecking() {

  var checkingInput = $('#checking').find('input').val();
  var checkingBalanceValue = $('#checking').find('.balance').html();
  var checkingBalanceNumber = checkingBalanceValue.substr(1,checkingBalanceValue.length);
}

function withdrawChecking() {
  var checkingInput = $('#checking').find('input').val();
  var checkingBalanceValue = $('#checking').find('.balance').html();
  var checkingBalanceNumber = checkingBalanceValue.substr(1,checkingBalanceValue.length);
  var newBalance = parseInt(currentBalance)+ parseInt(depositAmount);
  checkingBalance.html(`$${newBalance}`);
}
*/
