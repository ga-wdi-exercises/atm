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
  console.log("--- Initial Information ---");

  var checkingBalance = $("#checking .balance").html();
  console.log("checkingBalance " + checkingBalance);
  var checkingInput = $("#checking .input");
  console.log("checkingInput" + checkingInput);
  var checkingAdd = $("#checking .deposit");
  console.log("checkingAdd " + checkingAdd);
  var checkingSubtract =  $("#checking .withdraw");
  console.log(checkingSubtract);

  checkingAdd.on("click", checkingDeposit)
  checkingSubtract.on("click", checkingWithdraw)

  function checkingWithdraw () {
    var balance = getBalance();
    



  }




  function checkingDeposit () {
    var balance = getBalance();
    console.log("BALANCE: " +balance);
    var depositInput = getCheckingInput();
    console.log("DEPOSITINPUT" + depositInput);
    var total = balance + depositInput;
    console.log(total);
    displayCheckingTotal(total)
    $("#checking .input").val("")
  }


  function displayCheckingTotal (total) {
    var stringTotal = "$" + total.toFixed(2);
    $("#checking .balance").html(stringTotal);
    console.log(stringTotal);
  }

  function getBalance () {
    // checkingBalance refers to displayed value of checking account
    // e.g., '$0', as a string
    var checkingBalance = $("#checking .balance").html();

    // CheckingBalance is just the numerical portion as a string
    // e.g., '0'
    checkingBalance = checkingBalance.split("$")[1];

    console.log(checkingBalance);
    checkingBalance = parseFloat(checkingBalance);
    return checkingBalance;
  }

  function getCheckingInput () {
    var checkingInput = $("#checking .input").val();
    checkingInput = parseFloat(checkingInput);
    console.log(checkingInput);
    return checkingInput;
  }

  function getWithdrawInput() {


  }







  //
  //   var checkingInput = $("#checking .input").val()
  //
  // checkingAdd.on("click", function() {
  //
  // var newTotal = checkingBalance + checkingAdd;
  //  console.log(checkingBalance);

  // })


});







//
// checkingAdd.on("click", function() {
//   var checkingBalance = checkingBalance.split("$")[1];
//
//   console.log(checkingBalance);
//
//
//
//
// }

































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
