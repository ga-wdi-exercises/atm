$(document).ready(function(){
  var checkingDeposit = $("#checkingDeposit");
  var checkingWithdraw = $("#checkingWithdraw");
  var savingsDeposit = $("#savingsDeposit");
  var savingsWithdraw = $("#savingsWithdraw");

  //now you need to return the deposit amount//

  $(checkingDeposit).on('click', function(){
    var deposit = parseInt($("#checkingInput").val());
    var balance = parseInt($(".checkingbalance").text().replace("$", " "))
    var newBalance = "$" + (deposit + balance);
    $(".checkingbalance").text(newBalance)
  })

//do the same thing, but withdraw//
$(checkingWithdraw).on('click', function(){
  var withdraw = parseInt($("#checkingInput").val());
  var balance = parseInt($(".checkingbalance").text().replace("$", ""))
  var newBalance = "$" + (balance - withdraw);
  $(".checkingbalance").text(newBalance)

})

})
