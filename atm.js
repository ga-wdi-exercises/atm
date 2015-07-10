$(document).ready(function(){

  var checkingDepositButton = $("#checkingDeposit");
  var checkingWithdrawButton = $("#checkingWithdraw");
  var checkingBalance = $("#checkingBalance");
  var checkingRunningBalance = 0;
  var checkingEnterAnAmount = $("#checkingEnterAnAmount");

  $("#checkingDepositButton").on("click", function(){
    var userInput = parseFloat(checkingEnterAnAmount.val());
    checkingRunningBalance = checkingRunningBalance + userInput;
    $("#checkingBalance").text("$" + checkingRunningBalance)
    console.log(checkingEnterAnAmount.val());
  });

  $("#checkingWithdrawButton").on("click",function(){
    var userInput = parseFloat(checkingEnterAnAmount.val());
    console.log(checkingEnterAnAmount.val());
    // var newTotalBalance = checkingBalance = savingBalance
    if (userInput <= checkingRunningBalance){
      checkingRunningBalance = checkingRunningBalance - userInput;
      $("#checkingBalance").text("$" + checkingRunningBalance)
    }
    else {
    // ((newTotalBalance - userInput) > 0){
    // //     var overDraft = userInput - checkingBalance
    // //     $("#checkingBalance").text("$0")
    // //     var newSavingsBalance = "$" + (savingsBalance - overDraft)
    // //     $("#savingsBalance").text(newSavingsBalance)
        alert("You have insufficient funds.");
    }
  });

var savingDepositButton = $("#savingDeposit");
var savingWithdrawButton = $("#savingWithraw");
var savingBalance = $("#savingBalance");
var savingRunningBalance = 0;
var savingEnterAnAmount = $("#savingEnterAnAmount")

  $("#savingDepositButton").on("click", function(){
    var userInput = parseFloat(savingEnterAnAmount.val());
    savingRunningBalance = savingRunningBalance + userInput;
    $("#savingBalance").text("$" + savingRunningBalance)
    console.log(savingEnterAnAmount.val());
  });

  $("#savingWithdrawButton").on("click",function(){
    var userInput = parseFloat(savingEnterAnAmount.val());
    console.log(savingEnterAnAmount.val());
    if (userInput <= savingRunningBalance){
      savingRunningBalance = savingRunningBalance - userInput;
      $("#savingBalance").text("$" + savingRunningBalance)
    }
    else {
      alert("You have insufficient funds.");
    }


  });
});

// [x] Step 1
// i want to check my checking balance
// i want to desposit money
// i will enter the amount i want to deposit
// and press a deposit button so that it takes it
// i want to see my updated balance
//
// [X] Step 2
// [x]balance cant be less
// [x]user types in more money in enter an amount
// // ignore the user input with a if statement
// if userinput > checkingBalance
// subtract user input from balance
// // promt not enough funds
// []step 3
// if user enters an amount in checking
// then subtract it out of the savingBalance
//
// if userinput <= checkingRunningBalance
// checkingrunningbalance - savingsrunningbalance = checkingbalance
