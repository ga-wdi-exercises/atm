$(document).ready(function(){
//Adding or Depositing Money
$("chkMoneyDeposit").on("click", depositMoney);
$("savMoneyDeposit").on("click", depositMoney);
//Subtracting or Withdrawing Money
$("chkMoneyWithdraw").on("click", withdrawMoney);
$("savMoneyWithdraw").on("click", withdrawMoney);
var totalbalance = 0;
//deposits the money
function depositMoney(){
  var result = previousBal.text();
  var newbal = parseInt(result.replace("$", ""));
  var newRecord = parseInt($(this).siblings("bankMoney").val());

      $(previousBal).text(function() {
        var total = newRecord + newbal;
        return "$" + total;
      });

//Clear all values
$(this).siblings("input.bankMoney").val("")
}
//Adds up the total sum balance
var sumBal
function getSumBal () {
var chkBalance = $("#checkingBalance").text();
var checkingBalance = parseInt(chkBalance.replace("$", ""));
var savBalance = $("#savingsBalance").text();
var savingsBalance = parseInt(savBalance.replace("$", ""));
sumBal = savingsBalance + checkingBalance;
return sumBal;
}
//withdraws the money
function withdrawMoney() {
  getSumBal();
  var prvBal = $(this).siblings("div.totalbalance");
  var result = prvBal.text();
  var currentBal = parseInt(result.replace("$", ""));
  var newWD = parseInt($(this).siblings("input.bankMoney").val());
  $(prvBal).text()

}


});
