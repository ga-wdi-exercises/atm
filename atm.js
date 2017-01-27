var checkBal = $("#checking").children(".balance");
var savingsBal = $("#savings").children(".balance");

/*
var checkInput = $("#checking").children("input.input").val
var savingsInput = $("#savings").children("input.input").val
*/


var BegBalChk = 0;  //Global Checking Account Bal
var BegBalSav = 0;  //Global Savings Account Bal

//Functions for account states; positive or negative.
var makeCheckBalRed = function(){
   var number = checkBal.text();
   number = parseInt(number);
   console.log(number)
   if (number < 1) {
   $('#checking.account').addClass('zero');
   }
}

var makeSavingsBalRed = function(){
   var number = savingsBal.text();
   number = parseInt(number);
   console.log(number)
   if(number < 1) {
   $('#savings.account').addClass('zero');
   }
}

var makeCheckBalGreen = function(){
   var number = checkBal.text();
   number = parseInt(number);
   console.log(number)
   if (number > 0) {
   $('#checking.account').removeClass('zero');
   }
}

var makeSavingsBalGreen = function(){
   var number = savingsBal.text();
   number = parseInt(number);
   console.log(number)
   if(number > 0) {
   $('#savings.account').removeClass('zero');
   }
}

//Event listeners for all ATM transactions
$("#checking .deposit").on("click", checkingAmtDep);
function checkingAmtDep() {
  var checkInput = $("#checking").children("input.input").val();
  var newBal = parseInt(checkInput);
  BegBalChk = BegBalChk + newBal;
  checkBal.text(BegBalChk)
  makeCheckBalGreen();  //function call to check sign of balance
}

$("#checking .withdraw").on("click", checkingAmtWithdrawn);
function checkingAmtWithdrawn() {
  var checkWithdr = $("#checking").children("input.input").val();
  var newBal = parseInt(checkWithdr);
  console.log(newBal)
  BegBalChk = BegBalChk - newBal;
  checkBal.text(BegBalChk)
  makeCheckBalRed();     //function call to check sign of balance
}

$("#savings .deposit").on("click", savingsAmtDep);
function savingsAmtDep() {
  var savingsInput = $("#savings").children("input.input").val();
  var newBal = parseInt(savingsInput);
  BegBalSav = BegBalSav + newBal;
  savingsBal.text(BegBalSav)
  makeSavingsBalGreen();   //function call to check sign of balance
}

$("#savings .withdraw").on("click", savingsAmtWithdrawn);
function savingsAmtWithdrawn() {
  var savingsWithdr = $("#savings").children("input.input").val();
  var newBal = parseInt(savingsWithdr);
  BegBalSav = BegBalSav - newBal;
  savingsBal.text(BegBalSav)
  makeSavingsBalRed();   //function call to check sign of balance
}
