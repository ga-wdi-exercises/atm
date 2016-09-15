
/* Constant Definitions */
const
CHK = "checking";
SAV = "savings";

/* 1.0  Test jQuery is working */
/*Make the <body>'s background color turn red */


$("body").css("background-color","red");
$("#savings .input").attr("placeholder","200.00");
$("#checking .input").attr("placeholder","200.00");
$("#checking .input").val("$200.00");
$("#savings .input").val("$200.00");


function getAmts( account ) {
  /* retrieve current values in account input field */
  switch (account) {
    case SAV:
     console.log("Adding amount to checking account");
     return( parseFloat($("#savings .input").val()));
      break;
    case CHK:
     console.log("Adding amount to savings account");
      return( parseFloat($("#checking .input").val()));
       break;
    default:
     console.log("unknown account issues")
  }
}

function handleDeposit() {
  console.log("In handleDeposit")
  /* Choose Account ( Checking or Savings) */
  var account =$(this).parent().attr("id");

switch (account) {
  case CHK:
   console.log("Adding amount to checking account");
   console.log(getAmts(CHK));
    break;
  case SAV:
   console.log("Adding amount to savings account");
   console.log(getAmts(CHK));
     break;
  default:
   console.log("unknown account issues")
}
/*Ask for amount
Cash or Check Deposit

Ask for Receipt
	Paper
	Email
	Paper or Email */

}


function handleWithdraw() {
  console.log("In handleWithdraw")
  /* Choose Account ( Checking or Savings) */
  var checking =$(this).parent().attr("id")==CHK;
  var savings=!checking;

/*Ask for amount
Cash or Check Deposit

Ask for Receipt
	Paper
	Email
	Paper or Email */

}
/* Add a click listener to the checking account's "Deposit" button */
var depositButChecking=$("#checking .deposit");
depositButChecking.on( "click", handleDeposit );
var depositButSavings=$("#savings .deposit");
depositButSavings.on( "click", handleDeposit );

var withdrawButChecking=$("#checking .withdraw");
withdrawButChecking.on( "click", handleWithdraw );
var withdrawButSavings=$("#savings .withdraw");
withdrawButSavings.on( "click", handleWithdraw );


/*
When you click the button it should console.log("hello")
On clicking "Deposit", it should get the user input
Just console.log it
You can save some time by hard-coding a value into the input box: <input value="something" />. That way you don't need to type stuff in all the time to test it.
On clicking "Deposit", it should update the "balance" with the user input
Just make the user input show up. Don't worry about actually keeping track of a balance yet.
On "Deposit", it should get the current "balance"
How can you get the content of the "balance" element?
The content has a $ at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
On "Deposit", it updates the balance
Now add the user input to the balance, and make it show up in the "balance" element
On "Withdraw", it updates the balance
Follow the same steps as before, except you're subtracting instead of adding
Refactor the existing code
Challenge: Try to have no function() that's longer than 5 lines. (Sandi Metz's Rule 2)
*/
