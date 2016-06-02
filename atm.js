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
  var balance = parseInt($("#checking .balance").text().replace("$", ""))
  var updatedBalance = ("$") + (balance - withdraw)
  $("#checking .balance").text(updatedBalance)
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
