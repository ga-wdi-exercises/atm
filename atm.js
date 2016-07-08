//Checking variable
var checkingInput = $('#checking .input');
var checkingBalance = $('#checking .balance');
var checkingDeposit = $('#checking .deposit');;
var checkingWithdraw = ('#checking .withdraw');

//Savings variable
var savingsInput = $('#savings .input');
var savingsBalance = $('#savings .balance');
var savingsDeposit = $('#savings .deposit');
var savingsWithdraw = $('#savings .withdraw');

$(document).ready(function(){
  //Turn background red
  //$('body').css("background", "red");
  //Add a click listener to the **checking account's** "Deposit" button
  console.log("hola");
  //User input a dollar amount to deposit money to checking

  //Checking deposit button adds user input
  $(checkingDeposit).on("click", function(evt) {
    //Prevent default of submit button from refreshing page
    evt.preventDefault();
    console.log("Checking deposit button pressed");

    currentChecking = parseFloat($(checkingBalance).html().split('$')[1]);
    console.log("Current Checking Amount is a type of: " + typeof(currentChecking));

    //update amount
    checkingInputVal = parseFloat(checkingInput.val());
    console.log("Checking Input Value is a type of: " + typeof checkingInputVal);
    $('#checking .balance').html("$" + (checkingInputVal + currentChecking));
  });

  $(checkingWithdraw).on("click", function(evt) {
    //Prevent default of submit button from refreshing page
    evt.preventDefault();
    console.log("Checking withdraw button pressed");

    currentChecking = parseFloat($(checkingBalance).html().split('$')[1]);
    console.log("Current Checking Amount is a type of: " + typeof(currentChecking));

    //update amount
    checkingInputVal = parseFloat(checkingInput.val());
    console.log("Checking Input Value is a type of: " + typeof checkingInputVal);

    if(checkingBalance > 0) {
      $('#checking .balance').html("$" + (currentChecking - checkingInputVal));
    }
    else {
      $('.balance').css("background", "red");
    }

  });
  //Checking Withdraw button adds user input

  //input a dollar amound to withdraw money for checking
  //update amount
  //if User withdraw amount > account balance
  //reject transaction
  //color of bank account green for positive value
  //red for 0 (or less for bonus)

  //User input a dollar amount to deposit money to savings
  //Make sure input field is clear
  //update amount
  //use 2 decimals (parseFloat())
  //input a dollar amound to withdraw money to savings
  //update amount
  //if User withdraw amount > account balance
  //reject transaction
  //color of bank account green for positive value
  //red for 0 (or less for bonus)
});
