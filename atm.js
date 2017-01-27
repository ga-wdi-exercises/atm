$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

function changeBackgroundColorToRed(){
  $("body").css("background-color", "red");
};

changeBackgroundColorToRed();

var depositCheck = $("#checking .deposit");
var checkingInput = $("checking .input");


depositCheck.on("click", function(){
  $("#checking .balance").console.log("$" + checkingInput.value)
});
