	
var atm = {

	$checkingDepositBtn : $("input#chDeposit") ,
	$checkingWithdrawBtn : $("input#chWithdraw") ,
	$savingsDepositBtn : $("input#savDeposit") ,
	$savingsWithdrawBtn : $("input#savWithdraw") ,


	$userCheckingInput : $("input#chInput") ,
	$userSavingsInput : $("input#savInput") ,

	$checkingBalance : $("div#chBalance") , 
	$savingsBalance : $("div#savBalance") ,


//atm has some functions
	setUpAtm : function() {
		this.setUpChecking() ;
		this.setUpSavings() ;
	} ,

	setUpChecking: function () {
		var self = this;
		this.$checkingDepositBtn.click( function() {
			var amount = parseInt(self.$userCheckingInput.val()) ;
			checkingAccount.deposit(amount) ;
			self.$checkingBalance.html( "$" + checkingAccount.getBalance() ) ;
			self.$userCheckingInput.val(null) ;
		});

		this.$checkingWithdrawBtn.click( function() {
			var amount = parseInt(self.$userCheckingInput.val()) ;
			if ( amount > checkingAccount.withdraw.balance) {
				checkingAccount.withdraw(amount) ;
				self.$checkingBalance.html( "$" + checkingAccount.getBalance()) ;
			} else {
				checkingAccount.withdraw(amount) ;
				self.$checkingBalance.html( "$" + checkingAccount.getOverdraftBalance()) ;
				$("#chHeader").html("Your Overdraft Balance");
			}
			
			self.$userCheckingInput.val(null);
		})
		
	},

	setUpSavings: function() {
		var self = this; 
		this.$savingsDepositBtn.click( function() {
			var amount = parseInt(self.$userSavingsInput.val()) ;
			savingsAccount.deposit(amount) ;
			self.$savingsBalance.html( "$" + savingsAccount.getBalance()) ;
			self.$userSavingsInput.val(null);
		}) ;

		this.$savingsWithdrawBtn.click( function() {
			var amount = parseInt(self.$userSavingsInput.val()) ;
			savingsAccount.withdraw(amount) ;
			self.$savingsBalance.html( "$" + savingsAccount.getBalance()) ;
			self.$userSavingsInput.val(null);
		})
	} 

}
//end of atm obj

//checking account object
var checkingAccount = {
	balance: 0,
	overdraftBalance: 1000,

	withdraw: function (amount) {
		// uses also overdraft info

		if ( amount > 0 ) {
			if ( this.balance >= amount ) {
				this.balance -= amount ;
			} else if ( this.overdraftBalance >= this.balance+amount) {
				this.balance -= amount ; 
				this.overdraftBalance += this.balance ;
			}
		}
		return ; //?
	},

	deposit: function (amount) {
		if ( amount > 0) {
			this.balance += amount ; 
		} else {
			return "amount must be positive";
		}
		return; //?
	},

	getBalance: function () {
		return this.balance ; 
	},

	getOverdraftBalance: function() {
		return this.overdraftBalance ;
	}
}
//end of checking account object

//savings account object
var savingsAccount = {
	balance: 0 ,

	withdraw: function(amount) {
		if (amount > 0) {
			if (this.balance >= amount) {
				this.balance -= amount ;
			} 
		} else {
			return "amount must be positive"
		}
	} ,

	deposit: function (amount) {
		if ( amount > 0) {
			this.balance += amount ; 
		} else {
			return "amount must be positive";
		}
		return;
	},

	getBalance: function () {
		return this.balance ; 
	}
}
//end of savings account object


atm.setUpAtm() ;


	














