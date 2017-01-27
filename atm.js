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
  if (bank.checking > 0){
    $("div#checking").css("background-color", "#6C9A74");
  }
  else {
    $("div#checking").css("background-color", "#F03B4B");
  }
});

$("div#checking>input.withdraw").on("click", function(){
  var withdrawal = parseFloat($("div#checking>input.input").val());
  var checkingValue = bank.checking;

if (withdrawal > bank.checking + bank.savings){
  alert("You don't have enough money in either cheking or saving!")
}

  else if(checkingValue - withdrawal <0){
    var overdraw = checkingValue - withdrawal;
    bank.savings = bank.savings + overdraw;
    bank.checking = checkingValue - overdraw - withdrawal;
    $("div#checking>div.balance").text("$" + bank.checking);
    $("div#savings>div.balance").text("$" + bank.savings);
    $("div#checking").css("background-color", "#F03B4B");
  }

  else {
    bank.checking = checkingValue - withdrawal;
    var displayValue = $("div#checking>div.balance");
    displayValue.text("$" + bank.checking);
  }

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
