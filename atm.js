$(document).ready(function(){

$(".deposit").on("click", function(){
  var moneyInput = $(".input").val();
  var balanceChange = $(".balance");
  balanceChange.html("$" + moneyInput);
});

});
