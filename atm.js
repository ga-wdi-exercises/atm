$(document).ready(function(){

  // $("#savings input").css("background-color", "yellow");
  // $("#savings .deposit").css("background-color", "yellow");

  $("#checking .deposit").on("click", function(){
    validateInput("checking", "deposit", $("input").val());
  });

  $("#checking .withdraw").on("click", function(){
    validateInput("checking", "withdraw", $("input").val());
  });

  $("#savings .deposit").on("click", function(){
    validateInput("savings", "deposit", $("input").val());
    // var amtInput = $("input").val();
    // svDeposit(amtInput);
  });

  $("#savings .withdraw").on("click", function(){
    validateInput("savings", "withdraw", $("input").val());
    // var amtInput = $("input").val();
    // svWithdraw(amtInput);
  });
});

// Checking processing
// Checking Deposit
function ckDeposit(inAmtTmp) {
  inAmt = parseFloat(inAmtTmp,10);
  var bal = parseFloat($("#checking .balance").html().substring(1),10);
  bal += inAmt;
  $("#checking .balance").html("$" + bal.toFixed(2).toString());
}
// Checking Withdrawal
function ckWithdraw(inAmtTmp) {
  inAmt = parseFloat(inAmtTmp,10);
  var bal = parseFloat($("#checking .balance").html().substring(1),10);
  if (inAmt > bal) {
    alert("You don't have that much in the account.  Buzz off!");
  } else {
    bal -= inAmt;
    $("#checking .balance").html("$" + bal.toFixed(2).toString());
  }
  $("#checking .input").val("");
}

// Savings processing
// Savings Deposit
function svDeposit(inAmtTmp) {
  console.log("passed from main: " + inAmtTmp);
  inAmt = parseFloat(inAmtTmp,10);
  var bal = parseFloat($("#savings .balance").html().substring(1),10);
  bal += inAmt;
  $("#savings .balance").html("$" + bal.toString());
}

// Savings Withdrawal
function svWithdraw(inAmtTmp) {
  inAmt = parseFloat(inAmtTmp,10);
  var bal = parseFloat($("#savings .balance").html().substring(1),10);
  if (inAmt > bal) {
    alert("You don't have that much in the account.  Buzz off!");
    $("#savings .input").val("");
  } else {
    bal -= inAmt;
    $("#savings .balance").html("$" + bal.toString());
  }
}

// Validation

function validateInput(actType, transType, transAmt) {
  // empty the fields on the screen
  $("#checking .input").val("");
  $("#savings .input").val("");
  // make sure the form field isn't empty
  if (transAmt === "") {
    alert("Nothing entered.  Please enter a valid amount and click again");
    return;
  }
  // make sure it's a number
  if (isNaN(transAmt)) {
    alert(transAmt + " is not a valid entry.  Please enter a number");
    $("#savings .input").val("");
    $("#checking .input").val("");
    return;
  }
  // shorten to two decimal points if necessary
  // tranOut = transAmt.toFixed(2);
  // call the correct processing routine and pass it the valid data

  if (actType == "checking") {
    if (transType == "deposit") {
      ckDeposit(transAmt);
    } else {
      ckWithdraw(transAmt);
    }
  } else {
    if (transType == "deposit") {
      svDeposit(transAmt);
    } else {
      svWithdraw(transAmt);
    }
  }
}
function overDraw() {
  // when the withdrawal request is larger than the balance, come here
  // first, notify the user of the problem and ask if they want to try other/both
  // accounts of just blow it off.  If they want to blow it off, clean up and end
  // if they want to continue,
  // check the other account.  If there is enough there to satisfy the request,
  // ask if we should satisfy the request by taking money from the other account
  // if there isn't enough money in the other account to cover, check to see if the
  // total in both acounts will cover, and if so, prompt the user to see if that's OK.
  // if there isn't enough in both accounts to cover blow them off.
  return;
}
