$(document).ready(function(){
console.log("supsup");

var checkDeposit = $("#checking .deposit");
var checkWithdraw = $("#checking .withdraw");
var savingDeposit = $("#savings .deposit");
var savingWithdraw = $("#savings .withdraw");
var inputChecking = $("#checking .input");
var inputSaving = $("#savings .input");
var storedChecking = $("#checking .balance");
var storedSaving = $("#savings .balance");

var bankAccount = {
  checking: 0,
  saving: 0
}
function depositChecking() {
  checkDeposit.on("click", function(evt){
  evt.preventDefault();
  var oldAmount = Number(inputChecking.val());
  var newAmount = bankAccount.checking;
  bankAccount.checking = newAmount + oldAmount;
  storedChecking.html("$" + bankAccount.checking.toFixed(2));
  inputChecking.val("");
    if (isNaN(bankAccount.checking)){
      $("#checking").addClass("zero");
    }
  // else {
  //   $("#checking").css("background-color", "#6C9A74");
  //   inputChecking.val("");
  //   }
  })
}
function withdrawChecking() {
  checkWithdraw.on("click", function(evt){
  evt.preventDefault();
  var withdrawl = Number(inputChecking.val());
  inputChecking.val("");
  if (withdrawl >= Number(bankAccount.checking) + Number(bankAccount.savings)) {
    console.log("did it work");
    alert("YOU DONT GOT THAT MUCH");
  }
    else if (Number(bankAccount.checking) - withdrawl < 0) {
      var overdraft = bankAccount.checking - withdrawl;
      bankAccount.savings = bankAccount.savings + overdraft;
      bankAccount.checking = bankAccount.checking - withdrawl - overdraft;
      storedChecking.html("$" + bankAccount.checking.toFixed(2));
      storedSaving.html("$" + bankAccount.savings.toFixed(2));
    }
      else {
        bankAccount.checking = bankAccount.checking - withdrawl;
        storedChecking.html("$" + bankAccount.checking.toFixed(2));
      }
  })
}
function depositSavings() {
  savingDeposit.on("click", function(evt){
  evt.preventDefault();
  var amount = Number(inputSaving.val());
  inputSaving.val("");
  bankAccount.saving = bankAccount.saving + amount;
  storedSaving.html("$" + bankAccount.saving.toFixed(2));
  })
}

function withdrawSavings() {
  savingWithdraw.on("click", function(evt){
  evt.preventDefault();
  var withdrawl = Number(inputSaving.val());
  inputSaving.val("");
  if (Number(bankAccount.saving) >= withdrawl) {
    bankAccount.saving = bankAccount.saving - withdrawl;
    storedSaving.html("$" + bankAccount.saving.toFixed(2));
  }
    else {
      alert("NO MONEY HOMIE");
    }
 })
}

// function overdraftChecking() {
// bankAccount.savings  = bankAccount.savings + bankAccount.checking;
// bankAccount.checking = 0;
// if (bankAccount.savings < 0) {
//   $("#checking").addClass("zero");
//   alert("NO MORE MONEY");
//   inputChecking.val("");
//   }
// }
depositChecking();
withdrawChecking();
depositSavings();
withdrawSavings();
});
