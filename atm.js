$(document).ready(function(){
  var moneyDeposit = $(".deposit")
  moneyDeposit.on("click", function(){
    var moneyInput = $(".input").val();
    var balanceChange = $(".balance");
    balanceChange.html("$"+moneyInput);
  })
});
