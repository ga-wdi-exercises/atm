$(document).ready(function(){

    $(".checkDepBtn").on("click", function(){
      var deposit = parseInt($(".checkEntry").val());
      var balance = $("#checkDisplay").text()
      balance = parseInt(balance.replace("$", ""))
      var checkingBalance = (deposit + balance)
      $("#checkDisplay").text("$" + checkingBalance)
    })

    $(".checkWdrwBtn").on("click", function(){
      var withdrawal = parseInt($(".checkEntry").val())
      var balance = $("#checkDisplay").text()
      balance = parseInt(balance.replace("$", ""))
      var checkingBalance = (balance - withdrawal)
        if (checkingBalance >= 0) {
          if (checkingBalance !== 0) {
            $("#checkDisplay").text("$" + checkingBalance)
            }
          else {
            $("#checkDisplay").text("$" + checkingBalance)
            $("#checkDisplay").css("background-color", "#F52F4F");
          }
        }
      })

      $(".saveDepBtn").on("click", function(){
        var deposit = parseInt($(".saveEntry").val());
        var balance = $("#saveDisplay").text()
        balance = parseInt(balance.replace("$", ""))
        var savingsBalance = (deposit + balance)
        $("#saveDisplay").text("$" + savingsBalance)
      })

      $(".saveWdrwBtn").on("click", function(){
        var withdrawal = parseInt($(".saveEntry").val())
        var balance = $("#saveDisplay").text()
        balance = parseInt(balance.replace("$", ""))
        var savingsBalance = (balance - withdrawal)
          if (savingsBalance >= 0) {
            if (savingsBalance !== 0) {
              $("#saveDisplay").text("$" + savingsBalance)
              }
            else {
              $("#saveDisplay").text("$" + savingsBalance)
              $("#saveDisplay").css("background-color", "#F52F4F");
            }
          }
        })
})



//variables:
//amountCheckingForm = value typed in "enter an amount" form of "Checking"
//amountSavingsForm = value typed in "enter an amount" form of "Savings"
//depositCheckingButton = "Deposit" button on "Checking" div
//withdrawCheckingButton = "Withdraw" button on "Checking" div
//depositSavingsButton = "Deposit" button on "Savings" div
//withdrawSavingsButton = "Withdraw" button on "Savings" div
//balanceChecking = display of balance in "Checking"
//balanceSavings = display of balance in "Savings"
//zeroBalanceChecking = diplay red if "Checking" balance === 0
//zeroBalanceSavings = diplay red if "Savings" balance === 0

//functions:
//listen for clicks on depositCheckingButton
//listen for clicks on withdrawCheckingButton
//listen for clicks on depositSavingsButton
//listen for clicks on withdrawSavingsButton
//convert value = deposit and withdrawal - from inputForm to
//      usable value in logic (.val(), parseInt?)
//checkingBalance = calculating value of current balance in "Checking"
//  if click on deposit button, add value to current checking balance
//  then display new balance
//  if click on withdrawal button,
//savingsBalance = calculating value of current balance in "Savings"
//no transaction = when transaction amount would send balance below zero in
//     in either account, including with overdraft protection

//overdraft mechanism for Checking and Savings
// = if transaction would send active account below zero,
//    and if it would send inactive account balance below zero,
//    don't transact; else if inactive account has sufficient balance to
//    cover active account transaction, adjust active account balance to
//    zero and take away difference of transaction from inactive account
//    and adjust inactive account balance.
