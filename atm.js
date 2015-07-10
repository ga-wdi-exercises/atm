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
      console.log($(event.target).val());//Deposit of withdraw
      if($(event.target).val() === "Deposit"){
        this.deposit()
      }
      if($(event.target).val() === "Withdraw"){
        this.withdraw()
      }
    }.bind(this))
  },
  deposit: function(){
    event.preventDefault();
    accountBalance += parseInt($("input:first").val());
    $("input:first").val(""); //empty the form after submission
    //Change the html element that indicates account balance
    $(".balance").eq(0).html("$" + accountBalance);
  },
  withdraw: function(){
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
