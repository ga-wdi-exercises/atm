$(document).ready(function(){

	var amount;
	// var checkingTotal = 0;
	// var savingsTotal = 0;

	//set click events on withdrawal and deposit buttons

	$(".deposit").on("click", obtainAmount)
	$(".withdraw").on("click", obtainAmount)

	//set colors (classes) for accounts
	function setAccountColor(){
		if (parseFloat($("#checking .balance").text().replace("$", "")) <= 0){
			$("#checking .balance").addClass("zero");
		} else {
			$("#checking .balance").removeClass("zero");
		}

		if (parseFloat($("#savings .balance").text().replace("$", "")) <= 0){
			$("#savings .balance").addClass("zero");
		} else {
			$("#savings .balance").removeClass("zero");
		}
		
	} 
	setAccountColor();

	//gather amount value from either checking or savings input fields

	function obtainAmount(){
		if ($("#checking .input").val() != ""){
			amount = parseFloat($("#checking .input").val());
			adjustBalance();
			$("#checking .input").val("");

		} else if ($("#savings .input").val() != ""){
			amount = parseFloat($("#savings .input").val());
			adjustBalance();
			$("#savings .input").val("");
		}
	}
	

	//adjust balance to the respective account

	function adjustBalance(){
		
		var accountType = $(event.target).parent().attr('id');
		var accountBalance = parseFloat($("#" + accountType + " .balance").text().replace("$", ""));

//checks for overdraft if amount is greater than account balance
		if ($(event.target).hasClass("withdraw") && (amount > accountBalance)){
			overDraftProtection();

		} else {
//adjusts balance if amount is less than account balance
		if ($(event.target).hasClass("deposit")) {
			//updates account value
			accountBalance += amount;
			//displays new account value
			$("#" + accountType + " .balance").html("$" + accountBalance);
			
		} else if ($(event.target).hasClass("withdraw")) {
			//updates account value
			accountBalance -= amount;
			//displays new account value
			$("#" + accountType + " .balance").html("$" + accountBalance);
		}
		
	}
		setAccountColor();
	}


	//overdraft protection
	//to do: make this unique to withdrawals
	function overDraftProtection() {
		var accountType = $(event.target).parent().attr('id');
		var checkingBalance = parseFloat($("#checking .balance").text().replace("$", ""));
		var savingsBalance = parseFloat($("#savings .balance").text().replace("$", ""));

		if(amount > (checkingBalance + savingsBalance)){
			alert("You do not have enough funds across both of your accounts");
		} else if (accountType === "checking"){
			var difference = checkingBalance - amount;
			savingsBalance += difference;
			checkingBalance = 0;

			$("#checking .balance").html("$" + checkingBalance);
			$("#savings .balance").html("$" + savingsBalance);
		
		} else {
			var difference = savingsBalance - amount;
			checkingBalance += difference;
			savingsBalance = 0;

			$("#checking .balance").html("$" + checkingBalance);
			$("#savings .balance").html("$" + savingsBalance);
		}
	}

});
