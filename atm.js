

// ======= init
var checkingTotal = 0;

// ======= balance fields
var Cbalance = parseInt($('.balance').eq(0).html().substring(1));
var Sbalance = parseInt($('.balance').eq(1).html().substring(1));

// ======= buttons
var Cdeposit = $('.account input').eq(1).on('click', function(event) {
	console.log('make_transaction');
	make_transaction('checking', 'deposit');
});

var Sdeposit = $('.account input').eq(4).on('click', function(event) {
	console.log('Sdeposit');
	make_transaction('savings', 'deposit')
});

var Cwithdraw = $('.account input').eq(2).on('click', function(event){
	console.log('Cwithdraw');
	make_transaction('checking', 'withdraw');
});

var Swithdraw = $('.account input').eq(5).on('click', function(event){
	console.log('Swithdraw');
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
		if (dep_Or_wdrw == 'deposit') {						// deposit code
			if (whichAccount == 'checking') {
				Cbalance = Cbalance + parseInt(CdepositAmount);
				$('.balance').eq(0).html('$' + Cbalance);
			} else {
				Sbalance = Sbalance + parseInt(SdepositAmount);
				$('.balance').eq(1).html('$' + Sbalance);
			}
		} else {											// withdrawal code
			if (whichAccount == 'checking') {
				Cbalance = Cbalance - parseInt(CdepositAmount);
				console.log('Cbalance_A: ' + Cbalance);
				if (Cbalance < 0) {
					console.log('C < 0');
					Sbalance = parseInt($('.balance').eq(1).html().substring(1));
					console.log('Sbalance: ' + Sbalance);
					console.log('Cbalance_B: ' + Cbalance);
					if (-Cbalance < Sbalance) {
					// if ((Sbalance + Cbalance) >= 0) {
						console.log('C < S');
						Sbalance = Sbalance + Cbalance;
						Cbalance = 0;
						console.log('Sbalance: ' + Sbalance);
						console.log('Cbalance_C: ' + Cbalance);
						$('.balance').eq(0).html('$' + Cbalance);
						$('.balance').eq(1).html('$' + Sbalance);
					} else {
						$('.balance').eq(0).html('cancelled: negative account balance');
					}
				} else {
					console.log('C > 0');
					console.log('Cbalance_C: ' + Cbalance);
					$('.balance').eq(0).html('$' + Cbalance);
				}
			} else {
				Sbalance = Sbalance - parseInt(SdepositAmount);
				if (Sbalance < 0) {
					console.log('S < 0');
					$('.balance').eq(1).html('cancelled: negative account balance');
				} else {
					$('.balance').eq(1).html('$' + Sbalance);
				}
			}
		}
	}
}

