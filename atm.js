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
//click listener for function to add user input
  $(".deposit").on("click", updatedBalance);
//function for checking deposit
  function updatedBalance (){
//gets user numeric input from checking account deposit
    var depositChecking = Number.parseFloat($("#checking input").val());
    console.log(depositChecking);
    //var floatNum = Number.parseFloat(depositChecking);
    //console.log(floatNum);
    var balanceTest1 = Number.parseFloat($("#checking .balance").text().split("$")[1]);
    console.log(balanceTest1);
    var balanceTest2 = Number.parseFloat(depositChecking) + balanceTest1;
    console.log(balanceTest2);
    //var test = parseFloat(balanceTest.split("$")[1]);
    var checkingBalance = ("$") + (balanceTest2).toFixed(2);

    $("#checking .balance").html(checkingBalance);
    console.log(checkingBalance);
  }






})
