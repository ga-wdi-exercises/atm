$(document).ready(function(){

  var value =0
  var balance

  $(".deposit").click(function(){

    var balance = $(".checkingbalance").html()
    var depositBalance = parseInt (balance) + parseInt( $("#depo").val())

    $(".checkingbalance").html(depositBalance)

  });

  $(".withdraw").click(function(){

    var balance = $(".checkingbalance").html()
    var withdrawBalance = parseInt (balance) - parseInt( $("#depo").val())

    $(".checkingbalance").html(withdrawBalance)
  });

  $(".savingdeposit").click(function(){

    var savingbalance = $(".savingbalance").html()
    var depositBalanceSaving = parseInt (savingbalance) + parseInt( $("#savingdepo").val())

    $(".savingbalance").html(depositBalanceSaving )

  });

  $(".savingwithdraw").click(function(){

    var savingbalance= $(".savingbalance").html()
    var withdrawBalanceSaving = parseInt (savingbalance) - parseInt( $("#savingdepo").val())

    $(".savingbalance").html(withdrawBalanceSaving)

  });
})
