$(document).ready(function(){

/* CHECKINGS */
  var checkingTotal = 0;

  $("#checking .deposit").on("click", function (evt) {
    evt.preventDefault();
    var depositAmount = $("#checking .input").val()
    $("#checking .balance").css("background", "rgb(204, 204, 204)");
    depositFunction(depositAmount);
  })

  $("#checking .withdraw").on("click", function (evt) {
    evt.preventDefault();
    var withdrawAmount = $("#checking .input").val()
    if (withdrawAmount == "") {
      $("#checking .balance").html("<p class='smallText'>Please enter an amount</p>");
      $("#checking .balance").css("background", "rgb(232, 63, 63)");
    } else {
    withdrawFunction(withdrawAmount);
  }
  })

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
    } else if (backToNumber === checkingTotal) {
      checkingTotal = 0;
      $("#checking .balance").html(checkingTotal);
      $("#checking .balance").css("background", "rgb(232, 63, 63)");
    } else {
      checkingTotal -= backToNumber;
      var finalNumber = "$" + parseFloat(checkingTotal.toFixed(2));
      $("#checking .balance").html(finalNumber);
    }
  }





/*********
Pseudo Code
**********/

//ON CLICK, take amount user entered and pass this through to deposit function

// named function

// takes number and parses it as an integer
// turns it to a number two decimal places with a dollar sign in front of it







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
