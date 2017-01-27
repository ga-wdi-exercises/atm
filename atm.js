/*pseudo is in a seperate .txt file*/

function depositIn(x) {
  var y = parseInt(x);
  this.amount = this.amount + y;
}

function withdrawFrom(x) {
  var y = parseInt(x);
  if (y > this.amount) {
    z = 0;
  }
  else {
    z = y;
  }
  this.amount = this.amount - z;
}

/*The reason that I am using a variable with global scope here is because I can't
think of a way to both have control flow (which you need in order to check for
withdrawal above the account balance) *and*  to have "this" be available in code
run as a result of that control flow. Given this I think that the only way to get
the right behavior is to have a variable "ascend out of" the code block to a
level where "this" can be referenced. Luckily, global scope variables exist.*/

var checking = {
  name: "checking",
  amount: 1000
}
checking.deposit = depositIn.bind(checking);
checking.withdraw = withdrawFrom.bind(checking);

var savings = {
  name: "savings",
  amount: 1000
}
savings.deposit = depositIn.bind(savings);
savings.withdraw = withdrawFrom.bind(savings);

/*The preexisting function that I am feeding to these objects as methods can't
be fed using object literal notation because there is no way to reference the
object that they need to be bound to. You can't use "this" because
(for whatever reason) it grabs the window when your in the middle of assigning
a value and you can't use the name of the object (I think because it is in the
middle of being defined.) You have to add them after the object is done being
defined.*/

$(document).ready(function(){

  $('#checking').find('.deposit').on("click", function() {
    var inp1 = $('#checking').find('input').val();
    checking.deposit(inp1);
    $('#checking').find('.balance').text("$"+checking.amount);
  });

  $('#checking').find('.withdraw').on("click", function() {
    var inp2 = $('#checking').find('input').val();
    checking.withdraw(inp2);
    $('#checking').find('.balance').text("$"+checking.amount);
    var self = checking.amount;
    if (self === 0) {
        $('#checking').find('.balance').addClass('zero');
    }
    else {
    }
  });

  $('#savings').find('.deposit').on("click", function() {
    var inp3 = $('#savings').find('input').val();
    savings.deposit(inp3);
    $('#savings').find('.balance').text("$"+savings.amount);
  });

  $('#savings').find('.withdraw').on("click", function() {
    var inp4 = $('#savings').find('input').val();
    savings.withdraw(inp4);
    $('#savings').find('.balance').text("$"+savings.amount);
    var self = savings.amount;
    if (self === 0) {
        $('#savings').find('.balance').addClass('zero');
    }
    else {
    }
  });

});
