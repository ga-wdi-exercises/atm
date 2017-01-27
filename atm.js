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


// my Objects
var accounts = {
    checking: {
        input: $("#checking .input"),
        balance: 0,
        screenBalance: $("#checking .balance"),
        deposit: $("#checking .deposit"),
        withdraw: $("#checking .withdraw")
    },
    savings: {
        input: $("#savings .input"),
        balance: 0,    
        screenBalance: $("#savings .balance"),
        deposit: $("#savings .deposit"),
        withdraw: $("#savings .withdraw")
    }
}


// event listeners (still seems like a lot of duplicate code)
accounts.checking.deposit.on("click", function(){
    var checkingInput = accounts.checking.input.val()
    var change = parseInt(checkingInput)
    accounts.checking.balance = accounts.checking.balance + change
    accounts.checking.screenBalance.text("$" + accounts.checking.balance)
})
accounts.checking.withdraw.on("click", function(){
    var checkingInput = accounts.checking.input.val()
    var change = parseInt(checkingInput)
    accounts.checking.balance = accounts.checking.balance - change
    accounts.checking.screenBalance.text("$" + accounts.checking.balance)
    checkingOverdrawn()
})

accounts.savings.deposit.on("click", function(){
    var savingsInput = accounts.savings.input.val()
    var change = parseInt(savingsInput)
    accounts.savings.balance = accounts.savings.balance + change
    accounts.savings.screenBalance.text("$" + accounts.savings.balance)
})
accounts.savings.withdraw.on("click", function(){
    var savingsInput = accounts.savings.input.val()
    var change = parseInt(savingsInput)
    accounts.savings.balance = accounts.savings.balance - change
    accounts.savings.screenBalance.text("$" + accounts.savings.balance)
    savingsOverdrawn()
})


function savingsOverdrawn(){
    if (accounts.savings.balance < 0){
        $("#savings.account").addClass("zero")
    }
} 
function checkingOverdrawn(){   
    if (accounts.checking.balance < 0){
        $("#checking.account").addClass("zero")
    }
}
