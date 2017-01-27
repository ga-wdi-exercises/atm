$(document).ready(function(){

  var value =0
  var balance


  $(".deposit").click(function(){

    var balance = $(".checkingbalance").html()
    var depositBalance = parseInt (balance) + parseInt( $("#depo").val())

    $(".checkingbalance").html(depositBalance)

  });

  $(".withdraw").click(function(){
    // if current balance - #depo val > = 0, run the function. If current balance - #depo < 0 default.
    var balance = $(".checkingbalance").html()
    var withdrawBalance = parseInt (balance) - parseInt( $("#depo").val())

    if (balance - ($("#depo").val()) >= 0)   { $(".checkingbalance").html(withdrawBalance)
  } else if (balance - ($("#depo").val()) < 0) {
      alert ("You cant withdraw more money than you have available, fool!");
    }

  });

  $(".savingdeposit").click(function(){

    var savingbalance = $(".savingbalance").html()
    var depositBalanceSaving = parseInt (savingbalance) + parseInt( $("#savingdepo").val())

    $(".savingbalance").html(depositBalanceSaving)

  });

  $(".savingwithdraw").click(function(){

  // if current balance - #depo val > = 0, run the function. If current balance - #depo < 0 default.

    var savingbalance= $(".savingbalance").html()
    var withdrawBalanceSaving = parseInt (savingbalance) - parseInt( $("#savingdepo").val())

      if (savingbalance - ($("#savingdepo").val()) >= 0 ) {
      $(".savingbalance").html(withdrawBalanceSaving)

    } else if (savingbalance - ($("#savingdepo").val()) < 0 ) {
      alert ("You cant withdraw more money than you have available, fool!")
    }

  });
    });
