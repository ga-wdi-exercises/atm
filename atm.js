//Checking account
//Define players
$(document).ready(function() {

var atm = {
  accounts: {
    checking: 0,
    savings: 0
  },
  listen: function(){
    $(".account").on("click", function() {
      var actionType = $(event.target).val();//Deposit of withdraw
      var accountType = $(event.target).prevAll("h2").html();//Checking or savings
      var amount = parseInt($(event.target).prevAll("[type=text]").val());//amount
      if( actionType === "Deposit"){
        this.deposit(accountType,amount)
      }
      if( actionType === "Withdraw"){
        this.withdraw(accountType,amount)
      }
    }.bind(this))
  },
  deposit: function(account,amount){
    event.preventDefault();
    account = account.toLowerCase();
    this.accounts[account] += amount;
    console.log("checking balance is " + atm.accounts.checking);
    console.log("savings balance is " + atm.accounts.savings);
    $(event.target).prevAll("[type=text]").val(""); //empty the form after submission
  },
  withdraw: function(transaction,account,amount){
    event.preventDefault();
    var withdrawAmount = $("input:first").val();
    if(accountBalance >= withdrawAmount){
      accountBalance -= parseInt(withdrawAmount);
      $(event.target).prevAll("[type=text]").val(""); //empty the form after submission
      $(".balance").eq(0).html("$" + accountBalance);
    }
  }
}

atm.listen()





});
