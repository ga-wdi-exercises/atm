$(document).ready(function(){

  // basic jquery testing
  // console.log("JQuery!");
  // $('body').css('background', 'red');

  //create balance variables to hold the balances of checking and savings
  var checkingBalance = parseFloat($('#checking').children('.balance').html().split('$')[1]);
  var savingsBalance = parseFloat($('#checking').children('.balance').html().split('$')[1]);

  //a variable that holds the total balance of both accounts that will come into play with overdrafting. Since both start at 0, it;s just initialized straight to 0.
  var totalBalance = 0;

  //initialize and run the function that activates the zero class when balance is 0, this should always run the first time since the balances begin at 0
  function checkIfZero() {
    if (checkingBalance == 0) {
    $('#checking').addClass("zero");
    }
    else {
      $('#checking').removeClass('zero');
    }
    if (savingsBalance == 0) {
      $('#savings').addClass("zero");
    }
    else {
      $('#savings').removeClass('zero');
    }
  }
  checkIfZero();

  //Updates the balances of both accounts with the latest values, then checks if either one is at a value of 0 and clears the input field
  function updateBalance() {
    $('#checking').children('.balance').text('$' + checkingBalance.toFixed(2));
    $('#savings').children('.balance').text('$' + savingsBalance.toFixed(2));
    checkIfZero();
    $('#checking').children('.input').val("");
    $('#savings').children('.input').val("");
  }

  //The function to deposit money. It executes in two slightly different ways depending on which account it's working with, largely just in placement of certain variables.
  function deposit(account) {
      if (account == 'checking') {
        //pull the amount to be deposited from the input field
        var depositAmount = parseFloat($('#checking').children('input').val());
        //if what was inputted isn't a number, it doesn't run past this point
        if (isNaN(depositAmount) == false) {
          //update checking and total balances
          checkingBalance = parseFloat(checkingBalance + depositAmount);
          totalBalance = parseFloat(checkingBalance + savingsBalance);
          //push the new checking balance to the html with updateBalance
          updateBalance();
        }
      }
      //doess essentially the same thing as the previous one, just to the savings side instead
      else if (account == 'savings') {
        var depositAmount = parseFloat($('#savings').children('input').val());
        if (isNaN(depositAmount) == false) {
          savingsBalance = parseFloat(savingsBalance + depositAmount);
          totalBalance = parseFloat(checkingBalance + savingsBalance);
          updateBalance();
      }
    }
  }

  //The function to withdraw money. It also includes functionality for overdrafting.
  function withdraw(account) {
    if (account == 'checking') {
      var withdrawAmount = parseFloat($('#checking').children('input').val());
      //Checks if withdrawAmount is a number, as well as if it is less than or equal to the balance. If not, it goes to the overdraft.
      if (withdrawAmount <= checkingBalance && isNaN(withdrawAmount) == false) {
        checkingBalance = parseFloat(checkingBalance - withdrawAmount);
        totalBalance = parseFloat(checkingBalance + savingsBalance);
        updateBalance();
      }
      //The overdrafting functionality, which only executes if the withdrawAmount is greater than the checkingBalance and less than the totalBalance.
      else if (withdrawAmount > checkingBalance && withdrawAmount <= totalBalance && isNaN(withdrawAmount) == false) {
        //A variable of how much needs to be overdrafted - how much larger the withdrawal amount is than the checking.
        var overdraft = parseFloat(withdrawAmount - checkingBalance);
        //Since the entirety of checking is being withdrawn, it can just be set to zero.
        checkingBalance = 0;
        //Set the new savings balance, of the initial balance minus the overdraft.
        savingsBalance = parseFloat(savingsBalance - overdraft);
        totalBalance = parseFloat(checkingBalance + savingsBalance);
        updateBalance();
      }
      //If the user tries to withdraw more than both accounts combined, display an error message
      else if (withdrawAmount > totalBalance) {
        alert("Error: insufficient funds");
        $('#checking').children('.input').val("");
      }
    }
    //Again, largely the same as the functionality for checking, just with the checking and savings variables swapped.
    if (account == 'savings') {
      var withdrawAmount = parseFloat($('#savings').children('input').val());
      if (withdrawAmount <= savingsBalance && isNaN(withdrawAmount) == false) {
        savingsBalance = parseFloat(savingsBalance - withdrawAmount);
        totalBalance = parseFloat(checkingBalance + savingsBalance);
        updateBalance();
      }
      else if (withdrawAmount > savingsBalance && withdrawAmount <= totalBalance && isNaN(withdrawAmount) == false) {
        var overdraft = parseFloat(withdrawAmount - savingsBalance);
        savingsBalance = 0;
        checkingBalance = parseFloat(checkingBalance - overdraft);
        totalBalance = parseFloat(checkingBalance + savingsBalance);
        updateBalance();
      }
      else if (withdrawAmount > totalBalance) {
        alert("Error: insufficient funds");
        $('#savings').children('.input').val("");
      }
    }
  }

  //Attach the deposit buttons with the proper Account values to the corresponding buttons.
  $('#checking').children('.deposit').click(function() {
    deposit('checking');
  });
  $('#checking').children('.withdraw').click(function() {
    withdraw('checking');
  });
  $('#savings').children('.deposit').click(function() {
    deposit('savings');
  });
  $('#savings').children('.withdraw').click(function() {
    withdraw('savings');
  });
});
