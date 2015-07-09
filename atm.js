// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "")

// User chooses either the checking or savings account.

$(document).ready(function() {
	console.log("Bank is ready.");

	// Add an event to checking's deposit button.
	$("#addToChecking").on("click", function() {
		console.log("Button works.")
		// User should be abe to deposit money to checking.
		var depositMoneyToChecking = parseInt($("#checkingInput").val());
		
		// User should be able to view current balance.
		var checkingBalance = parseInt($("#checkingBalance").text().replace("$", "")); // Had lots ofhelp here.
		
		// User should be able to view updated balance.
		var newCheckingBalance = "$" + (checkingBalance + depositMoneyToChecking);
		
		$("#checkingBalance").text(newCheckingBalance);
			console.log("Added $" + depositMoneyToChecking + " to the checking account.");
	});

	// Add an event to savings's deposit button.
	$("#addToSavings").on("click", function() {
		console.log("Button works.")
		// User should be abe to deposit money to savings.
		var depositMoneyToSavings = parseInt($("#savingsInput").val());
		
		// User should be able to view current balance.
		var savingsBalance = parseInt($("#savingsBalance").text().replace("$", "")); // Had lots ofhelp here.
		
		// User should be able to view updated balance.
		var newSavingsBalance = "$" + (savingsBalance + depositMoneyToSavings);
		
		$("#savingsBalance").text(newSavingsBalance);
			console.log("Added $" + depositMoneyToSavings + " to the savings account.");
	});

	// Add an event to checking's withdraw button.
	$("#withdrawFromChecking").on("click", function() {
		console.log("Button works.")
		// User should be abe to withdraw money from checking.
		var withdrawMoneyFromChecking = parseInt($("#checkingInput").val());
		
		// User should be able to view current balance.
		var checkingBalance = parseInt($("#checkingBalance").text().replace("$", "")); // Had lots ofhelp here.
		
		// User should be able to view updated balance.
		var newCheckingBalance = "$" + (checkingBalance - withdrawMoneyFromChecking); // Subtract money!
		
		$("#checkingBalance").text(newCheckingBalance);
			console.log("Withdrew $" + withdrawMoneyFromChecking + " from the checking account.");
	});

	// Add an event to savings's withdraw button.
	$("#withdrawFromSavings").on("click", function() {
		console.log("Button works.")
		// User should be abe to withdraw money from savings.
		var withdrawMoneyFromSavings = parseInt($("#savingsInput").val());
		
		// User should be able to view current balance.
		var savingsBalance = parseInt($("#savingsBalance").text().replace("$", "")); // Had lots ofhelp here.
		
		// User should be able to view updated balance.
		var newSavingsBalance = "$" + (savingsBalance - withdrawMoneyFromSavings); // Subtract money!
		
		$("#savingsBalance").text(newSavingsBalance);
			console.log("Withdrew $" + withdrawMoneyFromSavings + " from the savings account.");
	});

	// 
});