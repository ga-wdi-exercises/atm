$(document).ready(function(){
  var moneyDeposit = $("#checking").find(".deposit")
  moneyDeposit.on("click", function(){
    var currentBalance = parseInt($("#balanceCheck").html().replace("$", ""));
    var moneyInput = parseInt($(".input").val());
    var totalBalance = moneyInput + currentBalance;
    var balanceChange = $("#balanceCheck");
    balanceChange.html("$"+totalBalance);
  })
});
