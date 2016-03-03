/*var checkingBalance = document.querySelector("div#checking_balance");
checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

var checkingDeposit = function(amount){
  checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );

}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}*/

// an eventListerner for each button, each one a "click"
function checkingBalance(){
  this.entries = [];
  this.els = {
    form: $("#entry"),
    input: $("#newEntry"),
    total: $("#total"),
    entries: $("#entries")
  }
}

checkingBalance.prototype.calculateTotal = function(){
  var total = 0;
  for (var i = 0; i < this.entries.length; i++){
    total += this.entries[i];
  }
  return total;
}

var checkingDeposit = new checkingBalance();
checkingDeposit.els.form.on("submit", function(event){
  event.preventDefault();
  var newDeposit = parseFloat(checkingDeposit.els.input.val())
  console.log(newDeposit)
  checkingDeposit.els.input.val("")
  checkingDeposit.entries.push(newDeposit);
  var newBalance = checkingDeposit.calculateTotal()
    checkingDeposit.els.total.html("$" + newBalance)

})
