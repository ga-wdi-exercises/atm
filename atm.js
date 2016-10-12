$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
console.log("asfd");

  //Step 2/3 - Click listener/Log User Input
  $("#checking .deposit").on('click', function () {
    console.log($("#checking input").val());
  })

  //Step 4
});
