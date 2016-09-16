/*
$(document).ready(function(){

});
*/

// CONSTRUCTOR
// Account object constructor
function Account() {
	return {
		domElement: $,
		balance: 0,
		deposit: function(amt) {
			this.balance += amt;
			this.refreshBalance();
			// TODO log transaction
		},
		withdraw: function(amt) {
			this.balance -= amt;
			// TODO if balance is negative, overdraw solution
			this.refreshBalance();
			// TODO log transaction
		},
		refreshBalance: function() {
			var roundedBalance = parseFloat(Math.round(this.balance * 100) / 100).toFixed(2);
			this.domElement.find('.balance').html('$' + roundedBalance);
		}
	}
}


// GLOBAL OBJECTS
// Checking account
var checkingAccount = new Account();
checkingAccount.domElement = $(checking);

// Savings account
var savingsAccount = new Account();
savingsAccount.domElement = $(savings);

// Log, to hold transactions
var log = [];

// Transaction object
var transaction = {
	date: 0,
	time: 0,
	type: "", // deposit, withdraw, overdraw
	amount: 0,
	oldBalance: 0,
	newBalance: 0,
}


// EVENT LISTENERS
// TODO refactor listeners

$('.deposit').on('click', function() {
	// Deposit checking
	if ($(this).parent().attr('id') === "checking") {
		checkingAccount.deposit(formatInput($('#checking .input').val()));
	}
	// Deposit savings
	if ($(this).parent().attr('id') === "savings") {
		savingsAccount.deposit(formatInput($('#savings .input').val()));
	}
})

$('.withdraw').on('click', function() {
	// Withdraw checking
	if ($(this).parent().attr('id') === "checking") {
		var amt = formatInput($('#checking .input').val());
		if (amt > checkingAccount.balance) {
			overdrawChecking(amt);
		} else {
			checkingAccount.withdraw(amt);
		}
	}
	// Withdraw savings
	if ($(this).parent().attr('id') === "savings") {
		savingsAccount.withdraw(formatInput($('#savings .input').val()));
	}
})



// MISC FUNCTIONS
// Format input from string to number, clean input
// TODO if input is all string, input = 0
function formatInput(input) {
	input = input.replace(/[^\d\.]/g, ''); // Remove non-numbers except '.'
	var value = parseFloat(input);
	return value;
}

function overdrawChecking(amt) {
	// If withdrawing more than balance, withdraw from savings
	var overdraw = amt - checkingAccount.balance;
	checkingAccount.withdraw(checkingAccount.balance);
	// If overdraw more than savings, return error
	if (overdraw > savingsAccount.balance) {
		throw "Error: Cannot withdraw amount greater than total balance."
	} else {
		savingsAccount.withdraw(overdraw);
	}
}



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
