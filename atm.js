$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});
//var balance = 0
//var deposit = 0
//var withdraw = 0

//$("div.balance").html(parseInt("0"));
//$(".deposit").on("click", addMoney);

//function addMoney (input) {
//var input = parseInt(($(".input").val()));
//balance = balance + input
//$(".balance").html(balance);

//}
var balance = 0
var deposit = 0
var withdraw = 0

$(".balance").html(parseInt("0"));
$(".deposit").on("click", addMoneyChecking);
$(".withdraw").on("click", takeMoneyChecking);

function addMoneyChecking () {
var input = parseInt(($(".input").val()));
balance = balance + input
$("#checking .balance").html(balance);
}

function takeMoneyChecking () {
  var input = parseInt(($(".input").val()));
  balance = balance - input
  $("#checking .balance").html(balance);
}
