//var balances.checkingBalance = parseInt($(".balance").eq(0).html().replace("$", ""));
// This not a DOM object; it is a number.  You are only saying =0.

var balances = {
  checkingBalance: 0,
  savingsBalance: 0
};

var buttons = {
  chkDepButton: $("input").eq(1),
  chkWitButton: $("input").eq(2),
  savDepButton: $("input").eq(4),
  savWitButton: $("input").eq(5)
};

var locations = {
  chkBalLocation: $(".balance").eq(0),
  savBalLocation: $(".balance").eq(1)
};

var inputs = {
  chkInput: $("input").eq(0),
  savInput: $("input").eq(3)
};

var backgrounds = {
  chkBackground: $(".balance").eq(0),
  savBackground: $(".balance").eq(1)
};

var chkAccountColor = function() {
  if (balances.checkingBalance <= 0) {
    backgrounds.chkBackground.css("background-color", "#F52F4F");
    console.log("checking-red");
  }
};


var savAccountColor = function() {
  if (balances.savingsBalance <= 0) {
    backgrounds.savBackground.css("background-color", "#F52F4F");
    console.log("savings-red");
  }
};

function checkingDeposit() {
  buttons.chkDepButton.on("click", function() {
    balances.checkingBalance += parseInt(inputs.chkInput.val());
    locations.chkBalLocation.html("$" + balances.checkingBalance);
    backgrounds.chkBackground.css("background-color", "#295A33");
    console.log(balances.checkingBalance);
  });
//user enters number into input field
//hits deposit button
    //eventListerner "input"
//total dollar amount updates
  //update value of div .balance
    //create variable = 0 for sum total; then do balances.checkingBalance += input
}

checkingDeposit();

function checkingWithdrawal(){
  buttons.chkWitButton.on("click", function() {
    if (inputs.chkInput.val() <= balances.checkingBalance) {
      balances.checkingBalance -= parseInt(inputs.chkInput.val());
      locations.chkBalLocation.html("$" + balances.checkingBalance);
      console.log(balances.checkingBalance);
    }
    chkAccountColor();
  });
}
checkingWithdrawal();

function savingsDeposit(amount){
  buttons.savDepButton.on("click", function() {
    balances.savingsBalance += parseInt(inputs.savInput.val());
    locations.savBalLocation.html("$" + balances.savingsBalance);
    backgrounds.savBackground.css("background-color", "#295A33");
    console.log(balances.savingsBalance);
  });
}
savingsDeposit();

function savingsWithdrawal(amount){
  buttons.savWitButton.on("click", function() {
    if (inputs.savInput.val() <= balances.savingsBalance) {
      balances.savingsBalance -= parseInt(inputs.savInput.val());
      locations.savBalLocation.html("$" + balances.savingsBalance);
      console.log(balances.savingsBalance);
    }
    savAccountColor();
  });
}
savingsWithdrawal();

var overdraft = function() {

};
