//Checking account
//Define players
$(document).ready(function() {

var atm = {
  accounts: {
    checking: 0,
    savings: 0
  },
  listen: function(){
    document.querySelector(".account").addEventListener("click", function() {
      var actionType = $(event.target).val();//Deposit of withdraw
      var accountType = $(event.target).prevAll("h2").html();//Checking or savings
      var amount = parseInt($(event.target).prevAll("[type=text]").val());//amount
      if($(event.target).val() === "Deposit"){
        this.deposit()
      }
      if($(event.target).val() === "Withdraw"){
        this.withdraw()
      }
    }.bind(this))
  },
  deposit: function(transaction,account,amount){
    event.preventDefault();
    accounts.this += parseInt($("input:first").val());
    $("input:first").val(""); //empty the form after submission
    //Change the html element that indicates account balance
    $(".balance").eq(0).html("$" + accountBalance);
  },
  withdraw: function(transaction,account,amount){
    event.preventDefault();
    var withdrawAmount = $("input:first").val();
    if(accountBalance >= withdrawAmount){
      accountBalance -= parseInt(withdrawAmount);
      $("input:first").val(""); //empty the form after submission
      $(".balance").eq(0).html("$" + accountBalance);
    }
  }
}

atm.listen()





});
