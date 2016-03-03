$(document).ready(function(){
  $("input").eq(0).addClass("checking_input");
  $("input").eq(3).addClass("savings_input");

function Account(type, min){
  this.type = type;
  this.min = min;
}
console.dir(Account)

var CheckingAccount = new Account("checking","0");
console.dir(CheckingAccount)

var SavingsAccount = new Account("savings","0");
console.dir(SavingsAccount)
// Checking.prototype.deposit =function(){
//   return this.type;
// };
// Checking.prototype.balance = function(){
//   $(".checking_input")
// };
// console.dir(Checking);
// // --------savings copy --------------
// var Savings = new Account("savings",0)
// console.dir(Savings);
//
//
//
//
//
});
//

//console.dir(account (or checking etc. ))
