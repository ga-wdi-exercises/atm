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
else if  (amount <= (checkingAmount + savingsAmount)) {
checkingAmount = checkingAmount - amount;
$("div#checking > div.balance").html("$" + checkingAmount)}
else
{ alert("You don't have enough");}
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
inTheBlack()
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
else {
savingsAmount = savingsAmount - amount;
$("div#savings > div.balance").html("$" + savingsAmount);}
isSavingsZero()
$(".input").val(null)
})

var feesTimer;

// check for overdraft on checking, if overdraft,
function overdraftCheck(){
if (checkingAmount < 0 ) {
  savingsAmount = savingsAmount + checkingAmount;
  checkingAmount = 0;
  // $("#checking").removeClass("account");
  $("#checking").addClass("zero");
  $("div#savings > div.balance").html("$" + savingsAmount);
  $("div#checking > div.balance").html("$" + checkingAmount);
  feesTimer = setInterval(overdraftFees, 2500)}


}
//check if either account positive, removes red and stops overdraft if so
function inTheBlack(){
  if (checkingAmount > 0) {
    $("#checking").removeClass("zero");
    clearInterval(feesTimer);
    console.log("back in black");
  }
  if (savingsAmount > 0) {
    $("#savings").removeClass("zero");

  }
}
})
//reduces savings by one if overdraft
function overdraftFees(){
savingsAmount = savingsAmount -1;
$("div#savings > div.balance").html("$" + savingsAmount);
isSavingsZero()

}
//checks to see if savings is zero, turns red if so
function isSavingsZero() {
  if (savingsAmount == 0) {
    $("#savings").addClass("zero");
    console.log("asdfsdfjf");
    alert("You are out of money");
  }
}
;
