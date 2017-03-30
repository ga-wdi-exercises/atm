$(document).ready(function() {

    // console.log("Hello");


    var checkBalance = $("#checking .balance");
    var checkDeposit = $("#checking input.deposit");
    var checkWithdraw = $("#checking div.withdraw");
    var checkInput = $("#checking input.input");

    var savBalance = $("#savings div.balance");
    var savDeposit = $("#savings div.deposit");
    var savingWithdraw = $("#savings div.withdraw");
    var savInput = $("#savings div.input");

    var balance = 0;
    var savingBalance = 0;

    checkDeposit.on("click", addAmount);

    function addAmount() {
        var value = parseInt(checkInput.val());
        balance = value + balance
        checkBalance.text("$" + balance);
        console.log(value);
    }
    // console.log(checkDeposit)
});
