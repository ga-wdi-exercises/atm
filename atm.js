$(document).ready(function() { ///DON'T DELETE

var cBal = 0;
var sBal = 0;

$("#cDepositButton").on("click", function() {
  var cAmt = parseInt($("#cplaceholder").val());
  // alert("$" + (cAmt + cBal)) //testing
  cBal = (cBal + cAmt);
  $("#checkingBalance").text("$" + cBal)
})

$("#cWithdrawButton").on("click", function() {
  // alert("withdraw button!")
  // alert(cBal);
  var cAmt = parseInt($("#cplaceholder").val());

  if (cBal > cAmt) {
  cBal = (cBal - cAmt);
  $("#checkingBalance").text("$" + cBal);
  }
  else if (cBal === cAmt) {
    cBal = cBal - cAmt;
    $("#checkingBalance").text("$" + cBal);

    alert("You can't have a zero balance. We'll transfer $1 from your savings because nobody likes negative numbers.")
    cBal = 1
    $("#checkingBalance").text("$" + cBal);

    sBal = sBal - 1;
    $("#savingsBalance").text("$" + sBal);
  }

  else if (cBal < cAmt && sBal > cAmt ) {
    var cDiff = (cAmt - cBal);
    cBal = (cBal - cAmt);
    $("#checkingBalance").text("$" + cBal);

    var sDiff = cDiff + 1
    alert("You're overdrawing by $" + cDiff + " but you have money in savings to cover it.  We will transfer $" + sDiff + " to bring your balance to $1")

    cBal = cBal + sDiff;
    $("#checkingBalance").text("$" + cBal);

    sBal = sBal - sDiff;
    $("#savingsBalance").text("$" + sBal);
  }
  else {
      alert("You can't withdraw because you don't have enough funds in your accounts. Sorry not sorry.")
  }
})

$("#sDepositButton").on("click", function() {
  var sAmt = parseInt($("#splaceholder").val());
  sBal = (sBal + sAmt);
  $("#savingsBalance").text("$" + sBal);
})

$("#sWithdrawButton").on("click", function() {
  var sAmt = parseInt($("#splaceholder").val());
  if (sBal > sAmt) {
  sBal = (sBal - sAmt);
  $("#savingsBalance").text("$" + sBal);
  }
  else {
    alert("YOU DON'T HAVE ENOUGH MONEY. DO NOT BUY THOSE SHOES!")
  }
})




}) ///CLOSING TAG DON'T DELETE


// As a user, I want to deposit money into one of the bank accounts
  //user inputs new number amount (a variable) checkingAmount
  //user clicks deposit button
    //new number amount + old number amount (default = 0)
    //total should replace $0
    //input field should go back to default
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

// var cBal = parseInt($("#checkingBalance").text().replace("$", ""));

//Notes to self


//omg i got the button to work. FIRST: created an ID in the HTML for the deposit button so that I could identify it.  once that was done i made the event listener (with alert) with an anonymous function.  then i entered checkingBalance in the function. unsure if i need to do this.
// $("#cDepositButton").on("click", function(checkingBalance) {
//   alert("button worked!")
// })

//had the hardest time with the variables..they were ahead of the function, but kept being returned not defined in the DOM or NaN in my popup... was advised that as the page loads, it determines the outcome of the function (clicking the deposit button in this case) before the user actually enters a number, which was why it was returning NaN. put the var cAmt variable within the function so it would process the variable at the same time. Voila.
