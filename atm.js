$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// click event deposit - three steps
// (1)capture input value (2) add to previous amount, run addition, store value in global object (3)change display to be updated

// click event deposit checking {
//   capture input value = var x
//   // retrieve old bank.checking value
//   xw plus bank.checking =  var newmoney
//   store this NEW amount in bank object
//   AND finally, update div text with: $("div.balance").text("$" + bank.checking);
// }
console.log("Hello jquery!");

var bank = {
checking: 0,
savings: 0,
};

$("div#checking>input.deposit").on("click", function(){
  var newAmount = parseFloat($("div#checking>input.input").val());
  var oldAmount = bank.checking;
  bank.checking = newAmount + oldAmount;
  var displayValue = $("div#checking>div.balance");
  displayValue.text("$" + bank.checking);
});

$("div#checking>input.withdraw").on("click", function(){
  var newAmount = parseFloat($("div#checking>input.input").val());
  var oldAmount = bank.checking;
  bank.checking = oldAmount - newAmount;
  var displayValue = $("div#checking>div.balance");
  displayValue.text("$" + bank.checking);
});

$("div#savings>input.deposit").on("click", function(){
  var newAmount = parseFloat($("div#savings>input.input").val());
  var oldAmount = bank.savings;
  bank.savings = newAmount + oldAmount;
  var displayValue = $("div#savings>div.balance");
  displayValue.text("$" + bank.savings);
});

$("div#savings>input.withdraw").on("click", function(){
  var newAmount = parseFloat($("div#savings>input.input").val());
  var oldAmount = bank.savings;
  bank.savings = oldAmount - newAmount;
  var displayValue = $("div#savings>div.balance");
  displayValue.text("$" + bank.savings);
});


});
