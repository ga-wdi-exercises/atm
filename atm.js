$(document).ready(function(){

  // deposit money using deposit button

  $("#depositCheckingButton").on("click", function(){  //Added an event listener to Deposit Checking Balance
    console.log("I clicked deposit"); // Making sure my event has fired
    var checkingInput = parseInt($("#checkingInput").val()) //Setting up a variable for a Deposit
    var checkingBalance = $("#checking_balance").text() //Setting up the html text to read the Checking Balance Total
    checkingBalance = parseInt(checkingBalance.replace("$", "")) //Removing the Dollar Sign from the HTML so that we can manipulate the Checking Balance as an interger
    var newCheckingBalance = checkingInput + checkingBalance //
    console.log(newCheckingBalance);
    $("#checking_balance").text("$" + newCheckingBalance)
  })
  $("#withdrawCheckingButton").on("click", function(){  //Added an event listener to Deposit Checking Balance
    console.log("I clicked withdraw"); // Making sure my event has fired
    var checkingInput = parseInt($("#checkingInput").val()) //Setting up a variable for a Deposit
    var checkingBalance = $("#checking_balance").text() //Setting up the html text to read the Checking Balance Total
    checkingBalance = parseInt(checkingBalance.replace("$", "")) //Removing the Dollar Sign from the HTML so that we can manipulate the Checking Balance as an interger
    var newCheckingBalance = checkingBalance - checkingInput //
    console.log(newCheckingBalance);
    if ( newCheckingBalance < 0 ) {
    alert:("Innsufficent Funds");
  } else {
    $("#checking_balance").text("$" + newCheckingBalance);
  }
  })

//*********************************
// Saving's Portion
//*********************************

  $("#depositSavingButton").on("click", function(){  //Added an event listener to Deposit Saving Balance
    console.log("I clicked deposit"); // Making sure my event has fired
    var savingInput = parseInt($("#savingInput").val()) //Setting up a variable for a Deposit
    var savingBalance = $("#saving_balance").text() //Setting up the html text to read the Saving Balance Total
    savingBalance = parseInt(savingBalance.replace("$", "")) //Removing the Dollar Sign from the HTML so that we can manipulate the Saving Balance as an interger
    var newSavingBalance = savingInput + savingBalance //
    console.log(newSavingBalance);
    $("#saving_balance").text("$" + newSavingBalance)
  })
  $("#withdrawSavingButton").on("click", function(){  //Added an event listener to Deposit Saving Balance
    console.log("I clicked withdraw"); // Making sure my event has fired
    var savingInput = parseInt($("#savingInput").val()) //Setting up a variable for a Deposit
    var savingBalance = $("#saving_balance").text() //Setting up the html text to read the Saving Balance Total
    savingBalance = parseInt(savingBalance.replace("$", "")) //Removing the Dollar Sign from the HTML so that we can manipulate the Saving Balance as an interger
    var newSavingBalance = savingBalance - savingInput //
    console.log(newSavingBalance);
    if ( newSavingBalance < 0 ) {
    alert:("Innsufficent Funds");
  } else {
    $("#saving_balance").text("$" + newSavingBalance)
  }
  })


})
