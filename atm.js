//
// $(document).ready(function(){
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });

// $("#checking").children(".deposit").on("click", function(){
//  console.log($("input").val());
// });
//
// $("#checking").children(".deposit").on("click", function(){
//   var amount = $("input").val();
//   $(".checkBal").html(amount);
// });
//



// $("#checking").children(".deposit").on("click", function() {
//
//   console.log($("input").val());
// });

$("#checking").children(".deposit").on("click", function(){
  amount = $("input").val();
  console.log($("input").val());
  $(".checkBal").html("$" + amount);
});
