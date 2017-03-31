$(document).ready(function(){

  $("#checking .deposit").on("click", function() {
    var balance = parseInt($("#checking .balance").text().replace("$", ""));
    var deposit = parseInt($("#checking .input").val());
    var total = balance + deposit;
    $("#checking .balance").text("$" + total);
  });

  $("#savings .deposit").on("click", function() {
    var balance = parseInt($("#savings .balance").text().replace("$", ""));
    var deposit = parseInt($("#savings .input").val());
    var total = balance + deposit;
    $("#savings .balance").text("$" + total);
  });

  $("#checking .withdraw").on("click", function() {
    var balance = parseInt($("#checking .balance").text().replace("$", ""));
    var withdraw = parseInt($("#checking .input").val());
    var total = balance - withdraw;
    if (total > 0) {
      $("#checking .balance").text("$" + total);
    } else {
      $("#checking .balance").text("$" + "0");
      $("#checking").addClass("zero");
    }

  });

  $("#savings .withdraw").on("click", function() {
    var balance = parseInt($("#savings .balance").text().replace("$", ""));
    var withdraw = parseInt($("#savings .input").val());
    var total = balance - withdraw;
    if (total > 0) {
      $("#savings .balance").text("$" + total);
    } else {
      $("#savings .balance").text("$" + "0");
      $("#savings").addClass("zero");
    }

  });
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});
