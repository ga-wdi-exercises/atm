/*
$(document).ready(function(){

});
*/

/* CHECKING */

// TODO create account js object

var account = {
	balance: 0,
	deposit: function(amt) {
		console.log(amt);
		// check for negative number
		//get input amount
		//add amount to curent balance
		// TODO log transaction
	},
	withdraw: function(amt) {
		// get input amount
		// check for negative number
		// subtract amount from current balance
		// TODO log transaction
	},
}

var checking = account;



// TODO Add click listener for the Deposit button
$('#checking .deposit').on('click', function() {
	checking.deposit($('#checking .input').val());
})
// TODO Add click listener for the Withdraw button

// TODO function update balance div

// TODO


/*

Add a click listener to the checking account's "Deposit" button
When you click the button it should console.log("hello")

On clicking "Deposit", it should get the user input
Just console.log it

On clicking "Deposit", it should update the "balance" with the user input

Just make the user input show up. Don't worry about actually keeping track of a balance yet.

On "Deposit", it should get the current "balance"
How can you get the content of the "balance" element?

The content has a $ at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
// TODO Read $___ as a number

On "Deposit", it updates the balance
Now add the user input to the balance, and make it show up in the "balance" element

On "Withdraw", it updates the balance
Follow the same steps as before, except you're subtracting instead of adding
Refactor the existing code
Challenge: Try to have no function() that's longer than 5 lines
*/

// TODO Overdraft protection
// TODO add transaction history

/*
var transaction = {
	date: ,
	time: ,
	type: // deposit or withdraw,
	amount: ,
	newBalance: ,
*/
