function withdrawal(currentBalance, withdrawalAmount) {

  // Determine what the balance will be if the withdrawal completes
  var newBalance = currentBalance - withdrawalAmount;

  // If there would be positive or zero, return the new balance
  if (newBalance >= 0) {
    return newBalance;
  }
  // If the balance would be negative, refuse the transaction
  // and return the unchanged balance
  else {
    return currentBalance;
  }

}

function deposit(currentBalance, depositAmount) {
  // If the user wanrs to put money in the bank, add it to balance.
  // For the scope of this project, it's sim\ple addition.

  return currentBalance + depositAmount;

}

$(document).ready(function(){


}
);
