$(document).ready(function(){

  checkingAmount = $("#checkingBalance");
  savingAmount = $("#savingBalance");
  checkingDeposit = $(".checkingDeposit");
  checkingWithdraw = $(".checkingWithdraw");
  savingsDeposit = $(".savingDeposit");
  savingWithdraw = $(".savingWithdraw");


  // deposit checking
  checkingDeposit.on("click", function (){
    console.log("work")
  })




  // withdraw checking
  checkingWithdraw.on("click", function (){
    console.log("work")

  })




  // deposit saving
  savingDeposit.on("click", function (){
    console.log("work")
  })


  // withdraw saving
  savingWithdraw.on("click", function(){
    console.log("work")
  })




// this is for closing document.ready
})








// $(document).ready(function(){
//
//   // deposit checking money using deposit butoon
//   $(".checkingDepositButton").on("click", function(){
//     console.log("I clicked the deposit button")
//     var deposit = parseFloat($("balance.checking").val());
//     var balance = $("#checking_balance").text()
//     balance = parseFloat(balance.replace("$",""))
//     var newBalance = deposit + balance
//     $("#checking_balance").text("$" + newBalance)
//   })
//
//
//
//
// //   // withdraw checking money using withdraw button
//   $(".checkingWithdrawButton").on("click", function(){
//     console.log("I clicked the withdraw button")
//     var withdraw = parseInt((".checkingInput").val())
//     var balance = $("#checking_balance").text()
//     balance = parseInt(balance.replace("$",""))
//     var newBalance = withdraw + balance
//     $("#checking_balance").text("$" + newBalance)
//   })
//
//   // deposit saving money using deposit button
//   $(".savingDepositButton").on("click", function(){
//     console.log("I clicked the deposit button")
//     var deposit = parseInt((".savingInput").val())
//     var balance = $("#saving_balance").text()
//     balance = parseInt(balance.replace("$",""))
//     var newBalance = depsoit + balance
//     $("#saving_balance").text("$" + newBalance)
//   })
//
//   // withdraw saving money using withdraw button
//   $(".savingWithdrawButton").on("click", function(){
//     console.log("I clicked the withdraw button")
//     var withdraw = parseInt((".savingInput").val())
//     var balance = $("#saving_balance").text()
//     balance = parseInt(balance.replace("$",""))
//     var newBalance = withdraw + balance
//     $("#saving_balance").text("$" + newBalance)
//   })
//
// // this is for closing document ready()
