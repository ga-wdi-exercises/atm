$(document).ready(function(){
  // checking deposit
  $("#checkingDeposit").on("click", function(){
    var deposit = parseInt($("#checkingInput").val())
    var balance = parseInt($(".checking.balance").text().replace("$", ""))
    var newBalance = "$" + (balance + deposit)
    $(".checking.balance").text(newBalance)
  })

  // checking withdrawal /w overdraft protection
  $("#checkingWithdraw").on("click", function(){
    var withdraw = parseInt($("#checkingInput").val())
    var checkingBalance = parseInt($(".checking.balance").text().replace("$", ""))
    var savingsBalance = parseInt($(".savings.balance").text().replace("$", ""))
    var totalBalance = checkingBalance + savingsBalance
    if((checkingBalance - withdraw) > 0){
      var newBalance = "$" + (checkingBalance - withdraw)
      $(".checking.balance").text(newBalance)
    }
    else if((totalBalance - withdraw) > 0){
      var overDraft = withdraw - checkingBalance
      $(".checking.balance").text("$0")
      var newSavingsBalance = "$" + (savingsBalance - overDraft)
      $(".savings.balance").text(newSavingsBalance)
    }
  })

  // savings deposit
  $("#savingsDeposit").on("click", function(){
    var deposit = parseInt($("#savingsInput").val())
    var balance = parseInt($(".savings.balance").text().replace("$", ""))
    var newBalance = "$" + (balance + deposit)
    $(".savings.balance").text(newBalance)
  })

  // savings withdraw
  $("#savingsWithdraw").on("click", function(){
    var withdraw = parseInt($("#savingsInput").val())
    var savingsBalance = parseInt($(".savings.balance").text().replace("$", ""))
    if((savingsBalance - withdraw) > 0){
      var newBalance = "$" + (savingsBalance - withdraw)
      $(".savings.balance").text(newBalance)
    }
  })
})
