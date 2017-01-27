
// $(document).ready(function(){
// })
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// // want to be able to deposit money into one of the bank accounts--checking
// //setting up deposit buttons
// $("depositC", "button").on("click", addUpTheMoney);
// $("depositS").on("click", addUpTheMoney);
// // setting up withdrawal
// $("withdrawC").on("click", subtractMoney);
// $("withdrawS").on("click", subtractMoney);
//
// //deposit
// function addUpTheMoney(){
// //current balance
// console.log($$$)
// var prevBalance = $(this).siblings("div.balance");
// var result = prevBalance.text();
// var currentBalance = parseFloat (result.replace("$", ""));
//
//
// var newEntry = parseFloat($(this).siblings("input.balance").val());
//
// $(prevBalance).text( function(){
//     var total = newEntry + currentBalance;
//     return "$" + total;
// });
// $(this).siblings("input.balance").val("");
// $(this).siblings("div.balance").css("background-color", red)
//
// }
// //adding sums
// var balanceSum;
// function getSumBalances(){
//   var cBalance = $("#checkingBalance").text();
//   var checkingBalance = parseFloat(cBalance.replace("$", ""));
//   var sBalance = $("#savingsBalance").text();
//   var savingsBalance = parseFloat (sBalance.replace("$", ""));
//     balanceSum = savingsBalance + checkingBalance;
//     return balanceSum;
// }
// //subtracting
// function subtractMoney() {
//   getSumBalances();
//
//   var prevBalance = $(this).siblings("div.balance");
//   var result = prevBalance.text();
//
//   var currentBalance = parseFloat(result.replace("$", ""));
//
//   var newWithdrawal = parseFloat($(this).siblings("input.balance".val()));
//
//   $(prevBalance).text( function() {
//
//       var total = currentBalance - newWithdrawal;
//   })
// }
// // setting up over draft

function depositChecking() {  //Deposit Button for Checking
 var userDepositChecking = parseFloat(checking.Input.val())
 totalCheckingValue = (totalCheckingValue + userDepositChecking)
 checking.Balance.text("$" + totalCheckingValue)
}
