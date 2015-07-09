// As a user, I want to deposit money into one of the bank accounts
// As a user, I want to withdraw money from one of the bank accounts
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// As a user, I want overdraft protection
// What happens when the user wants to withdraw more money from the checking account than is in the account?
// If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
// Tips
//
// Tackle making your accounts work individually first
// Then tackle them working together with overdraft protection
// Only start working with the DOM after you have the logic down

//CheckingAccountVariables
var checkingBalance = Number(parseFloat($(".balance").eq(0).html().replace("$", "")));
var checkingNew = Number(parseFloat($(".account input").eq(0).val()));
var checkingDepositButton = $(":button").eq(0);
var checkingWithdrawButton = $(":button").eq(1);

//SavingsAccountVariables

var savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
var savingsNew = Number(parseFloat($(".account input").eq(3).val()));
var savingsDepositButton = $(":button").eq(2);
var savingsWithdrawButton = $(":button").eq(3);


function checkingDeposit(){
  checkingBalance = Number(parseFloat($(".balance").eq(0).html().replace("$", "")));
  checkingNew = Number(parseFloat($(".account input").eq(0).val()));
  checkingBalance = (checkingBalance + checkingNew);
  $(".balance").eq(0).html("$" + checkingBalance);
  }

function checkingWithdrawal(){
  checkingBalance = Number(parseFloat($(".balance").eq(0).html().replace("$", "")));
  checkingNew = Number(parseFloat($(".account input").eq(0).val()));
  checkingBalance = (checkingBalance - checkingNew);
  $(".balance").eq(0).html("$" + checkingBalance);
  }

function savingsDeposit(){
  savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
  savingsNew = Number(parseFloat($(".account input").eq(3).val()));
  savingsBalance = (savingsBalance + savingsNew);
  $(".balance").eq(1).html("$" + savingsBalance);
  }

function savingsWithdrawal(){
  savingsBalance = Number(parseFloat($(".balance").eq(1).html().replace("$", "")));
  savingsNew = Number(parseFloat($(".account input").eq(3).val()));
  savingsBalance = (savingsBalance - savingsNew);
  $(".balance").eq(1).html("$" + savingsBalance);
  }

// an eventListerner for each button, each one a "click"
checkingDepositButton.click(function(){
  event.preventDefault();
  checkingDeposit()})

checkingWithdrawButton.click(function(){
    event.preventDefault();
    checkingWithdrawal()})

savingsDepositButton.click(function(){
      event.preventDefault();
      savingsDeposit()})

savingsWithdrawButton.click(function(){
        event.preventDefault();
        savingsWithdrawal()})
