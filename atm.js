"use strict";

// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "")

// User chooses either the checking or savings account.

$(document).ready(function() {
	console.log("Bank is ready.");

	// Add an event to checking's deposit button.
	// User should be abe to deposit money to checking.
	// User should be able to view current balance.
	// User should be able to view updated balance.

	$("#addToChecking").on("click", function() {

		var depositMoneyToChecking = parseInt($("#checkingInput").val());
		var checkingBalance = parseInt($("#checkingBalance").text().replace("$", "")); // Had lots of help here since innerHTML wasn't working for me.
		var newCheckingBalance = "$" + (checkingBalance + depositMoneyToChecking);
		
		$("#checkingBalance").text(newCheckingBalance);
			console.log("Added $" + depositMoneyToChecking + " to the checking account.");
	});

	// Add an event to savings's deposit button.
	// User should be abe to deposit money to savings.
	// User should be able to view current balance.
	// User should be able to view updated balance.

	$("#addToSavings").on("click", function() {

		var depositMoneyToSavings = parseInt($("#savingsInput").val());
		var savingsBalance = parseInt($("#savingsBalance").text().replace("$", ""));
		var newSavingsBalance = "$" + (savingsBalance + depositMoneyToSavings);
		
		$("#savingsBalance").text(newSavingsBalance);
			console.log("Added $" + depositMoneyToSavings + " to the savings account.");
	});

	// Add an event to checking's withdraw button.
	// User should be abe to withdraw money from checking.
	// User should be able to view current balance.
	// User should be able to view updated balance.

	$("#withdrawFromChecking").on("click", function() {

		var withdrawMoneyFromChecking = parseInt($("#checkingInput").val());
		var checkingBalance = parseInt($("#checkingBalance").text().replace("$", ""));
		var newCheckingBalance = "$" + (checkingBalance - withdrawMoneyFromChecking);

		$("#checkingBalance").text(newCheckingBalance);
			console.log("Withdrew $" + withdrawMoneyFromChecking + " from the checking account.");
	});	

	// Add an event to savings's withdraw button.
	// User should be abe to withdraw money from savings.
	// User should be able to view current balance.
	// User should be able to view updated balance.

	$("#withdrawFromSavings").on("click", function() {

		var withdrawMoneyFromSavings = parseInt($("#savingsInput").val());
		var savingsBalance = parseInt($("#savingsBalance").text().replace("$", ""));
		var newSavingsBalance = "$" + (savingsBalance - withdrawMoneyFromSavings);
		
		$("#savingsBalance").text(newSavingsBalance);
			console.log("Withdrew $" + withdrawMoneyFromSavings + " from the savings account.");
	});
});	

	// $("#checkingBalance").addClass("zero");

	// 	// var widthrawMoney = parseInt($("#checkingInput").val());
	// 	// 	console.log("Withdraw worked.");
	// 	// var withdrawMoneyFromChecking = parseInt($("#checkingInput").val());
	// 	// var withdrawMoneyFromSavings = parseInt($("#savingsInput").val());
	// 	// var checkingBalance = parseInt($("#checkingBalance").text().replace("$", ""));
	// 	// var newCheckingBalance = "$" + (checkingBalance - withdrawMoneyFromChecking);


	// 	// $("#checkingBalance").text(newCheckingBalance);
	// 	// $("#checkingBalance").addClass("zero");
	// 	// console.log("...");
	// 		// if (newCheckingBalance < 0){
	// 		// 	return withdrawMoneyFromSavings + depositMoneyToChecking;	
	// 		// 	console.log("Withdrew $" + withdrawMoneyFromChecking + " from checking account.");
	// 	});
	// });