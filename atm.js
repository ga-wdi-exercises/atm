$(document).ready( function() {

//change css property of div.balance to #FF003E
$("div.balance").css({
    "background-color": "#FF003E",
    "border-radius": "10px"
    });

// - As a user, I want to deposit money into one of the bank accounts
//set up event listener for click on the Deposit button
$("#checkingAddMoney").on("click", addUpTheChecking);
//$("#savingsAddMoney").on("click", addUpTheMoney);

// on "deposit" button click, execute this function
function addUpTheChecking(){
    //get the current balance of the account we're accessing
    var result = $("#checkingBalance").text();
    var currentBalance = parseInt(result.replace("$", ""));
    //get value of the input and set as var newEntry
    var newEntry = parseInt($("#moneyInTheBank").val());
    console.log(newEntry);
    // add value of newEntry to text content of our account
    $("#checkingBalance").text( function(){
        var total = newEntry + currentBalance;
        return "$" + total;
    });
    $("#moneyInTheBank").val("");
}


// // - As a user, I want to withdraw money from one of the bank accounts
// //   - Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// on "withdraw" click =
//     get value of input.text and set as var newWithdrawal
//     subtract value of html of div.balance
//     if newWithdrawal > div.balance.value, ignore newWithdrawal
//     clear value of input.text
//
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
