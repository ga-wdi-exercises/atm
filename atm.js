var checkingInput;
$(document).ready(function(){
  console.log("hello");
  // $("body").css("background", "red");
  checkingInput = $("#checking > .input");
  $("#checking > .deposit").on("click", function(evt){
    evt.preventDefault();
    console.log( checkingInput.val() );
    console.log("yoooo");

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
