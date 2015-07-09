$(document).ready(function() {

var cBal = 0;
var sBal = 0;

$("#cDepositButton").on("click", function() {
  var cAmt = parseInt($("#cplaceholder").val());
  cBal = (cBal + cAmt);
  $("#checkingBalance").text("$" + cBal)
})

$("#cWithdrawButton").on("click", function() {
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

}) 
