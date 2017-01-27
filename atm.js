$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

function changeBackgroundColorToRed(){
  $("body").css("background-color", "red");
};

changeBackgroundColorToRed();

var depositCheck = $("#checking .deposit")
var checkingInput = $("#checking .input")
var checkingBalance = $("checking .balance").val()




depositCheck.on("click", function(){
  $("#checking .balance").text("$" + checkingInput.val())
});
