$(document).ready(function(){

var accountObj = { //User's Account info
  'checking': 0,
  'checkingID': 0,
  'savings': 0,
  'savingsID': 1
};
//var savingsBalance = 0;
//var checkingBalance = 0;

  //Deposit money into Checking Account
  $("#checking .deposit").on('click', function (evt) {
    evt.preventDefault();
    var entry = Number($("#checking .input").val()); //Capture user entry, turns it into a number
    accountObj.checking += entry; //Updates checkingBalance variable to hold for future
    updateTotals();  //Updates the account totals

  })

  //Deposit money into Savings Account
  $("#savings .deposit").on('click', function (evt) {
    evt.preventDefault();
    var entry = Number($("#savings .input").val()); //Capture user entry, turns it into a number
    accountObj.savings += entry; //Updates savingsBalance variable to hold for future
    updateTotals();  //Updates the account totals

  })

  //Withdraw from checking account

  $("#checking .withdraw").on('click', function (evt) {
    evt.preventDefault();
    withdraw(accountObj.checkingID, Number($(this).parent().children('.input').val())); // Sends the checking acc id and user entry to withdraw function

  })

  //Withdraw from savings account

  $("#savings .withdraw").on('click', function (evt) {
    evt.preventDefault();
    withdraw(accountObj.savingsID, Number($(this).parent().children('.input').val())); // Sends the savings acc id and user entry to withdraw function
  })

//-------Supporting Functions-------

  function updateTotals () {
    $('#checking .balance').text("$" + accountObj.checking); //Updates HTML with entry + balance
    $('#checking .balance').val(accountObj.checking); //Updates Value of bank account with entry
    $('#savings .balance').text("$" + accountObj.savings); //Updates HTML with entry + balance
    $('#savings .balance').val(accountObj.savings); //Updates Value of bank account with entry
  }

  function withdraw(whichAccount) {

    var accounts = [accountObj.checking,accountObj.savings];
    var other;

    if (whichAccount === 0) {
      other = 1;
    }
    else {
      other = 0;
    }

    var entry = Number($("#savings .input").val()); //Capture user entry, turns it into a number

    if (entry > accounts[whichAccount]) { // Overdraw check

      if (entry <= accountObj.checking + accountObj.savings){ //Does this overdraw both accounts?
        entry -= accounts[whichAccount]; //subtract account from requested withdraw account
        accounts[whichAccount] = 0; //set overdrawn account to 0
        accounts[other] -= entry; //Subtract remainder from other account

        //Update account variables
        subTotals();
        updateTotals(); //Updates the account totals
        return;
      }
      else {
        alert('You have entered a total which overdraws your overall balance from both accounts. Please try again.');
      }
    }

    else {
      accounts[whichAccount] -= entry;  //Updates account balance variable to hold for future
      subTotals();
      updateTotals(); //Updates the account totals
    }

    function subTotals() {
      accountObj.checking = accounts[0];
      accountObj.savings = accounts[1];
    }
  }


});
