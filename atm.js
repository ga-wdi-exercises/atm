//function gaATM with OOP
function gaATM() {
  this.balance = 0;
  this.checking = {
    input: $("#newChecking"),
    total: 0
  };
  this.savings = {
    input: $("#newSavings"),
    total: 0
  };
}

gaATM.prototype.balance = function() {
  this.gaBalance = this.checking.total + this.savings.total;
  var total = this.checking.total + this.savings.total;
  return total;
};

var bank = new gaATM();
var checkingBalance = $("#checkingBalance").addClass("empty");
var savingsBalance = $("#savingsBalance").addClass("empty");

//NEEDED EVENT LISTENERS

//checking deposit
//the input is depositCash, and we are creating an on click function event
$("input.depositCash").on("click", function(event) {
//prevent default behavior
  event.preventDefault();
//ensures user input is an integer
  var input = parseInt(bank.checking.input.val());
  checkingDeposit(input);
//clear the input by utilizing an empty string
  bank.checking.input.val("");
}
};
//checking withdrawl
//the input is withdrawCash, and we are creating an on click function
$("input.withdrawCash").on("click", function(event) {
//prevent the default behavior
  event.preventDefault();
//ensures the user input is an integer
  var input = parseInt(bank.checking.input.val());
  checkingWithdraw(input);
//clear the input by utilizing an empty string
  bank.checking.input.val("");
}
};
//savings deposit
//savings withdrawl

//USER INPUT
//adds user input to checking total
//subtracts user input from checking total
//adds user input to savings total
//subtracts user input from savings total
