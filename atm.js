var checkingBalance = 0;
//var custCheckingDeposit = 5 //$("#checking>.input").val()

$(document).ready(function(){
});

$ ("body").css ("background-color", "red");

+//object with methods to check balance and change color if zero/not zero
var balanceCheck = {
  checking: function(){
      if (checkingTotal == 0) {
        $("#checking > .balance").addClass("zero")
      } else {
        $("#checking > .balance").removeClass("zero")
      }
    },
//checkingBalance = checkingBalance + custCheckingDeposit
//$("#checking > .balance").text("$" + checkingBalance)

// var deposit = $(".input").val(5);
// var balance = $(".balance").val(0);


//Make a deposit to checking account
function makeDeposit(){
  var custCheckingDeposit = 5 //$("#checking>.input").val()
  checkingBalance = checkingBalance + custCheckingDeposit;
  $("#checking > .balance").text("$" + checkingBalance)

}

//ADD Click Listening Event
$("checking > .deposit").click(makeDeposit)
