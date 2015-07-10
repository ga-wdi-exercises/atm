var atm = {
  balance: {
    checking: 0,
    savings: 0,
  },
  listen: function(){
    $(".account").on("click", function(){
      var action = $(event.target).val();
      var account = $(event.target).prevAll("h2").text();
      var amount = $(event.target).prevAll("[type=text]").val();
      $(event.target).prevAll("[type=text]").val("");
      if (action == "Withdraw"){this.withdraw(account, amount)}
      else if (action == "Deposit"){this.deposit(account, amount)}
    }.bind(this));
  },
  withdraw: function(account, amount){
    if (parseFloat(amount) > this.balance[account.toLowerCase()]){
      alert("overdraft protection coming soon!");
      return;
    }
    else if (isNaN(parseFloat(amount))){
      alert("please enter amount in digits");
      return;
    }
    this.balance[account.toLowerCase()] -= parseFloat(amount);
    $("#"+account.toLowerCase()+ " .balance")[0].textContent = ("$" + this.balance[account.toLowerCase()]);    // These are workarounds due to problems with this.updateDisplay();
    if (this.balance[account.toLowerCase()] === 0){$("#"+account.toLowerCase()+ " .balance").addClass("zero");}
  },
  deposit: function(account, amount){
    if (isNaN(parseFloat(amount))){
      alert("please enter amount in digits");
      return;
    }
    this.balance[account.toLowerCase()] += parseFloat(amount);
    console.log(this.balance[account.toLowerCase()]);
    $("#"+account.toLowerCase()+ " .balance")[0].textContent = ("$" + this.balance[account.toLowerCase()]);
    if (this.balance[account.toLowerCase()] > 0){$("#"+account.toLowerCase()+ " .balance").removeClass("zero");}
  }
  // updateDisplay: function(){
  //   console.log($("#checking .balance"));
  //   var cb = this.balance.checking;
  //   console.log("$" + this.balance.checking);
  //   $("#checking .balance")[0].textContent = ("fucking anything!");
  //   $("#saving, .balance").html("$" + this.balance.saving)
  // }
}
atm.listen();
//
//
// var checking = {
//   elems: {
//     balanceDisplay: $("#checking .balance"),
//     inputBox: $("#checking :text"),
//     depositButton: $("#checking [value='Deposit']"),
//     withdrawButton: $("#checking [value='Withdraw']"),
//   },
//   balance: 0,
//   listen: function(){
//     this.elems.depositButton.on("click", function(){
//       var amount = parseFloat(this.elems.inputBox.val());
//       var balance = parseFloat(this.elems.balanceDisplay.text().substring(1));
//       console.log(balance);
//       if (!amount.isNaN && amount > 0){balance += amount;}
//       this.elems.inputBox.val('');
//       this.elems.balanceDisplay.text("$"+balance);
//     }.bind(this));
//     this.elems.withdrawButton.on("click", function(){
//       var amount = parseFloat(this.elems.inputBox.val());
//       var balance = parseFloat(this.elems.balanceDisplay.text().substring(1));
//       console.log(balance);
//       if (!amount.isNaN && amount <= balance && amount > 0){balance -= amount;}
//       else if (!amount.isNaN) {console.log("Overdraft Protection Coming Soon!");}
//       this.elems.inputBox.val('');
//       this.elems.balanceDisplay.text("$"+balance);
//     }.bind(this));
//   }
// }
// checking.listen();
