$(document).ready(function(){
  var checking = new Account ($("#checking"));
  var savings = new Account($("#savings"))
});

function Account(element){
  var account =  this;
  account.element = element;
  account.balance = 0;
  account.elements = {
    deposit: account.element.find(".deposit"),
    withdraw: account.element.find(".withdraw"),
    balance: account.element.find(".balance"),
    input: account.element.find(".input")
  }
  account.elements.deposit.click(function(){
    var input = parseInt(account.elements.input.val());
    account.balance += input;
    account.elements.balance.html("$" + account.balance);
  })
  account.elements.withdraw.click(function(){
    var input = parseInt(account.elements.input.val());
    account.balance -= input;
    account.elements.balance.html("$" + account.balance);
  })
};



// $("#checking .deposit").click(function(){
//   var userInput = $("#checking .input").val());
//   $("#checking .balance").html("<h1>userInput</h1>")
//
// }
//
//
// var checkingTotal = 0
//
// $(checkingDepositButton).click(function(){
// checkingTotal += parseFloat($(checkingUserInput).val());
// $(checkingBalance).html(checkingTotal)
// console.log($(checkingUserInput).val());
// })
//
// function Account( type, startingBal ){
//   this.type = type;
//   this.startingBal = startingBal;
//   this.deposits = [];
//   this.withdrawals = [];
//   this.depositMoney = function(input){
//     this.deposits.push(input);
//   }
//   this.withdrawMoney = function(input){
//     this.withdrawals.push(input);
//   }
// };
// console.dir(Account);
// // --Checking----------------------
// var Checking = new Account("Checking","0");
//
// Checking.prototype.deposit = function(){
//
// }
//
//
// // console.dir(Checking)
//
//
// //--Account--------------------------
// var Savings = new Account("Savings","0");
// // console.dir(Savings)
