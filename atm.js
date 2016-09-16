var checking = {
  Balance: $('#checking').children().eq(1),
  Input: $('#checking').children().eq(2),
  DepositButton: $('#checking').children().eq(3),
  WithdrawButton: $('#checking').children().eq(4)
}

var savings = {
  Balance: $('#savings').children().eq(1),
  Input: $('#savings').children().eq(2),
  DepositButton: $('#savings').children().eq(3),
  WithdrawButton: $('#savings').children().eq(4)
}

var convertedNumberChecking = checking.Balance.text().replace("$", ""); //Converts text input to integer for checking acct
var totalCheckingValue = parseInt(convertedNumberChecking);

var convertedNumberSavings = savings.Balance.text().replace("$", ""); //Converts text input to integer for savings acct
var totalSavingsValue = parseInt(convertedNumberSavings);

checkingBalanceCheck()
savingsBalanceCheck()

function checkingBalanceCheck() { //Changes the checking module if total amount is $0 Toggle Class
  if (totalCheckingValue === 0) {
    $('#checking').removeClass("account")
    $('#checking').addClass("zero")
  }else {
    $('#checking').removeClass("zero")
    $('#checking').addClass("account")
  }
}

function savingsBalanceCheck() { //Changes the checking module if total amount is $0
  if (totalSavingsValue === 0) {
    $('#savings').removeClass("account")
    $('#savings').addClass("zero")
  }else {
    $('#savings').removeClass("zero")
    $('#savings').addClass("account")
  }
}

function depositChecking() {  //Deposit Button for Checking
  var userDepositChecking = parseInt(checking.Input.val())
    if (isNaN(userDepositChecking)) {
      alert("Deposit amount not accepted, please insert a number without special characters i.e (1000)");
    }else{
  totalCheckingValue = totalCheckingValue + userDepositChecking
  checking.Balance.text("$" + totalCheckingValue)
  checkingBalanceCheck()
}
}

  checking.DepositButton.on("click",depositChecking);

function withdrawChecking() {  //Withdraw Button for Checking
  var userWithdrawChecking = parseInt(checking.Input.val())
  if (isNaN(userWithdrawChecking)) {
    alert("Withdraw amount not accepted, please insert a number without special characters i.e (1000)");
    }else{
      if (userWithdrawChecking > totalCheckingValue) {
        alert(" Insufficent funds in checking account")
      }else{
        totalCheckingValue = totalCheckingValue - userWithdrawChecking
        checking.Balance.text("$" + totalCheckingValue)
        checkingBalanceCheck()
    }
}
}
      checking.WithdrawButton.on("click",withdrawChecking);


  function depositSavings() {  //Deposit Button for SAvings
        var userDepositSavings = parseInt(savings.Input.val())
        if (isNaN(userDepositSavings)) {
          alert("Deposit amount not accepted, please insert a number without special characters i.e (1000)");
        }else{
          totalSavingsValue = totalSavingsValue + userDepositSavings
          savings.Balance.text("$" + totalSavingsValue)
          savingsBalanceCheck()
      }
    }
      savings.DepositButton.on("click",depositSavings);


  function withdrawSavings() {  //Withdraw Button for Savings
        var userWithdrawSavings = parseInt(savings.Input.val())
        if (isNaN(userWithdrawSavings)) {
          alert("Deposit amount not accepted, please insert a number without special characters i.e (1000)");
        }else{
          if (userWithdrawSavings > totalSavingsValue) {
            alert(" Insufficent funds in savings account")
          }else{
            totalSavingsValue = totalSavingsValue - userWithdrawSavings
            savings.Balance.text("$" + totalSavingsValue)
            savingsBalanceCheck()
          }
      }
    }
          savings.WithdrawButton.on("click",withdrawSavings);





//Prevent blank number NaN
//Install bonus
//Clean up converted number
//Clean up color check


// var userDepositChecking = checking.Input.val()
// if (userDepositChecking === "") {
// alert("Cannot enter an empty amount")
// } else{

//PSEUDO

// $(document).ready(function(){
// // Uh oh -- it's saying `$` is undefined! Something's missing from `index.html`...
// });
//


//
// //1. insert card
// enter pin
// Presented with total amounts
// Prompted for checking or ssaving
// Select checking or ssaving


//Presented with total Amounts
// Create variable totalAmounts

// Enter the amount you would like to deposit/withdraw
////Amount is pulled from the box.
////Function also updates totalAmounts

// Confirm transaction
// Amounts updated and presented


// OTHER FEATURES
//accounts change color when hit zero


//account cannot be less than zero
