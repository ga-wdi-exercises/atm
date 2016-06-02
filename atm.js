$(document).ready(function(){
  var moneyDeposit = $("#checking").find(".deposit")
moneyDeposit.on("click", function(){
  var moneyInput = parseInt($(".input").val());
  var balanceDeposit = parseInt($("#balanceChecking").html().replace("$", ""));
  var balanceChange = $("#balanceChecking");
  var totalBalance = moneyInput + balanceDeposit;
  balanceChange.html("$" + totalBalance);
});


  var moneyWithdraw = $("#checking").find(".withdraw")
moneyWithdraw.on("click", function(){
  var moneyInput = parseInt($(".input").val());
  var balanceWithdraw = parseInt($("#balanceChecking").html().replace("$", ""));
  var balanceChange = $("#balanceChecking");
  var totalBalance = balanceWithdraw - moneyInput;
  balanceChange.html("$" + totalBalance);


});



});
