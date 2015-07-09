//javascript, html, dom, css
//get input from input field
//when you click on Deposit button
	//get number from input field
	//create new element of total 
		//update total adding to input
//when you click on Withdraw button
	//get number from input field
	//create total subtracting grom input

/*
var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
*/	

var $deposit = $("input#deposit") ; //deposit button
var $withdraw = $("input#withdraw") ; //withdraw button
var $userInput = $("input#input") ; //input field
var $checkingBalance = $("div#checking_balance") ;
var $balance = $("div.balance") ; 

// var currentTotal = function() {
// 	$balance = $userInput.val() + $checkingBalance.substring(1) ; 
// }

$deposit.click( function() {
	var currentTotal = parseInt($userInput.val()) + parseInt($("div.balance").html().substring(1)) ;
	console.log( currentTotal) ;
	$balance.html( "$" + currentTotal ) ;
	$userInput.val(null) ;

})	





$withdraw.click( function() {
	console.log( "withdraw" )
})	













