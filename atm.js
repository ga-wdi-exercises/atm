$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
$("body").css("background", "red")
$("#checking .deposit").on("click", function(){
  console.log("test")
})
});
