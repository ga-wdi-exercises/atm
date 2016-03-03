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
  checkReg.entries.push(userInput);
  //calculate total
  var newTotal = checkReg.calculateTotal();
  //update html for the total
  checkReg.els.balCheck.html("$" + newTotal.toFixed(2));
  //clear the input
  checkReg.els.entCheck.val("");
  makeRed();
});


//When withdraw button is clicked, subtract value from sum of arrays
witCheck.on("click", function(event) {
  event.preventDefault();
  //Make value a negative number and push to entries array
  var userInput = -Math.abs(checkReg.els.entCheck.val());
  checkReg.entries.push(userInput);
  //calculate total
  var newTotal = checkReg.calculateTotal();
  if (newTotal >= 0) {
    //update html for the total
    checkReg.els.balCheck.html("$" + newTotal.toFixed(2));
  } else {
    //prevent overdraft
    checkReg.entries.pop();
    console.log(checkReg.entries);
  }
  //clear the input
  checkReg.els.entCheck.val("");
  makeRed();
});

//add class of zero when balance is zero
function makeRed() {
  console.log(checkReg.els.balCheck.html());
  if (checkReg.els.balCheck.html() === "$0.00") {
    checkReg.els.balCheck.addClass("zero");
  } else {
    checkReg.els.balCheck.removeClass("zero");
  }
}
makeRed();
