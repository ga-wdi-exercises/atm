$(document).ready(function(){

//On deposit summit, add user input to the appropriate variable

//Target div class "balance" inside id checking, set to variable

checkingAmount = 0;
$("div#checking > div.balance").html("$" + checkingAmount);


//Target the deposit amount so that it shows up in checking account
$("div#checking > .deposit").on("click", function(){
  var amount = parseInt($("#checking > .input").val());
  checkingAmount = checkingAmount + amount;
  $("div#checking > div.balance").html("$" + checkingAmount);

})

//Target the withdraw the amount of checking

$("div#checking > .withdraw").on("click", function(){
  var amount = parseInt($("#checking > .input").val());
  checkingAmount = checkingAmount - amount;
  $("div#checking > div.balance").html("$" + checkingAmount);
})

savingsAmount = 0;

//Target amount of savings

$("div#savings > .deposit").on("click", function(){
  var amount = parseInt($("#savings > .input").val());
  savingsAmount = savingsAmount + amount;
  $("div#savings> div.balance").html("$" + savingsAmount);
})

  $("div#savings > .withdraw").on("click", function(){
    var amount = parseInt($("#savings > .input").val());
    savingsAmount = savingsAmount - amount;
    $("div#savings > div.balance").html("$" + savingsAmount);

})




//);



//Target the click button to add anything to the amount

});
