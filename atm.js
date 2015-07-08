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

// // - As a user, I want to withdraw money from one of the bank accounts. Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

// on "withdraw" click =
function subtractMoney() {
    //get the current balance of the account we're accessing
    var prevBalance = $(this).siblings("div.balance");
    var result = prevBalance.text();
    //get the current account balance without the $
    var currentBalance = parseInt(result.replace("$", ""));

    //get value of the input and set as var newWithdrawal
    var newWithdrawal = parseInt($(this).siblings("input.moneyInTheBank").val());

    // subtract value of html of div.balance
    $(prevBalance).text( function(){
        var total = currentBalance - newWithdrawal;
        // if newWithdrawal would take the account into negatives, ignore newWithdrawal
        if (total > 0){
            return "$" + total;
        } else {
            return "$" + currentBalance;
        }
    });

    // clear value of input.text
    $(this).siblings("input.moneyInTheBank").val("");

}


//
// // - As a user, I want overdraft protection
// //   - What happens when the user wants to withdraw more money from the checking account than is in the account?
//
//
// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// }
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }

// an eventListerner for each button, each one a "click"


// don't delete the line below! This is the closing of your document.ready
});
