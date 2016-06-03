function withdrawal(currentBalance, withdrawalAmount) {

  // Determine what the balance will be if the withdrawal completes
  return currentBalance - withdrawalAmount;


}

function deposit(currentBalance, depositAmount) {
  // If the user wanrs to put money in the bank, add it to balance.
  // For the scope of this project, it's sim\ple addition.

  return currentBalance + depositAmount;

}

function overdraftWithdrawal(currentBalance, withdrawalAmount, backupBalance) {
  // Execute a withdrawal with overdraft protection.
  // This will return an array of two values,

  // Attempt to perform a normal withdrawal.
  var newBalance = withdrawal(currentBalance, withdrawalAmount);
  console.log(currentBalance, withdrawalAmount, backupBalance);
  // If the normal withdrawal was successful, we don't need to worry about
  // overdraft protection. Just return the result of a normal withdrawal and the
  // unchanged backup account balance.
  if ( newBalance > 0 ) {
    return [newBalance, backupBalance];
  } else {
    newBalance = 0;
    withdrawalAmount -= currentBalance;
    if (backupBalance >= withdrawalAmount) {
      return [0, backupBalance - withdrawalAmount];
    } else {
      return [currentBalance,backupBalance];
    }
  }

}

$(document).ready(function(){
  // checking deposit
  $("#checkingdeposit").on("click", function(){
    var cdeposit = parseInt($("#checkinginput").val());
    var cbalance = parseInt($("#checkingbalance").text().replace("$", ""));
    var cnewBalance = deposit(cbalance,cdeposit);
    $("#checkingbalance").text("$" + cnewBalance);
  })

  // checking withdrawal /w overdraft protection
  $("#checkingwithdrawal").on("click", function(){
    var withdraw = parseInt($("#checkinginput").val());
    var checkingBalance = parseInt($("#checkingbalance").text().replace("$", ""));
    var savingsBalance = parseInt($("#savingsbalance").text().replace("$", ""));
    [checkingBalance,savingsBalance] =
      overdraftWithdrawal(checkingBalance, withdraw, savingsBalance);
    $("#checkingbalance").text("$" + checkingBalance);
    $("#savingsbalance").text("$" + savingsBalance);
  })
  // savings deposit
  $("#savingsdeposit").on("click", function(){
    var sdeposit = parseInt($("#savingsinput").val());
    var sbalance = parseInt($("#savingsbalance").text().replace("$", ""));
    var snewBalance = deposit(sbalance,sdeposit);
    $("#savingsbalance").text("$" + snewBalance);
  })

  // savings withdraw with overdraft protection
  $("#savingsWithdraw").on("click", function(){
    var withdraw = parseInt($("#savingsInput").val());
    var checkingBalance = parseInt($("#checkingbalance").text().replace("$", ""));
    var savingsBalance = parseInt($("#savingsbalance").text().replace("$", ""));
    [savingsBalance,checkingBalance] =
      overdraftWithdrawal(savingsBalance, withdraw, checkingBalance);
    $("#checkingbalance").text("$" + checkingBalance);
    $("#savingsbalance").text("$" + savingsBalance);
  })
})
