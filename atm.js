var checkingInput;
var checkingBalance;
var currentBalance;
$(document).ready(function(){
  checkingInput = $("#checking > .input");
  checkingBalance = $("#checking > .balance");
  currentBalance = $("checkingBalance" + "checkingInput")
  console.log("hello");
  // $("body").css("background", "red");
  $(".deposit:first").on("click", function(evt){
    evt.preventDefault();
    var currentChecking = parseFloat($('.balance:first').html().split('$')[1])
    $(".balance:first").html("$" + (parseFloat(checkingInput.val())+currentChecking).toFixed(2));

    // $(checkingInput).on("click", function(){
  });



});

//If Checking is clicked, provide user with list of options to choose from, ie. "Withdrawl", "Deposit", and "Balance Inquiry"
//If Withdrawl is clicked, prompt user to enter amount desired.
//If amount in balance <=100, change background color red
//If amount in balance >=100, change background color green
//If amount in balance >= amount desired, subtract desired amount from checking balance and withdraw money
//Else If amount in balance is < amount desired, send alert ("insufficient funds")
//If Desposit is clicked, send alert ("ready for cash to be deposited")
//Once fully deposited, provide updated account balance
//If Balance Inquiry is clicked, provide user with total balance information.

//If Savings is clicked, provide same list above
