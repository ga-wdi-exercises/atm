$(document).ready(function(){
});

//Temporary Value in Checking Input
$("#checking .input").val("Something");

//Create Checking Input Variable
var checkingInput;

//Upon Clicking, grab Checking Input and Console Log It
$("#checking .deposit").on("click", function(){
  checkingInput = $("#checking .input").val();
  console.log(checkingInput);
})
