//
// $(document).ready(function(){
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });


balance = $(".checkBal").html();
amountChecking = 0;

$("#checking").children(".deposit").on("click", function(){
  amountChecking += parseInt($('#checking .input').val());
  $("#checking .balance").html("$" + amountChecking);
});
   $("#checking").children(".withdr").on("click", function(){
    amountChecking -= parseInt($('#checking .input').val());
    $("#checking .balance").html("$" + amountChecking);
});

// $("#checking").children(".deposit").on("click", function(){
//   // amount = $("input").val();
//   console.log($("input").val());
//   $(".checkBal").html("$" + amount);
// });
