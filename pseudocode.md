ATM PSEUDOCODE

1. Create a number variable (“checkingBalance” or “savingsBalance) from the value of the HTML “balance” element
  1. use a .split to crop out the $ and only pull down the numbers, then parse to float
2. Enter a number into the input field of the account you want to use
3. Click either Deposit or Withdraw
  1. store value from Input in a variable, “depositAmount” or “withdrawAmount”
2. if amount variable is greater than the value variable, clear the input field, end the function, and do nothing
3. If amunt variable is NaN, clear the input field, end the function and do nothing
4. if Withdrawn, subtract the withdrawAmount from the Balance variable and store as “newCheckingBalance” or “newSavingsBalance”
  1. use .toFixed(2) to shorten to two decimal places
  2. update the HTML on the page to reflect the new balance
5. If Deposited, add depositAmount to the Balance variable and store as “newCheckingBalance” or “newSavingsBalance”
  1. use .toFixed(2) to shorten to two decimal places
  2. update the HTML on the page to reflect the new balance
6. Clear the input field
7. If account’s value is 0, change color to Red


OVERDRAFT FUNCTIONALITY
1. Keep track of a larger variable of both accounts added together
2. Trigger function if user tries to withdraw more than an account has
3. Check if both combined accounts have enough, continue if so
  1. Subtract the amount in the first account from the amount the user’s trying to withdraw
  2. Subtract that new variable from the second account
  3. Subtract everything from the first accounts
  4. Update the HTML to reflect the new balances
  5. Clear the input fields
  6. If account’s value is 0, change color to Red
