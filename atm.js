$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var savingsBalance = 0;
var checkingBalance = 0;

console.log("asfd");

  //Deposit money into Checking Account
  $("#checking .deposit").on('click', function (evt) {
    evt.preventDefault();

    var entry = Number($("#checking .input").val()); //Capture user entry, turns it into a number
    checkingBalance += entry; //Updates checkingBalance variable to hold for future

    $('#checking .balance').text("$" + checkingBalance); //Updates HTML with entry + balance
    $('#checking .balance').val(checkingBalance); //Updates Value of bank account with entry

  })

  //Deposit money into Savings Account
  $("#savings .deposit").on('click', function (evt) {
    evt.preventDefault();

    var entry = Number($("#savings .input").val()); //Capture user entry, turns it into a number
    savingsBalance += entry; //Updates savingsBalance variable to hold for future

    $('#savings .balance').text("$" + savingsBalance); //Updates HTML with entry + balance
    $('#savings .balance').val(savingsBalance); //Updates Value of bank account with entry

  })

  //Withdraw from checking account

  $("#checking .withdraw").on('click', function (evt) {
    evt.preventDefault();

    var entry = Number($("#checking .input").val()); //Capture user entry, turns it into a number
    checkingBalance -= entry; //Updates checkingBalance variable to hold for future

    $('#checking .balance').text("$" + checkingBalance); //Updates HTML with entry + balance
    $('#checking .balance').val(checkingBalance); //Updates Value of bank account with entry

  })

  //Withdraw from savings account

  $("#savings .withdraw").on('click', function (evt) {
    evt.preventDefault();

    var entry = Number($("#savings .input").val()); //Capture user entry, turns it into a number
    savingsBalance -= entry; //Updates checkingBalance variable to hold for future

    $('#savings .balance').text("$" + savingsBalance); //Updates HTML with entry + balance
    $('#savings .balance').val(savingsBalance); //Updates Value of bank account with entry

  })



});
