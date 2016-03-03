//Buttons DOM Variables
var depCheck = $("#depCheck");
var witCheck = $("#witCheck");
var depSave = $("#depSave");
var witSave = $("#witSave");

/////////////
//Checkings//
////////////

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
  makeCheckRed();
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
  makeCheckRed();
});

//add class of zero when balance is zero
function makeCheckRed() {
  if (checkReg.els.balCheck.html() === "$0.00") {
    checkReg.els.balCheck.addClass("zero");
  } else {
    checkReg.els.balCheck.removeClass("zero");
  }
}
makeCheckRed();

////////////
//Savings//
///////////

//Create Savings Constructor
function Savings(){
  this.entries = [];
  this.els = {
    //input text
    entSave : $("#entSave"),
    //total money
    balSave : $("#balSave")
  };
}
var saveReg = new Savings();

//Calculate total of Savings Deposits
Savings.prototype.calculateTotal = function(){
  var total = 0;
  for( var i = 0; i < this.entries.length; i++ ){
    total += this.entries[i];
  }
  return total;
};

//When deposit button is clicked, add value to an array
depSave.on("click", function(event) {
  event.preventDefault();
  var userInput = parseFloat(saveReg.els.entSave.val());
  saveReg.entries.push(userInput);
  //calculate total
  var newTotal = saveReg.calculateTotal();
  //update html for the total
  saveReg.els.balSave.html("$" + newTotal.toFixed(2));
  //clear the input
  saveReg.els.entSave.val("");
  makeSaveRed();
});

//When withdraw button is clicked, subtract value from sum of arrays
witSave.on("click", function(event) {
  event.preventDefault();
  //Make value a negative number and push to entries array
  var userInput = -Math.abs(saveReg.els.entSave.val());
  saveReg.entries.push(userInput);
  //calculate total
  var newTotal = saveReg.calculateTotal();
  if (newTotal >= 0) {
    //update html for the total
    saveReg.els.balSave.html("$" + newTotal.toFixed(2));
  } else {
    //prevent overdraft
    saveReg.entries.pop();
    console.log(saveReg.entries);
  }
  //clear the input
  saveReg.els.entSave.val("");
  makeSaveRed();
});

//add class of zero when balance is zero
function makeSaveRed() {
  if (saveReg.els.balSave.html() === "$0.00") {
    saveReg.els.balSave.addClass("zero");
  } else {
    saveReg.els.balSave.removeClass("zero");
  }
}
makeSaveRed();
