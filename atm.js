// Set variables for checking and saving
var checkingBalance = $(".balance").eq(0);
checkingBalance.html("$0");
var savingBalance = $(".balance").eq(1);
savingBalance.html("$0");

// Set variables for input fields
var checkingInput = $(":text").eq(0);
var savingInput = $(":text").eq(1);

// Set variables for buttons
var checkingDepositButton = $(":button").eq(0);
var checkingWithdrawButton = $(":button").eq(1);
var savingDepositButton = $(":button").eq(2);
var savingWithdrawButton = $(":button").eq(3);

// Deposit money to checking
checkingDepositButton.click(function (e){ 
	var amount = parse( checkingInput.val() );
	e.preventDefault();
	console.log(amount);
	checkingBalance.html('$' + ( parse( checkingBalance.html() ) + amount ) );
	checkingInput.val('');
});
// Withdraw money from checking
checkingWithdrawButton.click(function (e){
	var amount = parse( checkingInput.val() );
	e.preventDefault();
	console.log(amount);
	checkingBalance.html('$' + ( parse( checkingBalance.html() ) - amount ) );
	checkingInput.val('');
});
// Deposit money to savings
savingDepositButton.click(function (e){ 
	var amount = parse( savingInput.val() );
	e.preventDefault();
	console.log(amount);
	savingBalance.html('$' + ( parse( savingBalance.html() ) + amount ) );
	savingInput.val('');
});
// Withdraw money from savings
savingWithdrawButton.click(function (e){ 
	var amount = parse( savingInput.val() );
	e.preventDefault();
	console.log(amount);
	savingBalance.html('$' + ( parse( savingBalance.html() ) - amount ) );
	savingInput.val('');
});

// Easily parse any numbers for use
function parse(amount) {
	return parseFloat( amount.replace("$", "") );
}