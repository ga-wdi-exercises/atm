$(document).ready(function(){

var checkingBalance = 0;

  $("#checking .deposit").on("click", function(){
    checkingBalance = $("#checking .input").val();
    $("#checking .balance").html("$" + checkingBalance);
  })
});
