//Buttons DOM Variables
var depCheck = $("#depCheck");
var witCheck = $("#witCheck");
var depSave = $("#depSave");
var witSave = $("#witSave");

//Create Checkings Constructor
function Checkings(){
  this.entries = [];
  this.els = {
    //input text
    entCheck : $("#entCheck"),
    //total money
    balCheck : $("#balCheck")
  };
}

var checkReg = new Checkings();

//Calculate total of Checkings Deposits
Checkings.prototype.calculateTotal = function(){
  var total = 0;
  for( var i = 0; i < this.entries.length; i++ ){
    total += this.entries[i];
  }
  return total;
};

//When deposit button is clicked, add value to an array
depCheck.on("click", function(event) {
  event.preventDefault();
  var userInput = parseFloat(checkReg.els.entCheck.val());
  console.log(userInput);
  checkReg.entries.push(userInput);
  console.log(checkReg.entries);
  //calculate total
  console.log(checkReg.calculateTotal());
  var newTotal = checkReg.calculateTotal();
  //update html for the total
  checkReg.els.balCheck.html(newTotal.toFixed(2));
  //clear the input
  checkReg.els.entCheck.val("");
});


//When withdraw button is clicked, subtract value from sum of arrays
witCheck.on("click", function(event) {
  event.preventDefault();
  var userInput = parseFloat(checkReg.els.entCheck.val());
  console.log((checkReg.els.balCheck.val()) - userInput);
  //Subtract value from sum of array values
});

// var checkingBalance = document.querySelector("div#checking_balance");
// checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// var checkingDeposit = function(amount){
//   checkingBalance = parseInt( checkingBalance.innerHTML.replace("$", "") );
//
// };
//
// function checkingWithdrawal(amount){
//
// }
//
// function savingsDeposit(amount){
//
// }
//
// function savingsWithdrawal(amount){
//
// }

// an eventListerner for each button, each one a "click"
