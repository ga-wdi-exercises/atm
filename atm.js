$("input").eq(0).addClass("checking_input");
$("input").eq(3).addClass("savings_input");

function Account( type, startingBal ){
  this.type = type;
  this.startingBal = startingBal;
  this.deposits = [];
  this.withdrawal = [];
}
Account.prototype.depositMoney = function(input){
  this.deposits.push(input);
  return this;
}
Account.prototype.withdrawMoney = function(input){
  this.withdrawal.push(input);
  return this;
}
console.dir(Account);
// --Checking----------------------
var Checking = new Account("Checking","0");
Checking.prototype.checkingAmount = $(#)
console.dir(Checking)


//--Account--------------------------
var Savings = new Account("Savings","0");
console.dir(Savings)
