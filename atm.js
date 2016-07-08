$(document).ready(function(){
  // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

  console.log("Working");



  //Turn inputs into integers
  //listen to click and then add to balance
  //add inputs to total balance
  //Make sure that the inputs are added to eachother under the hood
  //if positive change background color to green( focus on negative)
  //clear input field

  //Create variables to call on savingsAccount, account balance, user input, checking add, and checking subtract)

  var savingBalance = $("#savings .balance").html();
  var savingInput = $("#savings .input");
  var savingAdd = $("#savings .deposit");
  var savingSubtract = $("#savings .withdraw");

  //Create variables to call on checkingAccount, account balance, user input, checking add, and checking subtract)


  var checkingBalance = $("#checking .balance").html();
  var checkingInput = $("#checking .input");
  var checkingAdd = $("#checking .deposit");
  var checkingSubtract =  $("#checking .withdraw");

//on click button events for checkingAccount
  checkingAdd.on("click", checkingDeposit)
  checkingSubtract.on("click", checkingWithdraw)
//on click button events for savingsAccount
  savingAdd.on("click", savingDeposit)
  savingSubtract.on("click", savingWithdraw)

//function to get current checking balance
    function getCheckingBalance () {
      // checkingBalance refers to displayed value of checking account
      // e.g., '$0', as a string
      var checkingBalance = $("#checking .balance").html();

      // CheckingBalance is just the numerical portion as a string
      // e.g., '0'
      checkingBalance = checkingBalance.split("$")[1];

      checkingBalance = parseFloat(checkingBalance);
      return checkingBalance;
    }
//function to get current savings balance
    function getSavingBalance () {
      // savingBalance refers to displayed value of checking account
      // e.g., '$0', as a string
      var savingBalance = $("#savings .balance").html();

      // savingBalance is just the numerical portion as a string
      // e.g., '0'
      savingBalance = savingBalance.split("$")[1];

      savingBalance = parseFloat(savingBalance);
      return savingBalance;
    }
//function to create checking withdraw
    function checkingWithdraw () {
      var balance = getCheckingBalance();
      var withdrawInput = getCheckingInput();
      var ctotal = balance - withdrawInput;
      displayCheckingTotal(ctotal);
      $("#checking .input").val("")
      console.log(parseInt(ctotal));
      if (parseInt(ctotal) < 1) {
        $("#checking").addClass("zero")
      } else {
        $("#checking").removeClass("zero")
      }

    }
//function to create saving withdraw
    function savingWithdraw () {
      var balance = getSavingBalance();
      var withdrawInput = getSavingInput();
      var total = balance - withdrawInput;
      displaySavingTotal(total);
      $("#savings .input").val("")
    //color functionality
      if (parseInt(total) < 1) {
        $("#savings").addClass("zero")
      } else {
        $("#savings").removeClass("zero")
      }
    }
//function to create checking deposits
    function checkingDeposit () {
      var balance = getCheckingBalance();
      var depositInput = getCheckingInput();
      var ctotal = balance + depositInput;
      displayCheckingTotal(ctotal)
      $("#checking .input").val("")
      //color functionality
      if (parseInt(ctotal) < 1) {
        $("#checking").addClass("zero")
      } else {
        $("#checking").removeClass("zero")
      }
    }
//function to create saving deposits
    function savingDeposit () {
      var balance = getSavingBalance();
      var depositInput = getSavingInput();
      var total = balance + depositInput;
      displaySavingTotal(total)
      $("#savings .input").val("")
      //color functionality
      if (parseInt(total) < 1) {
        $("#savings").addClass("zero")
      } else {
        $("#savings").removeClass("zero")
      }
    }
//function to display the checking total
    function displayCheckingTotal (ctotal) {
      //adds $ plus the new ctotal - $0.00
      var stringTotal = "$" + ctotal.toFixed(2);
      $("#checking .balance").html(stringTotal);
    }
//function to display the savings total
    function displaySavingTotal (total) {
      //adds $ plus the new total - $0.00
      var stringTotal = "$" + total.toFixed(2);
      $("#savings .balance").html(stringTotal);
    }
//function to get checking input
    function getCheckingInput () {
      //variable calls on input box and listens for user value
      var checkingInput = $("#checking .input").val();
      checkingInput = parseFloat(checkingInput);
      return checkingInput;
    }
//function to get saving input
    function getSavingInput () {
      //variable calls on input box and listens for the user value
      var savingInput = $("#savings .input").val();
      savingInput = parseFloat(savingInput);
      return savingInput;
    }

  });

































  // var savingsAccount = $("#savings");







  //Create deposit functionalitiy for id= "savings"
  //Turn inputs into integers
  //add inputs to total balance
  //make sure inputs are added to eachother under the hood
  //if positive change background color to green

  //Create withdraw functionality for id="checking"
  //Turn strings into integers
  //listen to click and then add to balance
  //make sure that the inputs are compounded and subtract from the total balance continuously
  //make sure that you can not withdraw more than is avaialable
  //if negative change background color to red

  //Create withdraw functionality for id="saving"
  //Turn strings into integers
  //make sure that the inputs are compounded and subtract from the total balance continuously
  //make sure that you can not withdraw more than is avaialable
  //if red change background color to red
