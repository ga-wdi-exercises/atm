
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

var atm = {

	$deposit : $("input#deposit") ,
	$withdraw : $("input#withdraw") ,
	$userInput : $("input#input") ,
	$checkingBalance : $("div#checking_balance") , 
	$balance : $("div.balance") ,

	actions : function() {	
		var self = this ;
		self.$deposit.click( function() {
			if ( parseInt(self.$userInput.val()) >= 0 ) {
				currentTotal = parseInt(self.$userInput.val()) + parseInt($("div.balance").html().substring(1)) ;
				self.$balance.html( "$" + currentTotal ) ;
				self.$userInput.val(null) ;
			} else {
				alert( "Input can't be negative value" ) ; 
				$userInput.val(null) ;
			}
		} ) ; 

		self.$withdraw.click( function() {
			if ( parseInt(self.$userInput.val()) >= 0 && 
				 parseInt(self.$userInput.val()) <= parseInt($("div.balance").html().substring(1))) {
				currentTotal = parseInt($("div.balance").html().substring(1)) - parseInt(self.$userInput.val()) ;
				self.$balance.html( "$" + currentTotal ) ;
				self.$userInput.val(null) ;	
			} else {
				alert( "Enter the right amount" ) ;
				self.$userInput.val(null) ; 
			}	
		} ) 
	}
} //end atm

atm.actions() ;
