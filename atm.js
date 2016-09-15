// $(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var checkBalance = $("#checking").children(".balance");
var checkAmt = $("#checking").children("input.input");
var checkDeposit = $("#checking").children("input.deposit");
var checkWithdraw = $("#checking").children("input.withdraw");
var saveAmt = $("#savings").children("input.input");
var saveDeposit = $("#savings").children("input.deposit");
var saveWithdraw = $("#savings").children("input.withdraw");

//Checkings Account Flow//
//Deposit into Checking Account
var balance = 0;
checkDeposit.on("click", changeDepositAmt);
function changeDepositAmt(){
  var input = parseInt(checkAmt.val());
  balance = balance + input;
  checkBalance.text("$" + (balance));
};
checkWithdraw.on("click", changeWithdrawAmt);
function changeWithdrawAmt(){
  var input = parseInt(checkAmt.val());
  balance = balance - input;
  checkBalance.text("$" + (balance));
};
