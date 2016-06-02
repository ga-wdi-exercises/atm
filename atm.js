$(document).ready(function(){
  console.log("!!!!!!!!!!!!");
  var checking = $("#checking .balance").text();
  var savings = $("#savings .balance").text();
  console.log("Checking Balance " + checking);
  console.log("Savings Balance " + savings);
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

});
$(".deposit").on("click",function(evt){
  evt.preventDefault();
  console.log("deposit button clicked")
})

$(".withdraw").on("click",function(evt){
  evt.preventDefault()
  console.log("withdraw button clicked")
  $(this).css("background-color","red")
})
