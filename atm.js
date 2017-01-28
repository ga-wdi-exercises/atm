$(document).ready(function(){

var balance;
var totalBalance;
var userAmount;
var nBalance;
var userAmountN;
var overDrawAmount;
var checkingNewTotal;
var savingsNewTotal;

  $("#checking .deposit").on("click", function(e){
      e.preventDefault();

      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#checking .balance").html();
      nBalance = parseFloat(balance.split("$")[1])

      //sets userAmount to whatever is in the input and makes it a  number
      userAmount = $("#checking .input").val();
      userAmountN = parseFloat(userAmount);

      depositChecking();

      cNotRed();

      $("#checking .input").val("");
  })

  $("#checking .withdraw").on("click", function(e){
      e.preventDefault();
      // $("#checking .balance").html(totalBalance);
      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#checking .balance").html();
      nBalance = parseFloat(balance.split("$")[1]);

      //sets userAmount to whatever is in the input and makes it a  number
      userAmount = $("#checking .input").val();
      userAmountN = parseFloat(userAmount);

      withdrawChecking();

      $("#checking .input").val("");

      overDrawChecking();
      makeCheckingRed();
      ifCWithdrawAtStart();

      $("#checking .input").val("");
  })

  $("#savings .deposit").on("click", function(e){
      e.preventDefault();

      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#savings .balance").html();
      nBalance = parseFloat(balance.split("$")[1])

      //sets userAmount to whatever is in the input and makes it a  number
      userAmount = $("#savings .input").val();
      userAmountN = parseFloat(userAmount);

      depositSavings();
      sNotRed();

      $("#savings .input").val("");
  })

  $("#savings .withdraw").on("click", function(e){
      e.preventDefault();
      //sets balance equal to whatever is in the checking account and makes it a number
      balance = $("#savings .balance").html();
      nBalance = parseFloat(balance.split("$")[1]);

      //sets userAmount to whatever is in the input and makes it a  number
      userAmount = $("#savings .input").val();
      userAmountN = parseFloat(userAmount);

      withdrawSavings();

      $("#savings .input").val("");

    makeSavingsRed();
    ifSWithdrawAtStart();
    overDrawSavings();


    $("#savings .input").val("");
  })

// savings functions

function makeSavingsRed () {
  if (totalBalance === 0) {
    $("#savings .balance").addClass("zero");
  } else if (totalBalance > 0) {
    $("#savings .balance").removeClass("zero");
  }
}

function overDrawSavings () {
  if (totalBalance < 0) {
    overDrawAmount = userAmountN - nBalance;
    addToChecking();
    $("#savings .balance").html("$" + "0");
  }
}

function ifSWithdrawAtStart() {
  if (userAmount === "") {
    $("#savings .balance").html(balance);
    }
}


function sNotRed() {
  if (totalBalance > 0) {
    $("#savings .balance").removeClass("zero");
  }
}

function withdrawSavings() {
  totalBalance = nBalance - userAmountN;
  $("#savings .balance").html("$" + totalBalance.toFixed(2));
}

function depositSavings() {
  totalBalance = nBalance + userAmountN;
  $("#savings .balance").html("$" + totalBalance.toFixed(2));
}

// Identical Checking Functions

function makeCheckingRed () {
  if (totalBalance === 0) {
    $("#checking .balance").addClass("zero");
  }
}

function overDrawChecking () {
   if (totalBalance < 0) {
    overDrawAmount = userAmountN - nBalance;
    addToSavings();
    $("#checking .balance").html("$" + "0");
}
}

function ifCWithdrawAtStart() {
  if (userAmount === "") {
    $("#checking .balance").html(balance);
    }
}


function cNotRed() {
  if (totalBalance > 0) {
    $("#checking .balance").removeClass("zero");
  }
}

function withdrawChecking() {
  totalBalance = nBalance - userAmountN;
  $("#checking .balance").html("$" + totalBalance.toFixed(2));
}

function depositChecking() {
  totalBalance = nBalance + userAmountN;
  $("#checking .balance").html("$" + totalBalance.toFixed(2));
}

function addToChecking() {
    var checkingTotal = $("#checking .balance").html();
    var checkingTotalNumber = parseFloat(checkingTotal.split("$")[1]);
    var newCheckingTotal = checkingTotalNumber - overDrawAmount;
    checkingNewTotal = $("#checking .balance").html("$" + newCheckingTotal.toFixed(2));
  }

function addToSavings() {
  var savingsTotal = $("#savings .balance").html();
  var savingsTotalNumber = parseFloat(savingsTotal.split("$")[1]);
  var newSavingsTotal = savingsTotalNumber - overDrawAmount;
  savingsNewTotal = $("#savings .balance").html("$" + newSavingsTotal.toFixed(2));
}

});
