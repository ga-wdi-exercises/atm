$(document).ready(function(){
});

//Temporary Value in Checking Input
$("#checking .input").val(100);

//Create Checking Input Variable
var checkingInput = 0;

//Create Checking Balance Variable
var checkingBalance = 0;

//Upon Clicking, grab Checking Input, Console Log It, Make That Checking Balance
$("#checking .deposit").on("click", function(){
  checkingInput = $("#checking .input").val();
  checkingBalance = +checkingBalance + +checkingInput
  console.log(checkingBalance);
  $("#checking .balance").html("$ " + checkingBalance);
  $("#checking .input").val("");
})
