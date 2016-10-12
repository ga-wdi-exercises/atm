$(document).ready(function(){

//GLOBAL VARIABLE
var bank = {
    checking: 0,
    savings: 0,
};

//CHECKING
$("div#checking>input.deposit").on("click", function(){
  var newAmount = parseFloat($("div#checking>input.input").val());
  var oldAmount = bank.checking;
  bank.checking = newAmount + oldAmount;
  var displayValue = $("div#checking>div.balance");
  displayValue.text("$" + bank.checking);

})

$("div#checking>input.withdraw").on("click", function(){
  var newAmount = parseFloat($("div#checking>input.input").val());
  var oldAmount = bank.checking;

  if(newAmount > bank.checking + bank.savings){
    alert("BANKRUPT");
  }

  else if(oldAmount - newAmount < 0){
    var overDraw = oldAmount - newAmount
    bank.checking = oldAmount - overDraw - newAmount
    bank.savings = bank.savings + overDraw
    var displayValue = $("div#checking>div.balance");
    displayValue.text("$" + bank.checking);
    var displayValue = $("div#savings>div.balance");
    displayValue.text("$" + bank.savings);
    console.log(bank);
  }
  else{
    bank.checking = oldAmount - newAmount;
    var displayValue = $("div#checking>div.balance");
    displayValue.text("$" + bank.checking);
  }
})

//SAVINGS
$("div#savings>input.deposit").on("click", function(){
  var newAmount = parseFloat($("div#savings>input.input").val());
  var oldAmount = bank.savings;
  bank.savings = newAmount + oldAmount;
  var displayValue = $("div#savings>div.balance");
  displayValue.text("$" + bank.savings);
  console.log(bank);
})

$("div#savings>input.withdraw").on("click", function(){
  var newAmount = parseFloat($("div#savings>input.input").val());
  var oldAmount = bank.savings;
  bank.savings = oldAmount - newAmount;
  var displayValue = $("div#savings>div.balance");
  displayValue.text("$" + bank.savings);
  console.log(bank);
})

});
