$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
  console.log("hello world");
});


$('.deposit').on('click', function(){
var userInputValue = $('.input').val();
  console.log(userInputValue);
  $('#checking .balance').html(userInputValue);
}
)
