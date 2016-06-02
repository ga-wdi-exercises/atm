$(document).ready(function(){
//   On "Deposit", it should get the current "balance"
// How can you get the content of the "balance" element?
// The content has a $ at the beginning of it, so Javascript will read it as text
// rather than as a number. How can you convert this text into a number?

$("#checking .deposit").on("click", function(){
    var amtInput = $("input").val();
    // $("#checking .balance").html("$" + amtInput);
    var ckBalTmp = $("#checking .balance").html();
    var ckBal = parseInt(ckBalTmp.substring(1));
    console.log("Balance is: " + ckBal);
    // console.log("Balance type is:" + ckBalType);
});
});
