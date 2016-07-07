//Psuedocode
// - When user types in amount to deposit in either checking or savings, and clicks 'Deposit', amount will show up in text display box.
// - Each additional deposit will add amount into 'balance' or total for each savings and checking.
// - Conversely, When the user enters an amount and clicks 'Withdraw', the specified amount will be subtracted from the 'balance' or total.
// - If possible, convert user input to two decimal places to calculate proper currency value and display.
// - The user cannot withdraw more than the balance of each account ((wishlist: possible //overdraft protection, where if funds are available on either account to cover the full withdrawal of a potential 'overdraft', the needed amount is withdrawn)).
// - When either account balance reaches 0, red warning color will show in background of text/balance display.


//Checking deposit
$(document).ready(function(){
  console.log("I'm So Ready!");

  $(".deposit").on("click", updatedBalance);

  function updatedBalance (){

    var depositChecking = parseInt($("#checking input").val());
    //var floatNum = parseFloat(depositChecking).toFixed(2);
    var balanceTest = parseInt($("#checking .balance").text().split("$")[1]);
    //var test = parseFloat(balanceTest.split("$")[1]);
    var checkingBalance = ("$") + (depositChecking + balanceTest);
    $(".checking .balance").text(checkingBalance);
     console.log(updatedBalance);

  }


})
