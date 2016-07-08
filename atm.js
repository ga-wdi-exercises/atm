$(document).ready(function(){
  // // console.log("I'm ready")
//  var checkingBalance = parseFloat($("#checking //.balance").html().split($)[1]);
//  var checkingInput = parseFloat($("#checking .input").val());
//  var savingsBalance = parseFloat($("#savings .balance").html().split($)[1]);
//  var savingsInput = parseFloat($("#savings .input").val());


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
//  $("body").css("background", "red");

  //Add a click listener to the checking account's "Deposit" button
  $(".deposit:first").on("click", function(evt) {
    evt.preventDefault();
    //get input amount and giving it 2 decimal places

    var inputAmount = $(".input:first").val();
    //this is a string
    var inputAmount = parseFloat(inputAmount)

    //this is a number
    //going into the html to grab a value and changing it to number
    var checkingBalance = parseFloat($("#checking .balance").html().split('$')[1]);
    console.log(typeof checkingBalance)
    var newBalance = parseFloat(checkingBalance) + parseFloat(inputAmount)
    console.log(typeof(newBalance))
    //going in to html and changing the first balance field
    // we're taking the two values and updating the balance value
    //and changing it to a number
    $(".balance:first").html('$' + newBalance);


    console.log("checking I'm working");

    $("#checking >.input").val("")
  });
  ///////////

  //CHECKING WITHDRAW
  //Add a click listener to the checking account's "Withdraw" button
  $(".withdraw:first").on("click", function(evt) {
    evt.preventDefault();
    //get input amount and giving it 2 decimal places

    var inputAmount = $(".input:first").val();
    //this is a string
    //var inputAmount = parseFloat(inputAmount)
    //this is a number
    //going into the html to grab a value and changing it to number
    var checkingBalance = parseFloat($("#checking .balance").html().split('$')[1]);
    var actualWithdrawTotal = (checkingBalance - parseFloat(inputAmount)).toFixed(2)
    console.log(actualWithdrawTotal)

    // If new balance is nonnegative, then display balance
    if(parseFloat(actualWithdrawTotal) >= 0){
      $("#checking > .balance").html("$" + actualWithdrawTotal);
    // else don't update the total; the balance is negative
    }else {
      alert("insufficient funds")
    }

    console.log("Checking balance " + checkingBalance)
    console.log(inputAmount)
    // Update balance with checking balance - input amt
    //$(".balance:first").html("$" + (parseFloat(checkingBalance) - parseFloat(inputAmount)).toFixed(2));

    console.log("I'm working");
    // Clears the input box
    $("#checking >.input").val("")

  });


  /////////SAVINGS DEPOSIT
  //Add a click listener to the saving account's "Deposit" button
  $("#savings .deposit").on("click", function(evt) {
    evt.preventDefault();
    //get input amount and giving it 2 decimal places

    var inputAmountSavings = $("#savings .input").val();
    //this is a string
    var inputAmountSavings = parseFloat(inputAmountSavings).toFixed(2)
    //this is a number
    //going into the html to grab a value and changing it to number
    var savingsBalance = parseFloat($("#savings .balance").html().split('$')[1]);
    //going in to html and changing the first balance field
    // we're taking the two values and updating the balance value
    //and changing it to a number
    $("#savings .balance").html("$" + (parseFloat(savingsBalance) + parseFloat(inputAmountSavings)).toFixed(2));

    console.log("savings I'm working");

    $("#checkin >.input").val("")
  });
  ///////////
//SAVINGS WITHDRAW
//Add a click listener to the checking account's "Withdraw" button
$("#savings .withdraw").on("click", function(evt) {
  evt.preventDefault();
  //get input amount and giving it 2 decimal places

  var inputAmountSavings = $("#savings .input").val();
  //this is a string
  //var inputAmount = parseFloat(inputAmount)
  //this is a number
  //going into the html to grab a value and changing it to number
  var savingsBalance = parseFloat($("#savings .balance").html().split('$')[1]);
  console.log("Savings Balance type " + typeof(savingsBalance));
  var actualWithdrawTotal = (parseFloat(savingsBalance) - parseFloat(inputAmountSavings));

  console.log("Final actualWithdrawTotal" + actualWithdrawTotal)

  if(parseFloat(actualWithdrawTotal) >= 0){
    $("#savings > .balance").html("$" + actualWithdrawTotal);

    //don't update the total if negative balance
  }else {
    alert("insufficient funds")
  }
  //going in to html and changing the first balance field
  // we're taking the two values and updating the balance value
  //and changing it to a number

    $("#checkin >.input").val("")
});




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
