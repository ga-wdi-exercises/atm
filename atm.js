//var checkingBalance = parseInt($(".balance").eq(0).html().replace("$", ""));
// This not a DOM object; it is a number.  You are only saying =0.
var checkingBalance = 0;
var savingsBalance = 0;

//var checkingDeposit = function(amount){
//  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//};

var chkDepButton = $("input").eq(1);
var chkWitButton = $("input").eq(2);
var savDepButton = $("input").eq(4);
var savWitButton = $("input").eq(5);

var chkBalLocation = $(".balance").eq(0);
var savBalLocation = $(".balance").eq(1);

var chkInput = $("input").eq(0);
var savInput = $("input").eq(3);

function checkingDeposit() {
  chkDepButton.on("click", function() {
    checkingBalance += parseInt(chkInput.val());
    chkBalLocation.html("$" + checkingBalance);
    console.log(checkingBalance);
  });
//user enters number into input field
//hits deposit button
    //eventListerner "input"
//total dollar amount updates
  //update value of div .balance
    //create variable = 0 for sum total; then do checkingBalance += input
}
checkingDeposit();

function checkingWithdrawal(){
  chkWitButton.on("click", function() {
    if (chkInput.val() <= checkingBalance) {
      checkingBalance -= parseInt(chkInput.val());
      chkBalLocation.html("$" + checkingBalance);
      console.log(checkingBalance);
    }
  });
}
checkingWithdrawal();

function savingsDeposit(amount){
  savDepButton.on("click", function() {
    console.log(savingsBalance);
    savingsBalance += parseInt(savInput.val());
    savBalLocation.html("$" + savingsBalance);
    console.log(savingsBalance);
  });
}
savingsDeposit();

function savingsWithdrawal(amount){
  savWitButton.on("click", function() {
    if (savInput.val() <= savingsBalance) {
      savingsBalance -= parseInt(savInput.val());
      savBalLocation.html("$" + savingsBalance);
      console.log(savingsBalance);
    }
  });
}
savingsWithdrawal();

// checking/savings balance cannot go below 0
  //if input value for deposit is greater than balance, do not add value to balance


//user cannot withdraw more than the existing balance.
  ////While input value < balance, run withdrwal function
