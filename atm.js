var checkingWithdrawButton = $("#withdrawButton");
var checkingBalance = $("#checkingBalance");
var checkingNewDeposit = $("#valueinput");
var checkingValue = $("#checkingNewDeposit.val()");
var cBalance= checkingBalance.html().substr(1);
var checkingDespositButton = $("#depositButton");
checkingDespositButton.on("click", function(){
  var checkingNewDeposit = $("#valueinput");
  var checkingTotal = parseInt(checkingValue) + parseInt(cBalance);
  var cBalance= checkingBalance.html().substr(1);
    console.log(checkingTotal)
    checkingBalance.html("$" + checkingTotal)
})
checkingWithdrawButton.on("click", function(){
  var checkingTotal = parseInt(checkingValue) - parseInt(cBalance);
    console.log(checkingTotal)
    checkingBalance.html("$" + total)
})
var savingsDespositButton = $("#depositButton");
var savingsWithdrawButton = $("#withdrawButton");
var savingsBalance= $("#savingsBal");
var savingsNewDeposit = $("#valueinput");

savingsDespositButton.on("click", function(){
  var savingsValue = savingsNewDeposit.val();
  var sBalance= savingsBalance.substr(1);
  var sTotal = parseInt(savingsValue) + parseInt(sBalance);
    console.log(sTotal)
  savingsBalance("$" + sTotal)
})
savingsWithdrawButton.on("click", function(){
  var value = savingsNewDeposit.val();
  var sBalance= savingsBalance.html().substr(1);
  var total = parseInt(value) - parseInt(cBalance);
    console.log(total)
    savingsBalance.html("$" + total)
})
var checkingDeposit = function(amount){
}
function checkingWithdrawal(amount){
}
function savingsDeposit(amount){
}
function savingsWithdrawal(amount){
}
