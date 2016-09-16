


/* Global Variables */
var actBal = {
  "checking":200,
  "savings":200,
  "odProtect":true  /* true for overdraft protection false for no protection */
}

/* Constant Definitions */
const
POSCLR ="#6C9A74";
ZROCLR ="#F52F4F";
GOODFLOATCHARS={"0":null,"1":null,"2":null,"3":null,"4":null,"5":null,"6":null,"7":null,"8":null,"9":null,".":null};
ACCOUNTS=[Object.keys(actBal)[0],Object.keys(actBal)[1]];

/* Initialize values on display fields and input fields */

ACCOUNTS.forEach( function ( act )  {
  $("#" + act +" .deposit").on( "click", handleDeposit ); /* Add a click listener to the checking account's "Deposit" button */
  $("#" + act +" .withdraw").on( "click", handleWithdraw );
  setBal(act);           /* set initial balance on display */
  updInpFld(act,getActBal(act));  /* set inital value on input field to make it easy for input */
});

function setBal(account) {  /* Set Balances on Display and Input fields */
  setAmts(account,getActBal(account));
  setBkgActBox(account);
}

function setActBal (account,val) { /* set balance global var based on account return value set*/
return (actBal[account]=val);
}

function getActBal (account) {  /* return the current account balace of indicated account */
  return(actBal[account]);
}

function setBkgActBox(account) { /* set account box to correct color for zero balance */

   var clr; /* color to set background to */

    getActBal(account)>0?clr=POSCLR:clr=ZROCLR;
    $("#"+ account +".account").css("background-color",clr);
    return;
}

function validateNumStr(str){
  /*Return only numeric portion of string removing spaces and other illigal chars Strips all alphs out of mddle and only accepts pos numbers */
  var newStr="";
   for (var i=0;i < str.length;i++) {
  if (str[i] in GOODFLOATCHARS) {newStr+=str[i];}
  } /* for i */
 return newStr;
}

function updInpFld(act,val) {
/* update input field with valid formatted number */
  $("#"+act+" .input").val("$ " + val);
}

function getAmts( account ) {
  /* retrieve current values in account input field - update field with validated number*/
  valNum=parseFloat(validateNumStr($("#" + account+" .input").val())).toFixed(2);
  updInpFld(account,valNum);

return valNum/1; /* casting to floating point from string (.toFixed  returns string */

} /* function getAmts */

function setAmts( account,amt ) {
  /* retrieve current values in account input field */
$("#" + account+" .balance").text("$ "+ parseFloat(amt).toFixed(2));
} /* function getAmts */

function handleDeposit() {
  var account =$(this).parent().attr("id");  /* Choose Account ( Checking or Savings) */
  setAmts(account,setActBal(account,getActBal(account)+getAmts(account)));  /*Set new account balance with added delposit */
  setBkgActBox(account);
}

function fundsAvail(act) {
  return(getActBal(act)-getAmts(act) >=0 );
}

function moveMoneyToCover(act,amt){
 /* find out how short we are in the current account
    move over that amount of money from alternate account to cover */

  var shortFall = amt-getActBal(act);
  var altAct= act=="checking"? altAct="savings":altAct="checking";

  /* add shortFall to alternate account */
    setActBal(altAct,getActBal(altAct)-shortFall);  /* take shortfall from alternate account */
    setActBal(act,getActBal(act)+shortFall);  /* add sortfall to account */

    setBal(act);     /* set balance display on both accounts */
    setBal(altAct);
  return;
}


function handleOverDraft(act,amt) {
  /* is there enough money in all accounts to cover */
  /*  yes -> remove money from alternate account and add to account  return True*/
   if (actBal.checking +actBal.savings >= amt)
     {
       moveMoneyToCover(act,amt);
       return  true;
     }
     return false;
}

function chkForOverDraft( act, amt) {
  /* check for overdraft mode */
if (actBal.odProtect) {
   /* over draft Protection enabled */
     if (handleOverDraft(act,amt))
        {
          /* if we can handle the overdraft do withdrawl again (recursive) */
          handleWithdraw(null,act);
        };
  } else {
      /*  no -> return false */
    return false;
  }
} /* chkForOverDraft */



function handleWithdraw(event,account) {
  /* Choose Account ( Checking or Savings) */
  var account =account||$(this).parent().attr("id");
  var amtToWithdraw=getAmts(account);
  if( fundsAvail(account) ) {  /* check if we have enough to widthdraw */
    setAmts(account,setActBal(account,getActBal(account)-amtToWithdraw ));
    setBkgActBox(account);
  } else {
      /* check for overdraft  if ok then call recursive handleWithdraw */
      chkForOverDraft(account, amtToWithdraw);
  }
} /* function handleWithdraw */
