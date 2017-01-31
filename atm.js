

console.log("Hello");



var checkBal = $("#checking").children("div.balance");
var checkAdd = $("#checking").children("input.deposit");
var checkSub = $("#checking").children("input.withdraw");
var checkInput=$("#checking").children("input.input");

var savBal = $("#savings").children("div.balance");
var savAdd = $("#savings").children("input.deposit");
var savSub = $("#savings").children("input.withdraw");
var savInput = $("#savings").children("input.input");

var balance = 0
var savingBalance = 0

checkSub.on("click",subtractAmount);
function subtractAmount(){
  var value = parseInt(checkInput.val());
  if (balance < value){
    alert("We will transfer money from your savings account")
    balance = savingBalance;
    checkBal.text(balance)
    savingBalance = 0;
    savBal.text(savingBalance);
    if (balance<value){
      alert("Insufficient Funds")
    }

checkAdd.on("click",addAmount);
function addAmount(){
  var value = parseInt(checkInput.val());
  balance = value + balance
  checkBal.text(balance);
  console.log(value);
}

  }
}
