$("input").eq(1).on("click", depositIntoChecking);
$("input").eq(4).on("click", depositIntoSavings);

function depositIntoChecking(event) {
  event.preventDefault();
  var checkingAccountUserInput = Number(parseFloat($("input").eq(0).val()).toFixed(2));
  var checkingTotal = (parseFloat($("div.balance").eq(0).html().substr(1))) + checkingAccountUserInput;
  $("div.balance").eq(0).html("$" + checkingTotal);
}
function depositIntoSavings(event) {
  event.preventDefault();
  var savingsAccountUserInput = Number(parseFloat($("input").eq(3).val()).toFixed(2));
  var savingsTotal = (parseFloat($("div.balance").eq(1).html().substr(1))) + savingsAccountUserInput;
  $("div.balance").eq(1).html("$" + savingsTotal);
}
