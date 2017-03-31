$(document).ready(function() {

    console.log("Hello");

    // var checkBalance = $("#checking div.balance");
    // var checkDeposit = $("#checking input.deposit");
    // var checkWithdraw = $("#checking input.withdraw");
    // var checkInput = $("#checking input.input");
    //
    // var savBalance = $("#savings div.balance");
    // var savDeposit = $("#savings input.deposit");
    // var savWithdraw = $("#savings input.withdraw");
    // var savInput = $("#savings input.input");


//depositCheckingAccount
    $("#checking .deposit").on("click", add);
    function add() {
        var value = parseInt($("#checking .input").val());
        var balance = parseInt($("#checking .balance").text().replace("$", ""));
        balance = value + balance
        $("#checking .balance").text("$" + balance);
        console.log(value);
    };

//withdrawCheckingAccount
    $("#checking .withdraw").on("click", withdraw);
    function withdraw() {
      var value = parseInt($("#checking .input").val());
      var balance = parseInt($("#checking .balance").text().replace("$", ""));
      balance = balance - value
      $("#checking .balance").text("$" + balance);
      console.log(value);
    };

//depositSavingAccount
      $("#savings .deposit").on("click", addSaving);
      function addSaving() {
        var value = parseInt($("#savings .input").val());
        var balance = parseInt($("#savings .balance").text().replace("$", ""));
        balance = value + balance
        $("#savings .balance").text("$" + balance);
        console.log(value);
      };

//withdrawSavingAccount
      $("#savings .withdraw").on("click", withdrawSaving);
      function withdrawSaving() {
        var value = parseInt($("#savings .input").val());
        var balance = parseInt($("#savings .balance").text().replace("$", ""));
        balance = balance - value
        $("#savings .balance").text("$" + balance);
        console.log(value);
      };
})
