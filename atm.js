$(document).ready(function(){
  console.log("Checking Balance " + checking);
  console.log("Savings Balance " + savings);
// -------------Savings Account-------------------------
  var savings = $("#savings .balance")
  $("#savings .deposit").on("click", function(){
  var deposit = $("#savings .input").val();
  var balance = savings.text();
  balance = parseInt(balance.replace("$", ""))
  console.log("Deposit amount: " + deposit);
  var deposit = parseInt(deposit);
  var total = deposit + balance;
  console.log("total: "+total)
  $("#savings .balance").html(total);
})
// |-------------------Savings Account withdraw -------|
  var savings = $("#savings .balance")
$("#savings .withdraw").on("click", function(){
  var withdraw = $("#savings .input").val();
  var balance = savings.text();
  balance = parseInt(balance.replace("$", ""))
  console.log("withdraw amount: " + withdraw);
  var withdraw = parseInt(withdraw);
  var total = balance - withdraw ;
  console.log("total: "+total)
  $("#savings .balance").html(total);
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
  var total = deposit + balance;
  console.log("total: "+total)
  $("#checking .balance").html(total);
})
// |-------------------checking Account withdraw -------|
  var savings = $("#checking .balance")
$("#checking .withdraw").on("click", function(){
  var withdraw = $("#checking .input").val();
  var balance = checking.text();
  balance = parseInt(balance.replace("$", ""))
  console.log("withdraw amount: " + withdraw);
  var withdraw = parseInt(withdraw);
  var total = balance - withdraw ;
  console.log("total: "+total)
  $("#checking .balance").html(total);
})
// |------------------------------------------------------|



})
