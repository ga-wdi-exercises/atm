$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

depositButton = $(".deposit")
withdrawButton = $("withdraw")
checkingInput = $(".checking .input")
savingsInput = $(".savings .input")


//$("body").css("background", "red")

depositButton.on("click",deposit)



function deposit() {
  console.log("You made a deposit")
}
