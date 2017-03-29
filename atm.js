$(document).ready(function(){

// to make sure I'm targeting the right buttons
// $("#checking .deposit").css("background-color", "red");
// $("#checking .withdraw").css("background-color", "blue");
// $("#checking .balance").css("background-color", "purple");
// $("#checking .input").css("background-color", "green");

var depositButton = $("#checking .deposit");
var withdrawButton = $("#checking .withdraw");
var balanceWindow = $("#checking .balance");
var input = $("#checking .input");
var balance = 0;



var deposit = function() {
	var inputValue = parseInt(input.val());	

	balance = balance + inputValue;
	
	// var balanceAmt = current + inputValue;
	balanceWindow.html(balance);
};

var withdraw = function() {
	var inputValue = parseInt(input.val());	

	balance = balance - inputValue;
	
	// var balanceAmt = current + inputValue;
	balanceWindow.html(balance);
};



depositButton.on("click", deposit);

withdrawButton.on("click", withdraw);


});



