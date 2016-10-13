//created new local variables within each function
//I feel there is a more efficent way to do this,
//and that I went the "long way" to figure this out

$(document).ready(function(){
  //checking deposit
  $("#checkingDeposit").on("click", function() {
    console.log("i work");
    var balance = parseInt($(".checking.balance").text().replace("$", ""));
    var deposit = parseInt($("#checkingInput").val());
    var newBalance = "$" + (balance + deposit);
    $(".checking.balance").text(newBalance);
  });
//checking withdrawal with overdraft protection
$("#checkingWithdraw").on("click", function() {
  console.log("I work!!!");
    var checkingBalance = parseInt($(".checking.balance").text().replace("$", ""));
    var savingsBalance = parseInt($(".savings.balance").text().replace("$", ""));
    var withdraw = parseInt($("#checkingInput").val());
    var totalBalance = checkingBalance + savingsBalance;
  if((checkingBalance - withdraw) >= 0 ){
    var newBalance = "$" + (checkingBalance - withdraw);
    $(".checking.balance").text(newBalance);
  }
  else if ((totalBalance - withdraw) >= 0) {
    var overDraft = withdraw - checkingBalance;
    $(".checking.balance").text("$0");
    var newSavingsBalance = "$" + (savingsBalance = overDraft);
    $(".savings.balance").text(newSavingsBalance);
  }
});
  //savings deposit
$("#savingsDeposit").on("click", function() {
  console.log("yay");
  var balance = parseInt($(".savings.balance").text().replace("$", ""));
  var deposit = parseInt($("#savingsInput").val());
  var newBalance = "$" + (balance + deposit);
  $(".savings.balance").text(newBalance);
});
//savings withdraw
$("#savingsWithdraw").on("click", function() {
  console.log("hi");
  var savingsBalance = parseInt($(".savings.balance").text().replace("$", ""));
  var withdraw = parseInt($("#savingsInput").val());
    if((savingsBalance - withdraw) <= 0) {
  var newBalance = "$" + (savingsBalance - withdraw);
    $(".savings.balance").text(newBalance);
}
});
});
