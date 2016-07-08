$(document).ready(function(){
console.log('test');
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
 //Goals -
// 	deposit money
// 	withdraw money
// 	balance can't go negative
// 	 color reflects balance


// checkingout
// 	 get input val after deposite
//	 add that value to the balance
//	 put that shit in the blance html
//	 get input of withdraw
//	 sub that shit from total
//	 update total in html
//	 if withdarw is more than balance deny that shit
// savings
// 	 get input val saving
//	 add that value to the savings
//	 put that shit in the savings html
//	 get input of withdraw
//	 sub that shit from total
//	 update total in html
//	 if withdarw is more than balance deny that shit


		$('.balance').css('background', 'red');
//  CHECKING
	// Deposite move into total
	$('#checking > .deposit').on('click', function() {
		event.preventDefault();
		var checkBalance = parseFloat($('#checking > .balance').html().split('$')[1]);
		var depostieBlance = $('#checking > .input').val();
		var newCheckBalance = parseFloat(checkBalance) + parseFloat(depostieBlance);
		 $('#checking > .balance').html('$' + newCheckBalance); 
		$('#checking > .input').val('');
		if (newCheckBalance === 0) {
			$('#checking > .balance').css('background', 'red');
			} else {
			$('#checking > .balance').css('background', 'green');
			};
		});
	// Withdraw money from total
	$('#checking > .withdraw').on('click', function() {
		event.preventDefault();
		var checkBalance = parseFloat($('#checking > .balance').html().split('$')[1]);
		var withdrawAmount = parseFloat($('#checking > .input').val());
// if you try and take out more than you have let them know and then
// find the difference 
		if (checkBalance >= withdrawAmount) {
			checkBalance -= withdrawAmount;
		 $('#checking > .balance').html('$' + checkBalance); 
		 $('#checking > .input').val('');
		 } else {
			 alert('You do not have sufficient funds');
			 alert('Going to take the difference from your savings if funds are sufficient');
			 var amountNeeded = withdrawAmount - checkBalance
			 var savingsAmount = parseFloat($('#savings > .balance').html().split('$')[1]);
			 console.log(amountNeeded);
			 console.log(savingsAmount);
			 if(amountNeeded < savingsAmount) {
			 	savingsAmount -= amountNeeded;
				$('#savings > .balance').html('$' + savingsAmount);
				$('#checking > .balance').html('$0');
				} else {
					alert('You do not have enough funds in your savings account');
					};
				
		 $('#checking > .input').val('');
		 };
// change background color for empty or not empty amount of money
		if (checkBalance === 0) {
			$('#checking > .balance').css('background', 'red');
			} else {
			$('#checking > .balance').css('background', 'green');
			};
		 });
// SAVINGS 
// make balance background red when amount is zero
	$('.balance').css('background', 'red');
// When depostie button is clicked in savings put the amount into
// savings
	$('#savings > .deposit').on('click', function() {
		event.preventDefault();
		var checkBalance = parseFloat($('#savings > .balance').html().split('$')[1]);
		var depostieBlance = $('#savings > .input').val();
		var newCheckBalance = parseFloat(checkBalance) + parseFloat(depostieBlance);
		 $('#savings > .balance').html('$' + newCheckBalance); 
		$('#savings > .input').val('');
// setting background color to green if you have money or back to red if
// you run out
		if (newCheckBalance === 0) {
			$('#savings > .balance').css('background', 'red');
			} else {
			$('#savings > .balance').css('background', 'green');
			};
		});
// when the withdraw button is clicked take the money of of the savings
// account
	$('#savings > .withdraw').on('click', function() {
	  someCalled(argument)
		event.preventDefault();
		var checkBalance = parseFloat($('#savings > .balance').html().split('$')[1]);
		var withdrawAmount = parseFloat($('#savings > .input').val());
// if you try and take out more then you have alert them and don't do it
		if (checkBalance >= withdrawAmount) {
			checkBalance -= withdrawAmount;
		 $('#savings > .balance').html('$' + checkBalance); 
		 $('#savings > .input').val('')
		 } else {
		 alert('You do not have sufficient funds');
		 $('#savings > .input').val('');
		 };
		if (checkBalance === 0) {
			$('#savings > .balance').css('background', 'red');
			} else {
			$('#savings > .balance').css('background', 'green');
			};
		 });
	
			
	
});
