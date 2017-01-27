var cDeposit;
var cWithdraw;
var sDeposit;
var sWithdraw;

var cBalance = parseInt($("#checking > div").html().replace("$", ""));
$("#checking > div").addClass("zero");
var sBalance = parseInt($("#savings > div").html().replace("$", ""));
$("#savings > div").addClass("zero");


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
cWithdraw = parseInt($("#checking .input:text").val()); //100
var cBalancePrev = cBalance; //CPB = 80
cBalance = cBalance - cWithdraw; //cBalance = -20
if (cBalance < 0) {
  if (cBalance + sBalance > 0)
    {sBalance = sBalance + cBalance;
      cBalance = 0;
      $("#savings > div").html("$"+sBalance);
      $("#checking > div").html("$"+cBalance)
    }
    else {
      $("#checking > div").html("$"+cBalancePrev); //checks to see if withdraw will make balance negative
      cBalance = cBalancePrev;
      console.log("NOPE!");
    }
}
else {
$("#checking > div").html("$"+cBalance); //if it will, keeps balance at what it was
if (cBalance == 0) {
  $("#checking > div").addClass("zero")
  }
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
  if (sBalance == 0) {
    $("#savings > div").addClass("zero")
    }
}
})
