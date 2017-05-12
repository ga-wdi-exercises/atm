$(document).ready(function(){

  // Store checking account balance in variable
    var accountBalance = 0

// DEPOSIT MONEY FROM CHECKING

  // select a deposit's classes from HTML
    var checkingDeposit = $("#checking .deposit")

  // set an event listener and create an anonymous function to the deposit class
    checkingDeposit.on("click", function(){

  // create a variable that stores checkings input's value
    var checkingUserInput = $("#checking .input").val()
    console.log("This is the user input:" + checkingUserInput)

  // create a variable that stores "checking"'s balance(in this exercise = $0)
    var checkingOutputBalance = $("#checking .balance")

  // when user inputs a number and clicks a deposit add that number to our checkingBalance($0)
    accountBalance += parseInt(checkingUserInput)
    console.log("This is the checking balance " + accountBalance)

  // display "$" + "checkingBalance" ($0, or whatever user inputs in our balance ("outputBalance"))
    checkingOutputBalance.text("$" + accountBalance);
 })


 // WITHDRAW MONEY FROM CHECKING

  // select a withdraw's class from HTML
    var checkingWithdraw = $("#checking .withdraw")
    var checkingOutputBalance = $("#checking .balance")

  // set an event listener and create an anonymous function to the withdraw class
    checkingWithdraw.on("click", function() {

  // create a variable that stores checkings input's value
    var checkingUserInput = $("#checking .input").val()
      console.log("This is the user input:" + checkingUserInput);

  // set the operation for withdraw
    accountBalance -= parseInt(checkingUserInput)
      console.log("This is the checking balance after withdraw: " + accountBalance);

    checkingOutputBalance.text("$" + accountBalance);

// If account balance goes negative reset the balance to "$0"
  if (accountBalance < 0) {
    $("#checking .balance").addClass("zero")
    $("#checking .balance").text("$0")
    alert("Your transaction has not been completed");
  }
 })

  // DEPOSIT MONEY FROM SAVINGS

  var savingsDeposit = $("#savings .deposit")
  var savingsOutputBalance = $("#savings .balance")

  savingsDeposit.on("click", function() {

  var savingsUserInput = $("#savings .input").val()
  console.log("This is the user input:" + savingsUserInput);

  accountBalance += parseInt(savingsUserInput)
  console.log("This is the savings balance:" + accountBalance);

  savingsOutputBalance.text("$" + accountBalance);

 })


// WITHDRAW MONEY FROM SAVINGS

  var savingsWithdraw = $("#savings .withdraw")
  var savingsOutputBalance = $("#savings .balance")

  savingsWithdraw.on("click", function() {

  var savingsUserInput = $("#savings .input").val()
   console.log("This is the user input:" + savingsUserInput);

  accountBalance -= parseInt(savingsUserInput)
   console.log("This is the savings balance:" + accountBalance);

   savingsOutputBalance.text("$" + accountBalance);

   if(accountBalance < 0) {
        $('#savings .balance').addClass('zero')
        $('#savings .balance').text("$0");
        alert("The transaction has not been completed");
    }
 })

});
