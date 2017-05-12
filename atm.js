$(document).ready(function(){
 //DEPOSIT MONEY FROM CHECKING



  var checkingDeposit = $("#checking .deposit")
  var savingsDeposit = $(“#savings .deposit”)


  checkingDeposit.on("click", function(){


    var checkingUserInput = $("#checking .input").val()
    console.log("This is the user input:" + checkingUserInput)

     create a variable that stores "checking"‘s balance(in this exercise = $0)
    var checkingOutputBalance = $("#checking .balance")


    checkingBalance += parseInt(checkingUserInput)
    console.log("This is the checking balance " + checkingBalance)

     display "$" + "checkingBalance" ($0, or whatever user inputs in our balance ("outputBalance"))
    checkingOutputBalance.text("$" + checkingBalance);
  })





 var checkingDeposit = $(".withdraw")


 checkingDeposit.on("click", function() {


 var checkingUserInput = $("#checking .input").val()
 console.log("This is the user input:" + checkingUserInput);


 var checkingOutputBalance = $("#checking .balance")


 checkingBalance -= parseInt(checkingUserInput)
 console.log("This is the checking balance " + checkingBalance);

 checkingOutputBalance.text("$" + checkingBalance);




 var savingsDeposit = $("#savings .deposit")

 savingsDeposit.on("click", function() {

 var savingsUserInput = $("#savings .input").val()
 console.log("This is the user input:" + savingsUserInput);

 var savingsOutputBalance = $("#savings .balance")

 checkingBalance += parseInt(savingsUserInput)
 console.log("This is the savings balance:" + checkingBalance);

 savingsOutputBalance.text("$" + checkingBalance);


 var savingsWithdraw = $("#savings .withdraw")

 savingsWithdraw.on("click", function() {

 var savingsUserInput = $("#savings .input").val()
 console.log("This is the user input:" + savingsUserInput);

 var savingsOutputBalance = $("#savings .balance")

 checkingBalance -= parseInt(savingsUserInput)
 console.log("This is the savings balance:" + checkingBalance);

 savingsOutputBalance.text("$" + checkingBalance);
 })


})









// $(document).ready(function(){
//
// // Store checking account balance in variable (starts at 0)
// var checkingBalance = 0
//
// //deposit checking
//
// var deposit = $(".deposit")
//
// deposit.on("click", function(){
//
//   var checkingDeposit = $("#checking .input").val()
//
//   console.log("This is the user input:" + checkingDeposit)
//   var outputBalance = $("#checking .balance")
//
//   checkingBalance += parseInt(checkingDeposit)
//   console.log("This is the checking balance " + checkingBalance)
//
//   outputBalance.text("$" + checkingBalance);
// })
//
// //withdrawl checking
//
// var withdrawal = $(".withdraw")
//
// withdrawal.on("click", function() {
//
// var userInput = $("#checking .input").val()
//
// var outputBalance = $("#checking .balance")
//
//
// checkingBalance -= parseInt(userInput)
// outputBalance.text("$" + checkingBalance);
//  })

//deposit saving

// deposit.on("click", function(){
//   var savingDeposit = $("#saving .input").val()
//   var outputsaving = $("$saving .balance")
// outputsaving.text("$" + )
//   console.log("this is the user input:" + savingDeposit)
//
//
// })
//
// withdrawl.on("click", function(){
//   var savingwithdrawl = $("$saving .input")
//
//   savingBalance -= parseInt(savingwithdrawl)
//  outputsaving.text("$" + savingBalance)
//  console.log("this is the user input:" + savingwithdrawl)
//
// })
//
// });
