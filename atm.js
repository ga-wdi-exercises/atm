$(document).ready(function(){
  $("input").eq(0).addClass("checking_input");
  $("input").eq(3).addClass("savings_input");

function Account(type,min){
  this.type = type;
  this.min = 0;
  // this.input = input;
  this.balance = balance;
  this.deposit = function(){
    parseInt($(".checking"))
  };
  this.withdrawal = function() {
  }
};


var Checking = new Account("checking",0)
var Savings = new Account("savings",0)

});


//console.dir(account (or checking etc. ))
