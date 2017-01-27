//

// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });

amountChecking = 0;
amountSavings = 0;
function negitiveAmount(){
  var total = (amountChecking + amountSavings);
  /*if(amountChecking <= 0){
    $('#checking .balance').css("background", "red");
  } else if (amountSavings <= 0){
    $('#savings .balance').css("background", "red");
  } else */
  if (total <= 0){
    $('#savings .balance').css("background", "red");
    $('#checking .balance').css("background", "red");
  } else {
    $('#checking .balance').css("background", "#E3E3E3");
    $('#savings .balance').css("background", "#E3E3E3");
  }
}
clear = "";
//Checking Deposit
$("#checking").children(".deposit").on("click", function(){
  amountChecking += parseInt($('#checking .input').val());
  $("#checking .balance").html("$" + amountChecking);
  $("#checking .input").val(clear);
  negitiveAmount();
});
//checking withdrawal
   $("#checking").children(".withdraw").on("click", function(){
    amountChecking -= parseInt($('#checking .input').val());
    $("#checking .balance").html("$" + amountChecking);
    $("#checking .input").val(clear);
    negitiveAmount();
});

//Savings Deposit
  $("#savings").children(".deposit").on("click", function(){
    amountSavings += parseInt($('#savings .input').val());
    $("#savings .balance").html("$" + amountSavings);
    $("#savings .input").val(clear);
    negitiveAmount();
});

  //Savings Withdraw
  $("#savings").children(".withdraw").on("click", function(){
    amountSavings -= parseInt($('#savings .input').val());
    $('#savings .balance').html("$" + amountSavings);
    $("#savings .input").val(clear);
      negitiveAmount();
});
