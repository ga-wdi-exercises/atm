$(document).ready(function(){
   console.log("jq works");
// checking variables
   var checkingBalance = 0;
   var checkingBalanceDiv = $("#checkingBalanceDiv");
   var checkingInput = $("#checkingAmount");
   var checkingDepositButton = $("#checkingDepositButton");
   var checkingWithdrawButton = $("#checkingWithdrawalButton");
// savings variables
   var savingsBalance = 0;
   var savingsBalanceDiv = $("#savingsBalanceDiv");
   var savingsInput = $("#savingsInput");
   var savingsDepositButton = $("#savingsDepositButton");
   var savingsWithdrawButton = $("#savingsWithdrawalButton");

// checking functions
function DepositButton() {
      console.log("I was clicked yaaaaayyy!!!");
   var input = parseInt(checkingInput.val());
      console.log(input);
   checkingBalance = checkingBalance + input;
      console.log(checkingBalance);
   $(checkingBalanceDiv).html("$" + checkingBalance);
}

function withdrawButton() {
      console.log("pizza pizza");
   var input = parseInt(checkingInput.val());
      console.log(input);
   checkingBalance = checkingBalance - input;
      console.log(checkingBalance);
   $(checkingBalanceDiv).html("$" + checkingBalance);
}
// savings function
function savingsDeposit() {
      console.log("More pizza!");
   var input = parseInt(checkingInput.val());
      console.log(input);
   savingsBalance = savingsBalance + input;
      console.log(savingsBalance);
   $(savingsBalanceDiv).html("$" + savingsBalance);
}

function savingsWithdraw() {
      console.log("I'm pizza'd out");
   var input = parseInt(checkingInput.val());
      console.log(input);
   savingsBalance = savingsBalance - input;
      console.log(savingsBalance);
   $(savingsBalanceDiv).html("$" + savingsBalance);
}

// buttons
checkingWithdrawButton.on("click", withdrawButton);
checkingDepositButton.on("click", depositButton);
savingsWithdrawButton.on("click", withdrawButton);
savingsDepositButton.on("click", depositButton);














   // function depositChecking(){
         // console.log(checkingInput.val());
      //    console.log("deposit clicked");
      // var input = checkingInput.val();
      // var amountForDeposit = parseInt(input);
      // checkingBalance = checkingBalance + amountForDeposit;
      //    console.log(checkingBalance);
      // $(balanceDiv).html("$" + checkingBalance);
   // }
   // update total amount in checking based on amountForDeposit
   // console.log updated total
   // function withdrawChecking(){
         // console.log(checkingInput.val());
   //       console.log("withdraw clicked");
   //    var input = checkingInput.val();
   //    var amountForWithdraw = parseInt(input);
   //    checkingBalance = checkingBalance - amountForWithdraw;
   //       console.log(checkingBalance);
   //    $(balanceDiv).html("$" + checkingBalance);
   // }

   // function depositSavings(){
   //       console.log("deposit clicked");
         // console.log(savingsInput.val());
      // var input = savingsInput.val();
      // var amountForDeposit = parseInt(input);
      // savingsBalance = savingsBalance + amountForDeposit;
      //    console.log(savingsBalance);
      // $(balanceDivTwo).html("$" + savingsBalance);
   // }
   // buttons
   // depositChecking fucntion has been commented out.
   // depositButton.on("click", depositButton);
   // savingsDepositButton.on("click", depositSavings);
   // withdrawButtonTwo.on("click", withdrawSavings);


});



//Add an event listener to the deposit button for a click
// when it gets clicked console.log i was clicked


// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// Open up a new pull request for ATM for homework.
