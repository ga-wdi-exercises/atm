$(document).ready(function(){});

// Test jQuery is working
// Make the <body>'s background color turn red
//
// $("body").css("background-color", "red")

// Add a click listener to the checking account's "Deposit" button
// When you click the button it should console.log("hello")
//
var depositChecking = $("#depositChecking")
var withdrawChecking = $("#withdrawChecking")
var depositSavings = $("#depositSavings")
var withdrawSavings = $("#withdrawSavings")

function sayHello() {
  console.log("hello");
}
function sayGoodbye() {
  console.log("goodbye")
}
function sayHowdy() {
  console.log("howdy")
}
function sayLater() {
  console.log("later")
}
depositChecking.on("click", sayHello)
withdrawChecking.on("click", sayGoodbye)
depositSavings.on("click", sayHowdy)
withdrawSavings.on("click", sayLater)



// $("#depositChecking").on("click", function(){
//    var deposit = parseInt($("#inputChecking").val())
//  })


$("#depositChecking").on("click", function(){
  var deposit = parseInt($("#inputChecking").val())
  var balance = parseInt($(".checking.balance").html().replace("$", ""))
  var newBalance = "$" + (balance + deposit)
  $(".checking.balance").html(newBalance)
})


// On clicking "Deposit", it should get the user input
// Just console.log it
// You can save some time by hard-coding a value into the input box: <input value="something" />. That way you don't need to type stuff in all the time to test it.
//
// On clicking "Deposit", it should update the "balance" with the user input
// Just make the user input show up. Don't worry about actually keeping track of a balance yet.
//
// On "Deposit", it should get the current "balance"
// How can you get the content of the "balance" element?
// The content has a $ at the beginning of it, so Javascript will read it as text rather than as a number. How can you convert this text into a number?
//
// On "Deposit", it updates the balance
// Now add the user input to the balance, and make it show up in the "balance" element
//
// On "Withdraw", it updates the balance
// Follow the same steps as before, except you're subtracting instead of adding
//
// Refactor the existing code
// Challenge: Try to have no function() that's longer than 5 lines.
