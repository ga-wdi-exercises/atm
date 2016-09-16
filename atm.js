
/* Constant Definitions */
const
CHK = "checking";
SAV = "savings";
POSCLR ="#6C9A74";
ZROCLR ="#F52F4F";
GOODFLOATCHARS={"0":0,"1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,".":0};

/* Global Variables */

balSavings = 200.0;
balChecking =200.0;

/* 1.0  Test jQuery is working */
/*Make the <body>'s background color turn red */


// $("body").css("background-color","red");
$("#savings .input").attr("placeholder","200.00");
$("#checking .input").attr("placeholder","200.00");
$("#checking .input").val("$200.00");
$("#savings .input").val("$200.00");
setAmts(CHK,balChecking);
setAmts(SAV,balSavings);
setBkgActBox(CHK,balSavings,balChecking);
setBkgActBox(SAV,balSavings,balChecking);



function setBkgActBox(account,balSavings,balChecking) {
   var clr;
   var bal;

  account==CHK?bal=balChecking:bal=balSavings;
  bal>0?clr=POSCLR:clr=ZROCLR;
  $("#"+ account +".account").css("background-color",clr);
  return;
}

function validateNumStr(str){
  /*Return only numeric portion of string removing spaces and other illigal chars */
  var newStr="";
   for (var i=0;i < str.length;i++) {
  if (str[i] in GOODFLOATCHARS) {newStr+=str[i];}
  } /* for i */
 return newStr;
}

function getAmts( account ) {
  /* retrieve current values in account input field */
return parseFloat(validateNumStr($("#" + account+" .input").val()));

} /* function getAmts */

function setAmts( account,amt ) {
  /* retrieve current values in account input field */
$("#" + account+" .balance").text("$ "+ parseFloat(amt).toFixed(2));

} /* function getAmts */



function handleDeposit() {

  /* Choose Account ( Checking or Savings) */
  var account =$(this).parent().attr("id");
  account==CHK?setAmts(account,balChecking+=getAmts(account)):setAmts(account,balSavings+=getAmts(account));
  setBkgActBox(account,balSavings,balChecking);
}


function handleWithdraw() {
  console.log("In handleWithdraw")
  /* Choose Account ( Checking or Savings) */
  var account =$(this).parent().attr("id");
  account==CHK?setAmts(account,balChecking-=getAmts(account)):setAmts(account,balSavings-=getAmts(account));
  setBkgActBox(account,balSavings,balChecking);
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
