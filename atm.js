$(document).ready(function(){

});

var totalAmtChk = 0;
// Checking Account's deposit button listen to click
function depMoneyChk() {
  // amt of checking deposit
  var inputValue = $('#checking>.input').val();
  //adding user input to the current balance
  totalAmtChk = +inputValue + +totalAmtChk;
  // changing balance to amt of deposit
  $('#checking>.balance').text('$'+totalAmtChk);
  if ( +totalAmtChk<=0) {
    noMoney();
  }
  else {
    someMoney();
  }
}
$('#checking>.deposit').on('click',depMoneyChk)

// Checking Account's withdrawal button listen to click
function widrMoneyChk() {
  // amt of checking withdrawal
  var inputValue = $('#checking>.input').val();
  if (inputValue <= totalAmtChk) {
    //adding user input to the current balance
    totalAmtChk = +totalAmtChk - +inputValue;
  }
    //(+inputValue < +totalAmt)
  else {
        alert("Sorry, you do not have sufficient funds.")
  };
  // changing balance to amt of withdrawal
  $('#checking>.balance').text('$'+totalAmtChk);
  if (+totalAmtChk<=0) {
    noMoney();
  }
  else {
    someMoney()
  }
}

$('#checking>.withdraw').on('click',widrMoneyChk)

// SAVINGS ACCOUNT
var totalAmtSav =0;
function depMoneySav() {
  // amt of savings deposit
  var inputValue = $('#savings>.input').val();
  //adding user input to the current balance
  totalAmtSav = +inputValue + +totalAmtSav;
  // changing balance to amt of deposit
  $('#savings>.balance').text('$'+totalAmtSav);
  if (+totalAmtSav<=0) {
    noMoney();
  }
  else {
    someMoney()
  }
}

$('#savings>.deposit').on('click',depMoneySav)

// Checking Account's withdrawal button listen to click
function widrMoneySav() {
  // amt of checking deposit
  var inputValue = $('#savings>.input').val();
  if (inputValue <= totalAmtSav) {
    //adding user input to the current balance
    totalAmtSav = +totalAmtSav - +inputValue;
  }
    //(+inputValue < +totalAmt)
  else {
        alert("Sorry, you do not have sufficient funds.")
  };
  // changing balance to amt of deposit
  $('#savings>.balance').text('$'+totalAmtSav);
  if (+totalAmtSav<=0) {
    noMoney();
  }
  else {
    someMoney()
  }
}

$('#savings>.withdraw').on('click',widrMoneySav)

// when account balance <=0
function noMoney() {
    if (+totalAmtSav<=0 || +totalAmtChk<=0) {
    $('.account').addClass(' zero');
  }
}
function someMoney() {
    if (+totalAmtSav>0 || +totalAmtChk>0) {
    $('.account').removeClass(' zero');
  }
}
// if withdraw too much, alert will tell you that there is too much.

// if the account balance in saving is higher withdraw from the other account too.


// repeat same code for SAVINGS
