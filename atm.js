

$(document).ready(function(){

// Make Balance an integer without the $

var zeroBalanceText = $("#checking .balance").text();
var zeroBalanceNoDSign =  zeroBalanceText.split("$")[1];
var zeroBalanceInt = parseInt(zeroBalanceNoDSign);

//This section is for checking


var originalBalance = 0


var depositChecking = $("#checking .deposit");
depositChecking.on("click", function(){
      var prevBalance = $("#checking .balance").val();
      var newEntry = $("#checking .input").val();

        var newBalance = prevBalance + newEntry;
        var prevBalance = newBalance;

    })


var withdrawChecking = $("#checking .withdraw")

withdrawChecking.on("click", function(){

    })


//This section is for Savings

  var depositSavings = $("#savings .deposit")
    depositSavings.on("click", function(){

    })

  var withdrawSavings = $("#savings .withdraw")
    withdrawSavings.on("click", function(){

    })





});
