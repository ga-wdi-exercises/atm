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
if(Balance - Withdraw >  0){
  savingsTotal = Balance - Withdraw ;
  //console.log("Cannot withdraw")
  //console.log("total: "+total)
  $("#savings .balance").html("$" + savingsTotal);
}else{
  console.log("Can not withdrawl that amount")
}
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
  // |------------------------------------------------------|
  //|----------------Overdraft--Protection------------------|
if(balance - withdraw > -1){
  checkingTotal = balance - withdraw ;
  // console.log("total: "+total)
  $("#checking .balance").html("$" + checkingTotal);
}else{
  checkingTotal = balance - withdraw ;
  console.log(checkingTotal);
  savingsTotal = savingsTotal + checkingTotal;
  console.log("Cannot withdraw that amount")
  console.log("will transfer from savings")
  console.log("Transfer complete")
  console.log(savingsTotal)
  checkingTotal = 0;
  $("#savings .balance").html("$" + savingsTotal);
  $("#checking .balance").html("$" + checkingTotal);
}
})

})
