$(document).ready(function(){

  $("#checking .deposit").on("click", function(){
    var amtInput = $("input").val();
    ckDeposit(amtInput);
  });
  $("#checking .withdraw").on("click", function(){
    var amtInput = $("input").val();
    ckWithdraw(amtInput);
  });
});

function ckDeposit(inAmtTmp) {
  inAmt = parseFloat(inAmtTmp,10);
  // var ckBalTmp = $("#checking .balance").html();
  var ckBal = parseFloat($("#checking .balance").html().substring(1),10);
  ckBal += inAmt;
  $("#checking .balance").html("$" + ckBal.toString());
};

function ckWithdraw(inAmtTmp) {
  inAmt = parseFloat(inAmtTmp,10);
  // var ckBalTmp = $("#checking .balance").html();
  // var ckBal = parseFloat(ckBalTmp.substring(1),10);
  var ckBal = parseFloat($("#checking .balance").html().substring(1),10);
  if (inAmt > ckBal) {
    alert("You don't have that much in the account.  Buzz off!");
    $("#checking .input").val("");
  } else {
    ckBal -= inAmt;
    $("#checking .balance").html("$" + ckBal.toString());
  }
};
