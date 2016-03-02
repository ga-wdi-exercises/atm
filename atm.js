
//select / create elements to work with
console.log('ready');
var checkingBox = $('#check-input');
var checkingBoxVal = parseInt(checkingBox.val());
var savingsBox = $('#savings-input');
var savingsBoxVal = savingsBox.val();
var checkBalanceDisplay = $('#checking-display');
var savingsDisplay = $('#savings-display');
  //checking buttons
var checkDBtn = $('#checkbtn-d');
var checkWBtn = $('#checkbtn-w');
  //savings buttons
var savingsDBtn = $('#savingsbtn-d');
var savingsWBtn = $('#savingsbtn-w');


//start w/nothing --> show red
checkBalanceDisplay.addClass('zero');
savingsDisplay.addClass('zero');

// As a user, I want to deposit money into one of the bank accounts
  //make bank account constructor
function Accnt() {
    this.totalBal = 0;
    // As a user, I want to withdraw money from one of the bank accounts
    // if(this.totalBal === 0) {
    //   checkBalanceDisplay.addClass('zero');
    //   savingsDisplay.addClass('zero');
    // }
    this.deposit = function(dep_amnt) {
      return this.totalBal += dep_amnt;
    };
    this.withdrawal = function(withdraw_amnt) {
      return this.totalBal = this.totalBal - withdraw_amnt;
    };
  }
  //make bank accounts, one for checking, one for savings
var checkingAccnt = new Accnt();
var savingsAccnt = new Accnt();

//event handlers
  //checking account
    //on deposit click, deposit
checkDBtn.click(function() {
    checkingAccnt.deposit(parseInt(checkingBox.val()));
    checkingBox.val('');
    checkBalanceDisplay.removeClass('zero');
    checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
    console.log(checkingAccnt.totalBal);
});
    //on withdraw click, withdraw
checkWBtn.click(function() {
  // Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
  var withdraw_amnt = parseInt(checkingBox.val());
    // If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
  if (withdraw_amnt >= checkingAccnt.totalBal && checkingAccnt.totalBal >= 0 && savingsAccnt.totalBal > 0) {
     console.log(checkBalanceDisplay);
      checkBalanceDisplay.addClass('zero');
      var checkingLeftOver = checkingAccnt.withdrawal(withdraw_amnt);
      checkingAccnt.totalBal = 0;
      checkingBox.val('');
      checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
      savingsAccnt.withdrawal(Math.abs(checkingLeftOver));
      savingsDisplay.html('$' + savingsAccnt.totalBal);
  } else if (withdraw_amnt <= checkingAccnt.totalBal) {
    console.log(checkBalanceDisplay);
      checkBalanceDisplay.removeClass('zero');
      checkingAccnt.withdrawal(withdraw_amnt);
      checkingBox.val('');
      checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
      console.log(checkingAccnt.totalBal);
  }
  // If the withdrawal amount is more than the combined account balance, ignore it.
  else {
    console.log('overdraft warning! entered amount can\t be converd');
  }
})
  //savings account
    //on click, deposit
  savingsDBtn.click(function() {
    savingsAccnt.deposit(parseInt(savingsBox.val()));
    savingsBox.val('');
    savingsDisplay.html('$' + savingsAccnt.totalBal);
    console.log(savingsAccnt.totalBal);
  })
    //on click, withdraw
  savingsWBtn.click(function() {

    var withdraw_amnt = parseInt(savingsBox.val());

    if (withdraw_amnt >= savingsAccnt.totalBal && savingsAccnt.totalBal >= 0 && checkingAccnt.totalBal > 0) {
      savingsDisplay.addClass('zero');
      var savingsLeftOver = savingsAccnt.withdrawal(withdraw_amnt);
      savingsAccnt.totalBal = 0;
      savingsBox.val('');
      savingsDisplay.html('$' + savingsAccnt.totalBal);
      checkingAccnt.withdrawal(Math.abs(savingsLeftOver));
      checkBalanceDisplay.html('$' + checkingAccnt.totalBal);

    } else if (withdraw_amnt <= savingsAccnt.totalBal) {
      savingsDisplay.removeClass('zero');
      savingsAccnt.withdrawal(withdraw_amnt);
      savingsBox.val('');
      savingsDisplay.html('$' + savingsAccnt.totalBal);
      console.log(savingsAccnt.totalBal);
    } else {
      console.log('overdraft warning! entered amount can\t be converd');
    }
  })




// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
