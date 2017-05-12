$(document).ready(function(){

var deposit;
var withdraw;
var CheckingTotal = 0;
var SavingsTotal = 0;



$("#checkingDeposit").on("click", function(){
	deposit = parseInt($("#checkingInput").val())
	console.log(deposit)

	CheckingTotal = deposit += CheckingTotal;

	$("#checkingBalance").text("$" + CheckingTotal)
});

$("#checkingWithdraw").on("click", function(){
	deposit = parseInt($("#checkingInput").val())
	console.log(deposit)

	CheckingTotal = CheckingTotal -= deposit;

	$("#checkingBalance").text("$" + CheckingTotal)

	// var checkingFailSafe = if(CheckingTotal < 0) CheckingTotal = 0;
	// This local scoped variable I created is an attempt in stopping the balance from hitting the negatives.
});

	$("#savingsDeposit").on("click", function(){
	deposit = parseInt($("#savingsInput").val())
	console.log(deposit)

	SavingsTotal = deposit += SavingsTotal;

	$("#savingsBalance").text("$" + SavingsTotal)

});
$("#savingsWithdraw").on("click", function(){
	deposit = parseInt($("#savingsInput").val())
	console.log(deposit)

	SavingsTotal = SavingsTotal -= deposit;

	$("#savingsBalance").text("$" + SavingsTotal)

	var savingsFailSafe = if ( SavingsTotal < 0) SavingsTotal = 0;
});


});

