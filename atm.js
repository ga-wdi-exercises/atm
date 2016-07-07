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
		if (checkBalance === 0) {
			$('#checking > .balance').css('background', 'red');
			} else {
			$('#checking > .balance').css('background', 'green');
			};
		 });
// SAVINGS 
	$('.balance').css('background', 'red');
	$('#savings > .deposit').on('click', function() {
		event.preventDefault();
		var checkBalance = parseFloat($('#savings > .balance').html().split('$')[1]);
		var depostieBlance = $('#savings > .input').val();
		var newCheckBalance = parseFloat(checkBalance) + parseFloat(depostieBlance);
		 $('#savings > .balance').html('$' + newCheckBalance); 
		$('#savings > .input').val('');
		if (newCheckBalance === 0) {
			$('#savings > .balance').css('background', 'red');
			} else {
			$('#savings > .balance').css('background', 'green');
			};
		});
	$('#savings > .withdraw').on('click', function() {
		event.preventDefault();
		var checkBalance = parseFloat($('#savings > .balance').html().split('$')[1]);
		var withdrawAmount = parseFloat($('#savings > .input').val());
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
