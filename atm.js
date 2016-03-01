// As a user, I want to deposit money into one of the bank accounts
// As a user, I want to withdraw money from one of the bank accounts
// Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// As a user, I want overdraft protection
// What happens when the user wants to withdraw more money from the checking account than is in the account?
// If a withdrawal can be covered by the balances in both accounts, take the balance of the account withdrawn from down to $0 and take the rest of the withdrawal from the other account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// As a user, I want the color of my back account to reflect it's balance (there's a CSS class called .zero already written for this!)
// Are there ways to refactor your code to make it DRYer or more Object-Oriented?

//user
  //user
//deposit
  //a button that adds input value to the account balance
//withdraw
  //a button the subtracts input value from the account balance
//bank accounts
  //two divs one for checking and one for savings
//balance
  //the account total
//color
  //account turns red when balance is 0


//get user input and store in variable
  //If user clicks deposit
    //add user input to balance
  //If user clicks withdraw
    //check If balance minus input < 0
      //if yes
        //check if balance of other account > 0
          //if yes and is enough to cover
            //this account balance = 0
            //subtract remainder from other account balance
          //if no
            //do not subtract //overdraft protection
      //if no
        //subtract user input from balance

function Account(balance, input, depositButton, withdrawButton) {
  this.balance = balance;
  this.input = input;
  this.depositButton = depositButton;
  this.withdrawButton = withdrawButton;
}
// I tried to make these functions prototype methods but it got messed up
// when I tried to use "this" in the click event. "This" was no longer pointing to the account object

function checkingDeposit() {
  var currentBal = parseInt(checking.balance.html().replace("$", ""));
  currentBal += parseInt(checking.input.val());
  checking.balance.html("$" + currentBal);
  checking.input.val("");
}

function savingsDeposit() {
  var currentBal = parseInt(savings.balance.html().replace("$", ""));
  currentBal += parseInt(savings.input.val());
  savings.balance.html("$" + currentBal);
  savings.input.val("");
}



var checking = new Account($("#checking_balance"), $("#checking_input"), $("#checking_deposit"), $("#checking_withdraw"));

var savings = new Account($("#savings_balance"), $("#savings_input"), $("#savings_deposit"), $("#savings_withdraw"));

checking.depositButton.on("click", checkingDeposit);
savings.depositButton.on("click", savingsDeposit);

// an eventListerner for each button, each one a "click"
