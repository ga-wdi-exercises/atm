var checkingUserInput = ($("body > div:nth-child(2) > input[type="text"]:nth-child(3)").val());
var checkingDepositButton = ($("body > div:nth-child(2) > input[type="button"]:nth-child(4)").val());
var checkingWithdrawlButton = ($("body > div:nth-child(2) > input[type="button"]:nth-child(5)").val());
var checkingBalance = ($("body > div:nth-child(2) > div").val());

// $("input").eq(0).addClass("checking_userInput");
// $("input").eq(1).addClass("checking_deposit_button")
// $("input").eq(2).addClass("checking_withdrawal_button")
// $("input").eq(3).addClass("savings_userInput");
// $("input").eq(4).addClass("checking_deposit_button")
// $("input").eq(5).addClass("checking_withdrawal_button")

var checkingTotal = 0

$(checkingDepositButton).click(function(){
checkingTotal += parseFloat($(checkingUserInput).val());
$(checkingBalance).html(checkingTotal)
console.log($(checkingUserInput).val());
})




//
//
//
function Account( type, startingBal ){
  this.type = type;
  this.startingBal = startingBal;
  this.deposits = [];
  this.withdrawals = [];
  this.depositMoney = function(input){
    this.deposits.push(input);
  }
  this.withdrawMoney = function(input){
    this.withdrawals.push(input);
  }
};
console.dir(Account);
// --Checking----------------------
var Checking = new Account("Checking","0");

Checking.prototype.deposit = function(){
  
}


// console.dir(Checking)


//--Account--------------------------
var Savings = new Account("Savings","0");
// console.dir(Savings)
