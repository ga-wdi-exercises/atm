$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var currentBalance = 0;
//step 1
$("body").css("background", "red")

//step 2/3
$("#checking .deposit").on("click", function(){

  var entry = Number($("#checking .input").val());
  currentBalance += entry;

  $("#checking .balance").html( "$" + currentBalance);
  $("#checking .balance").val(currentBalance);

  //currentBalance = $("#checking .balance").val();
  console.log(currentBalance);
})

});
