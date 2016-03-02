var checking =
var savings =


function ATMTrans (){
  this.entries = [];
  this.els = {
    form: $("entry")
    entries: $("entries")
    // deposit: $("")
    // withdrawl: $("")
    total: $("amount")
  }
}




ATMTrans.prototype.calculateTotal = function(){
  var checkingTotal =0;
  for(var i = 0; i <this.entries.length; i++){
    total += this.entries[i];
  }
  return total;
}

var newDeposit = new ATMTrans();
var newWithdrawl = new ATMTrans();

newDeposit.els.form.on("submit", function(event){
event.preventDefault();


newWithdrawl.els.form.on("submit", function(event){
event.preventDefault();

var userInput = parseFloat(newDeposit.els.input.val());
parseFloat(newWithdrawl.els.input.val())

//
// add entry: deposit money into checking
// see new total
// add new entry: withdrawl money from checking
