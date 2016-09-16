/* 
   Boil the ocean one ounce at a time.
   This ATM allows a user to deposit and withdraw money
   user chooses to deposit into Checking or Savings by clicking into input
   field. Event is triggered!!!
   user can now set the dollar amount by typing in a number value.
   user chooses to deposit or withdraw
   balance is stored
   balance number window reflects the new value resulting in the user's action
   addition operator
   don't let the user go negative
   checking vs savings and then nested in, depositing vs withdrawing
*/


// variables for Checking
var accounts = {
    checking: {
        input: $("#checking .input"),
        balance: 0,
        screenBalance: $("#checking .balance"),
        deposit: $("#checking .deposit") ,
        withdraw: $("#checking .withdraw")
    }
    savings: {
        input: $("#savings .input"),
        balance: 0,    
        screenBalance: $("#savings .balance")
        deposit: $("#savings .deposit")
        withdraw: $("#savings .withdraw")
    }
}


// variables for Savings (seems like duplicate code)


checking.on("click", function(){
    add("checking")
})


/* 
function add(account) {
    var checkInput = accounts[account].input.val()
    var newBalance = parseInt(checkInput)

    balance = newBalance + balance

    accounts[account].checkingDisplayBalance.text("$" + balance)
}

checkingWithdraw.on("click", subtract)

function subtract() {
    var checkInput = input.val()
    var newBalance = parseInt(checkInput)

    balance = balance - newBalance
    
    checkingDisplayBalance.text("$" + balance)
}
*/

