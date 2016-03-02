
function MyATM(){
  this.balance = 0;
  this.checking = {
    input: $("#newChecking"),
    // deposit: $("#deposit"),
    // withdraw: $("#withdraw"),
    total: 0
  };
  this.savings = {
    input: $("#newSavings"),
    total: 0
  };
}

MyATM.prototype.calculateTotal = function(){
  var total;
  for(var i = 0; i < this.amounts.length; i++){
    total += this.amounts[i];
  }
  return total;
};

var pnc = new MyATM();

var checkingBalance = $("#checkingBalance");
var savingsBalance = $("#savingsBalance");
// .addClass("zero");

$("input.deposit").on("click",function(event){
  event.preventDefault();
  // this makes sure the input is an integer
  var userInput = parseInt(pnc.checking.input.val(), 10) || parseInt(pnc.savings.input.val(), 10);
  checkingDeposit(userInput);
  // this clears the input
  pnc.checking.input.val("");
}
);

$("input.withdraw").on("click",function(event){
  event.preventDefault();
    var userInput = parseInt(pnc.checking.input.val(), 10);
    checkingWithdraw(userInput);
    // this clears the input
    pnc.checking.input.val("");
  }
);

// this adds the user input to the checking total
var checkingDeposit = function(amount){
  var checkingTotal = pnc.checking.total + amount;
  $("#checkingBalance").removeClass("zero");
  checkingBalance = ($("#checkingBalance").html("$" + checkingTotal));
  pnc.checking.total = checkingTotal;
  newBalance = checkingTotal + pnc.balance;
  pnc.balance = checkingTotal;
  console.log("Total balance: " + pnc.balance);
  console.log("New checking total: " + pnc.checking.total);
};

// this subtracts the user input from the checking total
function checkingWithdraw(amount){
  if (pnc.checking.total === 0 || pnc.checking.total < amount){
    console.log("Nice try, but you're effing broke");
  }else if(pnc.checking.total >= amount){
    console.log("This should work but...");
    pnc.checking.total = pnc.checking.total - Math.abs(amount);
    pnc.balance = pnc.checking.total + pnc.balance;
    console.log("New checking total: " + pnc.checking.total);
    console.log("New total balance: " + pnc.total);
    checkingBalance = ($("#checkingBalance").html("$" + pnc.checking.total));
  }
}

function savingsDeposit(amount){
  var savingsTotal = pnc.savings.total + amount;
  console.log("New savings total: " + pnc.savings.total);
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

// What happens when the user wants to withdraw more money from the pnc account than is in the account?

// If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.

// If the withdrawal amount is more than the combined account balance, ignore it.

// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)

// Are there ways to refactor your code to make it DRYer or more Object-Oriented?
