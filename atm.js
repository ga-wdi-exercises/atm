// $(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
var checkBalance = $("#checking").children(".balance");
var saveBalance = $("#savings").children(".balance");
var checkAmt = $("#checking").children("input.input");
var checkDeposit = $("#checking").children("input.deposit");
var checkWithdraw = $("#checking").children("input.withdraw");
var saveAmt = $("#savings").children("input.input");
var saveDeposit = $("#savings").children("input.deposit");
var saveWithdraw = $("#savings").children("input.withdraw");

var balance = 0;
//Checkings Account Flow//
//Deposit into Checking Account
checkDeposit.on("click", depositCheck);
function depositCheck(){
  var input = parseInt(checkAmt.val());
  balance = balance + input;
  checkBalance.text("$" + balance);
};
//Withdraw from Checking Account
checkWithdraw.on("click", withdrawCheck);
function withdrawCheck(){
  var input = parseInt(checkAmt.val());
  balance = balance - input;
  checkBalance.text("$" + (balance));
};

var sbalance = 0;
// //Savings Account Flow//
// //Deposit into Savings Account
saveDeposit.on("click", depositSave);
function depositSave(){
  var sinput = parseInt(saveAmt.val());
  sbalance = sbalance + sinput;
  saveBalance.text("$" + (sbalance));
};
//Withdraw from Savings Account
saveWithdraw.on("click", withdrawSave);
function withdrawSave(){
  var sinput = parseInt(saveAmt.val());
  sbalance = sbalance - sinput;
  saveBalance.text("$" + (sbalance));
};
