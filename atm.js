$(document).ready(function(){

var checkingInput = $("#checking .input").val()
var savingsInput = $("#savings .input").val()
var checkingTotal = 0
var savingsTotal = 0

function checkingColor(){
  if (checkingTotal == 0){
    $("#checking .balance").addClass("zero");
  }
  else{
    $("#checking .balance").removeClass("zero");
    console.log("work bitch");
  }
}
function savingsColor(){
  if (savingsTotal == 0){
    $("#savings .balance").addClass("zero");
  }
  else{
    $("#savings .balance").removeClass("zero");
  }
}

checkingColor();
savingsColor();

$("#checking .deposit").on("click", function(){
  var checkingInput = $("#checking .input").val()
  if (checkingInput <= 0){
    alert("Your desposit must be greater than zero.")
  }
  else {
    checkingInput = parseInt(checkingInput);
    checkingTotal += checkingInput;
    $("#checking .balance").html('$' + checkingTotal);
    checkingColor()
  }
});

$("#savings .deposit").on("click", function(){
  var savingsInput = $("#savings .input").val()
  if (savingsInput <= 0){
    alert("Your desposit must be greater than zero.")
  }
  else {
    savingsInput = parseInt(savingsInput);
    savingsTotal += savingsInput;
    $("#savings .balance").html('$' + savingsTotal);
    savingsColor()
  }
});

$("#checking .withdraw").on("click", function(){
  var checkingWithdraw = $("#checking .input").val();

    checkingWithdraw = parseInt(checkingWithdraw);
  if (checkingWithdraw <= checkingTotal){
    checkingTotal -= checkingWithdraw;

    $("#checking .balance").html('$' + checkingTotal);
    checkingColor();

  }
  else {
    alert("Account balance is too low for withdrawl.")
  }
});

$("#savings .withdraw").on("click", function(){
  var savingsWithdraw = $("#savings .input").val();

    savingsWithdraw = parseInt(savingsWithdraw);
  if (savingsWithdraw <= savingsTotal){
    savingsTotal -= savingsWithdraw;

    $("#savings .balance").html('$' + savingsTotal);
    savingsColor();

  }
  else {
    alert("Account balance is too low for withdrawl.")
  }
});

});
