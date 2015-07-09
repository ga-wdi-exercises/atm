// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "")

// User chooses either the checking or savings account.

$(document).ready(function() {
	console.log("Bank is ready.");

	// Add an event to checking's deposit button.
	$("#addToChecking").on("click", function() {
		// Use parseInt to receive the value of the input you are targeting.
		var depositMoney = parseInt($("#checkingInput").val());
		// Use parseInt to ...
		var accountBalance = parseInt($("#checkingBalance").text().replace("$", "")); // Had lots ofhelp here.
			console.log("Checking balance.")
		// Create a string for the new balance.
		// Add ()s to avoid repeating numbers.
		var newBalance = "$" + (accountBalance + depositMoney); // Had help here.
		// Total balance and show the new balance.
		$("#checkingBalance").text(newBalance);
			console.log("Added $" + depositMoney + " to the checking account.");
	});

	// Repeat the same funtion as the checking account.
	$("#addToSavings").on("click", function() {
		var depositMoney = parseInt($("#savingsInput").val());
		var accountBalance = parseInt($("#savingsBalance").text().replace("$", ""));
			console.log("Checking balance.")
		var newBalance = "$" + (accountBalance + depositMoney);
		$("#savingsBalance").text(newBalance);
			console.log("Added $" + depositMoney + " to the savings account.");
	});


	// Repeat the same funtion as the checking account.
	$("#withdrawFromSavings").on("click", function() {
		var accountBalance = parseInt($("#checkingBalance").text().replace("$", ""));
			console.log("Checking balance.")
		var newBalance = "$" + (accountBalance - withdrawMoney);
		$("#checkingBalance").text(newBalance);
			console.log("Withdrew $" + depositMoney + " from the checking account.");
	});
});




// User wants to deposit money.




// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// }

// function checkingWithdrawal(amount){

// }

// function savingsDeposit(amount){

// }

// function savingsWithdrawal(amount){

// }

// an eventListerner for each button, each one a "click"