$(document).ready(function(){
  // // console.log("I'm ready")
  // var checkingBalance = $("#checking .balance");
  // var checkingInput = $("#checking .input");
  // var checkingDeposit = $("#checking .deposit");
  // var checkingWithdrawal = $("#checking .withdraw");
  // var savingsBalance = $("#savings .balance");
  // var savingsInput = $("#savings .input");
  // var savingsDeposit = $("#savings .deposit");
  // var savingsWithdrawal = $("#savings .withdraw");

  //var floatInputAmount = parseFloat(inputAmount).toFixed(2);
  //console.log(typeof(floatInputAmount));
  // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
  //Checking deposits
  //1. Get entry input from users
  //2. click on deposit, add to total
  //3.

  //Checking withdraws
  //3. Get entry from users
  //4. click on withdraw, subtracts total
  //5. if total < 0 , reject transaction
  //6. if total = 0, change color to red

  //Test jQuery is working
  //Make the <body>'s background color turn red
  $("body").css("background", "red");

  // //Add a click listener to the checking account's "Deposit" button
  $(".deposit:first").on("click", function(evt) {
    evt.preventDefault();

    var inputAmount = $(".input:first").val();
    var inputAmount = parseFloat(inputAmount).toFixed(2)
    $(".balance:first").html("$" + inputAmount);

    console.log("I'm working");

  })
  //When you click the button it should console.log("hello")
  // On clicking "Deposit", it should get the user input
  //Just console.log it

  /*You can save some time by hard-coding a value into the input box: <input value="something" />. That way you don't need to type stuff in all the time to test it.*/

  //On clicking "Deposit", it should update the "balance" with the user input


  //Just make the user input show up. Don't worry about actually keeping track //of a balance yet.

  //On "Deposit", it should get the current "balance"

  /*How can you get the content of the "balance" element?
  The content has a $ at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
  On "Deposit", it updates the balance
  Now add the user input to the balance, and make it show up in the "balance" element
  On "Withdraw", it updates the balance
  Follow the same steps as before, except you're subtracting instead of adding
  Refactor the existing code
  Challenge: Try to have no function() that's longer than 5 lines. (Sandi Metz's Rule 2)
  ...then follow the same series of commits, but for the savings account.
  */

});
