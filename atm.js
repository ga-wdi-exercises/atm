/*
$(document).ready(function(){

});
*/

// CONSTRUCTOR
// Account object constructor
function Account() {
	return {
		accountName: '',
		domElement: $,
		balance: 0,
		deposit: function(amt) {
			this.balance += amt;
			this.refreshBalance();
			this.logTransaction(amt, 'deposit');
		},
		withdraw: function(amt, type) {
			this.balance -= amt;
			this.refreshBalance();
			if (type ==='overdraw') {
				this.logTransaction(amt, type);
			} else {
				this.logTransaction(amt, 'withdraw');
			}
		},
		transfer: function(amt, toAccount) {
			this.balance -= amt;
			toAccount.balance += amt;
			this.refreshBalance();
			toAccount.refreshBalance();
			var type = 'transfer';
			if (this.accountName === 'checking') {
				this.logTransaction(amt, type);
				this.logTransaction(amt, type, 'savings');
			} else if (this.accountName === 'savings') {
				this.logTransaction(amt, type);
				this.logTransaction(amt, type, 'checking');
			}
		},
		refreshBalance: function() {
			var roundedBalance = parseFloat(Math.round(this.balance * 100) / 100).toFixed(2);
			this.domElement.find('.balance').html('$' + roundedBalance);
		},
		logTransaction: function(amt, type, account) {
			var transaction = new Transaction();
			transaction.date = getDate();
			if (account) {
				transaction.account = account;
			} else {
				transaction.account = this.accountName;
			}
			transaction.type = type;
			transaction.amount = amt;
			transaction.newBalance = this.balance;
			// Log transaction
			transactionLog.push(transaction);
			// Print transaction
			printTransaction(transaction);
		}
	}
}

// Transaction object constructor
function Transaction() {
	return {
		date: '',
		account: '',
		type: '', // deposit, withdraw, overdraw
		amount: 0,
		newBalance: 0,
	}
}



// GLOBAL OBJECTS
// Checking account
var checkingAccount = new Account();
checkingAccount.accountName = 'checking';
checkingAccount.domElement = $(checking);

// Savings account
var savingsAccount = new Account();
savingsAccount.accountName = 'savings';
savingsAccount.domElement = $(savings);

// Log, to hold transactions
var transactionLog = [];



// EVENT LISTENERS
$('.deposit').on('click', function() {
	// Deposit checking
	if ($(this).parent().attr('id') === 'checking') {
		checkingAccount.deposit(formatInput($('#checking .input').val()));
	}
	// Deposit savings
	if ($(this).parent().attr('id') === 'savings') {
		savingsAccount.deposit(formatInput($('#savings .input').val()));
	}
})

$('.withdraw').on('click', function() {
	// Withdraw checking
	if ($(this).parent().attr('id') === 'checking') {
		var amt = formatInput($('#checking .input').val());
		if (amt > checkingAccount.balance) {
			overdrawChecking(amt);
		} else {
			checkingAccount.withdraw(amt);
		}
	}
	// Withdraw savings
	if ($(this).parent().attr('id') === 'savings') {
		var amt = formatInput($('#savings .input').val());
		if (amt > savingsAccount.balance) {
			throw 'Error: Cannot withdraw amount greater than account balance.';
		} else {
			savingsAccount.withdraw(amt);
		}
	}
})

$('.transfer').on('click', function() {
	// Transfer checking
	if ($(this).parent().attr('id') === 'checking') {
		var amt = formatInput($('#checking .input').val());
		if (amt > checkingAccount.balance) {
			throw 'Error: Cannot transfer amount greater than account balance.';
		} else {
			checkingAccount.transfer(amt, savingsAccount);
		}
	}
	// Transfer savings
	if ($(this).parent().attr('id') === 'savings') {
		var amt = formatInput($('#savings .input').val());
		if (amt > savingsAccount.balance) {
			throw 'Error: Cannot transfer amount greater than account balance.';
		} else {
			savingsAccount.transfer(amt, checkingAccount);
		}
	}
})



// MAIN FUNCTIONS
// Check for overdraw
function overdrawChecking(amt) {
	// If withdrawing more than balance, withdraw from savings
	var overdraw = amt - checkingAccount.balance;
	checkingAccount.withdraw(checkingAccount.balance, 'overdraw');
	// If overdraw more than savings, return error
	if (overdraw > savingsAccount.balance) {
		throw 'Error: Cannot withdraw amount greater than total balance.'
	} else {
		savingsAccount.withdraw(overdraw, 'overdraw');
	}
}

// Add transactions to DOM
function printTransaction(transaction) {
	// Begin html table row
	var logEntry = '<tr>';

	// Add date
	logEntry += '<td>' + transaction.date + '</td>'; // TODO fix date

	// Add account
	logEntry += '<td class="capitalize">' + transaction.account + '</td>';

	// Add type w coloring
	if (transaction.type === 'deposit') {
		logEntry += '<td class="green capitalize">' + transaction.type + '</td>';
	} else if (transaction.type === 'withdraw' || transaction.type === 'overdraw') {
		logEntry += '<td class="red capitalize">' + transaction.type + '</td>';
	} else {
		logEntry += '<td class="blue capitalize">' + transaction.type + '</td>';
	}

	// Add amount w coloring
	if (transaction.type === 'deposit') {
		logEntry += '<td class="green">$' + transaction.amount + '</td>';
	} else if (transaction.type === 'withdraw' || transaction.type === 'overdraw') {
		logEntry += '<td class="red">$' + transaction.amount + '</td>';
	} else {
		logEntry += '<td class="blue">$' + transaction.amount + '</td>';
	}

	// Add balance
	logEntry += '<td>$' + transaction.newBalance + '</td>';

	// End html table row
	logEntry += '</tr>';

	// Add to DOM
	$('#log .labels').after(logEntry);
}



// MISC FUNCTIONS
// Format input from string to number, clean input
// TODO if input is all string, input = 0
function formatInput(input) {
	input = input.replace(/[^\d\.]/g, ''); // Remove non-numbers except '.'
	var value = parseFloat(input);
	return value;
}

// Format date
function getDate() {
	var d = new Date();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var time = d.getHours() + ':' + d.getMinutes();
	var output = (month < 10 ? '0' : '') + month + '/' +
		(day < 10 ? '0' : '') + day + '/' +
		d.getFullYear() + ', ' +
		time;
	return output;
}
