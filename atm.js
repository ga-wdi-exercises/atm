var checkingInput;
var checkingBalance ;
var currentBalance;
$(document).ready(function(){
  checkingInput = $("#checking > .input");
  checkingBalance = $("#checking > .balance");
  currentBalance = $("checkingBalance" + "checkingInput")
  console.log("hello");
  $(".deposit:first").on("click", function(evt){
    evt.preventDefault();
    var currentChecking = parseFloat($('.balance:eq(0)').html().split('$')[1])

    $(".balance:eq(0)").html("$" + (parseFloat(checkingInput.val())+currentChecking).toFixed(2));
    currentChecking = parseFloat($('.balance:eq(0)').html().split('$')[1])

    console.log(currentChecking)
    if(currentChecking == 0) {
      $("#checking").addClass("zero")
    } else {
      $("#checking").removeClass("zero")
    };
  });

  $(".withdraw:first").on("click", function(evt){
    evt.preventDefault();
    var checkingIn = checkingInput.val()
    console.log(checkingIn)
    var currentChecking = parseFloat($('.balance:eq(0)').html().split('$')[1])
    if (checkingIn <= currentChecking) {
      $(".balance:eq(0)").html("$" + (parseFloat(currentChecking - checkingInput.val())).toFixed(2));
    }
    currentChecking = parseFloat($('.balance:eq(0)').html().split('$')[1])

    if(currentChecking == 0) {
      $("#checking").addClass("zero")
    } else {
      $("#checking").removeClass("zero")
    };
  });
  console.log("hekeleele")

  var savingsInput = $("#savings > .input");
  var savingsBalance = $("#savings > .balance");
  var currentSavingsBalance = $("savingsBalance" + "savingsInput")
  $(".deposit:eq(1)").on("click", function(evt){
    evt.preventDefault();
    var currentSavings = parseFloat($('.balance:eq(1)').html().split('$')[1])
    $(".balance:eq(1)").html("$" + (parseFloat(savingsInput.val())+currentSavings).toFixed(2));
    currentSavings = parseFloat($('.balance:eq(1)').html().split('$')[1])

    console.log(currentSavings)
    if(currentSavings == 0) {
      $("#savings").addClass("zero")
    } else {
      $("#savings").removeClass("zero")
    };
  });

  $(".withdraw:eq(1)").on("click", function(evt){
    evt.preventDefault();

    var savingsIn = savingsInput.val()
    console.log(savingsIn)
    var currentSavings = parseFloat($('.balance:eq(1)').html().split('$')[1])
    if (savingsIn <= currentSavings) {
      $(".balance:eq(1)").html("$" + (parseFloat(currentSavings - savingsInput.val())).toFixed(2));
    }
    currentSavings = parseFloat($('.balance:eq(0)').html().split('$')[1])

    if(currentSavings == 0) {
      $("#savings").addClass("zero")
    } else {
      $("#savings").removeClass("zero")
    };
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
