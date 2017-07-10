/* global $ */
$(document).ready(function () {
  var checkingBalance = $('#checking .balance')
  var savingsBalance = $('#savings .balance')
  var checkButtonDep = $('#checking .deposit')
  var saveButtonDep = $('#savings .deposit')
  var checkButtonWit = $('#checking .withdraw')
  var saveButtonWit = $('#savings .withdraw')
  var checkInput = $('#checking .input')
  var saveInput = $('#savings .input')
  var checkingStyle = $('#checking')
  var savingsStyle = $('#savings')

  checkButtonDep.on('click', checkingDeposit)
  checkButtonWit.on('click', checkingWithdraw)
  saveButtonDep.on('click', savingsDeposit)
  saveButtonWit.on('click', savingsWithdraw)

  function checkingWithdraw () {
    currentBalance = parseInt(checkingBalance.text().replace('$', ' '))
    inputVal = parseInt(checkInput.val())
    if (currentBalance - inputVal >= 0) {
      checkingBalance.text('$' + (currentBalance - inputVal))
    } else { alert('Insufficent funds') }
    currentBalance = parseInt(checkingBalance.text().replace('$', ' '))
    if (currentBalance === 0) {
      console.log('hi')
      checkingStyle.addClass('zero')
    }
  }

  function checkingDeposit () {
    currentBalance = parseInt(checkingBalance.text().replace('$', ' '))
    inputVal = parseInt(checkInput.val())
    checkingBalance.text('$' + (currentBalance + inputVal))
    currentBalance = parseInt(checkingBalance.text().replace('$', ' '))
    if (currentBalance !== 0) {
      console.log('hi')
      checkingStyle.removeClass('zero')
    }
  }

  function savingsWithdraw () {
    currentBalance = parseInt(savingsBalance.text().replace('$', ' '))
    inputVal = parseInt(saveInput.val())
    if (currentBalance - inputVal >= 0) {
      savingsBalance.text('$' + (currentBalance - inputVal))
    } else { alert('Insufficent funds') }
    currentBalance = parseInt(savingsBalance.text().replace('$', ' '))
    if (currentBalance === 0) {
      console.log('hi')
      savingsStyle.addClass('zero')
    }
  }
  function savingsDeposit () {
    currentBalance = parseInt(savingsBalance.text().replace('$', ' '))
    inputVal = parseInt(saveInput.val())
    savingsBalance.text('$' + (currentBalance + inputVal))
    currentBalance = parseInt(savingsBalance.text().replace('$', ' '))
    if (currentBalance !== 0) {
      console.log('hi')
      savingsStyle.removeClass('zero')
    }
  }
})
// ## Specifications
//
// 1. Users can deposit money into one of the bank accounts
// - Users can withdraw money from one of the bank accounts
// - Make sure the balance in an account can't go negative. If a user tries to withdraw more money than exists in the account, ignore the transaction.
// - The color of a bank account should reflect its balance. (There's a CSS class called `.zero` already written for this.)
// - You may edit the HTML file (but might not need to).
//
// ## Commits to Make (Suggested)
//
// By no means do you have to follow this. It's just here to help you get started if needed.
//
// Note that these commits are all for the checking account only. Take this one account at a time.
//
// 1. Test jQuery is working
//   - Make the `<body>`'s background color turn red
// - Add a click listener to the **checking account's** "Deposit" button
//   - When you click the button it should `console.log("hello")`
// - On clicking "Deposit", it should get the user input
//   - Just `console.log` it
//   - You can save some time by hard-coding a value into the input box: `<input value="something" />`. That way you don't need to type stuff in all the time to test it.
// - On clicking "Deposit", it should update the "balance" with the user input
//   - Just make the user input show up. Don't worry about actually keeping track of a balance yet.
// - On "Deposit", it should get the current "balance"
//   - How can you get the content of the "balance" element?
//   - The content has a `$` at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
// - On "Deposit", it updates the balance
//   - Now add the user input to the balance, and make it show up in the "balance" element
// - On "Withdraw", it updates the balance
//   - Follow the same steps as before, except you're subtracting instead of adding
// - Refactor the existing code
//   - Challenge: Try to have no `function()` that's longer than 5 lines. ([Sandi Metz's Rule 2](https://robots.thoughtbot.com/sandi-metz-rules-for-developers#the-rules))
//
// ...then follow the same series of commits, but for the **savings account**.
