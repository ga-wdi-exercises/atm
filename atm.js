$(document).ready(function () {
  console.log("I put a console.log in your console so you can console while you console.");

// document.getElementById("checkingDeposit").addEventListener("click", function(){
//   var deposit = parseInt(document.getElementById("checkingInput").innerHTML())
//   var balance = parseInt(document.getElementById("checkingBalance").innerHTML().replace("$", ""));
//   var newBalance = "$" + (balance + deposit);
//   document.getElementById("checkingBalance").innerHTML = newBalance;
// })

  $("#checkingDeposit").on("click", function(){
    var deposit = parseInt($("#checkingInput").val())
    var balance = parseInt($(".checking.balance").text().replace("$", ""))
    var newBalance = "$" + (balance + deposit)
    $(".checking.balance").text(newBalance)
  })

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
})
