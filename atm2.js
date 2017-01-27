$(document).ready(function(){

var accountType='';

function deposit(accountType,curBal,depAmt){
  var newBalance = parseInt(curBal)+ parseInt(depAmt);
  $(`#${accountType}`).find('.balance').html(`$${newBalance}`);
}

function withdraw(accountType,curBal,withdrawAmt){
  var newBalance = parseInt(curBal)- parseInt(withdrawAmt);
  $(`#${accountType}`).find('.balance').html(`$${newBalance}`);
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
