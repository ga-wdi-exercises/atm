$(document).ready( function() {

//change css property of div.balance to #FF003E
$("div.balance").css({
    "background-color": "#FF003E",
    "border-radius": "10px"
    });

// - As a user, I want to deposit money into one of the bank accounts
//set up event listener for click on the Deposit button
$("#checkingAddMoney").on("click", addUpTheMoney);
$("#savingsAddMoney").on("click", addUpTheMoney);

//set up event listener for click on the Withdrawal button
$("#withdrawFromChecking").on("click", subtractMoney);
$("#withdrawFromSavings").on("click", subtractMoney);

// on "deposit" button click, execute this function
function addUpTheMoney(){
    //get the current balance of the account we're accessing
    var prevBalance = $(this).siblings("div.balance");
    var result = prevBalance.text();
    //get the current account balance without the $
    var currentBalance = parseInt(result.replace("$", ""));

    //get value of the input and set as var newEntry
    var newEntry = parseInt($(this).siblings("input.moneyInTheBank").val());

    // add value of newEntry to text content of our account
    $(prevBalance).text( function(){
        var total = newEntry + currentBalance;
        return "$" + total;
    });
    // clear the value of the input field
    $(this).siblings("input.moneyInTheBank").val("");
    // set the background-color of the account to grey when money is addded
    $(this).siblings("div.balance").css("background-color", "#E3E3E3")
}

// set up a variable and a function to total up the balance of money in both accounts
var balanceSum;
function getSumBalances() {
    var cBalance = $("#checkingBalance").text();
    var checkingBalance = parseInt(cBalance.replace("$", ""));
    var sBalance = $("#savingsBalance").text();
    var savingsBalance = parseInt(sBalance.replace("$", ""));
    balanceSum = savingsBalance + checkingBalance;
    return balanceSum;
}
// on "withdraw" click =
function subtractMoney() {
    getSumBalances();
    //get the current balance of the account we're accessing
    var prevBalance = $(this).siblings("div.balance");
    var result = prevBalance.text();
    //get the current account balance without the $
    var currentBalance = parseInt(result.replace("$", ""));
    //get value of the input and set as var newWithdrawal
    var newWithdrawal = parseInt($(this).siblings("input.moneyInTheBank").val());

    // subtract value of html of div.balance
    $(prevBalance).text( function(){
        // get the new total balance
        var total = currentBalance - newWithdrawal;

        // setting up overdraft protection with and if-else statement! first we set up the savings half of the function
        if ($(this) == $("#withdrawFromSavings")){
            // if newWithdrawal would take the account into negatives, ignore newWithdrawal
            if (total > 0){
                return "$" + total;
            } else {
                return "$" + currentBalance;
            }
        //if the withdrawal comes from checking, we run this part of the function
        } else if (newWithdrawal > balanceSum){
            alert("Not enough money for that!")
        } else {
            // if the total is >0, print the new total
            if (total > 0){
                return "$" + total;
            // in case of over draft, run this portion of the function:
            }  else {
                var confirmOverdraft = confirm("Do you want to overdraft your account?");
                if (confirmOverdraft == true){
                // set the savings balance to the overdrafted amount
                $("#savingsBalance").text( function(){
                    // get the current savings balance. It wasn't working for me when I tried to do it in one variable, so I split into two
                    var stringBalance = $("#savingsBalance").text();
                    var savingsBalance = parseInt(stringBalance.replace("$", ""));
                    // add savings balance and total (because total is a negative value, it should end up being subtracted)
                    var overdraft = savingsBalance + total;
                    //new savings account balance!
                    return "$" + overdraft;
                });
                // change balance to 0 in checking. sad face.
                $(this).css("background-color", "#FF003E");
                return "$" + 0;
            }
        }

    }
    // clear value of input.text
    $(this).siblings("input.moneyInTheBank").val("");
});
}

// note to self: don't delete the line below! This is the closing of your document.ready

});
