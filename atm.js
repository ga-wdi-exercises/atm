$(document).ready(function(){

var accountType='';
var checkBal =$(`#checking`).find('.balance').html();
var savBal =$(`#savings`).find('.balance').html();

checkAccountStatus();

function checkAccountStatus(){
  var checking = 'checking';
  var savings = 'savings';
  if(getBalance(checking)==0){
    $('#checking').addClass('zero');
  }else{
    $('#checking').removeClass('zero');
    }
  if(getBalance(savings)== 0){
    $('#savings').addClass('zero');
  }else{
    $('#savings').removeClass('zero');
    }
}
function deposit(accountType,curBal,depAmt){
  var newBalance = parseInt(curBal)+ parseInt(depAmt);
  $(`#${accountType}`).find('.balance').html(`$${newBalance}`);
  checkAccountStatus();
}

function withdraw(accountType,curBal,withdrawAmt){
  if(withdrawAmt > curBal){
    alert('You do NOT have enough money for that');
    return;
  }
  var newBalance = parseInt(curBal)- parseInt(withdrawAmt);
  $(`#${accountType}`).find('.balance').html(`$${newBalance}`);
  checkAccountStatus();
}

function getBalance(accountType){
  //gets the input from user for checking account
  var checkingInput = $(`#${accountType}`).find('input').val();
  //gets current balance value
  var checkingBalanceValue = $(`#${accountType}`).find('.balance').html();
  //remove the dollar sign for manipulation
  var checkingBalanceNumber = checkingBalanceValue.substr(1,checkingBalanceValue.length);

    return parseInt(checkingBalanceNumber);
  }

  function getAmount(accountType){
    var input = $(`#${accountType}`).find('input').val();
    return parseInt(input);
  }


  // add click function for the deposit button on checking account
  $('#checking').find('.deposit').click(function(){
    accountType = 'checking';
    var curBal = getBalance(accountType);
    var depAmt = getAmount(accountType);
    deposit(accountType,curBal, depAmt);

  });

  //add click listener to withdraw button on checking account
  $('#checking').find('.withdraw').click(function(){
    accountType = 'checking';
    var curBal = getBalance(accountType);
    var depAmt = getAmount(accountType);
    withdraw(accountType,curBal, depAmt);
  })

  // add click function for the deposit button on withdraw account
  $('#savings').find('.deposit').click(function(){
    accountType = 'savings';
    var curBal = getBalance(accountType);
    var depAmt = getAmount(accountType);
    deposit(accountType,curBal, depAmt);

  });

  //add click listener to withdraw button on withdraw account
  $('#savings').find('.withdraw').click(function(){
    accountType = 'savings';
    var curBal = getBalance(accountType);
    var withdrawAmt = getAmount(accountType);
    withdraw(accountType,curBal, withdrawAmt);
  })

});//end document ready



/*

Pseudocode
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

/*var accountType ="";

function getBalance(accountType){
  var input = $(`#${accountType}`).find('input').val();
  console.log(input);
  var balanceValue = $(`#${accountType}`).find('.balance').html();
  console.log(balanceValue);

  var balanceNumber = balanceValue.substr(1,balanceValue.length);
  console.log(balanceNumber)
  return parseInt(balanceNumber);
}

function deposit(currentBalance, depAmount){
  var newBalance = parseInt(currentBalance)+ parseInt(depAmount);
  accountType.html(`$${newBalance}`);
}
*/
