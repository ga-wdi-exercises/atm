// $(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// $("body").css("background-color", "red");
$(document).ready(function(){

var checkingDepositButton = $("#checking .deposit");
var checkingBalance = 0;
var savingDepositButton = $("#savings .deposit");
var savingBalance = 0;
var checkingWithdrawButton = $("#checking .withdraw");
var savingWithdrawButton = $("#savings .withdraw");

checkingDepositButton.on("click", function(){
  var inputCheckingBalance = Number($("#checking .input").val());
  checkingBalance += inputCheckingBalance;
  $("#checking .balance").html("$" + Number(checkingBalance));
});

savingDepositButton.on("click", function(){
  var inputSavingBalance = Number($("#savings .input").val());
  savingBalance += inputSavingBalance;
  $("#savings .balance").html("$" + Number(savingBalance));
});

checkingWithdrawButton.on("click", function(){
  var inputCheckingBalance = Number($("#checking .input").val());
  checkingBalance -= inputCheckingBalance;
  $("#checking .balance").html("$" + Number(checkingBalance));
});

savingWithdrawButton.on("click", function(){
  var inputSavingBalance = Number($("#savings .input").val());
  savingBalance -= inputSavingBalance;
  $("#savings .balance").html("$" + Number(savingBalance));

});

});
