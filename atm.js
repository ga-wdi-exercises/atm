

// ======= init
var checkingTotal = 0;

// ======= balance fields
var Cbalance = parseInt($('.balance').eq(0).html().substring(1));
var Sbalance = parseInt($('.balance').eq(1).html().substring(1));

// ======= buttons
var Cdeposit = $('.account input').eq(1).on('click', function(event) {
  make_transaction('checking', 'deposit');
});

var Sdeposit = $('.account input').eq(4).on('click', function(event) {
  make_transaction('savings', 'deposit')
});

var Cwithdraw = $('.account input').eq(2).on('click', function(event){
  make_transaction('checking', 'withdraw');
});

var Swithdraw = $('.account input').eq(2).on('click', function(event){
  make_transaction('savings', 'withdraw');
});

function make_transaction(whichAccount, dep_Or_wdrw) {
	console.log('make_transaction');

	// ======= input fields
	var CdepositAmount = $('.account input').eq(0).val();
	var SdepositAmount = $('.account input').eq(3).val();

	if ((isNaN(CdepositAmount) && CdepositAmount != '') || (isNaN(SdepositAmount) && SdepositAmount != '')) {
		$('.balance').eq(0).html('numbers only please');
	} else {
		if (dep_Or_wdrw == 'deposit') {
			if (whichAccount == 'checking') {
				Cbalance = Cbalance + parseInt(CdepositAmount);
				$('.balance').eq(0).html('$' + Cbalance);
			} else {
				Sbalance = Sbalance + parseInt(SdepositAmount);
				$('.balance').eq(1).html('$' + Sbalance);
			}
		} else {
			if (whichAccount == 'checking') {
				Cbalance = Cbalance - parseInt(CdepositAmount);
				console.log('Cbalance: ' + Cbalance);
				if (Cbalance < 0) {
					console.log('C < 0');
					Sbalance = parseInt($('.balance').eq(1).html().substring(1));
					console.log('Sbalance: ' + Sbalance);
					console.log('Cbalance: ' + Cbalance);
					if (-Cbalance < Sbalance) {
					// if ((Sbalance + Cbalance) >= 0) {
						console.log('C < S');
						Sbalance = Sbalance + Cbalance;
						Cbalance = 0;
						console.log('Cbalance: ' + Cbalance);
						console.log('Sbalance: ' + Sbalance);
						$('.balance').eq(0).html('$' + Cbalance);
						$('.balance').eq(1).html('$' + Sbalance);
					} else {
						$('.balance').eq(0).html('cancelled: negative account balance');
					}
				}
				$('.balance').eq(0).html('$' + Cbalance);
			} else {
				Sbalance = Sbalance - parseInt(SdepositAmount);
				if (Sbalance < 0) {
					$('.balance').eq(0).html('cancelled: negative account balance');
				} else {
					$('.balance').eq(0).html('$' + Sbalance);
				}
			}
		}
	}
}

// $('.account input').eq(1).on('click', CmakeDeposit);
// $('.account input').eq(2).on('click', CmakeWithdrawal);
// $('.account input').eq(4).on('click', SmakeDeposit);
// $('.account input').eq(5).on('click', SmakeWithdrawal);

// function makeDeposit(whichAccount) {
// 	console.log('makeDeposit');
// 	if (whichAccount == 'checking') {
// 		if (!isNaN($('.account input').eq(0).val())) {
// 			CdepositAmount = parseInt($('.account input').eq(0).val());
// 			Cbalance = Cbalance + CdepositAmount;
// 			$('.balance').eq(0).html('$' + Cbalance);
// 			console.log('Cbalance: ' + Cbalance);
// 		} else {
// 			$('.balance').eq(0).html('numbers only please');
// 		}
// 	}
// }



// function CmakeDeposit(event) {
// 	console.log('CmakeDeposit');
// 	if (!isNaN($('.account input').eq(0).val())) {
// 		CdepositAmount = parseInt($('.account input').eq(0).val());
// 		Cbalance = Cbalance + CdepositAmount;
// 		$('.balance').eq(0).html('$' + Cbalance);
// 		console.log('Cbalance: ' + Cbalance);
// 	} else {
// 		$('.balance').eq(0).html('numbers only please');
// 	}
// }

// function CmakeWithdrawal(event) {
// 	console.log('CmakeWithdrawal');
// 	if (!isNaN($('.account input').eq(0).val())) {
// 		CdepositAmount = parseInt($('.account input').eq(0).val());
// 		Cbalance = Cbalance - CdepositAmount;
// 		console.log('Cbalance: ' + Cbalance);
// 		if (Cbalance < 0) {
// 				Sbalance = parseInt($('.balance').eq(1).html().substring(1));
// 				console.log('Sbalance: ' + Sbalance);
// 				console.log('-Cbalance: ' + -Cbalance);
// 				if (-Cbalance < Sbalance) {
// 					console.log('C < S');
// 					Sbalance = Sbalance + Cbalance;
// 					Cbalance = 0;
// 					console.log('Cbalance: ' + Cbalance);
// 					console.log('Sbalance: ' + Sbalance);
// 				}
// 			}
// 		$('.balance').eq(0).html('$' + Cbalance);
// 		$('.balance').eq(1).html('$' + Sbalance);
// 	} else {
// 		$('.balance').eq(0).html('numbers only please');
// 	}
// }

// function SmakeDeposit(event) {
// 	console.log('SmakeDeposit');
// 	if (!isNaN($('.account input').eq(3).val())) {
// 		SdepositAmount = parseInt($('.account input').eq(3).val());
// 		Sbalance = Sbalance + SdepositAmount;
// 		$('.balance').eq(1).html('$' + Sbalance);
// 		console.log('Sbalance: ' + Sbalance);
// 	} else {
// 		$('.balance').eq(1).html('numbers only please');
// 	}
// }

// function SmakeWithdrawal(event) {

// }



// var checkingBalance = document.querySelector("div#checking_balance");
// // checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

// }

// function checkingWithdrawal(amount){

// }

// function savingsDeposit(amount){

// }

// function savingsWithdrawal(amount){

// }

// an eventListerner for each button, each one a "click"