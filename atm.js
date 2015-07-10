
var atm = {

  

}


// Listeners

$( "#checking input[value=Deposit]" ).on( "click" , DepositC );

$( "#checking input[value=Withdraw]" ).on("click" , WithdrawC );

$( "#savings input[value=Deposit]" ).on( "click" , DepositS );

$( "#savings input[value=Withdraw]" ).on("click" , WithdrawS );


// Should be able to make this into one function for each[checking,savings], yes?
// if statement to go down diff. paths?
// Put into object


// Checking ***************

var sumChecking = 0;

function DepositC() {
  var depositChecking = $( "#checking input[type=text]" ).val();
  sumChecking += parseInt(depositChecking);

  $( "#checking div.balance" ).html("$" + sumChecking);
  if(sumSavings > 0) {
      $( "#checking .balance").removeClass( "zero");
  }
}




function WithdrawC() {
  var withdrawChecking = $( "#checking input[type=text]" ).val();
  sumChecking -= parseInt(withdrawChecking);

  if (sumChecking < 0) {
    $( "#checking .balance").addClass( "zero");
  }

  if (sumChecking < 0 && sumSavings >= 0) {
    if (sumSavings <= 0) {
      $( "#savings .balance").addClass( "zero");
      sumChecking = 0;
      return alert("You don't have enough money for this transaction.")
    }
    // Overdraft amount ( ex. -10 + 50 = 40)
    sumSavings += sumChecking;
    sumChecking = 0;

    $( "#savings div.balance" ).html("$" + sumSavings);
  }

  $( "#checking div.balance" ).html("$" + sumChecking);

}



// Savings ***************

var sumSavings = 0;



function DepositS() {
  var depositSavings = $( "#savings input[type=text]" ).val();
  sumSavings += parseInt(depositSavings);

  $( "#savings div.balance" ).html("$" + sumSavings);
  if(sumSavings > 0) {
      $( "#savings .balance").removeClass( "zero");
  }

}




function WithdrawS() {
  var withdrawSavings = $( "#savings input[type=text]" ).val();
  sumSavings -= parseInt(withdrawSavings);

  // Turn acct red if 0
  if (sumSavings <= 0) {
    $( "#savings .balance").addClass( "zero");
  }

  if (sumSavings < 0 && sumChecking >= 0) {
    if (sumChecking <= 0) {
      $( "#checking .balance").addClass( "zero");
      sumSavings = 0;
      return alert("You don't have enough money for this transaction.")
    }
    // Overdraft amount ( ex. -10 + 50 = 40)
    sumChecking += sumSavings;
    sumSavings = 0;

    $( "#checking div.balance" ).html("$" + sumChecking);
  }



  $( "#savings div.balance" ).html("$" + sumSavings);

}
