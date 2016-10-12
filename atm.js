$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var checkingBalance = 0;
//step 1
$("body").css("background", "red")

//step 2/3
$("#checking .deposit").on("click", function(){
  checkingBalance = $("#checking .input").val();
  $("#checking .balance").html( "$" + checkingBalance);
})

});
