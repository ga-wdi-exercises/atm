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
      event.preventDefault();
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
    account = account.toLowerCase();
    this.accounts[account] += amount;
    $(event.target).prevAll("[type=text]").val(""); //empty the form after submission
    this.updateDisplay();
    console.log("savings balance is " + atm.accounts.savings);
    console.log("checking balance is " + atm.accounts.checking);
  },
  withdraw: function(account,amount){
    account = account.toLowerCase();
    if(this.accounts[account] >= amount){
      this.accounts[account] -= amount;
      $(event.target).prevAll("[type=text]").val(""); //empty the form after submission
      this.updateDisplay();
      console.log("savings balance is " + atm.accounts.savings);
      console.log("checking balance is " + atm.accounts.checking);
    }
  },
  updateDisplay: function(){
    $(".balance").eq(0).html("$" + atm.accounts.checking);
    $(".balance").eq(1).html("$" + atm.accounts.savings);
  }
}

atm.listen()





});
