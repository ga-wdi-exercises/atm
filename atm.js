$(document).ready(function(){

// $(".account").removeClass("zero");

//user types in dollar amount and clicks Deposit or Withdraw
//if Deposit is clicked amount typed in is added to account

$("#checking .deposit").on("click", function(){
var deposit = parseInt($("#checking .input").val())
var checkingBalance = parseInt($("#checking .balance").html().replace("$", ""))
  $("#checking .balance").html("$" + (deposit + checkingBalance))
})

//if Withdraw is clicked balance of account is checked for sufficient funds
//if sufficient funds allow withdraw
//if amount typed in is not available in account give user an error message

$("#checking .withdraw").on("click", function(){
  // console.log("step two")
  var withdrawValue = $("#checking .input").val()
  var newWithdrawValue = withdrawValue.replace("$", "")
  var wValue = parseInt(newWithdrawValue)
  // console.log(wValue)

  var currentBalance = $("#checking .balance").html()
  var noDollarCurrent = currentBalance.replace("$", "")
  var newCurrentBalance = parseInt(noDollarCurrent)
  // console.log(newCurrentBalance)

  if ((newCurrentBalance - wValue) >= 0) {
    $("#checking .balance").html("$" + (newCurrentBalance - wValue))
    // console.log(typeof newCurrentBalance)
  } else {
    alert("insufficient funds")
  }
})

$("#savings .deposit").on("click", function(){
  var inputValue = $("#savings .input").val()
  var newInputValue = inputValue.replace("$", "")
  var iValue = parseInt(newInputValue)

  var currentBalance = $("#savings .balance").html()
  var noDollarCurrent = currentBalance.replace("$", "")
  newCurrentBalance = parseInt(noDollarCurrent)

  $("#savings .balance").html("$" + (+iValue + +newCurrentBalance))
})

$("#savings .withdraw").on("click", function(){
  var withdrawValue = $("#savings .input").val()
  var newWithdrawValue = withdrawValue.replace("$", "")
  var wValue = parseInt(newWithdrawValue)

  var currentBalance = $("#checking .balance").html()
  var noDollarCurrent = currentBalance.replace("$", "")
  var newCurrentBalance = parseInt(noDollarCurrent)

  // if ((newCurrentBalance - wValue) >= 0) {
  //   $("#savings .balance").html("$" + (newCurrentBalance - wValue))
  // } else {
  //   alert("insufficient funds")
  // }

  if ((newCurrentBalance - wValue) >= 0) {
    $("#savings .balance").html("$" + (newCurrentBalance - wValue))
    // console.log(typeof newCurrentBalance)
  } else {
    alert("insufficient funds")
  }

})
//if account balance is zero turn .zero red
// function inTheRed() {
//   var redNumber = $(".balance").text()
//   if (redNumber == "$0") {
//     $(".account").addClass("zero")
// }
// }

});
