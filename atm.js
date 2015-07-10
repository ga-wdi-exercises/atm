// Set variables for checking and saving
var cBalance = $(".balance").eq(0);
cBalance.html("$0");
var sBalance = $(".balance").eq(1);
sBalance.html("$0");

// Set variables for input fields
var cInput = $("#cInput");
var sInput = $("#sInput");

// Set variables for buttons
var cDepositButton = $("#cDeposit");
var cWithdrawButton = $("#cWithdraw");
var sDepositButton = $("#sDeposit");
var sWithdrawButton = $("#sWithdraw");

// Deposit money to checking
cDepositButton.click(function (e){ 
	var amount = parse( cInput.val() );
	e.preventDefault();
	console.log(amount);
	cBalance.html('$' + ( parse( cBalance.html() ) + amount ) );
	cInput.val('');
});
// Withdraw money from checking
cWithdrawButton.click(function (e){
	var amount = parse( cInput.val() );
	e.preventDefault();
	console.log(amount);
	cBalance.html('$' + ( parse( cBalance.html() ) - amount ) );
	cInput.val('');
});
// Deposit money to savings
sDepositButton.click(function (e){ 
	var amount = parse( sInput.val() );
	e.preventDefault();
	console.log(amount);
	sBalance.html('$' + ( parse( sBalance.html() ) + amount ) );
	sInput.val('');
});
// Withdraw money from savings
sWithdrawButton.click(function (e){ 
	var amount = parse( sInput.val() );
	e.preventDefault();
	console.log(amount);
	sBalance.html('$' + ( parse( sBalance.html() ) - amount ) );
	sInput.val('');
});

// Easily parse any numbers for use
function parse(amount) {
	return parseFloat( amount.replace("$", "") );
}