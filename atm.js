
//Variables for checking account.
var $depositCheck = $("#checking .deposit");
var $balanceCheck = $("#checking .balance");
var $withdrawCheck = $("#checking .withdraw");
//Variables for savings account.
var $depositSave = $("#savings .deposit");
var $balanceSave = $("#savings .balance");
var $withdrawSave = $("#savings .withdraw");
//Sets current balances to 0.
var currentCheckBalance = 0;
var currentSaveBalance = 0;
//Changes text to include the '$'.
$balanceCheck.text("$" + currentCheckBalance);
$balanceSave.text("$" + currentSaveBalance);
//Function for clicking deposit on checking account.
$depositCheck.on("click", function(){
  var input = $("#checking .input").val();
  currentCheckBalance = currentCheckBalance + parseInt(input);
  $balanceCheck.text("$" + currentCheckBalance);
});
//Function for clicking withdraw on checking account.
$withdrawCheck.on("click", function(){
  var input = $("#checking .input").val();
  currentCheckBalance = currentCheckBalance - parseInt(input);
  $balanceCheck.text("$" + currentCheckBalance);
});
//Function for clicking deposit on savings account.
$depositSave.on("click", function(){
  var input = $("#savings .input").val();
  currentSaveBalance = currentSaveBalance + parseInt(input);
  $balanceSave.text("$" + currentSaveBalance);
});
//Functino for clicking withdraw on savings account.
$withdrawSave.on("click", function(){
  var input = $("#savings .input").val();
  currentSaveBalance = currentSaveBalance - parseInt(input);
  $balanceSave.text("$" + currentSaveBalance);
});
