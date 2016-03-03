// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }

// an eventListerner for each button, each one a "click"

var checkingBalance = $("checkingBalance");
var checkingAmount = $("checkingAmount");
var savingsBalance = $("savingsBalance");
var savingsAmount = $("savingsAmount");



// $("checkingDeposit").on("click", function(){
// checkingBalance.text("$"+ (parseInt(checkingBalance.html().replace("$","")) +parseInt(checkingAmount.val())));
// checkingAmount.val("");
// });
//
// $("withDrawChecking").on("click", function(){
//   checkingBalance.text("$" + (parseInt(checkingBalance.html().replace(
//     replace("$", "")) - parseInt(checkingEntry.val())));
//  +checkingEntry.val("");
// if (checkingEntry.val() > parseInt(checkingBalance.html().replace("$",""))-parseInt(checkingAmount.val()))
//   ))};

$(checkingDeposit).click(function(){
  checkingTotal += parseFloat(checkingInput.val());
  checkingBalance.html();
})
$(checkingWithdraw).click(function() {
if (checkingBalance.html() < checkingAmount.val() ) {
  checkingBalance.addClass("zero");
else {
  checkingTotal -= parseFloat(checkingInput.val());
  checkingBalance.html();
}
}
});
