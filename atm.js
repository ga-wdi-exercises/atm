$(document).ready(function(){

  var checkingInput = $("#checking").find($(".input"));
  var checkingDeposit = $("#checking").find($(".deposit"));
  var checkingWithdraw = $("#checking").find($(".withdraw"));
  var checkingBalance = $("#checking").find($("span"));

  var savingsInput = $("#savings").find($(".input"));
  var savingsDeposit = $("#savings").find($(".deposit"));
  var savingsWithdraw = $("#savings").find($(".withdraw"));
  var savingsBalance = $("#savings").find($("span"));

  checkingDeposit.click(depositChecking);
  checkingWithdraw.click(withdrawChecking);

  savingsDeposit.click(depositSavings);
  savingsWithdraw.click(withdrawSavings);
  // depositing into checking
  function depositChecking() {
    // pulls number from page and trims decimals if exist
    var amount = toNumber(checkingInput.val());
    var balance = parseInt(checkingBalance.text());
    if (isNaN(amount)) {
      alert("You must enter a real number.");
    } else {
      checkingBalance.text(balance + amount);
    }
  }
  // withdraw checking
  function withdrawChecking() {
    // pulls number from page and trims decimals if exist
    var amount = toNumber(checkingInput.val());
    var balance = parseInt(checkingBalance.text());
    // checks available balance, if less than amount then sends to overdraft function
    if (amount > balance) {
      overDraft($(this).parent(), amount);
    } else {
      checkingBalance.text(balance - amount);
    }
  }

  function depositSavings() {
    // depositing into savings
    var amount = toNumber(savingsInput.val());
    var balance = parseInt(savingsBalance.text());
    if (isNaN(amount)) {
      alert("You must enter a real number.");
    } else {
      savingsBalance.text(balance + amount);
    }
  }

  function withdrawSavings(){
    // withdraw savings
    var amount = toNumber(savingsInput.val());
    var balance = parseInt(savingsBalance.text());
    // checks to make sure
    if (amount > balance) {
      overDraft($(this).parent(), amount);
    } else {
      savingsBalance.text(balance - amount);
    }
  }

  $("button, input[type='button']").click(colorCheck);

  function colorCheck(){
    var parentBox = $(this).parent();
    var balance = parseInt(parentBox.find("span").text());
    if (balance === 0) {
      parentBox.addClass("zero");
    } else if (balance > 0) {
      parentBox.removeClass("zero");
    }
  }

  function overDraft(parent, amount){
    var cBalance = parseInt(checkingBalance.text());
    var sBalance = parseInt(savingsBalance.text());
    var totalBalance = sBalance + cBalance;
    if (amount > totalBalance){
      alert("You do not have enough money to withdraw from.");
    } else if (parent.attr("id") == "checking"){
      parent.find($("span").text(0));
      savingsBalance.text(totalBalance-amount);
    } else if (parent.attr("id") == "savings"){
      parent.find($("span").text(0));
      checkingBalance.text(totalBalance-amount);
    }
  }

  function toNumber(input) {
    return Math.round(input*100)/100;
  }
});
