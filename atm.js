$(document).ready(function(){
	var userAccounts = {
		checkings : 0,
		savings : 0
	};

	//deposit checking
	$('#checking .deposit').on("click",function(){
		moneyCheck()
		inTheRedCheckings()
	})
	//deposit saving
	$('#savings .deposit').on("click",function(){
		moneySave()
		inTheRedSavings()
	})
	//withdrawl form checkings
	$('#checking .withdraw').on("click", function(){
		
		withdrawlCheck()

		inTheRedCheckings()

	})
	//withdrawl form savings
	$('#savings .withdraw').on("click", function(){

		withdrawlSave()

		inTheRedSavings()
	})



	//function to withdrawl $$$ checkings
	function withdrawlCheck() {
		var withdrawlAmount = $('#checking .input').val()
		if(userAccounts.checkings - withdrawlAmount < 0){
			overDraftProtection()
		}else{
			userAccounts.checkings -= withdrawlAmount
			displayCheck()
		}
	}
/////////////////////////////////////
function overDraftProtection() {
	var withdrawlAmount = $('#checking .input').val()
	var theDifference = withdrawlAmount - userAccounts.checkings
	console.log(theDifference)
	console.log(theDifference - userAccounts.savings)
	if(userAccounts.savings - theDifference < 0){
		alert("Error! you do not have enough funds");
		return
	}else{
		userAccounts.savings -= theDifference
		displaySave();
		userAccounts.checkings = 0;
		displayCheck();
		
	}
}
///////////////////////////////////////
	function displayCheck() {
		$('#checking .balance').text("$"+userAccounts.checkings)
	}
	function displaySave() {
		$('#savings .balance').text("$"+userAccounts.savings)
	}
	//function to withdrawl $$$ savings
	function withdrawlSave() {
		var withdrawlAmount = $('#savings .input').val()
		if(userAccounts.savings - withdrawlAmount < 0){
			// alert("You do not have enough funds");
			return
		}else{
			userAccounts.savings -= withdrawlAmount
			displaySave()
		}
	}

	//function to deposit $$$ checking
	function moneyCheck() {
		var deposit = $('#checking .input').val()
		deposit = parseInt(deposit,10)
		userAccounts.checkings += deposit;
		displayCheck()
	}
	//function to deposit $$$ saving
	function moneySave() {
		var deposit = $('#savings .input').val()
		deposit = parseInt(deposit,10)
		userAccounts.savings += deposit;
		displaySave()
	}
	//color checkings
	function inTheRedCheckings() {
		if(userAccounts.checkings === 0){
			$('div#checking').addClass('zero')
		}else{
			$('div#checking').removeClass('zero')
		}
	}
	//color savings
	function inTheRedSavings() {
		if(userAccounts.savings === 0){
			$('div#savings').addClass('zero')
		}else{
			$('div#savings').removeClass('zero')
		}
	}
});
