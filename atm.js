$(document).ready(function() {


    // Ensure JQuery Links
    // $("body").on("click", function() {
    //     $("body").css("background-color", "red");
    // });

    var checkingBalance = 0;
    var savingsBalance = 0;

    //Deposit money into Checking Account
    function checkingDeposit() {
        $("#checking .deposit").on("click", function(evt) {
            evt.preventDefault();
            var input = Number($('#checking .input').val()); //Captures user input, turns it into a number
            checkingBalance += input; // Updates checkingBalance variable
            $("#checking .balance").html("$ " + checkingBalance); //Updates HTML with Balance
        });
    }
    //Widthdraw money from Checking Account
    function checkingWithdrawl() {
        $("#checking .withdraw").on("click", function(evt) {
            evt.preventDefault();
            var input = Number($('#checking .input').val()); //Captures user input, turns it into a number
            if (input > savingsBalance + checkingBalance) {
                alert("Out of money dawg");
            } else if (checkingBalance - input < 0) {
                var overdraw = checkingBalance - input;
                savingsBalance = savingsBalance + overdraw;
                checkingBalance = checkingBalance - overdraw - input;
                $("#checking .balance").html("$" + checkingBalance);
                $("#savings .balance").html("$" + savingsBalance);
            } else {
                checkingBalance = checkingBalance - input;
                $("#checking .balance").html("$" + checkingBalance);
            }
        });
    }
    //Deposit money into Savings Account
    function savingsDeposit() {
        $("#savings .deposit").on("click", function(evt) {
            evt.preventDefault();
            var input = Number($('#savings .input').val()); //Captures user input, turns it into a number
            savingsBalance += input; // Updates savingsBalance variable
            $("#savings .balance").html("$ " + savingsBalance); //Updates HTML with Balance
        });
    }
    //Widthdraw money from Savings Account
    function savingsWithdrawl() {
        $("#savings .withdraw").on("click", function(evt) {
            evt.preventDefault();
            var input = Number($('#savings .input').val()); //Captures user input, turns it into a number
            if (savingsBalance >= input) {
                savingsBalance -= input; // Updates savingsBalance variable
                $("#savings .balance").html("$ " + savingsBalance); //Updates HTML with Balance
            } else {
                alert("Cannot perform function: Withdrawl amount exceeds balance");
                console.log("hi");
            }
        });
    }

    checkingDeposit();
    checkingWithdrawl();
    savingsDeposit();
    savingsWithdrawl();

});
