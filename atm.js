//Checking
var balance = $("#checking .balance");
var input = $("#checking .input");
var withdraw = $("#checking .withdraw");
var deposit = $("#checking .deposit");
// Savings 
var SavingsBalance = $("#savings.balance");
var savingsInput = $("#savings .input");
var savingsWithdraw = $("#savings .withdraw");
var savingDeposit = $("#savings .deposit");

deposit.on("click", updateSavings);

function updateSavings() {
   	