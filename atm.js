var checking = { //Checking account fields
  Balance: $('#checking').children().eq(1),
  Input: $('#checking').children().eq(2),
  DepositButton: $('#checking').children().eq(3),
  WithdrawButton: $('#checking').children().eq(4)
}

var savings = { //Savings account fields
  Balance: $('#savings').children().eq(1),
  Input: $('#savings').children().eq(2),
  DepositButton: $('#savings').children().eq(3),
  WithdrawButton: $('#savings').children().eq(4)
}

var convertedNumberChecking = checking.Balance.text().replace("$", ""); //Converts text input to integer for checking acct
var totalCheckingValue = parseInt(convertedNumberChecking); //Initiates total value of checking account

var convertedNumberSavings = savings.Balance.text().replace("$", ""); //Converts text input to integer for savings acct
var totalSavingsValue = parseInt(convertedNumberSavings); //Initiates total value of savings account

checkingBalanceCheck() //checks if balance is zero, if so then the display will be red
savingsBalanceCheck()

function checkingBalanceCheck() { //Changes the color of the account interface if total amount is $0
  if (totalCheckingValue === 0) {
    $('#checking').removeClass("account")
    $('#checking').addClass("zero")
  }else {
    $('#checking').removeClass("zero")
    $('#checking').addClass("account")
  }
}

function savingsBalanceCheck() { //Changes the color of the account interface if total amount is $0
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
    if (isNaN(userDepositChecking)) { //prevents input of NaN
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
  if (isNaN(userWithdrawChecking)) { //prevents input of NaN
    alert("Withdraw amount not accepted, please insert a number without special characters i.e (1000)");
    }else{
      if (userWithdrawChecking > totalCheckingValue) { //Checks for need to overdraft from savings

        var overDraw = (userWithdrawChecking - totalCheckingValue)

          if (overDraw > totalSavingsValue) {
            alert("Cannot draw from savings account due to insufficient funds, you are broke") //error if overdraft greater than both accounts
          }else {
            alert("Overdraft warning: You are withdrawing $" + userWithdrawChecking + " However, there is only $" + totalCheckingValue +
            " available in Checking Account. Drafting $" + overDraw + " from Savings to Checking")
        totalSavingsValue = totalSavingsValue - overDraw             //overdraft from savings if sufficient funds available
        totalCheckingValue = totalCheckingValue + overDraw
         savings.Balance.text("$" + totalSavingsValue)
         savingsBalanceCheck()
         checking.Balance.text("$" + totalCheckingValue)
         checkingBalanceCheck()
       }
     }else {
        totalCheckingValue = totalCheckingValue - userWithdrawChecking //Procedure if there are sufficient funds and no need for overdraft
        checking.Balance.text("$" + totalCheckingValue)
        checkingBalanceCheck()
    }
  }
}
      checking.WithdrawButton.on("click",withdrawChecking);


  function depositSavings() {  //Deposit Button for Savings
        var userDepositSavings = parseInt(savings.Input.val())
        if (isNaN(userDepositSavings)) { //prevents input of NaN
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
        if (isNaN(userWithdrawSavings)) { //prevents input of NaN
          alert("Deposit amount not accepted, please insert a number without special characters i.e (1000)");
        }else{
          if (userWithdrawSavings > totalSavingsValue) { //prevents savings account from going negative
            alert(" Insufficent funds in savings account. Overdraft from checking to savings is not permitted as per 12 CFR 205.17")
          }else{
            totalSavingsValue = totalSavingsValue - userWithdrawSavings
            savings.Balance.text("$" + totalSavingsValue)
            savingsBalanceCheck()
          }
      }
          savings.WithdrawButton.on("click",withdrawSavings);


//Fix issue with comma inputs


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
