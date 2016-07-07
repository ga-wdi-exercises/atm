/*********
Pseudo Code At Bottom
**********/

$(document).ready(function(){

/*******
CHECKINGS
********/

  var checkingTotal = 0;
  if (checkingTotal === 0) {
    $("#checking .balance").css("background", "rgb(232, 63, 63)")
  }

  $("#checking .deposit").on("click", function (evt) {
    evt.preventDefault();
    var depositAmount = $("#checking .input").val()
    $("#checking .balance").css("background", "#E3E3E3");
    depositFunction(depositAmount);
    $(".input").val("");
  });

  $("#checking .withdraw").on("click", function (evt) {
    evt.preventDefault();
    var withdrawAmount = $("#checking .input").val()
    if (withdrawAmount == "") {
      $("#checking .balance").html("<p class='smallText'>Please enter an amount</p>");
      $("#checking .balance").css("background", "rgb(232, 63, 63)");
    } else {
    withdrawFunction(withdrawAmount);
    $(".input").val("");
  }
});

  function depositFunction(depositAmount) {
    var toNumber = parseFloat(depositAmount);
    var toTwoDecimalPlaces = toNumber.toFixed(2);
    var backToNumber = parseFloat(toTwoDecimalPlaces);
    checkingTotal += backToNumber;
    var finalNumber = "$" + parseFloat(checkingTotal.toFixed(2));
    $("#checking .balance").html(finalNumber);
  }

  function withdrawFunction(withdrawAmount) {
    var toNumber = parseFloat(withdrawAmount);
    var toTwoDecimalPlaces = toNumber.toFixed(2);
    var backToNumber = parseFloat(toTwoDecimalPlaces);
    if (backToNumber > checkingTotal) {
      $("#checking .balance").html("<p class='smallText'>Not Enough Funds</p>");
      $("#checking .balance").css("background", "rgb(232, 63, 63)");
      setTimeout(reset, 2000);
    } else if (backToNumber === checkingTotal) {
      checkingTotal = 0;
      $("#checking .balance").html("$0");
      $("#checking .balance").css("background", "rgb(232, 63, 63)");
    } else {
      checkingTotal -= backToNumber;
      var finalNumber = "$" + parseFloat(checkingTotal.toFixed(2));
      $("#checking .balance").html(finalNumber);
    }


    //setTimeout function in order to re-display total value after withdraw has been rejected
    function reset() {
      $("#checking .balance").html("$" + parseFloat(checkingTotal.toFixed(2)));
      if (checkingTotal === 0) {
        $("#checking .balance").css("background", "rgb(232, 63, 63)");
      } else {
        $("#checking .balance").css("background", "#E3E3E3");
      }
    };
  }

/*******
SAVINGS
********/

var savingsTotal = 0;
if (savingsTotal === 0) {
  $("#savings .balance").css("background", "rgb(232, 63, 63)")
}

$("#savings .deposit").on("click", function (evt) {
  evt.preventDefault();
  var depositAmount = $("#savings .input").val()
  $("#savings .balance").css("background", "#E3E3E3");
  savingsDepositFunction(depositAmount);
  $(".input").val("");
});

$("#savings .withdraw").on("click", function (evt) {
  evt.preventDefault();
  var withdrawAmount = $("#savings .input").val()
  if (withdrawAmount == "") {
    $("#savings .balance").html("<p class='smallText'>Please enter an amount</p>");
    $("#savings .balance").css("background", "rgb(232, 63, 63)");
  } else {
  savingsWithdrawFunction(withdrawAmount);
  $(".input").val("");
}
});

function savingsDepositFunction(depositAmount) {
  var toNumber = parseFloat(depositAmount);
  var toTwoDecimalPlaces = toNumber.toFixed(2);
  var backToNumber = parseFloat(toTwoDecimalPlaces);
  savingsTotal += backToNumber;
  var finalNumber = "$" + parseFloat(savingsTotal.toFixed(2));
  $("#savings .balance").html(finalNumber);
}

function savingsWithdrawFunction(withdrawAmount) {
  var toNumber = parseFloat(withdrawAmount);
  var toTwoDecimalPlaces = toNumber.toFixed(2);
  var backToNumber = parseFloat(toTwoDecimalPlaces);
  if (backToNumber > savingsTotal) {
    $("#savings .balance").html("<p class='smallText'>Not Enough Funds</p>");
    $("#savings .balance").css("background", "rgb(232, 63, 63)");
    setTimeout(savingsReset, 2000);
  } else if (backToNumber === savingsTotal) {
    savingsTotal = 0;
    $("#savings .balance").html("$0");
    $("#savings .balance").css("background", "rgb(232, 63, 63)");
  } else {
    savingsTotal -= backToNumber;
    var finalNumber = "$" + parseFloat(savingsTotal.toFixed(2));
    $("#savings .balance").html(finalNumber);
  }

  //setTimeout function in order to re-display total value after withdraw has been rejected
  function savingsReset() {
    $("#savings .balance").html("$" + parseFloat(savingsTotal.toFixed(2)));
    if (savingsTotal === 0) {
      $("#savings .balance").css("background", "rgb(232, 63, 63)");
    } else {
      $("#savings .balance").css("background", "#E3E3E3");
    }
  };
}







/*********
Pseudo Code
**********/

// DEPOSITS //

//On click: Take value inputed by user, assign to deposit variable, and pass amount through as argument to deposit function

//deposit function
// parse deposit amount as a float to two decimal places
// reparse amount since it will be a string
// add dollar sign in front of value
// append value as html to the total amount


//On click: Take value inputed by user, assign to withdraw variable, and pass amount through as argument to withdraw function

// WITHDRAWS //

//withdraw function
// parse withdraw amount as a float to two decimal places
// reparse amount since it will be a string
    //if variable stored value inputed by user is greater than total amount, do nothing or deny/ignore request
    // display current total
    //elseif variable stored value inputed by user is equal to total amount in account, total box turns red, display new total (which should be 0)
    //if variable stored value inputed by user is less than total amount
    // subtract stored variable value from the total amount, display new total
        // add dollar sign in front of value
        // append value as html to the total amount

//ON CLICK Take value inputed by user and store to withdraw variable, parsed as a float to two decimal places


});
