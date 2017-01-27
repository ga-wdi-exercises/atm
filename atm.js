$(document).ready(function(){
});

//Temporary Value in Checking Input
$("#checking .input").val("Something");

//Create Checking Input Variable
var checkingInput;

//Create Checking Balance Variable
var checkingBalance = $("#checking .balance").html();

//Upon Clicking, grab Checking Input, Console Log It, Make That Checking Balance
$("#checking .deposit").on("click", function(){
  checkingInput = $("#checking .input").val();
  console.log(checkingInput);
  checkingBalance = $("#checking .balance").html("$ " + checkingInput);
})
