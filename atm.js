
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

  //make bank account constructor
function Accnt() {
    this.totalBal = 0;
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
    //on checking deposit click, deposit
checkDBtn.click(function() {
    checkingAccnt.deposit(parseInt(checkingBox.val()));
    checkingBox.val('');
    checkBalanceDisplay.removeClass('zero');
    checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
    console.log('checking balance total: ' + checkingAccnt.totalBal);
});
    //on check withdraw click, withdraw
checkWBtn.click(function() {
  var withdraw_amnt = parseInt(checkingBox.val());
  // Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
    // If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
  if (withdraw_amnt >= checkingAccnt.totalBal && checkingAccnt.totalBal >= 0 && withdraw_amnt <= savingsAccnt.totalBal) {
      checkBalanceDisplay.addClass('zero');
      var checkingLeftOver = checkingAccnt.withdrawal(withdraw_amnt);
      checkingAccnt.totalBal = 0;
      checkingBox.val('');
      checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
      savingsAccnt.withdrawal(Math.abs(checkingLeftOver));
      if(savingsAccnt.totalBal === 0) {
        savingsDisplay.addClass('zero');
      }
      savingsDisplay.html('$' + savingsAccnt.totalBal);
      console.log('total checking balance:' + checkingAccnt.totalBal);
  } else if (withdraw_amnt <= checkingAccnt.totalBal) {
      checkingAccnt.withdrawal(withdraw_amnt);
      checkingBox.val('');
      if(checkingAccnt.totalBal === 0) {
        checkBalanceDisplay.addClass('zero');
      }
      checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
      console.log('total savings balance:' + savingsAccnt.totalBal);
      console.log('total checking balance:' + checkingAccnt.totalBal);
  }
  // If the withdrawal amount is more than the combined account balance, ignore it.
  else {
    console.log('overdraft warning! entered amount can\'t be converd');
  }
})
  //savings account
    //on click, deposit
  savingsDBtn.click(function() {
    savingsAccnt.deposit(parseInt(savingsBox.val()));
    savingsBox.val('');
    savingsDisplay.removeClass('zero');
    savingsDisplay.html('$' + savingsAccnt.totalBal);
    console.log('total savings balance:' + savingsAccnt.totalBal);
  })
    //on click, withdraw
  savingsWBtn.click(function() {

    var withdraw_amnt = parseInt(savingsBox.val());

    if (withdraw_amnt >= savingsAccnt.totalBal && savingsAccnt.totalBal >= 0 && withdraw_amnt <= checkingAccnt.totalBal) {
      savingsDisplay.addClass('zero');
      var savingsLeftOver = savingsAccnt.withdrawal(withdraw_amnt);
      savingsAccnt.totalBal = 0;
      savingsBox.val('');
      savingsDisplay.html('$' + savingsAccnt.totalBal);
      checkingAccnt.withdrawal(Math.abs(savingsLeftOver));
      if(checkingAccnt.totalBal === 0) {
        checkBalanceDisplay.addClass('zero');
      }
      checkBalanceDisplay.html('$' + checkingAccnt.totalBal);
      console.log('total savings balance:' + savingsAccnt.totalBal);
      console.log('total checking balance:' + checkingAccnt.totalBal);

    } else if (withdraw_amnt <= savingsAccnt.totalBal) {
      savingsAccnt.withdrawal(withdraw_amnt);
      savingsBox.val('');
      if(savingsAccnt.totalBal === 0) {
        savingsDisplay.addClass('zero');
      }
      savingsDisplay.html('$' + savingsAccnt.totalBal);
      console.log('total savings balance:' + savingsAccnt.totalBal);
    } else {
      console.log('overdraft warning! entered amount can\t be converd');
    }
  })




// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
