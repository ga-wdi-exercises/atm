$(document).ready(function(){
var checkingBalance = 0;
var savingBalance = 0;

  function checkings (){
    $("#checking .deposit").on("click", function(){
    var userInput = Number($("#checking .input").val());
    checkingBalance += userInput;
    $("#checking .balance").html(checkingBalance);
    });

    $("#checking .withdraw").on("click", function(){
    var userInput = Number($("#checking .input").val());
    checkingBalance -= userInput;
    $("#checking .balance").html(checkingBalance);
    });
  }

  function savings (){
    $("#savings .deposit").on("click", function(){
    var userInput = Number($("#savings .input").val());
    savingBalance += userInput;
    $("#savings .balance").html(savingBalance);
    });

    $("#savings .withdraw").on("click", function(){
    var userInput = Number($("#savings .input").val());
    savingBalance -= userInput;
    $("#savings .balance").html(savingBalance);
    });
  }

checkings();
savings();
});
