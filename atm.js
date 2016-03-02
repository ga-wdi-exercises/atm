
function MyATM(){
  this.total = 0;
  this.bank = {
    input: $("#newEntry"),
    deposit: $("#deposit"),
    withdraw: $("#withdraw")
  };
}

MyATM.prototype.calculateTotal = function(){
  var total;
  for(var i = 0; i < this.amounts.length; i++){
    total += this.amounts[i];
  }
  return total;
};

var checking = new MyATM();

var checkingBalance = $("#checkingBalance").addClass("zero");

$("input.deposit").on("click",function(event){
  event.preventDefault();
  // this makes sure the input is an integer
  var userInput = parseInt(checking.bank.input.val(), 10);
  checkingDeposit(userInput);
  // this clears the input
  checking.bank.input.val("");
}
);

$("input.withdraw").on("click",function(event){
  event.preventDefault();
    var userInput = parseInt(checking.bank.input.val(), 10);
    checkingWithdraw(userInput);
    // this clears the input
    checking.bank.input.val("");
  }
);

// this adds the user input to the running total
var checkingDeposit = function(amount){
  checking.total = checking.total + amount;
  console.log("New total: " + checking.total);
  // console.log(newTotal);
  $("#checkingBalance").removeClass("zero");
  checkingBalance = ($("#checkingBalance").html("$" + checking.total));
  return checking.total;
};

// this
function checkingWithdraw(amount){
  if (checking.total === 0 || checking.total < amount){
    console.log("Nice try, but you're effing broke");
  }else if(checking.total >= amount){
    checking.total = checking.total - Math.abs(amount);
    console.log("New total: " + checking.total);
    checkingBalance = ($("#checkingBalance").html("$" + checking.total));
  }
}

function savingsDeposit(amount){
  savingsBalance = savingsBalance + amount;
  this.total = this.total + amount;
}

function savingsWithdrawal(amount){
  this.total = this.total - amount;
}

/////////

// What elements should we create variables for?

// What events should we listen for?

// What elements need to be created?

// How is user input handled?

// What do we need to keep track of?

// What can be calculated from the things we need to keep track of?

//////////

// an eventListerner for each button, each one a "click"

// As a user, I want to deposit money into one of the bank accounts

// As a user, I want to withdraw money from one of the bank accounts

// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.

// As a user, I want overdraft protection

// What happens when the user wants to withdraw more money from the checking account than is in the account?

// If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.

// If the withdrawal amount is more than the combined account balance, ignore it.

// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)

// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
