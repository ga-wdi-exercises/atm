//********** Functions **********

//##### Test Greeting #####

function testGreeting(){

  console.log("Hello Master Coder!");

}

function getUserInputChecking(){

    checkingInput = parseInt(checkingInputValue.val());
    return checkingInput;

}

function getCurrentCheckingBalance(){


  currentBalanceChecking = parseInt(checkingBalanceField.text());
  return currentBalanceChecking;


}

function updateCheckingBalance(){

// The checking balance will be updated by taking the CURRENT balance and
//adding it to the CHECKING INPUT VALUE
//
// *** UPDATED BALANCE = CURRENT CHECKING BALANCE + CHECKING INPUT VALUE ***
//
//


        currentBalanceChecking = getCurrentCheckingBalance();
        checkingInput = getUserInputChecking();
        updatedBalanceChecking = currentBalanceChecking + checkingInput;

        return updatedBalanceChecking;



}

function updateCheckingBalanceWith(){

// The checking balance will be updated by taking the CURRENT balance and
//adding it to the CHECKING INPUT VALUE
//
// *** UPDATED BALANCE = CURRENT CHECKING BALANCE + CHECKING INPUT VALUE ***
//
//


        currentBalanceChecking = getCurrentCheckingBalance();
        checkingInput = getUserInputChecking();
        updatedBalanceCheckingWith = parseInt(currentBalanceChecking - checkingInput);

        return updatedBalanceCheckingWith;



}



function getUserInputSavings(){

    savingsInput = parseInt(savingsInputValue.val());
    return savingsInput;

}

function getCurrentSavingsBalance(){


  currentBalanceSavings = parseInt(savingsBalanceField.text());
  return currentBalanceSavings;


}

function updateSavingsBalance(){

// The checking balance will be updated by taking the CURRENT balance and
//adding it to the CHECKING INPUT VALUE
//
// *** UPDATED BALANCE = CURRENT CHECKING BALANCE + CHECKING INPUT VALUE ***
//
//


        currentBalanceSavings = getCurrentSavingsBalance();
        savingsInput = getUserInputSavings();
        updatedBalanceSavings = currentBalanceSavings + savingsInput;

        return updatedBalanceSavings;



}


function updateSavingsBalanceWith(){

// The checking balance will be updated by taking the CURRENT balance and
//adding it to the CHECKING INPUT VALUE
//
// *** UPDATED BALANCE = CURRENT CHECKING BALANCE + CHECKING INPUT VALUE ***
//
//


        currentBalanceSavings = getCurrentSavingsBalance();
        savingsInput = getUserInputSavings();
        updatedBalanceSavingsWith = currentBalanceSavings - savingsInput;

        return updatedBalanceSavingsWith;



}




//********** Variables **********

var body = $("body");

var checkingInputValue = $("#input-amount_checking");
var checkingDepositButton = $("#button-deposit_checking");
var checkingWithdrawalButton = $("#button-withdrawal_checking");


var checkingInput;
var currentBalanceChecking;

var checkingBalance;
var checkingBalanceField = $("#balance-checking");

var updatedBalanceChecking;
var updatedBalanceCheckingWith;



var savingsInputValue = $("#input-amount_savings");
var savingsDepositButton = $("#button-deposit_savings");
var savingsWithdrawalButton = $("#button-withdrawal_savings");

var savingsInput;
var currentBalanceSavings;

var savingsBalance;
var savingsBalanceField = $("#balance-savings");

var updatedBalanceSavings;
var updatedBalanceSavingsWith;

//*********** SOURCE CODE ***********

$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...

        checkingDepositButton.on("click", function(){

                updatedBalanceChecking = updateCheckingBalance();
                if(isNaN(updatedBalanceChecking)){}else{checkingBalanceField.text(updatedBalanceChecking);}


        });


        checkingWithdrawalButton.on("click", function(){

                updatedBalanceCheckingWith = updateCheckingBalanceWith();
                if(isNaN(updatedBalanceCheckingWith)){}else{checkingBalanceField.text(updatedBalanceCheckingWith);}



        });



        savingsDepositButton.on("click", function(){

                updatedBalanceSavings = updateSavingsBalance();
                if(isNaN(updatedBalanceSavings)){}else{savingsBalanceField.text(updatedBalanceSavings);}


        });


        savingsWithdrawalButton.on("click", function(){

                updatedBalanceSavingsWith = updateSavingsBalanceWith();
                if(isNaN(updatedBalanceSavingsWith)){}else{savingsBalanceField.text(updatedBalanceSavingsWith);}



        });


});

// ## Commits to Make (Suggested)
//
// By no means do you have to follow this. It's just here to help you get started if needed.
//
// Note that these commits are all for the checking account only. Take this one account at a time.
//
// 1. Test jQuery is working
//   - Make the `<body>`'s background color turn red
//
//    var body = $("body");
//    body.css("background-color","red");







// - Add a click listener to the **checking account's** "Deposit" button

// <input id="button-deposit_checking" class="deposit" type="button" value="Deposit" />
//

//   - When you click the button it should `console.log("hello")`

//                    *** checkingDepositButton.on("click", testGreeting);




// - On clicking "Deposit", it should get the user input
//   - Just `console.log` it
//   - You can save some time by hard-coding a value into the input box: `<input value="something" />`. That way you don't need to type stuff in all the time to test it.
//  <input id="input-amount_checking" class="input" type="text" placeholder="enter an amount" value="950"/>

//
// checkingDepositButton.on("click", testGreeting);
//
// checkingInput = parseInt($("#input-amount_checking").val());
//
// console.log(checkingInput);
//
//
//
// function getUserInputChecking(){
//
//     checkingInput = parseInt(checkingInputValue.val());
//     return checkingInput;
//
// }

//- On clicking "Deposit", it should update the "balance" with the user input
//   - Just make the user input show up. Don't worry about actually keeping track of a balance yet.



//         <div id="balance-checking" class="balance">350</div>

          // currentBalanceChecking = $("#balance-checking").text();
          // console.log(currentBalanceChecking);




// function getCurrentCheckingBalance(){
//
//
//   currentBalanceChecking = checkingBalanceField.text();
//   console.log(currentBalanceChecking);
//
//
// }


// function updateCheckingBalance(){
//
// // The checking balance will be updated by taking the CURRENT balance and
// //adding it to the CHECKING INPUT VALUE
// //
// // *** UPDATED BALANCE = CURRENT CHECKING BALANCE + CHECKING INPUT VALUE ***
// //
// //
//
//
//         currentBalanceChecking = getCurrentCheckingBalance();
//         checkingInput = getUserInputChecking();
//         updatedBalanceChecking = currentBalanceChecking + checkingInput;
//
//         return updatedBalanceChecking;
//
//
//
// }




// - On "Deposit", it should get the current "balance"
//   - How can you get the content of the "balance" element?
//   - The content has a `$` at the beginning of it, so Javascript will read it
//as text rather than as a number. How can you convert this text into a number?


            // checkingDepositButton.on("click", function(){
            //
            //         updatedBalanceChecking = updateCheckingBalance();
            //         checkingBalanceField.text(updatedBalanceChecking);
            //
            // });


// - On "Deposit", it updates the balance
//   - Now add the user input to the balance, and make it show up in
//the "balance" element


// - On "Withdraw", it updates the balance
//   - Follow the same steps as before, except you're subtracting instead
//of adding

// - Refactor the existing code
//   - Challenge: Try to have no `function()` that's longer than 5 lines.
//([Sandi Metz's Rule 2](https://robots.thoughtbot.com/sandi-metz-rules-for-developers#the-rules))
//
// ...then follow the same series of commits, but for the **savings account**.
//
// ## Bonus: Overdraft Protection
//
// - What happens when the user wants to withdraw more money from the checking account than is in the account?
//   - If a withdrawal can be covered by the balances in both accounts, bring the withdrawn-from account down to $0 and take the remainder from the other account.
//   - If the withdrawn amount is more than the combined account balance, display an error.
