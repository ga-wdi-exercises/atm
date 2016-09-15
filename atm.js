/*
$(document).ready(function(){

});
*/

/* CHECKING */

// TODO create account js object
/*
function Account(accountName) {
	this.accountName = accountName;
	this.domElement = $();
	this.balance = 0;
	this.deposit: function()

}*/


function account() {
	return {
		domElement: $,
		balance: 0,
		deposit: function(amt) {
			if (amt < 0) {
				// TODO Display error on screen
				throw "Error: Cannot deposit a negative amount";
			}
			this.balance += amt;
			console.log(this);
			console.log(this.domElement);
			this.refreshBalance();
			// TODO log transaction
		},
		withdraw: function(amt) {
			if (amt < 0) {
				// TODO Display error on screen
				throw "Error: Cannot deposit a negative amount";
			}
			this.balance -= amt;
			this.refreshBalance();
			// TODO log transaction
		},
		refreshBalance: function() {
			var roundedBalance = parseFloat(Math.round(this.balance * 100) / 100).toFixed(2);
			this.domElement.find('.balance').html('$' + roundedBalance);

			console.log(this.balance);
		}
	}
}

var checkingAccount = account();
checkingAccount.domElement = $(checking);

var savingsAccount = account();
savingsAccount.domElement = $(savings);



// Button click listeners
// TODO refactor listeners
$('#checking .deposit').on('click', function() {
	checkingAccount.deposit(formatInput($('#checking .input').val()));
})

$('#savings .deposit').on('click', function() {
	savingsAccount.deposit(formatInput($('#savings .input').val()));
})

$('#checking .withdraw').on('click', function() {
	checkingAccount.withdraw(formatInput($('#checking .input').val()));
})

$('#savings .withdraw').on('click', function() {
	savingsAccount.withdraw(formatInput($('#savings .input').val()));
})


// TODO Read $___ as a number
function formatInput(input) {
	input = input.replace(/[^\d\.]/g, ''); // Remove non-numbers except '.'
	var value = parseFloat(input);
	return value;
}


/*

Add a click listener to the checking account's "Deposit" button
When you click the button it should console.log("hello")

On clicking "Deposit", it should get the user input
Just console.log it

On clicking "Deposit", it should update the "balance" with the user input

Just make the user input show up. Don't worry about actually keeping track of a balance yet.

On "Deposit", it should get the current "balance"
How can you get the content of the "balance" element?

The content has a $ at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?


On "Deposit", it updates the balance
Now add the user input to the balance, and make it show up in the "balance" element

On "Withdraw", it updates the balance
Follow the same steps as before, except you're subtracting instead of adding
Refactor the existing code
Challenge: Try to have no function() that's longer than 5 lines
*/

// TODO Overdraft protection
// TODO add transaction history

/*
var transaction = {
	date: ,
	time: ,
	type: // deposit or withdraw,
	amount: ,
	newBalance: ,
*/
