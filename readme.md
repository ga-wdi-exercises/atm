# ATM application

We're going to build an application to track checking and savings account balances.

## Pseudocode

Spend up to 20 minutes to write some pseudocode for the lab. Think carefully about every step involved in using an ATM. For example, it allows users to input a dollar amount when they want deposit money. Also, think about how there are two types of accounts -- checking and savings. Take a look at the **Specifications** below to guide your pseudo.

Include your pseudocode as comments within your program.

## Specifications

1. Users can deposit money into one of the bank accounts
- Users can withdraw money from one of the bank accounts
- Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
- The color of a bank account should reflect its balance. (There's a CSS class called `.zero` already written for this.)
- You may edit the HTML file (but might not need to).

## Commits to Make (Suggested)

By no means do you have to follow this. It's just here to help you get started if needed.

Note that these commits are all for the checking account only. Take this one account at a time.

1. Test jQuery is working
  - Make the `<body>`'s background color turn red
- Add a click listener to the **checking account's** "Deposit" button
  - When you click the button it should `console.log("hello")`
- On clicking "Deposit", it should get the user input
  - Just `console.log` it
  - You can save some time by hard-coding a value into the input box: `<input value="something" />`. That way you don't need to type stuff in all the time to test it.
- On clicking "Deposit", it should update the "balance" with the user input
  - Just make the user input show up. Don't worry about actually keeping track of a balance yet.
- On "Deposit", it should get the current "balance"
  - How can you get the content of the "balance" element?
  - The content has a `$` at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
- On "Deposit", it updates the balance
  - Now add the user input to the balance, and make it show up in the "balance" element
- On "Withdraw", it updates the balance
  - Follow the same steps as before, except you're subtracting instead of adding
- Refactor the existing code
  - Challenge: Try to have no `function()` that's longer than 5 lines. ([Sandi Metz's Rule 2](https://robots.thoughtbot.com/sandi-metz-rules-for-developers#the-rules))

...then follow the same series of commits, but for the **savings account**.

## Bonuses

### Overdraft Protection

What happens when the user wants to withdraw more money from the checking account than is in the account?
- If a withdrawal can be covered by the balances in both accounts, bring the withdrawn-from account down to $0 and take the remainder from the other account.
- If the withdrawn amount is more than the combined account balance, display an error.
