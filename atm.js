$(document).ready(function(){

console.log("This is working");

var addCheckingButton = $("#checking-deposit");
var withdrawCheckingButton = $("#checking-withdraw");
var addSavingsButton = $("#savings-deposit");
var withdrawSavingsButton = $("#savings-withdraw");

var savingsBalance = 0;
var checkingBalance = 0;

function updateChecking(){
	$("#checking-balance").text("");
		console.log('cleared');
	$("#checking-balance").text("$" + checkingBalance);
		console.log(checkingBalance);
	if (checkingBalance <= 0) {
			console.log("rednering number");
			$('#checking').addClass("zero");
		} else {
			$('#checking').removeClass("zero");
		}
};

function updateSavings() {
	$("#savings-balance").text("");
		console.log('cleared');
	$("#savings-balance").text("$" + savingsBalance);
		console.log(savingsBalance);
	if (savingsBalance <= 0) {
			$('#savings').addClass("zero");
		} else {
			$('#savings').removeClass("zero");
		}

};

//Add event listeners

addCheckingButton.click(depositToChecking)
withdrawCheckingButton.click(withdrawFromChecking)
addSavingsButton.click(depositToSavings)
withdrawSavingsButton.click(withdrawFromSavings)



function depositToChecking() {
	var amount = $("#checking-input").val();
	console.log(amount);
	var dollars = parseInt(amount);
	checkingBalance = checkingBalance + dollars;
		updateChecking();
}

function withdrawFromChecking() {
	var amount = $("#checking-input").val();
	console.log(amount);
	var dollars = parseInt(amount);
	checkingBalance = checkingBalance - dollars;
		updateChecking();
}



function depositToSavings() {
	var amount = $("#savings-input").val();
	console.log(amount);
	var dollars = parseInt(amount);
	savingsBalance = savingsBalance + dollars;
		updateSavings();
}

function withdrawFromSavings() {
	var amount = $("#savings-input").val();
	console.log(amount);
	var dollars = parseInt(amount);
	savingsBalance = savingsBalance - dollars;
		updateSavings();
}


});



