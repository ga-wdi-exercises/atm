// Set variables for checking and saving
var cBalance = $(".balance").eq(0);
cBalance.html("$0");
var sBalance = $(".balance").eq(1);
sBalance.html("$0");

// Set variables for input fields
var cInput = $("#cInput");
var sInput = $("#sInput");

$("#cDeposit").click(function (e){
	e.preventDefault();
	var deposit = parseFloat( $("#cInput").val() );
	var total = parseInt(cBalance.text().replace("$", ""));
	var newTotal = "$" + (total + deposit);
	cBalance.html(newTotal);
})
// Withdraw money from checking, with overdraft protection
$("#cWithdraw").click(function (e){
	e.preventDefault();
	var withdraw = parseFloat( $("#cInput").val() );
	var cTotal = parseInt(cBalance.text().replace("$", ""));
	var sTotal = parseInt(sBalance.text().replace("$", ""));
	var combineTotal = cTotal + sTotal;
	if(combineTotal - withdraw >= 0) {
		if(cTotal - withdraw >= 0) {
			console.log("Withdraw from checking!");
			newTotal = "$" + (cTotal - withdraw);
			cBalance.html(newTotal);
		} else {
			console.log("Withdraw from savings, overdraft protection!!");
			sBalance.html( sTotal - (withdraw - cTotal) );
			cBalance.html( "$0" );
		}
	} else {
		console.log("Can't withdraw, bitch!");
	}
})

$("#sDeposit").click(function (e){
	e.preventDefault();
	var deposit = parseFloat( $("#sInput").val() );
	var total = parseInt(sBalance.text().replace("$", ""));
	var newTotal = "$" + (total + deposit);
	sBalance.html(newTotal);
})

$("#sWithdraw").click(function (e){
	e.preventDefault();
	var withdraw = parseFloat( $("#sInput").val() );
	var total = parseInt(sBalance.text().replace("$", ""));
	if(total - withdraw >= 0) {
		var newTotal = "$" + (total - withdraw);
		sBalance.html(newTotal);
	} else {
		console.log("Can't withdraw from savings, not enough moolah!")
	}
})

/* 
cBalance.addClass("zero");
cBalance.removeClass("zero");
sBalance.addClass("zero");
sBalance.removeClass("zero");
*/