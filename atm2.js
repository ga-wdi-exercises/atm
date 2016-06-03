"use strict";

$(document).ready(function() {


$("#checkingDepositButton").on("click", deposit);
$("#checkingWithdrawButton").on("click", withdraw);
$("#savingsDepositButton").on("click", deposit);
$("#savingsWithdrawButton").on("click", withdraw);


function deposit() {
    var currentBalance = $(this).siblings(".balance").html().replace(/\D/g,'');
    var transactionAmount = $(this).siblings(".transactionAmount").val().replace(/\D/g,'');
	currentBalance = parseInt(currentBalance)+parseInt(transactionAmount);
	$(this).siblings(".balance").html('$' + currentBalance);
}

function withdraw() {
    var currentBalance = $(this).siblings(".balance").html().replace(/\D/g,'');
    var transactionAmount = $(this).siblings(".transactionAmount").val().replace(/\D/g,'');
    var otherBalance = $(this).parent().siblings(".account").children(".balance").html().replace(/\D/g,'');
    currentBalance = parseInt(currentBalance);
    transactionAmount = parseInt(transactionAmount);
    otherBalance = parseInt(otherBalance);

    if (currentBalance >= transactionAmount) {
		currentBalance = currentBalance-transactionAmount;
		$(this).siblings(".balance").html('$' + currentBalance);
		$(this).siblings(".withdrawLastButton").val('Withdraw $'+transactionAmount);
	}
	else if (transactionAmount < (currentBalance+otherBalance)) {
		currentBalance = currentBalance-transactionAmount+otherBalance;
		$(this).siblings(".balance").html('$0');
		$(this).parent().siblings(".account").children(".balance").html('$'+currentBalance);
	}
	else {
		alert("Insufficent Funds!")
	}
}

});
