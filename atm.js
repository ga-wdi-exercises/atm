$(document).ready(function(){

// to make sure I'm targeting the right buttons
// $("#checking .deposit").css("background-color", "red");
// $("#checking .withdraw").css("background-color", "blue");
// $("#checking .balance").css("background-color", "purple");
// $("#checking .input").css("background-color", "green");

var depositButtonC = $("#checking .deposit");
var withdrawButtonC = $("#checking .withdraw");
var balanceWindowC = $("#checking .balance");
var inputC = $("#checking .input");
var balanceC = 0;

var depositButtonS = $("#savings .deposit");
var withdrawButtonS = $("#savings .withdraw");
var balanceWindowS = $("#savings .balance");
var inputS = $("#savings .input");
var balanceS = 0;

//notes from class:
//use parseInt to convert it to actual number so we can do math on it.  inputs are generally strings
//could use .text to get value of a div, but not of an input tag
//parseInt doesn't like $ in front.  parseInt("$50") will return NaN
//var blanace = parseInt($(".savings.balance").text().replace("$", ""))
//good way to debug is use typeof() to see if it's a string, etc
//parseFloat is for decimal points - won't round up, just cuts off
//some returns break the chain of whether you're getting jquery elements

//could do the parsing separately and stick to a variable, clean, and just use clean going forward in those places
//var clean(input) {
	// return parseInt($(input.text(),replace....))
//}




var depositC = function() {
	var inputValue = parseInt(inputC.val());	

	balanceC = balanceC + inputValue;
	
	// var balanceAmt = current + inputValue;
	balanceWindowC.html("$" + balanceC);
};

var withdrawC = function() {
	var inputValue = parseInt(inputC.val());	
	if (balanceC - inputValue >= 0){
	balanceC = balanceC - inputValue;
	
	// var balanceAmt = current + inputValue;
	balanceWindowC.html("$" + balanceC);
	};
};

var depositS = function() {
	var inputValue = parseInt(inputS.val());	

	balanceS = balanceS + inputValue;
	
	// var balanceAmt = current + inputValue;
	balanceWindowS.html("$" + balanceS);
};

var withdrawS = function() {
	var inputValue = parseInt(inputS.val());	
	if (balanceS - inputValue >= 0){
	balanceS = balanceS - inputValue;
	
	// var balanceAmt = current + inputValue;
	balanceWindowS.html("$" + balanceS);
	};
};




depositButtonC.on("click", depositC);

withdrawButtonC.on("click", withdrawC);


depositButtonS.on("click", depositS);

withdrawButtonS.on("click", withdrawS);
});



