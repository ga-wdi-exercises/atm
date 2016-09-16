/*
$(document).ready(function(){

});
*/

// CONSTRUCTOR
// Account object constructor
function Account() {
	return {
		accountName: "",
		domElement: $,
		balance: 0,
		deposit: function(amt) {
			this.balance += amt;
			this.refreshBalance();
			logTransaction(this.accountName, "deposit", amt, this.balance);
		},
		withdraw: function(amt, type) {
			this.balance -= amt;
			this.refreshBalance();
			if (type ==='overdraw') {
				logTransaction(this.accountName, "overdraw", amt, this.balance);
			} else {
				logTransaction(this.accountName, "withdraw", amt, this.balance);
			}
		},
		transfer: function(amt, toAccount) {
			this.balance -= amt;
			toAccount.balance += amt;
			this.refreshBalance();
			toAccount.refreshBalance();
			if (this.accountName === "checking") {
				logTransaction(this.accountName, "transfer", amt, this.balance);
				logTransaction(savingsAccount.accountName, "transfer", amt, savingsAccount.balance);
			} else if (this.accountName === "savings") {
				logTransaction(this.accountName, "transfer", amt, this.balance);
				logTransaction(checkingAccount.accountName, "transfer", amt, checkingAccount.balance);
			}
		},
		refreshBalance: function() {
			var roundedBalance = parseFloat(Math.round(this.balance * 100) / 100).toFixed(2);
			this.domElement.find('.balance').html('$' + roundedBalance);
		}
	}
}

// Transaction object constructor
function Transaction() {
	return {
		date: "",
		account: "",
		type: "", // deposit, withdraw, overdraw
		amount: 0,
		newBalance: 0,
	}
}




// Add transactions to DOM
function logTransaction(account, type, amt, balance) {
	// Begin html table row
	var logEntry = '<tr>';

	// Add date
	var date = getDate();
	logEntry += '<td>' + date + '</td>'; // TODO fix date

	// Add account
	logEntry += '<td class="capitalize">' + account + '</td>';

	// Add type w coloring
	if (type === 'deposit') {
		logEntry += '<td class="green capitalize">' + type + '</td>';
	} else if (type === 'withdraw' || type === 'overdraw') {
		logEntry += '<td class="red capitalize">' + type + '</td>';
	} else {
		logEntry += '<td class="blue capitalize">' + type + '</td>';
	}

	// Add amount w coloring
	if (type === 'deposit') {
		logEntry += '<td class="green">$' + amt + '</td>';
	} else if (type === 'withdraw' || type === 'overdraw') {
		logEntry += '<td class="red">$' + amt + '</td>';
	} else {
		logEntry += '<td class="blue">$' + amt + '</td>';
	}

	// Add balance
	logEntry += '<td>$' + balance + '</td>';

	// End html table row
	logEntry += '</tr>';

	// Add to DOM
	$('#log .labels').after(logEntry);

	// Create transaction object
	var transaction = new Transaction();
	transaction.date = date;
	transaction.account = account;
	transaction.type = type;
	transaction.amount = amt;
	transaction.newBalance = balance;

	// Log transaction
	transactionLog.push(transaction);
}



// GLOBAL OBJECTS
// Checking account
var checkingAccount = new Account();
checkingAccount.accountName = "checking";
checkingAccount.domElement = $(checking);

// Savings account
var savingsAccount = new Account();
savingsAccount.accountName = "savings";
savingsAccount.domElement = $(savings);

// Log, to hold transactions
var transactionLog = [];



// EVENT LISTENERS
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
		var amt = formatInput($('#savings .input').val());
		if (amt > savingsAccount.balance) {
			throw "Error: Cannot withdraw amount greater than account balance.";
		} else {
			savingsAccount.withdraw(amt);
		}
	}
})

$('.transfer').on('click', function() {
	// Transfer checking
	if ($(this).parent().attr('id') === "checking") {
		var amt = formatInput($('#checking .input').val());
		if (amt > checkingAccount.balance) {
			throw "Error: Cannot transfer amount greater than account balance.";
		} else {
			checkingAccount.transfer(amt, savingsAccount);
		}
	}
	// Transfer savings
	if ($(this).parent().attr('id') === "savings") {
		var amt = formatInput($('#savings .input').val());
		if (amt > savingsAccount.balance) {
			throw "Error: Cannot transfer amount greater than account balance.";
		} else {
			savingsAccount.transfer(amt, checkingAccount);
		}
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

// Check for overdraw
function overdrawChecking(amt) {
	// If withdrawing more than balance, withdraw from savings
	var overdraw = amt - checkingAccount.balance;
	checkingAccount.withdraw(checkingAccount.balance, 'overdraw');
	// If overdraw more than savings, return error
	if (overdraw > savingsAccount.balance) {
		throw "Error: Cannot withdraw amount greater than total balance."
	} else {
		savingsAccount.withdraw(overdraw, 'overdraw');
	}
}

// Format date
function getDate() {
	var d = new Date();
	var month = d.getMonth() + 1;
	var day = d.getDate();
	var time = d.getHours() + ":" + d.getMinutes();
	var output = (month < 10 ? '0' : '') + month + '/' +
		(day < 10 ? '0' : '') + day + '/' +
		d.getFullYear() + ', ' +
		time;
	return output;
}
