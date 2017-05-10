$(document).ready(function(){
	var userAccounts = {
		checkings : 0,
		savings : 0
	};
	//deposit checking
	$('#checking .deposit').on("click",function(){
		moneyCheck()
	})
	//deposit saving
	$('#savings .deposit').on("click",function(){
		moneySave()
	})
	//withdrawl form checkings
	$('#checking .withdraw').on("click", function(){
		withdrawlCheck()
	})
	//withdrawl form savings
	$('#savings .withdraw').on("click", function(){
		withdrawlSave()
	})
	//function to withdrawl $$$ checkings
	function withdrawlCheck() {
		var withdrawlAmount = $('#checking .input').val()
		userAccounts.checkings -= withdrawlAmount
		$('#checking .balance').text("$"+userAccounts.checkings)
	}
	//function to withdrawl $$$ savings
	function withdrawlSave() {
		var withdrawlAmount = $('#savings .input').val()
		userAccounts.savings -= withdrawlAmount
		$('#savings .balance').text("$"+userAccounts.savings)
	}

	//function to deposit $$$ checking
	function moneyCheck() {
		var deposit = $('#checking .input').val()
		deposit = parseInt(deposit,10)
		userAccounts.checkings += deposit;
		$('#checking .balance').text("$"+userAccounts.checkings)
	}
	//function to deposit $$$ saving
	function moneySave() {
		var deposit = $('#savings .input').val()
		deposit = parseInt(deposit,10)
		userAccounts.savings += deposit;
		$('#savings .balance').text("$"+userAccounts.savings)
	}
	//
});
