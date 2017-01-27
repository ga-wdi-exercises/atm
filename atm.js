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
});
