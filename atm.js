$(document).ready(function(){

var checkingBalance = 0;
//when clicked
  $("#checking .deposit").on("click", function(){
//store user input to variable entry
  var entry = Number($("#checking .input").val()); //listen for user input
    checkingBalance += entry;
    //display entry to the checking account div
    $("#checking .balance").html("$" + checkingBalance);
    //updates value of checkingBalance
    $("#checking .balance").val(checkingBalance);
    console.log(checkingBalance);
  })
});
