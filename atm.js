$(document).ready(function(){


var cInput = $("#checking").find($(".input"));
var cDeposit = $("#checking").find($(".deposit"));
var cWithdraw = $("#checking").find($(".withdraw"));
var cBalance = $("#checking").find($("span"));

var sInput = $("#savings").find($(".input"));
var sDeposit = $("#savings").find($(".deposit"));
var sWithdraw = $("#savings").find($(".withdraw"));
var sBalance = $("#savings").find($("span"));

cDeposit.click(depositChecking);
cWithdraw.click(withdrawChecking);

sDeposit.click(depositSavings);
sWithdraw.click(withdrawSavings);

function depositChecking() {

  var amount = toNumber(cInput.val());
  var balance = parseInt(cBalance.text());
if (isNaN(amount)) {
  alert("You must enter a real number")
} else {
  cBalance.text(balance + amount);
 }
}

function withdrawChecking() {

var amount = toNumber (cInput.val());
var balance = parseInt(cBalance.text());

if (amount > balance)
alert("You must enter a real number")
} else {
  cBalance.text(balance - amount);
 }

 function depositSavings() {

     var amount = toNumber(sInput.val());
      var balance = parseInt(sBalance.text());
     if (isNaN(amount)) {
        alert("You must enter a real number.");
      } else {
       sBalance.text(balance + amount);
     }
    }

    function withdrawSavings(){

      var amount = toNumber(sInput.val());
      var balance = parseInt(sBalance.text());

     if (amount > balance) {
       overDraft($(this).parent(), amount);
      } else {
       sBalance.text(balance - amount);
     }
    }
