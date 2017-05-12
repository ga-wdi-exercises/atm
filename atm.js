$(document).ready(function(){
// Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
});

var checkingAcct = $("#checking");
var savingsAcct = $("#savings");
var checkDeposit = checkingAcct.deposit;
var checkBalance = checkingAcct.balance;

/*checkingAcct deposit button on "click" depositfunction(){
  this is where you read in the amount in the text field with
  var = that.text()
  add var to checkingBalance;
  we're not checking for invalid numbers just yet
}
*/

var depCheckButton = $(".checkDeposit");
depCheckButton.onclick = function(){
  console.log("Deposit");

};

/*savingsAcct deposit on "click" depositfunction(){
  this is where you read in the amount in the text field with
  var = that.text()
  add var to savingsBalance;
  we're not checking for invalid numbers just yet
}
*/
