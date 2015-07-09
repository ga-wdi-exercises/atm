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

var $deposit = $("input#deposit") ; 
var $withdraw = $("input#withdraw") ; 
var $userInput = $("input#input") ; 
var $checkingBalance = $("div#checking_balance") ;
var $balance = $("div.balance") ; 
var currentTotal ;

$deposit.click( function() {
	if ( parseInt($userInput.val()) >= 0 ) {
		currentTotal = parseInt($userInput.val()) + parseInt($("div.balance").html().substring(1)) ;
		$balance.html( "$" + currentTotal ) ;
		$userInput.val(null) ;
	} else {
		alert( "Input can't be negative value" ) ; 
		$userInput.val(null) ;
	}

})	
$withdraw.click( function() {
	if ( parseInt($userInput.val()) >= 0 && 
		 parseInt($userInput.val()) <= parseInt($("div.balance").html().substring(1))) {
		currentTotal = parseInt($("div.balance").html().substring(1)) - parseInt($userInput.val()) ;
		$balance.html( "$" + currentTotal ) ;
		$userInput.val(null) ;	
	} else {
		alert( "No shopping for you. Go work." ) ;
		$userInput.val(null) ; 
	}	
})
	

// $deposit.click( function() {
// 	currentTotal = parseInt($userInput.val()) + parseInt($("div.balance").html().substring(1)) ;
// 	$balance.html( "$" + currentTotal ) ;
// 	$userInput.val(null) ;

// })	

// $withdraw.click( function() {
// 	currentTotal = parseInt($("div.balance").html().substring(1)) - parseInt($userInput.val()) ;
// 	$balance.html( "$" + currentTotal ) ;
// 	$userInput.val(null) ;	
// })




// $withdraw.click( function() {
// 	console.log( "withdraw" )
// })	














