# ATM application

We're going to build an application to track checking and savings account balances.

## But first... Pseudocode (20 min)

Let's take 20 minutes to write some pseudocode for the lab. Think carefully about every step involved in using an ATM. For example, it allows users to input a dollar amount when they want deposit money. Also, think about how there are two types of accounts--checking and savings. Take a look at the **Specifications** below to guide your pseudo.

##### Put your pseudocode into comments within your program, **this will factor into your lab's "grade."**

## ...and then Peer Review (10 min)

Take some time to review a peer's pseudo and add suggestions to improve your partner's pseudocode.

## Specifications


  - Challenge: Try to have no `function()` that's longer than 5 lines. ([Sandi Metz's Rule 2](https://robots.thoughtbot.com/sandi-metz-rules-for-developers#the-rules))


## Bonus: Overdraft Protection

- What happens when the user wants to withdraw more money from the checking account than is in the account?
  - If a withdrawal can be covered by the balances in both accounts, bring the withdrawn-from account down to $0 and take the remainder from the other account.
  - If the withdrawn amount is more than the combined account balance, display an error.
