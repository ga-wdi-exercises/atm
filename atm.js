$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var checkingBalance = 0;
var savingsBalance = 0;
//step 1
$("body").css("background", "red")

//step 2/3
$("#checking .deposit").on("click", function(){

  var entry = Number($("#checking .input").val());
  checkingBalance += entry;
  $("#checking .balance").text( "$" + checkingBalance);
  $("#checking .balance").val(checkingBalance);
})

//checking withdrawal
$("#checking .withdraw").on("click", function(){
  var entry = Number($("#checking .input").val());
  checkingBalance -= entry;
  overdraft();
})

//same but with savings
$("#savings .deposit").on("click", function(){
  var entry = Number($("#savings .input").val());
  savingsBalance += entry;
  $("#savings .balance").text( "$" + savingsBalance);
  $("#savings .balance").val(savingsBalance);
})

//step 6
$("#savings .withdraw").on("click", function(){

  var entry = Number($("#savings .input").val());
  savingsBalance -= entry;
  $("#savings .balance").text( "$" + savingsBalance);
  $("#savings .balance").val(savingsBalance);
})

//overdraft protection
function overdraft(){
if (checkingBalance < 0){
  console.log("overdraft")
  savingsBalance += checkingBalance;
  checkingBalance = 0;
}
  $("#savings .balance").text( "$" + savingsBalance);
  $("#savings .balance").val(savingsBalance);
  $("#checking .balance").text( "$" + checkingBalance);
  $("#checking .balance").val(checkingBalance);
}

});
