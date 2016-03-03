

function Checking() {
  this.entries = []; // empty array because any time create cash register, want a clean slate
  this.els = { // object literal for elements
    checking_balance: $("#checking_balance"),
    // the input: #newEntry
    checking_amount: $("#checking_amount"),
    // the total: #total
    checking_deposit: $("#checking_deposit"),
    // the form: #entry
    checking_withdraw: $("#checking_withdraw")
  };
}

Checking.prototype.calculateTotal = function() { //
  var total = 0;
  for( var i = 0; i < this.entries.length; i++ ){
    total += this.entries[i]; // update and reassign
  }
  return total;
};

var myChecking = new Checking();
//add event listeners for deposit: select in the dollar value to the input field- get that number
//use number to modify balance
//add user input to balance in js and append
