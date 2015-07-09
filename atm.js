//Checking account
//Define players
$(document).ready(function() {
  var accountBalance = 0;
  var inputBox = $("input:first")[0];
  var depositButton = $("input").eq(1);
  var withdrawButton = $("input").eq(2);
  //$("input").eq(1).attr("value") is "Deposit"
  //$("input").eq(2).attr("value") is "Withdraw"
  //$("input:first").val() is the value of the input box;

  //When Deposit button is clicked, read user input and add it to the total
  depositButton.on("click", function(){
    event.preventDefault();
    accountBalance += parseInt($("input:first").val());
    console.log("account balance is " + accountBalance);
    //Change the html element that indicates account balance
    $(".balance").eq(0).html("$" + accountBalance);
  })


//Whin withdraw button is clicked, read user input and subtract it from the total
//add logic to make sure the balance is not zero

// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }
//
// // an eventListerner for each button, each one a "click"





});
