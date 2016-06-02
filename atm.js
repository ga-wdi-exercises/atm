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
  inAmt = parseInt(inAmtTmp,10);
  var ckBalTmp = $("#checking .balance").html();
  var ckBal = parseInt(ckBalTmp.substring(1),10);
  ckBal += inAmt;
  $("#checking .balance").html("$" + ckBal.toString());
};

function ckWithdraw(inAmtTmp) {
  inAmt = parseInt(inAmtTmp,10);
  // var ckBalTmp = $("#checking .balance").html();
  // var ckBal = parseInt(ckBalTmp.substring(1),10);
  var ckBal = parseInt($("#checking .balance").html().substring(1),10);
  ckBal -= inAmt;
  $("#checking .balance").html("$" + ckBal.toString());
};
