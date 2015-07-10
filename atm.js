$("input").eq(1).on("click", depositIntoChecking);
$("input").eq(4).on("click", depositIntoSavings);
$("input").eq(2).on("click", withdrawFromChecking);
$("input").eq(5).on("click", withdrawFromSavings);
$(".account").eq(0).addClass("zero");
$(".account").eq(1).addClass("zero");
$("input").eq(0).on("keypress", function(event) {
  if(event.which == 13) {
    event.preventDefault();
    var checkingAccountUserInput = Number(parseFloat($("input").eq(0).val()));
    var checkingTotalAfterWithdrawal = (parseFloat($("div.balance").eq(0).html().substr(1))) + checkingAccountUserInput;
    $("div.balance").eq(0).html("$" + checkingTotalAfterWithdrawal.toFixed(2));
    $("input").eq(0).val("");
    $(".account").eq(0).removeClass("zero");
  }
});
$("input").eq(3).on("keypress", function(event) {
  if(event.which == 13) {
    event.preventDefault();
    var savingsAccountUserInput = Number(parseFloat($("input").eq(3).val()));
    var savingsTotal = (parseFloat($("div.balance").eq(1).html().substr(1))) + savingsAccountUserInput;
    $("div.balance").eq(1).html("$" + savingsTotal.toFixed(2));
    $("input").eq(3).val("");
    $(".account").eq(1).removeClass("zero");
  }
});
function depositIntoChecking(event) {
  event.preventDefault();
  var checkingAccountUserInput = Number(parseFloat($("input").eq(0).val()));
  var checkingTotalAfterWithdrawal = (parseFloat($("div.balance").eq(0).html().substr(1))) + checkingAccountUserInput;
  $("div.balance").eq(0).html("$" + checkingTotalAfterWithdrawal.toFixed(2));
  $("input").eq(0).val("");
  $(".account").eq(0).removeClass("zero");
}
function depositIntoSavings(event) {
  event.preventDefault();
  var savingsAccountUserInput = Number(parseFloat($("input").eq(3).val()));
  var savingsTotal = (parseFloat($("div.balance").eq(1).html().substr(1))) + savingsAccountUserInput;
  $("div.balance").eq(1).html("$" + savingsTotal.toFixed(2));
  $("input").eq(3).val("");
  $(".account").eq(1).removeClass("zero");
}
function withdrawFromChecking(event) {
  event.preventDefault();
  var checkingAccountUserWithdrawal = Number(parseFloat($("input").eq(0).val()));
  var checkingTotalAfterWithdrawal = (parseFloat($("div.balance").eq(0).html().substr(1))) - checkingAccountUserWithdrawal;
  var savingsTotal = (parseFloat($("div.balance").eq(1).html().substr(1)));
  if(checkingTotalAfterWithdrawal + savingsTotal < 0) {
    alert("Sorry! You have insufficient Funds!");
  }
  else if(checkingTotalAfterWithdrawal > 0){
    $("div.balance").eq(0).html("$" + checkingTotalAfterWithdrawal.toFixed(2));
    $("input").eq(0).val("");
  }
  else{
    var currentAmountInChecking = (parseFloat($("div.balance").eq(0).html().substr(1)));
    var totalAvailableFunds = currentAmountInChecking + savingsTotal;
    console.log(totalAvailableFunds);
    var amountToWithdrawFromSavings = checkingAccountUserWithdrawal - currentAmountInChecking;
    savingsTotal = savingsTotal - amountToWithdrawFromSavings;
    $("div.balance").eq(0).html("$0.00");
    $(".account").eq(0).addClass("zero");
    if(savingsTotal === 0) {
      $(".account").eq(1).addClass("zero");
    }
    $("div.balance").eq(1).html("$" + savingsTotal.toFixed(2));
    $("input").eq(0).val("");
  }
}
function withdrawFromSavings(event) {
  event.preventDefault();
  var savingsAccountUserWithdrawal = Number(parseFloat($("input").eq(3).val()));
  var savingsTotalAfterWithdrawal = (parseFloat($("div.balance").eq(1).html().substr(1))) - savingsAccountUserWithdrawal;
  var checkingTotal = (parseFloat($("div.balance").eq(0).html().substr(1)));
  if(savingsTotalAfterWithdrawal + checkingTotal < 0) {
    alert("Sorry! You have insufficient Funds!");
  }
  else if(savingsTotalAfterWithdrawal > 0){
    $("div.balance").eq(1).html("$" + savingsTotalAfterWithdrawal.toFixed(2));
    $("input").eq(3).val("");
  }
  else{
    var currentAmountInSavings = (parseFloat($("div.balance").eq(1).html().substr(1)));
    var totalAvailableFunds = currentAmountInSavings + checkingTotal;
    console.log(totalAvailableFunds);
    var amountToWithdrawFromChecking = savingsAccountUserWithdrawal - currentAmountInSavings;
    checkingTotal = checkingTotal - amountToWithdrawFromChecking;
    $("div.balance").eq(1).html("$0.00");
    $(".account").eq(1).addClass("zero");
    if(checkingTotal === 0) {
      $(".account").eq(0).addClass("zero");
    }
    $("div.balance").eq(0).html("$" + checkingTotal.toFixed(2));
    $("input").eq(3).val("");
  }
}
