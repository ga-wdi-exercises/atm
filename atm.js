$(document).ready(function(){
});
//variables
var checkingInput = $("#checking .input")
var checkingBalance = $("#checking .balance")
var checkingDepositButton = $("#checking .deposit")
var checkingWithdrawalButton = $("#checking .withdrawal")

var myBalance = 0;

checkingDepositButton.on("click", function(){
  // get balance html from checkingBalance
  //var balance = checkingBalance.html()



  var input = checkingInput.val()
  input = input.replace(/[^\d\.]/g, '');
  console.log(input);
  input = parseInt(input)

  // newBalance = balance + checkingInput
  myBalance = myBalance + input
  //update checkingBalance html to newBalance
  console.log(myBalance);

  updateBalance(myBalance)
})



checkingWithdrawalButton.on("click", function(){
  // get balance html from checkingBalance
  // newBalance = balance - checkingInput

  //update checkingBalance html to newBalance

  var input = checkingInput.val()
    input = input.replace(/[^\d\.]/g, '');
    console.log(input);
    input = parseInt(input)

//newBalance = balance - checkingInput
    myBalance = myBalance - input
    //update checkingBalance html to newBalance
    console.log(myBalance);

    updateBalance(myBalance)
})








function updateBalance(newBalance){
  checkingBalance.html('$' + newBalance)

}






//variables I'll need: balance, amount of Withdraw, amount of Deposit,

//When I click on Deposit, add value to checking balance.

//When I click Withdraw, subtract value from checking balance.

//User can not withdraw more than available balance.

//If user tries to withdraw more than available balance, ignore the transaction.
