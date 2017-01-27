$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
})


/*$( ".deposit" ).click(function() {
  console.log( "hello" );
});*/

//Click function for checking deposit button//
 var checkDeposit = $("#checking").children(".deposit").click(function() {
 alert("Hello World!");
 });
