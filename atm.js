$(document).ready(function(){

});
// Attempted to be a google ninja and did something complicated.
// Scrapped most of the code.
// $('#input').change(function() {
//     $(event.target).text().val($(this).val());
// });

var checkDeposit = $("#checking .checking")
var checkSubmission = $("#checking .input")
var checkWithdrawl = $("#checking .withdraw")
var checkBalance = $("#checking .balance")
var savingDeposit = $("#savings .deposit")
var savingSubmission = $("#savings .input")
var savingWithdrawl = $("#savings .withdraw")
var savingBalance = $("#savings .balance")


function accountAdd (){
	// obtaining the value
	var lastValue = $(this).siblings("div.balance");
	var totalValue = lastValue.text();
	//This should show temp value and remove the "$"
	var tempValue = parseInt(result.replace("$"));

}

function accountSubtract(){


}

$("#WithdrawChecking").on("click", accountAdd)
$("#WithdrawSavings").on("click", accountAdd)
$("#depositChecking").on("click", accountSubtract)
$("#depositSavings").on("click", accountSubtract)




