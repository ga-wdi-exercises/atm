
//select / create elements to work with
console.log('ready');
var checkingBox = $('#check-input');
var checkingBoxVal = parseInt(checkingBox.val());
var savingsBox = $('#savings-input');
var savingsBoxVal = savingsBox.val();
  //checking buttons
var checkDBtn = $('#checkbtn-d');
var checkWBtn = $('#checkbtn-w');
  //savings buttons
var savingsDBtn = $('#savingsbtn-d');
var savingsWBtn = $('#savingsbtn-w');

// As a user, I want to deposit money into one of the bank accounts
  //make bank accounts
function Accnt() {
    this.totalBal = 0;
    // As a user, I want to withdraw money from one of the bank accounts
    this.deposit = function(dep_amnt) {
      this.totalBal += dep_amnt;
    };
    this.withdrawal = function(withdraw_amnt) {
      this.totalBal = this.totalBal - withdraw_amnt;
    };
  }
var checkingAccnt = new Accnt();
var savingsAccnt = new Accnt();

//event handlers
  //checking account
  //on deposit click, deposit
checkDBtn.click(function() {
  checkingAccnt.deposit(parseInt(checkingBox.val()));
  checkingBox.val('');
  console.log(checkingAccnt.totalBal);
});
  //on withdraw click, withdraw
checkWBtn.click(function() {
  checkingAccnt.withdrawal(parseInt(checkingBox.val()));
  checkingBox.val('');
  console.log(checkingAccnt.totalBal);
})
  //savings account

//make a constructor function for both checking and svings accounts


// var checkingBalance = document.querySelector(".balance");
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




// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// As a user, I want overdraft protection
// What happens when the user wants to withdraw more money from the checking account than is in the account?
// If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
