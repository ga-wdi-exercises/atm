var balances = {
  checkingBalance: 0,
  savingsBalance: 0 }
var depositButton = $('.deposit');
var withdrawButton = $('.withdraw');
var whichAcct;
var jqObjectHolder;
var inputHolder;

depositButton.on('click',depositClick);
withdrawButton.on('click',withdrawClick);

function depositClick(){
//depositClick
  var negativeAmt;
  jqObjectHolder = $(this)
  inputHolder = jqObjectHolder.siblings('.input').val();
  negativeAmt = checkNegative(inputHolder);
  switch (negativeAmt) {
    case false:
      break;
    case true:
      whichAccount();
      if (0 <= inputHolder + balances[whichAcct]){
        updateBalance(1,false);
        break;
      } else {
        updateBalance(null,true);
      }
  }
//set input box back to default
  resetInputs();
}

function withdrawClick(){
  var respSufBal;
  var negativeAmt;
  var sufBal;
  var savchkTotal;
  jqObjectHolder = $(this)
  inputHolder = jqObjectHolder.siblings('.input').val();
//check for negative withdrawal
  if (inputHolder < 0) {
    window.alert("You can not withdraw a negative amount");
    resetInputs();
  } else {
    //Determine which account is being used and whether there is sufficient balance
    sufBal = whichAccount();
    if (sufBal === true) {
      updateBalance(-1,false);
    } else if (sufBal === false && whichAcct == "checkingBalance") { //This is for overdraft protection potential, so if there isn't enough money and you're trying to pull from checking
      savchkTotal = balances.savingsBalance + balances.checkingBalance;
      if (checkBalance(savchkTotal)) { //check if total of checking and savings is sufficient
        //if sufficient update accordingly
        updateBalance(null,true);
        resetInputs();
      } else {
        window.alert('Insufficient funds.');
        resetInputs();
      }
    } else {
      window.alert('Insufficient funds.');
      resetInputs();
    }

  }
//if checking and not enough, check total of checking and savings and check if enough
function sufficientBalanceCheck() {

}
//withdraw
//set input box back to default
}

function updateBalance(typeOfTransaction,overdraftProtection){
  //typeOfTransaction is a multiplier so you can use the same addition, it just becomes negative depending on deposit or withdrawal
  //overdraftProtection will only happen with withdrawal, so it doesn't require a typeOfTransaction argument
  if (overdraftProtection === false) {
    balances[whichAcct] = balances[whichAcct] + (typeOfTransaction * inputHolder); //$(this).siblings('.input').val()
    jqObjectHolder.siblings('.balance').html("$"+balances[whichAcct]);
  } else { //this means overdraftProtection can apply because the sume of both accounts is adequate
    balances.savingsBalance = balances.savingsBalance - (inputHolder - balances.checkingBalance);
    balances.checkingBalance = 0;
    $('#checking').children('.balance').html("$0");
    $('#savings').children('.balance').html("$"+balances.savingsBalance);

  }

}

function checkBalance(balVal){
  if(balVal < inputHolder) {
    return false;
  } else {
    return true;
  }
}

function checkNegative(balVal){
  if (balVal < 0) { //check for a negative amount in the
    if ((window.prompt("Are you sure you want to deposit a negative amount of money? (yes,no)")=="yes")){
      return true;
    }
    else {
      return false;
    }
  } else {
    return true;
  }
}
function resetInputs() {
    $('#checking').children('.input').val("");
    $('#savings').children('.input').val("");
}
function whichAccount() {
  var sufBalFunc;
  switch (jqObjectHolder.siblings('h2').text()) {
    case "Checking":
      sufBalFunc = checkBalance(balances.checkingBalance, inputHolder);
      //lets us know which key/value pair in the balances object to update
      whichAcct = "checkingBalance";
      return sufBalFunc;
    case "Savings":
      sufBalFunc = checkBalance(balances.savingsBalance, inputHolder);
      //lets us know which key/value pair in the balances object to update
      whichAcct = "savingsBalance";
      return sufBalFunc;
  }
}
