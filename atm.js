//Psuedocode
// - When user types in amount to deposit in either checking or savings, and clicks 'Deposit', amount will show up in text display box.
// - Each additional deposit will add amount into 'balance' or total for each savings and checking.
// - Conversely, When the user enters an amount and clicks 'Withdraw', the specified amount will be subtracted from the 'balance' or total.
// - If possible, convert user input to two decimal places to calculate proper currency value and display.
// - The user cannot withdraw more than the balance of each account ((wishlist: possible //overdraft protection, where if funds are available on either account to cover the full withdrawal of a potential 'overdraft', the needed amount is withdrawn)).
// - When either account balance reaches 0, red warning color will show in background of text/balance display.



$(document).ready(function(){
  console.log("I'm So Ready!");
  //Checking
  //click listener for function to add user input>
  $("#checking .deposit").on("click", updatedCheckingDeposit);
  //function for checking deposit
  function updatedCheckingDeposit (){
    //gets user numeric input from checking account deposit>
    var depositChecking = Number.parseFloat($("#checking input").val());
    console.log(depositChecking);
    //separating the "$" from the "0">
    var balanceTest1 = Number.parseFloat($("#checking .balance").text().split("$")[1]);
    console.log(balanceTest1);
    //adding
    var balanceTest2 = Number.parseFloat(depositChecking) + balanceTest1;
    console.log(balanceTest2);
    //continuing concatenating and placing value into balance field
    var checkingBalance = ("$") + (balanceTest2).toFixed(2);
    $("#checking .balance").html(checkingBalance);
    console.log(checkingBalance);
    $("#checking .input").val("");
  }
  //click listener for function to add user input>
  $("#checking .withdraw").on("click", updatedWithdrawal);
  //function for checking withdrawal
  function updatedWithdrawal (){
    //gets user numeric input from checking account deposit>
    var withdrawChecking = Number.parseFloat($("#checking input").val());
    console.log(withdrawChecking);
    //separating the "$" from the "0">
    var balanceTest1 = Number.parseFloat($("#checking .balance").text().split("$")[1]);
    console.log(balanceTest1);
    //subtracting
    var balanceTest2 = balanceTest1 - Number.parseFloat(withdrawChecking);
    console.log(balanceTest2);
    //concatenating and placing value into balance field
    //var checkingBalance = ("$") + (balanceTest2).toFixed(2);
    //$("#checking .balance").html(checkingBalance);
    //console.log(checkingBalance);
    $("#checking .input").val("");
    if (balanceTest2 < 0) {
      alert ("whoa");
    }
    else {
      $("account .balance").html(("$") + (balanceTest2).toFixed(2))
    }
//savings
  }
  //click listener for function to add user input>
  $("#savings .deposit").on("click", updatedSavingsDeposit);
  //function for savings deposit
  function updatedSavingsDeposit (){
    //gets user numeric input from savings account deposit>
    var depositSavings = Number.parseFloat($("#savings input").val());
    console.log(depositSavings);
    //separating the "$" from the "0">
    var balanceTest1 = Number.parseFloat($("#savings .balance").text().split("$")[1]);
    console.log(balanceTest1);
    //adding
    var balanceTest2 = Number.parseFloat(depositSavings) + balanceTest1;
    console.log(balanceTest2);
    //continuing concatenating and placing value into balance field
    var savingsBalance = ("$") + (balanceTest2).toFixed(2);
    $("#savings .balance").html(savingsBalance);
    console.log(savingsBalance);
    $("#savings .input").val("");
  }

  //click listener for function to add user input>
  $("#savings .withdraw").on("click", updatedWithdrawal);
  //function for savings withdrawal
  function updatedWithdrawal (){
    //gets user numeric input from savings account deposit>
    var withdrawSavings = Number.parseFloat($("#savings input").val());
    console.log(withdrawSavings);
    //separating the "$" from the "0">
    var balanceTest1 = Number.parseFloat($("#savings .balance").text().split("$")[1]);
    console.log(balanceTest1);
    //subtracting
    var balanceTest2 = balanceTest1 - Number.parseFloat(withdrawSavings);
    console.log(balanceTest2);
    //concatenating and placing value into balance field
    //var savingsBalance = ("$") + (balanceTest2).toFixed(2);
    //$("#savings .balance").html(savingsBalance);
    //console.log(savingsBalance);
    $("#savings .input").val("");

    if (balanceTest2 < 0) {
      alert ("whoa");
    }
    else {
      $("account .balance").html(("$") + (balanceTest2).toFixed(2))
    }
  }

})
