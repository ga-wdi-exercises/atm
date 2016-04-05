$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
  console.log("jq is loaded");

  var checkingInput = $("#checkingInput");
  var checkingDepositButton = $("#checkingDepositButton");
  var checkingWithdrawButton = $("#checkingWithdrawButton");
  var checkingBalance = 0.00;
  var checkingBalanceDiv = $("#checkingBalance");

  function depositChecking(){
    console.log("deposit clicked");
    // gets the .value of checkingInput and praseInt's it into an integer
    var input = parseInt(checkingInput.val());
    console.log(input);
    // adds the input value to the always-present checkingBalance
    checkingBalance = checkingBalance + input;
    console.log(checkingBalance);
    // adds the value of checkingBalance to the page as html text
    $(checkingBalanceDiv).html("$" + checkingBalance);
    if (checkingBalance > 0){
      $(checkingBalanceDiv).removeClass("zero");
    }
    else {
      $(checkingBalanceDiv).addClass("zero");
    }
  }


    function withdrawChecking(){
      console.log("withdraw clicked");
      // gets the .value of checkingInput and praseInt's it into an integer
      var input = parseInt(checkingInput.val());
      console.log(input);
      // Checks for overdraft and returns out of the function to prevent overdraft.
      if (input > (checkingBalance + savingsBalance)){
        alert("oh hell no");
      }
      else if (input > checkingBalance){
        savingsBalance = savingsBalance-(input-checkingBalance);
        alert("Overdraft!");
        checkingBalance = 0;
        $("#checkingBalance").html("$" + checkingBalance);
        $ (savingsBalanceDiv).html("$" + savingsBalance);
        return;
      }
      else {
      // subtracts the input value from the always-present checkingBalance
      checkingBalance = checkingBalance - input;
      console.log(checkingBalance);
      // writes the value of checkingBalance to the page as html text
      $("#checkingBalance").html("$" + checkingBalance);
      if (checkingBalance > 0){
        $(checkingBalanceDiv).removeClass("zero");
      }
      else {
        $(checkingBalanceDiv).addClass("zero");
      }
      }
    }

  checkingDepositButton.click(depositChecking);

  checkingWithdrawButton.click(withdrawChecking);

  var savingsInput = $("#savingsInput")
  var savingsDepositButton =$("#savingsDepositButton")
  var savingsWithdrawalButton = $("#savingsWithdrawalButton")
  var savingsBalance = 0
  var savingsBalanceDiv = $("#savingsBalanceDiv")

  function depositSavings(){
    console.log("I was clicked")
     var input = parseInt(savingsInput.val());
     savingsBalance = savingsBalance + input
     $ (savingsBalanceDiv).html("$" + savingsBalance);
     if (savingsBalance > 0){
       $(savingsBalanceDiv).removeClass("zero");
     }
     else {
       $(savingsBalanceDiv).addClass("zero");
     }
  }

  function withdrawSavings(){
    console.log("I was clicked")
     var input = parseInt(savingsInput.val());
     if (input >= savingsBalance){
       alert("Stop it!!!!!")
       return;
     } else {
       savingsBalance = savingsBalance - input
     $ (savingsBalanceDiv).html("$" + savingsBalance);
     if (savingsBalance > 0){
       $(savingsBalanceDiv).removeClass("zero");
     }
     else {
       $(savingsBalanceDiv).addClass("zero");
     }
   }
  }

savingsWithdrawalButton.click(withdrawSavings);
savingsDepositButton.click(depositSavings);






// Put this at the end to ensure the script page won't run until
// the document is ready.
})
