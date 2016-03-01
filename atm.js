function MyATM(){
  this.amounts = [];
  this.bank = {
    input: $("#newEntry"),
    total: $(".balance"),
    form: $("#myChecking"),
  };
}

MyATM.prototype.calculateTotal = function(){
  var total = this.bank.total + this.bank.input;
  return total;
};



var checking = new MyATM();

var checkingBalance = $("#checkingBalance");
// checkingBalance = parseInt($(".checkingBalance").append("$", "") );

// parseInt( checkingBalance.innerHTML.replace("$", "") );

checking.bank.form.on("submit",function(event){
  event.preventDefault();
  var userInput = parseInt(checking.bank.input.val());
  console.log(userInput);
  checking.amounts.push(userInput);
  // this clears the input
  checking.bank.input.val("");
  var newTotal = checking.calculateTotal();
  checkingBalance.val(newTotal.toFixed(2));
}
);

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
};


function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// What elements should we create variables for?



// What events should we listen for?
//
// What elements need to be created?
//
// How is user input handled?
//
// What do we need to keep track of?
//
// What can be calculated from the things we need to keep track of?

// when the user submits either form:
//   bonus: check to make sure it's a number
//   get the input
//     make sure the decimals work // parseFloat
//   add the input to the total
  //   update the total html
//   clear the input


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
