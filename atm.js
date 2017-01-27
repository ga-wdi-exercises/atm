var cDeposit;
var cWithdraw;
var sDeposit;
var sWithdraw;

var cBalance = parseInt($("#checking > div").html().replace("$", ""));
var sBalance = parseInt($("#savings > div").html().replace("$", ""));

$("#checking .deposit").click(function(){ //checking deposit button
cDeposit = parseInt($("#checking .input:text").val());
cBalance = cBalance + cDeposit;
$("#checking > div").html("$"+cBalance);
if (cBalance > 0 || $("#checking > div").hasClass("zero"))
{
  $("#checking > div").removeClass("zero")
}
})

$("#checking .withdraw").click(function(){ //checking withdraw button
cWithdraw = parseInt($("#checking .input:text").val());
var cBalancePrev = cBalance;
cBalance = cBalance - cWithdraw;
if (cBalance < 0) {
  $("#checking > div").html("$"+cBalancePrev); //checks to see if withdraw will make balance negative
  cBalance = cBalancePrev;
}
else {
$("#checking > div").html("$"+cBalance); //if it will, keeps balance at what it was
}
})

$("#savings .deposit").click(function(){
sDeposit = parseInt(($("#savings .input:text").val()));
sBalance = sBalance + sDeposit;
$("#savings > div").html("$"+sBalance);
if (sBalance > 0 || $("#savings > div").hasClass("zero"))
{
  $("#savings > div").removeClass("zero")
}
})

$("#savings .withdraw").click(function(){  //savings withdraw  button
sWithdraw = parseInt(($("#savings .input:text").val()));
var sBalancePrev = sBalance;
sBalance = sBalance - sWithdraw;
if (sBalance < 0) {                       //checks to see if withdraw will make balance negative
  $("#checking > div").html("$"+sBalancePrev); //if it will, keeps balance at what it was
  sBalance = sBalancePrev;
}
else {
$("#savings > div").html("$"+sBalance);
}
})

if (cBalance == 0) {
  $("#checking > div").addClass("zero")
  }

if (sBalance == 0) {
  $("#savings > div").addClass("zero")
  }
