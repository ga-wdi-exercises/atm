

//in the Checking console, when a client enters an amount, convert the amount to a number
//(i.e. remove the $ if it was included). Wait to see which button the client presses.
//If the client presses the "withdrawal" button, then deduct that amount from the original balance
//and put the new total in the window that shows the balance. If the client presses the "deposit" button, //then add the amount to the original balance and show the new balance in the window.

//in the Savings console, when a client enters an amount, wait to see which button the client presses.
//If the client presses the "withdrawal" button, then deduct that amount from the original balance
//and put the new total in the window that shows the current balance. If the client presses the "deposit"
//button, then add the deposited amount to the original balance. This is now the original balance
//and should be reflected in the block.

//FOR OVERDRAFT PROTECTION (BONUS FEATURE):
//if the client has overdraft protection, then check to see if the original balance has enough money
//to cover the amount. If there is not enough money, then check the other account to see if the other
//account and the current account have enough money.
//If there is not enough money in both accounts, then ignore the withdrawal.
//this should work for both accounts.

$(document).ready(function(){  //we are ready and waiting to see what button is pressed.
  $(".checkingDepositButton").on("click", function(){ //when client clicks the checking deposit button...
    var checkingDeposit = parseInt($(".checkingInput").val()) //turn the string entered into a number.
    var checkingBalance = parseInt($(".checking.balance").text().replace("$", "")) //replace the $ with ""
    var newCheckingBalance = "$" + (checkingBalance + checkingDeposit) //newbalance is old balance + deposit
    $(".checking.balance").text(newCheckingBalance) //put new balance in .checking.balance location.
    }
  )
  $(".checkingWithdrawalButton").on("click", function(){ //if checking withdrawal button pressed.
    var checkingWithdrawal = parseInt($(".checkingInput").val())
    var checkingBalance = parseInt($(".checking.balance").text().replace("$", ""))
    var newCheckingBalance = "$" + (checkingBalance - checkingWithdrawal)
    $(".checking.balance").text(newCheckingBalance)
      if (newCheckingBalance < 0); //if balance is < 0, set to red.
        $("div.account").eq(0).css("background-color", "#F52F4F");
    }
  )
  $(".savingsDepositButton").on("click", function(){
    var savingsDeposit = parseInt($(".savingsInput").val())
    var savingsBalance = parseInt($(".savings.balance").text().replace("$", ""))
    var newSavingsBalance = "$" + (savingsBalance + savingsDeposit)
    $(".savings.balance").text(newSavingsBalance)
    }
  )
  $(".savingsWithdrawalButton").on("click", function(){
    var savingsWithdrawal = parseInt($(".savingsInput").val())
    var savingsBalance = parseInt($(".savings.balance").text().replace("$", ""))
    var newSavingsBalance = "$" + (savingsBalance -savingsWithdrawal)
    $(".savings.balance").text(newSavingsBalance)
      if (newSavingsBalance < 0);
        $("div.account").eq(1).css("background-color", "#F52F4F")
    }
  )
})
