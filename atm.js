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
