$(document).ready(function(){

  var value =0
  var balance
  // var depositBalance = parseInt (balance) + parseInt( $("#depo").val())
  // var savingbalance = $(".savingbalance").html()

  $(".deposit").click(function(){

    var balance = $(".checkingbalance").html()
    var depositBalance = parseInt (balance) + parseInt( $("#depo").val())

    $(".checkingbalance").html(depositBalance)
    if (balance + ($("#depo").val()) >= 0) {
      $("#checking.account").css("background", "rgb(108,154,116)");
    } else {""}

  });

  $(".withdraw").click(function(){

    var balance = $(".checkingbalance").html()
    var withdrawBalance = parseInt (balance) - parseInt( $("#depo").val())

    if (balance - ($("#depo").val()) >= 0)   { $(".checkingbalance").html(withdrawBalance)

  } else if (balance - ($("#depo").val()) < 0) {
      $("#checking.account").css("background", "red");
    }

  });

  $(".savingdeposit").click(function(){

    var savingbalance = $(".savingbalance").html()
    var depositBalanceSaving = parseInt (savingbalance) + parseInt( $("#savingdepo").val())

    $(".savingbalance").html(depositBalanceSaving)

    if (savingbalance + ($("#savingdepo").val()) >= 0) {
      $("#savings.account").css("background", "rgb(108,154,116)");
    } else {""}

  });

  $(".savingwithdraw").click(function(){

    var savingbalance= $(".savingbalance").html()
    var withdrawBalanceSaving = parseInt (savingbalance) - parseInt( $("#savingdepo").val())

      if (savingbalance - ($("#savingdepo").val()) >= 0 ) {
      $(".savingbalance").html(withdrawBalanceSaving)

    } else if (savingbalance - ($("#savingdepo").val()) < 0 ) {
      $("#savings.account").css("background", "red");
    }

  });

  // if (depositBalance > 0) {
  //   $("#checking.account").css("background", "#E3E3E3");
  //   $("#savings.account").css("background", "#E3E3E3");
  // }
    });
