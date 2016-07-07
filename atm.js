$(document).ready(function(){
  // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

  console.log("Working");

  //Create deposit functionalitiy for id= "checking"


  //Turn inputs into integers
  //listen to click and then add to balance, eventListeners)
  //add inputs total balance
  //Make sure that the inputs are added to eachother under the hood
  //if positive change background color to green( focus on negative)
  //clear input field

  //Create variables to call on checkingAccount, account balance, user input, checking add, and checking subtract)

  var savingBalance = $("#savings .balance").html();
  var savingInput = $("#savings .input");
  var savingAdd = $("#savings .deposit");
  var savingSubtract = $("#savings .withdraw");


  var checkingBalance = $("#checking .balance").html();
  var checkingInput = $("#checking .input");
  var checkingAdd = $("#checking .deposit");
  var checkingSubtract =  $("#checking .withdraw");



  checkingAdd.on("click", checkingDeposit)
  checkingSubtract.on("click", checkingWithdraw)

  savingAdd.on("click", savingDeposit)
  savingSubtract.on("click", savingWithdraw)


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

    function checkingWithdraw () {
      var balance = getCheckingBalance();
      var withdrawInput = getCheckingInput();
      var total = balance - withdrawInput;
      displayCheckingTotal(total);
      $("#checking .input").val("")
      console.log(parseInt(total));
      if (parseInt(total) < 1) {
        $("#checking").addClass("zero")
      } else {
        $("#checking").removeClass("zero")
      }

    }

    function savingWithdraw () {
      var balance = getSavingBalance();
      var withdrawInput = getSavingInput();
      var total = balance - withdrawInput;
      displaySavingTotal(total);
      $("#savings .input").val("")
      if (parseInt(total) < 1) {
        $("#checking").addClass("zero")
      } else {
        $("#checking").removeClass("zero")
      }
    }



    function checkingDeposit () {
      var balance = getCheckingBalance();
      var depositInput = getCheckingInput();
      var total = balance + depositInput;
      displayCheckingTotal(total)
      $("#checking .input").val("")
    }

    function savingDeposit () {
      var balance = getSavingBalance();
      var depositInput = getSavingInput();
      var total = balance + depositInput;
      displaySavingTotal(total)
      $("#savings .input").val("")
    }


    function displayCheckingTotal (total) {
      var stringTotal = "$" + total.toFixed(2);
      $("#checking .balance").html(stringTotal);
    }

    function displaySavingTotal (total) {
      var stringTotal = "$" + total.toFixed(2);
      $("#savings .balance").html(stringTotal);
    }

    function getCheckingInput () {
      var checkingInput = $("#checking .input").val();
      checkingInput = parseFloat(checkingInput);
      return checkingInput;
    }

    function getSavingInput () {
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
