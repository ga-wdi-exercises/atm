$(document).ready(function(){
})

//checking
$("#checking .deposit").click(function(){
  var deposit = parseInt($("#checking .input").val())
  var balance = parseInt($("#checking .balance").text().replace("$", ""))
  var updatedBalance = ("$") + (balance + deposit)
  $("#checking .balance").text(updatedBalance)
})

$("#checking .withdraw").click(function(){
  var withdraw = parseInt($("#checking .input").val())
  var checkingBalance = parseInt($("#checking .balance").text().replace("$", ""))
  //var balance = parseInt($("#checking .balance").text().replace("$", ""))
  var updatedCheckingBalance = ("$") + (checkingBalance - withdraw)
  $("#checking .balance").text(updatedCheckingBalance)


  //var savingsBalance = parseInt($("#savings .balance").text().replace("$", ""))
  //var totalBalance = ("$") + (updatedCheckingBalance + savingsBalance)
  //if (withdraw > checkingBalance)
  //var remainder =


  if (withdraw > checkingBalance)
  alert("Error!! You don't have enough funds in this account!!")

})



//savings
$("#savings .deposit").click(function(){
  var deposit = parseInt($("#savings .input").val())
  var balance = parseInt($("#savings .balance").text().replace("$", ""))
  var updatedBalance = ("$") + (balance + deposit)
  $("#savings .balance").text(updatedBalance)
})

$("#savings .withdraw").click(function(){
  var withdraw = parseInt($("#savings .input").val())
  var balance = parseInt($("#savings .balance").text().replace("$", ""))
  var updatedBalance = ("$") + (balance - withdraw)
  $("#savings .balance").text(updatedBalance)
})

//overdraft


//....


//if input < checkingBalance, then
//  checkingBalance = checkingBalance - input
//otherwise if input > checkingBalance, then
//remainder = input - checkingBalance
//if remainder > savingsBalance, then
//"Error! Can't withdraw that much"
//otherwise
//checkingBalance = 0
//savingsBalance = savingsBalance - remainder
