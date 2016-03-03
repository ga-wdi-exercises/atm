function Account(value){
  this.entries = [];
  this.els = {
    input: $("input[type=text]").eq(value),
    deposit: $('input[type=button][value="Deposit"]').eq(value),
    withdraw: $('input[type=button][value="Withdraw"]').eq(value),
    total: $(".balance").eq(value)
  };
}

Account.prototype.calculateBalance = function(){
  var total = 0;
  for( var i = 0; i < this.entries.length; i++ ){
    total += this.entries[i];
  }
  return total;
};

var checking = new Account(0);
var savings = new Account(1);

function balanceChecker() {
  var currentSavingsBalanceString = savings.els.total.html();
  var currentSavingsBalanceNum = Number(currentSavingsBalanceString.replace(/[^0-9\.]+/g,""));
  var currentCheckingBalanceString = checking.els.total.html();
  var currentCheckingBalanceNum = Number(currentCheckingBalanceString.replace(/[^0-9\.]+/g,""));
  if (currentSavingsBalanceNum === 0) {
    savings.els.total.addClass("zero");
  } else {
    savings.els.total.removeClass("zero");
  }
  if (currentCheckingBalanceNum === 0) {
    checking.els.total.addClass("zero");
  } else {
    checking.els.total.removeClass("zero");
  }
}

checking.els.deposit.on("click", function(event){
  event.preventDefault();
  var userInput = parseFloat(checking.els.input.val());
  checking.entries.push(userInput);
  var newTotal = checking.calculateBalance();
  checking.els.total.html("$" + newTotal.toFixed(2));
  checking.els.input.val("");
  balanceChecker();
});

checking.els.withdraw.on("click", function(event){
  event.preventDefault();
  var userInput = parseFloat(checking.els.input.val());
  var currentSavingsBalanceString = savings.els.total.html();
  var currentSavingsBalanceNum = Number(currentSavingsBalanceString.replace(/[^0-9\.]+/g,""));
  var currentCheckingBalanceString = checking.els.total.html();
  var currentCheckingBalanceNum = Number(currentCheckingBalanceString.replace(/[^0-9\.]+/g,""));
  if (userInput <= currentCheckingBalanceNum) {
    checking.entries.push(-1 * userInput);
    var newTotal = checking.calculateBalance();
    checking.els.total.html("$" + newTotal.toFixed(2));
  } else if (userInput <= currentSavingsBalanceNum + currentCheckingBalanceNum) {
      userInput -= currentSavingsBalanceNum;
      checking.entries.push(-1 * userInput);
      var newTotal2 = checking.calculateBalance();
      savings.els.total.html("$0.00");
      checking.els.total.html("$" + newTotal2.toFixed(2));
  }
  checking.els.input.val("");
  balanceChecker();
});

savings.els.deposit.on("click", function(event){
  event.preventDefault();
  var userInput = parseFloat(savings.els.input.val());
  savings.entries.push(userInput);
  var newTotal = savings.calculateBalance();
  savings.els.total.html("$" + newTotal.toFixed(2));
  savings.els.input.val("");
  balanceChecker();
});

savings.els.withdraw.on("click", function(event){
  event.preventDefault();
  var userInput = parseFloat(savings.els.input.val());
  var currentSavingsBalanceString = savings.els.total.html();
  var currentSavingsBalanceNum = Number(currentSavingsBalanceString.replace(/[^0-9\.]+/g,""));
  var currentCheckingBalanceString = checking.els.total.html();
  var currentCheckingBalanceNum = Number(currentCheckingBalanceString.replace(/[^0-9\.]+/g,""));
  if (userInput <= currentSavingsBalanceNum) {
    savings.entries.push(-1 * userInput);
    var newTotal = savings.calculateBalance();
    savings.els.total.html("$" + newTotal.toFixed(2));
  } else if (userInput <= currentSavingsBalanceNum + currentCheckingBalanceNum) {
      userInput -= currentSavingsBalanceNum;
      checking.entries.push(-1 * userInput);
      var newTotal2 = checking.calculateBalance();
      savings.els.total.html("$0.00");
      checking.els.total.html("$" + newTotal2.toFixed(2));
  }
  savings.els.input.val("");
  balanceChecker();
});
