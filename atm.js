$(document).ready(function(){
  var moneyDeposit = $("#checking").find(".deposit")
$(".deposit").on("click", function(){
  var moneyInput = parseInt($(".input").val());
  var balanceInput = parseInt($("#balanceChecking").html().replace("$", ""));
  var balanceChange = $("#balanceChecking");
  var totalBalance = moneyInput + balanceInput;
  balanceChange.html("$" + totalBalance);
});

});
