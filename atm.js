$(document).ready(function(){
  console.log("Checking Balance " + checking);
  console.log("Savings Balance " + savings);
  var savingsTotal;
  var checkingTotal;
// -------------Savings Account-------------------------
var savings = $("#savings .balance")
$("#savings .deposit").on("click", function(){
var Deposit = $("#savings .input").val();
var Balance = savings.text();
Balance = parseInt(Balance.replace("$", ""))
console.log("Deposit amount: " + Deposit);
var Deposit = parseInt(Deposit);
savingsTotal = Deposit + Balance;
// console.log("total: "+total)
$("#savings .balance").html("$" + savingsTotal);
})

// |-------------------Savings Account withdraw -------|
  var savings = $("#savings .balance")
$("#savings .withdraw").on("click", function(){
  var Withdraw = $("#savings .input").val();
  var Balance = savings.text();
  Balance = parseInt(Balance.replace("$", ""))
  console.log("withdraw amount: " + Withdraw);
  var Withdraw = parseInt(Withdraw);
  savingsTotal = Balance - Withdraw ;
  //console.log("total: "+total)
  $("#savings .balance").html("$" + savingsTotal);
})
// |------------------------------------------------------|
// -------------checking Account-------------------------|
  var checking = $("#checking .balance")
  $("#checking .deposit").on("click", function(){
  var deposit = $("#checking .input").val();
  var balance = checking.text();
  balance = parseInt(balance.replace("$", ""))
  console.log("Deposit amount: " + deposit);
  var deposit = parseInt(deposit);
  checkingTotal = deposit + balance;
  // console.log("total: "+total)
  $("#checking .balance").html("$" + checkingTotal);
})
// |-------------------checking Account withdraw -------|
  var checking = $("#checking .balance")
$("#checking .withdraw").on("click", function(){
  var withdraw = $("#checking .input").val();
  var balance = checking.text();
  balance = parseInt(balance.replace("$", ""))
  console.log("withdraw amount: " + withdraw);
  var withdraw = parseInt(withdraw);
  checkingTotal = balance - withdraw ;
  // console.log("total: "+total)
  $("#checking .balance").html("$" + checkingTotal);
})
// |------------------------------------------------------|
//|----------------Overdraft------------------------------|






})
