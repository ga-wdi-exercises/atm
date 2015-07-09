

// ======= init ======= 
var Cbalance = parseInt($('.balance').eq(0).html().substring(1));
var Sbalance = parseInt($('.balance').eq(1).html().substring(1));


// ======= buttons ======= 
var Cdeposit = $('.account input').eq(1).on('click', function(event) {
	make_transaction('checking', 'deposit');
});

var Sdeposit = $('.account input').eq(4).on('click', function(event) {
	make_transaction('savings', 'deposit')
});

var Cwithdraw = $('.account input').eq(2).on('click', function(event){
	make_transaction('checking', 'withdraw');
});

var Swithdraw = $('.account input').eq(5).on('click', function(event){
	make_transaction('savings', 'withdraw');
});


// ======= make_transaction =======	
function make_transaction(whichAccount, dep_Or_wdrw) {

	// ======= input fields ======= 
	var CdepositAmount = $('.account input').eq(0).val();
	var SdepositAmount = $('.account input').eq(3).val();

	// ======= validation (text entry) ======= 
	if ((isNaN(CdepositAmount) && CdepositAmount != '') || (isNaN(SdepositAmount) && SdepositAmount != '')) {
		$('.balance').eq(0).addClass("message");
		$('.balance').eq(0).html('numbers only please');
	} else {

		// ======= deposits =======
		if (dep_Or_wdrw == 'deposit') {	
			if (whichAccount == 'checking') {
				Cbalance = Cbalance + parseInt(CdepositAmount);
				$('.balance').eq(0).removeClass("message");
				$('.balance').eq(0).html('$' + Cbalance);
			} else {
				Sbalance = Sbalance + parseInt(SdepositAmount);
				$('.balance').eq(1).html('$' + Sbalance);
			}

		// ======= withdrawals =======	
		} else {

			// ======= checking =======
			if (whichAccount == 'checking') {
				Cbalance = Cbalance - parseInt(CdepositAmount);

				// ======= low checking balance =======
				if (Cbalance < 0) {
					Sbalance = parseInt($('.balance').eq(1).html().substring(1));

					// ======= check savings balance (enough to cover checking?) =======
					if (-Cbalance < Sbalance) {
						Sbalance = Sbalance + Cbalance;
						Cbalance = 0;
						$('.balance').eq(0).removeClass("message");
						$('.balance').eq(0).html('$' + Cbalance);
						$('.balance').eq(1).html('$' + Sbalance);

					// ======= not enough =======		
					} else {
						$('.balance').eq(0).addClass("message");
						$('.balance').eq(0).html('cancelled: negative account balance');
					}

				// ======= enough to cover =======		
				} else {
					$('.balance').eq(0).removeClass("message");
					$('.balance').eq(0).html('$' + Cbalance);
				}

			// ======= savings =======
			} else {
				Sbalance = Sbalance - parseInt(SdepositAmount);

				// ======= not enough =======
				if (Sbalance < 0) {
					$('.balance').eq(1).addClass("message");
					$('.balance').eq(1).html('cancelled: negative account balance');

				// ======= enough to cover =======	
				} else {
					$('.balance').eq(1).removeClass("message");
					$('.balance').eq(1).html('$' + Sbalance);
				}
			}
		}
	}
}

