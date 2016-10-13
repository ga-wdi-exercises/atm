$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

checkingAmount = 0;
savingsAmount = 0;
amount = 0;
// target div class "balance" inside id savings, set to variable
//
// savingsAmount = 34;
// $("div#savings > div.balance").html("$" + savingsAmount);

//capture user input
// when click deposit button add user input to appropriate variable


$("div#checking > .deposit").on("click", function(){
var amount = parseInt($("#checking > .input").val());
// check if not a number
if (isNaN(amount)){
  console.log("error")}
else {checkingAmount = checkingAmount + amount;
$("div#checking > div.balance").html("$" + checkingAmount);
}
// set input to null afterward
$(".input").val(null)
inTheBlack()
})


$("div#checking > .withdraw").on("click", function(){
var amount = parseInt($("#checking > .input").val());
if (isNaN(amount)){
  console.log("error")}
else {
checkingAmount = checkingAmount - amount;
$("div#checking > div.balance").html("$" + checkingAmount);}
$(".input").val(null)
overdraftCheck()
})

//Same thing for savings


$("div#savings > .deposit").on("click", function(){
var amount = parseInt($("#savings > .input").val());
// check if not a number
if (isNaN(amount)){
  console.log("error")}
else {savingsAmount = savingsAmount + amount;
$("div#savings > div.balance").html("$" + savingsAmount);
}
// set input to null afterward
$(".input").val(null)
})


$("div#savings > .withdraw").on("click", function(){
var amount = parseInt($("#savings > .input").val());
if (isNaN(amount)){
  console.log("error")}
else if (amount > savingsAmount){
  alert("You don't have enough")
}
else{
savingsAmount = savingsAmount - amount;
$("div#savings > div.balance").html("$" + savingsAmount);}
$(".input").val(null)
})

// check for overdraft on checking
function overdraftCheck(){
if (checkingAmount < 0 && amount < (savingsAmount + checkingAmount)) {
  savingsAmount = savingsAmount + checkingAmount;
  checkingAmount = 0;
  // $("#checking").removeClass("account");
  $("#checking").addClass("zero");
  $("div#savings > div.balance").html("$" + savingsAmount);
  $("div#checking > div.balance").html("$" + checkingAmount);}

}

// check for overdraft on savings
// function overdraftSavings(){
//   if (savingsAmount < 0)
// }


//check if checking positive
function inTheBlack(){
  if (checkingAmount > 0) {
    $("#checking").removeClass("zero");
  }
}
})
