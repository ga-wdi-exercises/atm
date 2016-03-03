var accounts = {
  checking: 0,
  savings: 0,
};

//sends amount to checkingBalance
var deposit = function(acct, amount){
  accounts[acct] = accounts[acct] + amount;
};

//removes number from checking total
var withdraw = function(acct, amount){
  // accounts[acct] = accounts[acct] - amount;

//  first check if withdraw is more than in acct
  if (amount > accounts[acct]) {
    //if it is, then check the sum of both accounts
    if (amount <= (accounts.checking + accounts.savings)){
      if (acct == "checking"){
      amount = amount - accounts[acct];
      //take it out of savings!
      accounts[acct] = accounts[acct] - amount;
      // $('.balance').eq(0).html(accounts[acct]);
      // $('.balance').eq(1).html(accounts[acct]);
      return accounts[acct];
    }else{
    return "can't let you do that";}
  }else{
    accounts[acct] = accounts[acct] - amount;
    // $('.balance').eq(0).html(accounts[acct]);
    return accounts[acct];
  }
}
};

$(':button').on("click", function() {
  var newNum = parseInt($(this).parent().find("[type='text']").val());
  var account = $(this).parent().attr("data-account");
  if (this.value == "Deposit") {
    deposit(account, newNum);
  }else{
    withdraw(account, newNum);
  }
  $(this).parent().find('.balance').html(accounts[account]);
});
