$( document ).ready(function() {


// Ensure JQuery Links
// $("body").on("click", function() {
//     $("body").css("background-color", "red");
// });

var checkingBalance = 0;
var savingsBalance = 0;

//Deposit money into Checking Account
$("#checking .deposit").on("click", function(evt) {
    evt.preventDefault();
    var input = Number($('#checking .input').val()); //Captures user input, turns it into a number
    checkingBalance += input; // Updates checkingBalance variable
    $("#checking .balance").html("$ "+ checkingBalance) //Updates HTML with Balance
});

//Widthdraw money from Checking Account
$("#checking .withdraw").on("click", function(evt) {
    evt.preventDefault();
    var input = Number($('#checking .input').val()); //Captures user input, turns it into a number
    checkingBalance -= input; // Updates checkingBalance variable
    $("#checking .balance").html(checkingBalance) //Updates HTML with Balance
});

//Deposit money into Savings Account
$("#savings .deposit").on("click", function(evt) {
    evt.preventDefault();
    var input = Number($('#savings .input').val()); //Captures user input, turns it into a number
    savingsBalance += input; // Updates savingsBalance variable
    $("#savings .balance").html(savingsBalance) //Updates HTML with Balance
});

//Widthdraw money from Savings Account
$("#savings .withdraw").on("click", function(evt) {
    evt.preventDefault();
    var input = Number($('#savings .input').val()); //Captures user input, turns it into a number
    savingsBalance -= input; // Updates savingsBalance variable
    $("#savings .balance").html(savingsBalance) //Updates HTML with Balance
});






});

//   $('#checking .balance').text("$" + checkingBalance); //Updates HTML with entry + balance
//   $('#checking .balance').val(checkingBalance); //Updates Value of bank account with entry
// })
//
