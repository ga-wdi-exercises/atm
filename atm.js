//
// $(document).ready(function(){
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });
// totalAmount = 0;
amountChecking = 0;
amountSavings = 0;
//checking deposit
$("#checking").children(".deposit").on("click", function(){
  amountChecking += parseInt($('#checking .input').val());
  $("#checking .balance").html("$" + amountChecking);
});
//checking withdrawal
   $("#checking").children(".withdraw").on("click", function(){
    amountChecking -= parseInt($('#checking .input').val());
    $("#checking .balance").html("$" + amountChecking);
});

//Savings Deposit
  $("#savings").children(".deposit").on("click", function(){
    amountSavings += parseInt($('#savings .input').val());
    $("#savings .balance").html("$" + amountSavings);
});

  //Savings Withdraw
  $("#savings").children(".withdraw").on("click", function(){
    amountSavings -= parseInt($('#savings .input').val());
    $('#savings .balance').html("$" + amountSavings);
});
