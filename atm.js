

$(document).ready(function(){

//Pseudo Code for Deposit overall function

// Make Balance an integer without the $

// var zeroBalanceText = $("#checking .balance").text();
// var zeroBalanceNoDSign =  zeroBalanceText.split("$")[1];
// var zeroBalanceInt = parseInt(zeroBalanceNoDSign);




//Code that Workds


var depositChecking = $("#checking .deposit");
depositChecking.on("click", function(){
      var prevBalance = $("#checking .balance").val().replace("$","");
      var newEntry = $("#checking .input").val();

        var newBalance = prevBalance + newEntry;

        $("#checking .balance").html("$" + newBalance)

    })


var withdrawChecking = $("#checking .withdraw")

withdrawChecking.on("click", function(){
  var prevBalance = $("#checking .balance").val().replace("$","");
  var newEntry = $("#checking .input").val();

    var newBalance = prevBalance - newEntry;

    $("#checking .balance").html("$" + newBalance)


    var overDraft = function(){
      if(newBalance < 0){
        alert("You are Overdrawing from your account")
      }
      else{
        $("#checking .balance").html("$" + newBalance)
      }
    }
    overDraft();

    })


//This section is for Savings

  var depositSavings = $("#savings .deposit")
    depositSavings.on("click", function(){
      var prevBalance = $("#savings .balance").val().replace("$","");
      var newEntry = $("#savings .input").val();

        var newBalance = prevBalance + newEntry;

        $("#savings .balance").html("$" + newBalance)

    })

  var withdrawSavings = $("#savings .withdraw")
    withdrawSavings.on("click", function(){
      var prevBalance = $("#savings .balance").val().replace("$","");
      var newEntry = $("#savings .input").val();

        var newBalance = prevBalance - newEntry;

        $("#savings .balance").html("$" + newBalance)
        var overDraft = function(){
          if(newBalance < 0){
            alert("You are Overdrawing from your account")
          }
          else{
            $("#savings .balance").html("$" + newBalance)
          }
        }
        overDraft();
    })



});
